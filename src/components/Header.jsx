import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ShoppingCart, User, Search, Menu, X, Leaf, Heart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(2); // Mock cart count
  const location = useLocation();
  const { scrollY } = useScroll();

  // Premium scroll transformations
  const headerHeight = useTransform(scrollY, [0, 100], ['100px', '70px']);
  const headerBg = useTransform(
    scrollY,
    [0, 100],
    ['rgba(243, 236, 225, 0)', 'rgba(243, 236, 225, 0.98)']
  );
  const headerShadow = useTransform(
    scrollY,
    [0, 100],
    ['0px 0px 0px rgba(0,0,0,0)', '0px 4px 20px rgba(44, 36, 30, 0.06)']
  );
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.9]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Flavours', path: '/flavours' },
    { name: 'Benefits', path: '/benefits' },
    { name: 'How to Make', path: '/how-to-make' },
    { name: 'About Us', path: '/about' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[100]">
      {/* Premium Announcement Bar */}
      <div className="bg-[#415345] text-[#FDFBF7] py-2 px-4 overflow-hidden relative border-b border-white/5">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="flex gap-16 whitespace-nowrap items-center text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase"
        >
          <span className="flex items-center gap-2"><Leaf size={14} className="text-[#DECFC0]" /> 100% Natural Ingredients</span>
          <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#DECFC0]" /> No Preservatives</span>
          <span className="flex items-center gap-2">💪 High Protein & Fiber</span>
          <span className="flex items-center gap-2">🚚 Delivered Across India</span>
          {/* Duplicates for seamless loop */}
          <span className="flex items-center gap-2"><Leaf size={14} className="text-[#DECFC0]" /> 100% Natural Ingredients</span>
          <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#DECFC0]" /> No Preservatives</span>
          <span className="flex items-center gap-2">💪 High Protein & Fiber</span>
          <span className="flex items-center gap-2">🚚 Delivered Across India</span>
        </motion.div>
      </div>

      {/* Main Glassmorphism Navbar */}
      <motion.nav 
        style={{ 
          height: headerHeight,
          backgroundColor: headerBg,
          boxShadow: headerShadow,
          backdropFilter: 'blur(12px)'
        }}
        className="px-6 md:px-12 flex items-center transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          
          {/* Logo with dynamic scale */}
          <motion.div style={{ scale: logoScale }}>
            <Link to="/" className="flex items-center gap-3 group relative z-[110]">
              <div className="w-11 h-11 bg-[#4A5D4E] rounded-full flex items-center justify-center text-[#FDFBF7] transition-all duration-500 group-hover:rotate-[360deg] shadow-lg shadow-[#4A5D4E]/20">
                <Leaf size={22} />
              </div>
              <div className="flex flex-col -space-y-1">
                <span className="text-2xl font-bold tracking-tight text-[#4A5D4E]">SATTU</span>
                <div className="flex items-center gap-1">
                  <div className="h-[1px] w-2 bg-[#6D4C3D]/40" />
                  <span className="text-[9px] tracking-[0.4em] font-bold text-[#6D4C3D] uppercase">Drink</span>
                  <div className="h-[1px] w-2 bg-[#6D4C3D]/40" />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation - Minimalist & Premium */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className="px-5 py-2 text-[12px] font-bold uppercase tracking-widest text-[#4A5D4E] relative group"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-[#6D4C3D]">{link.name}</span>
                {/* Premium Hover Underline */}
                <span className="absolute bottom-1 left-1/2 w-0 h-[2px] bg-[#6D4C3D] transition-all duration-300 -translate-x-1/2 group-hover:w-1/2" />
                {location.pathname === link.path && (
                  <motion.span 
                    layoutId="activeNav"
                    className="absolute inset-0 bg-[#4A5D4E]/5 rounded-full -z-0"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Icons - Interactive & Animated */}
          <div className="flex items-center gap-1 md:gap-3 relative z-[110]">
            <motion.button 
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(74, 93, 78, 0.05)' }}
              whileTap={{ scale: 0.95 }}
              className="text-[#4A5D4E] p-2.5 rounded-full transition-all hidden sm:block"
            >
              <Search size={20} strokeWidth={2.5} />
            </motion.button>
            <Link to="/wishlist">
              <motion.div
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(74, 93, 78, 0.05)' }}
                whileTap={{ scale: 0.95 }}
                className="text-[#4A5D4E] p-2.5 rounded-full transition-all hidden sm:block"
              >
                <Heart size={20} strokeWidth={2.5} />
              </motion.div>
            </Link>
            <Link to="/account">
              <motion.div
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(74, 93, 78, 0.05)' }}
                whileTap={{ scale: 0.95 }}
                className="text-[#4A5D4E] p-2.5 rounded-full transition-all"
              >
                <User size={20} strokeWidth={2.5} />
              </motion.div>
            </Link>
            <Link to="/cart" className="relative group">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-[#4A5D4E] p-2.5 bg-[#4A5D4E]/5 rounded-full transition-all"
              >
                <ShoppingCart size={22} strokeWidth={2.5} />
              </motion.div>
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 bg-[#6D4C3D] text-[#FDFBF7] text-[9px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow-lg border-2 border-[#FDFBF7]"
              >
                {cartCount}
              </motion.span>
            </Link>
            <motion.button 
              whileTap={{ scale: 0.9 }}
              className="lg:hidden text-[#4A5D4E] p-2 ml-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} strokeWidth={2.5} /> : <Menu size={28} strokeWidth={2.5} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Full-Screen Premium Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#FDFBF7] z-[90] flex flex-col p-10 pt-40 lg:hidden"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                >
                  <Link 
                    to={link.path}
                    className="text-5xl font-bold text-[#4A5D4E] hover:text-[#6D4C3D] transition-colors flex items-center gap-4 group"
                  >
                    <span className="text-sm font-black text-[#6D4C3D]/30">0{idx + 1}</span>
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto flex flex-col gap-8">
               <div className="grid grid-cols-2 gap-4">
                  <motion.div whileTap={{ scale: 0.95 }}>
                    <Link to="/account" className="w-full py-5 bg-[#4A5D4E] text-[#FDFBF7] rounded-2xl flex items-center justify-center font-black uppercase tracking-widest text-xs">
                      My Profile
                    </Link>
                  </motion.div>
                  <motion.div whileTap={{ scale: 0.95 }}>
                    <Link to="/contact" className="w-full py-5 border-2 border-[#4A5D4E] text-[#4A5D4E] rounded-2xl flex items-center justify-center font-black uppercase tracking-widest text-xs">
                      Support
                    </Link>
                  </motion.div>
               </div>
               <div className="flex justify-between items-center text-[#4A5D4E]/40 text-[10px] uppercase font-black tracking-[0.2em]">
                 <span>© 2026 Sattu Drink Premium</span>
                 <div className="flex gap-4">
                    <Leaf size={16} />
                    <Heart size={16} />
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
