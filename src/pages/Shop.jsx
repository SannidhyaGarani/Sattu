import React, { useState, useEffect } from "react";
import { db } from "../components/Firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { Search, Heart, Plus, SlidersHorizontal, ArrowUpRight, X, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/useAuth";
import { doc, setDoc } from "firebase/firestore";
import { motion, AnimatePresence } from "framer-motion";
import PageHeader from "../components/Sattu/PageHeader";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFlavor, setSelectedFlavor] = useState("All");
  const [feedbackMessage, setFeedbackMessage] = useState(null);
  
  const navigate = useNavigate();
  const { user } = useAuth();

  const premiumEase = [0.215, 0.61, 0.355, 1];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const q = query(collection(db, "products"), orderBy("createdAt", "desc"));
        const snap = await getDocs(q);
        setProducts(snap.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const triggerToast = (msg) => {
    setFeedbackMessage(msg);
    setTimeout(() => setFeedbackMessage(null), 4000);
  };

  const addToCollection = async (e, product, collectionName) => {
    e.stopPropagation();
    if (!user) {
      navigate("/login");
      return;
    }
    try {
      const itemRef = doc(db, "users", user.uid, collectionName, product.id);
      await setDoc(itemRef, {
        name: product.name,
        price: product.price,
        image: product.image || product.images?.[0] || "",
        addedAt: new Date().toISOString(),
        flavor: product.flavor || "",
      });
      triggerToast(`Successfully added to your ${collectionName}!`);
    } catch (error) {
      console.error(`Error adding to ${collectionName}:`, error);
      triggerToast("An error occurred. Please try again.");
    }
  };

  const flavors = ["All", "Classic Roasted", "Elaichi", "Rose", "Dry Fruit", "Chocolate", "Namkeen Spicy"];
  
  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.name?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFlavor =
      selectedFlavor === "All" ||
      (p.flavor && p.flavor.toLowerCase() === selectedFlavor.toLowerCase());
    return matchesSearch && matchesFlavor;
  });

  return (
    <div className="min-h-screen bg-[#FBF9F6] selection:bg-[#0A1E13] selection:text-[#FBF9F6]">
      <PageHeader
        title="Signature Collection"
        subtitle="Organic Reserve"
        breadcrumbItems={[
          { label: "Home", path: "/" },
          { label: "Collection" },
        ]}
      />

      <div className="max-w-8xl mx-auto px-6 md:px-12 lg:px-16 relative z-10 pb-24 pt-12">
        {/* Filters & Search */}
        <div className="flex flex-col lg:flex-row gap-8 mb-20 items-start lg:items-end justify-between border-b border-[#0A1E13]/5 pb-12">
          {/* Minimalist Search Tunnel */}
          <div className="w-full lg:w-1/3 relative group">
            <Search
              className="absolute left-0 top-1/2 -translate-y-1/2 text-[#0A1E13]/20 group-focus-within:text-[#D4B27A] transition-colors"
              size={16}
              strokeWidth={1}
            />
            <input
              type="text"
              placeholder="Search collection..."
              className="w-full bg-transparent border-b border-[#0A1E13]/10 pl-8 pr-6 py-4 text-xs font-light text-[#0A1E13] outline-none placeholder:text-[#0A1E13]/20 focus:border-[#D4B27A] transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Premium Filter Track */}
          <div className="w-full lg:w-2/3 flex flex-wrap gap-x-8 gap-y-4 items-center justify-start lg:justify-end">
            {flavors.map((flavor) => (
              <button
                key={flavor}
                onClick={() => setSelectedFlavor(flavor)}
                className={`text-[9px] font-bold uppercase tracking-[0.3em] whitespace-nowrap transition-all duration-500 relative py-2 ${
                  selectedFlavor === flavor
                    ? "text-[#0A1E13]"
                    : "text-[#0A1E13]/40 hover:text-[#0A1E13]"
                }`}
              >
                {flavor}
                {selectedFlavor === flavor && (
                  <motion.div 
                    layoutId="filter-accent"
                    className="absolute bottom-0 left-0 w-full h-[1px] bg-[#D4B27A]" 
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Product Collection Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="space-y-6 animate-pulse">
                <div className="aspect-[3/4] bg-[#EFECE5]" />
                <div className="h-4 bg-[#EFECE5] w-2/3" />
                <div className="h-3 bg-[#EFECE5] w-1/2" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-16">
            {filteredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.6, ease: premiumEase }}
                onClick={() => navigate(`/product/${product.id}`)}
                className="group cursor-pointer flex flex-col h-full bg-transparent border border-transparent hover:border-[#D4B27A]/10 transition-colors duration-500"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-[#EFECE5]">
                  <img
                    src={product.image || product.images?.[0] || "https://images.unsplash.com/photo-1594488651083-023b857dc3f8?q=80&w=600&auto=format&fit=crop"}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-[0.215,0.61,0.355,1] group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col gap-2">
                    <button
                      onClick={(e) => addToCollection(e, product, "wishlist")}
                      className="w-9 h-9 bg-white/80 backdrop-blur-sm flex items-center justify-center text-[#0A1E13] hover:bg-[#0A1E13] hover:text-[#FBF9F6] transition-all"
                    >
                      <Heart size={16} strokeWidth={1} />
                    </button>
                  </div>
                </div>

                <div className="py-6 px-4 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4B27A]">
                      {product.flavor || "Organic Reserve"}
                    </span>
                    <span className="text-[10px] font-medium text-[#0A1E13]/40">★ {product.rating || "4.9"}</span>
                  </div>
                  <h3 className="text-xl font-serif font-light text-[#0A1E13] mb-4 group-hover:text-[#D4B27A] transition-colors duration-300">
                    {product.name}
                  </h3>

                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-[#0A1E13]/5">
                    <div className="flex items-baseline gap-2">
                      <span className="font-sans text-lg font-medium text-[#0A1E13]">₹{product.price}</span>
                      {product.original_price && product.original_price > product.price && (
                        <span className="text-xs text-[#0A1E13]/30 line-through">₹{product.original_price}</span>
                      )}
                    </div>
                    <button 
                      onClick={(e) => addToCollection(e, product, "cart")}
                      className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0A1E13] border-b border-[#0A1E13] pb-0.5 hover:text-[#D4B27A] hover:border-[#D4B27A] transition-all"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Empty Filter Landing */}
        {!loading && filteredProducts.length === 0 && (
          <div className="text-center py-28 max-w-xl mx-auto">
            <div className="w-12 h-12 rounded-full border border-[#0A1E13]/5 flex items-center justify-center text-[#0A1E13]/20 mx-auto mb-6">
              <Search size={16} strokeWidth={1} />
            </div>
            <h3 className="text-xl font-serif font-light text-[#0A1E13] mb-2">No results found</h3>
            <p className="text-xs text-[#0A1E13]/40 font-light max-w-xs mx-auto leading-relaxed">
              Try adjusting your search criteria or reset the filters.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedFlavor("All");
              }}
              className="mt-8 text-[10px] font-bold uppercase tracking-[0.3em] text-[#D4B27A] hover:text-[#0A1E13] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Feedback Toast */}
      <AnimatePresence>
        {feedbackMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 20, x: "-50%" }}
            className="fixed bottom-12 left-1/2 z-50 bg-[#0A1E13] border border-white/10 text-[#FBF9F6] px-8 py-5 rounded-none shadow-2xl flex items-center gap-6 backdrop-blur-md max-w-md w-[90%]"
          >
            <Sparkles size={18} className="text-[#D4B27A] shrink-0" />
            <p className="text-[10px] uppercase font-bold tracking-[0.2em] flex-1">{feedbackMessage}</p>
            <button
              onClick={() => setFeedbackMessage(null)}
              className="opacity-40 hover:opacity-100 transition-opacity"
            >
              <X size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Shop;
