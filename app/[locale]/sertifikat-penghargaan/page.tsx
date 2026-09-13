import { ImageIcon } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import { PageLayout } from '@/components/page-layout'

const achievements = [
  {
    title: 'Sertifikat Digital Excellence',
    issuer: 'Pemberi Sertifikat',
    year: '2025',
    color: 'bg-gold',
  },
  {
    title: 'Award for Creative Product Design',
    issuer: 'Pemberi Penghargaan',
    year: '2024',
    color: 'bg-magenta',
  },
  {
    title: 'Best UI/UX Collaboration Program',
    issuer: 'Pemberi Penghargaan',
    year: '2023',
    color: 'bg-crimson text-paper',
  },
] as const

export default async function SertifikatPenghargaanPage() {
  const t = await getTranslations('Pages.SertifikatPenghargaan')

  return (
    <PageLayout label={t('label')} title={t('title')} intro={t('intro')}>
      <article className="rounded-none border-[3px] border-ink bg-paper p-6 shadow-hard-sm">
        <h2 className="mb-5 font-display text-2xl uppercase">{t('article1.heading')}</h2>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {achievements.map(({ title, issuer, year, color }) => (
            <div key={title} className="flex flex-col gap-4 border-[3px] border-ink bg-paper p-4 shadow-hard-sm">
              <div className={`flex aspect-square items-center justify-center border-[3px] border-ink shadow-hard-sm ${color}`}>
                <ImageIcon className="size-9" aria-hidden="true" />
              </div>

              <div>
                <p className="mb-2 text-[10px] font-black uppercase tracking-[0.22em] text-ink/70">{year}</p>
                <h3 className="font-display text-lg uppercase leading-tight">{title}</h3>
              </div>

              <div className="mt-auto border-t-[3px] border-ink pt-3">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-ink/70">Pemberi</p>
                <p className="mt-1 font-medium text-ink">{issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </article>
    </PageLayout>
  )
}
