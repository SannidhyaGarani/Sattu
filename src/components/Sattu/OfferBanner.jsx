import React from 'react';
import { Leaf, Globe2, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const OfferBanner = () => {
  return (
    <section className="relative w-full py-12 md:py-20 bg-[#FAF9F6] overflow-hidden">
      {/* Subtle Grain Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#F5F3ED] rounded-[2.5rem] overflow-hidden shadow-sm">
          {/* Image Side */}
          <div className="relative min-h-[350px] lg:min-h-[500px] overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?q=80&w=1200&auto=format&fit=crop')`,
              }}
            />
            <div className="absolute inset-0 bg-black/5" />
          </div>

          {/* Content Side */}
          <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <div className="max-w-md">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#845E35] mb-4 block">
                The Nativa Promise
              </span>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-[#3D4A3E] leading-[1.1] tracking-tight mb-6">
                From Bihar's fields. <br />
                <span className="italic text-[#845E35]">To India's tables.</span>
              </h2>

              <p className="text-sm md:text-base text-[#3D4A3E]/70 font-light leading-relaxed mb-8">
                Nativa Organics was born from a simple belief: India's ancient foods — sattu, millets, heritage namkeen — deserve the same premium treatment as any global superfood.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-10">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[#F5F3ED] overflow-hidden bg-[#EFECE5]">
                      <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="Customer" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-xs font-bold text-[#3D4A3E]">12,000+ Happy Families</p>
                  <p className="text-[10px] text-[#3D4A3E]/40 uppercase tracking-widest mt-0.5">Trust Nativa Daily</p>
                </div>
              </div>

              <Link
                to="/shop"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[#3D4A3E] text-[#FAF9F6] rounded-xl hover:bg-[#2C362D] transition-all duration-300 shadow-xl shadow-[#3D4A3E]/10"
              >
                <span className="text-xs font-bold tracking-wider uppercase">Shop the Reserve</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Feature Icons Strip */}
        <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: <Leaf size={20} />, label: '100% Organic' },
            { icon: <Globe2 size={20} />, label: 'Ethical Sourcing' },
            { icon: <CheckCircle2 size={20} />, label: 'Lab Verified' },
            { icon: <ArrowRight size={20} />, label: 'Pan-India Shipping' },
          ].map((feature, idx) => (
            <div key={idx} className="flex items-center gap-3 justify-center md:justify-start">
              <div className="text-[#845E35]">
                {feature.icon}
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#3D4A3E]/60">
                {feature.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferBanner;
