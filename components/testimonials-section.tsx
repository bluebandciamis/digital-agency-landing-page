import { getTranslations } from 'next-intl/server'

export type Testimonial = {
  name: string
  role: string
  company?: string
  quote: string
  rating: number
  avatar?: string
}

export async function TestimonialsSection({ items }: { items: Testimonial[] }) {
  const t = await getTranslations('TestimonialsSection')

  return (
    <section className="border-b-[4px] border-ink bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 inline-block border-[3px] border-ink bg-magenta px-3 py-1 text-xs font-bold tracking-widest uppercase">
            {t('badge')}
          </p>
          <h2 className="font-display text-4xl leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
            {t('title')}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item, index) => (
            <article
              key={`${item.name}-${index}`}
              className="flex h-full flex-col border-[3px] border-ink bg-paper p-6 shadow-hard-sm transition-transform hover:-translate-y-1"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex size-12 items-center justify-center border-[3px] border-ink bg-gold font-display text-lg text-ink">
                  {item.avatar ?? item.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="font-display text-xl leading-none">{item.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {item.role}
                    {item.company ? ` · ${item.company}` : ''}
                  </p>
                </div>
              </div>

              <div className="mb-4 flex gap-1 text-gold" aria-label={`${item.rating} ${t('ratingLabel')}`}>
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <span key={starIndex} className={starIndex < item.rating ? 'opacity-100' : 'opacity-30'}>
                    ★
                  </span>
                ))}
              </div>

              <p className="flex-1 leading-relaxed text-muted-foreground">“{item.quote}”</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
