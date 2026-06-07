'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Performance', href: '/performance-marketing' },
  { label: 'Digital Marketing', href: '/digital-marketing' },
  { label: 'Website', href: '/website' },
  { label: 'Blog', href: '/blog' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
];

const contactItems = [
  { label: 'New Projects', value: 'sales@trenvity.com', href: 'mailto:sales@trenvity.com' },
  { label: 'Support', value: 'support@trenvity.com', href: 'mailto:support@trenvity.com' },
  { label: 'General', value: 'info@trenvity.com', href: 'mailto:info@trenvity.com' },
];

export default function Footer() {
  return (
    <footer className="relative w-full bg-[var(--background)] overflow-hidden">

      {/* ── Top neon separator line ── */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--neon)] to-transparent opacity-60" />

      {/* ── Main Content ── */}
      <div className="px-6 md:px-12 lg:px-20 pt-16 md:pt-20 pb-10 md:pb-12">

        {/* Upper grid: CTA left, Nav right */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 mb-16 md:mb-24">

          {/* Left: CTA block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            className="lg:col-span-1 flex flex-col items-center md:items-start text-center md:text-left"
          >
            <p className="text-[var(--neon)] text-[11px] tracking-[3px] uppercase font-mono mb-4">
              Ready to grow?
            </p>
            <h3 className="font-black italic uppercase text-white text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.0] tracking-[-1px] mb-6">
              LET&apos;S BUILD<br />
              <span className="text-[var(--neon)]">SOMETHING</span><br />
              GREAT.
            </h3>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 text-[12px] font-bold uppercase tracking-[2px] text-[var(--neon)] no-underline hover:gap-6 transition-all duration-300 group"
            >
              Start a Project
              <span className="w-8 h-[1.5px] bg-[var(--neon)] group-hover:w-14 transition-all duration-300 inline-block" />
            </Link>
          </motion.div>

          {/* Middle: Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1], delay: 0.1 }}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            <p className="text-white/30 text-[10px] tracking-[3px] uppercase font-mono mb-6">Navigation</p>
            <ul className="flex flex-col items-center md:items-start gap-3 list-none m-0 p-0">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-[var(--neon)] text-[13px] font-medium tracking-[0.5px] no-underline transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-[1px] bg-[var(--neon)] transition-all duration-300 inline-block" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1], delay: 0.2 }}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            <p className="text-white/30 text-[10px] tracking-[3px] uppercase font-mono mb-6">Get In Touch</p>
            <ul className="flex flex-col items-center md:items-start gap-5 list-none m-0 p-0 mb-8">
              {contactItems.map((item) => (
                <li key={item.label}>
                  <span className="block text-white/30 text-[10px] tracking-[2px] uppercase font-mono mb-1">{item.label}</span>
                  <a
                    href={item.href}
                    className="text-white/70 hover:text-[var(--neon)] text-[13px] font-medium no-underline transition-colors duration-300"
                  >
                    {item.value}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex flex-col items-center md:items-start">
              <span className="block text-white/30 text-[10px] tracking-[2px] uppercase font-mono mb-1">Office</span>
              <span className="text-white/60 text-[13px] font-medium">New Delhi, India</span>
            </div>
          </motion.div>
        </div>

        {/* ── Massive TRENVITY wordmark ── */}
        <div className="relative overflow-hidden">
          <div className="w-full h-[1px] bg-white/5 mb-6" />
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <h2
              className="font-black uppercase leading-[0.82] tracking-[-3px] md:tracking-[-6px] lg:tracking-[-10px] w-full text-center select-none"
              style={{
                fontSize: 'clamp(4.5rem, 15vw, 16rem)',
                background: 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              TRENVITY
            </h2>
          </motion.div>
        </div>

        {/* ── Bottom bar ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-white/[0.05] mt-2"
        >
          <span className="text-white/20 text-[10px] font-mono uppercase tracking-[2px]">
            © {new Date().getFullYear()} Trenvity — All Rights Reserved
          </span>

          <div className="flex items-center gap-6">
            {['Instagram', 'LinkedIn', 'Dribbble'].map((s) => (
              <a
                key={s}
                href="#"
                className="text-white/25 hover:text-[var(--neon)] text-[10px] font-mono uppercase tracking-[2px] no-underline transition-colors duration-300"
              >
                {s}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-5">
            <a href="#" className="text-white/20 hover:text-[var(--neon)] text-[10px] font-mono uppercase tracking-[2px] no-underline transition-colors duration-300">Privacy</a>
            <a href="#" className="text-white/20 hover:text-[var(--neon)] text-[10px] font-mono uppercase tracking-[2px] no-underline transition-colors duration-300">Terms</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
