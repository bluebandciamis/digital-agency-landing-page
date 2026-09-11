import Image from 'next/image'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { LaptopFrame, PhoneFrame } from '@/components/device-frames'

export async function Hero() {
  const t = await getTranslations('Hero')
  const stats = t.raw('stats') as Array<{ label: string; value: string }>
  const laptopFrameLabel = t('laptopFrameLabel')
  const phoneFrameLabel = t('phoneFrameLabel')
  const slotMockup = t('slotMockup')

  return (
    <section className="relative overflow-hidden border-b-[4px] border-ink bg-crimson text-paper">
      <div
        aria-hidden="true"
        className="rays pointer-events-none absolute -top-1/2 -right-1/4 size-[140vw] opacity-90 md:size-[90vw]"
        style={{ maskImage: 'radial-gradient(circle, black 30%, transparent 70%)' }}
      />
      <div aria-hidden="true" className="halftone-light pointer-events-none absolute inset-0 opacity-60" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pt-14 pb-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pt-20 lg:pb-28">
        <div className="animate-pop-in flex flex-col items-start gap-6">
          <span className="inline-flex -rotate-2 items-center gap-2 border-[3px] border-ink bg-gold px-3 py-1 text-xs font-bold tracking-widest text-ink uppercase shadow-hard-sm">
            {t('badge')}
          </span>

          <h1 className="font-display text-[2.75rem] leading-[0.95] tracking-tight text-balance sm:text-6xl lg:text-7xl">
            {t('title.start')}{' '}
            <span className="relative inline-block">
              <span className="relative z-10">{t('title.highlight')}</span>
              <span aria-hidden="true" className="absolute inset-x-0 bottom-1 -z-0 h-4 -skew-x-6 bg-gold" />
            </span>
            <br />
            {t('title.middle')}{' '}
            <span className="text-stroke-paper text-transparent">{t('title.stroke')}</span>
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-paper/90">{t('subtitle')}</p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#kontak"
              className="inline-flex items-center gap-2 border-[3px] border-ink bg-gold px-6 py-3.5 font-display text-base text-ink uppercase shadow-hard transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard-lg active:translate-x-1 active:translate-y-1 active:shadow-none"
            >
              {t('primaryCta')}
              <ArrowRight className="size-5" aria-hidden="true" />
            </a>
            <a
              href="#layanan"
              className="inline-flex items-center gap-2 border-[3px] border-paper px-6 py-3.5 font-bold tracking-wide uppercase transition-colors hover:bg-paper hover:text-crimson"
            >
              {t('secondaryCta')}
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
          </div>

          <dl className="mt-2 grid grid-cols-3 gap-4 border-t-[3px] border-paper/40 pt-6 text-sm">
            {stats.map((item) => (
              <div key={item.label}>
                <dt className="sr-only">{item.label}</dt>
                <dd className="font-display text-xl sm:text-2xl">{item.value}</dd>
                <dd className="text-paper/80">{item.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <span className="absolute -top-4 left-2 z-20 rotate-[-6deg] border-[3px] border-ink bg-magenta px-3 py-1 font-display text-sm text-ink uppercase shadow-hard-sm">
            {t('previewLabel')}
          </span>
          <div className="relative grid grid-cols-[1fr_38%] items-end gap-4 pt-6">
            <a
              href="https://karyasmk.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Buka website Karya SMK"
              className="block transition-transform duration-150 hover:scale-[1.01]"
            >
              <LaptopFrame className="rotate-[-2deg]" label={laptopFrameLabel}>
                <Image
                  src="/Website.png"
                  alt="Website preview"
                  fill
                  sizes="(max-width: 1024px) 70vw, 44vw"
                  className="object-cover"
                />
              </LaptopFrame>
            </a>
            <a
              href="https://www.figma.com/proto/VXpQ66tDBlU1RGKpxaHzdn/gataunamatim-Kel.-5?node-id=0-1&t=Muf054crKy1MqnaB-1"
              target="_blank"
              rel="noreferrer"
              aria-label="Buka prototype mobile sample app VERSE Studio"
              className="block transition-transform duration-150 hover:scale-[1.01]"
            >
              <PhoneFrame className="rotate-[4deg]" label={phoneFrameLabel}>
                <Image
                  src="/sample-apps.png"
                  alt="Preview aplikasi mobile sample"
                  fill
                  sizes="(max-width: 1024px) 35vw, 18vw"
                  className="object-cover"
                />
              </PhoneFrame>
            </a>
          </div>
          <p className="mt-6 text-center text-sm font-bold tracking-wide text-paper/80 uppercase">
            {slotMockup}
          </p>
        </div>
      </div>
    </section>
  )
}
