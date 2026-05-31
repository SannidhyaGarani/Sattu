import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Star, ShoppingBag, ArrowRight, Heart, Sparkles } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { db } from '../../components/Firebase';
import { collection, getDocs, query, orderBy, doc, setDoc } from 'firebase/firestore';
import { useAuth } from '../../components/useAuth';
import { AnimatePresence } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const ProductCard = ({ product, idx }) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [feedbackMessage, setFeedbackMessage] = useState(null);

  const triggerToast = (msg) => {
    setFeedbackMessage(msg);
    setTimeout(() => setFeedbackMessage(null), 4000);
  };

  const addToCollection = async (e, collectionName) => {
    e.stopPropagation();
    if (!user) {
      navigate('/login');
      return;
    }
    try {
      const itemRef = doc(db, "users", user.uid, collectionName, product.id);
      await setDoc(itemRef, {
        name: product.name,
        price: product.price,
        image: product.image || product.images?.[0] || "",
        addedAt: new Date().toISOString(),
        flavor: product.flavor || ''
      });
      triggerToast(`Successfully added to your ${collectionName}!`);
    } catch (error) {
      console.error(`Error adding to ${collectionName}:`, error);
      triggerToast("An error occurred. Please try again.");
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.05 }}
      onClick={() => navigate(`/product/${product.id}`)}
      className="bg-white rounded-xl p-4 border border-[#D9D3C7] group flex flex-col justify-between transition-all duration-500 hover:shadow-[0_16px_40px_rgba(28,43,33,0.06)] h-full cursor-pointer"
    >
      <div>
        {/* Image Container */}
        <div className="relative aspect-[4/5] rounded-lg overflow-hidden mb-5 bg-[#EFECE6] border border-[#EFECE6]">
          <img 
            src={product.image || product.images?.[0] || "https://images.unsplash.com/photo-1594488651083-023b857dc3f8?q=80&w=600&auto=format&fit=crop"} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-amber-950/5 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0" />
          
          {/* Floating Action Buttons */}
          <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 ease-out">
            <button 
              onClick={(e) => addToCollection(e, 'wishlist')}
              className="w-10 h-10 bg-white/90 backdrop-blur-md rounded-lg text-[#1C2B21] hover:bg-[#1C3B24] hover:text-white transition-all shadow-md flex items-center justify-center border border-[#EAE6DF]"
            >
              <Heart size={14} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col gap-1">
          <span className="text-xs font-sans font-bold text-[#D9A036] uppercase tracking-widest">
            {product.flavor || "Classic Roasted"}
          </span>
          <h3 className="text-base font-serif font-bold text-[#1C2B21] tracking-tight group-hover:text-[#1C3B24] transition-colors duration-300">
            {product.name}
          </h3>
          
          {/* Star Rating Section */}
          <div className="flex items-center gap-1.5 mt-1 mb-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={11} className="fill-[#D9A036] text-[#D9A036]" strokeWidth={1} />
              ))}
            </div>
            <span className="text-xs font-sans font-bold text-[#1C2B21]">{product.rating || 4.8}</span>
          </div>
        </div>
      </div>
      
      {/* Footer Pricing & Action */}
      <div className="flex items-center justify-between pt-3 border-t border-[#EFECE6] mt-4">
        <div className="flex flex-col items-start">
          <span className="text-xl font-serif font-bold text-[#1C2B21]">₹{product.price}</span>
          {product.original_price && product.original_price > product.price && (
            <span className="text-[10px] text-[#707A72] line-through">₹{product.original_price}</span>
          )}
        </div>
        <motion.button 
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.02 }}
          onClick={(e) => addToCollection(e, 'cart')}
          className="bg-[#1C3B24] hover:bg-[#112517] text-white font-sans font-medium text-xs uppercase tracking-wider pl-4 pr-3 py-2.5 rounded-md flex items-center gap-2 transition-all shadow-sm"
        >
          <span>Add</span>
          <ShoppingBag size={14} className="text-[#D9A036]" />
        </motion.button>
      </div>

      {/* Feedback Toast */}
      <AnimatePresence>
        {feedbackMessage && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 bg-[#1C3B24] border border-white/10 text-[#EFECE6] px-4 py-2 rounded-xl shadow-2xl flex items-center gap-2 backdrop-blur-md"
          >
            <Sparkles size={12} className="text-[#D9A036] shrink-0" />
            <p className="text-[10px] font-light tracking-wide">{feedbackMessage}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const BestsellerProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const q = query(collection(db, "products"), orderBy("createdAt", "desc"));
        const snap = await getDocs(q);
        setProducts(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <section className="py-24 bg-[#EFECE6] relative overflow-hidden border-t border-b border-[#D9D3C7]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="space-y-6 animate-pulse">
                <div className="aspect-[4/5] rounded-xl bg-[#D9D3C7]" />
                <div className="h-4 bg-[#D9D3C7] rounded w-2/3" />
                <div className="h-3 bg-[#D9D3C7] rounded w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-[#EFECE6] relative overflow-hidden border-t border-b border-[#D9D3C7]">
      {/* Light Background Subtle Organic Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title Header Block */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12 lg:mb-16">
          <div>
            <span className="text-[#D9A036] font-sans font-bold tracking-widest text-xs uppercase mb-2 block">
              Curated Favorites
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1C2B21] tracking-tight">
              Our Bestsellers
            </h2>
          </div>
          <Link 
            to="/shop" 
            className="text-xs font-sans font-bold uppercase tracking-widest text-[#1C3B24] flex items-center gap-2 hover:text-[#D9A036] transition-colors border-b border-[#1C3B24]/20 pb-1"
          >
            <span>View All Products</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden lg:grid grid-cols-4 gap-6 xl:gap-8">
          {products.map((product, idx) => (
            <ProductCard key={product.id} product={product} idx={idx} />
          ))}
        </div>

        {/* Mobile & Tablet Slider Layout */}
        <div className="block lg:hidden !-mr-6 md:!-mr-12">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={16}
            slidesPerView={1.25}
            pagination={{ clickable: true, modifier: 1 }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              480: { slidesPerView: 1.6 },
              640: { slidesPerView: 2.2 },
              768: { slidesPerView: 2.5 },
            }}
            className="pb-12 premium-product-swiper"
          >
            {products.map((product, idx) => (
              <SwiperSlide key={product.id} className="h-full">
                <ProductCard product={product} idx={idx} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>

      {/* Embedded Swiper Custom Pagination Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        .premium-product-swiper .swiper-pagination-bullet {
          background: #1C3B24 !important;
          opacity: 0.2;
          width: 6px;
          height: 6px;
          transition: all 0.3s ease;
        }
        .premium-product-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          background: #D9A036 !important;
          width: 18px;
          border-radius: 4px;
        }
        .premium-product-swiper .swiper-pagination {
          bottom: 0px !important;
          text-align: left !important;
        }
      `}} />
    </section>
  );
};

export default BestsellerProducts;
export { BestsellerProducts as Bestsellers };
