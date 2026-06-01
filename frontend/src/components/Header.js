'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/smm', label: 'Social Media' },
  { href: '/website', label: 'Website' },
  { href: '/blog', label: 'Blog' },
  { href: '/portfolio', label: 'Portfolio' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] w-full transition-all duration-500 ${
          scrolled
            ? 'py-3 md:py-3'
            : 'py-4 md:py-5'
        }`}
      >
        <div
          className={`mx-auto flex items-center justify-between transition-all duration-500 ${
            scrolled
              ? 'max-w-[920px] px-6 py-2.5 rounded-full border border-white/10 bg-black/60 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
              : 'max-w-[1400px] px-5 md:px-8 lg:px-12'
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 no-underline shrink-0 group"
          >
            <img
              src="/landing/logo-trenvity1.png"
              alt="Trenvity"
              className="h-9 w-auto scale-[3.2] origin-left"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-[13px] font-medium tracking-[0.3px] no-underline transition-colors duration-300 rounded-full cursor-pointer ${
                    isActive
                      ? 'text-white bg-white/[0.08]'
                      : 'text-white/55 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="navActiveIndicator"
                      className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[var(--neon)]"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Side: CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            {/* CTA Button */}
            <Link
              href="#"
              className={`hidden md:inline-flex items-center justify-center text-[11px] font-bold tracking-[1.5px] uppercase no-underline cursor-pointer transition-all duration-300 ${
                scrolled
                  ? 'px-5 py-2 bg-[var(--neon)] text-black rounded-full hover:shadow-[0_0_20px_rgba(200,240,0,0.4)] hover:scale-105'
                  : 'px-6 py-2.5 bg-[var(--neon)] text-black rounded-full hover:shadow-[0_0_20px_rgba(200,240,0,0.4)] hover:scale-105'
              }`}
            >
              Let&apos;s Talk
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden relative w-9 h-9 flex flex-col items-center justify-center gap-[5px] bg-transparent border-none cursor-pointer z-[110]"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="block w-5 h-[1.5px] bg-white origin-center"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.2 }}
                className="block w-5 h-[1.5px] bg-white origin-center"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="block w-5 h-[1.5px] bg-white origin-center"
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[95] bg-black/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-2 w-full px-8">
              {navLinks.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: idx * 0.05, duration: 0.3 }}
                    className="w-full"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block text-center py-4 text-lg font-semibold tracking-[0.5px] no-underline rounded-xl transition-all duration-300 ${
                        isActive
                          ? 'text-[var(--neon)] bg-white/[0.05]'
                          : 'text-white/70 hover:text-white hover:bg-white/[0.03]'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: navLinks.length * 0.05, duration: 0.3 }}
                className="w-full mt-4"
              >
                <Link
                  href="#"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center py-4 text-sm font-bold tracking-[1.5px] uppercase no-underline bg-[var(--neon)] text-black rounded-full"
                >
                  Let&apos;s Talk
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
