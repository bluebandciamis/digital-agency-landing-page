import { getTranslations } from 'next-intl/server'

export async function About() {
  const t = await getTranslations('About')
  const paragraphs = t.raw('paragraphs') as string[]
  const missionItems = t.raw('missionItems') as string[]

  return (
    <section className="border-b-[4px] border-ink bg-paper py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div id="profil" className="scroll-mt-24 flex flex-col gap-5">
          <p className="inline-block w-fit border-[3px] border-ink bg-gold px-3 py-1 text-xs font-bold tracking-widest text-ink uppercase shadow-hard-sm">
            {t('badge')}
          </p>
          <h2 className="font-display text-4xl leading-[0.95] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {t('title')}
          </h2>
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-lg leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>

        <div id="visi-misi" className="scroll-mt-24 border-[3px] border-ink bg-magenta p-6 shadow-hard-sm sm:p-8">
          <p className="mb-4 inline-block border-[3px] border-ink bg-paper px-3 py-1 text-xs font-bold tracking-widest text-ink uppercase">
            {t('visionBadge')}
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="mb-2 font-display text-2xl uppercase text-ink">{t('visionTitle')}</h3>
              <p className="leading-relaxed text-ink/80">{t('visionText')}</p>
            </div>

            <div>
              <h3 className="mb-2 font-display text-2xl uppercase text-ink">{t('missionTitle')}</h3>
              <ul className="list-disc space-y-2 pl-5 leading-relaxed text-ink/80">
                {missionItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
