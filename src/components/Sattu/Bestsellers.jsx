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
    setTimeout(() => setFeedbackMessage(null), 3000);
  };

  const addToCollection = async (e, collectionName) => {
    e.stopPropagation();
    if (!user) { navigate('/login'); return; }
    // ... rest of your existing logic
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1 }}
      onClick={() => navigate(`/product/${product.id}`)}
      className="bg-[#FDF6E9] p-4 border-[3px] border-[#D9D3C7] group relative cursor-pointer hover:border-[#D9A036] transition-colors duration-500 flex flex-col h-full"
    >
      {/* Corner Ornaments for Traditional Look */}
      <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[#8B7355]"></div>
      
      {/* Image Block */}
      <div className="relative aspect-[3/4] overflow-hidden bg-[#E5D3B3] mb-4 border-b-4 border-r-4 border-[#8B7355]">
        <img 
          src={product.image || product.images?.[0]} 
          alt={product.name}
          className="w-full h-full object-cover grayscale-[10%] sepia-[5%] transition-transform duration-700 group-hover:scale-105"
        />
        {/* Wishlist Button - Hand-stamped style */}
        <button 
          onClick={(e) => addToCollection(e, 'wishlist')}
          className="absolute top-3 right-3 w-8 h-8 bg-white border border-[#8B7355] flex items-center justify-center text-[#8B7355] hover:bg-[#8B7355] hover:text-white transition-colors"
        >
          <Heart size={14} />
        </button>
      </div>

      {/* Info Block */}
      <div className="flex flex-col flex-grow text-center">
        <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#D9A036] mb-1">
          {product.flavor || "Handcrafted"}
        </span>
        <h3 className="text-lg font-serif font-bold text-[#1C2B21] mb-2 leading-tight">
          {product.name}
        </h3>
        <div className="flex justify-center gap-1 mb-4">
           {[...Array(5)].map((_, i) => <Star key={i} size={10} className="fill-[#D9A036] text-[#D9A036]" />)}
        </div>
      </div>
      
      {/* Price & Action Footer */}
      <div className="border-t border-[#8B7355]/30 pt-4 mt-auto">
        <div className="flex items-center justify-between">
          <span className="text-lg font-serif font-bold text-[#1C2B21]">₹{product.price}</span>
          <button 
            onClick={(e) => addToCollection(e, 'cart')}
            className="px-4 py-2 bg-[#1C3B24] text-white text-[10px] font-bold uppercase tracking-widest hover:bg-[#D9A036] transition-colors"
          >
            Add Item
          </button>
        </div>
      </div>
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
      <section 
        className="py-24 relative overflow-hidden border-t border-b border-[#D9D3C7] bg-cover bg-center"
        style={{ backgroundImage: "url('/img/b2.png')" }}
      >
        <div className="absolute inset-0 bg-white/10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
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
    <section 
      className="py-24 relative overflow-hidden border-t border-b border-[#D9D3C7] bg-cover bg-center"
      style={{ backgroundImage: "url('/img/b2.png')" }}
    >
      <div className="absolute inset-0 bg-white/10 pointer-events-none"></div>

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
