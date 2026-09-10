import { getTranslations } from 'next-intl/server'
import { PageLayout } from '@/components/page-layout'

export default async function VisiMisiPage() {
  const t = await getTranslations('Pages.VisiMisi')
  const items = t.raw('article2.items') as string[]

  return (
    <PageLayout label={t('label')} title={t('title')} intro={t('intro')}>
      <article className="rounded-none border-[3px] border-ink bg-paper p-6 shadow-hard-sm">
        <h2 className="mb-4 font-display text-2xl uppercase">{t('article1.heading')}</h2>
        <p className="leading-relaxed text-muted-foreground">{t('article1.body')}</p>
      </article>

      <article className="rounded-none border-[3px] border-ink bg-paper p-6 shadow-hard-sm">
        <h2 className="mb-4 font-display text-2xl uppercase">{t('article2.heading')}</h2>
        <ul className="space-y-3 text-muted-foreground">
          {items.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </article>
    </PageLayout>
  )
}
