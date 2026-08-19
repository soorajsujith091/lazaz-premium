import { motion } from 'framer-motion';
import {
  Building2, Construction, Factory, Zap, Droplets, Grid3X3,
  Paintbrush, TreePine, Monitor, Cog, FlaskConical, Coffee,
  Fuel, Truck, Recycle, Wrench, Container, HardHat
} from 'lucide-react';

const categories = [
  { name: 'Construction Materials', icon: Building2 },
  { name: 'Steel & Rebar', icon: Construction },
  { name: 'Cement & Concrete', icon: Factory },
  { name: 'Crusher & Asphalt Materials', icon: HardHat },
  { name: 'Electrical Materials', icon: Zap },
  { name: 'Plumbing Materials', icon: Droplets },
  { name: 'Ceramics & Tiles', icon: Grid3X3 },
  { name: 'Paints & Coatings', icon: Paintbrush },
  { name: 'Wood & Timber', icon: TreePine },
  { name: 'Office Facilities Supply', icon: Monitor },
  { name: 'Heavy Equipment & Machinery Spare Parts', icon: Cog },
  { name: 'Chemicals & Scientific Trading', icon: FlaskConical },
  { name: 'Food & Beverage Trading', icon: Coffee },
  { name: 'Oil, Gas & Energy Trading', icon: Fuel },
  { name: 'Heavy Rental Equipment', icon: Truck },
  { name: 'Scrap & Waste Processing', icon: Recycle },
  { name: 'Industrial Spare Parts Supply', icon: Wrench },
  { name: 'Site Facilities', icon: Container },
];

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.05, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function Products() {
  return (
    <section id="products" className="relative py-20 sm:py-28 bg-bg-neutral overflow-hidden" aria-labelledby="products-heading">
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
            variants={cardVariant}
            className="inline-block px-4 py-1.5 bg-secondary-teal/10 text-secondary-teal text-sm font-bold rounded-full tracking-wider uppercase mb-4"
          >
            What We Supply
          </motion.span>
          <motion.h2
            custom={1}
            variants={cardVariant}
            id="products-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-dark leading-tight mb-4"
          >
            Product &amp; Material Categories
          </motion.h2>
          <motion.p
            custom={2}
            variants={cardVariant}
            className="max-w-2xl mx-auto text-text-muted text-lg"
          >
            Comprehensive sourcing across every major industrial and construction category.
          </motion.p>
        </motion.div>

        {/* Section Image */}
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: '-40px' }}
           className="w-full h-64 sm:h-80 rounded-2xl overflow-hidden shadow-lg mb-12"
        >
           <motion.img custom={3} variants={cardVariant} src="/construction-materials.png" alt="Construction Materials" className="w-full h-full object-cover" />
        </motion.div>

        {/* Product Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 lg:gap-5"
        >
          {categories.map((cat, index) => {
            const IconComponent = cat.icon;
            return (
              <motion.div
                key={cat.name}
                custom={index}
                variants={cardVariant}
                className="group card-hover bg-white rounded-xl p-5 flex flex-col items-center text-center border border-gray-100 cursor-default"
              >
                <div className="w-12 h-12 bg-secondary-teal/8 rounded-xl flex items-center justify-center mb-3 group-hover:bg-secondary-teal/15 transition-colors duration-300">
                  <IconComponent className="w-6 h-6 text-secondary-teal" strokeWidth={1.8} />
                </div>
                <span className="text-sm font-semibold text-text-dark leading-tight">{cat.name}</span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Site Facilities Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center text-sm text-text-muted mt-6"
        >
          Site Facilities include: Portable Cabins, Generators, AC Units, Printers &amp; PCs
        </motion.p>
      </div>
    </section>
  );
}
