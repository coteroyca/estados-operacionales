import React, { useEffect, useState } from 'react'

type TickerItem = {
  id: number
  texto: string
  categoria?: string
  nivel?: 'info' | 'alerta' | 'critico'
}

export function TickerMarquesina() {
  const [items, setItems] = useState<TickerItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadTicker() {
      try {
        const res = await fetch('/ticker.json')
        if (!res.ok) {
          throw new Error('No se pudo cargar ticker.json')
        }
        const data = await res.json()
        setItems(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    loadTicker()
  }, [])

  if (loading) {
    return (
      <div className="w-full border-b border-slate-800 bg-slate-900/80">
        <div className="mx-auto max-w-6xl px-4 py-2 text-xs text-slate-500">
          Cargando estados operacionales…
        </div>
      </div>
    )
  }

  if (!items.length) {
    return null
  }

  return (
    <div className="w-full border-b border-slate-800 bg-slate-900/90">
      <div className="mx-auto max-w-6xl px-4 py-2 overflow-x-hidden">
        <div className="flex gap-6 animate-[marquee_40s_linear_infinite] whitespace-nowrap text-xs">
          {items.map((item) => (
            <span
              key={item.id}
              className="inline-flex items-center gap-2 text-slate-200"
            >
              {item.categoria && (
                <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] uppercase tracking-wide text-slate-400">
                  {item.categoria}
                </span>
              )}
              <span>{item.texto}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
