import { motion } from 'framer-motion';
import {
  Building2, Construction, Factory, Zap, Droplets, Grid3X3,
  Paintbrush, TreePine, Monitor, Cog, FlaskConical, Coffee,
  Fuel, Truck, Recycle, Wrench, Container, HardHat
} from 'lucide-react';

const categories = [
  { name: 'Construction Materials', icon: Building2, image: '/construction_materials.png' },
  { name: 'Steel & Rebar', icon: Construction, image: '/steel_rebar.png' },
  { name: 'Cement & Concrete', icon: Factory, image: '/worker-leveling-fresh-floor-with-special-machine.jpg' },
  { name: 'Crusher & Asphalt Materials', icon: HardHat, image: '/heavy-machinery-used-construction-industry-engineering.jpg' },
  { name: 'Electrical Materials', icon: Zap, image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=800' },
  { name: 'Plumbing Materials', icon: Droplets, image: '/plumbing_materials.png' },
  { name: 'Ceramics & Tiles', icon: Grid3X3, image: '/ceramics_tiles.png' },
  { name: 'Paints & Coatings', icon: Paintbrush, image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80&w=800' },
  { name: 'Wood & Timber', icon: TreePine, image: '/person-working-wood-working-industry-factory.jpg' },
  { name: 'Office Facilities Supply', icon: Monitor, image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800' },
  { name: 'Heavy Equipment & Machinery Spare Parts', icon: Cog, image: '/scene-construction-site-with-equipment.jpg' },
  { name: 'Chemicals & Scientific Trading', icon: FlaskConical, image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800' },
  { name: 'Food & Beverage Trading', icon: Coffee, image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800' },
  { name: 'Oil, Gas & Energy Trading', icon: Fuel, image: 'https://images.unsplash.com/photo-1563906267088-b029e7101114?auto=format&fit=crop&q=80&w=800' },
  { name: 'Heavy Rental Equipment', icon: Truck, image: '/lazaz_heavy_equipment.png' },
  { name: 'Scrap & Waste Processing', icon: Recycle, image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800' },
  { name: 'Industrial Spare Parts Supply', icon: Wrench, image: '/lazaz_industrial_parts.png' },
  { name: 'Site Facilities', icon: Container, image: '/oil-gas-facility.png' },
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



        {/* Product Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {categories.map((cat, index) => {
            const IconComponent = cat.icon;
            return (
              <motion.div
                key={cat.name}
                custom={index}
                variants={cardVariant}
                className="group card-hover bg-white rounded-2xl overflow-hidden flex flex-col border border-gray-100 shadow-sm cursor-default"
              >
                {/* Image Section */}
                <div className="w-full h-48 relative overflow-hidden bg-gray-100">
                  <img 
                    src={cat.image} 
                    alt={cat.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Icon over image */}
                  <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20 shadow-lg group-hover:bg-secondary-teal group-hover:border-secondary-teal transition-all duration-300">
                    <IconComponent className="w-6 h-6 text-white" strokeWidth={1.8} />
                  </div>
                </div>
                
                {/* Text Section */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-lg font-bold text-text-dark mb-2 group-hover:text-secondary-teal transition-colors duration-300">
                    {cat.name}
                  </h3>
                  <div className="w-8 h-1 bg-secondary-teal/30 rounded-full mt-auto group-hover:w-16 group-hover:bg-secondary-teal transition-all duration-300" />
                </div>
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
