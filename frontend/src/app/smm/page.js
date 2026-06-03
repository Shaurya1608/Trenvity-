'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Reveal, { StaggerContainer, StaggerItem } from '@/components/Reveal';

export default function SMMPage() {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' or 'yearly'
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: '01',
      title: 'Automated Viral Engine',
      description: 'Our proprietary algorithm analyzes trending patterns across TikTok, Instagram, and Twitter in real-time. It schedules, reformats, and dispatches content when your audience is most receptive, guaranteeing up to 10x organic reach expansion.',
      metrics: { label: 'Avg. Reach Lift', value: '+340%' },
      color: '#c8f000',
    },
    {
      id: '02',
      title: 'Precision Growth Loops',
      description: 'Stop waiting for the algorithm. Our precision automation initiates automated interaction loops with high-value accounts in your niche, building premium, contextual backlinks and active followers naturally.',
      metrics: { label: 'Follower Velocity', value: '12.4k/mo' },
      color: '#00f0ff',
    },
    {
      id: '03',
      title: 'Command Desk Dashboard',
      description: 'A unified workspace for all your digital accounts. Monitor messages, schedule threads, auto-reply to comments with AI sentiment analysis, and watch live conversion statistics from one glowing console.',
      metrics: { label: 'Engagement Rate', value: '8.9%' },
      color: '#ff007f',
    },
  ];

  const pricingTiers = [
    {
      name: 'Essential Spark',
      price: billingCycle === 'monthly' ? 49 : 39,
      description: 'Perfect for fast-growing personal brands and ambitious builders looking to establish initial traction.',
      features: [
        '3 Active Social Channels',
        'Auto-Scheduler (100 posts/mo)',
        'Basic Sentiment Analysis',
        'Weekly Performance Reports',
        'Standard 24h Support',
      ],
      popular: false,
      cta: 'Ignite Brand',
    },
    {
      name: 'Growth Accelerator',
      price: billingCycle === 'monthly' ? 99 : 79,
      description: 'Our flagship plan. Engineered for teams and businesses looking to multiply their digital authority rapidly.',
      features: [
        '8 Active Social Channels',
        'Unlimited Smart Scheduling',
        'Viral Trend Detection AI',
        'Custom Analytics Dashboard',
        'Priority Slack Support',
        'SEO Pipeline Integration',
      ],
      popular: true,
      cta: 'Accelerate Now',
    },
    {
      name: 'Enterprise Domination',
      price: billingCycle === 'monthly' ? 249 : 199,
      description: 'The ultimate digital command suite. Fully customized, scale-unlimited marketing suite with direct API integrations.',
      features: [
        'Unlimited Social Channels',
        'Full AI Agent Automation',
        'Dedicated Campaign Strategist',
        'Custom API Access & Webhooks',
        'White-Label Client Reports',
        'Instant Crisis Mitigation Desk',
      ],
      popular: false,
      cta: 'Claim Domination',
    },
  ];

  return (
    <div className="relative w-full min-h-screen bg-[var(--background)] text-white overflow-hidden selection:bg-[var(--neon)] selection:text-black">
      {/* Background Neon Glow Spheres */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[var(--neon)]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#00f0ff]/5 blur-[150px] pointer-events-none" />
      <div className="absolute top-[40%] right-[20%] w-[400px] h-[400px] rounded-full bg-[#ff007f]/5 blur-[130px] pointer-events-none" />

      <Header />

      {/* ============================================
         1. HERO / LANDING SECTION (BRUTALIST REDESIGN)
         ============================================ */}
      <section className="relative w-full min-h-screen flex flex-col justify-between pt-8 pb-24 px-6 md:px-12 lg:px-20 z-10 overflow-hidden bg-[var(--background)]">
        
        {/* Decorative Grid texture */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-60" />

        {/* Top Spacer to push content down below header */}
        <div className="h-4 md:h-8" />

        {/* Central Core: Giant Background Typography & Overlay Dashboard */}
        <div className="relative w-full max-w-[1400px] mx-auto flex-1 flex items-center justify-center py-6 min-h-[50vh]">
          
          {/* HUGE BACKGROUND TEXT (Brutalist SMM copy, shifted further upwards with side margins) */}
          <div className="absolute inset-x-0 inset-y-0 flex flex-col justify-center items-center select-none pointer-events-none z-0 -translate-y-4 sm:-translate-y-8 md:-translate-y-12 px-6 sm:px-16 md:px-24 lg:px-32">
            <h1 className="text-[10.5vw] font-black tracking-[-0.04em] uppercase text-white leading-[0.78] text-center w-full font-sans select-none opacity-[0.98] flex flex-col items-center justify-center">
              <span className="block truncate scale-x-[1.05] tracking-[-0.05em] origin-center">DON'T BE SILENT</span>
              <span className="block text-[6vw] tracking-[0.14em] font-medium text-white/95 mt-4">SCALE THE REACH</span>
            </h1>
          </div>

          {/* FOREGROUND: Floating SMM Character Image resting behind the torn paper divider */}
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
            className="absolute bottom-[-96px] sm:bottom-[-96px] left-1/2 -translate-x-1/2 z-15 w-[280px] sm:w-[380px] md:w-[420px] aspect-square pointer-events-none select-none"
          >
            <Image
              src="/landing/trenvity-smm.png"
              alt="Trenvity SMM Character"
              fill
              priority
              className="object-contain object-bottom filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)]"
            />
          </motion.div>

        </div>

        {/* Removed BOTTOM METRICS & CUSTOM DESIGN NAVIGATION */}

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
         2. SEO DEEP-DIVE PIPELINE SECTION
         ============================================ */}
      <section id="seo" className="relative w-full py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-[var(--secondary-bg)]">
        <div className="max-w-[800px] mx-auto w-full text-center">
          <Reveal>
            <span className="text-[var(--neon)] font-bold text-xs uppercase tracking-[2px] block mb-3 font-mono flex justify-center items-center gap-2">
              [ Core Integration ]
            </span>
            <h2 className="text-[32px] md:text-[48px] font-extrabold tracking-[-1.5px] leading-[1.05] uppercase mb-6 text-center">
              The Social SEO Pipeline
            </h2>
            
            <div className="space-y-6 text-white/60 text-[15px] sm:text-base leading-relaxed tracking-[0.2px] font-light max-w-[650px] mx-auto">
              <p>
                Modern search ranking engines do not operate in silos. Today’s major algorithms rely heavily on <strong className="text-white font-semibold">Social Credibility Signals, Co-occurrence Citation Matrix, and real-time Brand Authority mentions</strong>. Every high-engagement post, viral thread, and shared citation acts as a powerful vote of trust.
              </p>
              <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl text-center max-w-[500px] mx-auto">
                <p className="text-[13px] font-mono text-white/50 mb-2">{'// INDEXATION SPEED'}</p>
                <p className="italic text-white/90">
                  "Brands with highly active, automated social networks see indexing cycles complete 4.8x faster, driving Google spiders straight to landing conversions."
                </p>
              </div>
              <p>
                Trenvity’s SMM engine weaves an automated citation net directly into your content output. Every dispatch is micro-optimized with metadata tags, natural contextual anchor names, and search-aligned tags, establishing a beautiful, automated, and permanent loop that boosts both social feeds and organic search result rankings.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================
         3. DYNAMIC SCROLL FEATURES SHOWCASE
         ============================================ */}
      <section id="features" className="relative w-full py-14 lg:py-20 px-6 md:px-12 lg:px-20 border-t border-white/5 bg-[var(--secondary-bg)]">
        <div className="max-w-[1400px] mx-auto w-full">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 md:mb-16 gap-6">
            <Reveal>
              <span className="text-[var(--neon)] font-bold text-xs uppercase tracking-[2px] block mb-3 font-mono">
                [ Scaled Excellence ]
              </span>
              <h2 className="text-[28px] md:text-[44px] font-extrabold tracking-[-2px] leading-[1] uppercase">
                ENGINEERED FOR <br />
                OUTLANDISH VELOCITY
              </h2>
            </Reveal>
            <Reveal delay={0.2} className="max-w-[380px] text-white/50 text-sm">
              Say goodbye to flat grids of boring cards. Our interactive feature desk offers live metric simulations and deep control insights.
            </Reveal>
          </div>

          {/* Interactive Morphing Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            
            {/* Left Nav Toggles (Trigger Animations) */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-3">
              {features.map((feature, idx) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(idx)}
                  className={`text-left p-4 sm:p-5 rounded-xl border transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                    activeFeature === idx
                      ? 'bg-white/[0.03] border-white/10 shadow-lg'
                      : 'bg-transparent border-transparent opacity-40 hover:opacity-75'
                  }`}
                >
                  {/* Indicator Line */}
                  {activeFeature === idx && (
                    <motion.div
                      layoutId="activeFeatureBar"
                      className="absolute left-0 top-0 bottom-0 w-[3px]"
                      style={{ backgroundColor: feature.color }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}

                  <div className="flex gap-4 items-start">
                    <span
                      className="font-mono text-xs font-bold px-2.5 py-0.5 rounded border border-white/10 bg-white/5"
                      style={{ color: activeFeature === idx ? feature.color : 'inherit' }}
                    >
                      {feature.id}
                    </span>
                    <div>
                      <h3 className="text-base md:text-lg font-bold tracking-tight text-white mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-xs text-white/50 line-clamp-2 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Right Morphing Showcase Area */}
            <div className="lg:col-span-7 flex">
              <div className="relative w-full p-6 sm:p-8 bg-white/[0.02] border border-white/5 rounded-2xl backdrop-blur-2xl flex flex-col justify-between overflow-hidden">
                
                {/* Colorful Floating Glow Sphere in Showcase */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFeature}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                    className="absolute -top-12 -right-12 w-64 h-64 rounded-full blur-[80px] pointer-events-none opacity-40"
                    style={{ backgroundColor: features[activeFeature].color }}
                  />
                </AnimatePresence>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFeature}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="space-y-8 flex-1 flex flex-col justify-between z-10"
                  >
                    <div>
                      <span
                        className="text-xs font-bold uppercase tracking-[2px] font-mono block mb-4"
                        style={{ color: features[activeFeature].color }}
                      >
                        [ MODULE DETAILED VIEW ]
                      </span>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-white mb-4">
                        {features[activeFeature].title}
                      </h3>
                      <p className="text-white/60 text-sm sm:text-base leading-relaxed tracking-[0.2px]">
                        {features[activeFeature].description}
                      </p>
                    </div>

                    {/* Interactive Simulated Metric Module */}
                    <div className="p-6 bg-black/40 border border-white/5 rounded-2xl flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase text-white/30 tracking-[1.5px] block mb-1">
                          {features[activeFeature].metrics.label}
                        </span>
                        <motion.span 
                          key={activeFeature}
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                          className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white"
                        >
                          {features[activeFeature].metrics.value}
                        </motion.span>
                      </div>
                      
                      <div className="flex gap-1.5 items-end h-8">
                        {Array.from({ length: 6 }).map((_, i) => (
                          <motion.div
                            key={`${activeFeature}-${i}`}
                            initial={{ height: 4 }}
                            animate={{ height: [4, (i + 1) * 5 + Math.random() * 8, 4] }}
                            transition={{
                              duration: 1.5 + Math.random(),
                              repeat: Infinity,
                              ease: 'easeInOut',
                            }}
                            className="w-1.5 rounded-full"
                            style={{ backgroundColor: features[activeFeature].color }}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================
         4. PRICING & TIERS SECTION
         ============================================ */}
      <section id="pricing" className="relative w-full py-14 lg:py-20 px-6 md:px-12 lg:px-20 border-t border-white/5 bg-gradient-to-b from-[#060606] to-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto w-full">
          
          <div className="flex flex-col items-center text-center mb-10">
            <Reveal>
              <span className="text-[var(--neon)] font-bold text-xs uppercase tracking-[2px] block mb-3 font-mono">
                [ Elite Pricing Models ]
              </span>
              <h2 className="text-[28px] md:text-[44px] font-extrabold tracking-[-2px] leading-[1] uppercase mb-6">
                PLANS THAT SCALE <br />
                WITH YOUR TRAFFIC
              </h2>
            </Reveal>

            {/* Premium billing switch toggle */}
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
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch max-w-[1100px] mx-auto">
            {pricingTiers.map((tier, idx) => (
              <StaggerItem key={tier.name} className="flex">
                <div
                  className={`w-full p-6 rounded-2xl border flex flex-col justify-between relative transition-all duration-300 hover:-translate-y-2 backdrop-blur-xl ${
                    tier.popular
                      ? 'bg-white/[0.03] border-[var(--neon)] shadow-[0_0_30px_rgba(200,240,0,0.15)]'
                      : 'bg-white/[0.01] border-white/5 hover:border-white/20'
                  }`}
                >
                  {/* Glowing tag for popular item */}
                  {tier.popular && (
                    <div className="absolute top-0 right-8 -translate-y-1/2 bg-[var(--neon)] text-black px-4 py-1.5 rounded-full text-[9px] font-bold tracking-[1.5px] uppercase shadow-md">
                      Highly Requested
                    </div>
                  )}

                  <div>
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-lg font-bold tracking-tight text-white mb-1">{tier.name}</h3>
                      <p className="text-[11px] text-white/50 leading-relaxed min-h-[40px]">{tier.description}</p>
                    </div>

                    {/* Price Tag */}
                    <div className="flex items-baseline gap-2 mb-6">
                      <span className="text-[14px] text-white/40 font-medium">$</span>
                      <motion.span
                        key={tier.price}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[36px] font-black text-white tracking-[-1.5px] leading-none"
                      >
                        {tier.price}
                      </motion.span>
                      <span className="text-[12px] text-white/40 tracking-[1px] uppercase">/ month</span>
                    </div>

                    {/* Features list */}
                    <ul className="space-y-3 mb-6 list-none p-0 m-0 border-t border-white/5 pt-5">
                      {tier.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-2.5 text-xs text-white/80">
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

                  {/* Pricing Button */}
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
         5. PERSISTENT CONVERTING CTA FOOTER BLOCK
         ============================================ */}
      <section className="relative w-full py-16 lg:py-24 px-6 md:px-12 lg:px-20 border-t border-white/5 bg-black">
        <div className="max-w-[1000px] mx-auto w-full text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[var(--neon)]/10 rounded-full blur-[100px] pointer-events-none" />
          
          <Reveal>
            <h2 className="text-[36px] sm:text-[48px] lg:text-[60px] font-extrabold tracking-[-1.5px] leading-none uppercase mb-6">
              LET'S START <br />
              YOUR DOMINATION
            </h2>
            <p className="text-white/60 text-sm sm:text-base max-w-[500px] mx-auto mb-10 leading-relaxed">
              Plug into the ultimate automated campaign architecture. Scale your brand views, authority citations, and sales.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                href="#pricing"
                className="w-full sm:w-auto px-8 py-4 bg-[var(--neon)] text-black font-bold text-[13px] tracking-[1px] uppercase rounded-[50%/80%] hover:scale-[1.03] transition-all duration-300 shadow-[0_0_30px_rgba(200,240,0,0.15)]"
              >
                Claim Free Blueprint
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
