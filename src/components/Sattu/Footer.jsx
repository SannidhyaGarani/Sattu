import React from 'react';
import { Leaf, Instagram, Facebook, Twitter, Youtube, ArrowRight, Phone, Mail, MapPin, Truck, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FDFBF7] pt-16 pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Footer Benefits Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-gray-200 mb-12">
          <div className="flex items-center gap-3">
            <Truck className="text-[#4A5D4E]" size={32} strokeWidth={1.5} />
            <div>
              <h4 className="text-xs font-bold text-[#333333]">Free Delivery</h4>
              <p className="text-[10px] text-[#666666]">On orders above ₹499</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center">🚚</div>
            <div>
              <h4 className="text-xs font-bold text-[#333333]">Fast Delivery</h4>
              <p className="text-[10px] text-[#666666]">Within 3-5 working days</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck className="text-[#4A5D4E]" size={32} strokeWidth={1.5} />
            <div>
              <h4 className="text-xs font-bold text-[#333333]">Secure Payments</h4>
              <p className="text-[10px] text-[#666666]">UPI, Cards, COD Available</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Zap className="text-[#4A5D4E]" size={32} strokeWidth={1.5} />
            <div>
              <h4 className="text-xs font-bold text-[#333333]">100% Safe & Natural</h4>
              <p className="text-[10px] text-[#666666]">No harmful chemicals</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#4A5D4E] rounded-full flex items-center justify-center p-1.5">
                <img src="https://cdn-icons-png.flaticon.com/512/3035/3035083.png" alt="Sattu Logo" className="w-full h-full invert" />
              </div>
              <div className="flex flex-col -space-y-1">
                <span className="text-xl font-bold tracking-tight text-[#4A5D4E]">SATTU</span>
                <span className="text-[8px] tracking-[0.2em] font-medium text-[#4A5D4E] flex items-center gap-1">
                  <span className="h-[0.5px] w-1.5 bg-[#4A5D4E]"></span>DRINK<span className="h-[0.5px] w-1.5 bg-[#4A5D4E]"></span>
                </span>
              </div>
            </Link>
            <p className="text-[#666666] text-[11px] leading-relaxed">
              Bringing the power of tradition in a modern form. 100% natural, healthy & delicious.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Youtube, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="text-[#4A5D4E] hover:opacity-70 transition-opacity">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#333333] font-bold text-xs mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {['Home', 'Shop', 'Flavours', 'Benefits', 'How to Make', 'Reviews', 'Contact Us'].map((item) => (
                <Link key={item} to="#" className="text-[#666666] hover:text-[#4A5D4E] text-[11px] font-medium transition-colors">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-[#333333] font-bold text-xs mb-4">Customer Care</h4>
            <div className="flex flex-col gap-2">
              {['My Account', 'Track Order', 'Shipping Policy', 'Return & Refund', 'Terms & Conditions', 'Privacy Policy', 'FAQ'].map((item) => (
                <Link key={item} to="#" className="text-[#666666] hover:text-[#4A5D4E] text-[11px] font-medium transition-colors">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-[#333333] font-bold text-xs mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-[11px] text-[#666666]">
                <Phone size={12} className="text-[#4A5D4E]" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-[#666666]">
                <Mail size={12} className="text-[#4A5D4E]" />
                <span>hello@sattudrink.com</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-[#666666]">
                <MapPin size={12} className="text-[#4A5D4E]" />
                <span>Bihar, India</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-[#666666]">
                <span className="text-[#4A5D4E]">🕒</span>
                <span>Mon - Sat: 9AM - 7PM</span>
              </div>
            </div>
          </div>

          {/* Stay Updated */}
          <div>
            <h4 className="text-[#333333] font-bold text-xs mb-4">Stay Healthy, Stay Updated</h4>
            <p className="text-[10px] text-[#666666] mb-4">Subscribe to get special offers, health tips & updates.</p>
            <div className="flex items-center bg-white border border-gray-200 rounded-md p-1">
              <input type="email" placeholder="Enter your email" className="w-full text-[11px] px-2 py-1.5 focus:outline-none" />
              <button className="bg-[#4A5D4E] text-white p-1.5 rounded-sm hover:opacity-90">
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#999999] text-[10px]">
            © {currentYear} Sattu Drink. All Rights Reserved.
          </p>
          
          <div className="flex items-center gap-4">
             <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-vector.svg" alt="UPI" className="h-4 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="VISA" className="h-3 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Rupay-Logo.svg" alt="RuPay" className="h-4 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
          </div>

          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-8 h-8 bg-[#4A5D4E] text-white rounded-full flex items-center justify-center hover:opacity-90 transition-all"
          >
            <ArrowRight size={16} className="-rotate-90" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
