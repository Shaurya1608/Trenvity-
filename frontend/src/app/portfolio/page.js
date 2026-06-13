'use client';

import React, { useState, useRef, useEffect, useCallback, memo } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Reveal, { StaggerContainer, StaggerItem } from '@/components/Reveal';
import ExploreDocks from '@/components/ExploreDocks';

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */
const showcase = [
  {
    id: '001',
    title: 'Nexus Brand Identity',
    category: 'Brand Design',
    year: '2024',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop',
    accent: '#c8f000',
  },
  {
    id: '002',
    title: 'Brand Campaign Reel',
    category: 'Motion',
    year: '2026',
    type: 'video',
    src: '/data/video/brand-campaign-reel.mp4',
    accent: '#00f0ff',
  },
  {
    id: '003',
    title: 'Trenvity SMM Dashboard',
    category: 'UI/UX Design',
    year: '2024',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
    accent: '#00f0ff',
  },
  {
    id: '004',
    title: 'Full Production Showcase',
    category: 'Production',
    year: '2026',
    type: 'video',
    src: '/data/video/production-showcase.mp4',
    accent: '#ff007f',
  },
  {
    id: '005',
    title: 'Brutalist E-Commerce',
    category: 'Web Dev',
    year: '2024',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1000&auto=format&fit=crop',
    accent: '#c8f000',
  },
  {
    id: '006',
    title: 'Editorial Motion Reel',
    category: 'Motion Design',
    year: '2023',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop',
    accent: '#ff007f',
  },
];

const stats = [
  { value: '120+', label: 'Projects Launched' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '4.8x', label: 'Avg. ROI Lift' },
  { value: '6yr', label: 'Industry Experience' },
];

