const partners = [
  { name: 'TRENVITY', className: 'font-black text-[15px] md:text-[17px] tracking-[1px]' },
  { name: 'META ADS', className: 'font-bold text-[14px] md:text-[16px] tracking-[2px]' },
  { name: 'GOOGLE ADS', className: 'font-semibold text-[13px] md:text-[15px] tracking-[1.5px] opacity-90' },
  { name: 'REELS', className: 'font-black text-[14px] md:text-[16px] tracking-[2px]' },
  { name: 'BRANDING', className: 'font-bold text-[14px] md:text-[16px] tracking-[1.5px]' },
  { name: 'SOCIAL MEDIA', className: 'font-medium text-[13px] md:text-[15px] tracking-[1.5px] opacity-80' },
  { name: 'CONTENT STRATEGY', className: 'font-bold text-[14px] md:text-[16px] tracking-[1px]' },
  { name: 'RANCHI', className: 'font-black text-[13px] md:text-[15px] tracking-[3px]' },
  { name: 'INDIA', className: 'font-bold text-[14px] md:text-[16px] tracking-[2px] opacity-90' },
  { name: 'UAE', className: 'font-black text-[15px] md:text-[17px] tracking-[1px]' },
];

export default function Marquee() {
  return (
    <section className="relative z-30 -mt-[7vh] md:-mt-[10vh] lg:-mt-[12vh] w-full bg-[var(--neon)] py-3 md:py-[18px] border-y-2 border-black flex overflow-hidden whitespace-nowrap group">
      <div className="flex w-max items-center" style={{ animation: 'marquee 25s linear infinite' }}>
        <div className="flex items-center gap-[40px] md:gap-[60px] lg:gap-[80px] px-[20px] md:px-[30px] lg:px-[40px] text-black uppercase">
          {partners.map((p) => (
            <span key={p.name} className={p.className}>{p.name}</span>
          ))}
        </div>
        <div className="flex items-center gap-[40px] md:gap-[60px] lg:gap-[80px] px-[20px] md:px-[30px] lg:px-[40px] text-black uppercase" aria-hidden="true">
          {partners.map((p) => (
            <span key={p.name} className={p.className}>{p.name}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
