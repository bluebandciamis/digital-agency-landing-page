import { getTranslations } from 'next-intl/server'

export async function Process() {
  const t = await getTranslations('Process')
  const steps = t.raw('steps') as Array<{ title: string; text: string }>
  return (
    <section id="proses" className="scroll-mt-20 relative overflow-hidden border-b-[4px] border-ink bg-ink py-20 text-paper lg:py-28">
      <div aria-hidden="true" className="halftone-light pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="mb-3 inline-block border-[3px] border-paper bg-gold px-3 py-1 text-xs font-bold tracking-widest text-ink uppercase">
            {t('badge')}
          </p>
          <h2 className="font-display text-4xl leading-[0.95] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {t('title')}
          </h2>
        </div>

        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="flex flex-col gap-3 border-[3px] border-paper bg-ink p-5 shadow-[6px_6px_0_0_var(--color-magenta)]"
            >
              <span className="font-display text-5xl leading-none text-crimson">{i + 1}</span>
              <h3 className="font-display text-xl uppercase">{step.title}</h3>
              <p className="leading-relaxed text-paper/80">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
