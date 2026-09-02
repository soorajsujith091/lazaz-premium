import { motion } from 'framer-motion';
import { Target, Eye, Shield, Users, Lightbulb, Award, TrendingUp, Globe } from 'lucide-react';
import PageHero from '../components/PageHero';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const values = [
  { icon: Shield, title: 'Integrity', desc: 'Honest and transparent in every deal, earning trust through consistent reliability.' },
  { icon: Users, title: 'Collaboration', desc: 'Working closely with clients and partners to deliver shared success.' },
  { icon: Target, title: 'Result Orientation', desc: 'Focused on measurable outcomes that exceed expectations.' },
  { icon: Award, title: 'Respect', desc: 'Valuing every stakeholder relationship with professionalism and care.' },
  { icon: Lightbulb, title: 'Innovation', desc: 'Embracing new technologies and methods to stay ahead.' },
  { icon: TrendingUp, title: 'Experience', desc: 'Decades of combined expertise across Oil & Gas, Construction, and Infrastructure.' },
];

const stats = [
  { value: '100+', label: 'Happy Clients' },
  { value: '80+', label: 'Projects Delivered' },
  { value: '15+', label: 'Years Experience' },
  { value: '50+', label: 'Team Members' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Building trust through quality, innovation, and unwavering commitment to our partners across Saudi Arabia."
        breadcrumbs={[{ label: 'About Us' }]}
        backgroundImage="/industrial-construction-site.jpg"
      />

      {/* ── Who We Are ── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="px-8 sm:px-14 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeUp}
            >
              <span className="text-sm font-semibold uppercase tracking-widest text-secondary-teal mb-3 block">Who We Are</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                Welcome to Lazaz Premium
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Lazaz Premium is a leading material trading and automobile trading company based in the Kingdom of Saudi Arabia (KSA), specializing in supplying premium-quality industrial, construction, engineering, and infrastructure materials to businesses across various sectors. The company is committed to delivering quality products, reliable service, and long-term business partnerships.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We serve as a professional platform for engaging clients across the Kingdom of Saudi Arabia and international B2B markets. Our extensive portfolio ranges from construction materials like crusher, asphalt, electrical, ceramic, concrete, plumbing, steel, wood, to heavy equipment rental and industrial spare parts supply.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeUp}
              custom={2}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                <img
                  src="/about-warehouse.png"
                  alt="Lazaz Premium operations"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Accent element */}
              <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-2xl bg-secondary-teal/10 -z-10" />
              <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-primary-blue/10 -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Stats Counter ── */}
      <section className="py-16 bg-gray-50">
        <div className="px-8 sm:px-14 lg:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="px-8 sm:px-14 lg:px-20">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeUp}
              className="p-8 sm:p-10 rounded-2xl bg-gray-50 border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-secondary-teal/10 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-secondary-teal" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 uppercase tracking-wide">Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-gray-900">Our vision is to become the trusted partner of choice for premium material trading and supply chain
                solutions across Saudi Arabia, the UAE, and the wider Middle East.</strong> We aspire to be
                recognized for our unwavering commitment to quality, reliability, and a customer-focused
                approach. By embracing advanced technologies, fostering innovation, and prioritizing
                sustainable practices, we aim to lead the transformation of regional infrastructure and play a
                vital role in driving economic growth and development.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeUp}
              custom={1}
              className="p-8 sm:p-10 rounded-2xl bg-gray-50 border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-primary-blue/10 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-primary-blue" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 uppercase tracking-wide">Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-gray-900">Our mission is to empower regional industries by bridging the gap between global manufacturers
                and local projects through premium sourcing and seamless logistics.</strong> With a skilled team, a
                strong operational network, and a commitment to collaboration, we aim to consistently exceed
                client expectations, support national development goals, and make a lasting, positive impact on
                the communities we serve.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="px-8 sm:px-14 lg:px-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-secondary-teal mb-3 block">Our Values</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Why Choose Us</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i}
                  className="group p-7 rounded-2xl bg-white border border-gray-100 hover:border-secondary-teal/30 hover:shadow-lg hover:shadow-secondary-teal/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary-teal/10 group-hover:bg-secondary-teal/20 flex items-center justify-center mb-4 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-secondary-teal" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{value.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
