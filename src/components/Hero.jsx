import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

const backgrounds = [
  '/hero-new-bg.jpg',
  '/industrial-construction-site.jpg'
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
      className="relative min-h-screen flex items-end overflow-hidden group"
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

      {/* ── Bottom Fade / Overlay ── */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/20 sm:top-auto sm:bottom-0 sm:h-[70%] sm:from-black/80 sm:via-black/40 sm:to-transparent pointer-events-none" />

      {/* ── Content (Bottom Positioned — Two Column on Desktop) ── */}
      <div className="relative z-10 w-full px-8 sm:px-14 lg:px-20 pb-14 sm:pb-16 lg:pb-20">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-16">

          {/* Left Column — Heading */}
          <div className="flex-shrink-0 lg:max-w-[55%]">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold text-white leading-[1.08] tracking-tight"
        >
              Every resource,{' '}
              <br className="hidden sm:block" />
              delivered with{' '}
              <br className="hidden sm:block" />
              precision.
            </motion.h1>
          </div>

          {/* Right Column — Description + Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="lg:max-w-sm lg:pb-2"
          >
            <p className="text-white/60 text-sm sm:text-[15px] leading-relaxed font-normal mb-6">
              We connect global suppliers with Saudi Arabia's leading industries — from Oil &amp; Gas 
              and Construction to Infrastructure and Utilities. Every material sourced, every project 
              supported, crafted to deliver <span className="text-white/90 font-medium">reliability, quality,</span> and <span className="text-white/90 font-medium">unmatched precision.</span>
            </p>

            <div className="flex items-center gap-5">
              <a
                href="#contact"
                id="hero-cta-quote"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 border border-white/40 text-white text-sm font-medium rounded-full hover:bg-white hover:text-black transition-all duration-400 backdrop-blur-sm"
              >
                Begin your journey
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Scroll caret */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="hidden sm:block text-white/40"
              >
                <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
                  <path d="M6 0v16m0 0l-5-5m5 5l5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* ── Slider Indicators ── */}
        <div className="absolute bottom-14 sm:bottom-16 lg:bottom-20 right-5 sm:right-8 lg:right-10 flex gap-2 z-20">
          {backgrounds.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentBg(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full ${
                currentBg === idx 
                  ? 'w-6 h-2 bg-white' 
                  : 'w-2 h-2 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
