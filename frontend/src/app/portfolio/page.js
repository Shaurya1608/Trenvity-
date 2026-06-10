'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Reveal, { StaggerContainer, StaggerItem } from '@/components/Reveal';
import ExploreDocks from '@/components/ExploreDocks';

const projects = [
  {
    id: '001',
    title: 'Nexus Brand Identity',
    category: 'Brand Design',
    year: '2024',
    tags: ['Branding', 'Visual Identity', 'Logomark'],
    description: 'A full premium brand identity system for an AI SaaS platform. Encompassing logomark, typographic guidelines, color tokens, and dark/light variant asset packs.',
    accent: '#c8f000',
    span: 'col-span-2',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '002',
    title: 'Trenvity SMM Dashboard',
    category: 'UI/UX Design',
    year: '2024',
    tags: ['Next.js', 'Dashboard', 'Analytics'],
    description: 'High-performance social media analytics command center. Custom component library and fully interactive dark-mode data panels.',
    accent: '#00f0ff',
    span: 'col-span-1',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '003',
    title: 'Brutalist E-Commerce Matrix',
    category: 'Web Development',
    year: '2024',
    tags: ['Headless', 'Commerce', 'Custom UI'],
    description: 'Ultra-fast headless commerce platform with brutalist aesthetic system. Custom checkout flows and pixel-perfect product staging.',
    accent: '#c8f000',
    span: 'col-span-1',
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '004',
    title: 'Editorial Motion Reel',
    category: 'Motion Design',
    year: '2023',
    tags: ['Animation', 'After Effects', 'Branding'],
    description: 'A complete motion design reel for a digital fashion house — product-reveal transitions, typographic loops, and 3D billboard renders.',
    accent: '#ff007f',
    span: 'col-span-2',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop',
  },
];

const stats = [
  { value: '120+', label: 'Projects Launched' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '4.8x', label: 'Avg. ROI Lift' },
  { value: '6yr', label: 'Industry Experience' },
];


