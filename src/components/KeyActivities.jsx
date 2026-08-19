import { motion } from 'framer-motion';
import {
  Building2, Recycle, Cog, Fuel, Truck, FlaskConical,
  Coffee, Wrench, Globe, Factory
} from 'lucide-react';

const activities = [
  { name: 'Construction Materials Trading', icon: Building2 },
  { name: 'Scrap & Waste Processing', icon: Recycle },
  { name: 'Mechanical Industries Support', icon: Cog },
  { name: 'Oil, Gas & Energy Trading', icon: Fuel },
  { name: 'Heavy Equipment Rental', icon: Truck },
  { name: 'Chemicals & Scientific Trading', icon: FlaskConical },
  { name: 'Food & Beverage Trading', icon: Coffee },
  { name: 'Industrial Spare Parts Supply', icon: Wrench },
  { name: 'International Procurement & Global Sourcing', icon: Globe },
  { name: 'Direct from Factory Supply for Electrical & Industrial Tools', icon: Factory },
];

const itemVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, delay: i * 0.08, ease: 'easeOut' },
  }),
};

export default function KeyActivities() {
  return (
    <section id="activities" className="relative py-20 sm:py-28 bg-white" aria-labelledby="activities-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-14"
        >
          <motion.span
            custom={0}
            variants={itemVariant}
            className="inline-block px-4 py-1.5 bg-primary-blue/5 text-primary-blue text-sm font-bold rounded-full tracking-wider uppercase mb-4"
          >
            Our Capabilities
          </motion.span>
          <motion.h2
            custom={1}
            variants={itemVariant}
            id="activities-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-dark leading-tight"
          >
            Key Activities
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          {/* Activities Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="grid sm:grid-cols-1 gap-3"
          >
            {activities.map((activity, index) => {
              const IconComponent = activity.icon;
              return (
                <motion.div
                  key={activity.name}
                  custom={index}
                  variants={itemVariant}
                  className="group flex items-center gap-4 p-3.5 rounded-xl hover:bg-bg-neutral transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-secondary-teal/10 rounded-lg flex items-center justify-center group-hover:bg-secondary-teal group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="w-5 h-5 text-secondary-teal group-hover:text-white transition-colors duration-300" strokeWidth={2} />
                  </div>
                  <span className="text-base font-semibold text-text-dark">{activity.name}</span>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Image */}
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, margin: '-40px' }}
             transition={{ duration: 0.6 }}
             className="rounded-2xl overflow-hidden shadow-xl h-full min-h-[400px] hidden lg:block"
          >
             <img src="/heavy-equipment.png" alt="Heavy Equipment" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
