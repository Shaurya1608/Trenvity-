'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Trenvity didn't just build us a campaign — they redefined how we connect with our audience. The results spoke louder than any pitch deck ever could.",
    name: 'Alex Morrison',
    role: 'CEO, Vortex Digital',
    initial: 'A',
  },
  {
    quote: "Working with Trenvity was a turning point for our brand. In just three months, we saw a 3x increase in qualified leads and a brand that finally felt like us.",
    name: 'Priya Sharma',
    role: 'Founder, Luminary Co.',
    initial: 'P',
  },
  {
    quote: "The creative output was exceptional, but what really stood out was their strategic thinking. They understand business, not just aesthetics.",
    name: 'James Keller',
    role: 'CMO, Arclight Group',
    initial: 'J',
  },
];

export default function Testimonial() {
  return (
    <section className="relative w-full bg-[var(--background)] px-6 md:px-10 lg:px-20 py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Ghost quotation mark */}
      <div className="absolute top-4 left-6 md:left-16 text-[var(--neon)] opacity-[0.035] text-[200px] md:text-[280px] font-black leading-none pointer-events-none select-none">&ldquo;</div>

      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--neon)] opacity-[0.02] blur-[130px] pointer-events-none" />

      <div className="relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-[var(--neon)] text-[11px] md:text-[12px] tracking-[3px] uppercase font-mono mb-10 md:mb-16"
        >
          Client Stories
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 max-w-[1200px] mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.25, 0.4, 0.25, 1] }}
              className="group relative bg-white/[0.02] border border-white/[0.06] hover:border-[var(--neon)]/20 p-7 md:p-8 transition-all duration-500"
            >
              {/* Hover top accent */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-[var(--neon)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              {/* Quote icon */}
              <div className="text-[var(--neon)] text-[28px] font-black leading-none mb-4 opacity-40">&ldquo;</div>

              <blockquote className="text-white/70 font-medium text-[13px] md:text-[14px] leading-[1.75] mb-7">
                {t.quote}
              </blockquote>

              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-[var(--neon)]/10 border border-[var(--neon)]/25 flex items-center justify-center text-[var(--neon)] font-bold text-[13px] shrink-0">
                  {t.initial}
                </div>
                <div>
                  <p className="text-white text-[12px] font-semibold tracking-[0.5px]">{t.name}</p>
                  <p className="text-white/30 text-[11px] tracking-[0.5px]">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
