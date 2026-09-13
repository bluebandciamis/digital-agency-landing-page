import { Building2, ImageIcon } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import { PageLayout } from '@/components/page-layout'

const clients = [
  'Klien A',
  'Klien B',
  'Klien C',
  'Klien D',
  'Klien E',
  'Klien F',
] as const

const portfolioItems = [
  {
    title: 'Project Alpha',
    category: 'Web App',
    description: 'Placeholder deskripsi singkat project. Silakan ganti dengan case study nyata, masalah yang dihadapi, dan solusi yang diterapkan.',
  },
  {
    title: 'Project Beta',
    category: 'Mobile App',
    description: 'Placeholder deskripsi singkat project. Silakan ganti dengan case study nyata, hasil utama, dan dampak bisnis yang terlihat.',
  },
] as const

export default async function KlienPortofolioPage() {
  const t = await getTranslations('Pages.KlienPortofolio')

  return (
    <PageLayout label={t('label')} title={t('title')} intro={t('intro')}>
      <article className="rounded-none border-[3px] border-ink bg-paper p-6 shadow-hard-sm">
        <h2 className="mb-5 font-display text-2xl uppercase">Klien Kami</h2>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {clients.map((client) => (
            <div key={client} className="flex h-24 items-center justify-center border-[3px] border-ink bg-muted shadow-hard-sm">
              <div className="flex items-center gap-2 font-display text-sm uppercase">
                <Building2 className="size-4" aria-hidden="true" />
                {client}
              </div>
            </div>
          ))}
        </div>
      </article>

      <article className="rounded-none border-[3px] border-ink bg-paper p-6 shadow-hard-sm">
        <h2 className="mb-5 font-display text-2xl uppercase">Portofolio Terpilih</h2>

        {portfolioItems.length > 0 ? (
          <div className="grid gap-4 lg:grid-cols-2">
            {portfolioItems.map(({ title, category, description }) => (
              <div key={title} className="flex flex-col overflow-hidden border-[3px] border-ink bg-paper shadow-hard-sm">
                <div className="flex aspect-[16/9] items-center justify-center border-b-[3px] border-ink bg-muted">
                  <ImageIcon className="size-10" aria-hidden="true" />
                </div>

                <div className="flex flex-1 flex-col gap-3 p-4">
                  <span className="w-fit border-[3px] border-ink bg-gold px-2 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-ink">
                    {category}
                  </span>
                  <h3 className="font-display text-xl uppercase">{title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{description}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="border-[3px] border-ink bg-gold p-8 text-center shadow-hard-sm">
            <p className="font-display text-2xl uppercase">Portofolio segera hadir</p>
          </div>
        )}
      </article>
    </PageLayout>
  )
}
