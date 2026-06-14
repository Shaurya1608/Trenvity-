import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Problem from '@/components/Problem';
import About from '@/components/About';
import TextCube from '@/components/TextCube';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Stats from '@/components/Stats';
import Testimonial from '@/components/Testimonial';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-[var(--background)]">
      {/* Header is fixed z-[100], always on top */}
      <Header />

      {/* Hero sits sticky at z-0 — sections above it slide over it */}
      <div className="sticky top-0 z-0 w-full h-screen">
        <Hero />
      </div>

      {/* All other sections at z-10 slide over the hero as user scrolls */}
      <div className="relative z-10 bg-[var(--background)]">
        <Problem />
        <Marquee />
        <About />
        <TextCube />
        <Services />
        <Process />
        <Stats />
        <Testimonial />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}

