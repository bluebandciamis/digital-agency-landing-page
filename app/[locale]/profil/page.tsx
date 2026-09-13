import { ArrowRight, Building2, MapPin, Sparkles, Users } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { PageLayout } from '@/components/page-layout'

const quickFacts = [
  { label: 'Tahun Berdiri', value: '10 September 2026' },
  { label: 'Lokasi', value: 'Malang, Jawa Timur, Indonesia' },
  { label: 'Fokus Layanan', value: 'UI/UX Design & Product Development' },
] as const

const differentiators = [
  {
    title: 'Produk yang terasa relevan',
    text: 'Kami menggabungkan strategi, desain, dan eksekusi agar solusi yang dibuat benar-benar terasa berguna bagi audiens dan bisnis.',
    icon: Sparkles,
  },
  {
    title: 'Tim lintas disiplin',
    text: 'Design dan development bekerja bersama sejak awal, sehingga keputusan dan hasil akhir lebih konsisten.',
    icon: Users,
  },
  {
    title: 'Proses terbuka dan cepat',
    text: 'Komunikasi yang jelas, feedback yang cepat, dan jadwal yang terukur membantu proyek bergerak tanpa hambatan.',
    icon: Building2,
  },
] as const

export default async function ProfilPage() {
  const t = await getTranslations('Pages.Profil')

  return (
    <PageLayout label={t('label')} title={t('title')} intro={t('intro')}>
      <article className="rounded-none border-[3px] border-ink bg-paper p-6 shadow-hard-sm">
        <h2 className="mb-4 font-display text-2xl uppercase">{t('article1.heading')}</h2>
        <p className="leading-relaxed text-muted-foreground">{t('article1.body')}</p>
      </article>

      <article className="rounded-none border-[3px] border-ink bg-paper p-6 shadow-hard-sm">
        <h2 className="mb-4 font-display text-2xl uppercase">Quick Facts</h2>

        <div className="grid gap-4 md:grid-cols-3">
          {quickFacts.map((item) => (
            <div key={item.label} className="border-[3px] border-ink bg-muted p-4 shadow-hard-sm">
              <p className="mb-2 text-[10px] font-black uppercase tracking-[0.24em] text-ink/70">{item.label}</p>
              <p className="font-display text-xl uppercase text-ink">{item.value}</p>
            </div>
          ))}
        </div>
      </article>

      <article className="rounded-none border-[3px] border-ink bg-paper p-6 shadow-hard-sm">
        <h2 className="mb-5 font-display text-2xl uppercase">Apa yang membedakan kami</h2>

        <div className="grid gap-4 md:grid-cols-3">
          {differentiators.map(({ title, text, icon: Icon }) => (
            <div key={title} className="flex flex-col gap-4 border-[3px] border-ink bg-paper p-4 shadow-hard-sm">
              <div className="flex size-12 items-center justify-center border-[3px] border-ink bg-gold shadow-hard-sm">
                <Icon className="size-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="mb-2 font-display text-lg uppercase">{title}</h3>
                <p className="leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 border-[3px] border-ink bg-gold p-4 shadow-hard-sm">
          <p className="mb-3 text-sm leading-relaxed text-ink">
            VERSE Studio fokus membantu brand dan startup membangun produk yang jelas, fungsional, dan siap tumbuh —
            baik lewat desain pengalaman maupun pengembangan web dan aplikasi.
          </p>

          <Link
            href="/visi-misi"
            className="inline-flex items-center gap-2 border-[3px] border-ink bg-paper px-3 py-2 text-xs font-black uppercase tracking-[0.2em] text-ink shadow-hard-sm transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard"
          >
            Lihat Visi & Misi
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </article>
    </PageLayout>
  )
}
