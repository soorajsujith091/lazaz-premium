import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { productsData } from '../data/productsData';
import { productGallery, galleryPhotos } from '../data/productGallery';
import { galleryImages } from '../data/galleryImages';
import PageHero from '../components/PageHero';

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = productsData.find(p => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
      window.scrollTo(0, 0);
    } else {
      // If not found, redirect to home or products
      navigate('/#products');
    }
  }, [id, navigate]);

  if (!product) return null;

  const Icon = product.icon;
  const relatedImages = [product.image, ...(productGallery[product.id] || [])]
    .filter((image) => galleryPhotos.has(image));

  return (
    <div className="bg-white min-h-screen">
      <PageHero
        title={product.name}
        subtitle="Detailed specifications and features of our supply."
        breadcrumbs={[{ label: 'Products', path: '/#products' }, { label: product.name }]}
        backgroundImage={product.image.startsWith('http') ? product.image : '/hero-new-bg.jpg'}
      />

      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Link 
          to="/#products" 
          className="inline-flex items-center text-text-muted hover:text-secondary-teal transition-colors mb-10 group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="product-photo-stage"
          >
            <div className="aspect-[4/3] w-full">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="product-photo-blend" aria-hidden="true" />
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg">
              <Icon className="w-8 h-8 text-secondary-teal" />
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-dark mb-6">
              {product.name}
            </h2>
            <div className="w-16 h-1.5 bg-secondary-teal rounded-full mb-8"></div>
            
            <p className="text-lg text-text-muted leading-relaxed mb-10">
              {product.description}
            </p>

            <h3 className="text-xl font-bold text-text-dark mb-6">Key Features & Benefits</h3>
            <ul className="space-y-4 mb-12">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-secondary-teal mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-text-dark font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="p-8 bg-bg-neutral rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-text-dark mb-3">Ready to order?</h3>
              <p className="text-text-muted mb-6 text-sm">
                Contact our sales team for bulk pricing, availability, and specific technical requirements.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-primary-blue text-white rounded-full font-semibold hover:bg-blue-dark transition-colors duration-300 shadow-md hover:shadow-xl"
              >
                Request a Quote
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Gallery Section */}
        {relatedImages.length > 0 && (
        <div className="project-showcase related-showcase mt-20 p-6 sm:p-10 lg:p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs text-teal-300 font-bold uppercase tracking-[0.2em] mb-3">From the project site</p>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8">Our expertise in action</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedImages.map((imgUrl, idx) => (
                <figure key={imgUrl} className={`project-photo group ${idx === 0 && relatedImages.length > 2 ? 'sm:col-span-2 lg:col-span-2' : ''}`}>
                  <img 
                    src={imgUrl}
                    alt={`${product.name} Gallery ${idx + 1}`}
                    className="project-photo-image"
                    loading="lazy"
                  />
                  <div className="project-photo-shade" />
                  <figcaption className="absolute bottom-0 inset-x-0 p-6 text-white font-bold text-lg">{galleryImages.find((image) => image.src === imgUrl)?.title || product.name}</figcaption>
                </figure>
              ))}
            </div>
          </motion.div>
        </div>
        )}
      </section>
    </div>
  );
}
