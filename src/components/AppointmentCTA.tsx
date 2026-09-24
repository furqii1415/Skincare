import { Phone } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { businessInfo, appointmentBgImage } from '@/data';

export default function AppointmentCTA() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative section-padding py-32 lg:py-48 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={appointmentBgImage}
          alt="Calming facial massage promoting wellness and relaxation"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-cocoa/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-cocoa/80 to-cocoa/50" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-12 left-12 w-20 h-20 border border-champagne/20 rounded-full animate-float pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-16 right-16 w-14 h-14 border border-rose/20 rounded-full animate-float-delayed pointer-events-none" aria-hidden="true" />

      <div ref={ref} className="relative z-10 max-w-3xl mx-auto text-center text-ivory">
        <div className={`reveal ${isVisible ? 'is-visible' : ''}`}>
          <span className="eyebrow text-champagne">Begin Your Journey</span>
        </div>
        <h2 className={`font-serif text-4xl md:text-5xl lg:text-6xl text-ivory mt-6 leading-tight reveal reveal-delay-1 ${isVisible ? 'is-visible' : ''}`}>
          Your Glow Starts Here.
        </h2>
        <p className={`text-ivory/70 mt-6 leading-relaxed text-lg reveal reveal-delay-2 ${isVisible ? 'is-visible' : ''}`}>
          Make time for yourself and discover a more thoughtful skincare
          experience.
        </p>
        <div className={`flex flex-col sm:flex-row gap-4 justify-center mt-10 reveal reveal-delay-3 ${isVisible ? 'is-visible' : ''}`}>
          <a href="#contact" className="btn-gold">Book Your Appointment</a>
          <a
            href={`tel:${businessInfo.phone}`}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-ivory/30 text-ivory text-sm uppercase tracking-widest font-medium transition-all duration-500 hover:border-ivory hover:bg-ivory hover:text-cocoa hover:-translate-y-0.5"
          >
            <Phone className="w-4 h-4" />
            Call {businessInfo.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
