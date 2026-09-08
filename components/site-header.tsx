import Link from 'next/link'
import { Zap } from 'lucide-react'

const nav = [
  { href: '#layanan', label: 'Layanan' },
  { href: '#proses', label: 'Proses' },
  { href: '#kontak', label: 'Kontak' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b-[4px] border-ink bg-paper">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex size-9 items-center justify-center border-[3px] border-ink bg-crimson text-paper shadow-hard-sm">
            <Zap className="size-5" aria-hidden="true" />
          </span>
          <span className="font-display text-xl leading-none tracking-tight">
            VERSE<span className="text-crimson">.</span>
          </span>
        </Link>

        <nav aria-label="Navigasi utama" className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-bold tracking-wide uppercase underline-offset-4 hover:underline hover:decoration-[3px] hover:decoration-magenta"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#kontak"
          className="border-[3px] border-ink bg-gold px-4 py-2 text-sm font-bold tracking-wide uppercase shadow-hard-sm transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
        >
          Mulai Proyek
        </Link>
      </div>
    </header>
  )
}
