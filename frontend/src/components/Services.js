'use client';

import { motion } from 'framer-motion';
import Reveal from '@/components/Reveal';

const services = [
  {
    id: 'S/1',
    title: 'BRAND STRATEGY',
    description:
      'We build brands that cut through the noise. From positioning and messaging to visual identity, we create a comprehensive strategy that tells your unique story and attracts the right audience — consistently.',
  },
  {
    id: 'S/2',
    title: 'PERFORMANCE MARKETING',
    description:
      'Every rupee you spend should work harder. We design and manage paid campaigns across all major platforms — Meta, Google, YouTube — optimised for real business outcomes, not vanity metrics.',
  },
  {
    id: 'S/3',
    title: 'CONTENT & CREATIVE',
    description:
      'Scroll-stopping content that converts. Our in-house creative team produces photography, video, and copy that not only looks premium but drives measurable engagement and builds genuine brand loyalty.',
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
    <section className="relative w-full bg-[var(--background)] text-white pt-16 md:pt-24">
      {/* ─── Header Section ─── */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12 flex justify-between items-end pb-10 md:pb-16 border-b border-white/10">
        <Reveal>
          <div className="flex items-start gap-4">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[var(--neon)] mt-2 md:mt-4 w-5 h-5 md:w-8 md:h-8 shrink-0"
            >
              <path
                d="M6 6L18 18M18 18V7M18 18H7"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="square"
                strokeLinejoin="miter"
              />
            </svg>
            <h2 className="font-sans font-black uppercase text-[clamp(2.5rem,8vw,6rem)] leading-[0.85] tracking-[-1.5px] md:tracking-[-3px]">
              OUR SERVICES
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="hidden lg:block text-white/40 text-[12px] leading-[1.7] max-w-[240px] text-right mb-1">
            Everything you need to build a brand that commands attention and drives real growth.
          </p>
        </Reveal>
      </div>

      {/* ─── Grid Section ─── */}
      <div className="max-w-[1440px] mx-auto border-b border-white/10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className={`group p-6 md:p-8 lg:p-12 flex flex-col relative overflow-hidden transition-all duration-500 hover:bg-[var(--neon)]/[0.03] cursor-default ${
                index !== services.length - 1 ? 'lg:border-r border-white/10 border-b lg:border-b-0' : ''
              }`}
            >
              {/* Hover top accent */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-[var(--neon)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              {/* Badge */}
              <div className="mb-6 md:mb-10">
                <div className="inline-flex items-center justify-center border border-[var(--neon)]/50 group-hover:border-[var(--neon)] rounded-full px-4 py-1.5 text-[var(--neon)] font-mono font-bold text-[13px] transition-colors duration-300">
                  {service.id}
                </div>
              </div>

              {/* Title */}
              <h3 className="font-sans font-black uppercase text-[clamp(1.8rem,3.5vw,2.4rem)] leading-[0.9] tracking-[-1px] mb-4 md:mb-6 group-hover:text-[var(--neon)] transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-white/45 group-hover:text-white/65 text-[13px] md:text-[14px] leading-[1.75] font-medium max-w-[360px] transition-colors duration-300">
                {service.description}
              </p>

              {/* Learn more link */}
              <div className="mt-auto pt-6 md:pt-8">
                <span className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[2px] uppercase text-white/20 group-hover:text-[var(--neon)] transition-colors duration-300">
                  Explore
                  <span className="w-0 group-hover:w-8 h-[1px] bg-current transition-all duration-300 inline-block" />
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
