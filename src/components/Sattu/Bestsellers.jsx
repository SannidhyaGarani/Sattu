import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { ArrowRight, ShoppingCart, Heart } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { db } from '../../components/Firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

import 'swiper/css';

const ProductCard = ({ product, idx }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1, duration: 0.6 }}
      onClick={() => navigate(`/product/${product.id}`)}
      className="group cursor-pointer flex flex-col h-full bg-[#FAF9F6]"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#EFECE5] mb-4">
        <img
          src={product.image || product.images?.[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
        />
        
        {/* Wishlist Button */}
        <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <button 
            onClick={(e) => { e.stopPropagation(); }}
            className="w-9 h-9 rounded-full bg-[#FAF9F6] shadow-lg flex items-center justify-center text-[#3D4A3E] hover:bg-[#3D4A3E] hover:text-[#FAF9F6] transition-all"
          >
            <Heart size={15} strokeWidth={1.5} />
          </button>
        </div>

        {/* Floating Add to Cart for Desktop */}
        <div className="absolute bottom-4 left-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
          <button 
            className="w-full py-3 bg-[#3D4A3E] text-[#FAF9F6] text-[10px] font-bold uppercase tracking-wider rounded-xl backdrop-blur-sm bg-opacity-90 flex items-center justify-center gap-2 hover:bg-[#2C362D] transition-colors shadow-xl"
          >
            <ShoppingCart size={14} /> Quick Add
          </button>
        </div>
      </div>

      <div className="flex flex-col flex-grow px-1">
        <div className="flex justify-between items-start mb-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#845E35]">
            {product.category || 'Specialty'}
          </span>
          <span className="text-sm font-medium text-[#3D4A3E]">₹{product.price}</span>
        </div>
        <h3 className="text-lg font-serif text-[#3D4A3E] leading-tight group-hover:text-[#845E35] transition-colors">
          {product.name}
        </h3>
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
        const q = query(collection(db, 'products'), orderBy('createdAt', 'desc'));
        const snap = await getDocs(q);
        setProducts(snap.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <section className="relative w-full py-12 md:py-20 bg-[#FAF9F6] overflow-hidden">
      {/* Subtle Grain Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* Section Header Matching CategoriesSection */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10 md:mb-14">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-[10px] font-bold tracking-[0.25em] uppercase text-[#3D4A3E]/60 mb-4"
            >
              Essential Reserve
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-[#3D4A3E] tracking-tight leading-[1.1]"
            >
              Most <span className="italic">loved</span> <br className="hidden md:block" />
              bestsellers.
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link 
              to="/shop" 
              className="group inline-flex items-center gap-3 text-[#3D4A3E] border-b border-[#3D4A3E]/30 pb-1 hover:border-[#3D4A3E] transition-colors"
            >
              <span className="text-xs font-bold uppercase tracking-wider">Explore Entire Range</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-5 gap-6">
          {products.slice(0, 5).map((product, idx) => (
            <ProductCard key={product.id} product={product} idx={idx} />
          ))}
        </div>

        {/* Mobile/Tablet Slider */}
        <div className="lg:hidden -mr-6 md:-mr-12">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1.2}
            autoplay={{ delay: 5000 }}
            breakpoints={{ 
              640: { slidesPerView: 2.2 },
              768: { slidesPerView: 3.2 } 
            }}
          >
            {products.slice(0, 6).map((product, idx) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} idx={idx} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default BestsellerProducts;
