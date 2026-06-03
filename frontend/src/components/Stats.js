const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Retention' },
  { value: '8+', label: 'Years of Experience' },
  { value: '3X', label: 'Average ROI Growth' },
];

export default function Stats() {
  return (
    <section className="relative w-full bg-[var(--background)] overflow-hidden">
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--neon)] to-transparent opacity-40" />

      <div className="px-6 md:px-10 lg:px-20 py-16 md:py-24 lg:py-28">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 max-w-[1100px] mx-auto text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="group">
              <span className="block text-[var(--neon)] font-black text-[clamp(2.5rem,6vw,4.5rem)] leading-none tracking-[-2px]">{stat.value}</span>
              <span className="block text-white/30 text-[10px] md:text-[11px] uppercase tracking-[2px] mt-3 group-hover:text-white/60 transition-colors duration-300">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--neon)] to-transparent opacity-40" />
    </section>
  );
}
