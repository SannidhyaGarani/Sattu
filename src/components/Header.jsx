import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ShoppingCart, User, Search, Menu, X, Leaf, Heart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from './useAuth';
import { db } from './Firebase';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const location = useLocation();
  const { user } = useAuth();
  const { scrollY } = useScroll();

  // Premium scroll transformations - updated for traditional feel
  const headerHeight = useTransform(scrollY, [0, 100], ['110px', '80px']);
  const headerBg = useTransform(
    scrollY,
    [0, 100],
    ['rgba(28, 59, 36, 0)', 'rgba(28, 59, 36, 0.98)']
  );
  const headerShadow = useTransform(
    scrollY,
    [0, 100],
    ['0px 0px 0px rgba(0,0,0,0)', '0px 6px 20px rgba(28, 43, 33, 0.15)']
  );
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.9]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (!user) {
      setCartCount(0);
      setWishlistCount(0);
      return;
    }

    // Real-time listener for cart
    const unsubscribeCart = onSnapshot(
      collection(db, "users", user.uid, "cart"),
      (snapshot) => {
        setCartCount(snapshot.size);
      },
      (error) => {
        console.error("Error fetching cart:", error);
      }
    );

    // Real-time listener for wishlist
    const unsubscribeWishlist = onSnapshot(
      collection(db, "users", user.uid, "wishlist"),
      (snapshot) => {
        setWishlistCount(snapshot.size);
      },
      (error) => {
        console.error("Error fetching wishlist:", error);
      }
    );

    // Cleanup listeners on unmount or user change
    return () => {
      unsubscribeCart();
      unsubscribeWishlist();
    };
  }, [user]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Shop', path: '/shop' },
    { name: 'Benefits', path: '/benefits' },
    { name: 'Contact us', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[100] border-b-4 border-[#8B7355] shadow-lg">
      {/* Village Style Announcement Bar */}
      <div className="bg-[#1C3B24] text-[#FDFBF7] py-2.5 px-4 overflow-hidden relative border-b border-[#FDFBF7]/5">
        {/* Stamp Aesthetic Decoration */}
        <div className="absolute top-1/2 left-3 -translate-y-1/2 w-4 h-4 border-t-2 border-l-2 border-[#D9A036] rounded-tl-sm pointer-events-none"></div>
        <div className="absolute top-1/2 right-3 -translate-y-1/2 w-4 h-4 border-b-2 border-r-2 border-[#D9A036] rounded-br-sm pointer-events-none"></div>
        
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="flex gap-16 whitespace-nowrap items-center text-[10px] md:text-[11px] font-bold tracking-[0.25em] uppercase font-serif italic"
        >
          <span className="flex items-center gap-2 grayscale-[20%] sepia-[10%]"><Leaf size={14} className="text-[#D9A036]" /> 100% Natural Ingredients</span>
          <span className="flex items-center gap-2 grayscale-[20%] sepia-[10%]"><div className="w-2 h-2 rounded-sm bg-[#D9A036]" /> No Preservatives</span>
          <span className="flex items-center gap-2 grayscale-[20%] sepia-[10%]">💪 High Protein & Fiber</span>
          <span className="flex items-center gap-2 grayscale-[20%] sepia-[10%]">🚚 Delivered Across India</span>
          {/* Duplicates for seamless loop */}
          <span className="flex items-center gap-2 grayscale-[20%] sepia-[10%]"><Leaf size={14} className="text-[#D9A036]" /> 100% Natural Ingredients</span>
          <span className="flex items-center gap-2 grayscale-[20%] sepia-[10%]"><div className="w-2 h-2 rounded-sm bg-[#D9A036]" /> No Preservatives</span>
          <span className="flex items-center gap-2 grayscale-[20%] sepia-[10%]">💪 High Protein & Fiber</span>
          <span className="flex items-center gap-2 grayscale-[20%] sepia-[10%]">🚚 Delivered Across India</span>
        </motion.div>
      </div>

      {/* Main Village Aesthetic Navbar with Heavy Frames */}
      <motion.nav 
        style={{ 
          height: headerHeight,
          backgroundColor: headerBg,
          boxShadow: headerShadow,
          backdropFilter: 'blur(10px)' // reduced blur for rustic feel
        }}
        className="px-6 md:px-12 flex items-center transition-all duration-300 bg-[#E5D3B3]" // light parchment background as base
      >
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          
          {/* Logo with dynamic scale - Redesigned Village Style */}
          <motion.div style={{ scale: logoScale }}>
            <Link to="/" className="flex items-center gap-4 group relative z-[110]">
              {/* Asymmetrical "Farm Cut" logo container */}
              <div className="w-12 h-12 bg-[#1C3B24] rounded-tl-3xl rounded-br-3xl flex items-center justify-center text-[#D9A036] transition-all duration-500 group-hover:rotate-[360deg] shadow-lg shadow-[#1C3B24]/20 border-2 border-[#5C4033]">
                <Leaf size={24} strokeWidth={2} />
              </div>
              <div className="flex flex-col -space-y-1.5">
                <span className="text-3xl font-serif font-extrabold text-[#1C2B21] tracking-tight group-hover:text-[#1C3B24] transition-colors">SATTU</span>
                <div className="flex items-center gap-1.5">
                  <div className="h-[2px] w-3 bg-[#8B7355]" />
                  <span className="text-[10px] tracking-[0.4em] font-bold text-[#8B7355] uppercase font-sans">Drink</span>
                  <div className="h-[2px] w-3 bg-[#8B7355]" />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation - Minimalist Village Feel */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className="px-6 py-2.5 text-[12px] font-bold uppercase tracking-widest text-[#1C2B21] relative group border border-transparent hover:border-[#8B7355]/40 transition-all rounded-sm"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-[#1C3B24]">{link.name}</span>
                {/* Traditional Hover Ink Underline */}
                <span className="absolute bottom-1.5 left-1/2 w-0 h-[3px] bg-[#D9A036] transition-all duration-300 -translate-x-1/2 group-hover:w-[70%] rounded-md" />
                {location.pathname === link.path && (
                  <motion.span 
                    layoutId="activeNav"
                    className="absolute inset-0 bg-[#D9A036]/10 rounded-sm -z-0 border-asymmetrical" // subtle active background with cut corners
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Icons - Interactive, Sepia Toned & Traditional */}
          <div className="flex items-center gap-1.5 md:gap-4 relative z-[110]">
            <motion.button 
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(28, 59, 36, 0.05)' }}
              whileTap={{ scale: 0.95 }}
              className="text-[#1C3B24] p-3 rounded-full transition-all hidden sm:block grayscale-[15%] sepia-[10%] hover:grayscale-0 hover:sepia-0"
            >
              <Search size={21} strokeWidth={2.5} />
            </motion.button>
            <Link to="/wishlist" className="relative group grayscale-[15%] sepia-[10%] hover:grayscale-0 hover:sepia-0">
              <motion.div
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(28, 59, 36, 0.05)' }}
                whileTap={{ scale: 0.95 }}
                className="text-[#1C3B24] p-3 rounded-full transition-all hidden sm:block"
              >
                <Heart size={21} strokeWidth={2.5} />
              </motion.div>
              {wishlistCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1.5 -right-1.5 bg-[#D9A036] text-[#FDFBF7] text-[10px] font-black w-6 h-6 rounded-full flex items-center justify-center shadow-lg border-2 border-[#5C4033]"
                >
                  {wishlistCount}
                </motion.span>
              )}
            </Link>
            <Link to="/account" className="grayscale-[15%] sepia-[10%] hover:grayscale-0 hover:sepia-0">
              <motion.div
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(28, 59, 36, 0.05)' }}
                whileTap={{ scale: 0.95 }}
                className="text-[#1C3B24] p-3 rounded-full transition-all"
              >
                <User size={21} strokeWidth={2.5} />
              </motion.div>
            </Link>
            <Link to="/cart" className="relative group grayscale-[15%] sepia-[10%] hover:grayscale-0 hover:sepia-0">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-[#1C3B24] p-3 bg-[#1C3B24]/5 rounded-sm transition-all border-b-2 border-r-2 border-[#8B7355]/40"
              >
                <ShoppingCart size={23} strokeWidth={2.5} />
              </motion.div>
              {cartCount > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1.5 -right-1.5 bg-[#D9A036] text-[#FDFBF7] text-[10px] font-black w-6 h-6 rounded-full flex items-center justify-center shadow-lg border-2 border-[#5C4033]"
                >
                  {cartCount}
                </motion.span>
              )}
            </Link>
            <motion.button 
              whileTap={{ scale: 0.9 }}
              className="lg:hidden text-[#1C3B24] p-2.5 ml-2.5"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={30} strokeWidth={2.5} /> : <Menu size={30} strokeWidth={2.5} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Full-Screen Village Style Mobile Menu with Traditional Frames */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#FDFBF7] z-[90] flex flex-col p-10 pt-48 lg:hidden"
          >
            {/* Ink Stamp Corner Decorations for Traditional Feel */}
            <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#D9A036] rounded-tr-sm pointer-events-none grayscale-[20%] sepia-[10%]"></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#D9A036] rounded-bl-sm pointer-events-none grayscale-[20%] sepia-[10%]"></div>

            <div className="flex flex-col gap-10">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                >
                  <Link 
                    to={link.path}
                    className="text-6xl md:text-7xl font-serif font-extrabold text-[#1C2B21] hover:text-[#D9A036] transition-colors flex items-end gap-6 group tracking-tight"
                  >
                    <span className="text-xl md:text-2xl font-black text-[#D9A036] font-mono">0{idx + 1}</span>
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto flex flex-col gap-10 pt-16 border-t-2 border-[#8B7355]/20">
               {/* Asymmetrical "Farm Cut" button frames */}
               <div className="grid grid-cols-2 gap-5">
                  <motion.div whileTap={{ scale: 0.95 }} className="w-full h-16 rounded-tl-3xl rounded-br-3xl bg-[#1C3B24] flex items-center justify-center border-2 border-[#5C4033] shadow-lg shadow-[#1C3B24]/20 hover:scale-[1.02] transition-transform">
                    <Link to="/account" className="text-[#E5D3B3] font-sans font-bold uppercase tracking-[0.25em] text-[11px]">
                      My Profile
                    </Link>
                  </motion.div>
                  <motion.div whileTap={{ scale: 0.95 }} className="w-full h-16 border-2 border-[#1C3B24] rounded-tl-3xl rounded-br-3xl flex items-center justify-center bg-transparent hover:scale-[1.02] transition-transform">
                    <Link to="/contact" className="text-[#1C3B24] font-sans font-bold uppercase tracking-[0.25em] text-[11px]">
                      Support
                    </Link>
                  </motion.div>
               </div>
               <div className="flex justify-between items-center text-[#8B7355] text-[11px] font-medium tracking-[0.2em] font-sans uppercase">
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

      <style jsx global>{`
        .grayscale-[20%] {
          filter: grayscale(20%) sepia(10%);
        }
        .grayscale-[15%] {
          filter: grayscale(15%) sepia(10%);
        }
        .border-asymmetrical {
          border-radius: 4px; /* Default small radius for modern active bg */
          /* Traditional "Village Cut" Corners */
          border-top-left-radius: 12px;
          border-bottom-right-radius: 12px;
        }
      `}</style>
    </header>
  );
};

export default Header;