import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Dumbbell, ArrowRight, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: [0.215, 0.610, 0.355, 1] }
    }
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-[#F3ECE1] pt-32 md:pt-40 pb-16 px-6 md:px-12 lg:px-24 overflow-hidden select-none">
      
      {/* ================= PREMIUM BACKGROUND LAYER ================= */}
      {/* Dynamically utilizes the minimalist layout matching the generated asset */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-95 mix-blend-normal pointer-events-none"
        style={{ 
          backgroundImage: `url('img/sattu1.png')`, // Fallback high-res organic paper base texture
        }}
      >
        {/* Soft layout overlay gradient to ensure clean, readable text positioning on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F3ECE1]/70 via-[#F3ECE1]/30 to-transparent w-1/2" />
      </div>

      {/* Embedded Render of the generated right-aligned background asset layout */}
     

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* ================= LEFT COLUMN: HERO CONTENT ================= */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:col-span-7 flex flex-col justify-center text-[#2D231D]"
        >
          {/* Main Typographic Headline */}
          <motion.h1 
            variants={itemVariants} 
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.08] text-[#2C241E]"
          >
            Fuel Your Day.<br />
            The <span className="text-[#415345] font-serif italic font-normal tracking-wide relative inline-block">
              Natural
              <svg className="absolute -bottom-2 left-0 w-full h-2 text-[#415345]/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,5 Q50,10 100,5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </span> Way.
          </motion.h1>

          {/* Premium Subtitle Description */}
          <motion.p 
            variants={itemVariants} 
            className="mt-8 text-base sm:text-lg text-[#5A5047] max-w-lg font-medium leading-relaxed"
          >
            Instant Sattu Mix made with 100% natural ingredients for clean energy, strength & better you.
          </motion.p>

          {/* Feature Badges Grid */}
          <motion.div 
            variants={itemVariants} 
            className="grid grid-cols-3 gap-4 max-w-xl mt-10 pt-8 border-t border-[#DECFC0]"
          >
            {/* Badge 1 */}
            <div className="flex flex-col items-start gap-2.5">
              <div className="w-10 h-10 rounded-full bg-[#E5DBD0] flex items-center justify-center text-[#3B4A3D] shadow-sm">
                <Zap size={18} strokeWidth={2.5} />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#2C241E]">Clean Energy</span>
            </div>

            {/* Badge 2 */}
            <div className="flex flex-col items-start gap-2.5">
              <div className="w-10 h-10 rounded-full bg-[#E5DBD0] flex items-center justify-center text-[#3B4A3D] shadow-sm">
                <Dumbbell size={18} strokeWidth={2.5} />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#2C241E]">Builds Strength</span>
            </div>

            {/* Badge 3 */}
            <div className="flex flex-col items-start gap-2.5">
              <div className="w-10 h-10 rounded-full bg-[#E5DBD0] flex items-center justify-center text-[#3B4A3D] shadow-sm">
                <span className="text-lg">🫁</span>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#2C241E]">Aids Digestion</span>
            </div>
          </motion.div>

          {/* Call To Actions */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6 mt-10">
            <Link to="/shop" className="px-9 py-4 bg-[#3B4A3D] text-[#FAF8F5] rounded-xl font-bold hover:bg-[#2D382E] transition-all duration-300 flex items-center gap-3 group tracking-wider text-xs uppercase shadow-lg shadow-[#3B4A3D]/15">
              SHOP NOW <ArrowRight size={15} className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
            <Link to="/shop" className="px-7 py-4 bg-transparent text-[#2C241E] font-bold hover:bg-black/5 rounded-xl transition-all duration-300 tracking-wider text-xs uppercase border border-[#2C241E]/20">
              EXPLORE FLAVOURS
            </Link>
          </motion.div>
        </motion.div>

        {/* ================= RIGHT COLUMN: INTERACTIVE PREMIUM JAR ================= */}
        <div className="lg:col-span-5 relative w-full h-[520px] md:h-[600px] flex items-center justify-center mt-12 lg:mt-0">
          
          {/* Main Foreground Component: Premium Elaichi Sattu Jar */}
          <motion.div 
            initial={{ opacity: 0, y: 35, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: 4 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-20 w-[260px] sm:w-[300px] md:w-[320px] transform origin-bottom filter drop-shadow-[20px_30px_25px_rgba(44,36,30,0.25)] hover:rotate-[2deg] transition-transform duration-700 ease-out"
          >
            {/* The Physical Jar Render Structure */}
            
          </motion.div>

          {/* Floating Pure Nutrition Stamp Overlay */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-4 right-4 md:right-8 z-30 w-28 h-28 rounded-full border border-[#2C241E]/15 bg-[#F3ECE1]/50 backdrop-blur-[3px] flex items-center justify-center p-1.5 pointer-events-none"
          >
            <div className="w-full h-full rounded-full border border-dashed border-[#2C241E]/25 flex flex-col items-center justify-center text-center">
              <span className="text-[6.5px] font-bold uppercase tracking-[0.15em] text-[#61564D]">Real Ingredients</span>
              <span className="text-xs font-black text-[#29221D] tracking-tight my-0.5 uppercase leading-none">Pure<br />Nutrition</span>
              <span className="text-[6.5px] font-bold uppercase tracking-[0.15em] text-[#61564D]">Real Results</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Hero;