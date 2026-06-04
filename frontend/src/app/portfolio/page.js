'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Reveal, { StaggerContainer, StaggerItem } from '@/components/Reveal';

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
  },
];

const stats = [
  { value: '120+', label: 'Projects Launched' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '4.8x', label: 'Avg. ROI Lift' },
  { value: '6yr', label: 'Industry Experience' },
];

const skills = [
  { name: 'Brand Identity Systems', level: 98 },
  { name: 'Headless Web Development', level: 95 },
  { name: 'Motion & Interaction Design', level: 90 },
  { name: 'UI/UX Architecture', level: 97 },
  { name: 'SEO & Technical Optimization', level: 92 },
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
          <div className="relative">
            {/* The Giant PORTFOLIO text */}
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
              className="font-black uppercase text-white tracking-[-0.03em] leading-[0.85] select-none"
              style={{ fontSize: 'clamp(72px, 14vw, 200px)' }}
            >
              PORTFOLIO
            </motion.h1>

            {/* Year Badge — neon pill, floating next to title end */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5, type: 'spring', stiffness: 200 }}
              className="absolute top-3 md:top-4 lg:top-6 right-0 lg:right-6"
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
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project, idx) => (
              <StaggerItem
                key={project.id}
                className={`${project.span === 'col-span-2' ? 'md:col-span-2' : 'md:col-span-1'}`}
              >
                <motion.div
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className="relative group rounded-2xl overflow-hidden border border-white/5 bg-white/[0.02] cursor-pointer transition-all duration-300 hover:border-white/15"
                  style={{ minHeight: project.span === 'col-span-2' ? 200 : 160 }}
                  whileHover={{ y: -3 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                >
                  {/* Animated accent glow on hover */}
                  <motion.div
                    animate={{
                      opacity: hoveredProject === project.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: `radial-gradient(ellipse at top left, ${project.accent}08, transparent 60%)`,
                    }}
                  />

                  <div className="relative z-10 p-5 md:p-6 h-full flex flex-col justify-between">
                    {/* Top row: ID + Year + Category */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-[10px] text-white/30 tracking-[2px]">
                          {project.id}
                        </span>
                        <span
                          className="text-[9px] font-bold uppercase tracking-[1.5px] px-2.5 py-0.5 rounded-full border"
                          style={{
                            color: project.accent,
                            borderColor: `${project.accent}20`,
                            backgroundColor: `${project.accent}06`,
                          }}
                        >
                          {project.category}
                        </span>
                      </div>
                      <span className="text-[10px] text-white/30 font-mono">{project.year}</span>
                    </div>

                    {/* Project Title */}
                    <div className="flex-1 flex flex-col justify-center">
                      <h3
                        className={`font-extrabold uppercase tracking-tight text-white leading-[0.95] mb-2 transition-colors duration-300 ${
                          project.span === 'col-span-2'
                            ? 'text-[20px] md:text-[28px]'
                            : 'text-[18px] md:text-[22px]'
                        }`}
                      >
                        {project.title}
                      </h3>
                      <p className="text-white/50 text-[11px] leading-relaxed max-w-[560px]">
                        {project.description}
                      </p>
                    </div>

                    {/* Bottom tags + View arrow */}
                    <div className="flex items-end justify-between mt-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] uppercase font-bold tracking-[1px] text-white/30 px-2.5 py-1 rounded border border-white/8 bg-white/[0.03]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Arrow CTA */}
                      <motion.div
                        animate={{
                          x: hoveredProject === project.id ? 0 : 8,
                          opacity: hoveredProject === project.id ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center gap-2 shrink-0 ml-4"
                        style={{ color: project.accent }}
                      >
                        <span className="text-xs font-bold uppercase tracking-[1.5px]">View</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </motion.div>
                    </div>
                  </div>

                  {/* Bottom accent bar that slides in on hover */}
                  <motion.div
                    animate={{ scaleX: hoveredProject === project.id ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="absolute bottom-0 left-0 right-0 h-[3px] origin-left"
                    style={{ backgroundColor: project.accent }}
                  />
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
         4. SKILLS & EXPERTISE SECTION
         ============================================ */}
      <section className="relative w-full py-20 px-6 md:px-12 lg:px-20 border-t border-white/5 bg-[var(--background)]">
        <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <div className="lg:col-span-5">
            <Reveal>
              <span className="text-[var(--neon)] font-bold text-xs uppercase tracking-[2px] block mb-3 font-mono">
                Core Competencies
              </span>
              <h2 className="text-[28px] md:text-[36px] font-extrabold tracking-[-1.5px] leading-[1.1] uppercase mb-6">
                SKILLS THAT <br />
                CONVERT
              </h2>
              <p className="text-white/50 text-xs sm:text-sm leading-relaxed mb-8 max-w-[450px]">
                Each discipline listed is field-proven. Every project is executed with speed, precision, and a relentless commitment to measurable results.
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--neon)] text-black font-bold text-[12px] tracking-[1.5px] uppercase rounded-full hover:scale-[1.03] transition-transform duration-300 shadow-[0_0_30px_rgba(156,190,36,0.15)]"
              >
                Start a Project
              </Link>
            </Reveal>
          </div>

          {/* Right Skill Visualization (Premium Segmented Hardware Display) */}
          <div className="lg:col-span-7 flex flex-col gap-6 w-full">
            {skills.map((skill, idx) => {
              const numSegments = 12; // Wider grid of segments for detail
              const activeCount = Math.round((skill.level / 100) * numSegments);

              return (
                <div key={skill.name} className="w-full bg-white/[0.01] border border-white/5 rounded-xl p-5 hover:border-white/10 transition-colors duration-300">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold text-white tracking-[0.5px] uppercase">{skill.name}</span>
                    <span className="text-[10px] font-bold text-[var(--neon)] font-mono tracking-wider">{skill.level}% LEVEL</span>
                  </div>

                  {/* Custom animated hardware-style segments */}
                  <div className="flex gap-1.5 w-full">
                    {Array.from({ length: numSegments }).map((_, i) => {
                      const isActive = i < activeCount;
                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0.15, scaleY: 0.8 }}
                          whileInView={{ 
                            opacity: isActive ? 1 : 0.15, 
                            scaleY: 1,
                            backgroundColor: isActive ? 'var(--neon)' : 'rgba(255,255,255,0.1)'
                          }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 0.35, 
                            delay: idx * 0.06 + i * 0.03,
                            ease: 'easeOut'
                          }}
                          className="h-2 flex-1 rounded-[1px]"
                        />
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

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
      <section className="relative w-full py-20 px-6 md:px-12 lg:px-20 border-t border-white/5 bg-[var(--secondary-bg)] overflow-hidden">
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

      <Footer />
    </div>
  );
}
