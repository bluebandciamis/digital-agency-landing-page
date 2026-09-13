import { UserRound } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import { PageLayout } from '@/components/page-layout'

const directors = [
  {
    name: 'Salman',
    role: 'Direktur Utama',
    bio: 'M Salman Alfarizi Z',
  },
  {
    name: 'Naufal',
    role: 'Direktur Operasional',
    bio: 'Naufaldo Dafa Zaki Bastian',
  },
  {
    name: 'Abi',
    role: 'Direktur Produk',
    bio: 'Abi Dwi Sutrisno',
  },
] as const

export default async function DewanDireksiPage() {
  const t = await getTranslations('Pages.DewanDireksi')

  return (
    <PageLayout label={t('label')} title={t('title')} intro={t('intro')}>
      <article className="rounded-none border-[3px] border-ink bg-paper p-6 shadow-hard-sm">
        <h2 className="mb-5 font-display text-2xl uppercase">{t('article1.heading')}</h2>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {directors.map(({ name, role, bio }) => (
            <div key={name} className="flex flex-col gap-4 border-[3px] border-ink bg-paper p-4 shadow-hard-sm">
              <div className="flex size-20 items-center justify-center border-[3px] border-ink bg-gold shadow-hard-sm">
                <UserRound className="size-8" aria-hidden="true" />
              </div>

              <div>
                <h3 className="font-display text-xl uppercase">{name}</h3>
                <p className="mt-1 text-sm font-black uppercase tracking-[0.18em] text-ink/70">{role}</p>
              </div>

              <p className="leading-relaxed text-muted-foreground">{bio}</p>
            </div>
          ))}
        </div>
      </article>
    </PageLayout>
  )
}
