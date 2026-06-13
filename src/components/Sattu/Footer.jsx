import React from 'react';
import { Link } from 'react-router-dom';
import {
  Leaf, Instagram, Facebook, Twitter, Youtube,
  ArrowRight, Mail, Clock, ArrowUp, Truck,
  ShieldCheck, Globe, Recycle,
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const shopLinks = [
    { label: 'All Products', path: '/shop' },
    { label: 'Organic Sattu', path: '/shop' },
    { label: 'Dry Fruits', path: '/shop' },
    { label: 'Namkeen & Snacks', path: '/shop' },
    { label: 'Millets & Grains', path: '/shop' },
    { label: 'Gift Hampers', path: '/shop' },
  ];

  const serviceLinks = [
    { label: 'About Us', path: '/about' },
    { label: 'Our Sourcing', path: '/benefits' },
    { label: 'Contact', path: '/contact' },
    { label: 'Track Order', path: '/account' },
    { label: 'Returns', path: '/contact' },
    { label: 'FAQ', path: '/contact' },
  ];

  const trustItems = [
    { icon: Truck, title: 'Free Shipping', desc: 'On orders above ₹999' },
    { icon: Globe, title: 'Farm Traceable', desc: 'Batch-level provenance' },
    { icon: ShieldCheck, title: 'Secure Checkout', desc: '256-bit encrypted' },
    { icon: Recycle, title: 'Eco Packaging', desc: 'Plastic-neutral delivery' },
  ];

  return (
    <footer className="relative font-sans">
      {/* Gold accent bridge — separates from light Testimonials above */}
      <div className="h-[3px] bg-gradient-to-r from-[#0A1E13] via-[#D4B27A] to-[#0A1E13]" />

      {/* Trust strip — mid-tone bridge into dark footer */}
      <div className="bg-[#122A1C] border-b border-[#D4B27A]/10">
        <div className="max-w-8xl mx-auto px-4 sm:px-8 md:px-16 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {trustItems.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#D4B27A]/10 border border-[#D4B27A]/20 flex items-center justify-center text-[#D4B27A] flex-shrink-0">
                  <Icon size={18} strokeWidth={1.25} />
                </div>
                <div>
                  <h4 className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#FBF9F6]">
                    {title}
                  </h4>
                  <p className="text-[11px] text-[#FBF9F6]/45 mt-1 font-light">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="bg-[#071510] text-[#FBF9F6] pt-20 pb-10 overflow-hidden relative">
        <div className="absolute inset-0 opacity-[0.012] pointer-events-none bg-[linear-gradient(to_right,#FBF9F6_1px,transparent_1px),linear-gradient(to_bottom,#FBF9F6_1px,transparent_1px)] [background-size:5rem_5rem]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#D4B27A]/[0.03] blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-8xl mx-auto px-4 sm:px-8 md:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-14 gap-x-10 xl:gap-x-20 mb-20">

            {/* Brand */}
            <div className="lg:col-span-4 flex flex-col gap-7">
              <Link to="/" className="flex flex-col items-start select-none">
                <span className="text-2xl font-serif font-light text-[#FBF9F6] tracking-[0.2em]">
                  NATIVA
                </span>
                <span className="text-[8px] tracking-[0.5em] text-[#D4B27A] uppercase mt-1 font-bold">
                  Organics
                </span>
              </Link>
              <p className="text-[#FBF9F6]/50 text-sm leading-relaxed font-light max-w-xs">
                India's finest organic sattu, namkeen, dry fruits, and wholesome snacks — stone-ground, sun-dried, and delivered with care.
              </p>
              <div className="flex gap-5">
                {[Instagram, Facebook, Youtube, Twitter].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 rounded-full border border-[#FBF9F6]/10 flex items-center justify-center text-[#FBF9F6]/35 hover:text-[#D4B27A] hover:border-[#D4B27A]/40 transition-all duration-300"
                  >
                    <Icon size={15} strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-10">
              <div>
                <h5 className="text-[#D4B27A] text-[10px] font-bold uppercase tracking-[0.3em] mb-7">
                  Shop
                </h5>
                <div className="flex flex-col gap-3.5">
                  {shopLinks.map((item) => (
                    <Link
                      key={item.label}
                      to={item.path}
                      className="text-[#FBF9F6]/50 hover:text-[#FBF9F6] text-[13px] font-light transition-colors w-fit relative group"
                    >
                      {item.label}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#D4B27A] transition-all duration-300 group-hover:w-full" />
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h5 className="text-[#D4B27A] text-[10px] font-bold uppercase tracking-[0.3em] mb-7">
                  Support
                </h5>
                <div className="flex flex-col gap-3.5">
                  {serviceLinks.map((item) => (
                    <Link
                      key={item.label}
                      to={item.path}
                      className="text-[#FBF9F6]/50 hover:text-[#FBF9F6] text-[13px] font-light transition-colors w-fit relative group"
                    >
                      {item.label}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#D4B27A] transition-all duration-300 group-hover:w-full" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="lg:col-span-4">
              <h5 className="text-[#D4B27A] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
                Stay Connected
              </h5>
              <p className="text-[13px] text-[#FBF9F6]/50 mb-7 font-light leading-relaxed">
                Get early access to new harvests, seasonal recipes, and exclusive member offers.
              </p>

              <div className="flex items-center bg-[#0A1E13]/60 border border-[#FBF9F6]/10 rounded-lg overflow-hidden focus-within:border-[#D4B27A]/40 transition-colors">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 text-sm bg-transparent focus:outline-none text-[#FBF9F6] placeholder-[#FBF9F6]/25 font-light px-4 py-3.5"
                />
                <button
                  className="px-5 py-3.5 bg-[#D4B27A] text-[#071510] hover:bg-[#FBF9F6] transition-colors flex-shrink-0"
                  aria-label="Subscribe"
                >
                  <ArrowRight size={16} strokeWidth={1.5} />
                </button>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-6 text-[12px] font-light text-[#FBF9F6]/35">
                <a
                  href="mailto:hello@nativaorganics.com"
                  className="flex items-center gap-2 hover:text-[#FBF9F6] transition-colors"
                >
                  <Mail size={12} strokeWidth={1.5} />
                  hello@nativaorganics.com
                </a>
                <span className="flex items-center gap-2">
                  <Clock size={12} strokeWidth={1.5} />
                  Mon — Sat, 9AM — 6PM IST
                </span>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-[#FBF9F6]/8 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] text-[#FBF9F6]/35 font-light">
            <div className="flex items-center gap-2 text-center md:text-left">
              <Leaf size={12} className="text-[#D4B27A]/60" strokeWidth={1.5} />
              <p>© {currentYear} Nativa Organics. All rights reserved.</p>
            </div>

            <div className="flex items-center gap-6 opacity-30">
              {['UPI', 'Visa', 'Mastercard', 'Amex'].map((method) => (
                <span key={method} className="text-[9px] tracking-[0.15em] uppercase font-medium">
                  {method}
                </span>
              ))}
            </div>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-10 h-10 border border-[#FBF9F6]/10 rounded-full flex items-center justify-center text-[#FBF9F6]/50 hover:border-[#D4B27A] hover:text-[#D4B27A] transition-all duration-300"
              aria-label="Back to top"
            >
              <ArrowUp size={15} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
