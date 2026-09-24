import { Heart, Leaf, Sparkles } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { experienceImage } from '@/data';

const features = [
  {
    icon: Heart,
    title: 'Personal Care',
    description: 'Thoughtful attention centered around your individual skincare needs.',
  },
  {
    icon: Leaf,
    title: 'Refined Experience',
    description: 'A calm and polished environment designed around your comfort.',
  },
  {
    icon: Sparkles,
    title: 'Natural Confidence',
    description: 'A beauty philosophy focused on helping you feel confident in your own skin.',
  },
];

export default function FeaturedExperience() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="experience" className="section-padding py-24 lg:py-36 bg-nude/30 overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image with overlapping content */}
          <div className={`relative reveal ${isVisible ? 'is-visible' : ''}`}>
            <div className="zoom-img aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
              <img
                src={experienceImage}
                alt="Serene spa treatment room with elegant decor and equipment"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Overlapping card */}
            <div className="absolute -bottom-8 -right-4 lg:-right-8 bg-ivory p-8 lg:p-10 shadow-[0_8px_40px_rgba(48,39,37,0.12)] max-w-xs">
              <p className="font-serif text-3xl lg:text-4xl text-cocoa leading-tight">
                More Than<br />Skincare
              </p>
              <p className="text-sm text-cocoa/60 mt-3 leading-relaxed">
                A calm space to pause, care for yourself, and make time for your skin.
              </p>
            </div>
          </div>

          {/* Right: Features */}
          <div className="lg:pl-8 mt-16 lg:mt-0">
            <div className={`reveal reveal-delay-1 ${isVisible ? 'is-visible' : ''}`}>
              <div className="flex items-center gap-3">
                <span className="w-10 h-px bg-champagne" />
                <span className="eyebrow">The Experience</span>
              </div>
            </div>
            <h2 className={`font-serif text-4xl md:text-5xl text-cocoa mt-6 leading-tight reveal reveal-delay-2 ${isVisible ? 'is-visible' : ''}`}>
              More Than Skincare
            </h2>
            <p className={`text-cocoa/60 mt-6 leading-relaxed max-w-md reveal reveal-delay-3 ${isVisible ? 'is-visible' : ''}`}>
              A calm space to pause, care for yourself, and make time for your skin.
            </p>

            <div className="mt-12 space-y-10">
              {features.map((feature, i) => (
                <div
                  key={feature.title}
                  className={`flex gap-5 reveal reveal-delay-${i + 3} ${isVisible ? 'is-visible' : ''}`}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 border border-champagne/40 flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-champagne" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-cocoa">{feature.title}</h3>
                    <p className="text-sm text-cocoa/60 mt-1 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
