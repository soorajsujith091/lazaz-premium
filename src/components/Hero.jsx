import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

const backgrounds = [
  '/hero-new-bg.jpg',
  '/female-engineers-working.jpg'
];

export default function Hero() {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextBg = () => setCurrentBg((prev) => (prev + 1) % backgrounds.length);
  const prevBg = () => setCurrentBg((prev) => (prev === 0 ? backgrounds.length - 1 : prev - 1));

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden group"
      aria-label="Hero section"
    >
      {/* ── Background Images (Slider) ── */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentBg}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${backgrounds[currentBg]}')` }}
        />
      </AnimatePresence>

      {/* ── Slider Controls ── */}
      <button 
        onClick={prevBg}
        className="absolute left-4 sm:left-10 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-black/20 text-white/50 hover:bg-black/40 hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 backdrop-blur-sm"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>
      <button 
        onClick={nextBg}
        className="absolute right-4 sm:right-10 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-black/20 text-white/50 hover:bg-black/40 hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 backdrop-blur-sm"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      {/* ── Slider Indicators ── */}
      <div className="absolute bottom-32 sm:bottom-40 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {backgrounds.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentBg(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              currentBg === idx ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
      {/* ── Overlay Gradient ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-dark/90 via-primary-blue/80 to-blue-dark/90 mix-blend-multiply" />

      {/* ── Subtle teal accent gradient ── */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-secondary-teal/15" />

      {/* ── Geometric Grid Pattern ── */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* ── Pinwheel Watermark (Top Right) ── */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[700px] h-[700px] opacity-[0.05]">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 0C100 0 100 100 0 100C0 100 100 100 100 200C100 200 100 100 200 100C200 100 100 100 100 0Z" fill="white"/>
        </svg>
      </div>

      {/* ── Floating Orbs ── */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-teal-light/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-teal/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-white/80 text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-teal-light animate-pulse" />
          Trusted Across the Kingdom of Saudi Arabia
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-6"
        >
          Every Resource,
          <br />
          <span className="gradient-text">Everywhere.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-3xl mx-auto text-lg sm:text-xl text-white/75 leading-relaxed mb-10 font-medium"
        >
          Your trusted bridge between global resources and regional industry — serving
          Oil &amp; Gas, Construction, Infrastructure, and Utilities across the Kingdom
          of Saudi Arabia.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            id="hero-cta-quote"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-secondary-teal text-white font-bold text-lg rounded-xl hover:bg-teal-light transition-all duration-300 hover:shadow-2xl hover:shadow-teal-light/30 hover:-translate-y-1"
          >
            Request a Quote
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#products"
            id="hero-cta-products"
            className="group inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-bold text-lg rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300"
          >
            Explore Products
            <ChevronDown className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" />
          </a>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-white/40 text-sm font-medium"
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-teal-light/50" />
            ISO 9001 Certified
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-teal-light/50" />
            Aramco Approved
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-teal-light/50" />
            Saudi Vision 2030
          </div>
        </motion.div>
      </div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-white/60"
          />
        </div>
      </motion.div>
    </section>
  );
}
