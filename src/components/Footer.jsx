import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Instagram, Facebook, Twitter, Youtube, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-cream pt-24 pb-12 overflow-hidden relative border-t border-brand-olive/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-olive rounded-full flex items-center justify-center text-brand-cream">
                <Leaf size={24} />
              </div>
              <div className="flex flex-col -space-y-1">
                <span className="text-2xl font-bold tracking-tighter text-brand-olive">SATTU</span>
                <span className="text-[10px] tracking-[0.3em] font-light text-brand-brown">DRINK</span>
              </div>
            </Link>
            <p className="text-brand-olive/60 leading-relaxed text-sm">
              Bringing the power of tradition in a modern form. 100% natural, healthy & delicious energy booster for the modern Indian lifestyle.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <motion.a 
                  key={i}
                  href="#"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-brand-olive/5 flex items-center justify-center text-brand-olive hover:bg-brand-olive hover:text-brand-cream transition-all duration-300"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-brand-olive font-bold uppercase tracking-widest text-xs">Quick Links</h4>
            <div className="flex flex-col gap-4">
              {['Home', 'Shop', 'Flavours', 'Benefits', 'How to Make', 'Reviews', 'About Us'].map((item) => (
                <Link 
                  key={item} 
                  to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-brand-olive/60 hover:text-brand-olive transition-colors text-sm font-medium w-fit"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Customer Care */}
          <div className="flex flex-col gap-6">
            <h4 className="text-brand-olive font-bold uppercase tracking-widest text-xs">Customer Care</h4>
            <div className="flex flex-col gap-4">
              {['My Account', 'Track Order', 'Shipping Policy', 'Return & Refund', 'Terms & Conditions', 'Privacy Policy', 'FAQ'].map((item) => (
                <Link 
                  key={item} 
                  to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-brand-olive/60 hover:text-brand-olive transition-colors text-sm font-medium w-fit"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter / Contact */}
          <div className="flex flex-col gap-6">
            <h4 className="text-brand-olive font-bold uppercase tracking-widest text-xs font-black">Stay Healthy</h4>
            <p className="text-sm text-brand-olive/60">Join our community for regular health tips and natural wellness hacks.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="w-full bg-white border border-brand-olive/10 rounded-full py-4 pl-6 pr-16 text-sm focus:outline-none focus:border-brand-olive/30 transition-all shadow-sm"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-brand-olive text-brand-cream rounded-full flex items-center justify-center hover:bg-brand-olive-light transition-all">
                <ArrowRight size={18} />
              </button>
            </div>
            
            <div className="flex flex-col gap-3 pt-4 border-t border-brand-olive/10">
              <div className="flex items-center gap-3 text-brand-olive/70 text-sm">
                <Phone size={16} className="text-brand-olive" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-brand-olive/70 text-sm">
                <Mail size={16} className="text-brand-olive" />
                <span>hello@sattudrink.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-brand-olive/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-brand-olive/40 text-[10px] uppercase font-bold tracking-widest">
            © {currentYear} Sattu Drink. All Rights Reserved.
          </p>
          
          <div className="flex items-center gap-6 grayscale opacity-50">
             <div className="flex gap-4">
                <span className="text-[10px] font-bold">UPI</span>
                <span className="text-[10px] font-bold">VISA</span>
                <span className="text-[10px] font-bold">RUPAY</span>
                <span className="text-[10px] font-bold">COD</span>
             </div>
          </div>

          <motion.button 
            whileHover={{ y: -5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 bg-brand-olive/5 text-brand-olive rounded-full flex items-center justify-center hover:bg-brand-olive hover:text-brand-cream transition-all"
          >
            <ArrowRight size={20} className="-rotate-90" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
