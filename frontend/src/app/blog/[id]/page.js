'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';

const allArticles = [
  {
    id: '01',
    category: 'Search & SEO',
    readTime: '4 min read',
    date: 'June 2, 2026',
    title: 'Unraveling the 2026 Core Algorithm Shift',
    description: 'Search engines have restructured how organic citations are handled. Discover how real-time brand citations, active social media mentions, and semantic authority loops completely bypass traditional backlink models.',
    content: [
      'The search landscape has undergone a seismic transformation in 2026. Google\'s latest core algorithm update has fundamentally changed how websites earn organic visibility. Traditional backlink models — once the gold standard for SEO — are now secondary to what the industry calls "semantic authority loops."',
      'So what exactly has changed? In short, search engines now prioritize real-time brand citations over static link profiles. This means that a mention of your brand on a relevant podcast, a tweet from an industry leader, or a reference in a niche newsletter carries more weight than a guest post backlink from a DA-60 site.',
      'Active social media mentions are also playing a larger role. The algorithm now tracks brand sentiment across platforms like X, LinkedIn, and even Reddit. Positive, organic mentions — not paid promotions — signal to search engines that your brand has genuine authority and relevance.',
      'The implications for SEO strategy are massive. Teams need to shift from link-building campaigns to brand-building campaigns. This means investing in PR, thought leadership, community engagement, and content that people genuinely want to share and reference.',
      'Early adopters of this strategy are already seeing 40-60% increases in organic traffic within 90 days. The key is to focus on creating content that generates real conversations, not just clicks.',
    ],
  },
  {
    id: '02',
    category: 'Design & UX',
    readTime: '6 min read',
    date: 'May 28, 2026',
    title: 'Brutalist Web Aesthetics: Converting Ambitious Audiences',
    description: 'Why do flat, generic layouts fail to convert high-value clients? Analyze the psychology behind massive, high-contrast condensed typography, layered Z-depth masks, and aggressive micro-animations.',
    content: [
      'In a sea of cookie-cutter SaaS websites with the same pastel gradients and rounded corners, brutalist design stands out like a thunderclap. But brutalism isn\'t just about being different — it\'s about psychological impact.',
      'High-contrast condensed typography triggers a primal response. Large, bold text commands attention and conveys confidence. When a potential client lands on a page with 120px uppercase headlines, the subconscious message is clear: this brand means business.',
      'Layered Z-depth masks create a sense of dimension and sophistication. By stacking elements at different visual planes, you create an interface that feels alive and three-dimensional. This depth invites exploration and increases time-on-page — a critical metric for conversion.',
      'Aggressive micro-animations are the secret weapon. Subtle hover effects, scroll-triggered reveals, and kinetic typography create a sense of craftsmanship that premium clients expect. When every element responds to interaction, users feel like they\'re engaging with something carefully built — which builds trust.',
      'Our data shows that brutalist redesigns for B2B service pages increase conversion rates by 25-35% among enterprise clients. The reason is simple: ambitious audiences want to work with brands that take creative risks, not brands that play it safe.',
      'The key is balancing aggression with usability. Every bold design choice must serve the user journey. Typography should be scannable, animations should guide attention, and the overall flow should lead naturally to conversion points.',
    ],
  },
  {
    id: '03',
    category: 'Engineering',
    readTime: '5 min read',
    date: 'May 20, 2026',
    title: 'Headless Content Pipelines: Bypassing Legacy Caches',
    description: 'WordPress is static bloat. Explore how decoupled React structures connected to direct database content engines result in immediate sub-millisecond response rates around the globe.',
    content: [
      'The traditional CMS model is dying, and WordPress is leading the funeral procession. Monolithic architectures where the frontend and backend are tightly coupled create performance bottlenecks that no amount of caching can solve.',
      'Headless content pipelines decouple the content layer from the presentation layer. Your content lives in a structured database — think Sanity, Contentful, or a custom PostgreSQL setup — and your React frontend fetches exactly what it needs, when it needs it.',
      'The performance gains are staggering. Traditional WordPress sites serve entire HTML documents, complete with unused CSS, JavaScript, and database queries for sidebar widgets nobody clicks. A headless setup serves pure JSON data that React hydrates into interactive components in milliseconds.',
      'Sub-millisecond response rates aren\'t marketing hyperbole — they\'re achievable with edge computing. By deploying your API to edge nodes worldwide (Cloudflare Workers, Vercel Edge Functions), your content is served from the data center closest to each user.',
      'The development workflow also improves dramatically. Content teams can publish and preview changes in real-time without waiting for build processes. Developers can iterate on the frontend without touching the content infrastructure. Everyone moves faster.',
    ],
  },
  {
    id: '04',
    category: 'Search & SEO',
    readTime: '7 min read',
    date: 'May 15, 2026',
    title: 'Zero-Click Searches and the AI Revolution',
    description: 'As AI overviews dominate search results, the traditional click-through model is dying. Learn how to optimize for AI aggregation and secure brand presence in zero-click environments.',
    content: [
      'Over 65% of Google searches now end without a click. AI Overviews, featured snippets, and knowledge panels are answering user queries directly on the search results page. For marketers, this represents an existential shift.',
      'The traditional SEO playbook — rank on page one, earn clicks, convert on-site — is becoming obsolete. If Google\'s AI can summarize your content and present it to users without them ever visiting your site, what\'s the point of ranking?',
      'The answer lies in brand presence, not click-through rates. In a zero-click world, your goal is to be the source that AI systems cite. When Google\'s AI Overview references your brand by name, that\'s more valuable than a traditional organic click because it comes with implicit endorsement.',
      'To optimize for AI aggregation, you need to structure your content for machine consumption. This means using clear, definitive statements, structured data markup, and authoritative sourcing. AI systems prefer content that makes definitive claims backed by data, not vague opinion pieces.',
      'Schema markup is more important than ever. FAQ schema, HowTo schema, and Article schema help AI systems understand and cite your content correctly. Sites with comprehensive schema implementation are 3x more likely to be featured in AI Overviews.',
      'The brands that thrive in the zero-click era will be those that embrace their role as information sources rather than traffic destinations. Build authority, get cited, and let the brand recognition drive business — even if users never click through to your site.',
      'This is a fundamental mindset shift, but early adopters are already seeing massive gains in brand awareness and inbound leads, even as traditional organic traffic plateaus.',
    ],
  },
  {
    id: '05',
    category: 'Design & UX',
    readTime: '4 min read',
    date: 'May 10, 2026',
    title: 'The Return of Skeuomorphism in Dark Mode',
    description: 'Glassmorphism is evolving. We explore how subtle 3D textures, realistic lighting, and tactile feedback in dark mode interfaces are increasing user engagement times by 40%.',
    content: [
      'Flat design had its decade. Glassmorphism had its moment. Now, a new aesthetic is emerging that combines the best of both worlds: neo-skeuomorphism in dark mode environments.',
      'Unlike the heavy-handed skeuomorphism of iOS 6 — with its leather textures and felt green tables — the 2026 iteration is subtle and sophisticated. Think soft inner shadows that make buttons feel pressable, gentle gradients that suggest curvature, and micro-textures that add tactile richness without visual clutter.',
      'Dark mode is the perfect canvas for this approach. On dark backgrounds, subtle 3D effects pop without overwhelming the eye. A card with a slight bevel and inner glow feels premium and interactive. A toggle switch with realistic depth invites interaction.',
      'The data backs this up. Our A/B tests across 12 client projects show that neo-skeuomorphic dark mode interfaces increase average session duration by 40% compared to flat alternatives. Users spend more time exploring because the interface rewards interaction with visual feedback.',
    ],
  },
];

