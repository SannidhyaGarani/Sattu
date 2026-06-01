import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Leaf,
  Zap,
  Dumbbell,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="relative overflow-hidden min-h-screen flex items-center border-b border-[#D9D3C7]"
      style={{
        backgroundImage: "url('/img/sattu1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay - adjusted for a clean side-aligned layout */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FDF6E9] via-[#FDF6E9]/80 to-transparent" />

      {/* Decorative Corners */}
      <div className="absolute top-6 left-6 w-8 h-8 border-l-2 border-t-2 border-[#D9A036]" />
      <div className="absolute top-6 right-6 w-8 h-8 border-r-2 border-t-2 border-[#D9A036]" />
      <div className="absolute bottom-6 left-6 w-8 h-8 border-l-2 border-b-2 border-[#D9A036]" />
      <div className="absolute bottom-6 right-6 w-8 h-8 border-r-2 border-b-2 border-[#D9A036]" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 py-24 w-full">
        <div className="max-w-2xl">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 border border-[#D9A036]/40 bg-[#FDF6E9] px-4 py-2 mb-8">
              <Leaf size={14} className="text-[#D9A036]" />
              <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#D9A036]">
                Handcrafted Nutrition
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#1C2B21] leading-[1.05]">
              Tradition In
              <br />
              Every Sip.
              <span className="block text-[#D9A036] italic font-normal mt-3">
                Strength In Every Day.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 text-lg text-[#5E564B] max-w-xl leading-relaxed">
              Crafted from premium roasted gram and natural ingredients,
              our Instant Sattu Mix delivers authentic taste, lasting energy,
              and wholesome nutrition inspired by generations of tradition.
            </p>

            {/* Quote */}
            <div className="mt-8 pl-5 border-l-2 border-[#D9A036]">
              <p className="italic text-[#6B5D4A]">
                "A timeless Indian superfood trusted for strength,
                nourishment and vitality."
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              <div className="bg-[#FDF6E9]/80 backdrop-blur-sm border-2 border-[#D9D3C7] p-4">
                <Zap className="text-[#D9A036]" size={20} />
                <p className="text-[11px] uppercase tracking-widest font-bold mt-3 text-[#1C2B21]">
                  Clean Energy
                </p>
              </div>

              <div className="bg-[#FDF6E9]/80 backdrop-blur-sm border-2 border-[#D9D3C7] p-4">
                <Dumbbell className="text-[#D9A036]" size={20} />
                <p className="text-[11px] uppercase tracking-widest font-bold mt-3 text-[#1C2B21]">
                  Strength
                </p>
              </div>

              <div className="bg-[#FDF6E9]/80 backdrop-blur-sm border-2 border-[#D9D3C7] p-4">
                <ShieldCheck className="text-[#D9A036]" size={20} />
                <p className="text-[11px] uppercase tracking-widest font-bold mt-3 text-[#1C2B21]">
                  Natural
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                to="/shop"
                className="px-8 py-4 bg-[#1C3B24] text-white font-bold uppercase tracking-[0.2em] flex items-center gap-3 hover:bg-[#D9A036] transition-all duration-500"
              >
                Shop Collection
                <ArrowRight size={16} />
              </Link>

              <Link
                to="/shop"
                className="px-8 py-4 border-2 border-[#1C3B24] text-[#1C3B24] font-bold uppercase tracking-[0.2em] hover:bg-[#1C3B24] hover:text-white transition-all duration-500"
              >
                Explore Flavours
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Premium Seal - Repositioned */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-24 right-12 z-20 w-28 h-28 rounded-full border border-[#D9A036] bg-[#FDF6E9]/60 backdrop-blur-md flex items-center justify-center hidden lg:flex"
      >
        <div className="w-24 h-24 rounded-full border border-dashed border-[#D9A036] flex items-center justify-center text-center">
          <span className="text-[10px] uppercase font-bold tracking-wider text-[#1C2B21] leading-tight">
            Pure
            <br />
            Nutrition
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;