'use client';

import Reveal from '@/components/Reveal';

export default function CTA() {
  return (
    <section className="relative w-full bg-[var(--background)] px-6 md:px-10 lg:px-20 py-20 md:py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-[var(--neon)] opacity-[0.03] blur-[120px]" />
      </div>

      <Reveal>
        <div className="relative z-10 max-w-[900px] mx-auto text-center">
          <p className="text-[var(--neon)] text-[11px] md:text-[12px] tracking-[1.5px] mb-6 md:mb-10">[let&apos;s talk]</p>

          <h2 className="font-black italic uppercase text-white text-[clamp(2rem,6vw,5rem)] leading-[0.95] tracking-[-2px] mb-6 md:mb-8">
            READY TO<br />
            <span className="text-[var(--neon)]">MAKE AN IMPACT?</span>
          </h2>

          <p className="text-white/40 text-[12px] md:text-[14px] leading-[1.7] max-w-[500px] mx-auto mb-10 md:mb-14">
            Whether you&apos;re launching something new or leveling up an existing brand, we&apos;re here to make it happen. Let&apos;s create something extraordinary together.
          </p>

          <a href="#" className="relative inline-flex items-center justify-center px-12 md:px-16 py-5 md:py-6 text-[13px] md:text-[15px] font-bold tracking-[2px] uppercase text-black bg-[var(--neon)] no-underline transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(200,240,0,0.3)]">
            START A PROJECT
          </a>

          <p className="text-white/20 text-[10px] md:text-[11px] tracking-[1px] mt-6 uppercase">No commitment required &middot; Free consultation</p>
        </div>
      </Reveal>
    </section>
  );
}
