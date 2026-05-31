import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Mousewheel } from 'swiper/modules';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';

const flavors = [
  {
    id: 1,
    name: "Rose",
    subtitle: "Floral · Refreshing · Cool",
    tag: "Aromatic",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Chocolate",
    subtitle: "Rich · Smooth · Indulgent",
    tag: "Indulgent",
    image: "https://images.unsplash.com/photo-1511381939415-e44015466834?w=600&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Namkeen",
    subtitle: "Chatpata · Desi · Energetic",
    tag: "Spicy & Bold",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Dry Fruit",
    subtitle: "Nutty · Rich · Nourishing",
    tag: "Nourishing",
    image: "https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?w=600&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Elaichi",
    subtitle: "Aromatic · Refreshing · Classic",
    tag: "Classic Desi",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop"
  }
];

const FlavorCard = ({ flavor }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
      className="bg-white rounded-xl p-5 flex flex-col justify-between border border-[#D9D3C7] shadow-sm hover:shadow-[0_20px_50px_rgba(28,43,33,0.06)] transition-all duration-500 group h-full relative overflow-hidden"
    >
      <div>
        {/* Image Container with Luxury Scrim Overlays */}
        <div className="w-full aspect-[4/5] rounded-lg overflow-hidden mb-6 relative bg-[#EFECE6] border border-[#EFECE6]">
          {/* Subtle Category Micro Tag */}
          <span className="absolute top-3 left-3 z-20 bg-[#1C3B24] text-[#EFECE6] font-sans text-xs font-bold tracking-widest uppercase px-2.5 py-1 rounded shadow-sm">
            {flavor.tag}
          </span>
          
          <img 
            src={flavor.image} 
            alt={flavor.name}
            className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:scale-110"
          />
          {/* Warm organic brand tint overlay */}
          <div className="absolute inset-0 bg-amber-950/5 mix-blend-multiply pointer-events-none group-hover:opacity-0 transition-opacity duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C2B21]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>

        {/* Text Content Block */}
        <div className="flex flex-col items-center text-center px-2">
          <h3 className="text-xl lg:text-2xl font-serif font-bold text-[#1C2B21] tracking-tight group-hover:text-[#1C3B24] transition-colors duration-300 mb-1.5">
            {flavor.name}
          </h3>
          
          {/* Elegant structural separation rule */}
          <div className="w-6 h-[1px] bg-[#D9A036] opacity-60 group-hover:w-12 transition-all duration-500 mb-3" />
          
          <p className="text-xs font-sans font-medium text-[#707A72] leading-relaxed tracking-wide group-hover:text-[#3E4A41] transition-colors duration-300">
                {flavor.subtitle}
              </p>
        </div>
      </div>

      {/* Button Module */}
      <div className="w-full pt-6 mt-6 border-t border-[#EFECE6] flex justify-center">
        <Link to="/shop" className="w-full bg-[#EFECE6] hover:bg-[#1C3B24] text-[#1C3B24] hover:text-white font-sans font-bold text-[10px] uppercase tracking-widest py-3 rounded-md flex items-center justify-center gap-2 transition-all duration-300 border border-[#D9D3C7]/60 hover:border-[#1C3B24]">
          <span>Discover Profile</span>
          <ArrowRight size={12} className="group-hover:translate-x-1.5 transition-transform duration-300" />
        </Link>
      </div>
    </motion.div>
  );
};

const FlavorsSection = () => {
  return (
    <section className="py-24 bg-[#EFECE6] relative overflow-hidden border-t border-b border-[#D9D3C7]">
      {/* Light Luxury Geometric Dot Mesh */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block Layout */}
        <div className="text-center mb-16 lg:mb-20 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles size={12} className="text-[#D9A036]" />
            <span className="text-[#D9A036] font-sans font-bold tracking-widest text-xs uppercase block">
              5 Artisan Profiles
            </span>
            <Sparkles size={12} className="text-[#D9A036]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#1C2B21] tracking-tight max-w-2xl leading-tight">
            Curated Formulations For Every Mood
          </h2>
          <div className="w-12 h-[2px] bg-[#1C3B24] mt-5"></div>
        </div>

        {/* Full-width Swiper Slider for all devices */}
        <div className="!-mr-6 md:!-mr-12">
          <Swiper
            modules={[Autoplay, Pagination, Mousewheel]}
            spaceBetween={16}
            slidesPerView={1.25}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            mousewheel={{ forceToAxis: true }}
            breakpoints={{
              480: { slidesPerView: 1.6 },
              640: { slidesPerView: 2.2 },
              768: { slidesPerView: 2.6 },
              1024: { slidesPerView: 3.5 },
              1280: { slidesPerView: 4 },
            }}
            className="pb-14 premium-flavor-swiper"
          >
            {flavors.map((flavor, index) => (
              <SwiperSlide key={flavor.id} className="h-full">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                >
                  <FlavorCard flavor={flavor} />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>

      {/* Tailored Swiper Dots Custom Layout */}
      <style dangerouslySetInnerHTML={{__html: `
        .premium-flavor-swiper .swiper-pagination-bullet {
          background: #1C3B24 !important;
          opacity: 0.15;
          width: 5px;
          height: 5px;
          transition: all 0.4s ease;
        }
        .premium-flavor-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          background: #D9A036 !important;
          width: 16px;
          border-radius: 4px;
        }
        .premium-flavor-swiper .swiper-pagination {
          bottom: 0px !important;
          text-align: center !important;
        }
      `}} />

    </section>
  );
};

export default FlavorsSection;