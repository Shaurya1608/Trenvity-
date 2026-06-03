export default function TextCube() {
  return (
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
  );
}
