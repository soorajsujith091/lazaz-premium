import { motion } from 'framer-motion';
import { Eye, Target } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 bg-white overflow-hidden" aria-labelledby="about-heading">
      {/* Subtle decorative element */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-blue via-secondary-teal to-primary-blue" />

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
            About Us
          </motion.span>
          <motion.h2
            custom={1}
            variants={fadeInUp}
            id="about-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-dark leading-tight"
          >
            Redefining the Supply Chain
          </motion.h2>
        </motion.div>

        {/* Company Description & Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid lg:grid-cols-2 gap-10 items-center mb-16"
        >
          <motion.div custom={2} variants={fadeInUp}>
            <p className="text-lg sm:text-xl text-text-muted leading-relaxed">
              Lazaz Premium Company was established with a vision to redefine the supply chain
              landscape in the region. Specializing in the sourcing and distribution of high-grade
              materials, we serve as the vital link between global manufacturers and the core
              industries driving our economy — including Oil &amp; Gas, Construction, Infrastructure,
              and Utilities.
            </p>
          </motion.div>
          <motion.div custom={3} variants={fadeInUp} className="rounded-2xl overflow-hidden shadow-xl h-64 lg:h-80 w-full">
            <img src="/about-warehouse.png" alt="Warehouse operations" className="w-full h-full object-cover" />
          </motion.div>
        </motion.div>

        {/* Vision & Mission Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {/* Vision Card */}
          <motion.div
            custom={3}
            variants={fadeInUp}
            className="group relative bg-white rounded-2xl p-8 lg:p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
          >
            {/* Left accent border */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-blue to-primary-blue/50 rounded-l-2xl" />

            <div className="flex items-start gap-5">
              <div className="flex-shrink-0 w-14 h-14 bg-primary-blue/10 rounded-xl flex items-center justify-center group-hover:bg-primary-blue group-hover:text-white transition-all duration-300">
                <Eye className="w-7 h-7 text-primary-blue group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-text-dark mb-3">Our Vision</h3>
                <p className="text-text-muted leading-relaxed">
                  To be the most trusted and innovative bridge between global resources and
                  regional industry, setting the gold standard for premium trading and turnkey
                  solutions in the Middle East and beyond.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            custom={4}
            variants={fadeInUp}
            className="group relative bg-white rounded-2xl p-8 lg:p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
          >
            {/* Left accent border */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary-teal to-secondary-teal/50 rounded-l-2xl" />

            <div className="flex items-start gap-5">
              <div className="flex-shrink-0 w-14 h-14 bg-secondary-teal/10 rounded-xl flex items-center justify-center group-hover:bg-secondary-teal group-hover:text-white transition-all duration-300">
                <Target className="w-7 h-7 text-secondary-teal group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-text-dark mb-3">Our Mission</h3>
                <p className="text-text-muted leading-relaxed">
                  To empower regional industries by bridging the gap between global manufacturers
                  and local projects through premium sourcing, seamless logistics, and expert
                  turnkey solutions.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
