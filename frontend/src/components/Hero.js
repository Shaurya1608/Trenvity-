'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -60, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] } },
};

const descVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] } },
};

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Elements fade out as user scrolls away
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const imgOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <motion.section
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative w-full h-screen pt-16 md:pt-20"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Main ambient glow orbs */}
        <div className="absolute top-[10%] left-[-5%] w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] rounded-full bg-[var(--neon)]/5 blur-[120px]" />
        <div className="absolute top-[50%] right-[-8%] w-[260px] h-[260px] sm:w-[400px] sm:h-[400px] rounded-full bg-[var(--neon)]/4 blur-[100px]" />
        <div className="absolute bottom-[10%] left-[30%] w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] rounded-full bg-white/[0.02] blur-[80px]" />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50" />

        {/* Decorative geometric shapes */}
        <div className="absolute top-[8%] left-[6%] w-10 h-10 border border-[var(--neon)]/20 rotate-12 hidden sm:block" />
        <div className="absolute top-[18%] right-[10%] w-14 h-14 border border-white/[0.06] rounded-full hidden md:block" />
        <div className="absolute top-[35%] left-[4%] w-6 h-6 border border-[var(--neon)]/15 rotate-45 hidden sm:block" />
        <div className="absolute top-[50%] right-[6%] w-20 h-20 border border-white/[0.04] rounded-full hidden md:block" />
        <div className="absolute top-[12%] left-[40%] w-5 h-5 bg-[var(--neon)]/8 rotate-[20deg] hidden sm:block" />
        <div className="absolute top-[65%] left-[7%] w-12 h-12 border border-[var(--neon)]/10 rounded-full hidden md:block" />
        <div className="absolute top-[28%] right-[4%] w-8 h-8 border border-[var(--neon)]/20 rotate-[30deg] hidden sm:block" />
        <div className="absolute top-[75%] right-[14%] w-10 h-10 border border-white/[0.06] rounded-full hidden md:block" />

        {/* Small floating dots cluster */}
        <div className="absolute top-[20%] left-[25%] w-1.5 h-1.5 rounded-full bg-[var(--neon)]/30" />
        <div className="absolute top-[22%] left-[27%] w-1 h-1 rounded-full bg-[var(--neon)]/20" />
        <div className="absolute top-[18%] left-[28%] w-1 h-1 rounded-full bg-white/20" />
        <div className="absolute top-[55%] right-[20%] w-1.5 h-1.5 rounded-full bg-[var(--neon)]/25" />
        <div className="absolute top-[57%] right-[22%] w-1 h-1 rounded-full bg-white/15" />
        <div className="absolute top-[40%] right-[15%] w-2 h-2 rounded-full bg-[var(--neon)]/15" />

        {/* Abstract line graph element */}
        <svg className="absolute bottom-[18%] right-[8%] w-28 h-16 opacity-[0.07]" viewBox="0 0 100 50" fill="none">
          <polyline points="0,40 20,35 35,20 55,30 70,10 85,15 100,5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="0,45 20,40 35,30 55,38 70,22 85,28 100,18" stroke="var(--neon)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="70" cy="10" r="2" fill="white" />
          <circle cx="100" cy="5" r="2" fill="var(--neon)" />
        </svg>

        {/* Abstract chart bars */}
        <div className="absolute bottom-[22%] left-[6%] flex items-end gap-[3px] opacity-[0.06]">
          <div className="w-[3px] h-8 bg-white rounded-full" />
          <div className="w-[3px] h-12 bg-[var(--neon)] rounded-full" />
          <div className="w-[3px] h-6 bg-white rounded-full" />
          <div className="w-[3px] h-14 bg-white rounded-full" />
          <div className="w-[3px] h-10 bg-[var(--neon)] rounded-full" />
          <div className="w-[3px] h-7 bg-white rounded-full" />
          <div className="w-[3px] h-11 bg-white rounded-full" />
        </div>

        {/* Diagonal stripe accent */}
        <div className="absolute top-[45%] left-[-2%] w-[12%] h-[1px] bg-gradient-to-r from-transparent via-[var(--neon)]/20 to-transparent rotate-[25deg]" />
        <div className="absolute top-[48%] left-[-2%] w-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-[25deg]" />
      </div>

      <motion.div style={{ opacity: textOpacity }} className="absolute left-0 right-0 top-0 z-10 pointer-events-none flex justify-center w-full">
        <motion.h1 
          variants={titleVariants} 
          className="relative top-[clamp(3rem,6vw,5rem)] md:top-[clamp(4rem,6vw,6rem)] lg:top-[clamp(4.5rem,5.5vw,6.5rem)] font-sans font-black text-[clamp(3.8rem,20vw,7rem)] md:text-[clamp(5.5rem,24vw,10rem)] lg:text-[clamp(7rem,16vw,18rem)] text-[var(--neon)] leading-[0.85] tracking-[-2px] lg:tracking-[-4px] uppercase select-none m-0 p-0 text-center w-full pointer-events-auto"
        >
          TRENVITY
        </motion.h1>
      </motion.div>

      <motion.div variants={descVariants} className="absolute right-[12px] md:right-[28px] lg:right-[80px] top-[clamp(12rem,25vw,16rem)] md:top-[clamp(18rem,25vw,22rem)] lg:top-[clamp(19rem,22vw,25rem)] z-[15] max-w-[140px] md:max-w-[200px] lg:max-w-[260px] text-right">
        <p className="text-[12px] lg:text-[14px] leading-[1.7] text-white/65 m-0">
          We don't just post. We build brands that people actually feel.
        </p>
        <span className="font-['Dancing_Script',cursive] text-[24px] text-white/50 mt-[4px] block">Est. 2022 · Ranchi, India</span>
      </motion.div>

      <motion.div style={{ opacity: imgOpacity }} className="absolute inset-0 z-20 pointer-events-none flex justify-center items-end">
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 50,
            damping: 15,
            delay: 0.4,
          }}
          className="relative bottom-[9vh] md:bottom-[-4vh] lg:bottom-[-5vh] right-[20px] md:right-[30px] lg:right-[50px] scale-[1.6] origin-bottom md:scale-100 w-[clamp(750px,200vw,1100px)] md:w-[clamp(420px,70vw,750px)] lg:w-[clamp(520px,58vw,920px)] h-[clamp(85vh,95vh,1150px)] md:h-[clamp(500px,65vh,850px)] lg:h-[clamp(700px,92vh,1080px)] bg-[url('/landing/trenvity-landing.png')] bg-contain bg-no-repeat bg-bottom pointer-events-none"
          aria-hidden="true"
        />
      </motion.div>


    </motion.section>
  );
}
