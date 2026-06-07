'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Reveal, { StaggerContainer, StaggerItem } from '@/components/Reveal';

export default function Pricing({ subtitle, title, tiers, currency = '$' }) {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' or 'yearly'

  return (
    <section id="pricing" className="relative w-full py-24 px-6 md:px-12 lg:px-20 border-t border-white/5 bg-[var(--background)] z-10">
      <div className="max-w-[1300px] mx-auto w-full">
        
        <div className="flex flex-col items-center text-center mb-16">
          <Reveal>
            <span className="text-[var(--neon)] font-bold text-xs uppercase tracking-[2px] block mb-3 font-mono">
              {subtitle}
            </span>
            <h2 
              className="text-[28px] md:text-[44px] font-extrabold tracking-[-2px] leading-[1.05] uppercase mb-6" 
              dangerouslySetInnerHTML={{ __html: title }}
            />
          </Reveal>

          {/* Billing Cycle Switch */}
          <Reveal delay={0.15}>
            <div className="inline-flex items-center p-1 bg-white/[0.03] border border-white/5 rounded-full relative z-10 backdrop-blur-xl">
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

        {/* Pricing Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1150px] mx-auto items-stretch">
          {tiers.map((tier) => {
            const currentPrice = billingCycle === 'monthly' ? tier.priceMonthly : tier.priceYearly;
            
            return (
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
                    {tier.popularText || 'Highly Recommended'}
                  </div>
                )}

                <div>
                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-[11px] text-white/40 leading-relaxed min-h-[45px]">{tier.description}</p>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1.5 mb-6 border-b border-white/5 pb-5">
                    <span className="text-[14px] text-white/30">{currency}</span>
                    <motion.span
                      key={currentPrice}
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-[36px] font-black text-white tracking-tighter leading-none"
                    >
                      {currentPrice.toLocaleString('en-IN')}
                    </motion.span>
                    <span className="text-[10px] text-white/30 uppercase tracking-[1px]">/ mo</span>
                  </div>

                  {/* Features list */}
                  <ul className="space-y-4 mb-8 list-none p-0 m-0">
                    {tier.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-3 text-xs text-white/70">
                        <svg
                          className={`w-4 h-4 shrink-0 ${tier.popular ? 'text-[var(--neon)]' : 'text-white/30'}`}
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

                {/* Button */}
                <Link
                  href="#"
                  className={`w-full py-3 text-center text-[11px] font-bold tracking-[1.5px] uppercase rounded-full transition-all duration-300 cursor-pointer ${
                    tier.popular
                      ? 'bg-[var(--neon)] text-black hover:scale-[1.02] shadow-[0_0_25px_rgba(156,190,36,0.25)]'
                      : 'border border-white/20 text-white hover:bg-white/5'
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            </StaggerItem>
          )})}
        </StaggerContainer>

      </div>
    </section>
  );
}
