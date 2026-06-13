import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { db } from '../components/Firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useAuth } from '../components/useAuth';
import { 
  Star, 
  Shield, 
  Truck, 
  Heart, 
  ShoppingBag, 
  Share2, 
  Info, 
  Leaf, 
  Sparkles,
  ChevronRight,
  Maximize2,
  X,
  ArrowLeft
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AccordionItem = ({ title, children, isOpen, onClick }) => {
  return (
    <div className="border-b border-[#0A1E13]/10">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between group"
      >
        <span className="text-base font-bold uppercase tracking-[0.2em] text-[#0A1E13] group-hover:text-[#845E35] transition-colors text-left">
          {title}
        </span>
        <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronRight size={20} className="text-[#0A1E13]/30" />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-8 text-base text-[#0A1E13]/70 font-light leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openAccordion, setOpenAccordion] = useState('description');
  const [quantity, setQuantity] = useState(1);
  const [feedbackMessage, setFeedbackMessage] = useState(null);

  const premiumEase = [0.215, 0.61, 0.355, 1];

  useEffect(() => {
    const load = async () => {
      const ref = doc(db, "products", id);
      const snap = await getDoc(ref);
      if (snap.exists()) {
        setProduct({ id: snap.id, ...snap.data() });
      }
      setLoading(false);
    };
    load();
  }, [id]);

  const triggerToast = (msg) => {
    setFeedbackMessage(msg);
    setTimeout(() => setFeedbackMessage(null), 4000);
  };

  const addToCollection = async (collectionName) => {
    if (!user) {
      navigate('/login');
      return;
    }
    if (!product) return;

    try {
      const itemRef = doc(db, "users", user.uid, collectionName, product.id);
      await setDoc(itemRef, {
        name: product.name,
        price: product.price,
        image: product.image || product.images?.[0] || "",
        addedAt: new Date().toISOString(),
        quantity: quantity,
        flavor: product.flavor || ''
      });
      triggerToast(`Successfully added to your ${collectionName}!`);
    } catch (error) {
      console.error(`Error adding to ${collectionName}:`, error);
      triggerToast("An error occurred. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FBF9F6] flex flex-col items-center justify-center gap-6">
        <div className="w-16 h-[1px] bg-[#D4B27A] animate-pulse" />
        <p className="text-sm font-bold uppercase tracking-[0.4em] text-[#0A1E13]/40">Gathering Essentials...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-[#FBF9F6] flex flex-col items-center justify-center text-center p-8">
        <div className="w-16 h-16 border border-[#0A1E13]/10 flex items-center justify-center text-[#0A1E13]/20 mb-8 rounded-full">
          <Info size={24} strokeWidth={1} />
        </div>
        <h3 className="text-3xl font-serif text-[#0A1E13] mb-4">Product Not Found</h3>
        <p className="text-base text-[#0A1E13]/50 font-light max-w-sm mx-auto mb-10 leading-relaxed">
          The requested product could not be located in our inventory.
        </p>
        <Link to="/shop" className="px-12 py-5 bg-[#0A1E13] text-white font-bold text-sm uppercase tracking-[0.3em] hover:bg-[#845E35] transition-all rounded-full shadow-lg">
          Return To Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FBF9F6] pt-24 lg:pt-36 pb-24 text-[#0A1E13] relative selection:bg-[#0A1E13] selection:text-white">
      {/* Structural Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#0A1E13_1px,transparent_1px)] [background-size:32px_32px]"></div>

      {/* Premium Toast System */}
      <AnimatePresence>
        {feedbackMessage && (
          <motion.div 
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 20, x: '-50%' }}
            className="fixed bottom-12 left-1/2 z-50 bg-[#0A1E13] text-white px-8 py-6 rounded-2xl shadow-2xl flex items-center gap-6 backdrop-blur-xl bg-opacity-95 max-w-md w-[90%] border border-white/10"
          >
            <Sparkles size={20} className="text-[#D4B27A] shrink-0" />
            <p className="text-sm font-medium tracking-wide flex-1">{feedbackMessage}</p>
            <button onClick={() => setFeedbackMessage(null)} className="opacity-40 hover:opacity-100 transition-opacity">
              <X size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* ================= BREADCRUMB NAVIGATION ================= */}
        <nav className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-[#0A1E13]/30 mb-8 lg:mb-12">
          <Link to="/" className="hover:text-[#0A1E13] transition-colors">Home</Link>
          <ChevronRight size={12} strokeWidth={3} />
          <Link to="/shop" className="hover:text-[#0A1E13] transition-colors">Shop</Link>
          <ChevronRight size={12} strokeWidth={3} />
          <span className="text-[#0A1E13] truncate">{product.name}</span>
        </nav>

        {/* ================= MAIN PRODUCT GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* LEFT COLUMN: IMAGE GALLERY */}
          <div className="lg:col-span-5 space-y-10 lg:sticky lg:top-36">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: premiumEase }}
              className="relative aspect-square bg-[#EFECE5] overflow-hidden group rounded-[2.5rem] shadow-xl border border-[#0A1E13]/5"
            >
              <img
                src={product.image || product.images?.[0] || "https://images.unsplash.com/photo-1594488651083-023b857dc3f8?q=80&w=600&auto=format&fit=crop"}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-[2.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
              />
              
              <div className="absolute top-8 left-8 flex flex-col gap-3">
                <span className="px-6 py-2.5 bg-white/90 backdrop-blur-md text-xs font-bold uppercase tracking-[0.2em] text-[#0A1E13] rounded-full shadow-lg border border-[#0A1E13]/5">
                  {product.category || 'Curated Reserve'}
                </span>
                {product.flavor && (
                  <span className="px-6 py-2.5 bg-[#0A1E13] text-white text-xs font-bold uppercase tracking-[0.2em] rounded-full shadow-lg">
                    {product.flavor}
                  </span>
                )}
              </div>

              <button className="absolute bottom-8 right-8 w-14 h-14 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-[#0A1E13] hover:bg-white transition-all shadow-xl opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                <Maximize2 size={24} strokeWidth={1.5} />
              </button>
            </motion.div>
            
            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { icon: Leaf, label: '100% Organic', sub: 'Bio-Certified' },
                { icon: Shield, label: 'Pure Source', sub: 'Non-GMO' },
                { icon: Truck, label: 'Fast Shipping', sub: 'Eco-Packed' }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex flex-col items-center justify-center p-8 bg-white/50 backdrop-blur-sm border border-[#0A1E13]/5 rounded-[2rem] hover:border-[#D4B27A]/40 hover:bg-white transition-all duration-500 group shadow-sm hover:shadow-md">
                    <Icon size={24} strokeWidth={1.5} className="text-[#D4B27A] mb-4 group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#0A1E13] text-center mb-1">{item.label}</span>
                    <span className="text-[9px] uppercase tracking-wider text-[#0A1E13]/40">{item.sub}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: PRODUCT INFO */}
          <div className="lg:col-span-7 flex flex-col pt-2">
            <header className="space-y-6 pb-10">
              <div className="flex items-center gap-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={14} 
                      fill={i < Math.floor(product.rating || 4.8) ? "#D4B27A" : "none"} 
                      className={i < Math.floor(product.rating || 4.8) ? "text-[#D4B27A]" : "text-[#0A1E13]/10"} 
                    />
                  ))}
                </div>
                <span className="text-sm font-bold text-[#0A1E13]/40 uppercase tracking-[0.2em]">
                  {product.rating || 4.8} / 5.0 Rating
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-serif font-normal text-[#0A1E13] tracking-tight leading-[1.2]">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-8">
                <div className="flex items-baseline gap-4">
                  <span className="text-3xl font-serif text-[#0A1E13]">₹{product.price}</span>
                  {product.original_price && product.original_price > product.price && (
                    <span className="text-xl text-[#0A1E13]/20 line-through font-serif">₹{product.original_price}</span>
                  )}
                </div>
                {product.net_quantity && (
                  <span className="h-10 flex items-center px-5 border border-[#0A1E13]/10 text-xs font-bold uppercase tracking-[0.2em] text-[#0A1E13]/60 rounded-full">
                    {product.net_quantity}
                  </span>
                )}
              </div>
            </header>

            <div className="py-10 border-y border-[#0A1E13]/10 space-y-12">
              <p className="text-lg text-[#0A1E13]/70 font-light leading-relaxed">
                {product.description || 'Experience the perfect balance of taste and wellness with our sustainably sourced, traditional formulation.'}
              </p>

              <div className="space-y-10">
                <div className="flex flex-col sm:flex-row gap-6">
                  {/* Quantity Hub */}
                  <div className="flex-1 max-w-[200px] flex flex-col gap-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#0A1E13]/30 ml-2">Allocation</label>
                    <div className="flex items-center justify-between h-16 px-4 bg-white border border-[#0A1E13]/10 rounded-2xl shadow-sm">
                      <button 
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-10 h-10 flex items-center justify-center text-2xl font-light hover:text-[#845E35] transition-colors"
                      >
                        −
                      </button>
                      <span className="text-xl font-serif text-[#0A1E13]">{quantity}</span>
                      <button 
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-10 h-10 flex items-center justify-center text-2xl font-light hover:text-[#845E35] transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Primary Acton */}
                  <div className="flex-[2] flex flex-col gap-3">
                    <div className="hidden sm:block h-[14px]"></div> {/* Spacer for label alignment */}
                    <button
                      onClick={() => addToCollection("cart")}
                      className="w-full h-16 bg-[#0A1E13] text-white font-bold text-[12px] uppercase tracking-[0.4em] rounded-2xl hover:bg-[#845E35] hover:scale-[1.02] transition-all duration-500 flex items-center justify-center gap-4 group shadow-xl hover:shadow-2xl active:scale-[0.98]"
                    >
                      <ShoppingBag size={18} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
                      <span>Commit To Cart</span>
                    </button>
                  </div>

                  {/* Secondary Action */}
                  <div className="flex flex-col gap-3">
                    <div className="hidden sm:block h-[14px]"></div>
                    <button
                      onClick={() => addToCollection("wishlist")}
                      className="w-16 h-16 bg-white border border-[#0A1E13]/10 rounded-2xl flex items-center justify-center text-[#0A1E13]/40 hover:text-red-500 hover:border-red-500/30 hover:bg-red-50 transition-all duration-500 shadow-sm"
                    >
                      <Heart size={22} strokeWidth={1.5} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Accordion Stack */}
            <div className="mt-8 flex flex-col">
              <AccordionItem 
                title="Description" 
                isOpen={openAccordion === 'description'} 
                onClick={() => setOpenAccordion(openAccordion === 'description' ? '' : 'description')}
              >
                <div className="space-y-6">
                  <p className="font-serif italic text-lg leading-relaxed text-[#0A1E13]/80">
                    {product.description || 'Our signature sattu is crafted following a heritage process of roasting and slow-griding, ensuring that every spoonful carries the rich, earthy soul of traditional Indian wellness.'}
                  </p>
                  <div className="p-8 bg-white border border-[#0A1E13]/5 rounded-[2rem] shadow-sm">
                    <p className="text-base leading-relaxed">
                      This formulation is designed for those who seek high-protein sustenance without compromising on purity. It is naturally cooling, easy to digest, and rich in essential minerals.
                    </p>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem 
                title="Ingredients" 
                isOpen={openAccordion === 'ingredients'} 
                onClick={() => setOpenAccordion(openAccordion === 'ingredients' ? '' : 'ingredients')}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {(product.ingredients || 'Roasted Bengal Gram, Organic Minerals, Heritage Spices').split(',').map((ing, i) => (
                    <div key={i} className="flex items-center gap-4 p-5 bg-white border border-[#0A1E13]/5 rounded-2xl shadow-sm">
                      <div className="w-10 h-10 rounded-full bg-[#EFECE5] flex items-center justify-center text-[#D4B27A]">
                        <Leaf size={18} />
                      </div>
                      <span className="text-sm font-bold uppercase tracking-[0.15em]">{ing.trim()}</span>
                    </div>
                  ))}
                </div>
              </AccordionItem>

              <AccordionItem 
                title="Nutrition" 
                isOpen={openAccordion === 'nutrition'} 
                onClick={() => setOpenAccordion(openAccordion === 'nutrition' ? '' : 'nutrition')}
              >
                <div className="bg-[#0A1E13] text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                  <div className="space-y-6 font-serif text-lg">
                    {product.nutritional_info ? (
                      <p className="whitespace-pre-line leading-loose">{product.nutritional_info}</p>
                    ) : (
                      <div className="grid grid-cols-1 gap-6">
                        <div className="flex justify-between border-b border-white/10 pb-4"><span>High Protein</span><span className="text-[#D4B27A]">18g / Serving</span></div>
                        <div className="flex justify-between border-b border-white/10 pb-4"><span>Dietary Fiber</span><span className="text-[#D4B27A]">12g / Serving</span></div>
                        <div className="flex justify-between border-b border-white/10 pb-4"><span>Clean Energy</span><span className="text-[#D4B27A]">360 kcal</span></div>
                        <div className="flex justify-between"><span>Purity Index</span><span className="text-[#D4B27A]">100% Organic</span></div>
                      </div>
                    )}
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem 
                title="Preparation Guide" 
                isOpen={openAccordion === 'preparation'} 
                onClick={() => setOpenAccordion(openAccordion === 'preparation' ? '' : 'preparation')}
              >
                <div className="space-y-8">
                  <div className="bg-[#EFECE5]/50 p-8 rounded-[2rem] border border-[#0A1E13]/5">
                    <p className="text-lg font-serif italic text-[#0A1E13] mb-6">"Traditional Ritual for Modern Vitality"</p>
                    <p className="text-base leading-relaxed">
                      {product.how_to_prepare || 'Mix 2-3 tablespoons into 300ml of chilled water or fresh buttermilk. Stir until fully suspended. For a savory variant, add black salt, cumin, and lemon.'}
                    </p>
                  </div>
                  <div className="p-8 border border-[#D4B27A]/30 bg-white rounded-[2rem] flex gap-6 items-start">
                    <div className="w-12 h-12 bg-[#FAF9F6] rounded-full flex items-center justify-center shrink-0 shadow-sm">
                      <Sparkles size={20} className="text-[#D4B27A]" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-bold uppercase tracking-widest text-[#D4B27A]">Heritage Tip</p>
                      <p className="text-sm italic leading-relaxed">Combine with organic jaggery and a pinch of cardamom for a powerful morning energy elixir.</p>
                    </div>
                  </div>
                </div>
              </AccordionItem>
            </div>

            {/* Bottom Status Hub */}
            <div className="mt-12 pt-10 border-t border-[#0A1E13]/5 flex flex-wrap gap-10">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.5)] animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#0A1E13]/50">In Stock: Dispatch Within 24h</span>
              </div>
              <div className="flex items-center gap-3">
                <Truck size={18} strokeWidth={1.5} className="text-[#0A1E13]/30" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#0A1E13]/50">Free Express Delivery Nationwide</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetail;