import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { galleryImages } from '@/data';

export default function Gallery() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="section-padding py-24 lg:py-36 bg-ivory">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className={`flex items-center justify-center gap-3 reveal ${isVisible ? 'is-visible' : ''}`}>
            <span className="w-8 h-px bg-champagne" />
            <span className="eyebrow">Gallery</span>
            <span className="w-8 h-px bg-champagne" />
          </div>
          <h2 className={`font-serif text-4xl md:text-5xl text-cocoa mt-6 leading-tight reveal reveal-delay-1 ${isVisible ? 'is-visible' : ''}`}>
            A Glimpse Inside
          </h2>
          <p className={`text-cocoa/60 mt-6 leading-relaxed reveal reveal-delay-2 ${isVisible ? 'is-visible' : ''}`}>
            Skincare, beauty, and the calm of our space — a visual journey.
          </p>
        </div>

        {/* Asymmetric editorial grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 auto-rows-[200px] lg:auto-rows-[280px]">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden zoom-img reveal reveal-delay-${Math.min(i + 1, 5)} ${img.span} ${isVisible ? 'is-visible' : ''}`}
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-cocoa/0 group-hover:bg-cocoa/20 transition-all duration-500 flex items-center justify-center">
                <ArrowRight className="w-6 h-6 text-ivory opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
