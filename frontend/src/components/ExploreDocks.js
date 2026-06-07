'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Reveal from '@/components/Reveal';

export default function ExploreDocks() {
  const pathname = usePathname();

  const cards = [
    {
      id: '01',
      href: '/portfolio',
      title: 'Portfolio',
      subtitle: 'Showcase & Work',
      desc: 'High-converting campaigns and brand transformations.',
      color: 'var(--neon)',
    },
    {
      id: '02',
      href: '/website',
      title: 'Website',
      subtitle: 'Custom Development',
      desc: 'High-performance web experiences built for scale.',
      color: '#00a8ff',
    },
    {
      id: '03',
      href: '/performance-marketing',
      title: 'Performance',
      subtitle: 'Paid Acquisition',
      desc: 'ROAS-focused ad campaigns to scale brands fast.',
      color: '#ff0055',
    },
    {
      id: '04',
      href: '/digital-marketing',
      title: 'Digital',
      subtitle: 'Growth & Strategy',
      desc: 'Data-driven acquisition and audience building.',
      color: 'var(--neon)',
    },
    {
      id: '05',
      href: '/blog',
      title: 'Intel',
      subtitle: 'Industry Blog',
      desc: 'Search architecture and market deep-dives.',
      color: '#a855f7',
    }
  ];

  // Filter out the current page
  const filteredCards = cards.filter(card => card.href !== pathname);

  // Take the first 4 cards to maintain the 4-column layout
  const cardsToShow = filteredCards.slice(0, 4);

  return (
    <section className="relative w-full py-24 px-6 md:px-12 lg:px-20 border-t border-white/5 bg-[var(--background)]">
      <div className="max-w-[1200px] mx-auto w-full text-center relative z-10">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
            <div>
              <span className="text-[var(--neon)] font-bold text-[10px] uppercase tracking-[2px] block mb-3 font-mono">Explore Further Capabilities</span>
              <h2 className="text-[32px] md:text-[44px] font-black tracking-tighter uppercase leading-none">CHOOSE ANOTHER DOCK</h2>
            </div>
            <p className="text-white/40 text-[13px] max-w-[380px] leading-relaxed">
              We specialize across the entire digital landscape. Hop over to explore other growth-accelerating services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            {cardsToShow.map((card, idx) => (
              <Link 
                key={idx} 
                href={card.href} 
                className="group relative block p-6 border border-white/10 bg-[var(--background)] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl"
                style={{ '--hover-color': card.color }}
              >
                {/* Hover Border Top */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-white/5 group-hover:[background-color:var(--hover-color)] transition-colors duration-300" />
                
                {/* Top Row: Index & Arrow */}
                <div className="flex justify-between items-start mb-12">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-white/30 group-hover:text-white transition-colors duration-300">
                    [{card.id}]
                  </span>
                  <svg 
                    className="w-4 h-4 text-white/30 group-hover:[color:var(--hover-color)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 7l-10 10M17 7H9M17 7v8" />
                  </svg>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-black uppercase tracking-tight text-white mb-1 group-hover:[color:var(--hover-color)] transition-colors duration-300">
                    {card.title}
                  </h3>
                  <h4 className="text-[10px] font-bold font-mono tracking-[1.5px] text-white/40 mb-4 uppercase">
                    {card.subtitle}
                  </h4>
                  <p className="text-[12px] text-white/50 leading-relaxed group-hover:text-white/80 transition-colors duration-300 line-clamp-3">
                    {card.desc}
                  </p>
                </div>

                {/* Subtle gradient on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 pointer-events-none transition-opacity duration-300 mix-blend-screen"
                  style={{ background: `radial-gradient(circle at bottom right, var(--hover-color), transparent 60%)` }}
                />
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
