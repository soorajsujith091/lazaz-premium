import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import PageHero from '../components/PageHero';
import { galleryImages } from '../data/galleryImages';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.06 },
  }),
};





const categories = ['All', ...new Set(galleryImages.map((image) => image.category))];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState(null);
  const closeButton = useRef(null);
  useEffect(() => {
    if (!lightbox) return;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButton.current?.focus();
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setLightbox(null);
      if (event.key === 'Tab') {
        event.preventDefault();
        closeButton.current?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
      previousFocus?.focus();
    };
  }, [lightbox]);

  const filteredImages = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="A visual showcase of our projects, craftsmanship, and dedication to excellence across Saudi Arabia."
        breadcrumbs={[{ label: 'Gallery' }]}
        backgroundImage="/worker-leveling-fresh-floor-with-special-machine.jpg"
      />

      {/* ── Gallery ── */}
      {galleryImages.length > 0 && (
      <section className="project-showcase py-20 sm:py-28">
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-14 lg:px-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <p className="text-teal-300 text-xs font-bold uppercase tracking-[0.24em] mb-4">Our work, in focus</p>
              <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">Built with purpose.<br /><span className="text-white/55">Delivered with care.</span></h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-slate-300 max-w-sm">Explore the people, precision, and progress behind our projects across Saudi Arabia.</p>
          </div>
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
                aria-pressed={activeCategory === cat}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-teal-300 text-slate-950 shadow-lg'
                    : 'bg-white/5 text-slate-300 ring-1 ring-inset ring-white/15 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Masonry Grid */}
          <div className="project-grid">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((img, i) => (
                <motion.button
                  key={img.title}
                  type="button"
                  aria-label={`View ${img.title}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className={`project-photo group text-left ${i === 0 ? 'project-photo-featured' : ''}`}
                  onClick={() => setLightbox(img)}
                >
                  <div className="relative h-full">
                    <img
                      src={img.src}
                      alt={img.title}
                      className="project-photo-image"
                      loading="lazy"
                    />
                    {/* Hover overlay */}
                    <div className="project-photo-shade" />
                    <span className="absolute top-5 left-5 text-white/75 text-xs tracking-widest font-bold">{String(i + 1).padStart(2, '0')} / PROJECT</span>
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 sm:p-7">
                      <div>
                        <span className="text-[10px] font-bold text-teal-200 uppercase tracking-[0.18em]">{img.category}</span>
                        <h3 className="text-lg sm:text-xl font-bold text-white mt-2 leading-snug">{img.title}</h3>
                      </div>
                      <span className="photo-open-icon"><ArrowUpRight className="w-5 h-5" /></span>
                    </div>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
      )}

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={lightbox.title}
            onClick={() => setLightbox(null)}
          >
            <button
              ref={closeButton}
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
