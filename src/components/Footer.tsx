import { Phone, MapPin } from 'lucide-react';
import { businessInfo, navLinks } from '@/data';

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-cocoa text-ivory">
      <div className="section-padding py-16 lg:py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl tracking-wide">
              {businessInfo.name.toUpperCase()}
            </h3>
            <p className="text-ivory/50 mt-4 leading-relaxed max-w-xs text-sm">
              A refined skincare and beauty experience in DHA Phase 6, Lahore.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <span className="w-8 h-px bg-champagne" />
              <span className="text-xs uppercase tracking-ultra-wide text-champagne/70">Skin • Beauty • Wellness</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-champagne mb-6">Navigate</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-ivory/60 hover:text-ivory transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-champagne mb-6">Contact</h4>
            <div className="space-y-4">
              <a
                href={`tel:${businessInfo.phone}`}
                className="flex items-center gap-3 text-ivory/60 hover:text-ivory transition-colors duration-300"
              >
                <Phone className="w-4 h-4 text-champagne" strokeWidth={1.5} />
                <span className="text-sm">{businessInfo.phoneDisplay}</span>
              </a>
              <div className="flex items-start gap-3 text-ivory/60">
                <MapPin className="w-4 h-4 text-champagne flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <address className="not-italic text-sm leading-relaxed">
                  {businessInfo.addressLines.map((line, i) => (
                    <span key={i} className="block">{line}</span>
                  ))}
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-ivory/10">
        <div className="section-padding py-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-ivory/40 text-xs tracking-wide">
              © {businessInfo.year} {businessInfo.name}. All rights reserved.
            </p>
            <p className="text-ivory/40 text-xs tracking-wide">
              DHA Phase 6 • Lahore • Pakistan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
