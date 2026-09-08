import { Mail, MessageCircle } from 'lucide-react'
import { ContactForm } from '@/components/contact-form'

export function Contact() {
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
            Mulai proyek
          </p>
          <h2 className="font-display text-4xl leading-[0.95] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Punya ide? <br />
            <span className="text-stroke-paper text-transparent">Ayo bangun.</span>
          </h2>
          <p className="max-w-md text-lg leading-relaxed text-paper/90">
            Isi form di samping atau hubungi kami langsung. Konsultasi awal gratis, tanpa komitmen.
          </p>

          <ul className="flex flex-col gap-3">
            <li>
              <a
                href="mailto:halo@verse.studio"
                className="inline-flex items-center gap-3 border-[3px] border-ink bg-paper px-4 py-3 font-bold text-ink shadow-hard-sm transition-transform hover:-translate-y-0.5"
              >
                <Mail className="size-5" aria-hidden="true" />
                halo@verse.studio
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border-[3px] border-ink bg-magenta px-4 py-3 font-bold text-ink shadow-hard-sm transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="size-5" aria-hidden="true" />
                WhatsApp +62 812-3456-7890
              </a>
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
