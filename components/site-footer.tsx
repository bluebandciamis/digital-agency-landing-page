import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="border-t-[4px] border-ink bg-ink text-paper">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-8 sm:px-6 md:flex-row md:items-center">
        <p className="font-display text-2xl">
          VERSE<span className="text-crimson">.</span>
        </p>
        <nav aria-label="Footer" className="flex flex-wrap gap-6 text-sm font-bold tracking-wide uppercase">
          <Link href="#layanan" className="hover:text-gold">
            Layanan
          </Link>
          <Link href="#proses" className="hover:text-gold">
            Proses
          </Link>
          <Link href="#kontak" className="hover:text-gold">
            Kontak
          </Link>
        </nav>
        <p className="text-sm text-paper/70">© {new Date().getFullYear()} VERSE Studio. Jakarta, Indonesia.</p>
      </div>
    </footer>
  )
}
