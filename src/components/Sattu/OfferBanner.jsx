import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, ArrowRight } from 'lucide-react';

const OfferBanner = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden relative min-h-[400px] flex items-center bg-[#E6DDC4]/40">
        <div className="container mx-auto px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 relative z-10 py-12">
          
          {/* Content */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start gap-4">
            <span className="text-[#333333] text-xs font-bold uppercase tracking-[0.2em]">Limited Time Offer</span>
            
            <h2 className="text-5xl md:text-6xl font-bold text-[#333333] leading-tight">
              BUY 2 GET <span className="text-[#4A5D4E]">1 FREE</span>
            </h2>
            
            <p className="text-[#666666] text-sm font-medium">
              Hurry! Offer valid on all flavours.
            </p>
            
            <button className="mt-4 px-8 py-4 bg-[#4A5D4E] text-white rounded-md font-bold hover:bg-[#3D4D40] transition-all flex items-center gap-2 group uppercase tracking-widest text-xs">
              Grab The Offer <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Product Images */}
          <div className="relative h-[300px] flex justify-center items-center">
             <div className="flex items-end gap-2 relative">
                <motion.img 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  src="https://images.unsplash.com/photo-1594488651083-023b857dc3f8?q=80&w=400&auto=format&fit=crop" 
                  className="w-24 md:w-32 drop-shadow-lg" 
                  alt="Jar 1"
                />
                <motion.img 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  src="https://images.unsplash.com/photo-1594488651083-023b857dc3f8?q=80&w=400&auto=format&fit=crop" 
                  className="w-28 md:w-36 drop-shadow-xl z-10 -mx-4" 
                  alt="Jar 2"
                />
                <motion.img 
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  src="https://images.unsplash.com/photo-1594488651083-023b857dc3f8?q=80&w=400&auto=format&fit=crop" 
                  className="w-24 md:w-32 drop-shadow-lg" 
                  alt="Jar 3"
                />
                <motion.img 
                  src="https://images.unsplash.com/photo-1556767576-5ec41e3239ea?q=80&w=400&auto=format&fit=crop" 
                  className="w-20 md:w-24 rounded-2xl drop-shadow-lg absolute -right-10 bottom-0" 
                  alt="Glass"
                />
             </div>

             {/* Best Deal Stamp */}
             <div className="absolute top-0 right-0 md:-right-10 w-20 h-20 bg-[#E91E63] text-white rounded-full flex flex-col items-center justify-center rotate-12 border-4 border-white shadow-lg">
                <span className="text-[10px] font-bold uppercase leading-none">Best</span>
                <span className="text-sm font-black uppercase leading-none">Deal</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferBanner;
