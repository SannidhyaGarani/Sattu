import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Dumbbell, Sprout, Leaf, Snowflake, Utensils } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';

const benefits = [
  {
    title: "High in Protein",
    desc: "Builds strength naturally",
    icon: <Dumbbell size={28} strokeWidth={1.7} />,
  },
  {
    title: "Rich in Fiber",
    desc: "Supports digestion & gut health",
    icon: <Sprout size={28} strokeWidth={1.7} />,
  },
  {
    title: "100% Natural",
    desc: "No chemicals, no preservatives",
    icon: <Leaf size={28} strokeWidth={1.7} />,
  },
  {
    title: "Cooling Effect",
    desc: "Perfect for Indian climate",
    icon: <Snowflake size={28} strokeWidth={1.7} />,
  },
  {
    title: "Keeps You Full",
    desc: "Helps in weight management",
    icon: <Utensils size={28} strokeWidth={1.7} />,
  },
];

const BenefitsStrip = () => {
  return (
    <section className="py-16 bg-[#112517] text-white relative overflow-hidden border-y border-[#1C3B24]">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:22px_22px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-2xl font-serif font-bold tracking-wide text-[#EFECE6]">
            Goodness in Every Sip
          </h2>
        </div>

        {/* Desktop Grid Layout (Hidden on Mobile/Tablet) */}
        <div className="hidden md:grid grid-cols-5 gap-6 md:gap-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.6, ease: "easeOut" }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-14 h-14 rounded-full bg-[#D9A036]/20 flex items-center justify-center text-[#D9A036] mb-4 group-hover:scale-110 group-hover:bg-[#D9A036] group-hover:text-[#112517] transition-all duration-400">
                {benefit.icon}
              </div>
              <h3 className="text-sm font-serif font-semibold text-[#EFECE6] mb-1">
                {benefit.title}
              </h3>
              <p className="text-xs text-[#A3B8A8] leading-relaxed max-w-[120px]">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile & Tablet Slider Layout */}
        <div className="block md:hidden !-mr-6">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={16}
            slidesPerView={2}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            className="pb-10 premium-benefits-swiper"
          >
            {benefits.map((benefit) => (
              <SwiperSlide key={benefit.title} className="h-full">
                <div className="flex flex-col items-center text-center group">
                  <div className="w-14 h-14 rounded-full bg-[#D9A036]/20 flex items-center justify-center text-[#D9A036] mb-4 group-hover:scale-110 group-hover:bg-[#D9A036] group-hover:text-[#112517] transition-all duration-400">
                    {benefit.icon}
                  </div>
                  <h3 className="text-sm font-serif font-semibold text-[#EFECE6] mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-[11px] text-[#A3B8A8] leading-relaxed max-w-[120px]">
                    {benefit.desc}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .premium-benefits-swiper .swiper-pagination-bullet {
          background: #EFECE6 !important;
          opacity: 0.2;
          width: 5px;
          height: 5px;
        }
        .premium-benefits-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          background: #D9A036 !important;
          width: 16px;
          border-radius: 4px;
        }
        .premium-benefits-swiper .swiper-pagination {
          bottom: 0px !important;
          text-align: center !important;
        }
      `}} />
      
    </section>
  );
};

export default BenefitsStrip;
