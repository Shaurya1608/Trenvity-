'use client';

import Reveal, { StaggerContainer, StaggerItem } from '@/components/Reveal';

export default function Testimonial() {
  return (
    <section className="relative w-full bg-[var(--background)] px-6 md:px-10 lg:px-20 py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-8 left-6 md:left-16 text-[var(--neon)] opacity-[0.04] text-[200px] md:text-[300px] font-black leading-none pointer-events-none select-none">&ldquo;</div>

      <Reveal>
        <p className="text-center text-[var(--neon)] text-[11px] md:text-[12px] tracking-[1.5px] mb-10 md:mb-16">[testimonials]</p>
      </Reveal>

      <StaggerContainer className="max-w-[800px] mx-auto text-center">
        <StaggerItem>
          <blockquote className="text-white/80 font-medium italic text-[clamp(1.1rem,2.5vw,1.8rem)] leading-[1.5] tracking-[-0.5px] mb-8">
            &ldquo;Trenvity didn&apos;t just build us a campaign — they redefined how we connect with our audience. The results spoke louder than any pitch deck ever could.&rdquo;
          </blockquote>
        </StaggerItem>

        <StaggerItem>
          <div className="flex items-center justify-center gap-4">
            <div className="w-[48px] h-[48px] rounded-full bg-[var(--neon)]/10 border border-[var(--neon)]/30 flex items-center justify-center text-[var(--neon)] font-bold text-[16px]">A</div>
            <div className="text-left">
              <p className="text-white text-[13px] font-semibold tracking-[0.5px]">Alex Morrison</p>
              <p className="text-white/30 text-[11px] tracking-[0.5px]">CEO, Vortex Digital</p>
            </div>
          </div>
        </StaggerItem>
      </StaggerContainer>
    </section>
  );
}
