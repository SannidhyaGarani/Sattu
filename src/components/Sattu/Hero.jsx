import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [activeColumn, setActiveColumn] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  const foodPillars = [
    { id: 'sattu', tag: 'Signature Sattu', title: 'Roasted Bengal Gram', img: 'https://t3.ftcdn.net/jpg/02/53/70/56/240_F_253705603_TVllAvPDXbBIiPEmUE2lxGwRWJKufmKy.jpg' },
    { id: 'dry-fruits', tag: 'Dry Fruits', title: 'Premium Handpicked', img: 'https://images.unsplash.com/photo-1581600140682-d4e68c8cde32?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BpY2VzfGVufDB8fDB8fHww' },
    { id: 'namkeen', tag: 'Namkeen & Snacks', title: 'Heritage Recipes', img: 'https://t3.ftcdn.net/jpg/06/82/78/40/240_F_682784003_g5qEtNY0UYKBkMrPHEzCCbN4EHh7pzTW.jpg' },
  ];

  const stats = [
    { value: '100%', label: 'Organic' },
    { value: '0%', label: 'Preservatives' },
    { value: '20g+', label: 'Protein' },
    { value: '100%', label: 'Homemade' },
  ];

  return (
    <section className="relative w-full min-h-screen bg-[#FAF9F6] flex flex-col justify-center overflow-hidden pt-36 pb-16 lg:pt-44 lg:pb-20">
      {/* Premium Grain Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="max-w-[1600px] mx-auto w-full px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center relative z-10">
        
        {/* Left Column - Editorial Content */}
        <motion.div 
          className="lg:col-span-6 flex flex-col justify-center order-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Over-title Tag */}
          <motion.div variants={textVariants} className="flex items-center gap-3 mb-4">
            <div className="w-6 h-[1px] bg-[#3D4A3E]/40" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#3D4A3E]/60">
              100% Organic
            </span>
          </motion.div>
          
          {/* Primary Editorial Header Block */}
          <motion.h1 
            variants={textVariants}
            className="text-[2.75rem] sm:text-[4rem] lg:text-[4.5rem] leading-[1.05] font-serif font-normal text-[#3D4A3E] tracking-tight"
          >
            Clean Ingredients. <br />
            Real Results.
          </motion.h1>

          {/* Description Paragraph */}
          <motion.p 
            variants={textVariants}
            className="text-base sm:text-lg text-[#3D4A3E]/70 font-light max-w-md mt-6 mb-10 leading-relaxed"
          >
            Wholesome Sattu Drinks, Healthy Seeds & Homemade Foods for a healthier you.
          </motion.p>

          {/* Action Buttons Row */}
          <motion.div 
            variants={textVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10 sm:mb-14"
          >
            <Link 
              to="/shop" 
              className="group flex justify-center items-center gap-3 px-8 py-4 bg-[#3D4A3E] text-[#FAF9F6] font-medium text-xs tracking-wider uppercase rounded transition-all duration-500 hover:bg-[#2C362D] hover:shadow-lg hover:shadow-[#3D4A3E]/20"
            >
              Shop Now
              <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-500" />
            </Link>

            <Link 
              to="/about" 
              className="flex justify-center items-center px-8 py-4 bg-transparent border border-[#3D4A3E]/20 text-[#3D4A3E] font-medium text-xs tracking-wider uppercase rounded transition-all duration-500 hover:border-[#3D4A3E] hover:bg-[#3D4A3E]/5"
            >
              Know More
            </Link>
          </motion.div>

          {/* Bottom Trust Metrics Grid */}
          <motion.div 
            variants={textVariants}
            className="flex flex-wrap w-full max-w-xl border-t border-[#3D4A3E]/10 pt-8"
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="w-1/2 md:w-1/4 flex flex-col mb-6 md:mb-0 relative">
                <div className="pr-4">
                  <p className="text-2xl lg:text-3xl font-serif font-normal text-[#3D4A3E] leading-none mb-1.5">
                    {stat.value}
                  </p>
                  <p className="text-[9px] text-[#3D4A3E]/50 font-bold uppercase tracking-[0.2em]">
                    {stat.label}
                  </p>
                </div>
                {/* Clean responsive dividers */}
                {idx !== 3 && (
                  <div className={`absolute right-0 top-1 h-10 w-[1px] bg-[#3D4A3E]/10 ${idx === 1 ? 'hidden md:block' : ''}`} />
                )}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column - Premium Image Layout (Swipe on Mobile, Accordion on Desktop) */}
        <div className="lg:col-span-6 order-2 w-full mt-8 lg:mt-0">
          <div className="flex flex-row gap-4 overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:snap-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full h-[42vh] sm:h-[50vh] lg:h-[70vh]">
            {foodPillars.map((pillar, index) => (
              <motion.div
                key={pillar.id}
                onMouseEnter={() => setActiveColumn(index)}
                onMouseLeave={() => setActiveColumn(null)}
                className={`relative overflow-hidden rounded-[1.5rem] lg:rounded-[2rem] snap-center shrink-0 lg:shrink w-[75vw] sm:w-[45vw] lg:w-auto h-full cursor-pointer transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  activeColumn === index ? 'lg:flex-[2.5]' : 'lg:flex-1'
                }`}
              >
                <img 
                  src={pillar.img} 
                  className="absolute inset-0 w-full h-full object-cover grayscale-[0.1] transition-transform duration-[2000ms] lg:hover:scale-110" 
                  alt={pillar.title} 
                />
                
                {/* Luxury Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-[#1A1A1A]/20 to-transparent" />
                
                <div className="absolute bottom-8 left-6 right-6 lg:left-8 lg:right-8">
                  <span className="block text-[9px] font-bold tracking-[0.3em] uppercase text-[#FAF9F6]/70 mb-2">
                    {pillar.tag}
                  </span>
                  <h3 className="text-[#FAF9F6] text-lg lg:text-2xl font-serif font-light tracking-wide leading-tight">
                    {pillar.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Subtle Swipe Indicator for Mobile */}
          <div className="flex lg:hidden justify-center items-center gap-2 mt-2 opacity-50">
            <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#3D4A3E]">Swipe to explore</span>
            <ArrowRight size={10} className="text-[#3D4A3E]" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;