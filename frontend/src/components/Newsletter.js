'use client';

import { motion } from 'framer-motion';

export default function Newsletter() {
  return (
    <section className="relative w-full bg-[#070708] border-t border-white/5 py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none opacity-80" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-10"
        >
          <div className="flex items-center gap-3 md:gap-4">
            <span className="italic font-black text-lg md:text-xl tracking-[1.5px] text-white uppercase font-sans">
              TRENVITY®
            </span>
            <span className="text-white/10 text-[20px] font-thin hidden sm:block">|</span>
            <div className="text-[11px] md:text-sm font-black uppercase tracking-[1px] text-white flex gap-1.5 md:gap-2 font-sans">
              <span>SIGN UP</span>
              <span>TO OUR</span>
              <span>NEWSLETTER</span>
            </div>
          </div>

          <div className="relative flex items-center w-full max-w-[320px]">
            <input
              type="email"
              placeholder="YOUR EMAIL"
              className="w-full bg-[var(--neon)] text-black placeholder-black/70 text-[10px] font-mono font-bold uppercase tracking-[1.5px] px-5 py-3.5 rounded-full outline-none pr-12"
            />
            <button className="absolute right-1.5 w-9 h-9 rounded-full bg-black text-[var(--neon)] flex items-center justify-center hover:scale-105 transition-transform duration-200">
              <svg className="w-3.5 h-3.5 transform rotate-[135deg]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
