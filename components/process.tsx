const steps = [
  { title: 'Brief', text: 'Diskusi 30 menit untuk memahami produk, target pengguna, dan tujuan bisnis.' },
  { title: 'Desain', text: 'Wireframe, UI high-fidelity, dan prototype yang bisa langsung diklik.' },
  { title: 'Build', text: 'Kode bersih dengan stack modern, update progres setiap minggu.' },
  { title: 'Rilis', text: 'Deploy, publikasi ke store, dan dukungan 30 hari setelah live.' },
]

export function Process() {
  return (
    <section id="proses" className="scroll-mt-20 relative overflow-hidden border-b-[4px] border-ink bg-ink py-20 text-paper lg:py-28">
      <div aria-hidden="true" className="halftone-light pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="mb-3 inline-block border-[3px] border-paper bg-gold px-3 py-1 text-xs font-bold tracking-widest text-ink uppercase">
            Proses
          </p>
          <h2 className="font-display text-4xl leading-[0.95] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Empat langkah, <span className="text-gold">nol drama.</span>
          </h2>
        </div>

        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="flex flex-col gap-3 border-[3px] border-paper bg-ink p-5 shadow-[6px_6px_0_0_var(--color-magenta)]"
            >
              <span className="font-display text-5xl leading-none text-crimson">{i + 1}</span>
              <h3 className="font-display text-xl uppercase">{step.title}</h3>
              <p className="leading-relaxed text-paper/80">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
