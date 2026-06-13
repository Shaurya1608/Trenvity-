'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="relative w-full bg-[var(--background)] px-6 md:px-10 lg:px-16 py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[var(--neon)] opacity-[0.025] blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[var(--neon)] text-[11px] md:text-[12px] tracking-[3px] uppercase font-mono mb-5 md:mb-8"
        >
          About us
        </motion.p>

        <div className="mb-10 md:mb-16 lg:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            className="font-black italic uppercase leading-[1.0] tracking-[-1px] md:tracking-[-2px] text-[clamp(1.6rem,4.5vw,3.2rem)]"
          >
            <span className="block text-white">WE ARE A CREATIVE DIGITAL MARKETING AGENCY</span>
            <span className="block text-[var(--neon)]">BUILDING BRANDS THAT DON'T</span>
            <span className="block text-white/70">LOOK FORGETTABLE ONLINE</span>
          </motion.h2>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-10 lg:gap-0">

          {/* Image on the left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1], delay: 0.1 }}
            className="relative w-full max-w-[90vw] sm:max-w-[420px] lg:max-w-[500px] ml-0 md:ml-6 lg:ml-20"
          >
            <div className="relative border-[2px] border-[var(--neon)] overflow-hidden shadow-[0_0_40px_rgba(156,190,36,0.12)]">
              <img
                src="/landing/trenvity-aboutr.png"
                alt="Our creative team at work"
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              {/* Neon corner accent */}
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[var(--neon)] opacity-60" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[var(--neon)] opacity-60" />
            </div>

            {/* Floating stat badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-5 -right-5 bg-[var(--neon)] text-[#0F1C2E] px-5 py-3 text-center shadow-xl"
            >
              <span className="block font-black text-2xl leading-none">2+</span>
              <span className="block text-[10px] font-bold uppercase tracking-[1px] mt-0.5">Years of Impact</span>
            </motion.div>
          </motion.div>

          {/* Text on the right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1], delay: 0.2 }}
            className="max-w-[380px] lg:max-w-[400px] mr-0 md:mr-6 lg:mr-24"
          >
            <p className="text-[13px] md:text-[14px] leading-[1.85] text-white/60 mb-5">
              Our mission is simple — make your brand feel premium, memorable, and impossible to ignore. We combine strategy, branding, and storytelling to build brands that people actually feel online.
            </p>
            <p className="text-[13px] md:text-[14px] leading-[1.85] text-white/60 mb-5">
              From local Ranchi businesses to international clients in UAE — we partner with brands that want real growth, not just pretty posts.
            </p>
            <p className="text-[13px] md:text-[14px] leading-[1.85] text-white/60 mb-8">
              Our team is made up of founders — Mahi — and a network of creative professionals who are passionate about brand building and dedicated to your results.
            </p>

            <a
              href="/contact"
              className="inline-flex items-center gap-3 text-[12px] font-bold uppercase tracking-[2px] text-[var(--neon)] hover:gap-5 transition-all duration-300 group"
            >
              Work with us
              <span className="w-8 h-[1.5px] bg-[var(--neon)] group-hover:w-12 transition-all duration-300 inline-block" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
