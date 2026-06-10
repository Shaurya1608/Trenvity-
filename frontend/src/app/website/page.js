'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Reveal, { StaggerContainer, StaggerItem } from '@/components/Reveal';
import Marquee from '@/components/Marquee';
import ExploreDocks from '@/components/ExploreDocks';
import Pricing from '@/components/Pricing';

export default function WebsitePage() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: '01',
      title: 'Fast Loading Websites',
      description: 'We build websites that open instantly. No waiting, no spinning loaders. Your visitors see your content the moment they click.',
      metrics: { label: 'Average Load Time', value: '0.4s' },
      color: '#9BCE24', // Trenvity neon
    },
    {
      id: '02',
      title: 'Beautiful & Easy to Use',
      description: 'Clean designs that look great on every screen. Smooth animations, clear layouts, and buttons that actually make people take action.',
      metrics: { label: 'More Clicks & Sales', value: '+43%' },
      color: '#ffffff', // White
    },
    {
      id: '03',
      title: 'Shows Up on Google',
      description: 'We make sure Google can find and rank your website. Proper structure, fast speed, and smart setup so new customers discover you easily.',
      metrics: { label: 'Google Ranking', value: 'Page 1' },
      color: '#9BCE24', // Trenvity neon
    },
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      priceMonthly: 149,
      priceYearly: 119,
      description: 'Perfect for small businesses who need a clean, professional one-page website.',
      features: [
        '1 Custom Landing Page',
        'Mobile Friendly Design',
        'Google Search Setup',
        '1 Month Free Support',
        'You Own the Code',
      ],
      popular: false,
      cta: 'Get Started',
    },
    {
      name: 'Growth',
      priceMonthly: 399,
      priceYearly: 319,
      description: 'For growing businesses that want a full website with multiple pages and animations.',
      features: [
        'Up to 5 Custom Pages',
        'Smooth Animations & Effects',
        'Advanced Google Rankings',
        'Contact Forms & Integrations',
        'Fast Hosting Included',
        '3 Months Free Support',
      ],
      popular: true,
      popularText: 'Most Popular',
      cta: 'Choose Growth',
    },
    {
      name: 'Enterprise',
      priceMonthly: 999,
      priceYearly: 799,
      description: 'For large businesses needing online stores, custom features, and priority support.',
      features: [
        'Unlimited Pages',
        'Online Store & Payments',
        'Custom Design & Branding',
        'Dedicated Support Channel',
        '1 Year of Free Updates',
        'Security & Maintenance',
      ],
      popular: false,
      cta: 'Contact Us',
    },
  ];

  return (
    <div className="relative w-full min-h-screen bg-[var(--background)] text-white overflow-clip selection:bg-[var(--neon)] selection:text-black">
      {/* Background Neon Glow Spheres */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[var(--neon)]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-white/5 blur-[150px] pointer-events-none" />
      <div className="absolute top-[40%] right-[20%] w-[400px] h-[400px] rounded-full bg-[var(--neon)]/5 blur-[130px] pointer-events-none" />

      <Header />

      {/* ============================================
         1. HERO / LANDING SECTION (BRUTALIST REDESIGN)
         ============================================ */}
      <section className="relative w-full h-[100vh] flex flex-col pt-24 pb-12 px-6 md:px-12 lg:px-20 z-0 bg-[var(--background)] overflow-hidden">
        
        {/* Attractive Lines & Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] [background-size:4rem_4rem] pointer-events-none" />
        
        <div className="w-full max-w-[1400px] mx-auto flex-1 flex flex-col justify-between relative z-10">
          
          {/* Top Bar of Hero */}
          <div className="flex justify-end items-start w-full">
             <Reveal delay={0.1}>
               <p className="text-white/30 font-mono text-[10px] uppercase tracking-[1.5px] text-right hidden md:block border-r-2 border-[var(--neon)] pr-4">
                  Custom Web Architecture <br/> & High-Performance Builds
               </p>
             </Reveal>
          </div>

          {/* Main Typography */}
          <div className="flex flex-col w-full mt-auto pb-10">
            <Reveal delay={0.2}>
              <h1 className="font-black uppercase leading-[0.88] tracking-[-0.04em] text-white mb-6 flex flex-col" style={{ fontSize: 'clamp(52px, 9vw, 7.5rem)' }}>
                <div className="flex flex-wrap gap-x-3 md:gap-x-5">
                  <span className="opacity-90">WEBSITES</span>
                  <span className="text-[var(--neon)] italic">ENGINEERED</span>
                </div>
                <span className="opacity-90 mt-2">FOR SCALE.</span>
              </h1>
            </Reveal>
            
            <Reveal delay={0.3}>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full gap-8 mt-6 border-t border-white/10 pt-8">
                <p className="text-white/60 text-sm max-w-[500px] leading-relaxed font-light">
                  We abandon bloated templates and static layouts. Instead, we build custom, high-velocity digital experiences designed to convert ambitious audiences.
                </p>
                
                <div className="flex items-center gap-4 group cursor-pointer" onClick={() => document.getElementById('performance')?.scrollIntoView({ behavior: 'smooth' })}>
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[var(--neon)] transition-colors duration-300">
                    <svg className="w-3.5 h-3.5 text-white group-hover:text-[var(--neon)] transition-colors duration-300 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-mono font-bold tracking-[2px] uppercase text-white/40 group-hover:text-[var(--neon)] transition-colors duration-300">
                    Scroll to Explore
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
          
        </div>
      </section>

      {/* ============================================
         2. DEVELOPMENT PIPELINE & PERFORMANCE SECTION
         ============================================ */}
      <section id="performance" className="relative w-full py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-[var(--background)] z-10 border-t border-white/5">
        
        {/* JAGGED TORN PAPER DIVIDER SVG (Moved here to scroll up with the section) */}
        <div className="absolute top-0 left-0 right-0 w-full z-20 flex flex-col pointer-events-none -translate-y-full">
          <svg
            viewBox="0 0 1440 80"
            fill="none"
            preserveAspectRatio="none"
            className="w-full h-[60px] md:h-[80px]"
          >
            <path
              d="M0,45 L60,10 L110,50 L200,5 L280,45 L350,15 L410,55 L490,10 L580,40 L640,5 L710,50 L790,20 L850,60 L940,15 L1020,55 L1090,10 L1170,45 L1250,5 L1320,50 L1390,20 L1440,45 L1440,80 L0,80 Z"
              fill="var(--background)"
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
          {/* Solid filler to seamlessly connect the zig-zag to the section below */}
          <div className="w-full h-[2px] bg-[var(--background)] translate-y-[1px]" />
        </div>

        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="max-w-[850px] mx-auto w-full text-center relative z-10">
          <Reveal>
            <span className="text-[var(--neon)] font-bold text-xs uppercase tracking-[2px] block mb-3 font-mono">
              System Architecture
            </span>
            <h2 className="text-[32px] md:text-[48px] font-extrabold tracking-[-1.5px] leading-[1.05] uppercase mb-8 text-center text-white">
              Engineered for <br/> Absolute Speed.
            </h2>
            
            <div className="space-y-6 text-white/60 text-[15px] sm:text-base leading-relaxed tracking-[0.2px] font-light max-w-[700px] mx-auto text-justify sm:text-center">
              <p>
                We build custom websites from scratch. No slow templates, no heavy page builders. Every line of code is <strong className="text-white font-semibold">clean and written for speed</strong> so your site loads in milliseconds.
              </p>
              
              <div className="my-10 p-5 bg-white/[0.02] border border-white/5 rounded-2xl text-center max-w-[550px] mx-auto backdrop-blur-md">
                <p className="text-[11px] font-mono text-[var(--neon)] mb-2 uppercase tracking-[2px]">Speed matters</p>
                <p className="italic text-white/95 text-sm">
                  "Even a one-second delay in page load time can lose you clients. We make sure speed is a top priority."
                </p>
              </div>
              
              <p>
                We make sure your site loads instantly, is extremely secure, and is easy to use on phones and computers. A fast website helps you rank better on Google and gets you more customers.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================
         MARQUEE BAR
         ============================================ */}
      <div className="relative w-full z-20 bg-[var(--background)] py-8 md:py-12">
        <Marquee />
      </div>

      {/* ============================================
         3. DYNAMIC SCROLL FEATURES SHOWCASE
         ============================================ */}
      <section id="features" className="relative w-full py-14 lg:py-20 px-6 md:px-12 lg:px-20 border-t border-white/5 bg-[var(--background)] z-10">
        <div className="max-w-[1400px] mx-auto w-full">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
            <Reveal>
              <span className="text-[var(--neon)] font-bold text-xs uppercase tracking-[2px] block mb-3 font-mono">
                What We Do
              </span>
              <h2 className="text-[28px] md:text-[44px] font-extrabold tracking-[-2px] leading-[1] uppercase">
                WEBSITES THAT <br />
                ACTUALLY WORK
              </h2>
            </Reveal>
            <Reveal delay={0.2} className="max-w-[380px] text-white/50 text-sm">
              Not just pretty pages. We build sites that load fast, rank high, and turn visitors into customers.
            </Reveal>
          </div>

          {/* Interactive Morphing Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* Left Nav Toggles */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
              {features.map((feature, idx) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(idx)}
                  className={`text-left p-5 sm:p-6 rounded-xl border transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                    activeFeature === idx
                      ? 'bg-white/[0.03] border-white/10 shadow-lg'
                      : 'bg-transparent border-transparent opacity-40 hover:opacity-75'
                  }`}
                >
                  {/* Indicator Line */}
                  {activeFeature === idx && (
                    <motion.div
                      layoutId="activeFeatureBarWebsite"
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
                      <h3 className="text-lg md:text-xl font-bold tracking-tight text-white mb-2">
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
                
                {/* Colorful Floating Glow Sphere */}
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
                    className="space-y-8 flex-1 flex flex-col justify-between z-10 w-full"
                  >
                    {activeFeature === 0 && (
                      <div className="flex-1 flex flex-col justify-between h-full w-full">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-[2px] text-[var(--neon)] font-mono block mb-2">REAL-TIME METRIC</span>
                          <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-white mb-2">SPEED DEMON</h3>
                          <p className="text-white/50 text-xs sm:text-sm">We code without heavy frameworks or bloated modules, enabling instant rendering.</p>
                        </div>
                        {/* Speedometer Widget */}
                        <div className="my-6 p-5 rounded-xl border border-white/5 bg-black/40 backdrop-blur-md relative overflow-hidden flex flex-col justify-center items-center">
                          <div className="relative w-36 h-36 flex items-center justify-center">
                            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                              <circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.05)" strokeWidth="8" fill="none" />
                              <motion.circle
                                cx="50" cy="50" r="40"
                                stroke="var(--neon)"
                                strokeWidth="8"
                                fill="none"
                                strokeDasharray="251.2"
                                initial={{ strokeDashoffset: 251.2 }}
                                animate={{ strokeDashoffset: 25.1 }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                              />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                              <span className="text-2xl font-mono font-black text-white">0.4s</span>
                              <span className="text-[8px] tracking-[1px] text-white/40 uppercase">Load Time</span>
                            </div>
                          </div>
                          <div className="w-full grid grid-cols-2 gap-3 mt-4 border-t border-white/5 pt-4 text-center">
                            <div>
                              <span className="text-[9px] text-white/30 uppercase block font-mono">Mobile Speed</span>
                              <span className="text-xs font-bold text-[var(--neon)] font-mono">99 / 100</span>
                            </div>
                            <div>
                              <span className="text-[9px] text-white/30 uppercase block font-mono">Desktop Speed</span>
                              <span className="text-xs font-bold text-[var(--neon)] font-mono">100 / 100</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeFeature === 1 && (
                      <div className="flex-1 flex flex-col justify-between h-full w-full">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-[2px] text-white font-mono block mb-2">INTERACTIVE MOCKUP</span>
                          <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-white mb-2">SMOOTH INTERACTIONS</h3>
                          <p className="text-white/50 text-xs sm:text-sm">Custom animations and responsive layout structures make navigating your site feel like a breeze.</p>
                        </div>
                        {/* Interactive UI components mockup */}
                        <div className="my-6 p-4 rounded-xl border border-white/5 bg-black/40 backdrop-blur-md space-y-3 w-full">
                          <div className="flex items-center justify-between p-2.5 rounded bg-white/[0.02] border border-white/5">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                                <span className="text-white text-xs font-bold font-mono">A</span>
                              </div>
                              <div className="text-left">
                                <div className="h-2 w-20 bg-white/20 rounded mb-1" />
                                <div className="h-1.5 w-12 bg-white/10 rounded" />
                              </div>
                            </div>
                            <button className="px-3 py-1 rounded bg-white text-black text-[10px] font-bold uppercase hover:scale-105 transition-transform duration-200">Active</button>
                          </div>
                          
                          <div className="flex items-center justify-between p-2.5 rounded bg-white/[0.02] border border-white/5">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                                <span className="text-white text-xs font-bold font-mono">B</span>
                              </div>
                              <div className="text-left">
                                <div className="h-2 w-24 bg-white/20 rounded mb-1" />
                                <div className="h-1.5 w-16 bg-white/10 rounded" />
                              </div>
                            </div>
                            <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping mr-4" />
                          </div>
                          
                          <div className="flex items-center justify-between p-2.5 rounded bg-white/[0.02] border border-white/5 opacity-55">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                <span className="text-white/30 text-xs font-bold font-mono">C</span>
                              </div>
                              <div className="text-left">
                                <div className="h-2 w-16 bg-white/20 rounded mb-1" />
                                <div className="h-1.5 w-10 bg-white/10 rounded" />
                              </div>
                            </div>
                            <button className="px-3 py-1 rounded border border-white/15 text-white/50 text-[10px] font-bold uppercase">Idle</button>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeFeature === 2 && (
                      <div className="flex-1 flex flex-col justify-between h-full w-full">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-[2px] text-[var(--neon)] font-mono block mb-2">SEARCH DOMINANCE</span>
                          <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-white mb-2">RANKING #1</h3>
                          <p className="text-white/50 text-xs sm:text-sm">We code your pages with optimized structure so Google's indexers place you at the top.</p>
                        </div>
                        {/* Mock Google Search Results Panel */}
                        <div className="my-6 p-4 rounded-xl border border-white/5 bg-black/40 backdrop-blur-md space-y-3.5 text-left w-full">
                          <div className="p-3 rounded bg-white/[0.02] border border-white/5">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-[var(--neon)] text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-[var(--neon)]/10 border border-[var(--neon)]/20">RANK #1</span>
                              <span className="text-[10px] text-white/40 font-mono">yoursite.com</span>
                            </div>
                            <h4 className="text-sm font-bold text-white mb-1 hover:underline cursor-pointer">Best Custom Agency | Ready to Deliver</h4>
                            <p className="text-[11px] text-white/50 line-clamp-1">Custom built high performance websites designed to load instantly...</p>
                          </div>
                          
                          <div className="p-3 rounded bg-white/[0.01] border border-white/5 opacity-60">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-white/40 text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-white/5 border border-white/10">RANK #2</span>
                              <span className="text-[10px] text-white/30 font-mono">competitor-site.com</span>
                            </div>
                            <h4 className="text-sm font-bold text-white/70 mb-1">Slow Builder Website - Standard Template</h4>
                            <p className="text-[11px] text-white/40 line-clamp-1">Slow template based site that loads with spinners...</p>
                          </div>
                        </div>
                      </div>
                    )}
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
      <Pricing 
        title="SIMPLE PLANS, <br />NO HIDDEN FEES" 
        subtitle="Pricing" 
        tiers={pricingTiers} 
        currency="$" 
      />

      {/* ============================================
         5. PERSISTENT CONVERTING CTA FOOTER BLOCK
         ============================================ */}
      <section className="relative w-full py-16 lg:py-24 px-6 md:px-12 lg:px-20 border-t border-white/5 bg-[var(--background)] z-10">
        <div className="max-w-[1000px] mx-auto w-full text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[var(--neon)]/10 rounded-full blur-[100px] pointer-events-none" />
          
          <Reveal>
            <h2 className="text-[36px] sm:text-[48px] lg:text-[60px] font-extrabold tracking-[-1.5px] leading-none uppercase mb-6">
              LET'S BUILD <br />
              YOUR WEBSITE
            </h2>
            <p className="text-white/60 text-sm sm:text-base max-w-[500px] mx-auto mb-10 leading-relaxed">
              Get a super fast website that looks great and brings in customers. We handle everything from design to code.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                href="#pricing"
                className="w-full sm:w-auto px-8 py-4 bg-[var(--neon)] text-black font-bold text-[13px] tracking-[1px] uppercase rounded-[50%/80%] hover:scale-[1.03] transition-all duration-300 shadow-[0_0_30px_rgba(200,240,0,0.15)]"
              >
                Choose a Plan
              </Link>
              <Link
                href="/"
                className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-bold text-[13px] tracking-[1px] uppercase rounded-[50%/80%] hover:bg-white/5 transition-all duration-300"
              >
                Go Back Home
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="relative z-10">
        <ExploreDocks />
        <Footer />
      </div>
    </div>
  );
}
