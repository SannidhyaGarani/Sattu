import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Leaf } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';

const steps = [
  {
    number: "01",
    title: "Add 2-3 tbsp Sattu Mix",
    subtitle: "Pure traditional roast",
    image: "img/ss.png"   
  },
  {
    number: "02",
    title: "Add 200ml of water or milk",
    subtitle: "Chilled or room temp",
    image: "img/s11.png"
  },
  {
    number: "03",
    title: "Stir well until smooth",
    subtitle: "No lumps, perfect blend",
    image: "https://images.unsplash.com/photo-1556767576-5ec41e3239ea?q=80&w=400&auto=format&fit=crop"
  },
  {
    number: "04",
    title: "Enjoy your healthy Sattu Drink!",
    subtitle: "Real nutrition unlocked",
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?q=80&w=400&auto=format&fit=crop"
  }
];

const HowToMake = () => {
  return (
    <section className="py-24 bg-[#EFECE6] relative overflow-hidden border-t border-b border-[#D9D3C7]">
      {/* Subtle Premium Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20 flex flex-col items-center">
          <span className="text-[#D9A036] font-sans font-bold tracking-widest text-sm uppercase mb-3 block">
              Simple Preparation
            </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#1C2B21] tracking-tight relative pb-4">
            How to Make Sattu Drink
          </h2>
          <div className="w-16 h-[2px] bg-[#D9A036] mt-2"></div>
        </div>

        {/* Desktop Grid Layout (Hidden on Mobile/Tablet) */}
        <div className="hidden lg:grid grid-cols-4 gap-8 relative">
          
          {/* Connecting Premium Line (Desktop only) */}
          <div className="absolute top-24 left-0 w-full h-[1px] hidden lg:block px-32">
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full h-full border-b border-dashed border-[#1C3B24]/20 origin-left"
            />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8, ease: "easeOut" }}
              className="relative flex flex-col items-center group w-full text-center transition-all duration-300"
            >
              {/* Image Frame Wrapper */}
              <div className="relative mb-6">
                
                {/* Premium Double Ring Frame */}
                <div className="w-48 h-48 rounded-full border-2 border-[#D9D3C7] p-2 flex items-center justify-center bg-white/50 backdrop-blur-sm transition-all duration-500 group-hover:border-[#D9A036] group-hover:scale-105 shadow-md">
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    {/* Darkening image tint filter */}
                    <div className="absolute inset-0 bg-amber-950/10 mix-blend-multiply"></div>
                  </div>
                </div>

                {/* Number Badge */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.15, type: "spring", stiffness: 120 }}
                  className="absolute top-0 left-0 w-12 h-12 bg-[#1C3B24] text-[#D9A036] text-base font-serif font-bold rounded-full flex items-center justify-center border-2 border-[#EFECE6] shadow-md group-hover:bg-[#112517] transition-colors duration-300"
                >
                  {step.number}
                </motion.div>
              </div>
              
              {/* Text Meta */}
              <h3 className="font-serif text-lg font-bold text-[#1C2B21] leading-snug mb-1 px-2 group-hover:text-[#1C3B24] transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-sm font-sans tracking-wide text-[#707A72]">
                {step.subtitle}
              </p>

            </motion.div>
          ))}
        </div>

        {/* Mobile & Tablet Slider Layout */}
        <div className="block lg:hidden !-mr-6 md:!-mr-12">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1.2}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            breakpoints={{
              480: { slidesPerView: 1.5 },
              640: { slidesPerView: 2 },
            }}
            className="pb-12 premium-htw-swiper"
          >
            {steps.map((step, index) => (
              <SwiperSlide key={step.number} className="h-full">
                <div className="relative flex flex-col items-center group w-full text-center transition-all duration-300">
                  {/* Image Frame Wrapper */}
                  <div className="relative mb-6">
                    
                    {/* Premium Double Ring Frame */}
                    <div className="w-48 h-48 rounded-full border-2 border-[#D9D3C7] p-2 flex items-center justify-center bg-white/50 backdrop-blur-sm transition-all duration-500 group-hover:border-[#D9A036] group-hover:scale-105 shadow-md">
                      <div className="w-full h-full rounded-full overflow-hidden relative">
                        <img 
                          src={step.image} 
                          alt={step.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                        />
                        {/* Darkening image tint filter */}
                        <div className="absolute inset-0 bg-amber-950/10 mix-blend-multiply"></div>
                      </div>
                    </div>

                    {/* Number Badge */}
                    <div className="absolute top-0 left-0 w-12 h-12 bg-[#1C3B24] text-[#D9A036] text-base font-serif font-bold rounded-full flex items-center justify-center border-2 border-[#EFECE6] shadow-md group-hover:bg-[#112517] transition-colors duration-300">
                      {step.number}
                    </div>
                  </div>
                  
                  {/* Text Meta */}
                  <h3 className="font-serif text-lg font-bold text-[#1C2B21] leading-snug mb-1 px-2">
                    {step.title}
                  </h3>
                  <p className="text-xs font-sans tracking-wide text-[#707A72]">
                    {step.subtitle}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .premium-htw-swiper .swiper-pagination-bullet {
          background: #1C3B24 !important;
          opacity: 0.15;
          width: 5px;
          height: 5px;
        }
        .premium-htw-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          background: #D9A036 !important;
          width: 16px;
          border-radius: 4px;
        }
        .premium-htw-swiper .swiper-pagination {
          bottom: 0px !important;
          text-align: center !important;
        }
      `}} />

      {/* Decorative Traditional Assets */}
      <div className="absolute left-8 bottom-12 opacity-15 rotate-45 hidden lg:block text-[#1C3B24]">
        <Leaf size={56} strokeWidth={1.5} />
      </div>
      <div className="absolute right-12 top-1/3 opacity-15 -rotate-12 hidden lg:block text-[#1C3B24]">
        <Leaf size={44} strokeWidth={1.5} />
      </div>
    </section>
  );
};

export default HowToMake;