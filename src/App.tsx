import React, { useEffect, useState } from 'react'
import { TickerMarquesina } from './components/TickerMarquesina'

type EstadoOperacional = {
  id: number
  nombre: string
  descripcion: string
  nivel: 'normal' | 'alerta' | 'critico'
}

const estadosDemo: EstadoOperacional[] = [
  {
    id: 1,
    nombre: 'Inventario',
    descripcion: 'Nivel de stock y rotación por categoría.',
    nivel: 'normal'
  },
  {
    id: 2,
    nombre: 'Ventas',
    descripcion: 'Ritmo de ventas diarias vs objetivo.',
    nivel: 'alerta'
  },
  {
    id: 3,
    nombre: 'Liquidez',
    descripcion: 'Flujo de caja disponible y compromisos.',
    nivel: 'critico'
  }
]

function badgeColor(nivel: EstadoOperacional['nivel']) {
  switch (nivel) {
    case 'normal':
      return 'bg-emerald-500 text-emerald-950'
    case 'alerta':
      return 'bg-amber-400 text-amber-950'
    case 'critico':
      return 'bg-red-500 text-red-50'
    default:
      return 'bg-slate-500 text-slate-950'
  }
}

type TickerGlossaryEntry = {
  label: string
  displayName: string
  category: string
  status: 'up' | 'dn'
  colorClass: string
  valueExample: string
  deltaExample: string
  definition: string
  howToRead: string
  formula: string
  timeScope: string
  notes: string
}

type TickerJsonRoot = {
  tickerGlossary: Record<string, TickerGlossaryEntry>
}

function App() {
  const [showGlossary, setShowGlossary] = useState(false)
  const [glossary, setGlossary] = useState<Record<string, TickerGlossaryEntry>>({})

  useEffect(() => {
    async function loadGlossary() {
      try {
        const res = await fetch('/ticker.json')
        if (!res.ok) return
        const raw = (await res.json()) as TickerJsonRoot[]
        const root = raw[0]
        setGlossary(root?.tickerGlossary ?? {})
      } catch (e) {
        console.error(e)
      }
    }
    loadGlossary()
  }, [])

  const glossaryEntries = Object.values(glossary)

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Marquesina superior alimentada por ticker.json */}
      <TickerMarquesina />

      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold tracking-tight">
              Centro de Estados Operacionales
            </h1>
            <p className="text-xs text-slate-400">
              POC en Vite + React para Retailding
            </p>
          </div>

          {/* Botón para mostrar/ocultar glosario */}
          <button
            type="button"
            onClick={() => setShowGlossary((prev) => !prev)}
            className="text-xs rounded-full border border-slate-700 px-3 py-1 text-slate-300 hover:bg-slate-800 transition-colors"
          >
            {showGlossary ? 'Ocultar glosario' : 'Ver glosario del ticker'}
          </button>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-8 space-y-6">
        {/* Layout responsive: en móvil stack, en xl columnas solo si hay glosario */}
        <div className={showGlossary ? 'grid gap-6 xl:grid-cols-3' : 'grid gap-6'}>
          {/* Columna izquierda: solo se muestra si hay glosario */}
          {showGlossary && (
            <div className="flex flex-col gap-6 xl:col-span-1">
              <div className="bg-[#141f30] border border-slate-800 rounded-xl p-5 shadow-xl flex flex-col max-h-[420px]">
                <h3 className="text-sm font-semibold uppercase text-slate-400 tracking-wider mb-3 flex items-center gap-2 shrink-0">
                  <span className="w-4 h-4 rounded-full bg-emerald-500/40 border border-emerald-400" />
                  Glosario de Indicadores (Ticker)
                </h3>
                <div className="overflow-y-auto pr-1 space-y-4 text-xs">
                  {glossaryEntries.map((entry, index) => (
                    <div
                      key={entry.label}
                      className={index === 0 ? '' : 'border-t border-slate-800/60 pt-2'}
                    >
                      <div className="flex justify-between items-baseline">
                        <span className="font-mono font-bold text-[#c8d8e8]">
                          {entry.label}
                        </span>
                        <span className={`font-mono font-bold ${entry.colorClass}`}>
                          {entry.valueExample}{' '}
                          {entry.deltaExample && (
                            <span className="text-[10px] font-normal ml-1 text-slate-300">
                              {entry.status === 'up' ? '▲' : '▼'} {entry.deltaExample}
                            </span>
                          )}
                        </span>
                      </div>
                      <p className="text-[10px] font-normal text-slate-500 mt-0.5">
                        {entry.displayName}
                      </p>
                      <p className="text-slate-300 mt-1 leading-relaxed text-[11px]">
                        {entry.definition}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Columna del tablero: ocupa 2/3 si hay glosario, 100% si no */}
          <div className={showGlossary ? 'xl:col-span-2 space-y-6' : 'space-y-6'}>
            <div className="grid gap-6 md:grid-cols-3">
              {estadosDemo.map((estado) => (
                <article
                  key={estado.id}
                  className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 shadow-sm hover:border-slate-700 hover:bg-slate-900 transition-colors"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-sm font-semibold">{estado.nombre}</h2>
                    <span
                      className={
                        'text-[10px] uppercase tracking-wide px-2 py-1 rounded-full ' +
                        badgeColor(estado.nivel)
                      }
                    >
                      {estado.nivel}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">{estado.descripcion}</p>
                </article>
              ))}
            </div>

            <div className="rounded-xl border border-dashed border-slate-700 bg-slate-900/50 p-4 text-xs text-slate-400">
              <p className="mb-1">
                Próximo paso: reemplazar{' '}
                <span className="font-semibold">estadosDemo</span> por datos reales
                (JSON, API o Supabase).
              </p>
              <p>
                Desde aquí podemos leer archivos JSON en{' '}
                <span className="font-semibold">public</span>, integrar Power BI
                embebido o consumir datos desde tu motor de KPIs.
              </p>
            </div>
          </div>
        </div>
      </section>   </main>
  )
}

export default App
