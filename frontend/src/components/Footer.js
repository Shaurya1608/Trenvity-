'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1], delay },
  }),
};

const slideIn = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1], delay: 0.3 },
  },
};

export default function Footer() {
  return (
    <footer className="w-full bg-[var(--background)] px-3 md:px-6 pb-3 md:pb-6">
      {/* The neon border frame */}
      <div className="w-full border-[6px] md:border-[12px] border-[var(--neon)] flex flex-col overflow-hidden bg-[var(--background)]">

        {/* ─── "TRENVITY" Heading ─── */}
        <div className="flex flex-col relative z-10 pt-8 md:pt-12">
          <motion.h2
            className="font-sans font-black uppercase text-[clamp(3rem,10vw,9rem)] leading-[0.8] tracking-[-2px] md:tracking-[-4px] text-center w-full select-none relative z-10"
            style={{
              background: 'linear-gradient(90deg, #ffffff 0%, #cccccc 60%, #aaaaaa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.25, 0.4, 0.25, 1] }}
          >
            TRENVITY
          </motion.h2>

          {/* ─── Neon Info Bar ─── */}
          <motion.div
            className="w-full bg-[var(--neon)] text-[#0A1118] grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 px-5 md:px-10 py-4 md:py-6 relative z-20 mt-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            {[
              { label: 'New project:', value: 'sales@trenvity.com', href: 'mailto:sales@trenvity.com' },
              { label: 'Support:', value: 'support@trenvity.com', href: 'mailto:support@trenvity.com' },
              { label: 'Location:', value: null, address: ['123 Creative Street', 'Tech Hub District', 'United Kingdom'] },
              { label: 'General:', value: 'info@trenvity.com', href: 'mailto:info@trenvity.com' },
              { label: 'Call us:', value: '+44 123 456 7890', href: 'tel:+441234567890' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                custom={i * 0.07}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={item.address ? 'col-span-2 md:col-span-1' : ''}
              >
                <h3 className="font-bold text-[12px] md:text-[13px] mb-0.5">{item.label}</h3>
                {item.address ? (
                  <p className="text-[11px] md:text-[12px] leading-tight font-medium">
                    {item.address.map((line, j) => (
                      <span key={j}>{line}{j < item.address.length - 1 && <br />}</span>
                    ))}
                  </p>
                ) : (
                  <a href={item.href} className="text-[11px] md:text-[12px] hover:underline font-medium">{item.value}</a>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ─── Inquiries Section ─── */}
        <div className="px-5 md:px-10 lg:px-16 mt-10 md:mt-16 mb-8 flex flex-col md:flex-row items-start md:items-stretch gap-8 md:gap-12">

          {/* Animated Arrow */}
          <div className="flex-1 w-full md:w-auto flex items-center pt-2 md:pt-8">
            <div className="w-full relative">
              <motion.div
                className="h-[5px] md:h-[8px] bg-[var(--neon)] origin-left"
                variants={slideIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}
              />
              <motion.div
                className="absolute right-0 top-1/2 -translate-y-[60%] w-5 h-5 md:w-10 md:h-10 border-t-[5px] border-r-[5px] md:border-t-[8px] md:border-r-[8px] border-[var(--neon)] rotate-45 translate-x-[2px] md:translate-x-[4px]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9, duration: 0.3 }}
              />
            </div>
          </div>

          {/* Inquiries Text */}
          <div className="flex-1 md:max-w-[600px] text-white">
            <motion.h3
              className="font-sans font-black uppercase text-[clamp(2.5rem,5vw,4rem)] leading-[0.9] tracking-[-1px] mb-5 text-[var(--neon)]"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1], delay: 0.2 }}
            >
              INQUIRIES
            </motion.h3>

            <motion.p
              className="font-bold text-[13px] md:text-[15px] leading-[1.3] uppercase mb-5 max-w-[500px] text-white/90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              TRENVITY IS AN AWARD-WINNING AGENCY, SPECIALISED IN CREATIVE DESIGN, DEVELOPMENT AND STRATEGY.
            </motion.p>

            <motion.p
              className="text-[11px] md:text-[13px] leading-[1.6] text-white/50 mb-7 max-w-[460px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              If you're ready to build a scalable, data-driven digital presence, fill out an inquiry form. Still need some advice, or another opinion to sound out some ideas? Just drop us a line.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              <Link
                href="/contact"
                className="bg-[var(--neon)] text-[#0A1118] font-black text-[11px] tracking-[1px] px-6 py-2.5 uppercase hover:bg-white transition-colors duration-300 w-fit no-underline"
              >
                Project Inquiry
              </Link>
              <Link
                href="/contact"
                className="border-[2px] border-[var(--neon)] text-[var(--neon)] font-black text-[11px] tracking-[1px] px-6 py-2.5 uppercase hover:bg-[var(--neon)] hover:text-[#0A1118] transition-colors duration-300 w-fit no-underline"
              >
                Working at Trenvity
              </Link>
            </motion.div>
          </div>
        </div>

        {/* ─── Bottom Copyright Bar ─── */}
        <motion.div
          className="px-5 md:px-10 py-4 border-t border-[var(--neon)]/20 flex flex-col md:flex-row items-center justify-between gap-3 text-[10px] font-mono uppercase tracking-[1.5px] text-white/30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span>© {new Date().getFullYear()} Trenvity — All Rights Reserved</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[var(--neon)] transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-[var(--neon)] transition-colors duration-300">Terms of Service</a>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[var(--neon)] transition-colors duration-300">Instagram</a>
            <a href="#" className="hover:text-[var(--neon)] transition-colors duration-300">LinkedIn</a>
          </div>
        </motion.div>

      </div>
    </footer>
  );
}
