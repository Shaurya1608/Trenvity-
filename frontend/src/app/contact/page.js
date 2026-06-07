'use client';

import { motion } from 'framer-motion';
import ExploreDocks from '@/components/ExploreDocks';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] p-3 md:p-6">
      {/* The thick neon border framing the page */}
      <div className="w-full min-h-[calc(100vh-1.5rem)] md:min-h-[calc(100vh-3rem)] rounded-none border-[6px] md:border-[12px] border-[var(--neon)] flex flex-col relative overflow-hidden bg-[var(--background)]">
        
        {/* Main "CONTACT" Text Block */}
        <div className="flex flex-col relative z-10 pt-20 md:pt-28">
           
           {/* The huge stretched text */}
           <h1 className="font-sans font-black uppercase text-[var(--neon)] text-[clamp(4rem,15vw,13rem)] leading-[0.8] tracking-[-2px] md:tracking-[-6px] text-center w-full select-none relative z-10">
             CONTACT
           </h1>

           {/* Neon Info Bar */}
           <div className="w-full bg-[var(--neon)] text-[#0A1118] grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 px-5 md:px-10 py-4 md:py-6 relative z-20 mt-1">
             <div>
               <h3 className="font-bold text-[12px] md:text-[13px] mb-0.5">New project:</h3>
               <a href="mailto:sales@trenvity.com" className="text-[11px] md:text-[12px] hover:underline font-medium">sales@trenvity.com</a>
             </div>
             <div>
               <h3 className="font-bold text-[12px] md:text-[13px] mb-0.5">Support:</h3>
               <a href="mailto:support@trenvity.com" className="text-[11px] md:text-[12px] hover:underline font-medium">support@trenvity.com</a>
             </div>
             <div className="col-span-2 md:col-span-1">
               <h3 className="font-bold text-[12px] md:text-[13px] mb-0.5">Location:</h3>
               <p className="text-[11px] md:text-[12px] leading-tight font-medium">123 Creative Street<br/>Tech Hub District<br/>United Kingdom</p>
             </div>
             <div>
               <h3 className="font-bold text-[12px] md:text-[13px] mb-0.5">General:</h3>
               <a href="mailto:info@trenvity.com" className="text-[11px] md:text-[12px] hover:underline font-medium">info@trenvity.com</a>
             </div>
             <div>
               <h3 className="font-bold text-[12px] md:text-[13px] mb-0.5">Call us:</h3>
               <a href="tel:+441234567890" className="text-[11px] md:text-[12px] hover:underline font-medium">+44 123 456 7890</a>
             </div>
           </div>
        </div>

        {/* Inquiries Section */}
        <div className="px-5 md:px-10 lg:px-16 mt-10 md:mt-16 mb-8 flex flex-col md:flex-row items-start md:items-stretch gap-8 md:gap-12">
           
           {/* Huge Arrow */}
           <div className="flex-1 w-full md:w-auto flex items-center pt-2 md:pt-8">
             <div className="w-full h-[5px] md:h-[8px] bg-[var(--neon)] relative">
               {/* Arrow head */}
               <div className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 md:w-10 md:h-10 border-t-[5px] border-r-[5px] md:border-t-[8px] md:border-r-[8px] border-[var(--neon)] rotate-45 translate-x-[2px] md:translate-x-[4px]" />
             </div>
           </div>

           {/* Inquiries Text */}
           <div className="flex-1 md:max-w-[600px] text-[var(--neon)]">
             <h2 className="font-sans font-black uppercase text-[clamp(2.5rem,5vw,4rem)] leading-[0.9] tracking-[-1px] mb-5">
               INQUIRIES
             </h2>
             <p className="font-bold text-[13px] md:text-[15px] leading-[1.3] uppercase mb-5 max-w-[500px]">
               TRENVITY IS AN AWARD-WINNING AGENCY, SPECIALISED IN CREATIVE DESIGN, DEVELOPMENT AND STRATEGY.
             </p>
             <p className="text-[11px] md:text-[13px] leading-[1.6] opacity-80 mb-7 max-w-[460px]">
               If you're ready to build a scalable, data-driven digital presence, fill out an inquiry form. Still need some advice, or another opinion to sound out some ideas? Just drop us a line.
             </p>

             <div className="flex flex-col sm:flex-row gap-3">
               <button className="bg-[var(--neon)] text-[#0A1118] font-black text-[11px] tracking-[1px] px-6 py-2.5 uppercase hover:bg-white transition-colors duration-300 w-fit">
                 Project Inquiry
               </button>
               <button className="border-[2px] border-[var(--neon)] text-[var(--neon)] font-black text-[11px] tracking-[1px] px-6 py-2.5 uppercase hover:bg-[var(--neon)] hover:text-[#0A1118] transition-colors duration-300 w-fit">
                 Working at Trenvity
               </button>
             </div>
           </div>

        </div>

      </div>
      <ExploreDocks />
    </main>
  );
}
