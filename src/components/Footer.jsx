import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const quickLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

// Inline SVGs for social icons since lucide-react doesn't include brand icons
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const socialLinks = [
  { icon: LinkedInIcon, href: '#', label: 'LinkedIn' },
  { icon: XIcon, href: '#', label: 'X (Twitter)' },
  { icon: InstagramIcon, href: '#', label: 'Instagram' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-blue-dark text-white overflow-hidden" aria-label="Footer">
      {/* Top gradient line */}
      <div className="h-1 bg-gradient-to-r from-primary-blue via-secondary-teal to-primary-blue" />

      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link to="/" className="inline-block mb-5">
              <img
                src="/logo-Photoroom.png"
                alt="Lazaz Premium Company Ltd"
                className="h-14 w-auto rounded-lg bg-white/90 px-2 py-1"
              />
            </Link>
            <p className="text-2xl font-bold text-white/90 mb-4">
              Every Resource, <span className="text-teal-light">Everywhere.</span>
            </p>
            <p className="text-white/40 text-sm leading-relaxed max-w-md">
              Your trusted bridge between global resources and regional industry — serving
              Oil &amp; Gas, Construction, Infrastructure, and Utilities across the Kingdom
              of Saudi Arabia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white/60 uppercase tracking-wider mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="group flex items-center gap-1.5 text-white/50 hover:text-teal-light transition-colors duration-300 text-sm font-medium"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold text-white/60 uppercase tracking-wider mb-5">Contact</h3>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-white/50 leading-relaxed">
                  Building #2927, King Faisal Road,<br />
                  At Tubayshi District, Dammam 32233,<br />
                  Kingdom of Saudi Arabia
                </p>
              </div>
              <div>
                <span className="text-white/30 text-xs font-semibold uppercase tracking-wider">CR Number</span>
                <p className="text-white/60 font-medium mt-0.5">7052382889</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-lg bg-white/5 hover:bg-teal-light/20 flex items-center justify-center text-white/50 hover:text-teal-light transition-all duration-300 hover:scale-110"
                  >
                    <IconComponent />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.06] py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            Copyright {currentYear} &copy; Lazaz Premium Company Ltd | Made with ❤️ Creatox Designs
          </p>
          <p className="text-white/20 text-xs">
            Every Resource, Everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
}