export default function BlogDetailPage() {
  const params = useParams();
  const article = allArticles.find((a) => a.id === params.id);

  if (!article) {
    return (
      <div className="relative w-full min-h-screen bg-[var(--background)] text-[var(--foreground)] overflow-hidden selection:bg-[var(--neon)] selection:text-black">
        <Header />
        <section className="relative w-full pt-40 pb-32 px-6 md:px-12 lg:px-20 text-center min-h-[70vh] flex flex-col items-center justify-center">
          <h1 className="text-5xl font-black uppercase tracking-tighter mb-4">Article Not Found</h1>
          <p className="text-[var(--light-text)] mb-8">The article you're looking for doesn't exist.</p>
          <Link href="/blog" className="px-6 py-3 bg-[var(--neon)] text-black font-bold text-sm uppercase tracking-wider rounded-full hover:scale-105 transition-transform">
            Back to Blog
          </Link>
        </section>
        <Footer />
      </div>
    );
  }

  const relatedArticles = allArticles.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <div className="relative w-full min-h-screen bg-[var(--background)] text-[var(--foreground)] overflow-hidden selection:bg-[var(--neon)] selection:text-black">
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[var(--neon)]/10 blur-[120px] pointer-events-none" />

      <Header />

      {/* Hero / Article Header */}
      <section className="relative w-full pt-32 pb-16 px-6 md:px-12 lg:px-20 bg-[var(--background)]">
        <div className="max-w-[800px] mx-auto w-full">
          <Reveal>
            <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/50 hover:text-[var(--neon)] transition-colors mb-8 group">
              <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Back to Blog
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[10px] font-bold uppercase tracking-[2px] font-mono text-[var(--neon)]">
                {article.category}
              </span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span className="text-[10px] text-white/40 uppercase tracking-[1px] font-mono">
                {article.readTime}
              </span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span className="text-[10px] text-white/40 uppercase tracking-[1px] font-mono">
                {article.date}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-tight mb-6">
              {article.title}
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-[var(--light-text)] text-base md:text-lg leading-relaxed border-l-2 border-[var(--neon)] pl-5">
              {article.description}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[800px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="border-t border-white/5" />
      </div>

      {/* Article Content */}
      <section className="relative w-full py-16 px-6 md:px-12 lg:px-20 bg-[var(--background)]">
        <div className="max-w-[800px] mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {article.content.map((paragraph, idx) => (
              <p key={idx} className="text-[var(--light-text)] text-base leading-[1.85] tracking-[0.2px]">
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="relative w-full py-16 lg:py-20 px-6 md:px-12 lg:px-20 bg-[var(--secondary-bg)] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto w-full">
          <Reveal>
            <h2 className="text-xl md:text-2xl font-extrabold uppercase tracking-tight mb-10">
              <span className="text-[var(--neon)]">More</span> Articles
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((related) => (
              <Link key={related.id} href={`/blog/${related.id}`} className="block group">
                <div className="p-5 rounded-2xl bg-[var(--background)] border border-white/5 group-hover:border-[var(--neon)]/30 transition-all duration-300">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-[1.5px] font-mono text-[var(--neon)]">
                      {related.category}
                    </span>
                    <span className="text-[10px] text-white/40 font-mono">
                      {related.readTime}
                    </span>
                  </div>
                  <h3 className="text-sm font-extrabold uppercase tracking-tight text-white group-hover:text-[var(--neon)] transition-colors leading-snug">
                    {related.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative w-full py-16 px-6 md:px-12 lg:px-20 border-t border-white/5 bg-[var(--background)]">
        <div className="max-w-[600px] mx-auto w-full text-center">
          <Reveal>
            <h2 className="text-2xl md:text-4xl font-black tracking-tighter uppercase mb-4">
              Want us to write <span className="text-[var(--neon)]">yours?</span>
            </h2>
            <p className="text-[var(--light-text)] text-sm mb-8">
              Let our team build a content strategy that dominates search and drives real growth.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-[var(--neon)] text-black font-bold text-sm tracking-wider uppercase rounded-full hover:scale-105 hover:shadow-[0_0_30px_rgba(155,206,36,0.3)] transition-all duration-300"
            >
              Start a Project
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
