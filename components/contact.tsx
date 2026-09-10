import { getTranslations } from 'next-intl/server'
import { ContactForm } from '@/components/contact-form'

export async function Contact() {
  const t = await getTranslations('Contact')

  return (
    <section id="kontak" className="scroll-mt-20 relative overflow-hidden bg-crimson py-20 text-paper lg:py-28">
      <div
        aria-hidden="true"
        className="rays pointer-events-none absolute -bottom-1/2 -left-1/4 size-[120vw] opacity-80 md:size-[70vw]"
        style={{ maskImage: 'radial-gradient(circle, black 30%, transparent 70%)' }}
      />
      <div aria-hidden="true" className="halftone-light pointer-events-none absolute inset-0 opacity-60" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="flex flex-col gap-6">
          <p className="inline-block w-fit -rotate-2 border-[3px] border-ink bg-gold px-3 py-1 text-xs font-bold tracking-widest text-ink uppercase shadow-hard-sm">
            {t('badge')}
          </p>
          <h2 className="font-display text-4xl leading-[0.95] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {t('title')}
          </h2>
          <p className="max-w-md text-lg leading-relaxed text-paper/90">
            {t('subtitle')}
          </p>

          <ul className="flex flex-col gap-3">
            <li>
              <span className="inline-flex items-center gap-3 border-[3px] border-ink bg-paper px-4 py-3 font-bold text-ink shadow-hard-sm">
                <span className="text-sm uppercase tracking-widest">{t('socialLabel')}</span>
                <span className="text-base text-ink/70">{t('socialValue')}</span>
              </span>
            </li>
          </ul>
        </div>

        <div className="text-ink">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
