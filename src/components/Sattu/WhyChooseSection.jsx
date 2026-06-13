import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck, SunMedium, FlaskConical, Sprout, Leaf, ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const principles = [
  {
    num: '01',
    icon: <BadgeCheck size={20} strokeWidth={1.2} />,
    title: 'Certified Organic',
    desc: 'Every product is certified organic with full farm-to-pack traceability and zero pesticide residue.',
  },
  {
    num: '02',
    icon: <SunMedium size={20} strokeWidth={1.2} />,
    title: 'Traditional Methods',
    desc: 'Stone-ground, sun-dried, and slow-roasted using time-honoured techniques passed down generations.',
  },
  {
    num: '03',
    icon: <FlaskConical size={20} strokeWidth={1.2} />,
    title: 'Lab-Tested Purity',
    desc: 'Batch-tested for nutritional integrity, heavy metals, and microbial safety before every dispatch.',
  },
  {
    num: '04',
    icon: <Sprout size={20} strokeWidth={1.2} />,
    title: 'Regenerative Farms',
    desc: 'Sourced from partner farms practising soil restoration, fair trade, and chemical-free cultivation.',
  },
  {
    num: '05',
    icon: <Leaf size={20} strokeWidth={1.2} />,
    title: 'Clean Ingredients',
    desc: 'No artificial colours, flavours, preservatives, or hidden fillers — just honest, whole food.',
  },
];

const WhyChooseUs = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  return (
    <section className="relative w-full py-12 md:py-20 bg-[#FAF9F6] overflow-hidden">
      {/* Premium Grain Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="max-w-[1600px] mx-auto w-full px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* Section Header Matching CategoriesSection */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10 md:mb-14">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-[10px] font-bold tracking-[0.25em] uppercase text-[#845E35] mb-4"
            >
              The Nativa Standard
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-[#3D4A3E] tracking-tight leading-[1.1]"
            >
              Why <span className="italic">choose</span> <br className="hidden md:block" />
              our products?
            </motion.h2>
          </div>
        </div>

        {/* Swiper Slider */}
        <div className="-mr-6 md:-mr-12 lg:mr-0">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1.2}
            pagination={{ clickable: true, el: '.why-choose-pagination' }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3.2, spaceBetween: 24 },
              1280: { slidesPerView: 4.2, spaceBetween: 30 },
              1536: { slidesPerView: 5, spaceBetween: 30 }
            }}
            className="pb-16"
          >
            {principles.map((principle) => (
              <SwiperSlide key={principle.num} className="h-auto">
                <motion.div 
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="group bg-white border border-[#3D4A3E]/10 hover:border-[#3D4A3E]/40 p-8 rounded-2xl flex flex-col justify-between h-full transition-all duration-500 ease-out hover:shadow-[0_12px_40px_-10px_rgba(61,74,62,0.1)] cursor-default"
                >
                  <div>
                    {/* Top Header Row within Card */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-10 h-10 rounded-xl bg-[#3D4A3E]/5 text-[#3D4A3E] flex items-center justify-center group-hover:bg-[#3D4A3E] group-hover:text-[#FAF9F6] transition-all duration-500">
                        {principle.icon}
                      </div>
                      <span className="text-[10px] font-bold tracking-wider text-[#845E35]/50 group-hover:text-[#845E35] transition-colors duration-500">
                        {principle.num}
                      </span>
                    </div>

                    {/* Card Title */}
                    <h3 className="text-xl font-serif text-[#3D4A3E] tracking-tight mb-4 transition-colors duration-500 group-hover:text-[#845E35]">
                      {principle.title}
                    </h3>
                  </div>

                  {/* Card Description */}
                  <p className="text-sm text-[#3D4A3E]/60 font-light leading-relaxed pt-6 border-t border-dashed border-[#3D4A3E]/10 group-hover:border-[#3D4A3E]/20 transition-colors duration-500">
                    {principle.desc}
                  </p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Pagination Container */}
          <div className="why-choose-pagination flex justify-center !w-full mt-4" />
        </div>

      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .why-choose-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #3D4A3E;
          opacity: 0.2;
          transition: all 0.3s ease;
        }
        .why-choose-pagination .swiper-pagination-bullet-active {
          width: 24px;
          border-radius: 4px;
          opacity: 1;
        }
      `}} />
    </section>
  );
};

export default WhyChooseUs;