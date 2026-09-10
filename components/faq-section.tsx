import { getTranslations } from 'next-intl/server'

export type FaqItem = {
  question: string
  answer: string
}

export async function FaqSection({ items }: { items: FaqItem[] }) {
  const t = await getTranslations('FaqSection')

  return (
    <section className="border-b-[4px] border-ink bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 inline-block border-[3px] border-ink bg-crimson px-3 py-1 text-xs font-bold tracking-widest uppercase text-paper">
            {t('badge')}
          </p>
          <h2 className="font-display text-4xl leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
            {t('title')}
          </h2>
        </div>

        <div className="space-y-4">
          {items.map((item, index) => (
            <details
              key={`${item.question}-${index}`}
              className="group border-[3px] border-ink bg-paper shadow-hard-sm"
              open={index === 0}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left text-lg font-bold text-ink">
                <span>{item.question}</span>
                <span className="flex size-8 shrink-0 items-center justify-center border-[3px] border-ink bg-gold text-sm font-black">
                  +
                </span>
              </summary>

              <div className="border-t-[3px] border-ink bg-muted px-5 py-4 leading-relaxed text-muted-foreground">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
