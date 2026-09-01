import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function PageHero({ title, subtitle, breadcrumbs = [], backgroundImage }) {
  return (
    <section className="relative min-h-[50vh] sm:min-h-[55vh] flex items-end overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${backgroundImage || '/hero-new-bg.jpg'}')` }}
      />

      {/* ── Bottom Fade / Overlay ── */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/30 sm:top-auto sm:bottom-0 sm:h-[75%] sm:from-black/85 sm:via-black/40 sm:to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full px-8 sm:px-14 lg:px-20 pb-12 sm:pb-16">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-1.5 text-white/50 text-sm mb-4"
            aria-label="Breadcrumb"
          >
            <Link to="/" className="hover:text-white/80 transition-colors">Home</Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5" />
                {crumb.href ? (
                  <Link to={crumb.href} className="hover:text-white/80 transition-colors">{crumb.label}</Link>
                ) : (
                  <span className="text-white/80">{crumb.label}</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] tracking-tight"
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-4 max-w-2xl text-white/60 text-base sm:text-lg leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
