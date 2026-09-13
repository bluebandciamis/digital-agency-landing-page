import {
  BookOpenText,
  Palette,
  Rocket,
  Search,
  Target,
} from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import { PageLayout } from '@/components/page-layout'

const brandStages = [
  { name: 'RISET & ANALISIS KOMPETITOR', icon: Search, bg: 'bg-gold' },
  { name: 'POSITIONING', icon: Target, bg: 'bg-crimson text-paper' },
  { name: 'IDENTITAS VISUAL', icon: Palette, bg: 'bg-magenta' },
  { name: 'BRAND GUIDELINE', icon: BookOpenText, bg: 'bg-gold' },
  { name: 'IMPLEMENTASI', icon: Rocket, bg: 'bg-crimson text-paper' },
] as const

const deliverables = [
  'Logo & Brand Guideline',
  'Strategi Positioning',
  'Asset Visual (kartu nama, template sosial media, dll)',
] as const

export default async function BrandingStrategiPage() {
  const t = await getTranslations('Pages.BrandingStrategi')

  return (
    <PageLayout label={t('label')} title={t('title')} intro={t('intro')}>
      <article className="rounded-none border-[3px] border-ink bg-paper p-6 shadow-hard-sm">
        <h2 className="mb-4 font-display text-2xl uppercase">{t('article1.heading')}</h2>
        <p className="leading-relaxed text-muted-foreground">{t('article1.body')}</p>
      </article>

      <section className="mt-8 rounded-none border-[3px] border-ink bg-paper p-4 shadow-hard-sm md:p-6">
        <h3 className="mb-5 font-display text-xl uppercase tracking-wide">PROSES</h3>

        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {brandStages.map((stage, index) => (
            <div key={stage.name} className="flex items-center">
              <div className="flex min-w-[130px] flex-1 flex-col items-center justify-center gap-3 md:min-w-[150px]">
                <div
                  className={`flex size-16 items-center justify-center rounded-[1rem] border-[3px] border-ink shadow-hard-sm md:size-[76px] ${stage.bg}`}
                >
                  <stage.icon className="size-7 md:size-8" aria-hidden="true" />
                </div>
                <span className="text-center font-display text-xs font-black uppercase tracking-[0.18em] md:text-sm">
                  {stage.name}
                </span>
              </div>

              {index < brandStages.length - 1 ? (
                <div className="hidden items-center md:flex">
                  <div className="h-[3px] w-8 bg-ink/70" />
                  <span className="ml-1 text-lg font-black text-ink">→</span>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <article className="mt-8 rounded-none border-[3px] border-ink bg-gold p-6 shadow-hard-sm">
        <h3 className="mb-4 font-display text-xl uppercase tracking-wide">Yang Anda Dapatkan</h3>

        <div className="grid gap-3 md:grid-cols-3">
          {deliverables.map((item) => (
            <div key={item} className="border-[3px] border-ink bg-paper p-4 shadow-hard-sm">
              <p className="font-display text-lg uppercase">{item}</p>
            </div>
          ))}
        </div>
      </article>
    </PageLayout>
  )
}
