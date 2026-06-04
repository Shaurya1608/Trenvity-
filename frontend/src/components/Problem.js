'use client';

import { motion } from 'framer-motion';
import Reveal from '@/components/Reveal';

const withoutItems = [
  'Random posting with no strategy',
  'Generic designs that look like everyone else',
  'No clear positioning or identity',
  'Weak brand recall, zero differentiation',
  'Ads spend with poor return',
];

const withItems = [
  'Data-backed strategy for every piece',
  'Strong visual identity that commands attention',
  'Sharp positioning that attracts the right buyers',
  'Higher brand recall, more trust',
  'Ads built for conversion, not impressions',
];

const itemVariants = {
  hidden: { opacity: 0, x: -15 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, delay: i * 0.08, ease: [0.25, 0.4, 0.25, 1] },
  }),
};

const itemVariantsRight = {
  hidden: { opacity: 0, x: 15 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, delay: i * 0.08, ease: [0.25, 0.4, 0.25, 1] },
  }),
};

export default function Problem() {
  return (
    <section className="relative w-full bg-[var(--background)] px-6 md:px-10 lg:px-20 py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Ghost "NOISE" watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[clamp(6rem,22vw,18rem)] font-black text-white/[0.012] uppercase leading-none tracking-[-0.08em]">
          NOISE
        </span>
      </div>

      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[var(--neon)] opacity-[0.02] blur-[150px] pointer-events-none" />

      <div className="relative z-10">
        <Reveal>
          <p className="text-center text-[var(--neon)] text-[11px] md:text-[12px] tracking-[3px] uppercase font-mono mb-6 md:mb-10">The Problem</p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-center font-black italic uppercase text-white leading-[0.92] tracking-[-2px] text-[clamp(1.8rem,4.5vw,3.5rem)] mb-6">
            WHY MOST BRANDS<br />
            <span className="text-[var(--neon)]">GET IGNORED.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-center text-white/50 text-[12px] md:text-[14px] leading-[1.8] max-w-[600px] mx-auto mb-14 md:mb-20">
            Your competitors are posting every day. Your audience is scrolling past them.
            The issue isn&apos;t volume — it&apos;s identity. Without a clear brand, you&apos;re just adding to the noise.
          </p>
        </Reveal>

        {/* Comparison cards */}
        <div className="relative max-w-[1100px] mx-auto">
          {/* Vertical divider line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 via-50% to-transparent hidden lg:block" />

          {/* VS badge */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:flex items-center justify-center">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.3 }}
              className="w-11 h-11 rounded-full bg-[var(--background)] border border-white/10 flex items-center justify-center"
            >
              <span className="text-white/30 text-[10px] font-bold tracking-[1.5px]">VS</span>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-start"
          >
            {/* ===== WITHOUT CARD ===== */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -40 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] } },
              }}
              whileHover={{ x: -3 }}
              className="group relative bg-white/[0.015] border border-white/[0.06] rounded-2xl p-5 md:p-6 lg:p-7 overflow-hidden"
            >
              {/* Animated red accent top border */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-400/30 to-transparent" />

              {/* Red ghost glow on hover */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-red-500/5 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 300, delay: 0.2 }}
                    className="text-red-400/70 text-[14px] md:text-[16px] font-bold leading-none"
                  >
                    ✕
                  </motion.span>
                  <span className="text-white/30 text-[11px] md:text-[12px] font-bold uppercase tracking-[2px]">Without Trenvity</span>
                </div>

                <ul className="flex flex-col gap-2.5 m-0 p-0 list-none">
                  {withoutItems.map((item, i) => (
                    <motion.li
                      key={item}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={itemVariants}
                      className="flex items-start gap-3"
                    >
                      <span className="text-white/10 text-[7px] mt-[7px] shrink-0 group-hover:text-red-400/30 transition-colors duration-500">◉</span>
                      <span className="text-white/30 group-hover:text-white/40 transition-colors duration-500 text-[11px] md:text-[12px] leading-[1.6]">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* ===== WITH CARD ===== */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 40 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] } },
              }}
              whileHover={{ x: 3 }}
              className="group relative bg-[var(--neon)]/[0.02] border border-[var(--neon)]/20 rounded-2xl p-5 md:p-6 lg:p-7 overflow-hidden animate-border-glow"
            >
              {/* Animated neon shimmer top border */}
              <div className="absolute top-0 left-0 right-0 h-[2px] animate-shimmer" />

              {/* Neon ghost glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[var(--neon)]/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[var(--neon)]/5 rounded-full blur-[60px] opacity-0 group-hover:opacity-60 transition-opacity duration-700" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 300, delay: 0.4 }}
                    className="text-[var(--neon)] text-[14px] md:text-[16px] font-bold leading-none"
                  >
                    ✓
                  </motion.span>
                  <span className="text-[var(--neon)] text-[11px] md:text-[12px] font-bold uppercase tracking-[2px]">With Trenvity</span>
                </div>

                <ul className="flex flex-col gap-2.5 m-0 p-0 list-none">
                  {withItems.map((item, i) => (
                    <motion.li
                      key={item}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={itemVariantsRight}
                      className="flex items-start gap-3"
                    >
                      <motion.span
                        animate={{ opacity: [0.3, 0.8, 0.3] }}
                        transition={{ duration: 2, delay: i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
                        className="text-[var(--neon)] text-[7px] mt-[7px] shrink-0"
                      >
                        ◉
                      </motion.span>
                      <span className="text-white/60 group-hover:text-white/80 transition-colors duration-500 text-[11px] md:text-[12px] leading-[1.6]">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
