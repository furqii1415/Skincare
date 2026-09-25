import { ArrowRight, MapPin } from 'lucide-react';
import { businessInfo, heroImage } from '@/data';

export default function Hero() {
  const scrollTo = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Full-width Hero Image */}
      <div
        className="absolute inset-0 bg-cover bg-center hero-img-zoom"
        style={{
          backgroundImage: `url(${heroImage})`,
          animation:
            'fadeIn 1.5s ease-out 0.3s forwards, slowZoom 20s ease-out 0.3s forwards',
        }}
      />

      {/* Subtle overlay for readable text */}
      <div className="absolute inset-0 bg-cocoa/20" />

      {/* Hero Content */}
      <div className="relative z-10 min-h-screen flex items-center px-6 md:px-12 lg:px-20 xl:px-28">
        <div className="max-w-2xl text-ivory">

          <div
            className="flex items-center gap-3 opacity-0"
            style={{ animation: 'fadeUp 0.8s ease-out 0.2s forwards' }}
          >
            <span className="w-10 h-px bg-champagne" />
            <span className="eyebrow">Skin • Beauty • Wellness</span>
          </div>

          <h1
            className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.05] mt-6 opacity-0"
            style={{ animation: 'slideUp 1s ease-out 0.4s forwards' }}
          >
            Your Skin.
            <br />
            Your Glow.
            <br />
            <span className="text-champagne">Your Confidence.</span>
          </h1>

          <p
            className="text-base md:text-lg text-ivory/80 leading-relaxed mt-8 max-w-md opacity-0"
            style={{ animation: 'fadeUp 0.9s ease-out 0.7s forwards' }}
          >
            A refined skincare experience designed to help you care for your
            skin with confidence and intention.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 mt-10 opacity-0"
            style={{ animation: 'fadeUp 0.9s ease-out 1s forwards' }}
          >
            <a
              href="#contact"
              onClick={scrollTo('#contact')}
              className="btn-primary"
            >
              Book Your Appointment
            </a>

            <a
              href="#treatments"
              onClick={scrollTo('#treatments')}
              className="btn-secondary"
            >
              Explore Treatments
            </a>
          </div>

          <div
            className="flex items-center gap-2 mt-10 text-ivory/70 opacity-0"
            style={{ animation: 'fadeUp 0.9s ease-out 1.2s forwards' }}
          >
            <MapPin className="w-4 h-4 text-champagne" />
            <span className="text-sm tracking-wide">
              {businessInfo.addressShort}
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12 opacity-0"
        style={{ animation: 'fadeIn 1s ease-out 1.5s forwards' }}
      >
        <div className="flex items-center gap-3 text-ivory/80">
          <ArrowRight className="w-4 h-4" />
          <span className="text-xs uppercase tracking-ultra-wide">
            Scroll
          </span>
        </div>
      </div>
    </section>
  );
}

