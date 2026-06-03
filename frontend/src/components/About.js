export default function About() {
  return (
    <section className="relative w-full bg-[var(--background)] px-6 md:px-10 lg:px-16 py-10 md:py-14 lg:py-20">
      <p className="text-center text-[var(--neon)] text-[11px] md:text-[12px] tracking-[1px] mb-5 md:mb-8">[About us]</p>

      <div className="mb-8 md:mb-10 lg:mb-14">
        <h2 className="font-black italic uppercase text-[var(--neon)] leading-[1.05] tracking-[-1px] md:tracking-[-2px] text-[clamp(1.2rem,3.5vw,2.6rem)]">
          <span className="block">WE ARE A CREATIVE AGENCY CRAFTING STRATEGIES</span>
          <span className="block text-right">WITH REAL IMPACT FOR BUSINESSES</span>
          <span className="block text-right">AT EVERY STAGE OF THEIR JOURNEY</span>
        </h2>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-10 lg:gap-0 mt-8 md:mt-16">
        
        {/* Image on the left */}
        <div className="relative w-full max-w-[420px] lg:max-w-[500px] ml-0 md:ml-6 lg:ml-20">
          <div className="border-[2px] border-[var(--neon)] overflow-hidden shadow-[0_0_30px_rgba(156,190,36,0.15)]">
            <img
              src="/landing/trenvity-aboutr.png"
              alt="Our creative team"
              className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>

        {/* Text on the right */}
        <div className="max-w-[350px] lg:max-w-[380px] mr-0 md:mr-6 lg:mr-32">
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
      </div>
    </section>
  );
}
