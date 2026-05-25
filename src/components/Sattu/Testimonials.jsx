import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Star, Quote, Leaf } from 'lucide-react';

const testimonials = [
  {
    name: "Rohit Sharma",
    text: "Perfect drink for summers! Keeps me full for long and gives natural energy.",
    avatar: "https://i.pravatar.cc/150?u=rohit"
  },
  {
    name: "Ananya Verma",
    text: "Tastes amazing and super healthy. A must-have in my daily routine.",
    avatar: "https://i.pravatar.cc/150?u=ananya"
  },
  {
    name: "Karan Patel",
    text: "Great source of protein. Much better than other protein shakes.",
    avatar: "https://i.pravatar.cc/150?u=karan"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-[#4A5D4E] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold flex items-center justify-center gap-2">
            Loved by Thousands <span className="text-white">♡</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl flex flex-col gap-4 border border-white/10"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
                  <img src={item.avatar} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">{item.name}</h4>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={10} className="fill-[#FF9800] text-[#FF9800]" />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-sm leading-relaxed opacity-90 italic">
                "{item.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-10 -right-10 opacity-10">
        <Leaf size={200} className="text-white rotate-12" />
      </div>
    </section>
  );
};

export default Testimonials;
