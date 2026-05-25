import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Sprout, Leaf, Snowflake, Utensils } from 'lucide-react';

const benefits = [
  {
    title: "High in Protein",
    desc: "Builds strength naturally",
    icon: <Dumbbell size={32} strokeWidth={1.5} />,
  },
  {
    title: "Rich in Fiber",
    desc: "Supports digestion & gut health",
    icon: <Sprout size={32} strokeWidth={1.5} />,
  },
  {
    title: "100% Natural",
    desc: "No chemicals, no preservatives",
    icon: <Leaf size={32} strokeWidth={1.5} />,
  },
  {
    title: "Cooling Effect",
    desc: "Perfect for Indian climate",
    icon: <Snowflake size={32} strokeWidth={1.5} />,
  },
  {
    title: "Keeps You Full",
    desc: "Helps in weight management",
    icon: <Utensils size={32} strokeWidth={1.5} />,
  },
];

const BenefitsStrip = () => {
  return (
    <section className="py-12 bg-[#FDFBF7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Parchment Title Container */}
        <div className="flex justify-center mb-12">
          <div className="relative px-12 py-4 bg-[#E6DDC4]/30 rounded-lg">
            <div className="absolute inset-0 border-y border-[#4A5D4E]/10 scale-x-110"></div>
            <h2 className="text-sm font-bold tracking-[0.3em] text-[#4A5D4E] uppercase">Goodness in Every Sip</h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="text-[#4A5D4E] mb-4 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-sm font-bold text-[#333333] mb-1">
                {benefit.title}
              </h3>
              <p className="text-[10px] text-[#666666] leading-relaxed max-w-[120px]">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative Leaf on right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20 hidden lg:block">
        <Leaf size={100} className="text-[#4A5D4E] rotate-45" />
      </div>
    </section>
  );
};

export default BenefitsStrip;
