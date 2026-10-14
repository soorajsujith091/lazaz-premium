import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08 },
  }),
};

const services = [
  {
    num: '01',
    title: 'Construction Materials Trading',
    desc: 'Supply of premium materials including crusher, asphalt, electrical, painting, ceramic, concrete, plumbing, steel, and wood.',
    image: '/lazaz_construction_material.png'
  },
  {
    num: '02',
    title: 'Scrap & Waste Processing',
    desc: 'Efficient and sustainable solutions for scrap materials and industrial waste management processing.',
    image: '/scrap-waste.jpg'
  },
  {
    num: '03',
    title: 'Mechanical Industries Support',
    desc: 'Comprehensive supply and support services tailored for mechanical manufacturing and industrial operations.',
    image: '/person-working-wood-working-industry-factory.jpg'
  },
  {
    num: '04',
    title: 'Oil, Gas & Energy Trading',
    desc: 'Reliable sourcing and trading of essential materials, components, and equipment for the energy sector.',
    image: '/lazaz_oil_gas.png'
  },
  {
    num: '05',
    title: 'Heavy Equipment Rental',
    desc: 'Providing robust heavy machinery, equipment rentals, and manufacturing machine spare parts for major projects.',
    image: '/lazaz_heavy_equipment.png'
  },
  {
    num: '06',
    title: 'Chemicals & Scientific Trading',
    desc: 'Specialized procurement and supply of high-grade chemicals, laboratory equipment, and scientific instruments.',
    image: '/chemicals-scientific.jpg'
  },
  {
    num: '07',
    title: 'Food & Beverage Trading',
    desc: 'Trading and distribution of quality food and beverage products to meet various commercial and industrial needs.',
    image: '/food-beverage.jpg'
  },
  {
    num: '08',
    title: 'Industrial Spare Parts Supply',
    desc: 'Sourcing and delivering critical spare parts for heavy equipment and manufacturing machines.',
    image: '/lazaz_industrial_parts.png'
  },
  {
    num: '09',
    title: 'International Procurement',
    desc: 'Global sourcing strategies to ensure the reliable supply of premium products from international markets.',
    image: '/global-sourcing.png'
  },
  {
    num: '10',
    title: 'Factory Direct Supply',
    desc: 'Direct from factory supply for electrical components, industrial tools, and essential operational materials.',
    image: '/electrical-materials.jpg'
  },
  {
    num: '11',
    title: 'Site Facilities & Equipment',
    desc: 'Providing complete site facilities including portables, ACs, generators, office facilities, and IT equipment like PCs and printers.',
    image: '/lazaz_site_facilities.png'
  },
  {
    num: '12',
    title: 'Automobile Trading',
    desc: 'Premium automobile trading services offering a wide range of vehicles for commercial and industrial use.',
    image: '/lazaz_automobile_fleet.png'
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Comprehensive material trading and supply chain solutions delivered with precision and excellence."
        breadcrumbs={[{ label: 'Services' }]}
        backgroundImage="/person-working-wood-working-industry-factory.jpg"
      />

      {/* ── Services Grid ── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="px-8 sm:px-14 lg:px-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-14"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-secondary-teal mb-3 block">What We Do</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Services</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.num}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="group relative p-7 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-gray-900 hover:border-gray-800 transition-all duration-500 cursor-pointer overflow-hidden"
              >
                {/* Background Image (Reveals on hover) */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover opacity-0 group-hover:opacity-30 group-hover:scale-110 transition-all duration-700 ease-in-out" 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gray-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Number */}
                  <div className="text-5xl font-extrabold text-gray-200 group-hover:text-gray-400 transition-colors duration-500 mb-6 select-none">
                    {service.num}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-white mb-3 transition-colors duration-500 leading-snug">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-500 group-hover:text-gray-300 leading-relaxed transition-colors duration-500 flex-grow">
                    {service.desc}
                  </p>

                  {/* Hover arrow */}
                  <div className="mt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center bg-white/10 backdrop-blur-sm group-hover:bg-secondary-teal group-hover:border-secondary-teal transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-gray-50">
        <div className="px-8 sm:px-14 lg:px-20 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Have a project in mind?
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto mb-8">
              Let's discuss how our services can bring your vision to life. Get in touch with our team today.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-gray-900 text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Contact Us
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
