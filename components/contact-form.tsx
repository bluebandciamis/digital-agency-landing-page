'use client'

import { useActionState } from 'react'
import { CheckCircle2, Send } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { submitContact, type ContactState } from '@/app/[locale]/actions'
import { services } from '@/lib/services'
import { cn } from '@/lib/utils'

const initialState: ContactState = { status: 'idle' }

const fieldClass =
  'w-full border-[3px] border-ink bg-paper px-4 py-3 font-medium placeholder:text-muted-foreground/70 focus:outline-none focus:ring-4 focus:ring-magenta/60 aria-[invalid=true]:border-crimson'

export function ContactForm() {
  const t = useTranslations('ContactForm')
  const [state, action, pending] = useActionState(submitContact, initialState)

  if (state.status === 'success') {
    return (
      <div role="status" className="flex flex-col items-start gap-4 border-[4px] border-ink bg-gold p-8 shadow-hard">
        <CheckCircle2 className="size-12" aria-hidden="true" />
        <h3 className="font-display text-2xl uppercase">{t('successTitle')}</h3>
        <p className="leading-relaxed">{state.message}</p>

        <button
          type="button"
          onClick={() => window.location.reload()}
          className="inline-flex items-center justify-center border-[3px] border-ink bg-paper px-4 py-2 font-display text-sm uppercase text-ink shadow-hard-sm transition-transform hover:-translate-y-0.5 hover:shadow-hard"
        >
          {t('retry')}
        </button>
      </div>
    )
  }

  return (
    <form action={action} noValidate className="flex flex-col gap-5 border-[4px] border-ink bg-paper p-6 shadow-hard sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={t('fields.name')} name="name" error={state.errors?.name}>
          <input id="name" name="name" type="text" autoComplete="name" placeholder={t('placeholders.name')} className={fieldClass} aria-invalid={!!state.errors?.name} />
        </Field>
        <Field label={t('fields.email')} name="email" error={state.errors?.email}>
          <input id="email" name="email" type="email" autoComplete="email" placeholder={t('placeholders.email')} className={fieldClass} aria-invalid={!!state.errors?.email} />
        </Field>
      </div>
        <Field label={t('fields.phone')} name="phone" error={state.errors?.phone}>
          <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder={t('placeholders.phone')} className={fieldClass} aria-invalid={!!state.errors?.phone} />
        </Field>

      <Field label={t('fields.service')} name="service" error={state.errors?.service}>
        <select id="service" name="service" defaultValue="" className={cn(fieldClass, 'appearance-none')} aria-invalid={!!state.errors?.service}>
          <option value="" disabled>
            {t('options.servicePlaceholder')}
          </option>
          {services.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name} — mulai {s.priceFrom}
            </option>
          ))}
          <option value="bundle">{t('options.bundle')}</option>
        </select>
      </Field>

      <Field label={t('fields.message')} name="message" error={state.errors?.message}>
        <textarea id="message" name="message" rows={5} placeholder={t('placeholders.message')} className={cn(fieldClass, 'resize-y')} aria-invalid={!!state.errors?.message} />
      </Field>

      {state.status === 'error' && (
        <p role="alert" className="text-sm font-bold text-crimson">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center justify-center gap-2 border-[3px] border-ink bg-crimson px-6 py-4 font-display text-base text-paper uppercase shadow-hard transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard-lg active:translate-x-1 active:translate-y-1 active:shadow-none disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? t('submitPending') : t('submit')}
        <Send className="size-5" aria-hidden="true" />
      </button>
    </form>
  )
}

function Field({ label, name, error, children }: { label: string; name: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-xs font-bold tracking-widest uppercase">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${name}-error`} className="text-sm font-bold text-crimson">
          {error}
        </p>
      )}
    </div>
  )
}
