import { motion } from 'framer-motion';

const clients = [
  'Aramco', 'SABIC', 'NEOM', 'ARO', 'Alfanar', 'Samsung C&T', 'CNPC BGP',
  'Kidana', 'Saudi Arabia Railways (SAR)', 'Rawabi', 'Doosan', 'Eram Holdings',
  'Royal Commission for AlUla', 'L&T', 'Sinosteel', 'Almarai', 'SEPCOIII',
  'Saudi Electricity Company', 'Acciona', 'Saipem', 'BAE Systems', 'Yellow Edges',
  'Sinopec', 'Lantania', 'GS Inima', 'SANAD', 'Ministry of Housing', 'Mawani',
  'Tenaris', 'ACGC', 'Sendan', 'Saudi Red Sea Authority', 'National Water Company',
  'Amana', 'Target', 'Mapa', 'NCC', 'Babtain',
];

export default function ClientsMarquee() {
  // Duplicate the list for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

  return (
    <section id="clients" className="relative py-20 sm:py-28 bg-white overflow-hidden" aria-labelledby="clients-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-secondary-teal/10 text-secondary-teal text-sm font-bold rounded-full tracking-wider uppercase mb-4">
            Our Partners
          </span>
          <h2 id="clients-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-dark leading-tight mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="max-w-2xl mx-auto text-text-muted text-lg">
            Proudly serving the Kingdom&apos;s most prominent organizations and international partners.
          </p>
        </motion.div>
      </div>

      {/* Marquee Row 1 */}
      <div className="marquee-container mb-4 relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="marquee-track flex gap-4 animate-marquee w-max">
          {duplicatedClients.slice(0, clients.length * 2).map((client, index) => (
            <div
              key={`row1-${index}`}
              className="flex-shrink-0 px-6 py-3 bg-bg-neutral rounded-lg border border-gray-100 hover:border-primary-blue/20 hover:shadow-sm transition-all duration-300"
            >
              <span className="text-sm font-bold text-text-dark whitespace-nowrap tracking-wide">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 (reverse direction) */}
      <div className="marquee-container relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="marquee-track flex gap-4 animate-marquee-reverse w-max">
          {[...duplicatedClients].reverse().map((client, index) => (
            <div
              key={`row2-${index}`}
              className="flex-shrink-0 px-6 py-3 bg-bg-neutral rounded-lg border border-gray-100 hover:border-secondary-teal/20 hover:shadow-sm transition-all duration-300"
            >
              <span className="text-sm font-bold text-text-muted whitespace-nowrap tracking-wide">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Client count indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="text-center mt-10"
      >
        <span className="text-text-muted text-sm font-medium">
          <span className="text-primary-blue font-bold">{clients.length}+</span> trusted partners and growing
        </span>
      </motion.div>
    </section>
  );
}
