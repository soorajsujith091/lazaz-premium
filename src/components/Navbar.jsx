import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Clients', href: '#clients' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-primary-blue/5 border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group" aria-label="Lazaz Premium - Home">
            <img
              src="/logo.png"
              alt="Lazaz Premium Company Ltd"
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 ${
                  isScrolled
                    ? 'text-text-dark hover:text-primary-blue hover:bg-primary-blue/5'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 bg-secondary-teal text-white text-sm font-bold rounded-lg hover:bg-teal-light transition-all duration-300 hover:shadow-lg hover:shadow-secondary-teal/25 hover:-translate-y-0.5"
            >
              Request a Quote
              <ChevronRight className="w-4 h-4" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              id="mobile-menu-toggle"
              className="lg:hidden p-2 rounded-lg transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? 'text-text-dark' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? 'text-text-dark' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/98 backdrop-blur-xl border-t border-gray-100 shadow-xl">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="block px-4 py-3 rounded-lg text-text-dark font-semibold hover:bg-primary-blue/5 hover:text-primary-blue transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="block px-4 py-3 mt-2 bg-secondary-teal text-white font-bold rounded-lg text-center hover:bg-teal-light transition-all duration-200"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
