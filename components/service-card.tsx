import Link from 'next/link'
import { ArrowRight, Check, Clock } from 'lucide-react'
import { LaptopFrame, PhoneFrame } from '@/components/device-frames'
import type { Service } from '@/lib/services'
import { cn } from '@/lib/utils'

const toneClasses: Record<Service['tone'], { header: string; shadow: string }> = {
  crimson: { header: 'bg-crimson text-paper', shadow: 'shadow-hard-gold' },
  gold: { header: 'bg-gold text-ink', shadow: 'shadow-hard-magenta' },
  magenta: { header: 'bg-magenta text-ink', shadow: 'shadow-hard-gold' },
}

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const tone = toneClasses[service.tone]

  return (
    <article
      className={cn(
        'flex flex-col border-[4px] border-ink bg-paper transition-transform hover:-translate-y-1',
        tone.shadow,
      )}
      style={{ animationDelay: `${index * 120}ms` }}
    >
      <header className={cn('flex items-start justify-between gap-3 border-b-[4px] border-ink px-5 py-4', tone.header)}>
        <div>
          <p className="text-xs font-bold tracking-widest uppercase opacity-80">{service.tagline}</p>
          <h3 className="font-display text-2xl leading-tight">{service.name}</h3>
        </div>
        <span className="font-display text-3xl leading-none opacity-40">0{index + 1}</span>
      </header>

      <div className="halftone flex h-44 items-end justify-center overflow-hidden border-b-[4px] border-ink bg-muted px-6 pt-6">
        {service.preview === 'laptop' ? (
          <LaptopFrame className="w-4/5 translate-y-2" label="Preview portofolio" />
        ) : (
          <PhoneFrame className="w-24 translate-y-6" label="Preview portofolio" />
        )}
      </div>

      <div className="flex flex-1 flex-col gap-5 p-5">
        <p className="leading-relaxed text-muted-foreground">{service.description}</p>

        <div>
          <h4 className="mb-2 text-xs font-bold tracking-widest uppercase">Apa yang didapat</h4>
          <ul className="flex flex-col gap-1.5">
            {service.deliverables.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm font-medium">
                <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center border-2 border-ink bg-gold">
                  <Check className="size-3" strokeWidth={3} aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <dl className="grid grid-cols-2 gap-3 border-t-[3px] border-ink pt-4">
          <div>
            <dt className="flex items-center gap-1 text-xs font-bold tracking-widest uppercase">
              <Clock className="size-3.5" aria-hidden="true" /> Estimasi
            </dt>
            <dd className="font-display text-lg">{service.duration}</dd>
          </div>
          <div>
            <dt className="text-xs font-bold tracking-widest uppercase">Mulai dari</dt>
            <dd className="font-display text-lg text-crimson">{service.priceFrom}</dd>
          </div>
        </dl>

        <Link
          href="#kontak"
          className="mt-auto inline-flex items-center justify-center gap-2 border-[3px] border-ink bg-ink px-5 py-3 font-display text-sm text-paper uppercase shadow-hard-sm transition-all hover:bg-crimson hover:shadow-hard active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
        >
          Pesan Jasa
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}
