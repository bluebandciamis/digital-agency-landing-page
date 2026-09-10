import { Mail, MessageCircle } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'

export async function SiteFooter() {
  const t = await getTranslations('Footer')

  const links = [
    { href: '/profil', label: t('links.profil') },
    { href: '/visi-misi', label: t('links.visiMisi') },
    { href: '/layanan', label: t('links.layanan') },
    { href: '#proses', label: t('links.proses') },
    { href: '#kontak', label: t('links.kontak') },
  ]

  return (
    <footer className="border-t-[4px] border-ink bg-ink text-paper">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-8 sm:px-6 md:flex-row md:items-center">
        <div className="flex flex-col gap-3">
          <p className="font-display text-2xl">
            VERSE<span className="text-crimson">.</span>
          </p>
          <div className="flex flex-col gap-2 text-sm text-paper/80">
            <a href="mailto:sayafaldo@gmail.com" className="inline-flex items-center gap-2 hover:text-gold">
              <Mail className="size-4" aria-hidden="true" />
              sayafaldo@gmail.com
            </a>
            <a
              href="https://wa.me/6289601185614"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-gold"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              WhatsApp +62 896 011 856 14
            </a>
          </div>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-6 text-sm font-bold tracking-wide uppercase">
          {links.map((link) =>
            link.href.startsWith('#') ? (
              <a key={link.href} href={link.href} className="hover:text-gold">
                {link.label}
              </a>
            ) : (
              <Link key={link.href} href={link.href} className="hover:text-gold">
                {link.label}
              </Link>
            ),
          )}
        </nav>
        <p className="text-sm text-paper/70">{t('copyright', { year: new Date().getFullYear() })}</p>
      </div>
    </footer>
  )
}
