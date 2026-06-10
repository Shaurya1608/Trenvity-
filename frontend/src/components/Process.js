'use client';

import Reveal, { StaggerContainer, StaggerItem } from '@/components/Reveal';

const steps = [
  {
    num: '01',
    title: 'Discover',
    desc: 'We audit your brand, study your market, and define exactly what\'s holding back your growth.',
  },
  {
    num: '02',
    title: 'Strategize',
    desc: 'A custom growth plan — creative direction, channels, messaging, and KPIs — built for your goals.',
  },
  {
    num: '03',
    title: 'Create',
    desc: 'We produce all creative assets, launch campaigns, and set everything live — on brief, on time.',
  },
  {
    num: '04',
    title: 'Scale',
    desc: 'Data drives every decision. We double down on what works, cut what doesn\'t, and grow your results.',
  },
];

export default function Process() {
  return (
    <section className="relative w-full bg-[var(--background)] px-6 md:px-10 lg:px-20 py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <Reveal>
        <p className="text-center text-[var(--neon)] text-[11px] md:text-[12px] tracking-[3px] uppercase font-mono mb-6 md:mb-10">How We Work</p>
      </Reveal>

      <Reveal delay={0.1}>
        <h2 className="text-center font-black italic uppercase text-white text-[clamp(1.6rem,4vw,3.2rem)] leading-[1.05] tracking-[-1px] mb-4">
          FROM BRIEF TO<br />RESULTS.
        </h2>
      </Reveal>

      <Reveal delay={0.2}>
        <p className="text-center text-white/50 text-[12px] md:text-[14px] leading-[1.8] max-w-[600px] mx-auto mb-14 md:mb-20">
          No guesswork. Every engagement follows the same proven structure — so you always know what&apos;s happening and why.
        </p>
      </Reveal>

      {/* Mobile: horizontal scroll | Desktop: grid */}
      <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-[1px] bg-transparent md:bg-white/5 max-w-[1200px] mx-auto overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-auto md:px-0 pb-6 md:pb-0">
        {steps.map((step) => (
          <div key={step.num} className="snap-start shrink-0 w-[75vw] sm:w-[45vw] md:w-auto">
            <div className="group relative bg-[var(--background)] border border-white/10 md:border-0 rounded-2xl md:rounded-none p-6 md:p-10 transition-all duration-500 hover:bg-[var(--neon)]/5 cursor-default h-full">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-[var(--neon)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-2xl md:rounded-none" />
              <span className="block text-[var(--neon)] text-[50px] md:text-[72px] font-black leading-none opacity-20 group-hover:opacity-40 transition-opacity duration-500">{step.num}</span>
              <h3 className="text-white font-bold text-[15px] md:text-[17px] uppercase tracking-[1px] mt-4 mb-3 group-hover:text-[var(--neon)] transition-colors duration-300">{step.title}</h3>
              <p className="text-white/40 text-[11px] md:text-[12px] leading-[1.7] group-hover:text-white/60 transition-colors duration-300">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
