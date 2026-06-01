'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#070708] border-t border-white/5 pt-16 pb-8 overflow-hidden min-h-[100vh] flex flex-col">
      {/* Subtle grid background - high contrast box outline */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none opacity-80" />

      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 md:px-12 lg:px-20 flex flex-col justify-between flex-grow gap-10 sm:gap-14">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Brand Logo */}
          <div className="text-left">
            
          </div>

          {/* Navigation Links */}
          

          {/* Empty spacer to maintain layout */}
          <div />
        </div>

        {/* GIANT TYPOGRAPHY WITH FORCED PERSPECTIVE */}
        <div className="w-full flex-grow select-none overflow-visible mt-10 pt-10 pb-4 [perspective:800px] [transform-style:preserve-3d] flex justify-center items-end relative">
          {/* Fading overlay at the top to give depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#070708] via-transparent to-transparent z-10 pointer-events-none" />
          
          <h2 
            className="text-[14vw] font-black uppercase tracking-[-0.02em] leading-tight text-[#e8e8e8] text-center w-full font-sans origin-bottom transition-transform duration-700"
            style={{
              transform: 'rotateX(55deg) scaleX(1.4) scaleY(2.8) translateY(30%)',
              textShadow: '0 30px 60px rgba(0, 0, 0, 0.8)'
            }}
          >
            TRENVITY
          </h2>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/5 text-[9px] md:text-[10px] tracking-[1px] font-mono uppercase text-white/40">
          {/* Copyright */}
          <div className="text-left flex flex-col gap-0.5">
            <span>© TRENVITY /</span>
            <span>ALL RIGHTS RESERVED</span>
          </div>

          {/* Policy Links */}
          <div className="flex flex-col gap-1 text-left md:text-center">
            <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-white transition-colors">TERMS OF SERVICE</a>
          </div>

          {/* Socials & Credits */}
          <div className="flex flex-col gap-1 items-start md:items-end text-left md:text-right">
            <div className="flex gap-4">
              <a href="#" className="text-[var(--neon)] hover:brightness-110 font-bold transition-all">FACEBOOK</a>
              <a href="#" className="text-[var(--neon)] hover:brightness-110 font-bold transition-all">INSTAGRAM</a>
            </div>
            <span className="text-white/30">DESIGN BY TRENVITY STUDIO</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
