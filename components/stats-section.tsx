import { getTranslations } from 'next-intl/server'

export type StatsItem = {
  label: string
  value: string
  suffix?: string
  description: string
}

export async function StatsSection({ items }: { items: StatsItem[] }) {
  const t = await getTranslations('StatsSection')

  return (
    <section className="border-b-[4px] border-ink bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 inline-block border-[3px] border-ink bg-gold px-3 py-1 text-xs font-bold tracking-widest uppercase">
            {t('badge')}
          </p>
          <h2 className="font-display text-4xl leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
            {t('title')}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <div key={item.label} className="border-[3px] border-ink bg-paper p-6 shadow-hard-sm">
              <p className="font-display text-4xl leading-none sm:text-5xl">
                {item.value}
                {item.suffix ? <span className="text-crimson">{item.suffix}</span> : null}
              </p>
              <p className="mt-4 text-xs font-black uppercase tracking-[0.22em] text-ink">{item.label}</p>
              <p className="mt-2 leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
