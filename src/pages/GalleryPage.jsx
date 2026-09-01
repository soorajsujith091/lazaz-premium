import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import PageHero from '../components/PageHero';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.06 },
  }),
};

const categories = ['All', 'Construction', 'Infrastructure', 'Oil & Gas', 'Interiors'];

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80', category: 'Construction', title: 'Building Construction' },
  { src: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80', category: 'Infrastructure', title: 'Road Development' },
  { src: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80', category: 'Oil & Gas', title: 'Pipeline Installation' },
  { src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80', category: 'Oil & Gas', title: 'Gas Plant Operations' },
  { src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80', category: 'Construction', title: 'Commercial Building' },
  { src: 'https://images.unsplash.com/photo-1590846083693-f23fdede3a7e?w=800&q=80', category: 'Oil & Gas', title: 'Processing Facility' },
  { src: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=80', category: 'Infrastructure', title: 'Civil Works' },
  { src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80', category: 'Construction', title: 'Structural Framework' },
  { src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80', category: 'Interiors', title: 'Modern Interior Design' },
  { src: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80', category: 'Construction', title: 'Villa Project' },
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80', category: 'Interiors', title: 'Luxury Interior' },
  { src: 'https://images.unsplash.com/photo-1590479773265-7464e5d48118?w=800&q=80', category: 'Infrastructure', title: 'Heavy Equipment at Work' },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filteredImages = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="A visual showcase of our projects, craftsmanship, and dedication to excellence across Saudi Arabia."
        breadcrumbs={[{ label: 'Gallery' }]}
        backgroundImage="/industrial-construction-site.jpg"
      />

      {/* ── Gallery ── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="px-8 sm:px-14 lg:px-20">
          {/* Filter Tabs */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-wrap items-center gap-2 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((img, i) => (
                <motion.div
                  key={img.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="break-inside-avoid group cursor-pointer"
                  onClick={() => setLightbox(img)}
                >
                  <div className="relative rounded-2xl overflow-hidden bg-gray-100">
                    <img
                      src={img.src}
                      alt={img.title}
                      className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-end p-5">
                      <div className="translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <span className="text-xs font-semibold text-white/60 uppercase tracking-wider">{img.category}</span>
                        <h3 className="text-lg font-bold text-white mt-0.5">{img.title}</h3>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightbox.src}
              alt={lightbox.title}
              className="max-w-full max-h-[85vh] object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
              <span className="text-xs font-semibold text-white/50 uppercase tracking-wider">{lightbox.category}</span>
              <h3 className="text-lg font-bold text-white mt-1">{lightbox.title}</h3>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