export default function PortfolioPage() {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div className="relative w-full min-h-screen bg-[var(--background)] text-white overflow-hidden selection:bg-[var(--neon)] selection:text-black">

      <Header />

      {/* ============================================
         1. EDITORIAL HERO SECTION
         ============================================ */}
      <section className="relative w-full h-screen flex flex-col justify-between overflow-hidden -mt-[80px] md:-mt-[95px] pt-[80px] md:pt-[95px]">

        {/* Rich dark textured gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(200,240,0,0.04)_0%,transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(0,240,255,0.03)_0%,transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff04_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />
        {/* Vignette overlay for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.6)_100%)] pointer-events-none" />

        {/* Top row meta labels — exactly like the reference */}
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
            {/* The Giant PORTFOLIO text */}
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
              className="font-black uppercase text-white tracking-[-0.03em] leading-[0.85] select-none w-full text-center md:text-left"
              style={{ fontSize: 'clamp(34px, 11vw, 200px)' }}
            >
              PORTFOLIO
            </motion.h1>

            {/* Year Badge — sits cleanly under title */}
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

          {/* Bottom subtitle row — matching reference layout */}
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
        />

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="relative z-10 flex items-center justify-center pb-10 gap-3"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
          >
            <span className="w-1 h-2 rounded-full bg-[var(--neon)]" />
          </motion.div>
          <span className="text-[10px] text-white/30 uppercase tracking-[2px] font-mono">Scroll to explore</span>
        </motion.div>

      </section>

      {/* ============================================
         2. LIVE STATS ROW
         ============================================ */}
      <section className="relative w-full border-t border-b border-white/5 bg-[var(--secondary-bg)]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <div className={`flex flex-col items-center justify-center py-10 px-6 text-center ${i < stats.length - 1 ? 'border-r border-white/5' : ''}`}>
                <motion.span
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 150, delay: i * 0.08 }}
                  className="text-[40px] md:text-[52px] font-black tracking-[-2px] text-white leading-none mb-2"
                >
                  {stat.value}
                </motion.span>
                <span className="text-[10px] uppercase tracking-[2px] text-white/40 font-mono">{stat.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============================================
         3. PROJECT SHOWCASE GRID
         ============================================ */}
      <section className="relative w-full py-14 md:py-16 px-6 md:px-12 lg:px-20 bg-[var(--background)]">
        <div className="max-w-[1400px] mx-auto w-full">

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
                Each project is uniquely conceived, designed, and developed to convert visitors into loyal advocates.
              </p>
            </Reveal>
          </div>

          {/* Projects Grid */}
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {projects.map((project, idx) => (
              <StaggerItem
                key={project.id}
              >
                <motion.div
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className="relative group cursor-pointer"
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                >
                  {/* Portrait Media Container */}
                  <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-white/5 border border-white/10 group-hover:border-white/30 transition-all duration-300 mb-4">
                    {/* Placeholder for Images or Videos */}
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                    />
                    
                    {/* Animated accent glow on hover */}
                    <motion.div
                      animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 pointer-events-none mix-blend-overlay"
                      style={{ background: `linear-gradient(to top, ${project.accent}80, transparent)` }}
                    />
                  </div>

                  {/* Info Section Below Media */}
                  <div className="px-2">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-mono text-[9px] text-white/30 tracking-[2px]">{project.id}</span>
                      <span
                        className="text-[8px] font-bold uppercase tracking-[1.5px] px-2 py-0.5 rounded-full border"
                        style={{
                          color: project.accent,
                          borderColor: `${project.accent}30`,
                          backgroundColor: `${project.accent}10`,
                        }}
                      >
                        {project.category}
                      </span>
                    </div>

                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-extrabold uppercase tracking-tight text-white leading-[1.1] text-lg md:text-xl transition-colors duration-300" style={{ color: hoveredProject === project.id ? project.accent : 'white' }}>
                        {project.title}
                      </h3>
                      
                      {/* Arrow CTA */}
                      <motion.div
                        animate={{ x: hoveredProject === project.id ? 4 : 0, opacity: hoveredProject === project.id ? 1 : 0.4 }}
                        transition={{ duration: 0.3 }}
                        className="shrink-0 mt-1"
                        style={{ color: project.accent }}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </motion.div>
                    </div>
                    
                    <p className="text-white/50 text-[12px] md:text-[13px] leading-relaxed line-clamp-2 mb-4">
                      {project.description}
                    </p>

                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* View All CTA */}
          <Reveal delay={0.3}>
            <div className="flex justify-center mt-12">
              <Link
                href="#"
                className="inline-flex items-center gap-3 px-10 py-4 border border-white/15 rounded-full text-[12px] font-bold tracking-[2px] uppercase text-white/80 hover:bg-white/5 hover:border-[var(--neon)] hover:text-[var(--neon)] transition-all duration-300"
              >
                View All Projects
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </Reveal>

        </div>
      </section>



      {/* ============================================
         5. PROCESS TIMELINE
         ============================================ */}
      <section className="relative w-full py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-[var(--background)] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto w-full">

          <Reveal className="text-center mb-16">
            <span className="text-[var(--neon)] font-bold text-xs uppercase tracking-[2px] block mb-3 font-mono">
              Creative Process
            </span>
            <h2 className="text-[32px] md:text-[56px] font-extrabold tracking-[-2px] leading-[1] uppercase">
              HOW WE EXECUTE
            </h2>
          </Reveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery', desc: 'Deep-dive session to extract brand goals, audience profiling, and competitor landscape audit.' },
              { step: '02', title: 'Strategy', desc: 'We architect a tailored blueprint — wireframes, content scaffolding, and conversion pathway design.' },
              { step: '03', title: 'Creation', desc: 'Headless development with custom component libraries, animation systems, and integrated APIs.' },
              { step: '04', title: 'Launch & Scale', desc: 'Deployed to global edge networks with performance monitoring, A/B testing, and growth loops.' },
            ].map((item) => (
              <StaggerItem key={item.step}>
                <div className="relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-[var(--neon)]/30 transition-all duration-300 group hover:-translate-y-1">
                  <span className="font-mono text-[var(--neon)] text-[11px] font-bold tracking-[2px] block mb-4">{item.step}</span>
                  <h3 className="text-xl font-extrabold uppercase tracking-tight text-white mb-3">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                  {/* Decorative corner accent on hover */}
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[var(--neon)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-br-2xl" />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </section>

      {/* ============================================
         6. TESTIMONIAL STRIP
         ============================================ */}
      <section className="relative w-full py-20 px-6 md:px-12 lg:px-20 border-t border-white/5 bg-[var(--background)] overflow-hidden">
        <div className="max-w-[900px] mx-auto text-center">
          <Reveal>
            <div className="mb-6 flex justify-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="w-5 h-5 text-[var(--neon)]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-[22px] md:text-[30px] font-bold text-white leading-tight mb-8 italic tracking-[-0.5px]">
              "Trenvity delivered a custom headless site that outperformed our old WordPress install by 8x on load speed. The brutalist aesthetic they brought to our brand converted our landing page at 14% — a 3x increase."
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[var(--neon)]/20 border border-[var(--neon)]/30 flex items-center justify-center">
                <span className="text-[var(--neon)] font-black text-sm">JK</span>
              </div>
              <div className="text-left">
                <span className="text-sm font-bold text-white block">Jordan Kim</span>
                <span className="text-xs text-white/40 uppercase tracking-[1px]">CEO, Nexus SaaS Platform</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================
         7. FINAL CTA
         ============================================ */}
      <section className="relative w-full py-24 lg:py-32 px-6 md:px-12 lg:px-20 border-t border-white/5 bg-[var(--background)]">
        <div className="max-w-[1000px] mx-auto text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[var(--neon)]/8 rounded-full blur-[120px] pointer-events-none" />

          <Reveal>
            <span className="text-[var(--neon)] font-bold text-xs uppercase tracking-[2px] block mb-4 font-mono">Let's Build</span>
            <h2 className="text-[36px] sm:text-[52px] lg:text-[72px] font-extrabold tracking-[-2px] leading-none uppercase mb-6">
              YOUR PROJECT <br />
              DESERVES THIS
            </h2>
            <p className="text-white/60 text-sm sm:text-base max-w-[500px] mx-auto mb-10 leading-relaxed">
              From brutal identity systems to performance headless builds — we architect brands that leave permanent digital marks.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                href="#"
                className="w-full sm:w-auto px-10 py-4 bg-[var(--neon)] text-black font-black text-[13px] tracking-[1.5px] uppercase rounded-full hover:scale-[1.03] transition-all duration-300 shadow-[0_0_40px_rgba(200,240,0,0.2)]"
              >
                Start Your Project
              </Link>
              <Link
                href="/"
                className="w-full sm:w-auto px-10 py-4 border border-white/15 text-white font-bold text-[13px] tracking-[1px] uppercase rounded-full hover:bg-white/5 transition-all duration-300"
              >
                Back to Home
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
