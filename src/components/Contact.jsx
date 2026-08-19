import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Building2, MessageCircle } from 'lucide-react';

const materialCategories = [
  'Construction Materials',
  'Steel & Rebar',
  'Cement & Concrete',
  'Crusher & Asphalt Materials',
  'Electrical Materials',
  'Plumbing Materials',
  'Ceramics & Tiles',
  'Paints & Coatings',
  'Wood & Timber',
  'Office Facilities Supply',
  'Heavy Equipment & Machinery Spare Parts',
  'Chemicals & Scientific Trading',
  'Food & Beverage Trading',
  'Oil, Gas & Energy Trading',
  'Heavy Rental Equipment',
  'Scrap & Waste Processing',
  'Industrial Spare Parts Supply',
  'Site Facilities',
  'Other',
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    category: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, this would POST to a backend endpoint
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  const inputClasses =
    'w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-text-dark placeholder-text-muted/50 text-sm font-medium transition-all duration-300 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/10';

  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-bg-neutral overflow-hidden" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <motion.span
            custom={0}
            variants={fadeInUp}
            className="inline-block px-4 py-1.5 bg-primary-blue/5 text-primary-blue text-sm font-bold rounded-full tracking-wider uppercase mb-4"
          >
            Get in Touch
          </motion.span>
          <motion.h2
            custom={1}
            variants={fadeInUp}
            id="contact-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-dark leading-tight mb-4"
          >
            Contact Us
          </motion.h2>
          <motion.p
            custom={2}
            variants={fadeInUp}
            className="max-w-2xl mx-auto text-text-muted text-lg"
          >
            Let us know how we can assist your next project.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Form (3 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm">
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-semibold text-text-dark mb-1.5">
                    Full Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="contact-company" className="block text-sm font-semibold text-text-dark mb-1.5">
                    Company
                  </label>
                  <input
                    id="contact-company"
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company"
                    className={inputClasses}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-semibold text-text-dark mb-1.5">
                    Email *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@company.com"
                    required
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-semibold text-text-dark mb-1.5">
                    Phone
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+966 XXX XXX XXXX"
                    className={inputClasses}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="contact-category" className="block text-sm font-semibold text-text-dark mb-1.5">
                  Material Category
                </label>
                <select
                  id="contact-category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className={`${inputClasses} appearance-none cursor-pointer`}
                >
                  <option value="">Select a category</option>
                  {materialCategories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="contact-message" className="block text-sm font-semibold text-text-dark mb-1.5">
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project requirements..."
                  required
                  rows={4}
                  className={`${inputClasses} resize-none`}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  id="contact-submit"
                  className={`group flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 font-bold text-white rounded-xl transition-all duration-300 ${
                    isSubmitted
                      ? 'bg-teal-light'
                      : 'bg-primary-blue hover:bg-blue-dark hover:shadow-lg hover:shadow-primary-blue/20 hover:-translate-y-0.5'
                  }`}
                  disabled={isSubmitted}
                >
                  {isSubmitted ? (
                    <>
                      <span>✓</span> Message Sent
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>

                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/966XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="whatsapp-button"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#20BD5A] transition-all duration-300 hover:shadow-lg hover:shadow-[#25D366]/20 hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </div>
            </form>
          </motion.div>

          {/* Map & Info (2 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Google Maps Embed */}
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-[280px]">
              <iframe
                title="Lazaz Premium Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3573.5!2d50.1!3d26.42!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDI1JzEyLjAiTiA1MMKwMDYnMDAuMCJF!5e0!3m2!1sen!2ssa!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-3">
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100">
                <div className="w-10 h-10 bg-primary-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary-blue" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-text-dark mb-0.5">Address</h4>
                  <p className="text-sm text-text-muted leading-relaxed">
                    Building #2927, King Faisal Road,<br />
                    At Tubayshi District, Dammam 32233,<br />
                    Kingdom of Saudi Arabia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100">
                <div className="w-10 h-10 bg-secondary-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-5 h-5 text-secondary-teal" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-text-dark mb-0.5">Company Registration</h4>
                  <p className="text-sm text-text-muted">CR: 7052382889</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
