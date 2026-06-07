'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Reveal, { StaggerContainer, StaggerItem } from '@/components/Reveal';
import ExploreDocks from '@/components/ExploreDocks';

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const articles = [
    {
      id: '01',
      category: 'Search & SEO',
      readTime: '4 min read',
      title: 'Unraveling the 2026 Core Algorithm Shift',
      description: 'Search engines have restructured how organic citations are handled. Discover how real-time brand citations, active social media mentions, and semantic authority loops completely bypass traditional backlink models.',
    },
    {
      id: '02',
      category: 'Design & UX',
      readTime: '6 min read',
      title: 'Brutalist Web Aesthetics: Converting Ambitious Audiences',
      description: 'Why do flat, generic layouts fail to convert high-value clients? Analyze the psychology behind massive, high-contrast condensed typography, layered Z-depth masks, and aggressive micro-animations.',
    },
    {
      id: '03',
      category: 'Engineering',
      readTime: '5 min read',
      title: 'Headless Content Pipelines: Bypassing Legacy Caches',
      description: 'WordPress is static bloat. Explore how decoupled React structures connected to direct database content engines result in immediate sub-millisecond response rates around the globe.',
    },
    {
      id: '04',
      category: 'Search & SEO',
      readTime: '7 min read',
      title: 'Zero-Click Searches and the AI Revolution',
      description: 'As AI overviews dominate search results, the traditional click-through model is dying. Learn how to optimize for AI aggregation and secure brand presence in zero-click environments.',
    },
    {
      id: '05',
      category: 'Design & UX',
      readTime: '4 min read',
      title: 'The Return of Skeuomorphism in Dark Mode',
      description: 'Glassmorphism is evolving. We explore how subtle 3D textures, realistic lighting, and tactile feedback in dark mode interfaces are increasing user engagement times by 40%.',
    },
  ];

  const categories = ['All', ...new Set(articles.map(article => article.category))];

  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            article.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, articles]);

  const seoKeywordBlogs = [
    {
      title: 'High-Intent Blogging for Conversion',
      keyword: 'best SEO keywords for lead generation',
      description: 'Build content around search phrases that target buyers ready to purchase and generate qualified traffic for marketing services.',
    },
    {
      title: 'Authority Topics for Brand Visibility',
      keyword: 'SEO blog ideas for digital marketing',
      description: 'Create authority-rich posts that position your brand as the go-to resource for marketing strategy and growth optimization.',
    },
    {
      title: 'Local Search Capture Content',
      keyword: 'local SEO keywords for marketing agencies',
      description: 'Target local buyers with content designed to rank for proximity-driven and service-focused search intent.',
    },
    {
      title: 'Intent-Based Conversion Funnels',
      keyword: 'best SEO keywords for conversion',
      description: 'Use keyword clusters that match each stage of the funnel, from awareness to purchase-ready search queries.',
    },
    {
      title: 'Performance Blog Frameworks',
      keyword: 'SEO blog topics for performance marketing',
      description: 'Publish content that speaks directly to paid media, CRO, and measurable growth outcomes for modern brands.',
    },
    {
      title: 'Evergreen Content with Momentum',
      keyword: 'long-term SEO keywords for blogs',
      description: 'Create blog posts that keep attracting traffic month after month by focusing on evergreen search themes and structured authority signals.',
    },
  ];

  return (
    <div className="relative w-full min-h-screen bg-[var(--background)] text-[var(--foreground)] overflow-hidden selection:bg-[var(--neon)] selection:text-black">
      {/* Background Neon Glow Spheres using global variable */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[var(--neon)]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[var(--neon)]/5 blur-[150px] pointer-events-none" />
      
      <Header />

      {/* ============================================
         1. HERO SECTION (REFINED)
         ============================================ */}
      <section className="relative w-full pt-32 pb-24 px-6 md:px-12 lg:px-20 z-10 overflow-hidden bg-[var(--background)]">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-60" />

        <div className="relative w-full max-w-[1400px] mx-auto flex flex-col items-center justify-center text-center">
          <Reveal>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter mb-6 leading-tight">
              INSIGHTS <span className="text-[var(--neon)] italic">&</span> STRATEGY
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-[600px] mx-auto text-[var(--light-text)] md:text-lg mb-12">
              Deep dives into search architecture, brutalist design psychology, and performance engineering.
            </p>
          </Reveal>

          {/* Logical Section: Search and Filter Bar */}
          <Reveal delay={0.2} className="w-full max-w-3xl flex flex-col gap-6 z-20 relative">
            <div className="relative w-full group">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-white/40 group-focus-within:text-[var(--neon)] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search articles by keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 text-white rounded-full py-4 pl-12 pr-6 focus:outline-none focus:border-[var(--neon)] focus:ring-1 focus:ring-[var(--neon)] transition-all placeholder:text-white/30 backdrop-blur-md shadow-lg"
              />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${
                    selectedCategory === category 
                      ? 'bg-[var(--neon)] text-black border-[var(--neon)] shadow-[0_0_15px_rgba(155,206,36,0.3)]' 
                      : 'bg-transparent text-white/60 border-white/10 hover:border-white/30 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Improved TORN PAPER DIVIDER SVG */}
        <div className="absolute bottom-0 left-0 right-0 w-full z-10 pointer-events-none">
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            preserveAspectRatio="none"
            className="w-full h-[40px] md:h-[60px]"
          >
            <path
              d="M0,30 L60,10 L110,40 L200,5 L280,35 L350,15 L410,45 L490,10 L580,30 L640,5 L710,40 L790,20 L850,50 L940,15 L1020,45 L1090,10 L1170,35 L1250,5 L1320,40 L1390,20 L1440,35 L1440,60 L0,60 Z"
              fill="var(--secondary-bg)"
            />
            <path
              d="M0,30 L60,10 L110,40 L200,5 L280,35 L350,15 L410,45 L490,10 L580,30 L640,5 L710,40 L790,20 L850,50 L940,15 L1020,45 L1090,10 L1170,35 L1250,5 L1320,40 L1390,20 L1440,35"
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="2"
            />
          </svg>
        </div>
      </section>

      {/* ============================================
         2. EDITORIAL ARTICLE FEED SECTION (NEW GRID)
         ============================================ */}
      <section className="relative w-full py-16 lg:py-24 px-6 md:px-12 lg:px-20 bg-[var(--secondary-bg)] min-h-[50vh]">
        <div className="max-w-[1400px] mx-auto w-full">
          
          <div className="mb-12 flex justify-between items-end border-b border-white/5 pb-4">
             <h2 className="text-xl md:text-3xl font-extrabold uppercase tracking-tight">
               <span className="text-[var(--neon)]">Latest</span> Intel
             </h2>
             <span className="text-sm font-mono text-white/50">{filteredArticles.length} Results</span>
          </div>

          <AnimatePresence mode="popLayout">
            {filteredArticles.length > 0 ? (
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article) => (
                  <StaggerItem key={article.id}>
                    <Link href={`/blog/${article.id}`} className="block h-full group">
                      <div className="h-full flex flex-col p-5 rounded-2xl bg-[var(--background)] border border-white/5 group-hover:border-[var(--neon)]/30 group-hover:bg-white/[0.02] transition-all duration-500 shadow-lg relative overflow-hidden">
                        
                        <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--neon)]/10 blur-[40px] rounded-full translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="flex justify-between items-start mb-3">
                          <span className="text-[10px] font-bold uppercase tracking-[1.5px] font-mono text-[var(--neon)]">
                            {article.category}
                          </span>
                          <span className="text-[10px] text-white/40 uppercase tracking-[1px] font-mono">
                            {article.readTime}
                          </span>
                        </div>
                        
                        <h3 className="text-base font-extrabold uppercase tracking-tight text-white mb-2 group-hover:text-[var(--neon)] transition-colors duration-300 leading-snug">
                          {article.title}
                        </h3>
                        
                        <p className="text-[var(--light-text)] text-xs leading-relaxed mb-4 flex-1 line-clamp-3">
                          {article.description}
                        </p>

                        <div className="flex items-center text-[10px] font-bold tracking-[1.5px] uppercase text-white/50 group-hover:text-[var(--neon)] transition-colors">
                          Read Article 
                          <svg className="w-3.5 h-3.5 ml-1.5 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                className="py-20 text-center w-full border border-white/5 rounded-3xl bg-white/[0.01]"
              >
                <div className="text-[var(--neon)] text-4xl mb-4">⊙</div>
                <h3 className="text-xl font-bold uppercase mb-2">No Articles Found</h3>
                <p className="text-white/50 text-sm">We couldn't find any intel matching "{searchQuery}" in {selectedCategory}.</p>
                <button 
                  onClick={() => {setSearchQuery(''); setSelectedCategory('All');}}
                  className="mt-6 px-6 py-2 border border-white/20 rounded-full text-xs uppercase tracking-widest hover:bg-[var(--neon)] hover:text-black hover:border-[var(--neon)] transition-colors"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>

      {/* ============================================
         3. SEO KEYWORD BLOG CARDS
         ============================================ */}
      <section className="relative w-full py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-[var(--background)] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 md:mb-16 gap-6">
            <Reveal>
              <span className="text-[var(--neon)] font-bold text-xs uppercase tracking-[2px] block mb-3 font-mono">
                Keyword Strategy
              </span>
              <h2 className="text-[32px] md:text-[56px] font-extrabold tracking-[-2px] leading-[1] uppercase mb-2">
                ORGANIC GROWTH <br />
                BLUEPRINTS
              </h2>
            </Reveal>
            <Reveal delay={0.2} className="max-w-[420px] text-[var(--light-text)] text-sm">
              High-impact blog topics built to capture relevant search demand and boost your authority in marketing, branding, and growth.
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seoKeywordBlogs.map((item, idx) => (
              <div
                key={idx}
                className="group p-5 rounded-2xl border border-white/5 bg-[var(--secondary-bg)] hover:border-[var(--neon)]/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white/30 font-mono text-xs font-bold">{`0${idx + 1}`}</span>
                  <div className="h-1.5 w-1.5 rounded-full bg-[var(--neon)] shadow-[0_0_6px_rgba(155,206,36,0.8)]" />
                </div>
                <h3 className="text-base font-extrabold tracking-tight text-white leading-snug mb-2">
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed text-[var(--light-text)] mb-4 line-clamp-3">
                  {item.description}
                </p>
                <div className="pt-3 border-t border-white/5 flex flex-col gap-0.5">
                   <span className="text-[9px] text-white/40 uppercase tracking-widest">Target Keyword</span>
                   <span className="text-[11px] font-mono text-[var(--neon)]">{item.keyword}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
         4. PERSISTENT CONVERTING CTA FOOTER BLOCK
         ============================================ */}
      <section className="relative w-full py-20 lg:py-28 px-6 md:px-12 lg:px-20 border-t border-white/5 bg-[var(--secondary-bg)] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--neon)_0%,transparent_50%)] opacity-[0.03] pointer-events-none mix-blend-screen" />
        
        <div className="max-w-[800px] mx-auto w-full text-center relative z-10">
          <Reveal>
            <h2 className="text-[40px] sm:text-[56px] font-black tracking-tighter leading-none uppercase mb-6">
              READY TO DOMINATE <br />
              <span className="text-[var(--neon)]">SEARCH?</span>
            </h2>
            <p className="text-[var(--light-text)] text-base max-w-[500px] mx-auto mb-10 leading-relaxed">
              Unlock the keyword-led editorial framework designed to make your brand a search magnet and a lead-generating asset.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                href="#feed"
                className="w-full sm:w-auto px-8 py-4 bg-[var(--neon)] text-black font-bold text-sm tracking-wider uppercase rounded-full hover:scale-105 hover:shadow-[0_0_30px_rgba(155,206,36,0.3)] transition-all duration-300"
              >
                Back to Intel
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-bold text-sm tracking-wider uppercase rounded-full hover:bg-white/5 hover:border-white/40 transition-all duration-300"
              >
                Start a Project
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <ExploreDocks />
      <Footer />
    </div>
  );
}
