'use server'

export type ContactState = {
  status: 'idle' | 'success' | 'error'
  message?: string
  errors?: Partial<Record<'name' | 'email' | 'service' | 'message', string>>
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function submitContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const service = String(formData.get('service') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()

  const errors: ContactState['errors'] = {}
  if (name.length < 2) errors.name = 'Nama minimal 2 karakter.'
  if (!EMAIL_RE.test(email)) errors.email = 'Format email tidak valid.'
  if (!service) errors.service = 'Pilih layanan yang diinginkan.'
  if (message.length < 10) errors.message = 'Ceritakan sedikit lebih detail (min. 10 karakter).'

  if (Object.keys(errors).length > 0) {
    return { status: 'error', errors, message: 'Periksa kembali isian Anda.' }
  }

  // Hook your email provider or database here (e.g. Resend, Neon) to persist inquiries.
  console.log('[contact] new inquiry', { name, email, service, length: message.length })

  return {
    status: 'success',
    message: `Terima kasih, ${name}! Kami akan membalas ke ${email} dalam 1 hari kerja.`,
  }
}
