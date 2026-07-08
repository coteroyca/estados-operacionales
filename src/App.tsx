import React from 'react'

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

function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
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
          <span className="text-xs rounded-full border border-slate-700 px-3 py-1 text-slate-300">
            Demo en Vercel
          </span>
        </div>
      </header>

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
            Desde aquí podemos:
            {' '}
            leer archivos JSON en <span className="font-semibold">public/</span>,
            integrar Power BI embebido o consumir datos desde tu motor de KPIs.
          </p>
        </div>
      </section>
    </main>
  )
}

export default App
