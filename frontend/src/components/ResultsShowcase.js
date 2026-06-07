'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal, { StaggerContainer, StaggerItem } from '@/components/Reveal';

const platformData = [
  {
    id: 'meta',
    platform: 'Meta Ads',
    image: '/data/16.png',
    aspect: 'landscape',
    stats: [
      { label: 'Campaigns Managed', value: '12+' },
      { label: 'Avg. Cost/Result', value: '₹14.57' },
      { label: 'Markets', value: 'IN & UAE' },
    ],
    description: 'Real Facebook & Instagram ad campaigns delivering leads and engagement across India and UAE markets.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0022 12.06C22 6.53 17.5 2.04 12 2.04Z" />
      </svg>
    ),
  },
  {
    id: 'google',
    platform: 'Google Ads',
    image: '/data/17.png',
    aspect: 'landscape',
    stats: [
      { label: 'Total Clicks', value: '17.2K+' },
      { label: 'Conversions', value: '9.3K+' },
      { label: 'Cost/Conv.', value: 'dh0.39' },
    ],
    description: 'High-performance Google Search campaigns driving clicks and conversions at ultra-low cost-per-conversion.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81z" />
      </svg>
    ),
  },
  {
    id: 'instagram-overview',
    platform: 'Instagram',
    image: '/data/Screenshot_20260607_234130.jpg.jpeg',
    aspect: 'portrait',
    stats: [
      { label: 'Views', value: '433.6K' },
      { label: 'Interactions', value: '21.3K' },
      { label: 'New Followers', value: '99' },
    ],
    description: 'Professional dashboard overview — explosive organic growth in just 30 days.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
      </svg>
    ),
  },
  {
    id: 'instagram-views',
    platform: 'Instagram Views',
    image: '/data/Screenshot_20260607_234145.jpg.jpeg',
    aspect: 'portrait',
    stats: [
      { label: 'Total Views', value: '433,619' },
      { label: 'Accounts Reached', value: '116K+' },
      { label: 'Reach Growth', value: '+72,498%' },
    ],
    description: '99.7% reach from non-followers — massive discovery and brand awareness engine.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
      </svg>
    ),
  },
  {
    id: 'instagram-interactions',
    platform: 'Instagram Engagement',
    image: '/data/Screenshot_20260607_234159.jpg.jpeg',
    aspect: 'portrait',
    stats: [
      { label: 'Interactions', value: '21,250' },
      { label: 'Organic', value: '99.5%' },
      { label: 'From Reels', value: '99.7%' },
    ],
    description: 'Almost entirely organic engagement — proof that great content strategy outperforms ad spend.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" />
      </svg>
    ),
  },
];

export default function ResultsShowcase() {
  const [activeCard, setActiveCard] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const landscapeItems = platformData.filter((d) => d.aspect === 'landscape');
  const portraitItems = platformData.filter((d) => d.aspect === 'portrait');

  return (
    <section className="relative w-full py-16 lg:py-20 px-6 md:px-12 lg:px-20 border-t border-white/5 bg-[var(--background)] z-10 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--neon)]/3 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-[1000px] mx-auto w-full relative z-10">
        {/* Header */}
        <Reveal className="text-center mb-16">
          <span className="text-[var(--neon)] font-bold text-xs uppercase tracking-[2px] block mb-3 font-mono">
            Real Campaign Data
          </span>
          <h2 className="text-[28px] md:text-[48px] font-extrabold tracking-[-2px] leading-[1] uppercase mb-4">
            RESULTS THAT <br className="hidden sm:block" />
            SPEAK FOR THEMSELVES
          </h2>
          <p className="text-white/40 text-sm max-w-[550px] mx-auto leading-relaxed mt-4">
            No mockups. No filler. These are live screenshots from campaigns we manage — real numbers, real growth, real ROI.
          </p>
        </Reveal>

        {/* Bento Grid */}
        <div className="flex flex-col gap-4">

          {/* Row 1: Landscape cards (Meta + Google) */}
          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {landscapeItems.map((item) => (
              <StaggerItem key={item.id}>
                <motion.div
                  className="group relative rounded-2xl overflow-hidden border border-white/5 bg-white/[0.01] cursor-pointer h-full"
                  onMouseEnter={() => setActiveCard(item.id)}
                  onMouseLeave={() => setActiveCard(null)}
                  onClick={() => setSelectedImage(item.image)}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Image */}
                  <div className="relative w-full aspect-[21/9] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.platform}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                  </div>

                  {/* Content overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                    {/* Platform badge */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[var(--neon)]">
                        {item.icon}
                      </div>
                      <span className="text-xs font-bold text-white uppercase tracking-[1px]">
                        {item.platform}
                      </span>
                    </div>

                    <p className="text-white/50 text-[11px] leading-relaxed mb-4 max-w-[400px]">
                      {item.description}
                    </p>

                    {/* Stats row */}
                    <div className="flex gap-6">
                      {item.stats.map((stat) => (
                        <div key={stat.label} className="flex flex-col">
                          <span className="text-[var(--neon)] text-base md:text-lg font-black tracking-tight leading-none">
                            {stat.value}
                          </span>
                          <span className="text-[9px] text-white/30 uppercase tracking-[1px] mt-1 font-mono">
                            {stat.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hover accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[var(--neon)]/0 to-transparent group-hover:from-[var(--neon)]/10 transition-all duration-500 pointer-events-none rounded-tr-2xl" />
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Row 2: Portrait cards (Instagram screenshots) */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {portraitItems.map((item) => (
              <StaggerItem key={item.id}>
                <motion.div
                  className="group relative rounded-2xl overflow-hidden border border-white/5 bg-white/[0.01] cursor-pointer"
                  onMouseEnter={() => setActiveCard(item.id)}
                  onMouseLeave={() => setActiveCard(null)}
                  onClick={() => setSelectedImage(item.image)}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Phone frame mockup */}
                  <div className="relative w-full aspect-[4/5] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.platform}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/30 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-300" />
                  </div>

                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                    {/* Platform badge */}
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-[var(--neon)]">
                        {item.icon}
                      </div>
                      <span className="text-[10px] font-bold text-white uppercase tracking-[1px]">
                        {item.platform}
                      </span>
                    </div>

                    <p className="text-white/40 text-[10px] leading-relaxed mb-3 line-clamp-2">
                      {item.description}
                    </p>

                    {/* Key stat highlight */}
                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                      {item.stats.slice(0, 2).map((stat) => (
                        <div key={stat.label} className="flex flex-col">
                          <span className="text-[var(--neon)] text-sm font-black tracking-tight leading-none">
                            {stat.value}
                          </span>
                          <span className="text-[8px] text-white/25 uppercase tracking-[1px] mt-0.5 font-mono">
                            {stat.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hover accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[var(--neon)]/0 to-transparent group-hover:from-[var(--neon)]/10 transition-all duration-500 pointer-events-none rounded-tr-2xl" />
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>

        {/* Bottom trust line */}
        <Reveal delay={0.3}>
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[var(--neon)] animate-pulse" />
              <span className="text-[10px] font-mono text-white/30 uppercase tracking-[1.5px]">
                Live campaign data · Updated weekly
              </span>
            </div>
            <span className="text-white/10 hidden sm:block">|</span>
            <span className="text-[10px] font-mono text-white/30 uppercase tracking-[1.5px]">
              All metrics verified & unedited
            </span>
          </div>
        </Reveal>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-10 cursor-zoom-out backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-[110] w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-[var(--neon)] hover:text-black transition-colors cursor-pointer">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full h-full max-w-6xl max-h-[90vh] cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Enlarged result screenshot"
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
