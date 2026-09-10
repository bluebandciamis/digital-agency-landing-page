export type ContactOption = {
  label: string
  whatsappNumber: string
  email?: string
  message?: string
}

export function FloatingWhatsApp({
  phone,
  contacts,
}: {
  phone: string
  contacts: ContactOption[]
}) {
  return (
    <div className="fixed right-4 bottom-4 z-[60] flex flex-col items-end gap-3">
      <div className="flex flex-col items-end gap-2">
        {contacts.map((contact) => {
          const whatsappNumber = contact.whatsappNumber.replace(/\D/g, '')
          const whatsappHref = `https://wa.me/${whatsappNumber}${
            contact.message ? `?text=${encodeURIComponent(contact.message)}` : ''
          }`

          return (
            <a
              key={contact.label}
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-[3px] border-ink bg-paper px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-ink shadow-hard-sm transition-transform hover:-translate-y-0.5 hover:shadow-hard"
            >
              <span className="flex size-8 items-center justify-center border-[3px] border-ink bg-gold text-ink">
                {contact.label === 'Umum' ? 'U' : 'J'}
              </span>
              <span>{contact.label}</span>
              {contact.email ? (
                <span className="hidden text-[10px] font-bold tracking-normal normal-case text-muted-foreground sm:inline">
                  {contact.email}
                </span>
              ) : null}
            </a>
          )
        })}
      </div>

      <a
        href={`https://wa.me/${phone.replace(/\D/g, '')}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="flex size-14 items-center justify-center border-[3px] border-ink bg-crimson text-lg font-black text-paper shadow-hard-sm transition-transform hover:-translate-y-0.5 hover:shadow-hard"
      >
        WA
      </a>
    </div>
  )
}
