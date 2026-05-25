import React from 'react';
import { Shield, Users, Heart, Award, Leaf, Zap, Sprout } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-brand-cream pt-40 pb-20 grainy">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-olive/10 text-brand-olive text-[10px] font-black uppercase tracking-[0.3em]">
              The Bihar Heritage
            </span>
            <h1 className="text-6xl md:text-8xl font-serif text-brand-olive leading-[0.9] tracking-tighter">
              Pure <br />
              <span className="text-brand-brown italic">Nutrition</span> <br />
              Reimagined
            </h1>
            <p className="text-lg text-brand-olive/60 font-medium leading-relaxed max-w-xl">
              Founded with a mission to bring India's ancient superfood to the modern world. Sattu Drink represents the perfect blend of traditional wisdom and contemporary health needs.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[60px] overflow-hidden bg-brand-cream border border-brand-olive/10">
              <img 
                src="https://images.unsplash.com/photo-1594488651083-023b857dc3f8?auto=format&fit=crop&q=80&w=800" 
                alt="Natural Ingredients" 
                className="w-full h-full object-cover transition-all duration-1000"
              />
            </div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-white rounded-[40px] p-8 shadow-2xl border border-brand-olive/10 hidden md:block">
              <p className="text-4xl font-serif font-black text-brand-brown mb-2">100%</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-brand-olive">Natural Purity</p>
              <div className="mt-6 h-1 w-full bg-brand-olive/10 rounded-full overflow-hidden">
                <div className="h-full w-[100%] bg-brand-olive" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {[
            {
              icon: <Sprout size={32} />,
              title: "Ethically Sourced",
              desc: "We source our roasted grams directly from farmers in Bihar to ensure the highest quality and maximum nutrient density."
            },
            {
              icon: <Zap size={32} />,
              title: "Instant Energy",
              desc: "Natural complex carbohydrates and high protein content provide a sustained release of energy throughout your busy day."
            },
            {
              icon: <Shield size={32} />,
              title: "Clean Label",
              desc: "No hidden sugars, no artificial flavors, and no preservatives. Just pure, stone-ground goodness as nature intended."
            }
          ].map((value, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-12 rounded-[48px] bg-white border border-brand-olive/5 space-y-6 hover:shadow-premium transition-all duration-500 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-cream border border-brand-olive/5 flex items-center justify-center text-brand-brown group-hover:scale-110 transition-transform">
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold text-brand-olive">{value.title}</h3>
              <p className="text-sm text-brand-olive/60 font-medium leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Story Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-olive rounded-[64px] p-12 md:p-24 text-brand-cream relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-brown/20 rounded-full blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 max-w-3xl">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-beige mb-8 block">The Philosophy</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-12 leading-tight tracking-tighter">
              "We believe that real health starts from the roots. Our Sattu is more than just a drink; it's a tribute to Indian traditions."
            </h2>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <Award className="text-brand-beige" />
              </div>
              <div>
                <p className="font-bold text-sm uppercase tracking-widest text-brand-cream">Quality Certified</p>
                <p className="text-[10px] text-brand-cream/40 uppercase tracking-widest">100% Organic Origins</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;