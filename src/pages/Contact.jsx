import React from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="min-h-screen bg-brand-cream pt-40 pb-20 grainy">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-24">
          {/* Left: Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-olive/10 text-brand-olive text-[10px] font-black uppercase tracking-[0.3em]">
                Get in Touch
              </span>
              <h1 className="text-6xl md:text-8xl font-serif text-brand-olive leading-[0.85] tracking-tighter">
                Let's Start a <br />
                <span className="text-brand-brown italic">Conversation</span>
              </h1>
              <p className="text-lg text-brand-olive/60 font-medium leading-relaxed max-w-md">
                Have questions about our blends or need help choosing the right flavor for your health goals? Our wellness experts are here to help.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { icon: <Mail size={24} />, label: "Email Us", val: "hello@sattudrink.com" },
                { icon: <Phone size={24} />, label: "Call Us", val: "+91 98765 43210" },
                { icon: <MapPin size={24} />, label: "Our Base", val: "Patna, Bihar, India" }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-brand-olive/5 flex items-center justify-center text-brand-brown group-hover:bg-brand-olive group-hover:text-brand-cream transition-all duration-500 shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-brand-olive/40 mb-1">{item.label}</p>
                    <p className="text-xl font-bold text-brand-olive">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-12 border-t border-brand-olive/5">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-olive/40 mb-6">Stay Connected</p>
              <div className="flex gap-4">
                {[Instagram, Twitter, Facebook].map((Icon, i) => (
                  <button key={i} className="w-12 h-12 rounded-xl border border-brand-olive/10 flex items-center justify-center text-brand-olive hover:bg-brand-olive hover:text-brand-cream transition-all">
                    <Icon size={20} />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-[60px] p-8 md:p-16 border border-brand-olive/5 shadow-premium">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-brand-olive/60 ml-2">Your Name</label>
                    <input type="text" className="w-full bg-brand-cream/50 border border-brand-olive/10 rounded-2xl px-6 py-4 text-sm font-bold text-brand-olive outline-none focus:border-brand-olive/30 transition-all shadow-sm" placeholder="Aman Singh" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-brand-olive/60 ml-2">Email Address</label>
                    <input type="email" className="w-full bg-brand-cream/50 border border-brand-olive/10 rounded-2xl px-6 py-4 text-sm font-bold text-brand-olive outline-none focus:border-brand-olive/30 transition-all shadow-sm" placeholder="aman@example.com" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-brand-olive/60 ml-2">Subject</label>
                  <div className="relative">
                    <select className="w-full bg-brand-cream/50 border border-brand-olive/10 rounded-2xl px-6 py-4 text-sm font-bold text-brand-olive outline-none focus:border-brand-olive/30 transition-all appearance-none shadow-sm capitalize">
                      <option>Product Question</option>
                      <option>Order Status</option>
                      <option>Bulk Order Inquiry</option>
                      <option>Feedback</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-brand-olive/60 ml-2">Message</label>
                  <textarea rows="5" className="w-full bg-brand-cream/50 border border-brand-olive/10 rounded-2xl px-6 py-4 text-sm font-bold text-brand-olive outline-none focus:border-brand-olive/30 transition-all resize-none shadow-sm" placeholder="Tell us how we can help..."></textarea>
                </div>
                <button className="w-full h-16 rounded-2xl bg-brand-olive text-brand-cream font-black text-xs uppercase tracking-[0.2em] shadow-premium hover:bg-brand-olive-light transition-all transform active:scale-95 flex items-center justify-center gap-3">
                  <Send size={18} />
                  Send Message
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