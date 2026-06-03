'use client';

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] } },
};

export default function Hero() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative w-full h-screen pt-20 md:pt-28"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Main ambient glow orbs */}
        <div className="absolute top-[10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[var(--neon)]/5 blur-[120px]" />
        <div className="absolute top-[50%] right-[-8%] w-[400px] h-[400px] rounded-full bg-[var(--neon)]/4 blur-[100px]" />
        <div className="absolute bottom-[10%] left-[30%] w-[300px] h-[300px] rounded-full bg-white/[0.02] blur-[80px]" />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50" />

        {/* Decorative geometric shapes */}
        <div className="absolute top-[8%] left-[6%] w-10 h-10 border border-[var(--neon)]/20 rotate-12" />
        <div className="absolute top-[18%] right-[10%] w-14 h-14 border border-white/[0.06] rounded-full" />
        <div className="absolute top-[35%] left-[4%] w-6 h-6 border border-[var(--neon)]/15 rotate-45" />
        <div className="absolute top-[50%] right-[6%] w-20 h-20 border border-white/[0.04] rounded-full" />
        <div className="absolute top-[12%] left-[40%] w-5 h-5 bg-[var(--neon)]/8 rotate-[20deg]" />
        <div className="absolute top-[65%] left-[7%] w-12 h-12 border border-[var(--neon)]/10 rounded-full" />
        <div className="absolute top-[28%] right-[4%] w-8 h-8 border border-[var(--neon)]/20 rotate-[30deg]" />
        <div className="absolute top-[75%] right-[14%] w-10 h-10 border border-white/[0.06] rounded-full" />

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

      <motion.h1 variants={itemVariants} className="absolute left-1/2 -translate-x-1/2 top-[clamp(2rem,6vw,4rem)] md:top-[clamp(3rem,5vw,5rem)] lg:top-[clamp(3rem,4vw,6rem)] z-10 font-sans font-black text-[clamp(4.5rem,26vw,9rem)] md:text-[clamp(6rem,24vw,14rem)] lg:text-[clamp(7rem,16vw,18rem)] text-[var(--neon)] leading-[0.85] tracking-[-2px] lg:tracking-[-4px] uppercase select-none m-0 p-0 text-center w-full">TRENVITY</motion.h1>

      <motion.div variants={itemVariants} className="absolute right-[20px] md:right-[28px] lg:right-[80px] top-[clamp(11rem,26vw,14rem)] md:top-[clamp(14rem,22vw,18rem)] lg:top-[clamp(15rem,18vw,21rem)] z-[15] max-w-[160px] md:max-w-[200px] lg:max-w-[260px] text-right">
        <p className="text-[12px] lg:text-[14px] leading-[1.7] text-white/65 m-0">
          We are a creative studio working at the
          intersection of design, technology &amp; innovation.
        </p>
        <span className="font-['Dancing_Script',cursive] text-[24px] text-white/50 mt-[4px] block">Since 2016</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: [0, -6, 0, 20, 0] }}
        transition={{
          opacity: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
          y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 },
        }}
        className="absolute left-1/2 bottom-[8vh] md:bottom-[10vh] lg:bottom-[12vh] -translate-x-1/2 w-[clamp(420px,85vw,920px)] md:w-[clamp(420px,70vw,750px)] lg:w-[clamp(520px,58vw,920px)] h-[clamp(55vh,55vh,1080px)] md:h-[clamp(500px,65vh,850px)] lg:h-[clamp(700px,92vh,1080px)] bg-[url('/landing/trenvity-landing.png')] bg-contain bg-no-repeat bg-bottom z-20 pointer-events-none"
        aria-hidden="true"
      />

      <motion.div variants={itemVariants} className="absolute left-[20px] md:left-[28px] lg:left-[48px] bottom-[12vh] md:bottom-[16vh] lg:bottom-[clamp(14vh,18vh,22vh)] z-[15] flex items-center gap-[8px] md:gap-[10px]">
        <div className="w-[36px] h-[36px] md:w-[42px] md:h-[42px] rounded-full border-[1.5px] border-white/25 inline-flex items-center justify-center text-white/55 transition-all duration-300 cursor-pointer bg-transparent p-0 hover:border-[var(--neon)] hover:text-[var(--neon)] hover:-translate-y-[2px]">
          <svg className="w-[14px] h-[14px] md:w-[17px] md:h-[17px] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.245.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" />
          </svg>
        </div>

        <div className="w-[36px] h-[36px] md:w-[42px] md:h-[42px] rounded-full border-[1.5px] border-white/25 inline-flex items-center justify-center text-white/55 transition-all duration-300 cursor-pointer bg-transparent p-0 hover:border-[var(--neon)] hover:text-[var(--neon)] hover:-translate-y-[2px]">
          <svg className="w-[14px] h-[14px] md:w-[17px] md:h-[17px] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.767-.63.165-1.27.25-1.93.25H1V4.51h5.938v-.007zM6.5 10.53c.6 0 1.08-.16 1.46-.49.38-.33.57-.79.57-1.38 0-.32-.05-.6-.17-.82a1.39 1.39 0 00-.46-.56 1.72 1.72 0 00-.66-.31 3.19 3.19 0 00-.81-.1H3.8v3.66h2.7zm.217 6.48c.313 0 .61-.03.88-.1.28-.07.52-.18.72-.33.21-.15.37-.35.48-.59.12-.24.18-.54.18-.9 0-.7-.2-1.22-.6-1.55-.4-.33-.92-.5-1.56-.5H3.8v3.97h2.917zM15.5 17.14c.46.44 1.12.66 1.98.66.62 0 1.15-.16 1.58-.47.44-.32.7-.65.78-.99h2.59c-.41 1.28-1.03 2.2-1.85 2.77-.83.57-1.83.85-3.01.85-.82 0-1.56-.13-2.22-.4a4.83 4.83 0 01-1.72-1.14 5.1 5.1 0 01-1.1-1.77c-.26-.69-.4-1.44-.4-2.27 0-.8.13-1.54.4-2.22a5.23 5.23 0 011.13-1.78 5.13 5.13 0 011.73-1.19 5.41 5.41 0 012.22-.44c.9 0 1.7.18 2.38.54.69.36 1.27.84 1.73 1.46.46.61.8 1.32 1 2.12.2.8.27 1.66.2 2.56h-7.73c.04.94.36 1.7.82 2.13zM18.76 11.34c-.36-.39-.97-.59-1.7-.59a2.8 2.8 0 00-1.12.2c-.32.14-.58.32-.78.55-.2.23-.34.47-.42.74-.08.26-.14.52-.15.77h5.04c-.08-.78-.36-1.28-.87-1.67zM15.1 5.65h5.35v1.39H15.1V5.65z" />
          </svg>
        </div>

        <div className="w-[36px] h-[36px] md:w-[42px] md:h-[42px] rounded-full border-[1.5px] border-white/25 inline-flex items-center justify-center text-white/55 transition-all duration-300 cursor-pointer bg-transparent p-0 hover:border-[var(--neon)] hover:text-[var(--neon)] hover:-translate-y-[2px]">
          <svg className="w-[14px] h-[14px] md:w-[17px] md:h-[17px] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
          </svg>
        </div>

        <div className="w-[36px] h-[36px] md:w-[42px] md:h-[42px] rounded-full border-[1.5px] border-white/25 inline-flex items-center justify-center text-white/55 transition-all duration-300 cursor-pointer bg-transparent p-0 hover:border-[var(--neon)] hover:text-[var(--neon)] hover:-translate-y-[2px]">
          <svg className="w-[14px] h-[14px] md:w-[17px] md:h-[17px] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
        </div>

        <div className="w-[36px] h-[36px] md:w-[42px] md:h-[42px] rounded-full border-[1.5px] border-white/25 inline-flex items-center justify-center text-white/55 transition-all duration-300 cursor-pointer bg-transparent p-0 hover:border-[var(--neon)] hover:text-[var(--neon)] hover:-translate-y-[2px]">
          <svg className="w-[14px] h-[14px] md:w-[17px] md:h-[17px] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </div>
      </motion.div>
    </motion.section>
  );
}
