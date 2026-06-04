'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Reveal, { StaggerContainer, StaggerItem } from '@/components/Reveal';

export default function BlogPage() {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' or 'yearly'
  const [activeArticle, setActiveArticle] = useState(0);

  const articles = [
    {
      id: '01',
      category: 'Search & SEO',
      readTime: '4 min read',
      title: 'Unraveling the 2026 Core Algorithm Shift',
      description: 'Search engines have restructured how organic citations are handled. Discover how real-time brand citations, active social media mentions, and semantic authority loops completely bypass traditional backlink models.',
      color: '#c8f000',
    },
    {
      id: '02',
      category: 'Brutalist Design',
      readTime: '6 min read',
      title: 'Brutalist Web Aesthetics: Converting Ambitious Audiences',
      description: 'Why do flat, generic layouts fail to convert high-value clients? Analyze the psychology behind massive, high-contrast condensed typography, layered Z-depth masks, and aggressive micro-animations.',
      color: '#00f0ff',
    },
    {
      id: '03',
      category: 'Headless Systems',
      readTime: '5 min read',
      title: 'Headless Content Pipelines: Bypassing Legacy Caches',
      description: 'WordPress is static bloat. Explore how decoupled React structures connected to direct database content engines result in immediate sub-millisecond response rates around the globe.',
      color: '#ff007f',
    },
  ];

  const subscriptionTiers = [
    {
      name: 'Standard Digest',
      price: billingCycle === 'monthly' ? 0 : 0,
      description: 'Get our weekly curated marketing insights and custom case studies straight to your inbox.',
      features: [
        'Weekly Article Dispatch',
        'Initial Case Studies access',
        'Basic Design Trend updates',
        'Public Slack Community',
      ],
      popular: false,
      cta: 'Subscribe Free',
    },
    {
      name: 'Insider Intel',
      price: billingCycle === 'monthly' ? 19 : 15,
      description: 'Our most valued tier. Deep-dive algorithm breakdowns, private templates, and custom code modules.',
      features: [
        'All Public Articles (Early Access)',
        'Private Next.js/CSS Templates',
        'Algorithm Change Alert notifications',
        'Direct Strategist Q&A desk',
        'Interactive Figma Mockup Assets',
      ],
      popular: true,
      cta: 'Access Intel',
    },
    {
      name: 'Corporate Brain',
      price: billingCycle === 'monthly' ? 89 : 69,
      description: 'Enterprise intelligence suite. Designed for scaling marketing agencies, engineering teams, and digital heads.',
      features: [
        'Unlimited Team Seats',
        'Custom Curated Competitor audits',
        'Monthly Live Strategic Audits',
        'Direct Edge Deployment pipelines',
        'All Premium Code & Theme modules',
      ],
      popular: false,
      cta: 'Get Corporate Brain',
    },
  ];

  return (
    <div className="relative w-full min-h-screen bg-[var(--background)] text-white overflow-hidden selection:bg-[var(--neon)] selection:text-black">
      {/* Background Neon Glow Spheres */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[var(--neon)]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#00f0ff]/5 blur-[150px] pointer-events-none" />
      <div className="absolute top-[40%] right-[25%] w-[400px] h-[400px] rounded-full bg-[#ff007f]/5 blur-[130px] pointer-events-none" />

      <Header />

      {/* ============================================
         1. HERO / LANDING SECTION (BRUTALIST REDESIGN)
         ============================================ */}
      <section className="relative w-full min-h-[95vh] flex flex-col justify-between pt-8 pb-24 px-6 md:px-12 lg:px-20 z-10 overflow-hidden bg-[var(--background)]">
        
        {/* Decorative Grid texture */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-60" />

        {/* Top Spacer */}
        <div className="h-4 md:h-8" />

        {/* Central Core: Giant Background Typography & Overlay Character */}
        <div className="relative w-full max-w-[1400px] mx-auto flex-1 flex items-center justify-center py-6 min-h-[50vh]">
          
          {/* HUGE BACKGROUND TEXT */}
          <div className="absolute inset-0 flex flex-col justify-center items-center select-none pointer-events-none z-0 -translate-y-4 sm:-translate-y-8 md:-translate-y-12 px-6 sm:px-16 md:px-24 lg:px-32">
            <h1 className="text-[10.5vw] font-black tracking-[-0.04em] uppercase text-white leading-[0.78] text-center w-full font-sans select-none opacity-[0.98] flex flex-col items-center justify-center">
              <span className="block truncate scale-x-[1.05] tracking-[-0.05em] origin-center">DON'T BE SILENT</span>
              <span className="block text-[6vw] tracking-[0.14em] font-medium text-white/95 mt-4">SHARE THE INSIGHT</span>
            </h1>
          </div>

          {/* FOREGROUND: Floating Blog Character Image resting behind the torn paper divider */}
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
            className="absolute bottom-[-96px] sm:bottom-[-96px] left-1/2 -translate-x-1/2 z-15 w-[280px] sm:w-[380px] md:w-[420px] aspect-square pointer-events-none select-none"
          >
            <Image
              src="/landing/trenvity-aboutr.png"
              alt="Trenvity Blog Character"
              fill
              priority
              className="object-contain object-bottom filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)]"
            />
          </motion.div>

        </div>

        {/* Removed BOTTOM NAVIGATION */}

        {/* JAGGED TORN PAPER DIVIDER SVG */}
        <div className="absolute bottom-0 left-0 right-0 w-full z-20 pointer-events-none flex flex-col">
          <svg
            viewBox="0 0 1440 80"
            fill="none"
            preserveAspectRatio="none"
            className="w-full h-[60px] md:h-[80px]"
          >
            <path
              d="M0,45 L60,10 L110,50 L200,5 L280,45 L350,15 L410,55 L490,10 L580,40 L640,5 L710,50 L790,20 L850,60 L940,15 L1020,55 L1090,10 L1170,45 L1250,5 L1320,50 L1390,20 L1440,45 L1440,80 L0,80 Z"
              fill="#060606"
            />
            {/* The white border stroke, unclosed so it only strokes the top edge */}
            <path
              d="M0,45 L60,10 L110,50 L200,5 L280,45 L350,15 L410,55 L490,10 L580,40 L640,5 L710,50 L790,20 L850,60 L940,15 L1020,55 L1090,10 L1170,45 L1250,5 L1320,50 L1390,20 L1440,45"
              fill="none"
              stroke="#ffffff"
              strokeOpacity="0.3"
              strokeWidth="2"
            />
          </svg>
          {/* Solid filler to push the zig-zag up further into the hero */}
          <div className="w-full h-[10px] sm:h-[15px] bg-[var(--secondary-bg)]" />
        </div>

      </section>

      {/* ============================================
         2. EDITORIAL ARTICLE FEED SECTION
         ============================================ */}
      <section id="feed" className="relative w-full py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-[var(--secondary-bg)]">
        <div className="max-w-[1400px] mx-auto w-full">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 md:mb-16 gap-6">
            <Reveal>
              <span className="text-[var(--neon)] font-bold text-xs uppercase tracking-[2px] block mb-3 font-mono">
                Editorial Library
              </span>
              <h2 className="text-[28px] md:text-[44px] font-extrabold tracking-[-2px] leading-[1] uppercase">
                AMPLIFIED IDEAS & <br />
                ALGORITHM FORECASTS
              </h2>
            </Reveal>
            <Reveal delay={0.2} className="max-w-[380px] text-white/50 text-sm">
              No generic fluff pieces. We audit direct data shifts, layout conversion metrics, and codebase optimizations.
            </Reveal>
          </div>

          {/* Interactive Morphing Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* Left Nav Toggles */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
              {articles.map((article, idx) => (
                <button
                  key={article.id}
                  onClick={() => setActiveArticle(idx)}
                  className={`text-left p-6 sm:p-8 rounded-2xl border transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                    activeArticle === idx
                      ? 'bg-white/[0.03] border-white/10 shadow-lg'
                      : 'bg-transparent border-transparent opacity-40 hover:opacity-75'
                  }`}
                >
                  {/* Indicator Line */}
                  {activeArticle === idx && (
                    <motion.div
                      layoutId="activeArticleBarBlog"
                      className="absolute left-0 top-0 bottom-0 w-[3px]"
                      style={{ backgroundColor: article.color }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}

                  <div className="flex gap-4 items-start">
                    <span
                      className="font-mono text-xs font-bold px-2.5 py-0.5 rounded border border-white/10 bg-white/5"
                      style={{ color: activeArticle === idx ? article.color : 'inherit' }}
                    >
                      {article.id}
                    </span>
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-[1.5px] text-white/40 block mb-1">
                        {article.category}
                      </span>
                      <h3 className="text-lg md:text-xl font-bold tracking-tight text-white mb-2 line-clamp-1">
                        {article.title}
                      </h3>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Right Morphing Showcase Area */}
            <div className="lg:col-span-7 flex">
              <div className="relative w-full p-8 sm:p-12 bg-white/[0.02] border border-white/5 rounded-3xl backdrop-blur-2xl flex flex-col justify-between overflow-hidden">
                
                {/* Colorful Floating Glow Sphere */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeArticle}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                    className="absolute -top-12 -right-12 w-64 h-64 rounded-full blur-[80px] pointer-events-none opacity-40"
                    style={{ backgroundColor: articles[activeArticle].color }}
                  />
                </AnimatePresence>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeArticle}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="space-y-8 flex-1 flex flex-col justify-between z-10"
                  >
                    <div>
                      <div className="flex justify-between items-center mb-6">
                        <span
                          className="text-xs font-bold uppercase tracking-[2px] font-mono"
                          style={{ color: articles[activeArticle].color }}
                        >
                          {articles[activeArticle].category}
                        </span>
                        <span className="text-xs text-white/40 uppercase tracking-[1px]">
                          {articles[activeArticle].readTime}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mb-6">
                        {articles[activeArticle].title}
                      </h3>
                      <p className="text-white/60 text-sm sm:text-base leading-relaxed tracking-[0.2px]">
                        {articles[activeArticle].description}
                      </p>
                    </div>

                    {/* Interactive Simulated Metric Module */}
                    <div className="p-6 bg-black/40 border border-white/5 rounded-2xl flex items-center justify-between">
                      <span className="text-[12px] font-bold text-white tracking-[0.5px]">
                        Read full breakdown & deploy resources
                      </span>
                      <Link
                        href="#"
                        className="px-6 py-3 rounded-full text-xs font-bold tracking-[1.5px] uppercase transition-all duration-300"
                        style={{
                          backgroundColor: articles[activeArticle].color,
                          color: '#000',
                        }}
                      >
                        Launch Intel &rarr;
                      </Link>
                    </div>
                  </motion.div>
                </AnimatePresence>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================
         3. PRICING & TIERS SECTION
         ============================================ */}
      <section id="subscription" className="relative w-full py-20 lg:py-32 px-6 md:px-12 lg:px-20 border-t border-white/5 bg-gradient-to-b from-[#060606] to-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto w-full">
          
          <div className="flex flex-col items-center text-center mb-16">
            <Reveal>
              <span className="text-[var(--neon)] font-bold text-xs uppercase tracking-[2px] block mb-3 font-mono">
                Editorial Insider Circles
              </span>
              <h2 className="text-[32px] md:text-[56px] font-extrabold tracking-[-2px] leading-[1] uppercase mb-6">
                SUBSCRIBE TO DIRECT <br />
                INTEL DISPATCHES
              </h2>
            </Reveal>

            {/* billing switch toggle */}
            <Reveal delay={0.1}>
              <div className="inline-flex items-center p-1 bg-white/[0.03] border border-white/5 rounded-full relative z-10 backdrop-blur-xl">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-[1.5px] uppercase transition-all duration-300 cursor-pointer ${
                    billingCycle === 'monthly'
                      ? 'bg-[var(--neon)] text-black shadow-md'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle('yearly')}
                  className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-[1.5px] uppercase transition-all duration-300 relative cursor-pointer ${
                    billingCycle === 'yearly'
                      ? 'bg-[var(--neon)] text-black shadow-md'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  Yearly
                  <span className="absolute -top-3 -right-3 px-2 py-0.5 rounded-full bg-[#ff007f] text-white text-[8px] font-bold tracking-[1px] shadow-sm uppercase animate-bounce">
                    -20%
                  </span>
                </button>
              </div>
            </Reveal>
          </div>

          {/* Pricing Grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch max-w-[1240px] mx-auto">
            {subscriptionTiers.map((tier, idx) => (
              <StaggerItem key={tier.name} className="flex">
                <div
                  className={`w-full p-8 rounded-3xl border flex flex-col justify-between relative transition-all duration-300 hover:-translate-y-2 backdrop-blur-xl ${
                    tier.popular
                      ? 'bg-white/[0.03] border-[var(--neon)] shadow-[0_0_30px_rgba(200,240,0,0.15)]'
                      : 'bg-white/[0.01] border-white/5 hover:border-white/20'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute top-0 right-8 -translate-y-1/2 bg-[var(--neon)] text-black px-4 py-1.5 rounded-full text-[9px] font-bold tracking-[1.5px] uppercase shadow-md">
                      Highly Requested
                    </div>
                  )}

                  <div>
                    <div className="mb-6">
                      <h3 className="text-xl font-bold tracking-tight text-white mb-2">{tier.name}</h3>
                      <p className="text-xs text-white/50 leading-relaxed min-h-[48px]">{tier.description}</p>
                    </div>

                    <div className="flex items-baseline gap-2 mb-8">
                      <span className="text-[14px] text-white/40 font-medium">$</span>
                      <motion.span
                        key={tier.price}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[48px] font-black text-white tracking-[-1.5px] leading-none"
                      >
                        {tier.price}
                      </motion.span>
                      <span className="text-[12px] text-white/40 tracking-[1px] uppercase">/ month</span>
                    </div>

                    <ul className="space-y-4 mb-8 list-none p-0 m-0 border-t border-white/5 pt-6">
                      {tier.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-3 text-sm text-white/80">
                          <svg
                            className={`w-4 h-4 shrink-0 ${tier.popular ? 'text-[var(--neon)]' : 'text-white/40'}`}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="tracking-[0.2px]">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="#"
                    className={`w-full py-4 text-center text-[12px] font-bold tracking-[1.5px] uppercase rounded-[50%/80%] transition-all duration-300 cursor-pointer ${
                      tier.popular
                        ? 'bg-[var(--neon)] text-black hover:scale-[1.02] shadow-[0_0_20px_rgba(200,240,0,0.2)]'
                        : 'border border-white/20 text-white hover:bg-white/5'
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </section>

      {/* ============================================
         4. PERSISTENT CONVERTING CTA FOOTER BLOCK
         ============================================ */}
      <section className="relative w-full py-16 lg:py-24 px-6 md:px-12 lg:px-20 border-t border-white/5 bg-black">
        <div className="max-w-[1000px] mx-auto w-full text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[var(--neon)]/10 rounded-full blur-[100px] pointer-events-none" />
          
          <Reveal>
            <h2 className="text-[36px] sm:text-[48px] lg:text-[60px] font-extrabold tracking-[-1.5px] leading-none uppercase mb-6">
              LET'S START <br />
              YOUR INTEL LOOP
            </h2>
            <p className="text-white/60 text-sm sm:text-base max-w-[500px] mx-auto mb-10 leading-relaxed">
              Unlock our direct dispatch network. Learn the codes, the layout optimizations, and direct organic velocity hooks.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                href="#subscription"
                className="w-full sm:w-auto px-8 py-4 bg-[var(--neon)] text-black font-bold text-[13px] tracking-[1px] uppercase rounded-[50%/80%] hover:scale-[1.03] transition-all duration-300 shadow-[0_0_30px_rgba(200,240,0,0.15)]"
              >
                Claim Free Newsletter Blueprint
              </Link>
              <Link
                href="/"
                className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-bold text-[13px] tracking-[1px] uppercase rounded-[50%/80%] hover:bg-white/5 transition-all duration-300"
              >
                Return Home
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
