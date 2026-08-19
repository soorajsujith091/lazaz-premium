import { motion } from 'framer-motion';
import { Globe, ShieldCheck, Settings, Heart, Earth, Landmark, Lock } from 'lucide-react';

const features = [
  {
    icon: Globe,
    title: 'Strategic Global Sourcing',
    description:
      'We eliminate the boundaries of the traditional supply chain, giving you a single point of access to world-class manufacturers.',
    accent: 'primary-blue',
  },
  {
    icon: ShieldCheck,
    title: 'Local Expertise & Technical Compliance',
    description:
      "Every product meets the rigorous standards of the Kingdom's major sectors, including Aramco, SABIC, and Saudi Vision 2030 requirements.",
    accent: 'secondary-teal',
  },
  {
    icon: Settings,
    title: 'End-to-End Turnkey Reliability',
    description:
      'From design and material selection to installation, testing, and commissioning, we manage logistics, quality, and execution.',
    accent: 'primary-blue',
  },
];

const values = [
  { label: 'Integrity', icon: Heart },
  { label: 'Global Reach', icon: Earth },
  { label: 'Saudi Strength', icon: Landmark },
  { label: 'Reliability', icon: Lock },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function WhyUs() {
  return (
    <section id="why-us" className="relative py-20 sm:py-28 bg-bg-neutral overflow-hidden" aria-labelledby="whyus-heading">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-blue/[0.02] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-16"
        >
          <motion.span
            custom={0}
            variants={fadeInUp}
            className="inline-block px-4 py-1.5 bg-primary-blue/5 text-primary-blue text-sm font-bold rounded-full tracking-wider uppercase mb-4"
          >
            Our Advantage
          </motion.span>
          <motion.h2
            custom={1}
            variants={fadeInUp}
            id="whyus-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-dark leading-tight mb-4"
          >
            Why Choose Lazaz Premium
          </motion.h2>
          <motion.p
            custom={2}
            variants={fadeInUp}
            className="max-w-2xl mx-auto text-text-muted text-lg"
          >
            A partner that delivers quality, compliance, and end-to-end reliability.
          </motion.p>
        </motion.div>

        {/* Global Sourcing Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="rounded-2xl overflow-hidden shadow-xl mb-16 h-64 sm:h-80 w-full max-w-5xl mx-auto"
        >
          <motion.img custom={3} variants={fadeInUp} src="/global-sourcing.png" alt="Global logistics port" className="w-full h-full object-cover" />
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const isTeal = feature.accent === 'secondary-teal';
            return (
              <motion.div
                key={feature.title}
                custom={index + 3}
                variants={fadeInUp}
                className="group card-hover bg-white rounded-2xl p-8 border border-gray-100 relative overflow-hidden"
              >
                {/* Top accent line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 ${
                    isTeal
                      ? 'bg-gradient-to-r from-secondary-teal to-teal-light'
                      : 'bg-gradient-to-r from-primary-blue to-blue-dark'
                  }`}
                />

                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${
                    isTeal
                      ? 'bg-secondary-teal/10 group-hover:bg-secondary-teal'
                      : 'bg-primary-blue/10 group-hover:bg-primary-blue'
                  }`}
                >
                  <IconComponent
                    className={`w-7 h-7 transition-colors duration-300 ${
                      isTeal
                        ? 'text-secondary-teal group-hover:text-white'
                        : 'text-primary-blue group-hover:text-white'
                    }`}
                    strokeWidth={1.8}
                  />
                </div>

                <h3 className="text-xl font-bold text-text-dark mb-3">{feature.title}</h3>
                <p className="text-text-muted leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Values Row */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6"
        >
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <motion.div
                key={value.label}
                custom={index + 6}
                variants={fadeInUp}
                className="flex items-center gap-2.5 px-5 py-3 bg-white rounded-full border border-gray-100 shadow-sm hover:shadow-md hover:border-primary-blue/20 transition-all duration-300"
              >
                <IconComponent className="w-4 h-4 text-secondary-teal" strokeWidth={2} />
                <span className="text-sm font-bold text-text-dark">{value.label}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
