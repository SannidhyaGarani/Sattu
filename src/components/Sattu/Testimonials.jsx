import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight, ArrowLeft } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    num: "01",
    name: "Aanya Sharma",
    role: "Wellness Coach",
    quote: "The stone-ground sattu is an absolute game changer for my morning routine. You can genuinely taste the authenticity and purity in every single sip.",
  },
  {
    id: 2,
    num: "02",
    name: "Vikram Malhotra",
    role: "Culinary Consultant",
    quote: "Finding clean ingredients with true farm-to-pack traceability is rare. Nativa delivers unmatched heritage flavors without a single artificial additive.",
  },
  {
    id: 3,
    num: "03",
    name: "Priya Patel",
    role: "Fitness Enthusiast",
    quote: "Their clean protein options have replaced all my synthetic supplements. Lab-tested purity that actually leaves you feeling energized and lighter.",
  },
  {
    id: 4,
    num: "04",
    name: "Rohan Das",
    role: "Organic Advocate",
    quote: "Exceptional quality control. It is rare to see premium packaging back up a product that feels this fundamentally raw, pure, and close to nature.",
  }
];

const PremiumTestimonials = () => {
  const scrollRef = useRef(null);

  // Smooth scroll handler for buttons on desktop
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth * 0.4 
        : scrollLeft + clientWidth * 0.4;
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full py-12 md:py-20 bg-[#FAF9F6] overflow-hidden">
      {/* Premium Grain Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* Section Header Matching CategoriesSection */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10 md:mb-14">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-[10px] font-bold tracking-[0.25em] uppercase text-[#845E35] mb-4"
            >
              Real Impact
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-serif font-normal text-[#3D4A3E] tracking-tight leading-[1.1]"
            >
              Voices of our <span className="italic">community</span>.
            </motion.h2>
          </div>
          
          {/* Custom Minimalist Slide Navigators - Hidden on Mobile */}
          <div className="hidden lg:flex items-center gap-3">
            <button 
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-[#3D4A3E]/10 flex items-center justify-center text-[#3D4A3E] hover:border-[#3D4A3E] transition-all duration-300"
            >
              <ArrowLeft size={16} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-[#3D4A3E]/10 flex items-center justify-center text-[#3D4A3E] hover:bg-[#3D4A3E] hover:text-[#FAF9F6] transition-all duration-300"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Dynamic Row: Draggable/Scrollable Grid Track */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto lg:overflow-x-hidden scrollbar-none snap-x snap-mandatory lg:snap-none cursor-grab active:cursor-grabbing pb-8"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              className="min-w-[85%] sm:min-w-[45%] lg:min-w-[32%] xl:min-w-[28%] bg-white/40 backdrop-blur-sm border border-[#3D4A3E]/10 rounded-2xl p-8 flex flex-col justify-between snap-center group hover:bg-white/90 hover:border-[#3D4A3E]/30 transition-all duration-500 hover:shadow-[0_20px_40px_-20px_rgba(61,74,62,0.06)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div>
                {/* Micro Meta Information Topline */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-0.5 text-[#845E35]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={11} fill="currentColor" stroke="none" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-[#3D4A3E]/30 group-hover:text-[#845E35] transition-colors duration-500">
                    {t.num}
                  </span>
                </div>

                {/* Main Premium Quote Text */}
                <p className="text-base font-serif text-[#3D4A3E] leading-relaxed mb-8">
                  “{t.quote}”
                </p>
              </div>

              {/* Bottom Profile Anchor */}
              <div className="border-t border-dashed border-[#3D4A3E]/10 pt-4 flex flex-col items-start mt-auto">
                <span className="text-xs font-medium text-[#3D4A3E] uppercase tracking-wider">
                  {t.name}
                </span>
                <span className="text-[11px] text-[#3D4A3E]/50 font-light mt-0.5">
                  {t.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Swipe Hint indicator - Visible only on Touch Panels */}
        <div className="mt-4 flex justify-center lg:hidden">
          <div className="flex gap-1 items-center opacity-40">
            <span className="text-[9px] font-bold uppercase tracking-widest text-[#3D4A3E]">Swipe to explore</span>
            <ArrowRight size={10} className="animate-pulse" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default PremiumTestimonials;