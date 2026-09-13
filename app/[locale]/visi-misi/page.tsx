import { Compass, Handshake, Lightbulb, Target, Users } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import { PageLayout } from '@/components/page-layout'

const missionItems = [
  'Membantu brand dan startup menemukan arah, positioning, dan solusi digital yang lebih jelas.',
  'Mengembangkan pengalaman produk yang nyaman dipakai, mudah dipahami, dan efektif untuk audiens.',
  'Menjaga kualitas kerja, komunikasi, dan kolaborasi yang sehat sepanjang proyek.',
  'Mendorong setiap keputusan desain dan pengembangan berdampak nyata bagi bisnis dan pengguna.',
] as const

const coreValues = [
  { name: 'Presisi', icon: Target, text: 'Setiap keputusan dibuat dengan pertimbangan yang jelas, rapi, dan terukur.', bg: 'bg-gold' },
  { name: 'Kolaboratif', icon: Handshake, text: 'Kami percaya komunikasi yang terbuka memudahkan proses dan hasil akhir menjadi lebih kuat.', bg: 'bg-crimson text-paper' },
  { name: 'Iteratif', icon: Compass, text: 'Proses berkembang lewat evaluasi, feedback, dan perbaikan berkelanjutan.', bg: 'bg-magenta' },
  { name: 'Berdaya Guna', icon: Lightbulb, text: 'Setiap solusi yang dibuat ditujukan untuk memberi manfaat nyata bagi pengguna dan bisnis.', bg: 'bg-gold' },
] as const

export default async function VisiMisiPage() {
  const t = await getTranslations('Pages.VisiMisi')

  return (
    <PageLayout label={t('label')} title={t('title')} intro={t('intro')}>
      <article className="rounded-none border-[3px] border-ink bg-paper p-6 shadow-hard-sm">
        <h2 className="mb-4 font-display text-2xl uppercase">{t('article1.heading')}</h2>
        <p className="leading-relaxed text-muted-foreground">
          Menjadi mitra digital yang membantu bisnis tumbuh melalui strategi, desain, dan produk yang berdampak.
        </p>
      </article>

      <article className="rounded-none border-[3px] border-ink bg-paper p-6 shadow-hard-sm">
        <h2 className="mb-4 font-display text-2xl uppercase">{t('article2.heading')}</h2>
        <ul className="space-y-3 text-muted-foreground">
          {missionItems.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 flex size-4 shrink-0 items-center justify-center border-[2px] border-ink bg-gold text-[10px] font-black text-ink">
                •
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </article>

      <article className="rounded-none border-[3px] border-ink bg-paper p-6 shadow-hard-sm">
        <h2 className="mb-5 font-display text-2xl uppercase">Budaya & Core Values</h2>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {coreValues.map(({ name, icon: Icon, text, bg }) => (
            <div key={name} className="flex flex-col gap-4 border-[3px] border-ink bg-paper p-4 shadow-hard-sm">
              <div className={`flex size-16 items-center justify-center border-[3px] border-ink shadow-hard-sm ${bg}`}>
                <Icon className="size-7" aria-hidden="true" />
              </div>
              <div>
                <h3 className="mb-2 font-display text-lg uppercase">{name}</h3>
                <p className="leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </article>
    </PageLayout>
  )
}
