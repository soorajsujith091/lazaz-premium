import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';
import PageHero from '../components/PageHero';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    lines: ['Building 8053, Prince Nawaf Ibn Abdulaziz St', 'Al Khubar Ash Shamaliyah Dist., Al Khobar 34426', 'Kingdom of Saudi Arabia'],
  },
  {
    icon: Phone,
    title: 'Call Us',
    lines: ['+966 13 823 4533', '+966 55 900 2508'],
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: ['info@lazazpremium.com', 'careers@lazazpremium.com'],
  },
  {
    icon: Clock,
    title: 'Working Hours',
    lines: ['Sunday – Thursday', '8:00 AM – 5:00 PM'],
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with our team. We'd love to hear about your project and how we can help."
        breadcrumbs={[{ label: 'Contact Us' }]}
        backgroundImage="/industrial-construction-site.jpg"
      />

      {/* ── Contact Info Cards ── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="px-8 sm:px-14 lg:px-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i}
                  className="p-7 rounded-2xl bg-gray-50 border border-gray-100 hover:border-secondary-teal/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary-teal/10 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-secondary-teal" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-3">{info.title}</h3>
                  {info.lines.map((line, j) => (
                    <p key={j} className="text-sm text-gray-500 leading-relaxed">{line}</p>
                  ))}
                </motion.div>
              );
            })}
          </div>

          {/* ── Form + Map ── */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span className="text-sm font-semibold uppercase tracking-widest text-secondary-teal mb-3 block">Send a Message</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8">Get in Touch</h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-secondary-teal focus:ring-2 focus:ring-secondary-teal/20 outline-none transition-all text-sm"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-secondary-teal focus:ring-2 focus:ring-secondary-teal/20 outline-none transition-all text-sm"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-phone" className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-secondary-teal focus:ring-2 focus:ring-secondary-teal/20 outline-none transition-all text-sm"
                      placeholder="+966 XX XXX XXXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-subject" className="block text-sm font-semibold text-gray-700 mb-1.5">Subject</label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-secondary-teal focus:ring-2 focus:ring-secondary-teal/20 outline-none transition-all text-sm"
                      placeholder="Project inquiry, partnership, etc."
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-semibold text-gray-700 mb-1.5">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-secondary-teal focus:ring-2 focus:ring-secondary-teal/20 outline-none transition-all text-sm resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2.5 px-8 py-4 bg-gray-900 text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={2}
              className="rounded-2xl overflow-hidden bg-gray-100 min-h-[400px]"
            >
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228861.81891543653!2d49.85!3d26.43!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e8e12f6f5255%3A0x3e49c6a5f2bc70ba!2sDammam%2C%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
