'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Performance', href: '/performance-marketing' },
  { label: 'Digital Marketing', href: '/digital-marketing' },
  { label: 'Website', href: '/website' },
  { label: 'Blog', href: '/blog' },
  { label: 'Portfolio', href: '/portfolio' },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  // Track scroll for glassmorphism effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = useCallback((href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  }, [pathname]);

  return (
    <>
      <header
        id="main-header"
        className={`
          fixed top-0 left-0 right-0 z-[100] w-full
          transition-all duration-500 ease-out flex items-center
          h-[60px] md:h-[75px]
        `}
        style={{
          background: scrolled
            ? 'rgba(15, 28, 46, 0.75)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px) saturate(1.4)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(1.4)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
          boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.3)' : 'none',
        }}
      >
        <div className="max-w-[1440px] mx-auto w-full flex items-center justify-between px-5 md:px-8 lg:px-12 relative">

          {/* ─── Logo ─── */}
          <div className="w-[120px] md:w-[150px] shrink-0">
            <Link
              href="/"
              className="absolute top-1/2 -translate-y-1/2 group flex items-center no-underline transition-transform duration-300 hover:scale-[1.03]"
            >
              <Image
                src="/landing/logo-trenvity1.png"
                alt="Trenvity"
                width={320}
                height={80}
                priority
                className="object-contain h-[70px] md:h-[85px] w-auto"
              />
            </Link>
          </div>

          {/* ─── Desktop Navigation ─── */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 relative">
            <AnimatePresence>
              {navLinks.map((link) => {
                const active = isActive(link.href);
                const hovered = hoveredLink === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative px-5 py-2.5 text-[13px] font-medium tracking-[0.5px] no-underline transition-colors duration-300 cursor-pointer group rounded-lg"
                    style={{
                      color: active ? '#ffffff' : hovered ? '#ffffff' : 'rgba(255,255,255,0.6)',
                    }}
                    onMouseEnter={() => setHoveredLink(link.href)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <span className="relative z-10">{link.label}</span>
                    
                    {/* Hover background pill using framer-motion */}
                    {hovered && (
                      <motion.div
                        layoutId="nav-hover-pill"
                        className="absolute inset-0 bg-white/[0.06] rounded-lg z-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                      />
                    )}

                    {/* Active underline indicator */}
                    {active && (
                      <motion.div
                        layoutId="nav-active-line"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-[20px] bg-[var(--neon)] rounded-full shadow-[0_0_8px_rgba(156,190,36,0.6)] z-10"
                        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                      />
                    )}
                  </Link>
                );
              })}
            </AnimatePresence>
          </nav>

          {/* ─── Desktop CTA Button ─── */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center justify-center group relative overflow-hidden px-7 py-3 text-[11px] font-bold tracking-[2px] uppercase no-underline rounded-full transition-all duration-400 shrink-0 cursor-pointer"
              style={{
                color: 'var(--neon)',
                border: '1.5px solid var(--neon)',
                background: 'transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--neon)';
                e.currentTarget.style.color = '#0F1C2E';
                e.currentTarget.style.boxShadow = '0 0 24px rgba(156,190,36,0.3), 0 0 60px rgba(156,190,36,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--neon)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Shimmer sweep effect */}
              <span className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />
              <span className="relative z-10">Contact Us</span>
            </Link>
          </motion.div>

          {/* ─── Mobile Hamburger Button ─── */}
          <button
            id="mobile-menu-toggle"
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg cursor-pointer z-[110]"
            style={{
              background: mobileOpen ? 'rgba(156,190,36,0.1)' : 'rgba(255,255,255,0.05)',
              border: `1px solid ${mobileOpen ? 'rgba(156,190,36,0.3)' : 'rgba(255,255,255,0.08)'}`,
            }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {/* Animated hamburger → X morphing */}
            <div className="relative w-[18px] h-[14px]">
              <span
                className="absolute left-0 w-full h-[1.5px] rounded-full transition-all duration-400 ease-out"
                style={{
                  background: mobileOpen ? 'var(--neon)' : 'white',
                  top: mobileOpen ? '6px' : '0px',
                  transform: mobileOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                }}
              />
              <span
                className="absolute left-0 top-[6px] h-[1.5px] rounded-full transition-all duration-300"
                style={{
                  background: 'white',
                  width: mobileOpen ? '0%' : '60%',
                  opacity: mobileOpen ? 0 : 1,
                }}
              />
              <span
                className="absolute left-0 w-full h-[1.5px] rounded-full transition-all duration-400 ease-out"
                style={{
                  background: mobileOpen ? 'var(--neon)' : 'white',
                  bottom: mobileOpen ? '6px' : '0px',
                  transform: mobileOpen ? 'rotate(-45deg)' : 'rotate(0deg)',
                }}
              />
            </div>
          </button>
        </div>
      </header>

      {/* ─── Mobile Full-Screen Menu Overlay ─── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99] md:hidden bg-[#0F1C2E]/98 overflow-y-auto backdrop-blur-xl"
          >
            {/* Ambient glow orbs */}
            <div className="fixed top-[10%] left-[-15%] w-[320px] h-[320px] rounded-full bg-[var(--neon)]/5 blur-[100px] pointer-events-none" />
            <div className="fixed bottom-[15%] right-[-15%] w-[280px] h-[280px] rounded-full bg-[#00f0ff]/5 blur-[90px] pointer-events-none" />
            
            {/* Elegant fine grid lines */}
            <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:40px_40px]" />

            <div className="relative z-10 flex flex-col justify-between w-full min-h-screen px-6 py-8 pt-[100px]">
              
              <div className="w-full flex flex-col gap-10">
                {/* Menu Header Area */}
                <div className="flex items-center justify-between w-full">
                  <span className="text-[10px] font-mono tracking-[4px] text-white/40 uppercase">Navigation Menu</span>
                  <span className="text-[10px] font-mono tracking-[4px] text-[var(--neon)] uppercase">Trenvity ©</span>
                </div>

                {/* Main Links Area */}
                <nav className="flex flex-col w-full">
                  {navLinks.map((link, idx) => {
                    const active = isActive(link.href);
                    return (
                      <div
                        key={link.href}
                        className="group w-full border-b border-white/5 py-4"
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-4 no-underline w-full"
                        >
                          {/* Premium Index Number */}
                          <span className="text-[11px] font-mono font-bold text-white/20 group-hover:text-[var(--neon)] transition-colors duration-300">
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                          
                          {/* Big elegant text */}
                          <span className="text-3xl font-extrabold uppercase tracking-tight text-white group-hover:text-[var(--neon)] transition-all duration-300">
                            {link.label}
                          </span>
                        </Link>
                      </div>
                    );
                  })}

                  {/* Special Contact Us Link */}
                  <div className="group w-full py-4 mt-2">
                    <Link
                      href="/contact"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-4 no-underline w-full"
                    >
                      <span className="text-[11px] font-mono font-bold text-[var(--neon)]">07</span>
                      <span className="text-3xl font-extrabold uppercase tracking-tight text-[var(--neon)] group-hover:text-white transition-all duration-300">
                        Contact Us
                      </span>
                    </Link>
                  </div>
                </nav>
              </div>

              {/* Bottom Panel (Socials & Contacts) */}
              <div className="flex flex-col gap-6 w-full mt-12 pb-8 border-t border-white/5 pt-6">
                {/* Contact info grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="block text-[9px] font-mono tracking-[2px] text-white/35 uppercase mb-2">Get In Touch</span>
                    <a href="mailto:hello@trenvity.com" className="text-xs font-semibold text-white hover:text-[var(--neon)] no-underline transition-colors duration-300">
                      hello@trenvity.com
                    </a>
                  </div>
                  <div>
                    <span className="block text-[9px] font-mono tracking-[2px] text-white/35 uppercase mb-2">Office</span>
                    <span className="text-xs text-white/80 font-medium">New Delhi, India</span>
                  </div>
                </div>

                {/* Socials / Secondary links */}
                <div className="flex items-center gap-6 mt-4">
                  {['Instagram', 'LinkedIn', 'Dribbble'].map((soc) => (
                    <a 
                      key={soc}
                      href="#" 
                      className="text-[10px] font-mono tracking-[1px] text-white/40 hover:text-white transition-colors duration-300 no-underline"
                    >
                      {soc}
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content from hiding behind fixed header */}
      <div className="h-[80px] md:h-[95px]" />
    </>
  );
}
