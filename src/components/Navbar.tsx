import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { businessInfo, navLinks } from '@/data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-ivory/90 backdrop-blur-md shadow-[0_1px_20px_rgba(48,39,37,0.06)]'
            : 'bg-transparent'
        }`}
      >
        <nav className="section-padding flex items-center justify-between h-20 lg:h-24">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className={`font-serif text-xl lg:text-2xl tracking-wide transition-colors duration-500 ${
              scrolled ? 'text-cocoa' : 'text-cocoa'
            }`}
          >
            {businessInfo.name.toUpperCase()}
          </a>

          <ul className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="nav-link"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn-primary !py-3 !px-7"
            >
              Book Appointment
            </a>
          </div>

          <button
            className="lg:hidden flex flex-col items-center justify-center w-10 h-10 -mr-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className="sr-only">Menu</span>
            <div className="relative w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-px bg-cocoa transition-all duration-300 ${
                  menuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block h-px bg-cocoa transition-all duration-300 ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-px bg-cocoa transition-all duration-300 ${
                  menuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-ivory"
          onClick={() => setMenuOpen(false)}
        />
        <div className="relative flex flex-col items-center justify-center h-full gap-8 pt-20">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`font-serif text-3xl text-cocoa transition-all duration-500 ${
                menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: menuOpen ? `${i * 80 + 100}ms` : '0ms' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className={`btn-primary mt-4 transition-all duration-500 ${
              menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: menuOpen ? `${navLinks.length * 80 + 100}ms` : '0ms' }}
          >
            Book Appointment
          </a>
          <a
            href={`tel:${businessInfo.phone}`}
            className={`flex items-center gap-2 text-cocoa/70 mt-2 transition-all duration-500 ${
              menuOpen ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: menuOpen ? `${navLinks.length * 80 + 200}ms` : '0ms' }}
          >
            <Phone className="w-4 h-4" />
            <span className="text-sm tracking-wide">{businessInfo.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </>
  );
}
