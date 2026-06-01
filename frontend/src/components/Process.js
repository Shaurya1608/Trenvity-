'use client';

import Reveal, { StaggerContainer, StaggerItem } from '@/components/Reveal';

const steps = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'Deep-dive into your brand, audience, and goals. We analyze the competitive landscape and uncover opportunities others miss.',
  },
  {
    num: '02',
    title: 'Strategy',
    desc: 'Craft a data-backed roadmap tailored to your objectives. Every tactic is purposeful, every channel deliberate.',
  },
  {
    num: '03',
    title: 'Execution',
    desc: 'Pixel-perfect design meets flawless implementation. We build campaigns that captivate and convert at scale.',
  },
  {
    num: '04',
    title: 'Optimize',
    desc: 'Measure, learn, iterate. Real-time analytics drive continuous improvement so your ROI only grows.',
  },
];

export default function Process() {
  return (
    <section className="relative w-full bg-[var(--background)] px-6 md:px-10 lg:px-20 py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <Reveal>
        <p className="text-center text-[var(--neon)] text-[11px] md:text-[12px] tracking-[1.5px] mb-6 md:mb-10">[process]</p>
      </Reveal>

      <Reveal delay={0.1}>
        <h2 className="text-center font-black italic uppercase text-[var(--neon)] text-[clamp(1.6rem,4vw,3.2rem)] leading-[1.05] tracking-[-1px] mb-16 md:mb-24">
          HOW WE BRING<br />YOUR VISION TO LIFE
        </h2>
      </Reveal>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/5 max-w-[1200px] mx-auto">
        {steps.map((step) => (
          <StaggerItem key={step.num}>
            <div className="group relative bg-[var(--background)] p-8 md:p-10 transition-all duration-500 hover:bg-[var(--neon)]/5 cursor-default">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-[var(--neon)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            <span className="block text-[var(--neon)] text-[60px] md:text-[72px] font-black leading-none opacity-20 group-hover:opacity-40 transition-opacity duration-500">{step.num}</span>
            <h3 className="text-white font-bold text-[15px] md:text-[17px] uppercase tracking-[1px] mt-4 mb-3 group-hover:text-[var(--neon)] transition-colors duration-300">{step.title}</h3>
            <p className="text-white/40 text-[11px] md:text-[12px] leading-[1.7] group-hover:text-white/60 transition-colors duration-300">{step.desc}</p>
          </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
