import React from 'react';
import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';

const steps = [
  {
    number: 1,
    title: "Add 2-3 tbsp Sattu Mix",
    image: "https://images.unsplash.com/photo-1541832069-e4f383395ee5?q=80&w=400&auto=format&fit=crop"
  },
  {
    number: 2,
    title: "Add 200ml of water or milk",
    image: "https://images.unsplash.com/photo-1548191265-cc70d3d45ba1?q=80&w=400&auto=format&fit=crop"
  },
  {
    number: 3,
    title: "Stir well until smooth",
    image: "https://images.unsplash.com/photo-1556767576-5ec41e3239ea?q=80&w=400&auto=format&fit=crop"
  },
  {
    number: 4,
    title: "Enjoy your healthy Sattu Drink!",
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?q=80&w=400&auto=format&fit=crop"
  }
];

const HowToMake = () => {
  return (
    <section className="py-20 bg-[#FDFBF7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#333333]">How to Make Sattu Drink</h2>
        </div>

        <div className="relative flex flex-wrap justify-center gap-12 lg:gap-24">
          {/* Connecting Dotted Line (Desktop only) */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] hidden lg:block -translate-y-24 px-32">
             <motion.div 
               initial={{ scaleX: 0 }}
               whileInView={{ scaleX: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1.5, ease: "easeInOut" }}
               className="w-full h-full border-b-2 border-dashed border-[#4A5D4E]/20 origin-left"
             />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
              whileHover={{ y: -5 }}
              className="relative flex flex-col items-center group z-10 transition-all duration-300"
            >
              <div className="relative mb-8">
                <div className="w-44 h-44 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-white p-1.5 transition-transform duration-500 group-hover:scale-105">
                  <img src={step.image} alt={step.title} className="w-full h-full object-cover rounded-full" />
                </div>
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.2, type: "spring" }}
                  className="absolute -top-2 -left-2 w-10 h-10 bg-[#4A5D4E] text-white text-sm font-black rounded-full flex items-center justify-center border-4 border-white shadow-lg"
                >
                  {step.number}
                </motion.div>
              </div>
              
              <p className="text-xs md:text-sm font-black text-[#2C241E] text-center max-w-[160px] leading-tight uppercase tracking-wide">
                {step.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Leaves */}
      <div className="absolute left-10 bottom-10 opacity-20 rotate-45 hidden lg:block">
        <Leaf size={60} className="text-[#4A5D4E]" />
      </div>
      <div className="absolute right-10 top-1/2 opacity-20 -rotate-12 hidden lg:block">
        <Leaf size={40} className="text-[#4A5D4E]" />
      </div>
    </section>
  );
};

export default HowToMake;
