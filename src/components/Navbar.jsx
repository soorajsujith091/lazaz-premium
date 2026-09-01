import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT US', href: '/about' },
  { label: 'SERVICES', href: '/services' },
  { label: 'PROJECTS', href: '/projects' },
  { label: 'WORK WITH US', href: '/work-with-us' },
  { label: 'GALLERY', href: '/gallery' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

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

  const isActive = (href) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
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
      <nav className="px-8 sm:px-14 lg:px-20 font-sans" aria-label="Main navigation">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group" aria-label="Lazaz Premium - Home">
            <img
              src="/logo-Photoroom.png"
              alt="Lazaz Premium Company Ltd"
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium tracking-wide uppercase transition-all duration-300 ${
                  isActive(link.href)
                    ? isScrolled
                      ? 'text-primary-blue'
                      : 'text-white'
                    : isScrolled
                      ? 'text-text-dark hover:text-primary-blue hover:bg-primary-blue/5'
                      : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 bg-[#FBD232] text-black text-sm font-semibold rounded hover:bg-[#e5c02b] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              CONTACT US
              <ArrowUpRight className="w-4 h-4" />
            </Link>

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
          <div className="px-8 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={handleLinkClick}
                className={`block px-4 py-3 rounded-lg font-medium uppercase transition-all duration-200 ${
                  isActive(link.href)
                    ? 'text-primary-blue bg-primary-blue/5'
                    : 'text-text-dark hover:bg-primary-blue/5 hover:text-primary-blue'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={handleLinkClick}
              className="flex items-center justify-center gap-2 px-4 py-3 mt-2 bg-[#FBD232] text-black font-semibold rounded text-center hover:bg-[#e5c02b] transition-all duration-200"
            >
              CONTACT US
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
