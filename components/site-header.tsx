'use client'

import { useEffect, useRef, useState } from 'react'
import { Headset, MoonStar, SunMedium, Zap } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { LanguageSwitcher } from '@/components/language-switcher'

export function SiteHeader() {
  const t = useTranslations('Nav')
  const locale = useLocale()
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const menuRef = useRef<HTMLDivElement | null>(null)

  const nav = [
    {
      href: '/profil',
      label: t('company'),
      items: t.raw('items.company') as Array<{ href: string; label: string }>,
    },
    {
      href: '/layanan',
      label: t('services'),
      items: t.raw('items.services') as Array<{ href: string; label: string }>,
    },
  ]

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme')

    if (savedTheme === 'dark' || savedTheme === 'light') {
      setTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document.documentElement.style.colorScheme = theme
    window.localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenu(null)
      }
    }

    window.addEventListener('click', handleClickOutside)
    return () => window.removeEventListener('click', handleClickOutside)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b-[4px] border-ink bg-paper">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex size-9 items-center justify-center border-[3px] border-ink bg-crimson text-paper shadow-hard-sm">
            <Zap className="size-5" aria-hidden="true" />
          </span>
          <span className="font-display text-2xl leading-none tracking-tight">
            VERSE<span className="text-crimson">.</span>
          </span>
        </Link>

        <div className="hidden flex-1 items-center justify-center md:flex" ref={menuRef}>
          <nav aria-label="Navigasi utama" className="flex items-center justify-center gap-2">
            {nav.map((item) => (
              <div key={item.label} className="relative">
                <button
                  type="button"
                  onClick={() => setOpenMenu((current) => (current === item.label ? null : item.label))}
                  className="inline-flex items-center justify-center border-[3px] border-transparent px-4 py-2 text-sm font-black tracking-[0.18em] uppercase text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-ink hover:bg-gold hover:shadow-hard-sm"
                >
                  {item.label}
                </button>

                {openMenu === item.label && (
                  <div className="absolute left-1/2 top-full z-50 mt-2 w-[26rem] -translate-x-1/2">
                    <div className="overflow-hidden border-[3px] border-ink bg-paper shadow-hard-sm">
                      <div className="border-b-[3px] border-ink bg-gold px-4 py-3 text-left text-sm font-black uppercase tracking-[0.18em] text-ink">
                        {item.label}
                      </div>

                      <ul className="divide-y divide-ink/10 bg-paper">
                        {item.items.map((subItem) => (
                          <li key={subItem.href}>
                            <Link
                              href={subItem.href}
                              onClick={() => setOpenMenu(null)}
                              className="block px-4 py-3 text-sm font-bold uppercase tracking-[0.08em] text-ink transition-all duration-200 hover:-translate-x-1 hover:bg-gold hover:text-ink"
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href="#kontak"
            className="border-[3px] border-ink bg-gold px-4 py-2 text-sm font-bold tracking-wide uppercase shadow-hard-sm transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
          >
            {t('cta')}
          </a>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
        aria-label="Toggle dark mode"
        className="fixed bottom-4 right-4 z-[60] flex items-center gap-2 rounded-full border-[3px] border-ink bg-paper px-3 py-2 text-xs font-black uppercase tracking-[0.2em] text-ink shadow-hard-sm transition-transform hover:-translate-y-0.5 hover:shadow-hard"
      >
        <span className="flex size-8 items-center justify-center rounded-full border-[3px] border-ink bg-gold text-ink">
          {theme === 'dark' ? <SunMedium className="size-4" /> : <MoonStar className="size-4" />}
        </span>
        <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
      </button>

    </header>
  )
}
