"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Reveal, { StaggerContainer, StaggerItem } from '@/components/Reveal';
import ExploreDocks from '@/components/ExploreDocks';
import ResultsShowcase from '@/components/ResultsShowcase';

export default function DigitalMarketingPage() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const features = [
    { id: '01', title: 'Content Strategy & Planning', description: 'We build a complete monthly content plan for your brand. Every post, reel, and story has a purpose — no random posting, no guesswork.', icon: (<svg className="w-5 h-5 text-[var(--neon)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4zM20 19v-2a4 4 0 00-4-4h-1"/></svg>), colSpan: 'md:col-span-7' },
    { id: '02', title: 'Content Shoot & Video Production', description: 'We come to your location, shoot real content, and edit everything in-house — reels, brand videos, product shots, and behind the scenes. No stock photos. Just real content.', icon: (<svg className="w-5 h-5 text-[var(--neon)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>), colSpan: 'md:col-span-5' },
    { id: '03', title: 'Graphic Design & Posts', description: 'Premium static posts, carousels, typography designs, and story templates — all matching your brand identity.', icon: (<svg className="w-5 h-5 text-[var(--neon)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16"/></svg>), colSpan: 'md:col-span-5' },
    { id: '04', title: 'Competitor Research', description: 'We study your top competitors — what they’re posting, what’s working, and where the gap is. Then we position your brand to stand out.', icon: (<svg className="w-5 h-5 text-[var(--neon)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12"/></svg>), colSpan: 'md:col-span-7' },
    { id: '05', title: 'Profile Optimisation', description: 'Bio, highlights, grid layout, link in bio — everything set up to convert a visitor into a customer.', icon: (<svg className="w-5 h-5 text-[var(--neon)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8m0 0l3-3m-3 3l-3-3"/></svg>), colSpan: 'md:col-span-7' },
    { id: '06', title: 'Monthly Review & Reporting', description: 'Every month we review what worked, what didn’t, and plan the next month smarter. Full transparency. No surprises.', icon: (<svg className="w-5 h-5 text-[var(--neon)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2"/></svg>), colSpan: 'md:col-span-5' },
  ];

  const pricingTiers = [
    { name: 'Starter', price: billingCycle === 'monthly' ? 8000 : 6500, description: 'Perfect for small businesses just starting out on social media.', features: ['8 Posts/month (Graphics + Captions)', '2 Reels/month', 'Profile Setup & Optimisation', 'Basic Hashtag Strategy', 'Monthly Report', 'WhatsApp Support'], popular: false, cta: 'Get Started' },
    { name: 'Growth', price: billingCycle === 'monthly' ? 15000 : 12000, description: 'For brands ready to grow consistently with better content and strategy.', features: ['15 Posts/month', '4 Reels/month', 'Content Strategy & Planning', 'Competitor Research', 'Story Content (10/month)', 'Bi-weekly Check-in Call', 'Priority Support'], popular: true, cta: 'Scale Now' },
    { name: 'Performance', price: billingCycle === 'monthly' ? 25000 : 20000, description: 'Full social media management for brands serious about dominance.', features: ['Unlimited Posts & Reels', 'Content Shoot (1/month)', 'Full Brand Strategy', 'Ad Creatives Included', 'Weekly Strategy Calls', 'Dedicated Account Manager', '24/7 Priority Support'], popular: false, cta: 'Talk To Us' },
  ];

  return (
    <div className="relative w-full min-h-screen bg-[var(--background)] text-white overflow-hidden selection:bg-[var(--neon)] selection:text-black">
      <div className="absolute top-[8%] left-[-15%] w-[600px] h-[600px] rounded-full bg-[var(--neon)]/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[600px] h-[600px] rounded-full bg-[#00a8ff]/5 blur-[150px] pointer-events-none" />
      <div className="absolute top-[50%] right-[10%] w-[500px] h-[500px] rounded-full bg-[var(--neon)]/3 blur-[180px] pointer-events-none" />

      <Header />

      <section className="relative w-full bg-[var(--background)] pt-24 pb-12 px-6 md:px-12 lg:px-20 z-10 flex flex-col justify-between min-h-screen">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100%_40px] pointer-events-none" />

        <div className="relative w-full max-w-[1400px] mx-auto flex-1 flex flex-col justify-center">
          <div className="w-full text-left font-sans select-none">
            <h1 className="font-black tracking-[-0.04em] uppercase text-white leading-[0.88] font-sans" style={{ fontSize: 'clamp(42px, 9vw, 130px)' }}>
              <span>WE DELIVER </span>
              <span className="text-[var(--neon)]">DIGITAL</span>
              <br />
              <span>GROWTH</span>
            </h1>

            <h1 className="font-black tracking-[-0.04em] uppercase text-white leading-[0.88] font-sans mt-2" style={{ fontSize: 'clamp(42px, 9vw, 130px)' }}>
              MEASURABLE RESULTS.
            </h1>
          </div>
        </div>

        <div className="w-full max-w-[1400px] mx-auto border-t border-white/10 pt-6 mt-16 grid grid-cols-1 md:grid-cols-12 gap-6 text-[10px] font-mono tracking-[0.5px] uppercase text-white/50">
          <div className="md:col-span-5 flex items-center gap-2">
            <svg className="w-4 h-4 text-white/30 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            <span>/ BASED IN RANCHI, INDIA · NATIONAL &amp; INTERNATIONAL</span>
          </div>
          <div className="md:col-span-3 flex items-center">
            <span>/ SOCIAL MEDIA MANAGEMENT</span>
          </div>
          <div className="md:col-span-4 flex items-center md:justify-end">
            <span>/ ©2026 TRENVITY · ALL RIGHTS RESERVED</span>
          </div>
        </div>
      </section>

      <section className="relative w-full py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-[var(--background)] border-t border-white/5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="max-w-[850px] mx-auto w-full text-center relative z-10">
          <Reveal>
             <span className="text-[var(--neon)] font-bold text-xs uppercase tracking-[2px] block mb-3 font-mono">
              STRATEGY & EXECUTION
            </span>
            <h2 className="text-[32px] md:text-[48px] font-extrabold tracking-[-1.5px] leading-[1.05] uppercase mb-8 text-center text-white">
              Integrated Strategy That Builds Real Brands
            </h2>

            <div className="space-y-6 text-white/60 text-[15px] sm:text-base leading-relaxed tracking-[0.2px] font-light max-w-[700px] mx-auto text-justify sm:text-center">
              <p>
                We blend creative content, paid advertising, and analytics into one unified system — so your brand doesn't just look good, it <strong className="text-white font-semibold">performs</strong>.
              </p>

              <p>
                When your content and ads work in the same direction — that's when a brand genuinely grows. That's the Trenvity approach.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="features" className="relative w-full py-14 md:py-16 px-6 md:px-12 lg:px-20 bg-[var(--background)] border-t border-white/5">
        <div className="max-w-[1300px] mx-auto w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <Reveal>
              <h2 className="text-[22px] md:text-[32px] font-extrabold tracking-[-1.5px] leading-[1.1] uppercase">
                STRATEGY, CREATIVE,
                &amp; EXECUTION
              </h2>
            </Reveal>
            <Reveal delay={0.2} className="max-w-[380px] text-white/40 text-[11px] md:text-[12px] leading-relaxed">
              Tailored programs built to acquire, monetize, and retain customers at scale.
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">
            {features.map((feature) => (
              <div
                key={feature.id}
                className={`group relative rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/10 p-5 md:p-6 flex flex-col justify-between transition-all duration-300 shadow-md ${feature.colSpan}`}
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.03] flex items-center justify-center border border-white/5 group-hover:border-[var(--neon)]/20 transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <span className="text-white/10 text-lg font-black font-mono tracking-wider group-hover:text-white/20 transition-colors duration-300">
                    {feature.id}
                  </span>
                </div>

                <div>
                  <h3 className="text-[14px] md:text-[15px] font-bold text-white mb-1.5 tracking-tight group-hover:text-[var(--neon)] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-[11px] text-white/50 leading-relaxed max-w-[500px]">
                    {feature.description}
                  </p>
                </div>

                <div className="absolute top-0 right-0 w-8 h-8 rounded-tr-2xl bg-gradient-to-bl from-[var(--neon)]/0 to-transparent group-hover:from-[var(--neon)]/5 transition-all duration-500 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Showcase */}
      <ResultsShowcase />
      <section id="pricing" className="relative w-full py-24 px-6 md:px-12 lg:px-20 border-t border-white/5 bg-[var(--background)]">
        <div className="max-w-[1300px] mx-auto w-full">
          <div className="flex flex-col items-center text-center mb-16">
            <Reveal>
              <span className="text-[var(--neon)] font-bold text-xs uppercase tracking-[2px] block mb-3 font-mono">
                PACKAGES
              </span>
              <h2 className="text-[28px] md:text-[44px] font-extrabold tracking-[-2px] leading-[1.05] uppercase mb-6">
                PLANS FOR EVERY SCALE
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="inline-flex items-center p-1 bg-white/[0.03] border border-white/5 rounded-full relative z-10">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-6 py-2 rounded-full text-[10px] font-mono tracking-[1.5px] uppercase transition-all duration-300 cursor-pointer ${
                    billingCycle === 'monthly'
                      ? 'bg-[var(--neon)] text-black font-bold shadow-md'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle('yearly')}
                  className={`px-6 py-2 rounded-full text-[10px] font-mono tracking-[1.5px] uppercase transition-all duration-300 relative cursor-pointer ${
                    billingCycle === 'yearly'
                      ? 'bg-[var(--neon)] text-black font-bold shadow-md'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  Yearly
                  <span className="absolute -top-3.5 -right-3.5 px-2 py-0.5 rounded-full bg-[var(--neon)] text-black text-[8px] font-black tracking-[1px] shadow-sm uppercase">
                    -20%
                  </span>
                </button>
              </div>
            </Reveal>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1150px] mx-auto items-stretch">
            {pricingTiers.map((tier) => (
              <StaggerItem key={tier.name} className="flex">
                <div
                  className={`w-full p-6 rounded-2xl border flex flex-col justify-between relative transition-all duration-300 hover:-translate-y-2 backdrop-blur-xl ${
                    tier.popular
                      ? 'bg-white/[0.03] border-[var(--neon)] shadow-[0_0_30px_rgba(156,190,36,0.1)]'
                      : 'bg-white/[0.01] border-white/5 hover:border-white/20'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute top-0 right-8 -translate-y-1/2 bg-[var(--neon)] text-black px-4 py-1 rounded-full text-[8px] font-black tracking-[1.5px] uppercase shadow-md">
                      Popular
                    </div>
                  )}

                  <div>
                    <div className="mb-6">
                      <h3 className="text-lg font-bold text-white mb-2">{tier.name}</h3>
                      <p className="text-[11px] text-white/40 leading-relaxed min-h-[45px]">{tier.description}</p>
                    </div>

                    <div className="flex items-baseline gap-1.5 mb-6 border-b border-white/5 pb-5">
                      <span className="text-[14px] text-white/30">₹</span>
                      <motion.span key={tier.price} initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="text-[28px] font-black text-white tracking-tighter leading-none">
                        {tier.price.toLocaleString('en-IN')}
                      </motion.span>
                      <span className="text-[10px] text-white/30 uppercase tracking-[1px]">/ mo</span>
                    </div>

                    <ul className="space-y-4 mb-8 list-none p-0 m-0">
                      {tier.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-3 text-xs text-white/70">
                          <svg className={`w-4 h-4 shrink-0 ${tier.popular ? 'text-[var(--neon)]' : 'text-white/30'}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="tracking-[0.2px]">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href="#" className={`w-full py-3 text-center text-[10px] font-bold tracking-[1.5px] uppercase rounded-full transition-all duration-300 cursor-pointer ${
                    tier.popular ? 'bg-[var(--neon)] text-black hover:scale-[1.02] shadow-[0_0_25px_rgba(156,190,36,0.25)]' : 'border border-white/20 text-white hover:bg-white/5'
                  }`}>
                    {tier.cta}
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </section>

      <ExploreDocks />

      <Footer />
    </div>
  );
}
