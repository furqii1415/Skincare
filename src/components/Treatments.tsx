import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { treatments } from '@/data';

export default function Treatments() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="treatments" className="section-padding py-24 lg:py-36 bg-ivory">
      <div ref={ref} className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className={`flex items-center justify-center gap-3 reveal ${isVisible ? 'is-visible' : ''}`}>
            <span className="w-8 h-px bg-champagne" />
            <span className="eyebrow">Our Treatments</span>
            <span className="w-8 h-px bg-champagne" />
          </div>
          <h2 className={`font-serif text-4xl md:text-5xl text-cocoa mt-6 leading-tight reveal reveal-delay-1 ${isVisible ? 'is-visible' : ''}`}>
            Treatments Designed for Your Skin
          </h2>
          <p className={`text-cocoa/60 mt-6 leading-relaxed reveal reveal-delay-2 ${isVisible ? 'is-visible' : ''}`}>
            Explore a thoughtful range of skincare and beauty experiences
            designed around your individual needs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {treatments.map((treatment, i) => (
            <div
              key={treatment.name}
              className={`group cursor-pointer reveal reveal-delay-${i + 1} ${isVisible ? 'is-visible' : ''}`}
            >
              <div className="zoom-img relative aspect-[3/4] overflow-hidden">
                <img
                  src={treatment.image}
                  alt={treatment.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-cocoa/0 group-hover:bg-cocoa/25 transition-all duration-500" />
                {/* Accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-px bg-champagne group-hover:w-full transition-all duration-500" />
              </div>

              <div className="mt-5">
                <h3 className="font-serif text-2xl text-cocoa group-hover:text-rose transition-colors duration-300">
                  {treatment.name}
                </h3>
                <p className="text-sm text-cocoa/60 mt-2 leading-relaxed">
                  {treatment.description}
                </p>
                <div className="flex items-center gap-2 mt-4 text-cocoa/70 group-hover:text-champagne transition-colors duration-300">
                  <span className="text-xs uppercase tracking-widest">Explore Treatment</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
