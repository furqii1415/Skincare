import { useScrollReveal } from '@/hooks/useScrollReveal';
import { businessInfo } from '@/data';

const points = [
  {
    num: '01',
    title: 'Personalized Attention',
    description: 'Carefully considered around individual needs.',
  },
  {
    num: '02',
    title: 'Calm Experience',
    description: 'A refined environment designed to feel comfortable and welcoming.',
  },
  {
    num: '03',
    title: 'Beauty & Wellness',
    description: 'A holistic approach to feeling good in your skin.',
  },
  {
    num: '04',
    title: 'Convenient Location',
    description: `Located in ${businessInfo.addressShort}.`,
  },
];

export default function WhyChoose() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="section-padding py-24 lg:py-36 bg-cocoa text-ivory">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className={`flex items-center justify-center gap-3 reveal ${isVisible ? 'is-visible' : ''}`}>
            <span className="w-8 h-px bg-champagne" />
            <span className="eyebrow text-champagne">Why Glow with Gull</span>
            <span className="w-8 h-px bg-champagne" />
          </div>
          <h2 className={`font-serif text-4xl md:text-5xl text-ivory mt-6 leading-tight reveal reveal-delay-1 ${isVisible ? 'is-visible' : ''}`}>
            A More Thoughtful Approach to Beauty
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {points.map((point, i) => (
            <div
              key={point.num}
              className={`border-t border-ivory/15 pt-8 reveal reveal-delay-${i + 1} ${isVisible ? 'is-visible' : ''}`}
            >
              <span className="font-serif text-5xl text-champagne/60 block mb-4">{point.num}</span>
              <h3 className="font-serif text-2xl text-ivory">{point.title}</h3>
              <p className="text-sm text-ivory/60 mt-3 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
