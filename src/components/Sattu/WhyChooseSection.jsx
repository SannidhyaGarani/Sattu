import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Sprout, Zap, Flame, Sparkles, ShieldCheck } from 'lucide-react';

const features = [
  {
    id: 1,
    title: "No Artificial Flavours",
    description: "Only real, natural ingredients",
    icon: <Leaf size={28} strokeWidth={1.8} />,
  },
  {
    id: 2,
    title: "Plant Based Protein",
    description: "Keeps you full & energized",
    icon: <Sprout size={28} strokeWidth={1.8} />,
  },
  {
    id: 3,
    title: "Easy to Digest",
    description: "Gentle on your stomach",
    icon: <Zap size={28} strokeWidth={1.8} />,
  },
  {
    id: 4,
    title: "Sustained Energy",
    description: "No crashes, just pure fuel",
    icon: <Flame size={28} strokeWidth={1.8} />,
  },
  {
    id: 5,
    title: "Traditional Superfood",
    description: "Backed by centuries of wisdom",
    icon: <Sparkles size={28} strokeWidth={1.8} />,
  },
  {
    id: 6,
    title: "Clean & Pure",
    description: "No preservatives, no chemicals",
    icon: <ShieldCheck size={28} strokeWidth={1.8} />,
  }
];

const WhyChooseSection = () => {
  return (
    <section className="py-24 bg-[#1C3B24] text-[#EFECE6] relative overflow-hidden border-t border-b border-[#112517]">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#D9A036] font-sans font-bold tracking-widest text-xs uppercase block mb-3">
            Pure Benefits
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Why Choose Sattu Sattu?
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="bg-[#112517]/70 backdrop-blur-sm rounded-2xl p-7 text-center border border-[#2A4D33] shadow-md transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-full bg-[#D9A036]/20 flex items-center justify-center text-[#D9A036] mx-auto mb-5 group-hover:bg-[#D9A036] group-hover:text-[#1C3B24] transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-serif font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-[#A3B8A8]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
