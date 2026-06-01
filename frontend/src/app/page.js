export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-[var(--background)] overflow-hidden">
      {/* ========== HEADER ========== */}
      <header className="relative z-[100] w-full flex items-center justify-between px-5 md:px-[28px] lg:px-[48px] py-4 md:py-[20px] lg:py-[28px] box-border">
        <div className="text-[14px] font-bold tracking-[1.5px] text-[var(--neon)] uppercase whitespace-nowrap shrink-0">NO LIMITS</div>

        <nav className="hidden md:flex items-center gap-[32px] list-none m-0 p-0">
          <a href="#" className="text-[14px] text-white/75 no-underline transition-colors duration-300 tracking-[0.3px] cursor-pointer hover:text-white">Social Media</a>
          <a href="#" className="text-[14px] text-white/75 no-underline transition-colors duration-300 tracking-[0.3px] cursor-pointer hover:text-white">Website</a>
          <a href="#" className="text-[14px] text-white/75 no-underline transition-colors duration-300 tracking-[0.3px] cursor-pointer hover:text-white">Blog</a>
          <a href="#" className="text-[14px] text-white/75 no-underline transition-colors duration-300 tracking-[0.3px] cursor-pointer hover:text-white">Contact</a>
        </nav>

        <a href="#" className="relative inline-flex items-center justify-center px-[30px] py-[14px] text-[12px] font-semibold tracking-[1.5px] uppercase text-[var(--neon)] bg-transparent no-underline border-[1.5px] border-[var(--neon)] rounded-[50%/80%] transition-colors duration-300 shrink-0 cursor-pointer hover:bg-[rgba(200,240,0,0.06)]">
          CONTACT US
        </a>
      </header>

      {/* ========== HERO ========== */}
      <section className="relative w-full h-[calc(100vh-90px)] min-h-[500px]">
        {/* Giant headline — CREATIVE (left, in front of figure) */}
        <h1 className="absolute left-[20px] md:left-[28px] lg:left-[80px] top-[10px] z-10 font-sans font-black text-[clamp(2.8rem,16vw,5rem)] md:text-[clamp(3.5rem,14vw,7rem)] lg:text-[clamp(4rem,9.5vw,11rem)] text-[var(--neon)] leading-[0.85] tracking-[-2px] lg:tracking-[-4px] uppercase select-none m-0 p-0">TRENVITY</h1>

        {/* Giant headline — AGENCY (right, behind figure) */}
        <span className="absolute right-[20px] md:right-[28px] lg:right-[100px] top-[clamp(4rem,18vw,7rem)] md:top-[clamp(5rem,16vw,10rem)] lg:top-[clamp(4rem,10vw,12rem)] z-[2] font-sans font-black text-[clamp(2.4rem,14vw,4.5rem)] md:text-[clamp(3rem,12vw,6rem)] lg:text-[clamp(3rem,8.5vw,10rem)] text-[var(--neon)] leading-[0.85] tracking-[-2px] lg:tracking-[-4px] uppercase select-none m-0 p-0" aria-hidden="true">AGENCY</span>

        {/* Description text */}
        <div className="absolute right-[20px] md:right-[28px] lg:left-[clamp(52vw,58vw,68vw)] top-[clamp(1rem,8vw,4rem)] md:top-[clamp(2rem,10vw,5rem)] lg:top-[clamp(0rem,3vw,6rem)] z-[15] max-w-[150px] md:max-w-[180px] lg:max-w-[240px]">
          <p className="text-[11px] lg:text-[13px] leading-[1.7] text-white/65 m-0">
            We are a creative studio working at the
            intersection of design, technology &amp; innovation.
          </p>
          <span className="font-['Dancing_Script',cursive] text-[24px] text-white/50 mt-[1px] block">Since 2016</span>
        </div>

        {/* Central hooded figure */}
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[clamp(420px,85vw,920px)] md:w-[clamp(420px,70vw,750px)] lg:w-[clamp(520px,58vw,920px)] h-[clamp(55vh,55vh,1080px)] md:h-[clamp(500px,65vh,850px)] lg:h-[clamp(700px,92vh,1080px)] bg-[url('/landing/trenvity-landing.png')] bg-contain bg-no-repeat bg-bottom z-20 pointer-events-none" aria-hidden="true" />

        {/* Social icons */}
        <div className="absolute left-[20px] md:left-[28px] lg:left-[48px] bottom-[30px] md:bottom-[40px] lg:bottom-[clamp(50px,8vh,100px)] z-[15] flex items-center gap-[8px] md:gap-[10px]">
          {/* Dribbble */}
          <div className="w-[36px] h-[36px] md:w-[42px] md:h-[42px] rounded-full border-[1.5px] border-white/25 inline-flex items-center justify-center text-white/55 transition-all duration-300 cursor-pointer bg-transparent p-0 hover:border-[var(--neon)] hover:text-[var(--neon)] hover:-translate-y-[2px]">
            <svg className="w-[14px] h-[14px] md:w-[17px] md:h-[17px] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.245.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" />
            </svg>
          </div>

          {/* Behance */}
          <div className="w-[36px] h-[36px] md:w-[42px] md:h-[42px] rounded-full border-[1.5px] border-white/25 inline-flex items-center justify-center text-white/55 transition-all duration-300 cursor-pointer bg-transparent p-0 hover:border-[var(--neon)] hover:text-[var(--neon)] hover:-translate-y-[2px]">
            <svg className="w-[14px] h-[14px] md:w-[17px] md:h-[17px] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.767-.63.165-1.27.25-1.93.25H1V4.51h5.938v-.007zM6.5 10.53c.6 0 1.08-.16 1.46-.49.38-.33.57-.79.57-1.38 0-.32-.05-.6-.17-.82a1.39 1.39 0 00-.46-.56 1.72 1.72 0 00-.66-.31 3.19 3.19 0 00-.81-.1H3.8v3.66h2.7zm.217 6.48c.313 0 .61-.03.88-.1.28-.07.52-.18.72-.33.21-.15.37-.35.48-.59.12-.24.18-.54.18-.9 0-.7-.2-1.22-.6-1.55-.4-.33-.92-.5-1.56-.5H3.8v3.97h2.917zM15.5 17.14c.46.44 1.12.66 1.98.66.62 0 1.15-.16 1.58-.47.44-.32.7-.65.78-.99h2.59c-.41 1.28-1.03 2.2-1.85 2.77-.83.57-1.83.85-3.01.85-.82 0-1.56-.13-2.22-.4a4.83 4.83 0 01-1.72-1.14 5.1 5.1 0 01-1.1-1.77c-.26-.69-.4-1.44-.4-2.27 0-.8.13-1.54.4-2.22a5.23 5.23 0 011.13-1.78 5.13 5.13 0 011.73-1.19 5.41 5.41 0 012.22-.44c.9 0 1.7.18 2.38.54.69.36 1.27.84 1.73 1.46.46.61.8 1.32 1 2.12.2.8.27 1.66.2 2.56h-7.73c.04.94.36 1.7.82 2.13zM18.76 11.34c-.36-.39-.97-.59-1.7-.59a2.8 2.8 0 00-1.12.2c-.32.14-.58.32-.78.55-.2.23-.34.47-.42.74-.08.26-.14.52-.15.77h5.04c-.08-.78-.36-1.28-.87-1.67zM15.1 5.65h5.35v1.39H15.1V5.65z" />
            </svg>
          </div>

          {/* Pinterest */}
          <div className="w-[36px] h-[36px] md:w-[42px] md:h-[42px] rounded-full border-[1.5px] border-white/25 inline-flex items-center justify-center text-white/55 transition-all duration-300 cursor-pointer bg-transparent p-0 hover:border-[var(--neon)] hover:text-[var(--neon)] hover:-translate-y-[2px]">
            <svg className="w-[14px] h-[14px] md:w-[17px] md:h-[17px] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
            </svg>
          </div>

          {/* Instagram */}
          <div className="w-[36px] h-[36px] md:w-[42px] md:h-[42px] rounded-full border-[1.5px] border-white/25 inline-flex items-center justify-center text-white/55 transition-all duration-300 cursor-pointer bg-transparent p-0 hover:border-[var(--neon)] hover:text-[var(--neon)] hover:-translate-y-[2px]">
            <svg className="w-[14px] h-[14px] md:w-[17px] md:h-[17px] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </div>

          {/* Twitter / X */}
          <div className="w-[36px] h-[36px] md:w-[42px] md:h-[42px] rounded-full border-[1.5px] border-white/25 inline-flex items-center justify-center text-white/55 transition-all duration-300 cursor-pointer bg-transparent p-0 hover:border-[var(--neon)] hover:text-[var(--neon)] hover:-translate-y-[2px]">
            <svg className="w-[14px] h-[14px] md:w-[17px] md:h-[17px] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </div>
        </div>
      </section>

      {/* ========== MARQUEE PARTNERS ========== */}
      <section className="relative w-full bg-[var(--neon)] py-3 md:py-[18px] border-y-2 border-black flex overflow-hidden whitespace-nowrap group">
        <div className="flex w-max items-center" style={{ animation: 'marquee 25s linear infinite' }}>
          {/* Set 1 */}
          <div className="flex items-center gap-[40px] md:gap-[60px] lg:gap-[80px] px-[20px] md:px-[30px] lg:px-[40px] text-black uppercase">
            <span className="font-bold text-[14px] md:text-[16px] tracking-[2px]">SONOS</span>
            <span className="font-medium text-[13px] md:text-[15px] tracking-[1.5px] opacity-80">RIMOWA</span>
            <span className="font-black text-[13px] md:text-[15px] tracking-[1px] border-b-[2px] border-black pb-[1px]">HIGHSNOBIETY</span>
            <span className="font-black text-[15px] md:text-[17px] tracking-[-0.5px]">HYEIN SEO</span>
            <span className="font-medium text-[14px] md:text-[16px] normal-case opacity-90">Haeckels</span>
            <span className="font-black text-[14px] md:text-[16px] tracking-[5px] md:tracking-[8px]">MISBHV</span>
            <span className="font-semibold text-[13px] md:text-[15px] tracking-[1.5px]">OK-RM</span>
            <span className="font-bold text-[13px] md:text-[15px] tracking-[1.5px]">ACRONYM®</span>
            <span className="font-medium text-[13px] md:text-[15px] tracking-[1.5px] opacity-80">Y/PROJECT</span>
          </div>
          {/* Set 2 (clone for infinite loop) */}
          <div className="flex items-center gap-[40px] md:gap-[60px] lg:gap-[80px] px-[20px] md:px-[30px] lg:px-[40px] text-black uppercase" aria-hidden="true">
            <span className="font-bold text-[14px] md:text-[16px] tracking-[2px]">SONOS</span>
            <span className="font-medium text-[13px] md:text-[15px] tracking-[1.5px] opacity-80">RIMOWA</span>
            <span className="font-black text-[13px] md:text-[15px] tracking-[1px] border-b-[2px] border-black pb-[1px]">HIGHSNOBIETY</span>
            <span className="font-black text-[15px] md:text-[17px] tracking-[-0.5px]">HYEIN SEO</span>
            <span className="font-medium text-[14px] md:text-[16px] normal-case opacity-90">Haeckels</span>
            <span className="font-black text-[14px] md:text-[16px] tracking-[5px] md:tracking-[8px]">MISBHV</span>
            <span className="font-semibold text-[13px] md:text-[15px] tracking-[1.5px]">OK-RM</span>
            <span className="font-bold text-[13px] md:text-[15px] tracking-[1.5px]">ACRONYM®</span>
            <span className="font-medium text-[13px] md:text-[15px] tracking-[1.5px] opacity-80">Y/PROJECT</span>
          </div>
        </div>
      </section>

      {/* ========== ABOUT US ========== */}
      <section className="relative w-full bg-[var(--background)] px-6 md:px-10 lg:px-16 py-10 md:py-14 lg:py-20">
        {/* Label */}
        <p className="text-center text-[var(--neon)] text-[11px] md:text-[12px] tracking-[1px] mb-5 md:mb-8">[About us]</p>

        {/* Large italic headline — staggered right alignment */}
        <div className="mb-8 md:mb-10 lg:mb-14">
          <h2 className="font-black italic uppercase text-[var(--neon)] leading-[1.05] tracking-[-1px] md:tracking-[-2px] text-[clamp(1.2rem,3.5vw,2.6rem)]">
            <span className="block">WE ARE A CREATIVE AGENCY CRAFTING STRATEGIES</span>
            <span className="block text-right">WITH REAL IMPACT FOR BUSINESSES</span>
            <span className="block text-right">AT EVERY STAGE OF THEIR JOURNEY</span>
          </h2>
        </div>

        {/* Content area: paragraphs + image stacked, aligned right */}
        <div className="flex flex-col items-end">
          {/* Text column */}
          <div className="max-w-[350px] lg:max-w-[320px] mb-8 lg:mb-0 mr-6 lg:mr-44">
            <p className="text-[11px] md:text-[12px] leading-[1.7] text-white/60 mb-4">
              Our mission is simple: deliver creative solutions that
              drive measurable results and elevate brands
              with purpose. We combine data-driven insights
              with bold creative to build campaigns that
              connect, engage, and convert.
            </p>
            <p className="text-[11px] md:text-[12px] leading-[1.7] text-white/60 mb-4">
              From startups to established enterprises,
              we partner with visionary brands to turn
              challenges into opportunities. Our approach
              is rooted in strategy, fueled by creativity,
              and built on a foundation of transparency
              and collaboration.
            </p>
            <p className="text-[13px] md:text-[14px] leading-[1.8] text-white/60 mb-8">
              Our team is made up of thinkers, creators, and
              innovators who are passionate about what
              we do and dedicated to your success. Let&apos;s
              create experiences that not only reach goals,
              but redefine what&apos;s possible.
            </p>
          </div>

          {/* Team image with neon border */}
          <div className="relative w-full max-w-[380px] lg:max-w-[340px]">
            <div className="border-[2px] border-[var(--neon)] overflow-hidden">
              <img
                src="/landing/trenvity-aboutr.png"
                alt="Our creative team"
                className="w-full h-auto object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========== 3D TEXT CUBE ========== */}
      <section className="relative w-full min-h-[60vh] flex justify-center items-center bg-[var(--background)] overflow-hidden py-10 md:py-20">
        <div className="cube-wrapper">
          <div className="cube" aria-hidden="true">
            <div className="cube-face face-top">
              <svg viewBox="0 0 400 400" className="w-full h-full overflow-visible">
                <text x="0" y="90" textLength="400" lengthAdjust="spacingAndGlyphs" fill="currentColor" fontWeight="900" fontSize="105" fontFamily="Inter, sans-serif">BELIEVE</text>
                <text x="0" y="190" textLength="400" lengthAdjust="spacingAndGlyphs" fill="currentColor" fontWeight="900" fontSize="105" fontFamily="Inter, sans-serif">WITHOUT</text>
                <text x="0" y="290" textLength="400" lengthAdjust="spacingAndGlyphs" fill="currentColor" fontWeight="900" fontSize="105" fontFamily="Inter, sans-serif">LIMITS IN</text>
                <text x="0" y="390" textLength="400" lengthAdjust="spacingAndGlyphs" fill="currentColor" fontWeight="900" fontSize="105" fontFamily="Inter, sans-serif">YOUR MIND</text>
              </svg>
            </div>
            <div className="cube-face face-left">
              <svg viewBox="0 0 400 400" className="w-full h-full overflow-visible">
                <text x="0" y="75" textLength="400" lengthAdjust="spacingAndGlyphs" fill="currentColor" fontWeight="900" fontSize="85" fontFamily="Inter, sans-serif">WITHOUT</text>
                <text x="0" y="155" textLength="400" lengthAdjust="spacingAndGlyphs" fill="currentColor" fontWeight="900" fontSize="85" fontFamily="Inter, sans-serif">YOUR SELF-</text>
                <text x="0" y="235" textLength="400" lengthAdjust="spacingAndGlyphs" fill="currentColor" fontWeight="900" fontSize="85" fontFamily="Inter, sans-serif">DISCIPLINE</text>
                <text x="0" y="315" textLength="400" lengthAdjust="spacingAndGlyphs" fill="currentColor" fontWeight="900" fontSize="85" fontFamily="Inter, sans-serif">SUCCESS IS</text>
                <text x="0" y="395" textLength="400" lengthAdjust="spacingAndGlyphs" fill="currentColor" fontWeight="900" fontSize="85" fontFamily="Inter, sans-serif">PERIOD</text>
              </svg>
            </div>
            <div className="cube-face face-right">
              <svg viewBox="0 0 400 400" className="w-full h-full overflow-visible">
                <text x="0" y="75" textLength="400" lengthAdjust="spacingAndGlyphs" fill="currentColor" fontWeight="900" fontSize="85" fontFamily="Inter, sans-serif">WITHOUT</text>
                <text x="0" y="155" textLength="400" lengthAdjust="spacingAndGlyphs" fill="currentColor" fontWeight="900" fontSize="85" fontFamily="Inter, sans-serif">YOUR SELF-</text>
                <text x="0" y="235" textLength="400" lengthAdjust="spacingAndGlyphs" fill="currentColor" fontWeight="900" fontSize="85" fontFamily="Inter, sans-serif">DISCIPLINE</text>
                <text x="0" y="315" textLength="400" lengthAdjust="spacingAndGlyphs" fill="currentColor" fontWeight="900" fontSize="85" fontFamily="Inter, sans-serif">SUCCESS IS</text>
                <text x="0" y="395" textLength="400" lengthAdjust="spacingAndGlyphs" fill="currentColor" fontWeight="900" fontSize="85" fontFamily="Inter, sans-serif">PERIOD</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SERVICES ========== */}
      <section className="relative w-full bg-[var(--background)] pt-12 md:pt-20">
        {/* Label */}
        <p className="text-center text-white/50 text-[11px] md:text-[12px] tracking-[1.5px] mb-8 md:mb-10">[services]</p>

        {/* Rows */}
        <div className="flex flex-col w-full text-center font-black uppercase text-[clamp(1.5rem,4.5vw,4.5rem)] leading-none tracking-[-1px] md:tracking-[-2px]">
          {/* Row 1 */}
          <div className="w-full bg-[var(--neon)] text-black py-3 md:py-5 lg:py-6">
            DIGITAL ADVERTISING
          </div>
          
          {/* Row 2 */}
          <div className="w-full bg-[#050505] text-[var(--neon)] py-3 md:py-5 lg:py-6">
            SOCIAL MEDIA
          </div>
          
          {/* Row 3 */}
          <div className="w-full bg-white text-black py-3 md:py-5 lg:py-6">
            CREATIVE CAMPAIGNS
          </div>
          
          {/* Row 4 with description */}
          <div className="w-full bg-[var(--neon)] text-black pt-3 md:pt-5 lg:pt-6 pb-10 md:pb-16 lg:pb-20 flex flex-col items-center">
            <div className="mb-8 md:mb-10">BRAND IDENTITY</div>
            
            <p className="max-w-[280px] md:max-w-[480px] lg:max-w-[600px] text-center text-[11px] md:text-[13px] font-medium leading-[1.6] text-black/80 mb-6 normal-case tracking-normal">
              From paid media strategy to high-impact creatives, we build digital
              marketing that gets results. Let&apos;s take your brand further, engage
              audiences to become through social media, responsive, and pixel-
              perfect content that converts.
            </p>
            
            <a href="#" className="text-[12px] md:text-[14px] font-bold text-black border-b-[2px] border-black pb-0.5 uppercase tracking-[1px] hover:opacity-70 transition-opacity">
              READ MORE &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* ========== PROCESS / HOW WE WORK ========== */}
      <section className="relative w-full bg-[var(--background)] px-6 md:px-10 lg:px-20 py-16 md:py-24 lg:py-32 overflow-hidden">
        {/* Decorative grid lines */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <p className="text-center text-[var(--neon)] text-[11px] md:text-[12px] tracking-[1.5px] mb-6 md:mb-10">[process]</p>

        <h2 className="text-center font-black italic uppercase text-[var(--neon)] text-[clamp(1.6rem,4vw,3.2rem)] leading-[1.05] tracking-[-1px] mb-16 md:mb-24">
          HOW WE BRING<br />YOUR VISION TO LIFE
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/5 max-w-[1200px] mx-auto">
          {/* Step 1 */}
          <div className="group relative bg-[var(--background)] p-8 md:p-10 transition-all duration-500 hover:bg-[var(--neon)]/5 cursor-default">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-[var(--neon)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            <span className="block text-[var(--neon)] text-[60px] md:text-[72px] font-black leading-none opacity-20 group-hover:opacity-40 transition-opacity duration-500">01</span>
            <h3 className="text-white font-bold text-[15px] md:text-[17px] uppercase tracking-[1px] mt-4 mb-3 group-hover:text-[var(--neon)] transition-colors duration-300">Discovery</h3>
            <p className="text-white/40 text-[11px] md:text-[12px] leading-[1.7] group-hover:text-white/60 transition-colors duration-300">
              Deep-dive into your brand, audience, and goals. We analyze the competitive landscape and uncover opportunities others miss.
            </p>
          </div>

          {/* Step 2 */}
          <div className="group relative bg-[var(--background)] p-8 md:p-10 transition-all duration-500 hover:bg-[var(--neon)]/5 cursor-default">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-[var(--neon)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            <span className="block text-[var(--neon)] text-[60px] md:text-[72px] font-black leading-none opacity-20 group-hover:opacity-40 transition-opacity duration-500">02</span>
            <h3 className="text-white font-bold text-[15px] md:text-[17px] uppercase tracking-[1px] mt-4 mb-3 group-hover:text-[var(--neon)] transition-colors duration-300">Strategy</h3>
            <p className="text-white/40 text-[11px] md:text-[12px] leading-[1.7] group-hover:text-white/60 transition-colors duration-300">
              Craft a data-backed roadmap tailored to your objectives. Every tactic is purposeful, every channel deliberate.
            </p>
          </div>

          {/* Step 3 */}
          <div className="group relative bg-[var(--background)] p-8 md:p-10 transition-all duration-500 hover:bg-[var(--neon)]/5 cursor-default">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-[var(--neon)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            <span className="block text-[var(--neon)] text-[60px] md:text-[72px] font-black leading-none opacity-20 group-hover:opacity-40 transition-opacity duration-500">03</span>
            <h3 className="text-white font-bold text-[15px] md:text-[17px] uppercase tracking-[1px] mt-4 mb-3 group-hover:text-[var(--neon)] transition-colors duration-300">Execution</h3>
            <p className="text-white/40 text-[11px] md:text-[12px] leading-[1.7] group-hover:text-white/60 transition-colors duration-300">
              Pixel-perfect design meets flawless implementation. We build campaigns that captivate and convert at scale.
            </p>
          </div>

          {/* Step 4 */}
          <div className="group relative bg-[var(--background)] p-8 md:p-10 transition-all duration-500 hover:bg-[var(--neon)]/5 cursor-default">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-[var(--neon)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            <span className="block text-[var(--neon)] text-[60px] md:text-[72px] font-black leading-none opacity-20 group-hover:opacity-40 transition-opacity duration-500">04</span>
            <h3 className="text-white font-bold text-[15px] md:text-[17px] uppercase tracking-[1px] mt-4 mb-3 group-hover:text-[var(--neon)] transition-colors duration-300">Optimize</h3>
            <p className="text-white/40 text-[11px] md:text-[12px] leading-[1.7] group-hover:text-white/60 transition-colors duration-300">
              Measure, learn, iterate. Real-time analytics drive continuous improvement so your ROI only grows.
            </p>
          </div>
        </div>
      </section>

      {/* ========== STATS / NUMBERS ========== */}
      <section className="relative w-full bg-[var(--background)] overflow-hidden">
        {/* Neon glow line */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--neon)] to-transparent opacity-40" />

        <div className="px-6 md:px-10 lg:px-20 py-16 md:py-24 lg:py-28">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 max-w-[1100px] mx-auto text-center">
            {/* Stat 1 */}
            <div className="group">
              <span className="block text-[var(--neon)] font-black text-[clamp(2.5rem,6vw,4.5rem)] leading-none tracking-[-2px]">150+</span>
              <span className="block text-white/30 text-[10px] md:text-[11px] uppercase tracking-[2px] mt-3 group-hover:text-white/60 transition-colors duration-300">Projects Delivered</span>
            </div>

            {/* Stat 2 */}
            <div className="group">
              <span className="block text-[var(--neon)] font-black text-[clamp(2.5rem,6vw,4.5rem)] leading-none tracking-[-2px]">98%</span>
              <span className="block text-white/30 text-[10px] md:text-[11px] uppercase tracking-[2px] mt-3 group-hover:text-white/60 transition-colors duration-300">Client Retention</span>
            </div>

            {/* Stat 3 */}
            <div className="group">
              <span className="block text-[var(--neon)] font-black text-[clamp(2.5rem,6vw,4.5rem)] leading-none tracking-[-2px]">8+</span>
              <span className="block text-white/30 text-[10px] md:text-[11px] uppercase tracking-[2px] mt-3 group-hover:text-white/60 transition-colors duration-300">Years of Experience</span>
            </div>

            {/* Stat 4 */}
            <div className="group">
              <span className="block text-[var(--neon)] font-black text-[clamp(2.5rem,6vw,4.5rem)] leading-none tracking-[-2px]">3X</span>
              <span className="block text-white/30 text-[10px] md:text-[11px] uppercase tracking-[2px] mt-3 group-hover:text-white/60 transition-colors duration-300">Average ROI Growth</span>
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--neon)] to-transparent opacity-40" />
      </section>

      {/* ========== TESTIMONIAL ========== */}
      <section className="relative w-full bg-[var(--background)] px-6 md:px-10 lg:px-20 py-16 md:py-24 lg:py-32 overflow-hidden">
        {/* Huge decorative quote */}
        <div className="absolute top-8 left-6 md:left-16 text-[var(--neon)] opacity-[0.04] text-[200px] md:text-[300px] font-black leading-none pointer-events-none select-none">&ldquo;</div>

        <p className="text-center text-[var(--neon)] text-[11px] md:text-[12px] tracking-[1.5px] mb-10 md:mb-16">[testimonials]</p>

        <div className="max-w-[800px] mx-auto text-center">
          <blockquote className="text-white/80 font-medium italic text-[clamp(1.1rem,2.5vw,1.8rem)] leading-[1.5] tracking-[-0.5px] mb-8">
            &ldquo;Trenvity didn&apos;t just build us a campaign — they redefined how we connect with our audience. The results spoke louder than any pitch deck ever could.&rdquo;
          </blockquote>

          <div className="flex items-center justify-center gap-4">
            <div className="w-[48px] h-[48px] rounded-full bg-[var(--neon)]/10 border border-[var(--neon)]/30 flex items-center justify-center text-[var(--neon)] font-bold text-[16px]">A</div>
            <div className="text-left">
              <p className="text-white text-[13px] font-semibold tracking-[0.5px]">Alex Morrison</p>
              <p className="text-white/30 text-[11px] tracking-[0.5px]">CEO, Vortex Digital</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CTA / CONTACT ========== */}
      <section className="relative w-full bg-[var(--background)] px-6 md:px-10 lg:px-20 py-20 md:py-32 lg:py-40 overflow-hidden">
        {/* Animated radial glow behind the CTA */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-[var(--neon)] opacity-[0.03] blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-[900px] mx-auto text-center">
          <p className="text-[var(--neon)] text-[11px] md:text-[12px] tracking-[1.5px] mb-6 md:mb-10">[let&apos;s talk]</p>

          <h2 className="font-black italic uppercase text-white text-[clamp(2rem,6vw,5rem)] leading-[0.95] tracking-[-2px] mb-6 md:mb-8">
            READY TO<br />
            <span className="text-[var(--neon)]">MAKE AN IMPACT?</span>
          </h2>

          <p className="text-white/40 text-[12px] md:text-[14px] leading-[1.7] max-w-[500px] mx-auto mb-10 md:mb-14">
            Whether you&apos;re launching something new or leveling up an existing brand, we&apos;re here to make it happen. Let&apos;s create something extraordinary together.
          </p>

          {/* CTA Button with animated border */}
          <a href="#" className="relative inline-flex items-center justify-center px-12 md:px-16 py-5 md:py-6 text-[13px] md:text-[15px] font-bold tracking-[2px] uppercase text-black bg-[var(--neon)] no-underline transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(200,240,0,0.3)]">
            START A PROJECT
          </a>

          <p className="text-white/20 text-[10px] md:text-[11px] tracking-[1px] mt-6 uppercase">No commitment required &middot; Free consultation</p>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="relative w-full bg-[var(--background)] border-t border-white/5">
        <div className="px-6 md:px-10 lg:px-20 py-12 md:py-16">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            {/* Brand */}
            <div>
              <span className="text-[var(--neon)] font-bold text-[16px] tracking-[2px] uppercase">TRENVITY</span>
              <p className="text-white/25 text-[11px] mt-2 tracking-[0.5px]">Creative agency for the bold.</p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-6 md:gap-10">
              <a href="#" className="text-white/40 text-[11px] md:text-[12px] uppercase tracking-[1px] hover:text-[var(--neon)] transition-colors duration-300">Cases</a>
              <a href="#" className="text-white/40 text-[11px] md:text-[12px] uppercase tracking-[1px] hover:text-[var(--neon)] transition-colors duration-300">Services</a>
              <a href="#" className="text-white/40 text-[11px] md:text-[12px] uppercase tracking-[1px] hover:text-[var(--neon)] transition-colors duration-300">About</a>
              <a href="#" className="text-white/40 text-[11px] md:text-[12px] uppercase tracking-[1px] hover:text-[var(--neon)] transition-colors duration-300">Blog</a>
              <a href="#" className="text-white/40 text-[11px] md:text-[12px] uppercase tracking-[1px] hover:text-[var(--neon)] transition-colors duration-300">Careers</a>
              <a href="#" className="text-white/40 text-[11px] md:text-[12px] uppercase tracking-[1px] hover:text-[var(--neon)] transition-colors duration-300">Contact</a>
            </div>

            {/* Socials */}
            <div className="flex gap-3">
              <div className="w-[34px] h-[34px] rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:border-[var(--neon)] hover:text-[var(--neon)] transition-all duration-300 cursor-pointer">
                <svg className="w-[13px] h-[13px] fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </div>
              <div className="w-[34px] h-[34px] rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:border-[var(--neon)] hover:text-[var(--neon)] transition-all duration-300 cursor-pointer">
                <svg className="w-[13px] h-[13px] fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </div>
              <div className="w-[34px] h-[34px] rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:border-[var(--neon)] hover:text-[var(--neon)] transition-all duration-300 cursor-pointer">
                <svg className="w-[13px] h-[13px] fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-white/15 text-[10px] tracking-[0.5px]">&copy; 2024 Trenvity. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-white/15 text-[10px] hover:text-white/40 transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/15 text-[10px] hover:text-white/40 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
