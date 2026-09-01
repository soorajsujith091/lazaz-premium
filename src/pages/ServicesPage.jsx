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
    title: 'Construction of Desalination Plant',
    desc: 'Engineering and construction of state-of-the-art desalination facilities to deliver clean water solutions across the Kingdom.',
  },
  {
    num: '02',
    title: 'Construction of Power/Gas Plant',
    desc: 'Building power and gas processing facilities with precision engineering and adherence to international safety standards.',
  },
  {
    num: '03',
    title: 'Infrastructure and Civil Works',
    desc: 'Comprehensive civil construction including drainage, utilities, sewage systems, and foundation works.',
  },
  {
    num: '04',
    title: 'Piling, Shoring & Dewatering',
    desc: 'Specialized geotechnical solutions for deep foundations, earth retention, and groundwater control.',
  },
  {
    num: '05',
    title: 'Road Construction',
    desc: 'Asphalt paving, highway development, and road infrastructure connecting communities across Saudi Arabia.',
  },
  {
    num: '06',
    title: 'Construction of Hotels/Apartments',
    desc: 'Multi-storey residential and hospitality buildings designed for modern living and commercial success.',
  },
  {
    num: '07',
    title: 'Construction of Villa Projects',
    desc: 'Premium villa developments that blend contemporary design with functional luxury.',
  },
  {
    num: '08',
    title: 'High Security Fencing',
    desc: 'Installation of all types of high-security fencing systems for industrial and government facilities.',
  },
  {
    num: '09',
    title: 'Supply of Construction Materials',
    desc: 'Sourcing and delivering quality construction materials from global suppliers to project sites.',
  },
  {
    num: '10',
    title: 'Landscaping & Irrigation',
    desc: 'Green infrastructure solutions including landscaping, irrigation networks, and beautification works.',
  },
  {
    num: '11',
    title: 'Architectural Interiors',
    desc: 'Premium interior fit-out solutions for commercial, residential, and hospitality spaces.',
  },
  {
    num: '12',
    title: 'General Trading',
    desc: 'Comprehensive trading services covering industrial equipment, spare parts, and operational supplies.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Comprehensive construction and engineering solutions delivered with precision and excellence."
        breadcrumbs={[{ label: 'Services' }]}
        backgroundImage="/industrial-construction-site.jpg"
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
                {/* Number */}
                <div className="text-5xl font-extrabold text-gray-100 group-hover:text-gray-800 transition-colors duration-500 mb-6 select-none">
                  {service.num}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-white mb-3 transition-colors duration-500 leading-snug">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 group-hover:text-gray-400 leading-relaxed transition-colors duration-500">
                  {service.desc}
                </p>

                {/* Hover arrow */}
                <div className="mt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                    <ArrowUpRight className="w-4 h-4 text-white" />
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
