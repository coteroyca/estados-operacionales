import React, { useEffect, useState } from 'react'

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

type TickerItem = {
  id: string
  displayName: string
  category: string
  status: 'up' | 'dn'
  colorClass: string
  valueExample: string
  deltaExample: string
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

        const raw = (await res.json()) as TickerJsonRoot[]
        const root = raw[0]

        const glossary = root?.tickerGlossary ?? {}
        const mapped: TickerItem[] = Object.keys(glossary).map((key) => {
          const entry = glossary[key]
          return {
            id: key,
            displayName: entry.displayName,
            category: entry.category,
            status: entry.status,
            colorClass: entry.colorClass,
            valueExample: entry.valueExample,
            deltaExample: entry.deltaExample
          }
        })

        setItems(mapped)
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
          Cargando ticker operativo…
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
        <div className="flex gap-6 animate-marquee whitespace-nowrap text-xs">
          {items.map((item) => (
            <span
              key={item.id}
              className="inline-flex items-center gap-2 text-slate-200"
            >
              <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] uppercase tracking-wide text-slate-400">
                {item.category}
              </span>

              <span className={item.colorClass}>
                {item.displayName}: {item.valueExample}
                {item.deltaExample && (
                  <span className="ml-1 text-slate-400">
                    ({item.deltaExample})
                  </span>
                )}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
