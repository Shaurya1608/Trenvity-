'use client';

import { motion } from 'framer-motion';
import Reveal from '@/components/Reveal';

const services = [
  {
    id: '01',
    title: 'Performance Marketing',
    subtitle: 'Data-driven growth at scale',
    description:
      'Precision-targeted campaigns engineered for maximum ROAS. We combine AI-driven bidding, audience layering, and creative testing to turn clicks into customers.',
    features: ['AI-optimized ad spend', 'Multi-channel attribution', 'Real-time creative testing', 'Conversion rate optimization'],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    gradient: 'from-[var(--neon)]/20 via-transparent to-transparent',
    borderColor: 'border-[var(--neon)]/20 group-hover:border-[var(--neon)]/50',
    glowColor: 'bg-[var(--neon)]',
  },
  {
    id: '02',
    title: 'Digital Marketing',
    subtitle: 'Full-funnel brand acceleration',
    description:
      'End-to-end digital strategies that build brand authority. From SEO and content to social and email, we create cohesive ecosystems that attract, engage, and convert.',
    features: ['SEO & content strategy', 'Social media management', 'Email & automation flows', 'Brand identity & positioning'],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    gradient: 'from-white/10 via-transparent to-transparent',
    borderColor: 'border-white/10 group-hover:border-white/30',
    glowColor: 'bg-white',
  },
  {
    id: '03',
    title: 'Website Development',
    subtitle: 'High-performance digital experiences',
    description:
      'Custom-built websites that load instantly and convert relentlessly. Brutalist design meets modern engineering for a presence that dominates.',
    features: ['Custom brutalist design', 'Sub-second load times', 'Conversion-optimized UI', 'Headless CMS architecture'],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    gradient: 'from-[var(--neon)]/20 via-transparent to-transparent',
    borderColor: 'border-[var(--neon)]/20 group-hover:border-[var(--neon)]/50',
    glowColor: 'bg-[var(--neon)]',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] } },
};

export default function Services() {
  return (
    <section className="relative w-full bg-[var(--background)] px-6 md:px-10 lg:px-20 py-20 md:py-28 lg:py-36 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-[var(--neon)]/3 blur-[200px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-white/[0.02] blur-[150px] pointer-events-none" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none" />

      <div className="relative z-10 max-w-[1300px] mx-auto">
        <Reveal>
          <p className="text-center text-[var(--neon)] text-[11px] md:text-[12px] tracking-[1.5px] mb-4 font-bold">[ what we do ]</p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-center font-black italic uppercase text-white leading-[0.92] tracking-[-2px] text-[clamp(2rem,5vw,4rem)] mb-4">
            SERVICES THAT<br />
            <span className="text-[var(--neon)]">ACTUALLY DELIVER.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-center text-white/50 text-[12px] md:text-[14px] leading-[1.8] max-w-[600px] mx-auto mb-14 md:mb-20">
            Every service is built around one thing — results. No fluff, no cookie-cutter strategies. Just precision work that moves your brand forward.
          </p>
        </Reveal>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className={`group relative bg-white/[0.02] border ${service.borderColor} rounded-2xl p-6 md:p-8 overflow-hidden transition-all duration-500 hover:-translate-y-1`}
            >
              {/* Gradient overlay top */}
              <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${service.gradient} pointer-events-none`} />

              {/* Hover glow */}
              <div className={`absolute -top-24 -right-24 w-48 h-48 ${service.glowColor}/5 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

              <div className="relative z-10">
                {/* Top row: number + icon */}
                <div className="flex items-start justify-between mb-6">
                  <span className="text-white/10 text-[12px] font-mono font-bold tracking-[2px]">{service.id}</span>
                  <span className="text-white/30 group-hover:text-[var(--neon)] transition-colors duration-500">
                    {service.icon}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-white font-black text-[18px] md:text-[20px] leading-[1.2] mb-1.5 group-hover:text-[var(--neon)] transition-colors duration-500">
                  {service.title}
                </h3>

                {/* Subtitle */}
                <p className="text-white/30 text-[11px] md:text-[12px] font-medium mb-4 tracking-[0.5px]">
                  {service.subtitle}
                </p>

                {/* Divider */}
                <div className="w-8 h-[2px] bg-[var(--neon)]/30 group-hover:bg-[var(--neon)]/60 transition-colors duration-500 mb-4" />

                {/* Description */}
                <p className="text-white/50 text-[11px] md:text-[12px] leading-[1.7] mb-5">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="flex flex-col gap-2 mb-6">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2.5">
                      <span className="w-1 h-1 rounded-full bg-[var(--neon)]/50 shrink-0" />
                      <span className="text-white/40 text-[10px] md:text-[11px]">{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[1.5px] text-white/40 group-hover:text-[var(--neon)] transition-colors duration-500"
                >
                  Learn more
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
