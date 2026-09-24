import { useState } from 'react';
import { Phone, MapPin, Navigation, Check } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { businessInfo, treatments } from '@/data';

export default function Contact() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    (e.target as HTMLFormElement).reset();
  };

  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    '176 CCA, 3rd Floor, DHA Phase 6 CCA, Sector C, DHA Phase 6, Lahore, 54920, Pakistan'
  )}`;

  return (
    <section id="contact" className="section-padding py-24 lg:py-36 bg-ivory">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className={`flex items-center justify-center gap-3 reveal ${isVisible ? 'is-visible' : ''}`}>
            <span className="w-8 h-px bg-champagne" />
            <span className="eyebrow">Contact</span>
            <span className="w-8 h-px bg-champagne" />
          </div>
          <h2 className={`font-serif text-4xl md:text-5xl text-cocoa mt-6 leading-tight reveal reveal-delay-1 ${isVisible ? 'is-visible' : ''}`}>
            Visit Glow with Gull
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Location info */}
          <div className={`reveal reveal-delay-2 ${isVisible ? 'is-visible' : ''}`}>
            <div className="bg-nude/20 p-8 lg:p-10">
              <h3 className="font-serif text-2xl text-cocoa mb-6">Location</h3>
              <div className="flex gap-3 items-start mb-6">
                <MapPin className="w-5 h-5 text-champagne flex-shrink-0 mt-1" strokeWidth={1.5} />
                <address className="not-italic text-cocoa/70 leading-relaxed">
                  {businessInfo.addressLines.map((line, i) => (
                    <span key={i} className="block">{line}</span>
                  ))}
                </address>
              </div>

              <div className="flex gap-3 items-center mb-8">
                <Phone className="w-5 h-5 text-champagne flex-shrink-0" strokeWidth={1.5} />
                <a
                  href={`tel:${businessInfo.phone}`}
                  className="text-cocoa/70 hover:text-cocoa transition-colors duration-300"
                >
                  {businessInfo.phoneDisplay}
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a href={`tel:${businessInfo.phone}`} className="btn-primary !py-3">
                  <Phone className="w-4 h-4" /> Call Now
                </a>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary !py-3"
                >
                  <Navigation className="w-4 h-4" /> Get Directions
                </a>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-6 relative aspect-[16/10] bg-nude/30 overflow-hidden border border-cocoa/10">
              <div className="absolute inset-0 flex items-center justify-center text-cocoa/40">
                <div className="text-center">
                  <MapPin className="w-10 h-10 text-champagne mx-auto mb-3" strokeWidth={1} />
                  <p className="text-sm tracking-wide">DHA Phase 6, Lahore</p>
                  <p className="text-xs text-cocoa/40 mt-1">Map embed available on request</p>
                </div>
              </div>
              {/* Decorative grid pattern */}
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `linear-gradient(#302725 1px, transparent 1px), linear-gradient(90deg, #302725 1px, transparent 1px)`,
                  backgroundSize: '40px 40px',
                }}
              />
            </div>
          </div>

          {/* Right: Appointment form */}
          <div className={`reveal reveal-delay-3 ${isVisible ? 'is-visible' : ''}`}>
            <h3 className="font-serif text-2xl text-cocoa mb-2">Request an Appointment</h3>
            <p className="text-sm text-cocoa/50 mb-8">
              Fill out the form below and we will get back to you to confirm your
              appointment.
            </p>

            {submitted && (
              <div className="flex items-center gap-3 bg-sage/15 border border-sage/30 p-4 mb-6">
                <Check className="w-5 h-5 text-sage-dark flex-shrink-0" />
                <p className="text-sm text-cocoa">
                  Thank you. Your appointment request has been received. We will
                  contact you shortly.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-xs uppercase tracking-widest text-cocoa/60 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-transparent border-b border-cocoa/20 py-3 text-cocoa placeholder-cocoa/30 focus:border-champagne outline-none transition-colors duration-300"
                  placeholder="Your full name"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-xs uppercase tracking-widest text-cocoa/60 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full bg-transparent border-b border-cocoa/20 py-3 text-cocoa placeholder-cocoa/30 focus:border-champagne outline-none transition-colors duration-300"
                    placeholder="03XX XXXXXXX"
                  />
                </div>
                <div>
                  <label htmlFor="date" className="block text-xs uppercase tracking-widest text-cocoa/60 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    className="w-full bg-transparent border-b border-cocoa/20 py-3 text-cocoa placeholder-cocoa/30 focus:border-champagne outline-none transition-colors duration-300"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="time" className="block text-xs uppercase tracking-widest text-cocoa/60 mb-2">
                    Preferred Time
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    required
                    className="w-full bg-transparent border-b border-cocoa/20 py-3 text-cocoa placeholder-cocoa/30 focus:border-champagne outline-none transition-colors duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-xs uppercase tracking-widest text-cocoa/60 mb-2">
                    Treatment / Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full bg-transparent border-b border-cocoa/20 py-3 text-cocoa focus:border-champagne outline-none transition-colors duration-300"
                  >
                    <option value="">Select a treatment</option>
                    {treatments.map((t) => (
                      <option key={t.name} value={t.name}>{t.name}</option>
                    ))}
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-widest text-cocoa/60 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="w-full bg-transparent border-b border-cocoa/20 py-3 text-cocoa placeholder-cocoa/30 focus:border-champagne outline-none transition-colors duration-300 resize-none"
                  placeholder="Any specific concerns or requests"
                />
              </div>

              <button type="submit" className="btn-primary w-full mt-4">
                Request Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
