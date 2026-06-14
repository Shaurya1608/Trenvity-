'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function TextCube() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Rotate Y from 0 to 90 degrees as you scroll past
  const rotateY = useTransform(scrollYProgress, [0, 1], [-45, 135]);
  // Optional: tilt X slightly
  const rotateX = useTransform(scrollYProgress, [0, 1], [-25, -45]);

  return (
    <section ref={containerRef} className="relative w-full min-h-[60vh] flex justify-center items-center bg-[var(--background)] overflow-hidden py-10 md:py-20">
      <div className="cube-wrapper">
        <motion.div 
          className="cube" 
          style={{ rotateX, rotateY }}
          aria-hidden="true"
        >
          <div className="cube-face face-top">
            <svg viewBox="0 0 400 360" className="w-full h-full overflow-visible">
              <text x="0" y="100" textLength="400" lengthAdjust="spacingAndGlyphs" fill="currentColor" fontWeight="900" fontSize="100" fontFamily="Inter, sans-serif">WE DON'T</text>
              <text x="0" y="210" textLength="400" lengthAdjust="spacingAndGlyphs" fill="currentColor" fontWeight="900" fontSize="100" fontFamily="Inter, sans-serif">JUST POST.</text>
              <text x="0" y="320" textLength="400" lengthAdjust="spacingAndGlyphs" fill="currentColor" fontWeight="900" fontSize="100" fontFamily="Inter, sans-serif">WE GROW.</text>
            </svg>
          </div>
          <div className="cube-face face-left">
            <svg viewBox="0 0 400 400" className="w-full h-full overflow-visible">
              <text x="0" y="75" textLength="400" lengthAdjust="spacingAndGlyphs" fill="currentColor" fontWeight="900" fontSize="72" fontFamily="Inter, sans-serif">PERCEPTION</text>
              <text x="0" y="155" textLength="400" lengthAdjust="spacingAndGlyphs" fill="currentColor" fontWeight="900" fontSize="72" fontFamily="Inter, sans-serif">FIRST.</text>
              <text x="0" y="235" textLength="400" lengthAdjust="spacingAndGlyphs" fill="currentColor" fontWeight="900" fontSize="72" fontFamily="Inter, sans-serif">STRATEGY</text>
              <text x="0" y="315" textLength="400" lengthAdjust="spacingAndGlyphs" fill="currentColor" fontWeight="900" fontSize="72" fontFamily="Inter, sans-serif">ALWAYS.</text>
              <text x="0" y="395" textLength="400" lengthAdjust="spacingAndGlyphs" fill="currentColor" fontWeight="900" fontSize="60" fontFamily="Inter, sans-serif">RESULTS.</text>
            </svg>
          </div>
          <div className="cube-face face-right">
            <svg viewBox="0 0 400 400" className="w-full h-full overflow-visible">
              <text x="0" y="75" textLength="400" lengthAdjust="spacingAndGlyphs" fill="currentColor" fontWeight="900" fontSize="72" fontFamily="Inter, sans-serif">PERCEPTION</text>
              <text x="0" y="155" textLength="400" lengthAdjust="spacingAndGlyphs" fill="currentColor" fontWeight="900" fontSize="72" fontFamily="Inter, sans-serif">FIRST.</text>
              <text x="0" y="235" textLength="400" lengthAdjust="spacingAndGlyphs" fill="currentColor" fontWeight="900" fontSize="72" fontFamily="Inter, sans-serif">STRATEGY</text>
              <text x="0" y="315" textLength="400" lengthAdjust="spacingAndGlyphs" fill="currentColor" fontWeight="900" fontSize="72" fontFamily="Inter, sans-serif">ALWAYS.</text>
              <text x="0" y="395" textLength="400" lengthAdjust="spacingAndGlyphs" fill="currentColor" fontWeight="900" fontSize="60" fontFamily="Inter, sans-serif">RESULTS.</text>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
