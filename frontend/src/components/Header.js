'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Performance', href: '/performance-marketing' },
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
      <div
        id="mobile-menu-overlay"
        className="fixed inset-0 z-[99] md:hidden pointer-events-none"
        style={{
          opacity: mobileOpen ? 1 : 0,
          visibility: mobileOpen ? 'visible' : 'hidden',
          transition: 'opacity 0.4s ease, visibility 0.4s ease',
        }}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0"
          style={{
            background: 'rgba(10, 18, 30, 0.97)',
            backdropFilter: 'blur(30px) saturate(1.5)',
            WebkitBackdropFilter: 'blur(30px) saturate(1.5)',
            pointerEvents: mobileOpen ? 'auto' : 'none',
          }}
          onClick={() => setMobileOpen(false)}
        />

        {/* Ambient glow orbs */}
        <div className="absolute top-[15%] left-[-20%] w-[300px] h-[300px] rounded-full bg-[var(--neon)]/5 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[20%] right-[-15%] w-[250px] h-[250px] rounded-full bg-[#00f0ff]/5 blur-[80px] pointer-events-none" />

        {/* Menu content */}
        <nav
          className="relative h-full flex flex-col justify-center items-center gap-2 px-8"
          style={{ pointerEvents: mobileOpen ? 'auto' : 'none' }}
        >
          {navLinks.map((link, idx) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className="group relative w-full max-w-[320px] no-underline"
                onClick={() => setMobileOpen(false)}
                style={{
                  opacity: mobileOpen ? 1 : 0,
                  transform: mobileOpen ? 'translateY(0)' : 'translateY(24px)',
                  transition: `opacity 0.4s ease ${idx * 0.08 + 0.15}s, transform 0.4s ease ${idx * 0.08 + 0.15}s`,
                }}
              >
                <div
                  className="flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300"
                  style={{
                    background: active ? 'rgba(156,190,36,0.08)' : 'rgba(255,255,255,0.02)',
                    border: `1px solid ${active ? 'rgba(156,190,36,0.2)' : 'rgba(255,255,255,0.04)'}`,
                  }}
                >
                  {/* Index number */}
                  <span
                    className="text-[11px] font-mono font-bold tracking-wider"
                    style={{ color: active ? 'var(--neon)' : 'rgba(255,255,255,0.2)' }}
                  >
                    0{idx + 1}
                  </span>

                  {/* Link text */}
                  <span
                    className="text-[22px] font-bold tracking-[-0.5px]"
                    style={{ color: active ? '#ffffff' : 'rgba(255,255,255,0.65)' }}
                  >
                    {link.label}
                  </span>

                  {/* Active dot */}
                  {active && (
                    <span className="ml-auto flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-[var(--neon)] opacity-50" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--neon)]" />
                    </span>
                  )}

                  {/* Arrow on hover */}
                  {!active && (
                    <span className="ml-auto text-white/20 text-lg transition-all duration-300 group-hover:text-white/50 group-hover:translate-x-1">
                      →
                    </span>
                  )}
                </div>
              </Link>
            );
          })}

          {/* Mobile CTA */}
          <div
            className="mt-6 w-full max-w-[320px]"
            style={{
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? 'translateY(0)' : 'translateY(24px)',
              transition: `opacity 0.4s ease ${navLinks.length * 0.08 + 0.2}s, transform 0.4s ease ${navLinks.length * 0.08 + 0.2}s`,
            }}
          >
            <Link
              href="/contact"
              className="flex items-center justify-center w-full py-4 text-[12px] font-bold tracking-[2px] uppercase no-underline rounded-full transition-all duration-300"
              style={{
                background: 'var(--neon)',
                color: '#0F1C2E',
                boxShadow: '0 0 30px rgba(156,190,36,0.2)',
              }}
              onClick={() => setMobileOpen(false)}
            >
              Contact Us
            </Link>
          </div>

          {/* Bottom decorative line */}
          <div
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3"
            style={{
              opacity: mobileOpen ? 1 : 0,
              transition: 'opacity 0.4s ease 0.5s',
            }}
          >
            <span className="w-8 h-[1px] bg-white/10" />
            <span className="text-[9px] font-mono tracking-[3px] text-white/20 uppercase">no limits studio</span>
            <span className="w-8 h-[1px] bg-white/10" />
          </div>
        </nav>
      </div>

      {/* Spacer to prevent content from hiding behind fixed header */}
      <div className="h-[80px] md:h-[95px]" />
    </>
  );
}
