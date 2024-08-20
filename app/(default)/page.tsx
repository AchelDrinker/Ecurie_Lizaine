export const metadata = {
  title: 'Home - Ecurie Lizaine',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import EmailSection from '@/components/EmailSection'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturesBlocks />
      <Testimonials />
      <EmailSection />
    </>
  )
}
