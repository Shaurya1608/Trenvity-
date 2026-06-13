'use client';

import ExploreDocks from '@/components/ExploreDocks';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] pt-24 pb-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-20">
        
        {/* Left Column: Info & Links */}
        <div className="flex-1 flex flex-col">
          <h1 className="text-white font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-[-1px] leading-[1.1] mb-6">
            Let's build<br />something<br /><span className="text-[var(--neon)]">extraordinary.</span>
          </h1>
          <p className="text-white/60 text-sm md:text-base font-medium max-w-md mb-10 leading-relaxed">
            Whether you want to grow your brand, start social media, or run ads — we're ready. Fill out the form below or WhatsApp us directly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a 
              href="https://wa.me/919296090941" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] text-black font-bold uppercase tracking-[1px] text-xs px-6 py-4 rounded-none hover:bg-white transition-colors duration-300 w-full sm:w-auto"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.183-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.765-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/></svg>
              WhatsApp
            </a>
            <a 
              href="mailto:trenvity@gmail.com"
              className="flex items-center justify-center gap-3 border-[2px] border-[var(--neon)] text-[var(--neon)] font-bold uppercase tracking-[1px] text-xs px-6 py-4 rounded-none hover:bg-[var(--neon)] hover:text-black transition-colors duration-300 w-full sm:w-auto"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              Email Us
            </a>
          </div>

        </div>

        {/* Right Column: Clean Contact Form */}
        <div className="flex-1 bg-white/[0.02] border border-white/10 p-6 md:p-10">
          <h3 className="text-xl font-black text-white mb-2 uppercase tracking-wide">Send an Inquiry</h3>
          <p className="text-white/40 text-[11px] leading-relaxed mb-6 max-w-[420px]">
            Ready to grow your brand online? Fill out the form and we'll get back to you within 24 hours. Have a quick question? Just WhatsApp us directly — we're always available.
          </p>
          
          <form className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/50">Your Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="bg-black/30 border border-white/10 px-4 py-3 text-white placeholder:text-white/20 outline-none focus:border-[var(--neon)] transition-all text-sm rounded-none"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/50">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="bg-black/30 border border-white/10 px-4 py-3 text-white placeholder:text-white/20 outline-none focus:border-[var(--neon)] transition-all text-sm rounded-none"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold uppercase tracking-widest text-white/50">Services Needed</label>
              <select defaultValue="" className="bg-black/30 border border-white/10 px-4 py-3 text-white outline-none focus:border-[var(--neon)] transition-all appearance-none cursor-pointer text-sm rounded-none">
                <option value="" disabled className="text-black">Select a service...</option>
                <option value="social" className="text-black">Social Media Management</option>
                <option value="meta" className="text-black">Meta Ads</option>
                <option value="google" className="text-black">Google Ads</option>
                <option value="reels" className="text-black">Reels &amp; Content</option>
                <option value="branding" className="text-black">Branding</option>
                <option value="website" className="text-black">Website Design</option>
                <option value="full" className="text-black">Full Package</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold uppercase tracking-widest text-white/50">Project Details</label>
              <textarea 
                rows="4"
                placeholder="Tell us about your goals..."
                className="bg-black/30 border border-white/10 px-4 py-3 text-white placeholder:text-white/20 outline-none focus:border-[var(--neon)] transition-all resize-none text-sm rounded-none"
              ></textarea>
            </div>

            <button 
              type="button"
              className="mt-2 bg-white text-black font-black uppercase tracking-[1.5px] text-xs py-3.5 px-8 hover:bg-[var(--neon)] transition-colors duration-300 w-full rounded-none"
            >
              Submit
            </button>
          </form>
        </div>

      </div>

      <ExploreDocks />
    </main>
  );
}
