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
    <div className="relative w-full min-h-screen bg-[var(--background)] overflow-hidden">
      <Header />
      <Hero />
      <Marquee />
      <Problem />
      <About />
      <TextCube />
      <Services />
      <Process />
      <Stats />
      <Testimonial />
      <CTA />
      <Footer />
    </div>
  );
}
