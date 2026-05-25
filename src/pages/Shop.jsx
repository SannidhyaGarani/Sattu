import React, { useState, useEffect } from 'react';
import { db } from '../components/Firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { Search, Heart, Eye, Plus, Leaf } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/useAuth';
import { doc, setDoc } from 'firebase/firestore';
import { motion, AnimatePresence } from 'framer-motion';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const q = query(collection(db, "products"), orderBy("createdAt", "desc"));
        const snap = await getDocs(q);
        setProducts(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const addToCollection = async (e, product, collectionName) => {
    e.stopPropagation();
    if (!user) {
      navigate('/login');
      return;
    }
    try {
      const itemRef = doc(db, "users", user.uid, collectionName, product.id);
      await setDoc(itemRef, {
        name: product.name,
        price: product.price,
        image: product.image || product.images?.[0] || "",
        addedAt: new Date().toISOString()
      });
      alert(`Added to ${collectionName}!`);
    } catch (error) {
      console.error(`Error adding to ${collectionName}:`, error);
    }
  };

  const categories = ['All', 'Sattu Mix', 'Beverages', 'Shakers', 'Combos'];
  
  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-brand-cream pt-40 pb-20 grainy">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-olive/10 text-brand-olive text-[10px] font-black uppercase tracking-[0.3em]">
              The Collection
            </span>
            <h1 className="text-6xl md:text-8xl font-serif text-brand-olive leading-[0.85] tracking-tighter">
              Pure <span className="text-brand-brown italic">Flavours</span>
            </h1>
          </motion.div>
          <p className="text-lg text-brand-olive/40 font-bold uppercase tracking-widest pb-2">
            {filteredProducts.length} Blends
          </p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          <div className="relative flex-1 group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-brand-olive/20 group-focus-within:text-brand-olive transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Search our natural blends..." 
              className="w-full bg-white border border-brand-olive/5 rounded-[32px] pl-16 pr-8 py-5 text-sm font-bold text-brand-olive outline-none focus:border-brand-olive/20 transition-all shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-3 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-8 py-5 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all ${selectedCategory === cat ? 'bg-brand-olive text-brand-cream shadow-premium' : 'bg-white text-brand-olive hover:bg-brand-olive/5 border border-brand-olive/5'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="aspect-[4/5] rounded-[48px] bg-white animate-pulse border border-brand-olive/5" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, idx) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => navigate(`/product/${product.id}`)}
                className="group relative bg-white rounded-[48px] p-6 transition-all duration-500 hover:shadow-premium border border-brand-olive/5 cursor-pointer overflow-hidden"
              >
                <div className="relative aspect-square mb-8 bg-brand-cream/30 rounded-[40px] overflow-hidden group-hover:scale-[0.98] transition-transform duration-700 flex items-center justify-center">
                  <img 
                    src={product.image || product.images?.[0]} 
                    alt={product.name} 
                    className="w-full h-full object-contain p-8 transform transition-transform duration-1000 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
                  />
                  
                  {/* Floating Actions */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                    <button 
                      onClick={(e) => addToCollection(e, product, 'wishlist')}
                      className="p-4 bg-white/80 backdrop-blur-md rounded-2xl text-brand-olive hover:bg-brand-olive hover:text-brand-cream transition-all shadow-lg"
                    >
                      <Heart size={20} />
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-brown">
                      {product.category || 'Natural Mix'}
                    </span>
                    <div className="flex items-center gap-1">
                      <Leaf size={12} className="text-brand-olive" />
                      <span className="text-[10px] font-black text-brand-olive">{product.rating || '4.8'}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-brand-olive leading-tight h-14 line-clamp-2">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-brand-olive/5">
                    <span className="text-2xl font-serif font-bold text-brand-olive">₹{product.price}</span>
                    <button 
                      onClick={(e) => addToCollection(e, product, 'cart')}
                      className="w-14 h-14 bg-brand-olive text-brand-cream rounded-2xl flex items-center justify-center hover:bg-brand-olive-light transition-all shadow-lg"
                    >
                      <Plus size={24} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && filteredProducts.length === 0 && (
          <div className="text-center py-32 bg-white rounded-[64px] border-2 border-dashed border-brand-olive/10">
            <div className="w-20 h-20 rounded-full bg-brand-cream flex items-center justify-center text-brand-olive/20 mx-auto mb-6">
              <Search size={40} />
            </div>
            <h3 className="text-2xl font-bold text-brand-olive mb-2">No results found</h3>
            <p className="text-sm text-brand-olive/40 font-medium italic">We couldn't find any blends matching your search.</p>
            <button 
              onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
              className="mt-8 text-[10px] font-black uppercase tracking-[0.2em] text-brand-brown hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;