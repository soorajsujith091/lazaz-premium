import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { productsData } from '../data/productsData';

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
            className="max-w-2xl mx-auto text-gray-600 text-lg"
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
          {productsData.map((cat, index) => {
            const IconComponent = cat.icon;
            return (
              <motion.div
                key={cat.id}
                custom={index}
                variants={cardVariant}
                className="group card-hover bg-white rounded-2xl overflow-hidden flex flex-col border border-gray-100 shadow-sm"
              >
                <Link to={`/products/${cat.id}`} className="flex flex-col h-full focus:outline-none focus:ring-2 focus:ring-secondary-teal">
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
                </Link>
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
          className="text-center text-sm text-gray-500 mt-6"
        >
          Site Facilities include: Portable Cabins, Generators, AC Units, Printers &amp; PCs
        </motion.p>
      </div>
    </section>
  );
}
