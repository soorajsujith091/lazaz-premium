import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Briefcase, HeartHandshake, TrendingUp, Users, Send } from 'lucide-react';
import PageHero from '../components/PageHero';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const benefits = [
  {
    icon: TrendingUp,
    title: 'Career Growth',
    desc: 'We invest in your professional development through training programs, mentorship, and clear advancement paths.',
  },
  {
    icon: Users,
    title: 'Collaborative Culture',
    desc: 'Join a diverse, dynamic team that values every voice and works together to achieve extraordinary results.',
  },
  {
    icon: HeartHandshake,
    title: 'Meaningful Impact',
    desc: 'Contribute to projects that shape Saudi Arabia\'s future — from infrastructure to sustainable energy solutions.',
  },
  {
    icon: Briefcase,
    title: 'Competitive Benefits',
    desc: 'Enjoy comprehensive compensation packages, health benefits, and work-life balance initiatives.',
  },
];

export default function WorkWithUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your interest! We will review your application and get back to you soon.');
    setFormData({ name: '', email: '', phone: '', position: '', message: '' });
  };

  return (
    <>
      <PageHero
        title="Work With Us"
        subtitle="Join a team that's building the future of Saudi Arabia's supply chain. Explore opportunities with Lazaz Premium."
        breadcrumbs={[{ label: 'Work With Us' }]}
        backgroundImage="/industrial-construction-site.jpg"
      />

      {/* ── Why Join Us ── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="px-8 sm:px-14 lg:px-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-14"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-secondary-teal mb-3 block">Careers</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Why Join Our Team?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              At Lazaz Premium, we believe our greatest asset is our people. We're always looking for talented,
              passionate individuals who share our commitment to excellence and innovation.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i}
                  className="p-7 rounded-2xl bg-gray-50 border border-gray-100 hover:border-secondary-teal/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary-teal/10 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-secondary-teal" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{benefit.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Application Form ── */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="px-8 sm:px-14 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span className="text-sm font-semibold uppercase tracking-widest text-secondary-teal mb-3 block">Apply Now</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
                Start Your Journey With Us
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Whether you're an experienced professional or just starting your career, we'd love to hear from you.
                Fill out the form and our HR team will review your application.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary-teal/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-secondary-teal font-bold text-sm">01</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Submit Your Application</h4>
                    <p className="text-sm text-gray-500">Fill out the form with your details and area of interest.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary-teal/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-secondary-teal font-bold text-sm">02</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Review & Screening</h4>
                    <p className="text-sm text-gray-500">Our team will review your qualifications and experience.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary-teal/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-secondary-teal font-bold text-sm">03</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Interview & Onboarding</h4>
                    <p className="text-sm text-gray-500">Selected candidates proceed to interview and join our team.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={2}
            >
              <form onSubmit={handleSubmit} className="p-8 sm:p-10 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <div className="space-y-5">
                  <div>
                    <label htmlFor="wwu-name" className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name</label>
                    <input
                      id="wwu-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-secondary-teal focus:ring-2 focus:ring-secondary-teal/20 outline-none transition-all text-sm"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="wwu-email" className="block text-sm font-semibold text-gray-700 mb-1.5">Email</label>
                      <input
                        id="wwu-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-secondary-teal focus:ring-2 focus:ring-secondary-teal/20 outline-none transition-all text-sm"
                        placeholder="email@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="wwu-phone" className="block text-sm font-semibold text-gray-700 mb-1.5">Phone</label>
                      <input
                        id="wwu-phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-secondary-teal focus:ring-2 focus:ring-secondary-teal/20 outline-none transition-all text-sm"
                        placeholder="+966 XX XXX XXXX"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="wwu-position" className="block text-sm font-semibold text-gray-700 mb-1.5">Position of Interest</label>
                    <select
                      id="wwu-position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-secondary-teal focus:ring-2 focus:ring-secondary-teal/20 outline-none transition-all text-sm"
                    >
                      <option value="">Select a position</option>
                      <option value="engineering">Engineering</option>
                      <option value="project-management">Project Management</option>
                      <option value="operations">Operations</option>
                      <option value="administration">Administration</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="wwu-message" className="block text-sm font-semibold text-gray-700 mb-1.5">Cover Note</label>
                    <textarea
                      id="wwu-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-secondary-teal focus:ring-2 focus:ring-secondary-teal/20 outline-none transition-all text-sm resize-none"
                      placeholder="Tell us about your experience and why you'd like to join..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gray-900 text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    Submit Application
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
