import { useScrollReveal } from '@/hooks/useScrollReveal';
import { aboutImage } from '@/data';

export default function About() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative section-padding py-24 lg:py-36 overflow-hidden">
      {/* Decorative oversized number */}
      <span
        className="absolute top-12 right-6 lg:right-20 font-serif text-[12rem] lg:text-[20rem] text-cocoa/[0.04] leading-none select-none pointer-events-none"
        aria-hidden="true"
      >
        01
      </span>

      <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
        {/* Left: Image */}
        <div
          className={`zoom-img relative reveal ${isVisible ? 'is-visible' : ''}`}
        >
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src={aboutImage}
              alt="Woman enjoying a soothing facial mask wrapped in a towel under warm light"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          {/* Decorative frame accent */}
          <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-champagne/30 -z-10" />
        </div>

        {/* Right: Content */}
        <div>
          <div className={`reveal reveal-delay-1 ${isVisible ? 'is-visible' : ''}`}>
            <div className="flex items-center gap-3">
              <span className="w-10 h-px bg-champagne" />
              <span className="eyebrow">The Glow with Gull Experience</span>
            </div>
          </div>

          <h2 className={`font-serif text-4xl md:text-5xl text-cocoa mt-6 leading-tight reveal reveal-delay-2 ${isVisible ? 'is-visible' : ''}`}>
            Beautiful skin begins with thoughtful care.
          </h2>

          <div className={`mt-8 space-y-5 text-cocoa/70 leading-relaxed reveal reveal-delay-3 ${isVisible ? 'is-visible' : ''}`}>
            <p>
              At Glow with Gull, we believe that caring for your skin is a
              personal and considered experience. Located in DHA Phase 6,
              Lahore, our skincare-focused beauty space is designed to help
              you feel calm, welcomed, and genuinely cared for.
            </p>
            <p>
              Every visit is centered around your individual needs — whether
              you are seeking a moment of relaxation, a refreshed appearance,
              or a thoughtful approach to your ongoing skincare routine. We
              focus on skin confidence, personal care, and a beauty philosophy
              that values wellness over haste.
            </p>
          </div>

          <div className={`mt-10 flex items-center gap-4 reveal reveal-delay-4 ${isVisible ? 'is-visible' : ''}`}>
            <a href="#treatments" className="btn-secondary">Explore Treatments</a>
          </div>
        </div>
      </div>
    </section>
  );
}
