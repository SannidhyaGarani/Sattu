import React from 'react';
import { Shield, Award, Zap, Sprout, Sparkles, Compass, Fingerprint, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  // Cohesive premium easing variables for silky, editorial movement
  const premiumEase = [0.215, 0.61, 0.355, 1];

  return (
    <div className="min-h-screen bg-[#FBF9F6] pt-32 lg:pt-48 pb-32 overflow-hidden selection:bg-[#0A1E13] selection:text-[#FBF9F6]">
      {/* Light Luxury Geometric Dot Mesh Overlay (Signature Texture) */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[radial-gradient(#0A1E13_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* ================= HERO ARCHITECTURE ================= */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-40">
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: premiumEase }}
            className="lg:col-span-7 space-y-10"
          >
            <div className="flex items-center gap-4 text-[#D4B27A]">
              <div className="h-[1px] w-8 bg-[#D4B27A]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em]">The Magadh Legacy</span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl lg:text-[6vw] font-serif font-light text-[#0A1E13] leading-[1] tracking-tight">
              Ancestral Fuel. <br />
              <span className="italic text-[#D4B27A]">Biological</span> <br />
              Refinement.
            </h1>
            
            <p className="text-base sm:text-lg text-[#0A1E13]/60 font-sans font-light leading-relaxed max-w-xl">
              We operate at the convergence of native agricultural wisdom and contemporary bio-availability analysis. Sattu is not a modern formulation; it is the raw, uncompromised performance secret of ancient India, architecturalized for the global vanguard.
            </p>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-[1px] bg-[#0A1E13]/20" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#0A1E13]/40">Est. 2026</span>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 1.02 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: premiumEase }}
            className="lg:col-span-5 relative mt-8 lg:mt-0 w-full"
          >
            {/* Main Editorial Canvas Image */}
            <div className="relative aspect-[4/5] overflow-hidden bg-[#EFECE5] shadow-2xl shadow-[#0A1E13]/10 group">
              <img 
                src="img/ss.png"
                alt="Native Crop Sourcing" 
                className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[1.5s] ease-[0.215,0.61,0.355,1] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E13]/20 via-transparent to-transparent pointer-events-none" />
            </div>
            
            {/* Floating Heritage Meta Token */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 1, ease: premiumEase }}
              className="absolute -bottom-10 -left-6 sm:left-12 bg-[#FBF9F6] p-8 border border-[#0A1E13]/5 shadow-xl max-w-[240px] hidden sm:block backdrop-blur-md"
            >
              <p className="text-4xl font-serif font-light text-[#0A1E13] mb-1 tracking-tight">100%</p>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#D4B27A]">Whole Food Integrity</p>
              <div className="mt-5 h-[1px] w-full bg-[#0A1E13]/5" />
              <p className="text-[10px] text-[#0A1E13]/50 font-light mt-3 leading-relaxed">Zero isolate proteins. Zero synthetic chemistry modifiers.</p>
            </motion.div>
          </motion.div>
        </div>

        {/* ================= VALUE PILLARS MATRIX ================= */}
        <div className="mb-40">
          <div className="mb-20 max-w-md">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#D4B27A] mb-4">Our Mandate</p>
            <h2 className="text-3xl sm:text-4xl font-serif font-light tracking-tight text-[#0A1E13]">Rigorous Production Benchmarks</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-0 border border-[#0A1E13]/5">
            {[
              {
                icon: <Sprout size={24} strokeWidth={1.2} />,
                title: "Direct Terroir Sourcing",
                desc: "We exclusively source premium black chana variations cultivated via traditional dry-land farming structures across Bihar, paying direct premium wages to our heritage farm partners."
              },
              {
                icon: <Zap size={24} strokeWidth={1.2} />,
                title: "Slow Low-GI Influx",
                desc: "The ancient sand-roasting processing method locks in complex structural starches, yielding a natural fuel source that delivers sustained baseline glycogen metrics without blood sugar spikes."
              },
              {
                icon: <Shield size={24} strokeWidth={1.2} />,
                title: "Pristine Minimalist Label",
                desc: "Stone-milled precision without modification filters. No refined sugars, chemical stabilizers, or emulsifiers. Unrefined whole-food raw ingredients from native earth to glass."
              }
            ].map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: premiumEase }}
                className="p-12 bg-[#FBF9F6] border-r border-[#0A1E13]/5 last:border-r-0 flex flex-col justify-between hover:bg-[#EFECE5]/50 transition-colors duration-500 group relative"
              >
                <div className="space-y-8">
                  <div className="text-[#D4B27A]">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-serif font-light text-[#0A1E13] tracking-tight">{value.title}</h3>
                  <p className="text-sm text-[#0A1E13]/60 font-light leading-relaxed">{value.desc}</p>
                </div>
                
                <div className="pt-10 mt-10 border-t border-[#0A1E13]/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#D4B27A]">Verified Standard</span>
                  <ArrowUpRight size={14} className="text-[#0A1E13]/40" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= EDITORIAL MANIFESTO BOX ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: premiumEase }}
          className="bg-[#0A1E13] p-12 md:p-24 text-[#FBF9F6] relative overflow-hidden"
        >
          {/* Asymmetric Artistic Overlay Gradients */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4B27A]/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#FFF_1px,transparent_1px)] [background-size:24px_24px]"></div>
          
          <div className="relative z-10 max-w-4xl space-y-12">
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-8 bg-[#D4B27A]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#D4B27A]">The Charter of Truth</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4vw] font-serif font-light leading-[1.1] tracking-tight text-[#FBF9F6]">
              “True health rejects modern synthetic assembly lines. True longevity is achieved by restoring deep, uncompromised, <span className="italic text-[#D4B27A]">native agriculture metrics</span> back to daily life.”
            </h2>
            
            <div className="pt-12 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 border border-[#D4B27A]/30 flex items-center justify-center text-[#D4B27A]">
                  <Award size={20} strokeWidth={1} />
                </div>
                <div>
                  <p className="font-sans font-bold text-[10px] uppercase tracking-[0.2em] text-[#FBF9F6]">Biological Source Certified</p>
                  <p className="text-[10px] text-[#FBF9F6]/40 uppercase tracking-[0.2em] mt-1">100% Traceable Farming Assets</p>
                </div>
              </div>
              
              <div className="flex gap-10 text-[10px] uppercase tracking-[0.3em] font-medium text-[#FBF9F6]/40">
                <span className="flex items-center gap-2"><Compass size={12} /> Identity Protected</span>
                <span className="flex items-center gap-2"><Fingerprint size={12} /> Stone Milled Real</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;