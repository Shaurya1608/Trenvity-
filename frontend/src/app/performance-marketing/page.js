'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ExploreDocks from '@/components/ExploreDocks';
import Reveal, { StaggerContainer, StaggerItem } from '@/components/Reveal';
import Pricing from '@/components/Pricing';
import ResultsShowcase from '@/components/ResultsShowcase';

export default function PerformanceMarketingPage() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const features = [
    {
      id: '01',
      title: 'Targeted Ad Campaigns',
      description: 'Precision targeting across search, social, and programmatic networks to lock onto high-intent customers when they are ready to buy.',
      icon: (
        <svg className="w-5 h-5 text-[var(--neon)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      ),
      colSpan: 'md:col-span-7',
    },
    {
      id: '02',
      title: 'ROAS Optimization',
      description: 'Advanced bidding algorithms and algorithmic budget scaling designed to squeeze maximum return from every dollar spent.',
      icon: (
        <svg className="w-5 h-5 text-[var(--neon)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      colSpan: 'md:col-span-5',
    },
    {
      id: '03',
      title: 'Conversion Optimization',
      description: 'Behavioral heatmapping, custom funnels, and persistent friction reduction to convert clicks into paying leads.',
      icon: (
        <svg className="w-5 h-5 text-[var(--neon)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      colSpan: 'md:col-span-5',
    },
    {
      id: '04',
      title: 'Multi-Touch Attribution',
      description: 'Complete data visibility pipeline mapping the exact customer journey across search, social, and email with zero data loss.',
      icon: (
        <svg className="w-5 h-5 text-[var(--neon)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
        </svg>
      ),
      colSpan: 'md:col-span-7',
    },
    {
      id: '05',
      title: 'Retargeting Funnels',
      description: 'Smart retargeting sequences tailored dynamically based on on-site behavior, keeping your brand top-of-mind and sealing the conversion.',
      icon: (
        <svg className="w-5 h-5 text-[var(--neon)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 8H17" />
        </svg>
      ),
      colSpan: 'md:col-span-7',
    },
    {
      id: '06',
      title: 'Creative A/B Testing',
      description: 'Rapid iterations of hooks, copy variations, and static assets to combat ad fatigue and identify winning combinations.',
      icon: (
        <svg className="w-5 h-5 text-[var(--neon)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      colSpan: 'md:col-span-5',
    },
  ];

  const pricingTiers = [
    {
      name: 'Launch ROAS',
      priceMonthly: 120000,
      priceYearly: 95000,
      description: 'Engineered for growing businesses looking to kickstart their customer acquisition pipeline.',
      features: [
        'Dedicated Campaign Manager',
        'Search & Social Ad Management',
        'Basic A/B Creative Testing',
        'Weekly Dashboard Reports',
        'Up to ₹8L/mo Ad Spend Cap',
      ],
      popular: false,
      cta: 'Start Scaling',
    },
    {
      name: 'Scale Engine',
      priceMonthly: 240000,
      priceYearly: 190000,
      description: 'Our most sought-after package. Multi-channel scaling with programmatic retargeting and funnel design.',
      features: [
        'All Launch ROAS Features',
        'Programmatic DSP & Native Ads',
        'Advanced Attribution Modeling',
        'Custom Conversion Funnel Optimization',
        'Bi-weekly Strategy Syncs',
        'Up to ₹40L/mo Ad Spend Cap',
      ],
      popular: true,
      popularText: 'Highly Recommended',
      cta: 'Accelerate Growth',
    },
    {
      name: 'Dominator Suite',
      priceMonthly: 480000,
      priceYearly: 380000,
      description: 'Full-funnel custom media buying suite with direct data pipeline integration and white-glove service.',
      features: [
        'All Scale Engine Features',
        'Unlimited Ad Spend Cap',
        'Real-time Slack Channel Sync',
        'Custom Analytics Pipeline Setup',
        'Weekly Creative Production Outlets',
        '24/7 Priority Emergency Coverage',
      ],
      popular: false,
      cta: 'Dominate Markets',
    },
  ];

  return (
    <div className="relative w-full min-h-screen bg-[var(--background)] text-white overflow-hidden selection:bg-[var(--neon)] selection:text-black">
      {/* Background Ambient Glows */}
      <div className="absolute top-[8%] left-[-15%] w-[600px] h-[600px] rounded-full bg-[var(--neon)]/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[600px] h-[600px] rounded-full bg-[#00a8ff]/5 blur-[150px] pointer-events-none" />
      <div className="absolute top-[50%] right-[10%] w-[500px] h-[500px] rounded-full bg-[var(--neon)]/3 blur-[180px] pointer-events-none" />

      <Header />

      <section className="relative w-full bg-[var(--background)] pt-24 pb-12 px-6 md:px-12 lg:px-20 z-10 flex flex-col justify-between min-h-screen">
        {/* Horizontal grid lines overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100%_40px] pointer-events-none" />

        {/* Abstract background performance grid lines */}
        <div className="absolute right-[5%] top-[30%] w-[35%] h-[35%] opacity-[0.06] pointer-events-none hidden lg:block">
          <svg className="w-full h-full" viewBox="0 0 500 200" fill="none">
            <path d="M0 150 Q100 80 200 130 T400 50 T500 20" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M0 160 Q100 90 200 140 T400 60 T500 30" stroke="var(--neon)" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>

        <div className="relative w-full max-w-[1400px] mx-auto flex-1 flex flex-col justify-center relative">
          <div className="w-full text-left font-sans select-none">
            {/* Row 1: WE HELP BRANDS + EYE */}
            <h1 className="text-[7.8vw] font-black tracking-[-0.04em] uppercase text-white leading-[0.85] flex flex-wrap items-center gap-x-[1.5vw] font-sans">
              <span>WE HELP</span>
              <span className="text-[var(--neon)]">BRANDS</span>
              <span className="inline-flex items-center">
                <svg className="w-[12vw] h-auto" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Outer eye shape */}
                  <path d="M10 30C25 12 50 6 60 6C70 6 95 12 110 30C95 48 70 54 60 54C50 54 25 48 10 30Z" fill="#E5E7EB"/>
                  {/* Iris */}
                  <circle cx="60" cy="30" r="22" fill="#9bce24" />
                  {/* Pupil */}
                  <circle cx="60" cy="30" r="10" fill="black"/>
                  {/* Highlight */}
                  <circle cx="64" cy="26" r="3" fill="white"/>
                </svg>
              </span>
            </h1>

            {/* Row 2: SCALE FAST */}
            <h1 className="text-[7.8vw] font-black tracking-[-0.04em] uppercase text-white leading-[0.85] font-sans mt-[0.5vw]">
              SCALE FAST.
            </h1>
          </div>

        </div>

        {/* Bottom Sub-bar */}
        <div className="w-full max-w-[1400px] mx-auto border-t border-white/10 pt-6 mt-16 grid grid-cols-1 md:grid-cols-12 gap-6 text-[10px] font-mono tracking-[0.5px] uppercase text-white/50">
          <div className="md:col-span-5 flex items-center gap-2">
            {/* Globe Icon */}
            <svg className="w-4 h-4 text-white/30 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            <span>/ BASED IN UNITED STATES &amp; WORKING WORLDWIDE</span>
          </div>
          <div className="md:col-span-3 flex items-center">
            <span>/ YEARS OF BLOCK CHAIN EXPERIENCE</span>
          </div>
          <div className="md:col-span-4 flex items-center md:justify-end">
            <span>/ ©2022 WEBTHREE ALL RIGHTS RESERVED</span>
          </div>
        </div>
      </section>

      {/* ============================================
         2. SEO DEEP-DIVE PARAGRAPH SECTION
         ============================================ */}
      <section className="relative w-full py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-[var(--background)] border-t border-white/5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="max-w-[850px] mx-auto w-full text-center relative z-10">
          <Reveal>
            <span className="text-[var(--neon)] font-bold text-xs uppercase tracking-[2px] block mb-3 font-mono">
              SEO INTEGRATION PIPELINE
            </span>
            <h2 className="text-[32px] md:text-[48px] font-extrabold tracking-[-1.5px] leading-[1.05] uppercase mb-8 text-center text-white">
              Organic Authority Meets Paid Velocity
            </h2>
            
            <div className="space-y-6 text-white/60 text-[15px] sm:text-base leading-relaxed tracking-[0.2px] font-light max-w-[700px] mx-auto text-justify sm:text-center">
              <p>
                True conversion dominance requires a unified acquisition engine. By connecting your <strong className="text-white font-semibold">performance paid ads with organic Search Engine Optimization</strong>, we create a multi-channel funnel that captures prospects at both the discovery and purchasing stages.
              </p>
              
              <div className="my-10 p-5 bg-white/[0.02] border border-white/5 rounded-2xl text-center max-w-[550px] mx-auto backdrop-blur-md">
                <p className="text-[11px] font-mono text-[var(--neon)] mb-2 uppercase tracking-[2px]">Attribution velocity</p>
                <p className="italic text-white/95 text-sm">
                  "Targeting paid ads directly to high-authority, SEO-optimized landing pages boosts relevance scores, decreases cost-per-click by up to 34%, and speeds up crawling indexing cycles."
                </p>
              </div>
              
              <p>
                We build semantically structured pipelines that match keywords from search campaigns directly to landing page metadata and organic tags. This establishes a highly unified brand presence that improves quality scores, enhances Google visibility, and accelerates your path to market domination.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================
         3. ASYMMETRICAL CAPABILITIES SHOWCASE (REFERENCE DESIGN MATCH)
         ============================================ */}
      <section id="features" className="relative w-full py-14 md:py-16 px-6 md:px-12 lg:px-20 bg-[var(--background)] border-t border-white/5">
        <div className="max-w-[1300px] mx-auto w-full">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <Reveal>
            
              <h2 className="text-[22px] md:text-[32px] font-extrabold tracking-[-1.5px] leading-[1.1] uppercase">
                ENGINEERED FOR<br />
                UNRIVALED PERFORMANCE
              </h2>
            </Reveal>
            <Reveal delay={0.2} className="max-w-[380px] text-white/40 text-[11px] md:text-[12px] leading-relaxed">
              We replace standard layouts with an asymmetrical feature grid built for speed, clean UX, and high conversion capabilities.
            </Reveal>
          </div>

          {/* Asymmetrical Grid matching the screenshot (Card 1: 7cols, Card 2: 5cols, etc.) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">
            {features.map((feature) => (
              <div
                key={feature.id}
                className={`group relative rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/10 p-5 md:p-6 flex flex-col justify-between transition-all duration-300 shadow-md ${feature.colSpan}`}
              >
                {/* Top Row: Icon + Number indicator */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.03] flex items-center justify-center border border-white/5 group-hover:border-[var(--neon)]/20 transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <span className="text-white/10 text-lg font-black font-mono tracking-wider group-hover:text-white/20 transition-colors duration-300">
                    {feature.id}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-[14px] md:text-[15px] font-bold text-white mb-1.5 tracking-tight group-hover:text-[var(--neon)] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-[11px] text-white/50 leading-relaxed max-w-[500px]">
                    {feature.description}
                  </p>
                </div>

                {/* Corner accent decorative highlight */}
                <div className="absolute top-0 right-0 w-8 h-8 rounded-tr-2xl bg-gradient-to-bl from-[var(--neon)]/0 to-transparent group-hover:from-[var(--neon)]/5 transition-all duration-500 pointer-events-none" />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================
         X. RESULTS SHOWCASE
         ============================================ */}
      <ResultsShowcase />

      {/* ============================================
         4. PRICING & TIERS SECTION
         ============================================ */}
      <Pricing 
        title="PLANS FITTED FOR<br />YOUR GROWTH CYCLE" 
        subtitle="ROI Pricing Models" 
        tiers={pricingTiers} 
        currency="₹" 
      />

      {/* ============================================
         5. EXPLORE MORE SERVICES SECTION
         ============================================ */}
      <section className="relative w-full py-24 px-6 md:px-12 lg:px-20 border-t border-white/5 bg-[var(--background)]">
        <div className="max-w-[1100px] mx-auto w-full text-center relative z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[var(--neon)]/5 rounded-full blur-[100px] pointer-events-none" />
          
      <ExploreDocks />
        </div>
      </section>

      <Footer />
    </div>
  );
}
