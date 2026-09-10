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
    id: 'ui-ux-design',
    name: 'UI/UX Design',
    tagline: 'Research & Interface',
    description:
      'Riset pengguna, wireframe, design system, dan prototype interaktif untuk produk yang lebih mudah dipahami dan digunakan.',
    deliverables: [
      'User research & empathy map',
      'Wireframe & prototype',
      'Design system & component library',
      'High-fidelity UI',
      '2x revisi major',
    ],
    duration: '2–4 minggu',
    priceFrom: 'Rp 7.500.000',
    preview: 'phone',
    tone: 'gold',
  },
  {
    id: 'web-development',
    name: 'Web Development',
    tagline: 'Next.js & Fullstack',
    description:
      'Website dan web app cepat, responsif, dan SEO-friendly untuk landing page, portal, dashboard, hingga e-commerce.',
    deliverables: [
      'Next.js + TypeScript',
      'Responsive UI & CMS integration',
      'Database & API integration',
      'Deploy & hosting setup',
      'Dukungan 30 hari',
    ],
    duration: '4–8 minggu',
    priceFrom: 'Rp 15.000.000',
    preview: 'laptop',
    tone: 'magenta',
  },
  {
    id: 'apps-development',
    name: 'Apps Development',
    tagline: 'Mobile & Desktop',
    description:
      'Pembuatan aplikasi produk berbasis web atau mobile dengan arsitektur yang siap berkembang dan mudah dipelihara.',
    deliverables: [
      'MVP app architecture',
      'Frontend & backend implementation',
      'Integrasi auth & database',
      'Deploy & release support',
      'Maintenance plan',
    ],
    duration: '6–10 minggu',
    priceFrom: 'Rp 25.000.000',
    preview: 'phone',
    tone: 'crimson',
  },
  {
    id: 'maintenance-support',
    name: 'Maintenance and Support',
    tagline: 'Perawatan & Update',
    description:
      'Layanan pemeliharaan berkala agar produk tetap aman, stabil, dan selalu siap berkembang sesuai kebutuhan bisnis.',
    deliverables: [
      'Bug fixing & troubleshooting',
      'Update fitur & content',
      'Performance optimization',
      'Monitoring & maintenance',
      'Support bulanan',
    ],
    duration: 'Bulanan',
    priceFrom: 'Rp 1.500.000',
    preview: 'laptop',
    tone: 'gold',
  },
]
