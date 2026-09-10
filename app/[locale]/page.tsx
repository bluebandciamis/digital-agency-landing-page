import { getTranslations } from 'next-intl/server'
import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { FaqSection } from '@/components/faq-section'
import { Hero } from '@/components/hero'
import { Marquee } from '@/components/marquee'
import { Process } from '@/components/process'
import { Services } from '@/components/services'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { StatsSection } from '@/components/stats-section'
import { TestimonialsSection } from '@/components/testimonials-section'

export default async function Page() {
  const t = await getTranslations()
  const statsItems = t.raw('StatsSection.items') as Array<{
    label: string
    value: string
    suffix?: string
    description: string
  }>
  const testimonials = t.raw('TestimonialsSection.items') as Array<{
    name: string
    role: string
    company?: string
    quote: string
    rating: number
  }>
  const faqItems = t.raw('FaqSection.items') as Array<{ question: string; answer: string }>

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <SiteHeader />
      <main>
        <Hero />
        <StatsSection items={statsItems} />
        <About />
        <Marquee />
        <Services />
        <TestimonialsSection items={testimonials} />
        <FaqSection items={faqItems} />
        <Process />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
