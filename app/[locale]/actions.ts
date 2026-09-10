'use server'

export type ContactState = {
  status: 'idle' | 'success' | 'error'
  message?: string
  errors?: Partial<Record<'name' | 'email' | 'phone' | 'service' | 'message', string>>
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_RE = /^[0-9+\-\s()]{8,15}$/

async function sendToGoogleSheet(payload: {
  name: string
  email: string
  phone: string
  service: string
  message: string
}): Promise<void> {
  const webhookUrl = process.env.GSHEET_WEBHOOK_URL

  if (!webhookUrl) {
    throw new Error('GSHEET_WEBHOOK_URL tidak ditemukan')
  }

  const res = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  if (!res.ok) {
    throw new Error(`Gagal kirim ke Google Sheet: ${res.status}`)
  }
}

export async function submitContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const phone = String(formData.get('phone') ?? '').trim()
  const service = String(formData.get('service') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()
  
  const errors: ContactState['errors'] = {}
  if (name.length < 2) errors.name = 'Nama minimal 2 karakter.'
  if (!EMAIL_RE.test(email)) errors.email = 'Format email tidak valid.'
  if (!PHONE_RE.test(phone)) errors.phone = 'Nomor HP tidak valid.'
  if (!service) errors.service = 'Pilih layanan yang diinginkan.'
  if (message.length < 10) errors.message = 'Ceritakan sedikit lebih detail (min. 10 karakter).'

  if (Object.keys(errors).length > 0) {
    return { status: 'error', errors, message: 'Periksa kembali isian Anda.' }
  }

  try {
    await sendToGoogleSheet({ name, email, phone, service, message })
  } catch (err) {
    console.error('[contact] gagal kirim ke sheet', err)
    return {
      status: 'error',
      message: 'Terjadi kesalahan saat mengirim pesan. Coba lagi nanti.',
    }
  }

  return {
    status: 'success',
    message: `Terima kasih, ${name}! Kami akan membalas ke ${email} dalam 1 hari kerja.`,
  }
}