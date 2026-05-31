import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Leaf } from 'lucide-react';

const testimonials = [
  {
    name: "Rohit Sharma",
    role: "Verified Buyer",
    text: "Perfect drink for summers! Keeps me full for long and gives natural energy.",
    avatar: "https://i.pravatar.cc/150?u=rohit"
  },
  {
    name: "Ananya Verma",
    role: "Verified Buyer",
    text: "Tastes amazing and super healthy. A must-have in my daily routine.",
    avatar: "https://i.pravatar.cc/150?u=ananya"
  },
  {
    name: "Karan Patel",
    role: "Fitness Enthusiast",
    text: "Great source of protein. Much better than other protein shakes.",
    avatar: "https://i.pravatar.cc/150?u=karan"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-[#EFECE6] text-[#1C2B21] relative overflow-hidden border-t border-b border-[#D9D3C7]">
      {/* Subtle Premium Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20 flex flex-col items-center">
          <span className="text-[#D9A036] font-sans font-bold tracking-widest text-sm uppercase mb-3 block">
              Real Reviews
            </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#1C2B21] tracking-tight pb-4">
            Trusted by Thousands
          </h2>
          <div className="w-16 h-[2px] bg-[#D9A036] mt-2"></div>
        </div>

        {/* Testimonials Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="bg-white p-8 rounded-xl flex flex-col justify-between border border-[#D9D3C7] relative group transition-all duration-300 shadow-sm hover:shadow-md"
            >
              {/* Decorative Subtle Quote Icon on card */}
              <div className="absolute top-6 right-8 text-[#D9D3C7] group-hover:text-[#D9A036]/20 transition-colors duration-300">
                <Quote size={32} strokeWidth={1} fill="currentColor" className="opacity-30" />
              </div>

              <div>
                {/* Star Rating Panel */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-[#D9A036] text-[#D9A036]" strokeWidth={1} />
                  ))}
                </div>
                
                {/* Testimonial Quote */}
                <p className="font-serif text-base md:text-lg leading-relaxed text-[#3E4A41] italic mb-8">
                  "{item.text}"
                </p>
              </div>

              {/* User Bio Footer */}
              <div className="flex items-center gap-4 pt-4 border-t border-[#EFECE6]">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#D9A036]/40 p-[2px] bg-[#EFECE6]">
                  <img src={item.avatar} alt={item.name} className="w-full h-full object-cover rounded-full" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#1C2B21] tracking-wide">{item.name}</h4>
                  <p className="text-xs font-sans tracking-wide text-[#707A72]">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Assets matching theme background scales */}
      <div className="absolute -bottom-16 -left-16 opacity-10 rotate-45 hidden lg:block text-[#1C3B24] pointer-events-none">
        <Leaf size={240} strokeWidth={1.2} />
      </div>
      <div className="absolute -top-16 -right-16 opacity-10 -rotate-12 hidden lg:block text-[#1C3B24] pointer-events-none">
        <Leaf size={200} strokeWidth={1.2} />
      </div>
    </section>
  );
};

export default Testimonials;