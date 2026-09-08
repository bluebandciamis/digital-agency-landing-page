export type PreviewKind = 'phone' | 'laptop' | 'both'

export type Service = {
  id: string
  name: string
  tagline: string
  description: string
  deliverables: string[]
  duration: string
  priceFrom: string
  preview: PreviewKind
  tone: 'crimson' | 'gold' | 'magenta'
}

export const services: Service[] = [
  {
    id: 'ui-ux',
    name: 'UI/UX Design',
    tagline: 'Mobile & Web',
    description:
      'Riset pengguna sampai high-fidelity prototype. Antarmuka yang enak dipakai dan berani tampil beda.',
    deliverables: [
      'User flow & wireframe',
      'Design system + komponen',
      'High-fidelity UI (Figma)',
      'Prototype interaktif',
      '2x revisi mayor',
    ],
    duration: '2–4 minggu',
    priceFrom: 'Rp 7.500.000',
    preview: 'phone',
    tone: 'gold',
  },
  {
    id: 'mobile-dev',
    name: 'Mobile App Dev',
    tagline: 'iOS & Android',
    description:
      'Aplikasi cross-platform dengan performa native. Dari MVP sampai rilis ke App Store & Play Store.',
    deliverables: [
      'React Native / Flutter',
      'Integrasi API & auth',
      'Push notification',
      'Publikasi ke store',
      'Dukungan 30 hari',
    ],
    duration: '6–10 minggu',
    priceFrom: 'Rp 25.000.000',
    preview: 'phone',
    tone: 'crimson',
  },
  {
    id: 'web-dev',
    name: 'Web App Dev',
    tagline: 'Next.js & Fullstack',
    description:
      'Website dan web app yang cepat, SEO-ready, dan mudah dirawat. Dashboard, SaaS, landing page, e-commerce.',
    deliverables: [
      'Next.js + TypeScript',
      'Database & CMS',
      'Responsive & aksesibel',
      'Deploy ke Vercel',
      'Dukungan 30 hari',
    ],
    duration: '4–8 minggu',
    priceFrom: 'Rp 15.000.000',
    preview: 'laptop',
    tone: 'magenta',
  },
]
