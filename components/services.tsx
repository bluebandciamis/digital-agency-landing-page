import { ServiceCard } from '@/components/service-card'
import { services } from '@/lib/services'

export function Services() {
  return (
    <section id="layanan" className="scroll-mt-20 border-b-[4px] border-ink bg-paper py-20 lg:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 inline-block border-[3px] border-ink bg-magenta px-3 py-1 text-xs font-bold tracking-widest uppercase">
              Layanan
            </p>
            <h2 className="font-display text-4xl leading-[0.95] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Pilih paket. <span className="text-crimson">Kami eksekusi.</span>
            </h2>
          </div>
          <p className="max-w-sm leading-relaxed text-muted-foreground">
            Semua paket bersifat modular — gabungkan desain dan development, atau ambil satu yang paling Anda butuhkan
            sekarang.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
