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

// Tipos para el glosario
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

      {/* Panel de glosario expandible */}
      {showGlossary && (
        <section className="mx-auto max-w-6xl px-4 pt-4">
          <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4 text-xs text-slate-300 space-y-3">
            <h2 className="text-sm font-semibold mb-2">
              Glosario de estados del ticker
            </h2>
            {glossaryEntries.map((entry) => (
              <article
                key={entry.label}
                className="border-b border-slate-800 pb-3 last:border-b-0"
              >
                <div className="flex items-center justify-between mb-1">
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 mr-2">
                      {entry.label}
                    </span>
                    <span className="text-xs font-semibold">
                      {entry.displayName}
                    </span>
                  </div>
                  <span className="text-[10px] rounded-full bg-slate-800 px-2 py-0.5 text-slate-400">
                    {entry.category}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 mb-1">
                  <span className="font-semibold">Definición:</span> {entry.definition}
                </p>
                <p className="text-[11px] text-slate-400 mb-1">
                  <span className="font-semibold">Cómo leerlo:</span> {entry.howToRead}
                </p>
                <p className="text-[11px] text-slate-500">
                  <span className="font-semibold">Ejemplo de valor:</span>{' '}
                  {entry.valueExample}
                  {entry.deltaExample && (
                    <span className="ml-1">
                      ({entry.deltaExample})
                    </span>
                  )}
                </p>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-4 py-8 space-y-6">
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
            Próximo paso: reemplazar <span className="font-semibold">estadosDemo</span>{' '}
            por datos reales (JSON, API o Supabase).
          </p>
          <p>
            Desde aquí podemos leer archivos JSON en{' '}
            <span className="font-semibold">public</span>, integrar Power BI embebido
            o consumir datos desde tu motor de KPIs.
          </p>
        </div>
      </section>
    </main>
  )
}

export default App
