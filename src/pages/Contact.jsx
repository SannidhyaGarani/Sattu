import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Facebook, ArrowUpRight, Sparkles, X, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeChannel, setActiveChannel] = useState(null);
  
  const premiumEase = [0.215, 0.61, 0.355, 1];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const communicationChannels = [
    { icon: <Mail size={18} strokeWidth={1} />, label: "Electronic Mail", val: "hello@nativaorganics.com", href: "mailto:hello@nativaorganics.com" },
    { icon: <Phone size={18} strokeWidth={1} />, label: "Direct Telephony", val: "+91 98765 43210", href: "tel:+919876543210" },
    { icon: <MapPin size={18} strokeWidth={1} />, label: "Collection Base", val: "Patna, Bihar, India", href: "#" }
  ];

  return (
    <div className="min-h-screen bg-[#FBF9F6] pt-32 lg:pt-48 pb-32 text-[#0A1E13] relative selection:bg-[#0A1E13] selection:text-[#FBF9F6]">
      {/* Light Luxury Geometric Dot Mesh Overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[radial-gradient(#0A1E13_1px,transparent_1px)] [background-size:24px_24px]"></div>

      {/* Premium Elegant Submission Notification System */}
      <AnimatePresence>
        {formSubmitted && (
          <motion.div 
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 20, x: '-50%' }}
            className="fixed bottom-12 left-1/2 z-50 bg-[#0A1E13] border border-white/10 text-[#FBF9F6] px-8 py-5 rounded-none shadow-2xl flex items-center gap-6 backdrop-blur-md max-w-md w-[90%]"
          >
            <CheckCircle size={18} className="text-[#D4B27A] shrink-0" />
            <p className="text-[10px] uppercase font-bold tracking-[0.2em] flex-1">Inquiry successfully logged into our digital registry.</p>
            <button onClick={() => setFormSubmitted(false)} className="opacity-40 hover:opacity-100 transition-opacity">
              <X size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-8xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* ================= LEFT COLUMN: ARCHITECTURAL METADATA ================= */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: premiumEase }}
            className="lg:col-span-5 space-y-20"
          >
            {/* Header Content Matrix */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 text-[#D4B27A]">
                <div className="h-[1px] w-8 bg-[#D4B27A]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Communications Portal</span>
              </div>
              <h1 className="text-[11vw] sm:text-[7vw] lg:text-[5vw] font-serif font-light text-[#0A1E13] leading-[1] tracking-tighter">
                Initiate a <br />
                <span className="italic text-[#D4B27A]">Dialogue</span>
              </h1>
              <p className="text-base text-[#0A1E13]/60 font-light leading-relaxed max-w-md">
                Have rigorous technical inquiries regarding our dynamic whole-grain formulations, regional sourcing parameters, or tailored nutritional integration protocols? Reach our council directly.
              </p>
            </div>

            {/* Interactive Channels Register */}
            <div className="space-y-2">
              {communicationChannels.map((item, i) => (
                <a 
                  href={item.href}
                  key={i} 
                  onMouseEnter={() => setActiveChannel(i)}
                  onMouseLeave={() => setActiveChannel(null)}
                  className="flex items-center gap-8 p-6 border-b border-[#0A1E13]/5 hover:bg-[#EFECE5]/40 transition-all duration-500 group"
                >
                  <div className="text-[#0A1E13]/40 group-hover:text-[#D4B27A] transition-colors duration-500 shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#D4B27A] mb-1">{item.label}</p>
                    <p className="text-lg font-serif font-light text-[#0A1E13] tracking-tight truncate">{item.val}</p>
                  </div>
                  <ArrowUpRight size={16} className={`text-[#0A1E13]/20 transition-transform duration-500 ${activeChannel === i ? 'rotate-45 text-[#D4B27A]' : ''}`} />
                </a>
              ))}
            </div>

            {/* Premium Social Matrix Ties */}
            <div className="pt-12 border-t border-[#0A1E13]/5 space-y-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0A1E13]/40">Syndicated Networks</p>
              <div className="flex gap-4">
                {[
                  { Icon: Instagram, link: "#" },
                  { Icon: Twitter, link: "#" },
                  { Icon: Facebook, link: "#" }
                ].map((social, i) => (
                  <a 
                    href={social.link} 
                    key={i} 
                    className="w-12 h-12 border border-[#0A1E13]/5 bg-transparent flex items-center justify-center text-[#0A1E13]/40 hover:text-[#0A1E13] hover:border-[#0A1E13]/20 transition-all duration-300"
                  >
                    <social.Icon size={18} strokeWidth={1} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT COLUMN: PREMIUM INTAKE DISPATCH ================= */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 1, ease: premiumEase }}
            className="lg:col-span-7"
          >
            <div className="bg-[#EFECE5]/30 border border-[#0A1E13]/5 p-8 sm:p-12 md:p-20 shadow-2xl shadow-[#0A1E13]/5 relative overflow-hidden">
              {/* Asymmetric Reference Index Tag */}
              <div className="absolute top-0 right-0 p-10 text-[9px] font-mono font-light text-[#0A1E13]/20 tracking-[0.4em] uppercase pointer-events-none">
                FORM_REF//MDS-09
              </div>

              <form className="space-y-10" onSubmit={handleFormSubmit}>
                <div className="grid sm:grid-cols-2 gap-8">
                  {/* Name Input Ingestion Node */}
                  <div className="space-y-3">
                    <label className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#D4B27A]">Your Identity</label>
                    <input 
                      type="text" 
                      required
                      className="w-full bg-transparent border-b border-[#0A1E13]/10 py-4 text-sm font-light text-[#0A1E13] outline-none focus:border-[#D4B27A] transition-all placeholder:text-[#0A1E13]/20" 
                      placeholder="Full Name" 
                    />
                  </div>
                  {/* Email Input Ingestion Node */}
                  <div className="space-y-3">
                    <label className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#D4B27A]">Electronic Mailway</label>
                    <input 
                      type="email" 
                      required
                      className="w-full bg-transparent border-b border-[#0A1E13]/10 py-4 text-sm font-light text-[#0A1E13] outline-none focus:border-[#D4B27A] transition-all placeholder:text-[#0A1E13]/20" 
                      placeholder="Email Address" 
                    />
                  </div>
                </div>

                {/* Subject Dropdown Core */}
                <div className="space-y-3">
                  <label className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#D4B27A]">Inquiry Parameter</label>
                  <div className="relative">
                    <select className="w-full bg-transparent border-b border-[#0A1E13]/10 py-4 text-sm font-light text-[#0A1E13] outline-none focus:border-[#D4B27A] transition-all appearance-none cursor-pointer">
                      <option>Product Composition Inquiry</option>
                      <option>Logistics & Order Status</option>
                      <option>Enterprise B2B / Bulk Procurement</option>
                      <option>Physiological Feedback</option>
                    </select>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[#0A1E13]/20 text-[10px]">▼</div>
                  </div>
                </div>

                {/* Textarea Narrative Box */}
                <div className="space-y-3">
                  <label className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#D4B27A]">Narrative Formulation</label>
                  <textarea 
                    rows="5" 
                    required
                    className="w-full bg-transparent border-b border-[#0A1E13]/10 py-4 text-sm font-light text-[#0A1E13] outline-none focus:border-[#D4B27A] transition-all resize-none placeholder:text-[#0A1E13]/20" 
                    placeholder="Elaborate on your biological requirements..."
                  ></textarea>
                </div>

                {/* Modernized Submission Node Button */}
                <button 
                  type="submit"
                  className="group relative w-full h-16 bg-[#0A1E13] text-[#FBF9F6] overflow-hidden transition-all hover:scale-[1.01] active:scale-[0.99]"
                >
                  <div className="absolute inset-0 bg-[#D4B27A] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.211,0.61,0.355,1]" />
                  <span className="relative z-10 flex items-center justify-center gap-4 text-[10px] font-bold uppercase tracking-[0.4em]">
                    Transmit Protocol
                    <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;