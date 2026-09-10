import type { ReactNode } from 'react'
import { ArrowLeft } from 'lucide-react'
import { getLocale, getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export async function PageLayout({
  label,
  title,
  intro,
  children,
}: {
  label: string
  title: string
  intro: string
  children: ReactNode
}) {
  const t = await getTranslations('PageLayout')
  const locale = await getLocale()

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-paper">
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 border-[3px] border-ink bg-paper px-3 py-2 text-xs font-black uppercase tracking-[0.2em] text-ink shadow-hard-sm transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            {t('back')}
          </Link>

          <div className="mb-8 border-[3px] border-ink bg-gold p-5 shadow-hard-sm">
            <p className="mb-2 text-[10px] font-black uppercase tracking-[0.28em] text-ink">{label}</p>
            <h1 className="font-display text-4xl leading-none tracking-tight sm:text-5xl">{title}</h1>
          </div>

          <p className="mb-10 max-w-3xl text-lg leading-relaxed text-muted-foreground">{intro}</p>

          <div className="grid gap-6">{children}</div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
