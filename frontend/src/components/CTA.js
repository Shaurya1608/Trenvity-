'use client';

import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="relative w-full bg-[var(--background)] px-6 md:px-10 lg:px-20 py-24 md:py-36 lg:py-44 overflow-hidden">
      {/* Deep ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full bg-[var(--neon)] opacity-[0.04] blur-[150px]" />
      </div>

      {/* Background text watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[clamp(6rem,20vw,16rem)] font-black text-white/[0.014] uppercase leading-none tracking-[-0.08em]">
          START
        </span>
      </div>

      <div className="relative z-10 max-w-[920px] mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[var(--neon)] text-[11px] md:text-[12px] tracking-[3px] uppercase font-mono mb-6 md:mb-10"
        >
          Let&apos;s talk
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1], delay: 0.1 }}
          className="font-black italic uppercase text-white text-[clamp(2.2rem,6.5vw,5.5rem)] leading-[0.92] tracking-[-2px] mb-6 md:mb-8"
        >
          READY TO<br />
          <span className="text-[var(--neon)]">MAKE AN IMPACT?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-white/45 text-[13px] md:text-[15px] leading-[1.75] max-w-[520px] mx-auto mb-10 md:mb-14"
        >
          Whether you&apos;re launching something new or leveling up an existing brand,
          we&apos;re here to make it happen. Let&apos;s create something extraordinary together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="/contact"
            className="relative inline-flex items-center justify-center px-12 md:px-16 py-4 md:py-5 text-[12px] md:text-[13px] font-bold tracking-[2.5px] uppercase text-black bg-[var(--neon)] no-underline transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(156,190,36,0.35)] overflow-hidden group"
          >
            <span className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
            <span className="relative z-10">Start a Project</span>
          </a>

          <a
            href="/contact"
            className="inline-flex items-center gap-3 text-[12px] font-bold uppercase tracking-[2px] text-white/50 hover:text-white no-underline transition-colors duration-300 group"
          >
            <span>Or just say hi</span>
            <span className="w-6 h-[1.5px] bg-current group-hover:w-10 transition-all duration-300 inline-block" />
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-white/20 text-[10px] md:text-[11px] tracking-[1.5px] mt-7 uppercase"
        >
          No commitment required &middot; Free consultation
        </motion.p>
      </div>
    </section>
  );
}
