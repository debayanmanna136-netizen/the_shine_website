import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { ServicesPricing } from '@/components/sections/ServicesPricing';
import { Pricing } from '@/components/sections/Pricing';
import { About } from '@/components/sections/About';
import { Gallery } from '@/components/sections/Gallery';
import { Testimonials } from '@/components/sections/Testimonials';
import { Contact } from '@/components/sections/Contact';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-12 md:gap-24 pb-24">
        <Hero />
        
        <ScrollReveal>
          <ServicesPricing />
        </ScrollReveal>

        <ScrollReveal>
          <Pricing />
        </ScrollReveal>
        
        <ScrollReveal>
          <About />
        </ScrollReveal>
        
        <ScrollReveal>
          <Gallery />
        </ScrollReveal>
        
        <ScrollReveal>
          <Testimonials />
        </ScrollReveal>
        
        <ScrollReveal>
          <Contact />
        </ScrollReveal>

      </main>
      <Footer />
    </>
  );
}
