import React, { useEffect, useState } from "react";
import { useAuth } from "../components/useAuth";
import { db } from "../components/Firebase";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingBag, Trash2, ShieldCheck, Truck, RotateCcw } from "lucide-react";
import PageHeader from "../components/Sattu/PageHeader";

const Cart = () => {
  const { user } = useAuth();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const premiumEase = [0.215, 0.61, 0.355, 1];

  useEffect(() => {
    const load = async () => {
      if (!user) {
        setLoading(false);
        return;
      }
      try {
        const snap = await getDocs(collection(db, "users", user.uid, "cart"));
        const list = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
        setItems(list);
      } catch (error) {
        console.error("Error loading cart:", error);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [user]);

  const removeItem = async (id) => {
    if (!user) return;
    try {
      await deleteDoc(doc(db, "users", user.uid, "cart", id));
      setItems((prev) => prev.filter((i) => i.id !== id));
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  const total = items.reduce((sum, i) => sum + (Number(i.price) || 0), 0);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FBF9F6] flex items-center justify-center">
        <div className="w-10 h-[1px] bg-[#D4B27A] animate-pulse"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-[#FBF9F6]">
        <PageHeader
          title="Selection Manifest"
          subtitle="Your Curated Bag"
          breadcrumbItems={[
            { label: "Home", path: "/" },
            { label: "Selection" },
          ]}
        />
        <div className="py-24 px-6 relative z-10">
          <div className="bg-[#0A1E13] p-16 text-center max-w-xl mx-auto shadow-2xl">
            <div className="w-20 h-20 bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-10 text-[#D4B27A]">
              <ShoppingBag size={32} strokeWidth={1} />
            </div>
            <h2 className="text-3xl font-serif font-light text-[#FBF9F6] mb-6">
              Authentication Required
            </h2>
            <p className="text-[#FBF9F6]/40 text-xs font-light uppercase tracking-[0.2em] mb-10 leading-relaxed">
              Sign in to synchronize your organic selections and proceed to a seamless, premium checkout.
            </p>
            <Link
              to="/login"
              className="block w-full py-5 bg-[#D4B27A] text-[#0A1E13] font-bold text-[10px] uppercase tracking-[0.4em] hover:bg-[#FBF9F6] transition-all"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FBF9F6] selection:bg-[#0A1E13] selection:text-[#FBF9F6]">
      <PageHeader
        title="Selection Manifest"
        subtitle="Your Curated Bag"
        backUrl="/shop"
        breadcrumbItems={[
          { label: "Home", path: "/" },
          { label: "Collection", path: "/shop" },
          { label: "Manifest" },
        ]}
      />

      <div className="max-w-8xl mx-auto px-6 md:px-12 lg:px-16 py-12 relative z-10 pb-32">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          {/* Main Cart Area */}
          <div className="flex-1 w-full">
            {items.length === 0 ? (
              <div className="py-32 border border-[#0A1E13]/5 text-center px-6">
                <ShoppingBag size={40} strokeWidth={1} className="mx-auto text-[#0A1E13]/10 mb-8" />
                <h3 className="text-2xl font-serif font-light text-[#0A1E13] mb-4">Your manifest is clear</h3>
                <p className="text-[#0A1E13]/40 text-[10px] uppercase tracking-[0.3em] mb-12">
                  No organic formulations have been allocated to your bag.
                </p>
                <Link
                  to="/shop"
                  className="inline-block px-12 py-5 bg-[#0A1E13] text-[#FBF9F6] font-bold text-[10px] uppercase tracking-[0.4em] hover:bg-[#D4B27A] transition-all"
                >
                  Discover Collection
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-[10px] font-bold text-[#0A1E13]/20 uppercase tracking-[0.4em] mb-10 pb-4 border-b border-[#0A1E13]/5">
                  Allocated Items ({items.length})
                </p>
                <div className="divide-y divide-[#0A1E13]/5">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="group py-10 flex flex-col sm:flex-row items-center gap-12 transition-all duration-500"
                    >
                      <div className="w-32 h-40 bg-[#EFECE5] overflow-hidden flex-shrink-0 relative">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-[#0A1E13]/5" />
                      </div>
                      
                      <div className="flex-1 text-center sm:text-left space-y-4">
                        <div>
                          <span className="text-[9px] font-bold text-[#D4B27A] uppercase tracking-[0.3em] block mb-2">
                            {item.flavor || "Organic Formulation"}
                          </span>
                          <h3 className="text-2xl font-serif font-light text-[#0A1E13] group-hover:text-[#D4B27A] transition-colors duration-300">
                            {item.name}
                          </h3>
                        </div>
                        <div className="flex items-center justify-center sm:justify-start gap-8 pt-4">
                          <span className="text-xl font-sans font-medium text-[#0A1E13]">
                            ₹{Number(item.price).toFixed(0)}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-6 text-[#0A1E13]/20 hover:text-red-600 transition-all group-hover:text-[#0A1E13]/40"
                      >
                        <Trash2 size={18} strokeWidth={1} />
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Summary Sidebar */}
          {items.length > 0 && (
            <aside className="w-full lg:w-[450px] shrink-0">
              <div className="bg-[#0A1E13] p-12 sticky top-32 shadow-2xl">
                <div className="flex items-center gap-4 mb-10">
                  <div className="h-[1px] w-8 bg-[#D4B27A]" />
                  <h2 className="text-[10px] font-bold text-[#D4B27A] uppercase tracking-[0.4em]">
                    Order Summary
                  </h2>
                </div>
                
                <div className="space-y-6 mb-12 border-b border-white/5 pb-12">
                  <div className="flex justify-between text-[#FBF9F6]/40 text-[10px] font-bold uppercase tracking-[0.2em]">
                    <span>Subtotal</span>
                    <span className="text-[#FBF9F6]">₹{total.toFixed(0)}</span>
                  </div>
                  <div className="flex justify-between text-[#FBF9F6]/40 text-[10px] font-bold uppercase tracking-[0.2em]">
                    <span>Allocation / Shipping</span>
                    <span className="text-[#D4B27A]">Complimentary</span>
                  </div>
                  <div className="flex justify-between text-[#FBF9F6]/40 text-[10px] font-bold uppercase tracking-[0.2em]">
                    <span>Registry Tax</span>
                    <span className="text-[#FBF9F6]">₹0</span>
                  </div>
                </div>

                <div className="flex justify-between items-end mb-12">
                  <span className="text-[11px] font-bold text-[#D4B27A] uppercase tracking-[0.3em]">
                    Total Amount
                  </span>
                  <span className="text-5xl font-serif font-light text-[#FBF9F6] tracking-tighter">
                    ₹{total.toFixed(0)}
                  </span>
                </div>

                <button
                  onClick={() => navigate("/checkout")}
                  className="w-full h-16 bg-[#D4B27A] text-[#0A1E13] font-bold text-[10px] uppercase tracking-[0.4em] hover:bg-[#FBF9F6] transition-all mb-12"
                >
                  Proceed to Checkout
                </button>

                {/* Trust Metrics */}
                <div className="space-y-6 pt-10 border-t border-white/5">
                  {[
                    { icon: ShieldCheck, text: "Secure Encryption", sub: "PCI DSS Level 1" },
                    { icon: Truck, text: "Botanical Dispatch", sub: "2-4 Business Days" },
                    { icon: RotateCcw, text: "Curated Protection", sub: "30-Day Guarantee" },
                  ].map((badge, i) => {
                    const Icon = badge.icon;
                    return (
                      <div key={i} className="flex items-center gap-6">
                        <div className="w-10 h-10 bg-white/5 flex items-center justify-center text-[#D4B27A] border border-white/5">
                          <Icon size={18} strokeWidth={1} />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-[#FBF9F6] uppercase tracking-[0.2em] mb-1">
                            {badge.text}
                          </p>
                          <p className="text-[9px] font-medium text-[#FBF9F6]/30 uppercase tracking-widest">
                            {badge.sub}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </aside>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
