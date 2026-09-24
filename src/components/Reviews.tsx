import { Star } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { businessInfo } from '@/data';

export default function Reviews() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  const fullStars = Math.floor(businessInfo.rating);
  const hasHalf = businessInfo.rating % 1 >= 0.5;

  return (
    <section id="reviews" className="section-padding py-24 lg:py-36 bg-ivory">
      <div ref={ref} className="max-w-4xl mx-auto text-center">
        <div className={`flex items-center justify-center gap-3 reveal ${isVisible ? 'is-visible' : ''}`}>
          <span className="w-8 h-px bg-champagne" />
          <span className="eyebrow">Reviews</span>
          <span className="w-8 h-px bg-champagne" />
        </div>

        <h2 className={`font-serif text-4xl md:text-5xl text-cocoa mt-6 leading-tight reveal reveal-delay-1 ${isVisible ? 'is-visible' : ''}`}>
          What Our Clients Say
        </h2>

        <div className={`mt-12 reveal reveal-delay-2 ${isVisible ? 'is-visible' : ''}`}>
          {/* Rating display */}
          <div className="flex items-center justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => {
              const isFull = i < fullStars;
              const isHalf = i === fullStars && hasHalf;
              return (
                <div key={i} className="relative">
                  <Star className="w-8 h-8 text-cocoa/15" strokeWidth={1.5} />
                  {(isFull || isHalf) && (
                    <div className="absolute inset-0 overflow-hidden" style={{ width: isHalf ? '50%' : '100%' }}>
                      <Star className="w-8 h-8 text-champagne fill-champagne" strokeWidth={1.5} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <p className="font-serif text-6xl md:text-7xl text-cocoa mt-8">
            {businessInfo.rating}
            <span className="text-3xl text-cocoa/40"> / 5</span>
          </p>

          <p className="text-cocoa/60 mt-4 text-lg">
            Based on {businessInfo.reviewCount} reviews
          </p>
        </div>

        <div className={`mt-12 w-16 h-px bg-champagne mx-auto reveal reveal-delay-3 ${isVisible ? 'is-visible' : ''}`} />

        <p className={`text-cocoa/50 mt-10 max-w-xl mx-auto leading-relaxed reveal reveal-delay-4 ${isVisible ? 'is-visible' : ''}`}>
          We are grateful for every client who has trusted us with their
          skincare journey. Your experiences and feedback help us continue
          to refine and improve every visit.
        </p>

        <div className={`mt-10 reveal reveal-delay-5 ${isVisible ? 'is-visible' : ''}`}>
          <a href="#contact" className="btn-secondary">Book Your Visit</a>
        </div>
      </div>
    </section>
  );
}
