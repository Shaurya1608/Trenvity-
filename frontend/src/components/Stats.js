const stats = [
  { value: '10+', label: 'Brands Grown' },
  { value: '100%', label: 'Online Service' },
  { value: '2+', label: 'Years Experience' },
  { value: '3X', label: 'Average Lead Growth' },
];

export default function Stats() {
  return (
    <section className="relative w-full bg-[var(--background)] overflow-hidden">
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--neon)] to-transparent opacity-40" />

      <div className="py-12 md:py-16 w-full overflow-hidden flex whitespace-nowrap group">
        <div className="flex w-max items-center" style={{ animation: 'marquee 25s linear infinite' }}>
          {/* First set */}
          <div className="flex items-center text-center">
            {stats.map((stat) => (
              <div key={`1-${stat.label}`} className="px-16 md:px-24 border-r border-[var(--neon)]/20 last:border-0 hover:scale-105 transition-transform duration-300">
                <span className="block text-[var(--neon)] font-black text-[clamp(2.5rem,6vw,4.5rem)] leading-none tracking-[-2px]">{stat.value}</span>
                <span className="block text-white/30 text-[10px] md:text-[11px] uppercase tracking-[2px] mt-3">{stat.label}</span>
              </div>
            ))}
          </div>
          {/* Duplicate set for infinite loop */}
          <div className="flex items-center text-center" aria-hidden="true">
            {stats.map((stat) => (
              <div key={`2-${stat.label}`} className="px-16 md:px-24 border-r border-[var(--neon)]/20 last:border-0 hover:scale-105 transition-transform duration-300">
                <span className="block text-[var(--neon)] font-black text-[clamp(2.5rem,6vw,4.5rem)] leading-none tracking-[-2px]">{stat.value}</span>
                <span className="block text-white/30 text-[10px] md:text-[11px] uppercase tracking-[2px] mt-3">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--neon)] to-transparent opacity-40" />
    </section>
  );
}
