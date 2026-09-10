import { getTranslations } from 'next-intl/server'
import { PageLayout } from '@/components/page-layout'

export default async function LayananPage() {
  const t = await getTranslations('Pages.Layanan')

  return (
    <PageLayout label={t('label')} title={t('title')} intro={t('intro')}>
      <article className="rounded-none border-[3px] border-ink bg-paper p-6 shadow-hard-sm">
        <h2 className="mb-4 font-display text-2xl uppercase">{t('article1.heading')}</h2>
        <p className="leading-relaxed text-muted-foreground">{t('article1.body')}</p>
      </article>

      <article className="rounded-none border-[3px] border-ink bg-paper p-6 shadow-hard-sm">
        <h2 className="mb-4 font-display text-2xl uppercase">{t('article2.heading')}</h2>
        <p className="leading-relaxed text-muted-foreground">{t('article2.body')}</p>
      </article>

      <article className="rounded-none border-[3px] border-ink bg-paper p-6 shadow-hard-sm">
        <h2 className="mb-4 font-display text-2xl uppercase">{t('article3.heading')}</h2>
        <p className="leading-relaxed text-muted-foreground">{t('article3.body')}</p>
      </article>
    </PageLayout>
  )
}
