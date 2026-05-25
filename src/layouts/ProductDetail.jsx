import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { db } from "../components/Firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useAuth } from "../components/useAuth";
import { Star, Shield, Truck, RotateCcw, Heart, ShoppingBag, ArrowLeft, Share2, Info, Leaf, Zap, Coffee } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('description');
  const [quantity, setQuantity] = useState(1);
  const [selectedWeight, setSelectedWeight] = useState('500g');

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

  const addToCollection = async (collectionName) => {
    if (!user) {
      navigate("/login");
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
        weight: selectedWeight
      });
      alert(`Added to ${collectionName}!`);
    } catch (error) {
      console.error(`Error adding to ${collectionName}:`, error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-brand-cream flex flex-col items-center justify-center gap-4">
        <div className="w-12 h-12 border-4 border-brand-olive/20 border-t-brand-olive rounded-full animate-spin" />
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-olive/40">Preparing your natural blend...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-brand-cream flex flex-col items-center justify-center gap-6">
        <p className="text-xl font-bold text-brand-olive">Product not found.</p>
        <button onClick={() => navigate('/')} className="px-8 py-3 rounded-2xl bg-brand-olive text-brand-cream font-bold text-xs uppercase tracking-widest hover:bg-brand-olive-light transition-colors">
          Back to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-cream pt-40 pb-20 grainy">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Breadcrumbs & Navigation */}
        <div className="flex items-center justify-between mb-12">
          <button 
            onClick={() => navigate(-1)}
            className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.25em] text-brand-olive/40 hover:text-brand-olive transition-colors"
          >
            <div className="w-8 h-8 rounded-full border border-brand-olive/10 flex items-center justify-center group-hover:border-brand-olive/30 transition-all">
              <ArrowLeft size={14} />
            </div>
            Back to Shop
          </button>
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-full border border-brand-olive/10 flex items-center justify-center text-brand-olive/40 hover:text-brand-olive hover:border-brand-olive/30 transition-all">
              <Share2 size={16} />
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">
          {/* Left: Visuals */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-[4/5] bg-white rounded-[48px] overflow-hidden border border-brand-olive/5 shadow-premium group"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain p-12 transform transition-transform duration-1000 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
              />
              <div className="absolute top-8 left-8">
                <span className="px-5 py-2 rounded-2xl bg-white/90 backdrop-blur-md text-[10px] font-black uppercase tracking-[0.2em] text-brand-olive shadow-sm border border-brand-olive/10">
                  {product.category || 'Natural Mix'}
                </span>
              </div>
            </motion.div>
            
            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: <Leaf size={20} />, text: '100% Organic' },
                { icon: <Shield size={20} />, text: 'Zero Preservatives' },
                { icon: <RotateCcw size={20} />, text: 'Fresh Batch Guarantee' }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center p-6 rounded-[32px] bg-white border border-brand-olive/5 space-y-3 shadow-sm hover:border-brand-olive/20 transition-all">
                  <div className="text-brand-brown">{item.icon}</div>
                  <p className="text-[9px] font-black uppercase tracking-widest text-brand-olive/60 leading-tight">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill={i < 4 ? "#6D4C3D" : "none"} className={i < 4 ? "text-brand-brown" : "text-brand-olive/10"} />
                  ))}
                </div>
                <span className="text-[10px] font-black text-brand-olive/40 uppercase tracking-widest">(4.8/5 based on 2k+ reviews)</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-serif text-brand-olive leading-[0.9] tracking-tighter">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-6">
                <span className="text-4xl font-serif font-black text-brand-brown">
                  ₹{product.price}
                </span>
                <div className="px-3 py-1 rounded-full bg-brand-olive/10 text-brand-olive text-[10px] font-black uppercase tracking-widest">
                  Ready to Ship
                </div>
              </div>
            </div>

            {/* Selection Controls */}
            <div className="space-y-6 pt-10 border-t border-brand-olive/10">
              <div className="flex items-center gap-8 flex-wrap">
                <div className="space-y-3">
                  <p className="text-[10px] font-black uppercase tracking-widest text-brand-olive/40">Quantity</p>
                  <div className="flex items-center bg-white rounded-2xl p-1 border border-brand-olive/10">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 flex items-center justify-center font-bold text-brand-olive hover:bg-brand-cream rounded-xl transition-all"
                    >-</button>
                    <span className="w-12 text-center font-bold text-brand-olive">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 flex items-center justify-center font-bold text-brand-olive hover:bg-brand-cream rounded-xl transition-all"
                    >+</button>
                  </div>
                </div>
                
                <div className="flex-1 space-y-3 min-w-[200px]">
                  <p className="text-[10px] font-black uppercase tracking-widest text-brand-olive/40">Select Weight</p>
                  <div className="flex gap-2">
                    {['250g', '500g', '1kg'].map((size) => (
                      <button 
                        key={size} 
                        onClick={() => setSelectedWeight(size)}
                        className={`flex-1 px-4 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${selectedWeight === size ? 'bg-brand-olive text-brand-cream' : 'bg-white text-brand-olive border border-brand-olive/10 hover:bg-brand-olive/5'}`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => addToCollection("cart")}
                  className="flex-1 h-16 rounded-[24px] bg-brand-olive text-brand-cream font-black text-xs uppercase tracking-[0.2em] shadow-premium hover:bg-brand-olive-light transition-all transform active:scale-95 flex items-center justify-center gap-3"
                >
                  <ShoppingBag size={18} />
                  Add to Cart
                </button>
                <button
                  onClick={() => addToCollection("wishlist")}
                  className="w-16 h-16 rounded-[24px] bg-white border border-brand-olive/10 flex items-center justify-center text-brand-olive hover:text-brand-brown hover:border-brand-brown transition-all"
                >
                  <Heart size={20} />
                </button>
              </div>
            </div>

            {/* Info Tabs */}
            <div className="space-y-6 pt-10 border-t border-brand-olive/10">
              <div className="flex gap-8 border-b border-brand-olive/10 pb-4 overflow-x-auto no-scrollbar">
                {['description', 'ingredients', 'benefits'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`text-[10px] font-black uppercase tracking-[0.25em] transition-all relative ${activeTab === tab ? 'text-brand-olive' : 'text-brand-olive/30 hover:text-brand-olive/60'}`}
                  >
                    {tab}
                    {activeTab === tab && <div className="absolute -bottom-[17px] left-0 right-0 h-1 bg-brand-brown rounded-full" />}
                  </button>
                ))}
              </div>
              
              <div className="min-h-[120px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-sm leading-relaxed text-brand-olive/70 font-medium"
                  >
                    {activeTab === 'description' && (
                       <p>Experience the authentic taste of roasted gram, stone-ground to perfection. Our signature blend is rich in protein and fiber, making it the perfect natural energy booster for your daily routine.</p>
                    )}
                    {activeTab === 'ingredients' && (
                      <div className="space-y-4">
                        <p className="text-[10px] font-black uppercase tracking-widest text-brand-brown">Natural Ingredients</p>
                        <p>Roasted Gram (Sattu), Cumin Seeds, Black Salt, Dried Ginger, Mint Powder, Roasted Peanuts (optional trace).</p>
                      </div>
                    )}
                    {activeTab === 'benefits' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          { icon: <Zap size={14}/>, text: 'Instant Clean Energy' },
                          { icon: <Shield size={14}/>, text: 'Superior Digestion' },
                          { icon: <Leaf size={14}/>, text: 'Cooling for the Body' },
                          { icon: <Coffee size={14}/>, text: 'Satisfyingly Filling' }
                        ].map((b, i) => (
                          <div key={i} className="flex items-center gap-3 text-xs font-bold text-brand-olive">
                            <div className="text-brand-brown">{b.icon}</div>
                            {b.text}
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Quick Tips */}
            <div className="p-6 rounded-[32px] bg-brand-cream border border-brand-olive/10 flex gap-4 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-white border border-brand-olive/10 flex items-center justify-center text-brand-brown flex-shrink-0 shadow-sm">
                <Info size={20} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-brand-olive">Pro Tip</p>
                <p className="text-xs text-brand-olive/60 font-medium leading-relaxed">Add a squeeze of lemon and some finely chopped coriander for the ultimate refreshing experience!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
