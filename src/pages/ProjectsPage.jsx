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

const projects = [
  {
    num: '01',
    title: 'Construction Material Supply for Commercial Complex',
    image: '/lazaz_construction_material.png',
    category: 'Material Supply',
  },
  {
    num: '02',
    title: 'Heavy Equipment Rental for Infrastructure Project',
    image: '/lazaz_heavy_equipment.png',
    category: 'Equipment Rental',
  },
  {
    num: '03',
    title: 'Industrial Spare Parts Sourcing for Manufacturing Plant',
    image: '/lazaz_industrial_parts.png',
    category: 'Spare Parts',
  },
  {
    num: '04',
    title: 'Automobile Fleet Trading for Logistics Partner',
    image: '/lazaz_automobile_fleet.png',
    category: 'Automotive',
  },
  {
    num: '05',
    title: 'Oil & Gas Equipment Procurement',
    image: '/lazaz_oil_gas.png',
    category: 'Energy Trading',
  },
  {
    num: '06',
    title: 'Site Facilities & IT Equipment for Remote Camp',
    image: '/lazaz_site_facilities.png',
    category: 'Site Facilities',
  },
  {
    num: '07',
    title: 'Chemical & Scientific Supplies for Research Lab',
    image: '/lazaz_industrial_parts.png',
    category: 'Chemicals',
  },
  {
    num: '08',
    title: 'Food & Beverage Distribution for Hospitality Group',
    image: '/lazaz_construction_material.png',
    category: 'F&B Trading',
  },
  {
    num: '09',
    title: 'Scrap Processing for Industrial Estate',
    image: '/lazaz_heavy_equipment.png',
    category: 'Waste Processing',
  },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        title="Our Projects"
        subtitle="A portfolio of successful supply operations and trading partnerships across various industries."
        breadcrumbs={[{ label: 'Projects' }]}
        backgroundImage="/industrial-construction-site.jpg"
      />

      {/* ── Projects Grid ── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="px-8 sm:px-14 lg:px-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-14"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-secondary-teal mb-3 block">Portfolio</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Latest Projects</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.num}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="group cursor-pointer"
              >
                <Link to="/contact" className="block">
                  {/* Image */}
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-100 mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500">
                        <ArrowUpRight className="w-5 h-5 text-gray-900" />
                      </div>
                    </div>
                    {/* Category badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700">
                      {project.category}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex items-start gap-4">
                    <span className="text-2xl font-extrabold text-gray-200 select-none flex-shrink-0">{project.num}</span>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-secondary-teal transition-colors duration-300 leading-snug pt-1">
                      {project.title}
                    </h3>
                  </div>
                </Link>
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
              Ready to start your project?
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto mb-8">
              From concept to completion, we deliver projects that stand the test of time.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-gray-900 text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Get in Touch
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
