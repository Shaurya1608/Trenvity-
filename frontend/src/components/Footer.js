'use client';

import React, { useState } from 'react';

export default function Footer() {
  const [activeLink, setActiveLink] = useState('HOME');
  const menuItems = ['HOME', 'ABOUT', 'SERVICES', 'PORTFOLIO', 'CONTACT'];

  return (
    <footer className="relative w-full bg-footer-grid border-t border-white/5 pt-16 pb-8 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      {/* Top Row: Logo, Menu Links, and Newsletter Sign Up */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 items-start pb-12">
        {/* Logo Section */}
        <div className="md:col-span-4">
          <span className="italic font-black text-2xl tracking-[2px] text-white uppercase font-sans">
            TRENVITY®
          </span>
        </div>

        {/* Menu Navigation Section */}
        <div className="md:col-span-4 flex flex-col items-start space-y-3">
          {menuItems.map((item) => {
            const isActive = activeLink === item;
            return (
              <button
                key={item}
                onClick={() => setActiveLink(item)}
                className={`text-[12px] font-mono tracking-[2px] uppercase transition-all duration-300 flex items-center gap-1.5 focus:outline-none cursor-pointer ${
                  isActive ? 'text-white' : 'text-white/40 hover:text-white'
                }`}
              >
                <span>{isActive ? '[' : '\u00A0'}</span>
                <span>{item}</span>
                <span>{isActive ? ']' : '\u00A0'}</span>
              </button>
            );
          })}
        </div>

        {/* Newsletter Signup Section */}
        <div className="md:col-span-4 flex flex-col items-start md:items-end w-full">
          <div className="text-[12px] md:text-sm font-black uppercase tracking-[1px] text-white mb-4 flex flex-wrap gap-1.5 font-sans justify-start md:justify-end">
            <span>SIGN UP</span>
            <span>TO OUR</span>
            <span>NEWSLETTER</span>
          </div>

          <div className="relative flex items-center w-full max-w-[320px]">
            <input
              type="email"
              placeholder="YOUR EMAIL"
              className="w-full bg-[var(--neon)] text-black placeholder-black/70 text-[10px] font-mono font-bold uppercase tracking-[1.5px] px-5 py-3.5 rounded-full outline-none pr-12 transition-all duration-300 focus:ring-1 focus:ring-white/20"
            />
            <button className="absolute right-1.5 w-9 h-9 rounded-full bg-black text-[var(--neon)] flex items-center justify-center hover:scale-105 transition-transform duration-200 cursor-pointer">
              <svg 
                className="w-4 h-4 transform" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                viewBox="0 0 24 24"
              >
                {/* Down-right arrow matching the screenshot */}
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 19H9m10 0V9m0 10L5 5" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Middle Row: Massive "TRENVITY" Branding */}
      <div className="w-full text-center py-10 md:py-16 overflow-visible select-none [perspective:1500px]">
        <span className="footer-massive-text text-[15vw] md:text-[14vw] tracking-tighter block w-full leading-none">
          TRENVITY
        </span>
      </div>

      {/* Bottom Row: Copyright, Disclaimers/Policy, and Socials/Credits */}
      <div className="mt-8 pt-8 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-6 text-[10px] uppercase tracking-[1px] text-white/40 font-mono">
        {/* Left column */}
        <div className="flex flex-col space-y-1">
          <span>© TRENVITY /</span>
          <span>ALL RIGHTS RESERVED</span>
        </div>

        {/* Center column */}
        <div className="flex flex-col space-y-1 md:items-center">
          <a href="#" className="hover:text-white transition-colors duration-300">PRIVACY POLICY</a>
          <a href="#" className="hover:text-white transition-colors duration-300">TERMS OF SERVICE</a>
        </div>

        {/* Right column */}
        <div className="flex flex-col space-y-1 md:items-end">
          <div className="flex gap-4">
            <a href="#" className="text-[var(--neon)] hover:brightness-110 transition-all duration-300">FACEBOOK</a>
            <a href="#" className="text-[var(--neon)] hover:brightness-110 transition-all duration-300">INSTAGRAM</a>
          </div>
          <span>
            DESIGN BY <span className="text-white">ANTIGRAVITY</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
