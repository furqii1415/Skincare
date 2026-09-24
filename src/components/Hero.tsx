import { ArrowRight, MapPin } from 'lucide-react';
import { businessInfo, heroImage } from '@/data';

export default function Hero() {
  const scrollTo = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 lg:pt-0">
      <div className="grid lg:grid-cols-2 min-h-screen w-full">
        {/* Left: Text */}
        <div className="flex items-center justify-center px-6 md:px-12 lg:px-20 xl:px-28 py-16 lg:py-0 order-2 lg:order-1">
          <div className="max-w-xl">
            <div
              className="flex items-center gap-3 opacity-0"
              style={{ animation: 'fadeUp 0.8s ease-out 0.2s forwards' }}
            >
              <span className="w-10 h-px bg-champagne" />
              <span className="eyebrow">Skin • Beauty • Wellness</span>
            </div>

            <h1
              className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.05] text-cocoa mt-6 opacity-0"
              style={{ animation: 'slideUp 1s ease-out 0.4s forwards' }}
            >
              Your Skin.
              <br />
              Your Glow.
              <br />
              <span className="text-rose">Your Confidence.</span>
            </h1>

            <p
              className="text-base md:text-lg text-cocoa/70 leading-relaxed mt-8 max-w-md opacity-0"
              style={{ animation: 'fadeUp 0.9s ease-out 0.7s forwards' }}
            >
              A refined skincare experience designed to help you care for your
              skin with confidence and intention.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 mt-10 opacity-0"
              style={{ animation: 'fadeUp 0.9s ease-out 1s forwards' }}
            >
              <a href="#contact" onClick={scrollTo('#contact')} className="btn-primary">
                Book Your Appointment
              </a>
              <a href="#treatments" onClick={scrollTo('#treatments')} className="btn-secondary">
                Explore Treatments
              </a>
            </div>

            <div
              className="flex items-center gap-2 mt-10 text-cocoa/50 opacity-0"
              style={{ animation: 'fadeUp 0.9s ease-out 1.2s forwards' }}
            >
              <MapPin className="w-4 h-4 text-champagne" />
              <span className="text-sm tracking-wide">{businessInfo.addressShort}</span>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative overflow-hidden order-1 lg:order-2 h-[40vh] lg:h-screen">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-0 hero-img-zoom"
            style={{
              backgroundImage: `url(${heroImage})`,
              animation: 'fadeIn 1.5s ease-out 0.3s forwards, slowZoom 20s ease-out 0.3s forwards',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cocoa/10 via-transparent to-cocoa/20" />

          {/* Decorative element */}
          <div
            className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12 opacity-0"
            style={{ animation: 'fadeIn 1s ease-out 1.5s forwards' }}
          >
            <div className="flex items-center gap-3 text-ivory/80">
              <ArrowRight className="w-4 h-4" />
              <span className="text-xs uppercase tracking-ultra-wide">Scroll</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
