import { motion } from 'framer-motion';
import { ShieldCheck, HeartPulse, Leaf } from 'lucide-react';

const certifications = [
  {
    icon: ShieldCheck,
    code: 'ISO 9001:2015',
    label: 'Quality Management',
    description: 'Certified quality management systems ensuring consistent excellence.',
  },
  {
    icon: HeartPulse,
    code: 'ISO 45001:2018',
    label: 'Health & Safety',
    description: 'Occupational health and safety management for workforce protection.',
  },
  {
    icon: Leaf,
    code: 'ISO 14001:2015',
    label: 'Environmental Management',
    description: 'Environmental responsibility integrated into every operation.',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: 'easeOut' },
  }),
};

export default function ISOCertifications() {
  return (
    <section
      id="certifications"
      className="relative py-16 sm:py-20 bg-gradient-to-br from-blue-dark via-primary-blue to-blue-dark overflow-hidden"
      aria-labelledby="iso-heading"
    >
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.h2
            custom={0}
            variants={fadeInUp}
            id="iso-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white"
          >
            Internationally Certified
          </motion.h2>
          <motion.p
            custom={1}
            variants={fadeInUp}
            className="mt-3 text-white/60 text-lg"
          >
            Committed to the highest standards of quality, safety, and sustainability.
          </motion.p>
        </motion.div>

        {/* Certification Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-3 gap-6"
        >
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <motion.div
                key={cert.code}
                custom={index + 2}
                variants={fadeInUp}
                className="group glass rounded-2xl p-6 sm:p-8 text-center hover:bg-white/12 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-teal-light/20 group-hover:scale-110 transition-all duration-300">
                  <IconComponent className="w-8 h-8 text-teal-light" strokeWidth={1.5} />
                </div>
                <div className="text-xl font-bold text-white mb-1">{cert.code}</div>
                <div className="text-teal-light font-semibold text-sm mb-3">{cert.label}</div>
                <p className="text-white/50 text-sm leading-relaxed">{cert.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
