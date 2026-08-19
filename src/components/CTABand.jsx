import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTABand() {
  return (
    <section className="relative py-20 sm:py-24 overflow-hidden" aria-label="Call to action">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/oil-gas-facility.png')" }}
      />
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-dark/95 via-primary-blue/90 to-primary-blue/95 mix-blend-multiply" />

      {/* Teal accent */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-secondary-teal/10" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Pinwheel watermark */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 w-[500px] h-[500px] opacity-[0.04]">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 0C100 0 100 100 0 100C0 100 100 100 100 200C100 200 100 100 200 100C200 100 100 100 100 0Z" fill="white"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
            Ready to Build Something
            <span className="gradient-text"> Extraordinary?</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Get in touch with us for quotations, technical assistance, or partnership inquiries.
          </p>
          <a
            href="#contact"
            id="cta-band-button"
            className="group inline-flex items-center gap-3 px-10 py-4 bg-secondary-teal text-white font-bold text-lg rounded-xl hover:bg-teal-light transition-all duration-300 hover:shadow-2xl hover:shadow-teal-light/30 hover:-translate-y-1"
          >
            Request a Quote
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