const processSteps = [
  {
    step: '01',
    title: 'Discovery',
    desc: 'Deep-dive session to extract brand goals, audience profiling, and competitor landscape audit.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Strategy',
    desc: 'We architect a tailored blueprint — wireframes, content scaffolding, and conversion pathway design.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Creation',
    desc: 'Headless development with custom component libraries, animation systems, and integrated APIs.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    step: '04',
    title: 'Launch & Scale',
    desc: 'Deployed to global edge networks with performance monitoring, A/B testing, and growth loops.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
];


/* ─────────────────────────────────────────────
   SHOWCASE CARD (Memoized)
   ───────────────────────────────────────────── */
const ShowcaseCard = memo(function ShowcaseCard({ item, onSelect }) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  // Lazy-load via IntersectionObserver
  useEffect(() => {
    let observer;
    const setup = () => {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { rootMargin: '300px 0px', threshold: 0.1 }
      );
      if (containerRef.current) observer.observe(containerRef.current);
    };
    if ('requestIdleCallback' in window) {
      const id = requestIdleCallback(setup);
      return () => { cancelIdleCallback(id); observer?.disconnect(); };
    } else {
      setup();
      return () => observer?.disconnect();
    }
  }, []);

  return (
    <article
      ref={containerRef}
      className="group relative w-full aspect-[5/4] md:aspect-square rounded-2xl md:rounded-[24px] overflow-hidden bg-white/5 border border-white/10 hover:border-white/25 transition-all duration-500 cursor-pointer shadow-lg hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
      style={{ willChange: 'transform' }}
      onClick={() => onSelect && onSelect(item)}
      role="button"
      aria-label={`View ${item.title}`}
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelect && onSelect(item); } }}
    >
      {/* Index Badge */}
      <div className="absolute top-4 left-4 z-20 pointer-events-none">
        <span className="text-[10px] font-mono font-bold tracking-[2px] text-white/40 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-md border border-white/10">
          {item.id}
        </span>
      </div>

      {/* Background Media */}
      {item.type === 'video' ? (
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          {isVisible ? (
            <video
              src={item.src}
              preload="metadata"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          ) : (
            <div className="absolute inset-0 bg-white/[0.03] animate-pulse rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] via-white/[0.06] to-transparent animate-[shimmer_2s_ease-in-out_infinite]" />
            </div>
          )}

          {/* Play/Pause Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shadow-lg border border-white/30 transition-transform duration-300 group-hover:scale-110">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
        </div>
      ) : (
        <figure className="absolute inset-0 w-full h-full m-0">
          {/* Shimmer skeleton while image loads */}
          {!imgLoaded && (
            <div className="absolute inset-0 bg-white/[0.03]">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent animate-[shimmer_2s_ease-in-out_infinite]" />
            </div>
          )}
          <Image
            src={item.src}
            alt={`${item.title} — ${item.category} project by Trenvity`}
            fill
            sizes="(max-width: 640px) 75vw, 320px"
            className={`object-cover group-hover:scale-105 transition-transform duration-700 ease-out ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImgLoaded(true)}
          />
        </figure>
      )}

      {/* Cinematic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 via-50% to-black/10 pointer-events-none" />

      {/* Accent Glow on Hover */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `linear-gradient(to top, ${item.accent}15, transparent)`,
        }}
      />

      {/* Card Content Overlay */}
      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 flex flex-col pointer-events-none z-10">
        <h3 className="text-[20px] md:text-[24px] font-extrabold text-white leading-tight mb-2 md:mb-3 drop-shadow-md">
          {item.title}
        </h3>

        <div className="flex items-center gap-3">
          <span
            className="text-[10px] md:text-[11px] font-bold uppercase tracking-[1.5px] px-2.5 py-1 rounded-full border bg-white/10 border-white/20 text-white/90 backdrop-blur-sm shadow-sm"
            style={{ borderColor: `${item.accent}40` }}
          >
            {item.category}
          </span>
          <span className="text-[11px] md:text-[12px] font-mono text-white/50 tracking-[1px]">
            {item.year}
          </span>
        </div>
      </div>
    </article>
  );
});


/* ─────────────────────────────────────────────
   FLOATING PARTICLES (CTA)
   ───────────────────────────────────────────── */
function FloatingParticles() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 6 + 4,
        delay: Math.random() * 4,
      }))
    );
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-[var(--neon)]"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: 0,
          }}
          animate={{
            opacity: [0, 0.4, 0],
            y: [0, -30, -60],
            scale: [1, 1.3, 0.8],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}


/* ─────────────────────────────────────────────
   MAIN PAGE
   ───────────────────────────────────────────── */
export default function PortfolioPage() {
  const [selectedItem, setSelectedItem] = useState(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedItem]);

  return (
    <div className="relative w-full min-h-screen bg-[var(--background)] text-white overflow-hidden selection:bg-[var(--neon)] selection:text-black">

      <Header />

      {/* ============================================
         1. EDITORIAL HERO SECTION
         ============================================ */}
      <section
        className="relative w-full h-screen flex flex-col justify-between overflow-hidden -mt-[80px] md:-mt-[95px] pt-[80px] md:pt-[95px]"
        role="banner"
        aria-label="Portfolio hero"
      >
        {/* Rich dark textured gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(200,240,0,0.04)_0%,transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(0,240,255,0.03)_0%,transparent_50%)] pointer-events-none" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff04_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.6)_100%)] pointer-events-none" aria-hidden="true" />

        {/* Animated gradient orb behind title */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(200,240,0,0.06) 0%, rgba(0,240,255,0.03) 40%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        />

        {/* Background repeating PORTFOLIO marquee text */}
        <div className="absolute top-1/2 -translate-y-1/2 w-full overflow-hidden pointer-events-none opacity-[0.03]" aria-hidden="true">
          <div className="animate-marquee whitespace-nowrap flex">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="text-[20vw] font-black uppercase tracking-[-0.04em] text-white mx-8 shrink-0 select-none">
                PORTFOLIO
              </span>
            ))}
          </div>
        </div>

        {/* Top row meta labels */}
        <div className="relative z-10 w-full px-8 md:px-14 lg:px-20 pt-2 flex items-start justify-between">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-0.5"
          >
            <span className="text-[10px] uppercase tracking-[2px] text-white/40 font-mono">Updated</span>
            <span className="text-[11px] font-bold tracking-[1px] text-white/60">June 2024</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col gap-0.5 text-right"
          >
            <span className="text-[10px] uppercase tracking-[2px] text-white/40 font-mono">Specialty</span>
            <span className="text-[11px] font-bold tracking-[1px] text-white/60">Web & Brand Design</span>
          </motion.div>
        </div>

        {/* GIANT HERO TITLE BLOCK */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-16 -mt-8">
          <div className="relative w-full flex flex-col items-center md:items-start">
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
              className="font-black uppercase text-white tracking-[-0.03em] leading-[0.85] select-none w-full text-center md:text-left"
              style={{ fontSize: 'clamp(34px, 11vw, 200px)' }}
            >
              PORTFOLIO
            </motion.h1>

            {/* Year Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5, type: 'spring', stiffness: 200 }}
              className="mt-4 md:mt-0 md:absolute md:-top-3 md:right-0"
            >
              <span className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-[var(--neon)] text-black font-black text-sm md:text-base tracking-[1px]">
                2024
              </span>
            </motion.div>
          </div>

          {/* Bottom subtitle row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-end justify-between mt-3 md:mt-5"
          >
            <span className="text-[13px] md:text-[15px] font-medium text-white/50 tracking-[0.5px]">Digital Agency</span>
            <span className="text-[13px] md:text-[15px] font-medium text-white/50 tracking-[0.5px]">Trenvity Studio</span>
          </motion.div>
        </div>

        {/* Bottom rule line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}
          className="relative z-10 mx-8 md:mx-14 lg:mx-20 mb-10 h-[1px] bg-white/10 origin-left"
          aria-hidden="true"
        />

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="relative z-10 flex items-center justify-center pb-10 gap-3"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
            aria-hidden="true"
          >
            <span className="w-1 h-2 rounded-full bg-[var(--neon)]" />
          </motion.div>
          <span className="text-[10px] text-white/30 uppercase tracking-[2px] font-mono">Scroll to explore</span>
        </motion.div>
      </section>

      {/* ============================================
         2. LIVE STATS MARQUEE (CSS-driven)
         ============================================ */}
      <section className="relative w-full border-t border-b border-white/5 bg-[var(--background)] overflow-hidden py-6" aria-label="Company statistics">
        <div className="flex gap-0 w-max animate-marquee" style={{ animationDuration: '25s' }}>
          {[...stats, ...stats].map((stat, i) => (
            <div key={i} className="flex items-center gap-6 px-10 border-r border-white/5 shrink-0">
              <span className="text-[36px] md:text-[48px] font-black tracking-[-2px] text-white leading-none whitespace-nowrap">
                {stat.value}
              </span>
              <span className="text-[10px] uppercase tracking-[2px] text-white/40 font-mono whitespace-nowrap max-w-[80px] leading-tight">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================
         3. SHOWCASE CAROUSEL
         ============================================ */}
      <section
        className="relative w-full py-14 md:py-20 bg-[var(--background)]"
        role="region"
        aria-label="Selected works showcase"
        aria-roledescription="carousel"
      >
        <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 lg:px-20">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <Reveal>
              <span className="text-[var(--neon)] font-bold text-xs uppercase tracking-[2px] block mb-2 font-mono">
                Selected Works
              </span>
              <h2 className="text-[24px] md:text-[36px] font-extrabold tracking-[-1.5px] leading-[1.1] uppercase">
                WORK THAT <br />
                SPEAKS IMPACT
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="max-w-[380px] text-white/50 text-[11px] md:text-[12px] leading-relaxed">
                Explore our best work — images and video reels, curated just for you.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8 px-6 md:px-12 lg:px-20">
          {showcase.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.1}>
              <ShowcaseCard item={item} onSelect={setSelectedItem} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============================================
         4. PROCESS TIMELINE
         ============================================ */}
      <section className="relative w-full py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-[var(--background)] border-t border-white/5" role="region" aria-label="Our creative process">
        <div className="max-w-[1400px] mx-auto w-full">

          <Reveal className="text-center mb-16">
            <span className="text-[var(--neon)] font-bold text-xs uppercase tracking-[2px] block mb-3 font-mono">
              Creative Process
            </span>
            <h2 className="text-[32px] md:text-[56px] font-extrabold tracking-[-2px] leading-[1] uppercase">
              HOW WE EXECUTE
            </h2>
          </Reveal>

          {/* Steps with connecting rail */}
          <div className="relative">
            {/* Connecting rail line (desktop only) */}
            <div className="hidden lg:block absolute top-[52px] left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-[1px] z-0" aria-hidden="true">
              <div className="w-full h-full bg-gradient-to-r from-[var(--neon)]/30 via-white/10 to-[var(--neon)]/30" />
            </div>

            <div className="flex lg:grid lg:grid-cols-4 gap-4 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 lg:mx-0 lg:px-0">
              {processSteps.map((item, idx) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  className="relative p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-[var(--neon)]/30 transition-all duration-300 group hover:-translate-y-1 snap-start shrink-0 w-[75vw] sm:w-[45vw] lg:w-auto"
                >
                  {/* Step icon + number */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="relative w-10 h-10 rounded-xl bg-[var(--neon)]/10 border border-[var(--neon)]/20 flex items-center justify-center text-[var(--neon)] group-hover:bg-[var(--neon)]/20 group-hover:shadow-[0_0_20px_rgba(200,240,0,0.15)] transition-all duration-300">
                      {item.icon}
                    </div>
                    <span className="font-mono text-[var(--neon)] text-[11px] font-bold tracking-[2px]">{item.step}</span>
                  </div>

                  <h3 className="text-xl font-extrabold uppercase tracking-tight text-white mb-3">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>

                  {/* Corner accent */}
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[var(--neon)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-br-2xl" aria-hidden="true" />
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ============================================
         5. TESTIMONIAL STRIP
         ============================================ */}
      <section className="relative w-full py-20 px-6 md:px-12 lg:px-20 border-t border-white/5 bg-[var(--background)] overflow-hidden" role="region" aria-label="Client testimonial">
        <div className="max-w-[900px] mx-auto text-center relative">
          {/* Large decorative quotation mark */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 pointer-events-none select-none" aria-hidden="true">
            <span className="text-[120px] md:text-[180px] font-black leading-none text-[var(--neon)]/[0.06]">&ldquo;</span>
          </div>

          <Reveal>
            <div className="mb-6 flex justify-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.svg
                  key={i}
                  className="w-5 h-5 text-[var(--neon)]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, type: 'spring', stiffness: 300 }}
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </motion.svg>
              ))}
            </div>
            <blockquote>
              <p className="text-[22px] md:text-[30px] font-bold text-white leading-tight mb-8 italic tracking-[-0.5px]">
                &ldquo;Trenvity delivered a custom headless site that outperformed our old WordPress install by 8x on load speed. The brutalist aesthetic they brought to our brand converted our landing page at 14% — a 3x increase.&rdquo;
              </p>
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center relative">
                {/* Gradient ring around avatar */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--neon)] to-[#00f0ff] p-[2px]" aria-hidden="true">
                  <div className="w-full h-full rounded-full bg-[var(--background)] flex items-center justify-center">
                    <span className="text-[var(--neon)] font-black text-sm">JK</span>
                  </div>
                </div>
              </div>
              <div className="text-left">
                <cite className="not-italic">
                  <span className="text-sm font-bold text-white block">Jordan Kim</span>
                  <span className="text-xs text-white/40 uppercase tracking-[1px]">CEO, Nexus SaaS Platform</span>
                </cite>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================
         6. FINAL CTA
         ============================================ */}
      <section className="relative w-full py-24 lg:py-32 px-6 md:px-12 lg:px-20 border-t border-white/5 bg-[var(--background)]" role="region" aria-label="Start your project">
        <div className="max-w-[1000px] mx-auto text-center relative">
          {/* Background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[var(--neon)]/8 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

          {/* Floating particles */}
          <FloatingParticles />

          <Reveal>
            <span className="text-[var(--neon)] font-bold text-xs uppercase tracking-[2px] block mb-4 font-mono">Let&apos;s Build</span>
            <h2 className="text-[36px] sm:text-[52px] lg:text-[72px] font-extrabold tracking-[-2px] leading-none uppercase mb-6">
              YOUR PROJECT <br />
              DESERVES THIS
            </h2>
            <p className="text-white/60 text-sm sm:text-base max-w-[500px] mx-auto mb-10 leading-relaxed">
              From brutal identity systems to performance headless builds — we architect brands that leave permanent digital marks.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-10 py-4 bg-[var(--neon)] text-black font-black text-[13px] tracking-[1.5px] uppercase rounded-full hover:scale-[1.03] hover:shadow-[0_0_50px_rgba(200,240,0,0.3)] transition-all duration-300 shadow-[0_0_40px_rgba(200,240,0,0.2)]"
              >
                Start Your Project
              </Link>
              <Link
                href="/"
                className="w-full sm:w-auto px-10 py-4 border border-white/15 text-white font-bold text-[13px] tracking-[1px] uppercase rounded-full hover:bg-white/5 hover:border-white/25 transition-all duration-300"
              >
                Back to Home
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <ExploreDocks />
      <Footer />

      {/* ============================================
         MEDIA MODAL
         ============================================ */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 md:p-10"
              onClick={() => setSelectedItem(null)}
            >
              {/* Close Button */}
              <button
                className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 rounded-full bg-white/10 hover:bg-[var(--neon)] hover:text-black text-white flex items-center justify-center transition-all duration-300 z-[210] border border-white/20"
                onClick={() => setSelectedItem(null)}
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Content */}
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="relative w-full max-w-[1200px] h-[85vh] md:h-[90vh] flex flex-col items-center justify-center pointer-events-none mt-10 md:mt-0"
              >
                {/* Media Container */}
                <div 
                  className="relative flex items-center justify-center w-full flex-1 pointer-events-auto shrink-0"
                  style={{ maxHeight: '70vh' }}
                  onClick={(e) => e.stopPropagation()} 
                >
                  {selectedItem.type === 'video' ? (
                    <video
                      src={selectedItem.src}
                      className="max-w-full max-h-[65vh] md:max-h-[75vh] rounded-xl shadow-[0_0_80px_rgba(0,0,0,0.8)] object-contain border border-white/10"
                      controls
                      autoPlay
                      playsInline
                    />
                  ) : (
                    <img
                      src={selectedItem.src}
                      alt={selectedItem.title}
                      className="max-w-full max-h-[65vh] md:max-h-[75vh] rounded-xl shadow-[0_0_80px_rgba(0,0,0,0.8)] object-contain border border-white/10"
                    />
                  )}
                </div>

                {/* Media Info Footer (Floating Below) */}
                <div 
                  className="mt-6 md:mt-8 flex flex-col items-center justify-center text-center pointer-events-auto shrink-0 px-4"
                  onClick={(e) => e.stopPropagation()} 
                >
                  <h2 className="text-xl md:text-3xl font-black text-white uppercase tracking-tight mb-3 drop-shadow-md">
                    {selectedItem.title}
                  </h2>
                  <div className="flex items-center justify-center gap-3">
                    <span
                      className="text-[10px] md:text-[11px] font-bold uppercase tracking-[1.5px] px-4 py-1.5 rounded-full border backdrop-blur-md shadow-sm"
                      style={{ color: selectedItem.accent, borderColor: `${selectedItem.accent}40`, backgroundColor: `${selectedItem.accent}15` }}
                    >
                      {selectedItem.category}
                    </span>
                    <span className="text-[11px] md:text-[12px] font-mono text-white/70 tracking-[1px] drop-shadow-md">
                      {selectedItem.year}
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}
