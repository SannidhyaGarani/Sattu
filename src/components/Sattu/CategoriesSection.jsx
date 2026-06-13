import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const categoriesData = [
  {
    id: 'sattu',
    title: 'Signature Sattu',
    count: '8 Products',
    desc: 'Stone-ground, roasted Bengal gram prepared using generational techniques.',
    img: 'https://t3.ftcdn.net/jpg/06/82/78/40/240_F_682784003_g5qEtNY0UYKBkMrPHEzCCbN4EHh7pzTW.jpg',
  },
  {
    id: 'seeds',
    title: 'Healthy Seeds',
    count: '12 Products',
    desc: 'Nutrient-dense organic seeds to elevate your daily wellness routine.',
    img: 'https://images.unsplash.com/photo-1601875106130-32cf7cd3c713?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2VlZCUyMGZvb2R8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 'dry-fruits',
    title: 'Premium Dry Fruits',
    count: '15 Products',
    desc: 'Handpicked, sun-dried nuts and fruits sourced from elite Indian farms.',
    img: 'https://images.unsplash.com/photo-1579282940319-c483172dd0f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZHJ5ZnJ1aXRzfGVufDB8fDB8fHww',
  },
  {
    id: 'namkeen',
    title: 'Heritage Namkeen',
    count: '24 Products',
    desc: 'Authentic savory snacks roasted in cold-pressed oils without preservatives.',
    img: 'https://plus.unsplash.com/premium_photo-1726676075271-d08aef815d79?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNuYWNrc3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 'oils',
    title: 'Natural Oils',
    count: '6 Products',
    desc: 'Pure, cold-pressed oils extracted using traditional wood-pressing methods.',
    img: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG9pbHxlbnwwfHwwfHx8MA%3D%3D',
  },
];

const CategorySection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  return (
    <section className="relative w-full py-12 md:py-20 bg-[#FAF9F6] overflow-hidden">
      {/* Subtle Grain Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10 md:mb-14">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-[10px] font-bold tracking-[0.25em] uppercase text-[#3D4A3E]/60 mb-4"
            >
              Curated Collections
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-[#3D4A3E] tracking-tight leading-[1.1]"
            >
              Discover our <span className="italic">wholesome</span> <br className="hidden md:block" />
              categories.
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link 
              to="/categories" 
              className="group inline-flex items-center gap-3 text-[#3D4A3E] border-b border-[#3D4A3E]/30 pb-1 hover:border-[#3D4A3E] transition-colors"
            >
              <span className="text-xs font-bold uppercase tracking-wider">View All Categories</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Categories Slider */}
        <div className="-mr-6 md:-mr-12 lg:mr-0">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1.2}
            pagination={{ clickable: true, el: '.categories-pagination' }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
              1280: { slidesPerView: 5, spaceBetween: 24 }
            }}
            className="pb-16"
          >
            {categoriesData.map((category) => (
              <SwiperSlide key={category.id}>
                <motion.div 
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="group cursor-pointer flex flex-col h-full"
                  onClick={() => window.location.href = `/shop?category=${category.id}`}
                >
                  {/* Image Container with Luxury Aspect Ratio */}
                  <div className="relative w-full aspect-[4/5] rounded-[1.5rem] overflow-hidden mb-6 bg-[#EFECE5]">
                    <img 
                      src={category.img} 
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                    />
                    
                    {/* Product Count Badge */}
                    <div className="absolute top-5 left-5 bg-[#FAF9F6] px-3 py-1.5 rounded-full z-20 shadow-sm">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-[#3D4A3E]">
                        {category.count}
                      </span>
                    </div>

                    {/* Dark Gradient Overlay for hover effect */}
                    <div className="absolute inset-0 bg-[#3D4A3E]/10 group-hover:bg-transparent transition-colors duration-700 z-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                    {/* Hover Arrow Icon */}
                    <div className="absolute bottom-5 right-5 w-12 h-12 bg-[#FAF9F6] rounded-full flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20 shadow-lg">
                      <ArrowUpRight size={20} className="text-[#3D4A3E]" />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col flex-grow px-2">
                    <h3 className="text-2xl font-serif text-[#3D4A3E] mb-3 group-hover:text-[#845E35] transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-sm text-[#3D4A3E]/60 leading-relaxed font-light">
                      {category.desc}
                    </p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Pagination Container */}
          <div className="categories-pagination flex justify-center !w-full mt-4" />
        </div>

      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .categories-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #3D4A3E;
          opacity: 0.2;
          transition: all 0.3s ease;
        }
        .categories-pagination .swiper-pagination-bullet-active {
          width: 24px;
          border-radius: 4px;
          opacity: 1;
        }
      `}} />

    </section>
  );
};

export default CategorySection;