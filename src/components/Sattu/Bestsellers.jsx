import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Star, ShoppingBag, ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const products = [
  {
    id: 1,
    name: "Elaichi Sattu Mix",
    flavor: "Cooling & Digestive",
    price: 199,
    rating: 4.8,
    reviews: "1.2K",
    btnColor: "bg-[#4A5D4E]",
    image: "https://images.unsplash.com/photo-1594488651083-023b857dc3f8?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Gulab Sattu Mix",
    flavor: "Refreshing & Aromatic",
    price: 199,
    rating: 4.7,
    reviews: "956",
    btnColor: "bg-[#E91E63]",
    image: "https://images.unsplash.com/photo-1594488651083-023b857dc3f8?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Rajbhog Sattu Mix",
    flavor: "Rich & Delicious",
    price: 219,
    rating: 4.9,
    reviews: "1.1K",
    btnColor: "bg-[#FF9800]",
    image: "https://images.unsplash.com/photo-1594488651083-023b857dc3f8?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Classic Sattu Mix",
    flavor: "Original & Pure",
    price: 189,
    rating: 4.8,
    reviews: "843",
    btnColor: "bg-[#795548]",
    image: "https://images.unsplash.com/photo-1594488651083-023b857dc3f8?q=80&w=600&auto=format&fit=crop"
  }
];

const ProductCard = ({ product }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="bg-white rounded-2xl p-5 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 group transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)]"
    >
      <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-6 bg-[#F5F5F0]">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
      </div>

      <div className="flex flex-col gap-1.5">
        <h3 className="text-base font-black text-[#2C241E] tracking-tight group-hover:text-[#4A5D4E] transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-[11px] font-bold text-[#6D4C3D] opacity-60 uppercase tracking-widest mb-2">{product.flavor}</p>
        
        <div className="flex items-center gap-1.5 mb-4">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={11} className="fill-[#FF9800] text-[#FF9800]" />
            ))}
          </div>
          <span className="text-xs font-black text-[#2C241E]">{product.rating}</span>
          <span className="text-[10px] font-bold text-[#999999]">({product.reviews})</span>
        </div>
        
        <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-50">
          <span className="text-xl font-black text-[#2C241E]">₹{product.price}</span>
          <motion.button 
            whileTap={{ scale: 0.9 }}
            className={`w-11 h-11 ${product.btnColor} text-white rounded-xl flex items-center justify-center hover:opacity-90 transition-all shadow-lg shadow-black/5`}
          >
            <ShoppingBag size={20} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const BestsellerProducts = () => {
  return (
    <section className="py-16 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#333333]">Our Bestsellers</h2>
          <Link to="/shop" className="text-xs font-bold uppercase tracking-wider text-[#333333] flex items-center gap-1 hover:text-[#4A5D4E] transition-colors">
            View All Products <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestsellerProducts;
