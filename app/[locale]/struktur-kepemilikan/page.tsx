import { getTranslations } from 'next-intl/server'
import { PageLayout } from '@/components/page-layout'

const ownershipTree = [
  {
    title: 'Pemilik / Founder',
    detail: 'Salman — M Salman Alfarizi Z',
    tone: 'bg-gold',
  },
  {
    title: 'Direksi',
    detail: 'Naufal — Naufaldo Dafa Zaki Bastian; Abi — Abi Dwi Sutrisno',
    tone: 'bg-crimson text-paper',
  },
  {
    title: 'Komisaris',
    detail: 'Zhafir — A. Zhafir Mahfudz Ubaidillah',
    tone: 'bg-magenta',
  },
] as const

export default async function StrukturKepemilikanPage() {
  const t = await getTranslations('Pages.StrukturKepemilikan')

  return (
    <PageLayout label={t('label')} title={t('title')} intro={t('intro')}>
      <article className="rounded-none border-[3px] border-ink bg-paper p-6 shadow-hard-sm">
        <h2 className="mb-5 font-display text-2xl uppercase">{t('article1.heading')}</h2>

        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col items-center">
            <div className="w-full max-w-md border-[3px] border-ink bg-gold p-4 text-center shadow-hard-sm">
              <p className="text-[10px] font-black uppercase tracking-[0.24em] text-ink/70">Pemilik</p>
              <p className="mt-2 font-display text-xl uppercase text-ink">Salman</p>
              <p className="mt-2 text-sm font-bold uppercase tracking-[0.2em] text-ink">
                M Salman Alfarizi Z
              </p>
            </div>

            <div className="my-3 h-8 w-[3px] bg-ink" />

            <div className="grid w-full gap-4 md:grid-cols-2 xl:grid-cols-3">
              {ownershipTree.slice(1).map(({ title, detail, tone }) => (
                <div key={title} className={`border-[3px] border-ink p-4 text-center shadow-hard-sm ${tone}`}>
                  <p className="text-[10px] font-black uppercase tracking-[0.24em] opacity-80">Posisi</p>
                  <p className="mt-2 font-display text-lg uppercase">{title}</p>
                  <p className="mt-2 text-sm font-bold uppercase tracking-[0.16em]">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>
    </PageLayout>
  )
}
