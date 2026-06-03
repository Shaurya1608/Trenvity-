const partners = [
  { name: 'SONOS', className: 'font-bold text-[14px] md:text-[16px] tracking-[2px]' },
  { name: 'RIMOWA', className: 'font-medium text-[13px] md:text-[15px] tracking-[1.5px] opacity-80' },
  { name: 'HIGHSNOBIETY', className: 'font-black text-[13px] md:text-[15px] tracking-[1px] border-b-[2px] border-black pb-[1px]' },
  { name: 'HYEIN SEO', className: 'font-black text-[15px] md:text-[17px] tracking-[-0.5px]' },
  { name: 'Haeckels', className: 'font-medium text-[14px] md:text-[16px] normal-case opacity-90' },
  { name: 'MISBHV', className: 'font-black text-[14px] md:text-[16px] tracking-[5px] md:tracking-[8px]' },
  { name: 'OK-RM', className: 'font-semibold text-[13px] md:text-[15px] tracking-[1.5px]' },
  { name: 'ACRONYM®', className: 'font-bold text-[13px] md:text-[15px] tracking-[1.5px]' },
  { name: 'Y/PROJECT', className: 'font-medium text-[13px] md:text-[15px] tracking-[1.5px] opacity-80' },
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
