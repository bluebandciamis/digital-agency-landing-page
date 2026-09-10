'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/navigation'

const localeOptions = [
  { code: 'id', label: 'Indonesia', short: 'ID' },
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'ko', label: '한국어', short: 'KO' },
]

export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const t = useTranslations('Nav')
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  const activeLocale = localeOptions.find((option) => option.code === locale) ?? localeOptions[0]

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="inline-flex items-center gap-2 border-[3px] border-ink bg-paper px-3 py-2 text-sm font-black tracking-[0.18em] uppercase text-ink shadow-hard-sm transition-transform hover:-translate-y-0.5 hover:shadow-hard"
        aria-label="Language switcher"
      >
        <span className="font-display text-sm tracking-[0.14em]">{activeLocale.short}</span>
        <span className="hidden sm:inline">{activeLocale.label}</span>
        <ChevronDown className="size-4" aria-hidden="true" />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-50 mt-2 min-w-[11rem] border-[3px] border-ink bg-paper shadow-hard-sm">
          {localeOptions.map((option) => {
            const isActive = option.code === locale

            return (
              <button
                key={option.code}
                type="button"
                onClick={() => {
                  router.replace(pathname, { locale: option.code })
                  setIsOpen(false)
                }}
                className={`flex w-full items-center justify-between gap-3 border-b-[3px] border-ink px-3 py-2 text-left text-sm font-bold uppercase tracking-[0.12em] transition-colors last:border-b-0 ${
                  isActive ? 'bg-gold text-ink' : 'bg-paper text-ink hover:bg-magenta'
                }`}
              >
                <span>{option.label}</span>
                <span className="font-display">{option.short}</span>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
