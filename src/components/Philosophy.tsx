import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Philosophy() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative section-padding py-32 lg:py-48 bg-sage/15 overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-10 left-10 w-48 h-48 rounded-full border border-sage/20 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full border border-rose/15 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/3 right-20 w-24 h-24 rounded-full bg-rose/5 pointer-events-none" aria-hidden="true" />

      <div ref={ref} className="max-w-4xl mx-auto text-center relative z-10">
        <div className={`reveal ${isVisible ? 'is-visible' : ''}`}>
          <span className="eyebrow">Our Philosophy</span>
        </div>

        <blockquote className={`font-serif text-3xl md:text-4xl lg:text-5xl text-cocoa mt-8 leading-[1.3] italic reveal reveal-delay-1 ${isVisible ? 'is-visible' : ''}`}>
          &ldquo;Good skincare is a ritual, not a rush.&rdquo;
        </blockquote>

        <div className={`mt-10 w-16 h-px bg-champagne mx-auto reveal reveal-delay-2 ${isVisible ? 'is-visible' : ''}`} />

        <p className={`text-cocoa/60 mt-10 leading-relaxed max-w-2xl mx-auto text-lg reveal reveal-delay-3 ${isVisible ? 'is-visible' : ''}`}>
          At Glow with Gull, we approach skincare as a considered practice
          rather than a quick fix. We take the time to understand your skin,
          your routine, and what makes you feel confident. Our focus is on
          thoughtful, consistent care — the kind that supports healthy-looking
          skin and a genuine sense of wellbeing over time.
        </p>
      </div>
    </section>
  );
}
