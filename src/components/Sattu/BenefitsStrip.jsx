import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Sprout, Leaf, Snowflake, Utensils } from 'lucide-react';

const benefits = [
  {
    title: "High in Protein",
    desc: "Builds strength naturally",
    icon: <Dumbbell size={24} strokeWidth={2} />,
  },
  {
    title: "Rich in Fiber",
    desc: "Supports digestion & gut health",
    icon: <Sprout size={24} strokeWidth={2} />,
  },
  {
    title: "100% Natural",
    desc: "No chemicals, no preservatives",
    icon: <Leaf size={24} strokeWidth={2} />,
  },
  {
    title: "Cooling Effect",
    desc: "Perfect for Indian climate",
    icon: <Snowflake size={24} strokeWidth={2} />,
  },
  {
    title: "Keeps You Full",
    desc: "Helps in weight management",
    icon: <Utensils size={24} strokeWidth={2} />,
  },
];

const BenefitsStrip = () => {
  return (
    <section className="py-16 bg-[#1C3B24] text-[#FDF8F1] relative overflow-hidden border-y-[4px] border-[#8B7355]">
      {/* Tactile traditional fiber pattern backdrop */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1.5px,transparent_1.5px)] [background-size:28px_28px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Section Header with Stamped Style Accent */}
        <div className="text-center mb-12 flex flex-col items-center">
          <span className="text-[#D9A036] font-sans font-bold tracking-[0.2em] text-xs uppercase mb-2 block">
            Pure Wellness
          </span>
          <h2 className="text-2xl md:text-3xl font-serif font-bold tracking-tight text-[#FDF6E9]">
            Goodness in Every Sip
          </h2>
          <div className="w-16 h-[2px] bg-[#D9A036] mt-3"></div>
        </div>

        {/* Responsive Layout Grid (Scrollable on Mobile, Locked Grid on Desktop) */}
        <div className="flex overflow-x-auto md:overflow-x-visible md:grid md:grid-cols-5 gap-4 pb-6 md:pb-0 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -4, borderColor: '#D9A036' }}
              className="min-w-[170px] sm:min-w-[200px] md:min-w-0 flex-shrink-0 snap-center bg-[#FDF6E9] p-5 border-2 border-[#5C4033] rounded-sm shadow-[6px_6px_0px_0px_rgba(139,115,85,0.3)] flex flex-col items-center text-center transition-all duration-300 group"
            >
              {/* Handcrafted Icon Block Frame */}
              <div className="w-12 h-12 rounded-md bg-[#1C3B24] border border-[#5C4033] flex items-center justify-center text-[#D9A036] mb-4 group-hover:bg-[#D9A036] group-hover:text-[#1C3B24] transition-all duration-400 shadow-md">
                {benefit.icon}
              </div>
              
              {/* Feature Text Info */}
              <h3 className="text-sm font-serif font-bold text-[#1C3B24] tracking-tight mb-1">
                {benefit.title}
              </h3>
              
              <p className="text-[11px] font-sans font-medium text-[#61564D] leading-relaxed max-w-[140px] mt-1">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </div>
        
      </div>

      {/* Global CSS Inject to safely handle native cross-browser scrollbar hiding */}
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
      
    </section>
  );
};

export default BenefitsStrip;