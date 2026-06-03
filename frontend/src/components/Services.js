'use client';

import { motion } from 'framer-motion';
import Reveal from '@/components/Reveal';

const services = [
  {
    id: 'S/1',
    title: 'AUDITING',
    description:
      'Our team will perform a full audit on your smart contract to ensure all security measures have been carried out efficiently and effectively before launch. We will then break down any issues we may find into a written report, which we will then review in depth with your team.',
  },
  {
    id: 'S/2',
    title: 'CONTRACT BUILD',
    description:
      'If you\'re starting a project, finding developers you can trust and have a proven track record can be very difficult. Our team has worked extremely hard since we opened our doors to become the premier brand we are today. Feel free to touch base with us and see for yourself why so many choose Web Three.',
  },
  {
    id: 'S/3',
    title: 'EMERGENCY REBUILD',
    description:
      'If for any reason we do find a high risk issue in the contract close to your launch, we can assess the situation and offer a full rebuild in a timely manner. We have saved several projects from their mints failing, and it\'s a service we have become very well known for in the nft community.',
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
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12 flex justify-center pb-10 md:pb-16 border-b border-white/20">
        <Reveal>
          <div className="flex items-start gap-4">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[var(--neon)] mt-2 md:mt-4 w-5 h-5 md:w-8 md:h-8"
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
      </div>

      {/* ─── Grid Section ─── */}
      <div className="max-w-[1440px] mx-auto border-b border-white/20">
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
              className={`p-6 md:p-8 lg:p-12 flex flex-col ${
                index !== services.length - 1 ? 'lg:border-r border-white/20 border-b lg:border-b-0' : ''
              }`}
            >
              {/* Badge */}
              <div className="mb-6 md:mb-10">
                <div className="inline-flex items-center justify-center border-2 border-[var(--neon)] rounded-full px-4 py-1.5 text-[var(--neon)] font-mono font-bold text-[14px]">
                  {service.id}
                </div>
              </div>

              {/* Title */}
              <h3 className="font-sans font-black uppercase text-[clamp(2rem,4vw,2.5rem)] leading-[0.9] tracking-[-1px] mb-4 md:mb-6">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-white/50 text-[13px] md:text-[14px] leading-[1.7] font-medium max-w-[360px]">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
