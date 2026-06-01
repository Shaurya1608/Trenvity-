'use client';

import Reveal, { StaggerContainer, StaggerItem } from '@/components/Reveal';

const rows = [
  {
    label: 'DIGITAL ADVERTISING',
    bg: 'bg-[var(--neon)]',
    text: 'text-black',
    slide: 'bg-[#050505]',
    hoverText: 'group-hover:text-white',
  },
  {
    label: 'SOCIAL MEDIA',
    bg: 'bg-[#050505]',
    text: 'text-[var(--neon)]',
    slide: 'bg-white',
    hoverText: 'group-hover:text-black',
  },
  {
    label: 'CREATIVE CAMPAIGNS',
    bg: 'bg-white',
    text: 'text-black',
    slide: 'bg-[var(--neon)]',
    hoverText: 'group-hover:text-black',
  },
];

export default function Services() {
  return (
    <section className="relative w-full bg-[var(--background)] pt-12 md:pt-20">
      <Reveal>
        <p className="text-center text-white/50 text-[11px] md:text-[12px] tracking-[1.5px] mb-8 md:mb-10">[services]</p>
      </Reveal>

      <StaggerContainer className="flex flex-col w-full text-center font-black uppercase text-[clamp(1.5rem,4.5vw,4.5rem)] leading-none tracking-[-1px] md:tracking-[-2px]" staggerDelay={0.08}>
        {rows.map((row) => (
          <StaggerItem key={row.label}>
            <div className={`group relative w-full overflow-hidden ${row.bg}`}>
              <div className={`absolute inset-y-0 left-0 w-full ${row.slide} scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-in-out`} />
              <div className={`relative z-10 py-3 md:py-5 lg:py-6 ${row.text} ${row.hoverText} transition-colors duration-300`}>
                {row.label}
              </div>
            </div>
          </StaggerItem>
        ))}

        <StaggerItem>
          <div className="group relative w-full overflow-hidden bg-[var(--neon)]">
            <div className="absolute inset-y-0 left-0 w-full bg-[#050505] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-in-out" />
            <div className="relative z-10 pt-3 md:pt-5 lg:pt-6 pb-10 md:pb-16 lg:pb-20 flex flex-col items-center text-black group-hover:text-white transition-colors duration-300">
              <div className="mb-8 md:mb-10">BRAND IDENTITY</div>

              <p className="max-w-[280px] md:max-w-[480px] lg:max-w-[600px] text-center text-[11px] md:text-[13px] font-medium leading-[1.6] text-black/80 group-hover:text-white/80 mb-6 normal-case tracking-normal transition-colors duration-300">
                From paid media strategy to high-impact creatives, we build digital
                marketing that gets results. Let&apos;s take your brand further, engage
                audiences to become through social media, responsive, and pixel-
                perfect content that converts.
              </p>

              <a href="#" className="text-[12px] md:text-[14px] font-bold text-black group-hover:text-white border-b-[2px] border-black group-hover:border-white pb-0.5 uppercase tracking-[1px] hover:opacity-70 transition-colors duration-300">
                READ MORE &rarr;
              </a>
            </div>
          </div>
        </StaggerItem>
      </StaggerContainer>
    </section>
  );
}
