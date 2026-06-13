import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ShoppingCart, User, Search, Menu, X, Leaf, Heart, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from './useAuth';
import { db } from './Firebase';
import { collection, onSnapshot } from 'firebase/firestore';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const location = useLocation();
  const { user } = useAuth();
  const { scrollY } = useScroll();

  // Smooth architectural scroll transformations
  const headerHeight = useTransform(scrollY, [0, 80], ['90px', '72px']);
  const headerBg = useTransform(
    scrollY,
    [0, 80],
    ['rgba(251, 249, 246, 0)', 'rgba(251, 249, 246, 0.97)']
  );
  const headerBorder = useTransform(
    scrollY,
    [0, 80],
    ['rgba(10, 30, 19, 0.04)', 'rgba(10, 30, 19, 0.08)']
  );
  const logoScale = useTransform(scrollY, [0, 80], [1, 0.95]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (!user) {
      setCartCount(0);
      setWishlistCount(0);
      return;
    }

    const unsubscribeCart = onSnapshot(
      collection(db, "users", user.uid, "cart"),
      (snapshot) => setCartCount(snapshot.size),
      (error) => console.error("Error fetching luxury cart:", error)
    );

    const unsubscribeWishlist = onSnapshot(
      collection(db, "users", user.uid, "wishlist"),
      (snapshot) => setWishlistCount(snapshot.size),
      (error) => console.error("Error fetching luxury wishlist:", error)
    );

    return () => {
      unsubscribeCart();
      unsubscribeWishlist();
    };
  }, [user]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About us', path: '/about' },
    { name: 'Benefits', path: '/benefits' },
    { name: 'Contact', path: '/contact' },
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.06, duration: 0.5, ease: [0.215, 0.610, 0.355, 1.000] }
    })
  };

  return (
    <header className="fixed top-0 left-0 w-full z-[100] transition-all duration-500">
      {/* Editorial Announcement Ticker */}
      <div className="bg-[#0A1E13] text-[#FBF9F6] py-2 px-4 overflow-hidden relative border-b border-[#D4B27A]/10 select-none">
        <motion.div 
          animate={{ x: [0, -1200] }}
          transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
          className="flex gap-20 md:gap-24 whitespace-nowrap items-center text-[9px] md:text-[10px] font-medium tracking-[0.35em] uppercase font-sans"
        >
          <span className="flex items-center gap-3 text-[#FAF6F0]/90"><Leaf size={11} className="text-[#D4B27A]" /> 100% Certified Organic Foods</span>
          <span className="flex items-center gap-3 text-[#FAF6F0]/90"><div className="w-1 h-1 rounded-full bg-[#D4B27A]" /> Stone-Ground · Sun-Dried · No Preservatives</span>
          <span className="flex items-center gap-3 text-[#FAF6F0]/90">✨ Premium Sattu · Namkeen · Dry Fruits & More</span>
          <span className="flex items-center gap-3 text-[#FAF6F0]/90">✨ Free Shipping on Orders Above ₹999</span>
          {/* Loop duplicates */}
          <span className="flex items-center gap-3 text-[#FAF6F0]/90"><Leaf size={11} className="text-[#D4B27A]" /> 100% Certified Organic Foods</span>
          <span className="flex items-center gap-3 text-[#FAF6F0]/90"><div className="w-1 h-1 rounded-full bg-[#D4B27A]" /> Stone-Ground · Sun-Dried · No Preservatives</span>
          <span className="flex items-center gap-3 text-[#FAF6F0]/90">✨ Premium Sattu · Namkeen · Dry Fruits & More</span>
          <span className="flex items-center gap-3 text-[#FAF6F0]/90">✨ Free Shipping on Orders Above ₹999</span>
        </motion.div>
      </div>

      {/* Main Luxury Glass Navbar */}
      <motion.nav 
        style={{ 
          height: headerHeight,
          backgroundColor: headerBg,
          borderBottomWidth: '1px',
          borderBottomColor: headerBorder,
          backdropFilter: 'blur(24px)' 
        }}
        className="px-4 sm:px-8 md:px-16 flex items-center transition-all duration-500"
      >
        <div className="max-w-8xl mx-auto w-full flex items-center justify-between">
          
          {/* Logo - Optimized Responsive Editorial Layout */}
          <motion.div style={{ scale: logoScale }}>
            <Link to="/" className="flex flex-col items-center group relative z-[110] text-center">
              <span className="text-xl md:text-2xl font-serif font-light text-[#0A1E13] tracking-[0.3em] transition-colors duration-300 group-hover:text-[#D4B27A] block whitespace-nowrap">
                NATIVA
              </span>
              <span className="text-[7px] md:text-[8px] tracking-[0.45em] text-[#0A1E13]/50 uppercase font-sans mt-0.5 font-bold block whitespace-nowrap">
                ORGANICS
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className="px-4 py-2 text-[11px] font-medium uppercase tracking-[0.25em] text-[#0A1E13]/80 relative group transition-all"
              >
                <span className="relative z-10 transition-colors duration-400 group-hover:text-[#0A1E13]">{link.name}</span>
                <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-[#D4B27A] transition-all duration-300 -translate-x-1/2 group-hover:w-[60%]" />
                
                {location.pathname === link.path && (
                  <motion.span 
                    layoutId="luxuryActiveNav"
                    className="absolute inset-0 bg-[#0A1E13]/[0.03] rounded-full -z-0"
                    transition={{ type: 'spring', damping: 30, stiffness: 180 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Action Icons Bar */}
          <div className="flex items-center gap-1 sm:gap-2 md:gap-3 relative z-[110]">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="text-[#0A1E13] p-2 transition-colors hover:text-[#D4B27A] hidden xs:block"
            >
              <Search size={18} strokeWidth={1.5} />
            </motion.button>
            
            <Link to="/wishlist" className="relative group hidden xs:block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="text-[#0A1E13] p-2 transition-colors hover:text-[#D4B27A]"
              >
                <Heart size={18} strokeWidth={1.5} />
              </motion.div>
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 bg-[#D4B27A] text-[#FBF9F6] text-[8px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center scale-90">
                  {wishlistCount}
                </span>
              )}
            </Link>

            <Link to="/account" className="hidden xs:block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="text-[#0A1E13] p-2 transition-colors hover:text-[#D4B27A]"
              >
                <User size={18} strokeWidth={1.5} />
              </motion.div>
            </Link>
            
            <Link to="/cart" className="relative group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="text-[#FBF9F6] p-2.5 bg-[#0A1E13] rounded-full transition-all hover:bg-[#D4B27A]"
              >
                <ShoppingCart size={15} strokeWidth={1.8} />
              </motion.div>
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-[#D4B27A] text-[#FBF9F6] text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-[#FBF9F6] tracking-tighter">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Premium Mobile Trigger */}
            <motion.button 
              whileTap={{ scale: 0.95 }}
              className="lg:hidden text-[#0A1E13] p-2 ml-1"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={22} strokeWidth={1.5} />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Exhibition-Style Luxury Mobile Overlay Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "linear" }}
            className="fixed inset-0 bg-[#FBF9F6] z-[200] flex flex-col justify-between lg:hidden overflow-y-auto"
          >
            {/* Embedded Micro-Grid Pattern for Texture */}
            <div className="absolute inset-0 opacity-[0.012] pointer-events-none bg-[radial-gradient(#0A1E13_1px,transparent_1px)] [background-size:16px_16px]" />

            {/* Dedicated Top Bar inside Overlay */}
            <div className="w-full px-4 sm:px-8 h-[90px] flex items-center justify-between border-b border-[#0A1E13]/5 relative z-20 bg-[#FBF9F6]">
              <div className="flex flex-col items-center text-center select-none">
                <span className="text-xl font-serif font-light text-[#0A1E13] tracking-[0.3em]">
                  NATIVA
                </span>
                <span className="text-[7px] tracking-[0.45em] text-[#0A1E13]/50 uppercase font-sans mt-0.5 font-bold">
                  ORGANICS
                </span>
              </div>
              
              {/* Refined Fixed Close Action */}
              <motion.button
                whileTap={{ scale: 0.92 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#0A1E13] w-10 h-10 rounded-full bg-[#0A1E13]/5 flex items-center justify-center transition-colors hover:bg-[#0A1E13]/10"
                aria-label="Close menu"
              >
                <X size={20} strokeWidth={1.5} />
              </motion.button>
            </div>

            {/* Navigation List Container */}
            <div className="flex flex-col gap-5 px-6 sm:px-10 pt-10 pb-6 relative z-10">
              <p className="text-[9px] font-bold tracking-[0.4em] uppercase text-[#0A1E13]/30 mb-1">Explore</p>
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  custom={idx}
                  variants={menuVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Link 
                    to={link.path}
                    className="text-3xl sm:text-4xl font-serif font-light text-[#0A1E13] flex items-center justify-between group border-b border-[#0A1E13]/5 pb-3.5"
                  >
                    <span>{link.name}</span>
                    <ArrowRight size={16} className="text-[#D4B27A] opacity-60" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Core Action Blocks & Contextual Footer */}
            <div className="px-6 sm:px-10 pb-8 pt-4 mt-auto relative z-10 w-full">
              <div className="grid grid-cols-2 gap-3 mb-8">
                <Link 
                  to="/account" 
                  className="py-3.5 text-center bg-[#0A1E13] text-[#FBF9F6] text-[10px] font-medium uppercase tracking-[0.2em] transition-colors active:bg-[#D4B27A]"
                >
                  Private Account
                </Link>
                <Link 
                  to="/contact" 
                  className="py-3.5 text-center border border-[#0A1E13]/20 text-[#0A1E13] text-[10px] font-medium uppercase tracking-[0.2em] transition-colors active:bg-[#0A1E13]/5"
                >
                  Client Services
                </Link>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-between items-center text-[#0A1E13]/40 text-[9px] font-medium tracking-[0.25em] font-sans uppercase pt-5 border-t border-[#0A1E13]/10 text-center sm:text-left">
                <span>© 2026 NATIVA INTERNATIONAL</span>
                <div className="flex gap-3 text-[#0A1E13]/50 items-center">
                  <Leaf size={12} />
                  <span className="text-[8px]">EST. 2026</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;