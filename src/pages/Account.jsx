import React, { useState, useEffect } from "react";
import { useAuth } from "../components/useAuth";
import { db } from "../components/Firebase";
import { doc, getDoc, collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import { 
  User, 
  Package, 
  Heart, 
  LogOut, 
  ChevronRight, 
  Settings, 
  ShoppingBag, 
  CreditCard, 
  MapPin, 
  Bell,
  Award
} from "lucide-react";

const Account = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [recentOrders, setRecentOrders] = useState([]);
  const [stats, setStats] = useState({ cart: 0, wishlist: 0 });
  const [loading, setLoading] = useState(true);

  const premiumEase = [0.215, 0.61, 0.355, 1];

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    const fetchData = async () => {
      try {
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          setUserData(userSnap.data());
        }

        const cartSnap = await getDocs(collection(db, "users", user.uid, "cart"));
        const wishlistSnap = await getDocs(collection(db, "users", user.uid, "wishlist"));
        
        const ordersRef = collection(db, "users", user.uid, "orders");
        const ordersQuery = query(ordersRef, orderBy("createdAt", "desc"), limit(3));
        const ordersSnap = await getDocs(ordersQuery);
        
        setRecentOrders(ordersSnap.docs.map(d => ({ id: d.id, ...d.data() })));
        setStats({
          cart: cartSnap.size,
          wishlist: wishlistSnap.size
        });
      } catch (error) {
        console.error("Error fetching account data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user, navigate]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FBF9F6] flex items-center justify-center">
        <div className="w-10 h-[1px] bg-[#D4B27A] animate-pulse" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FBF9F6] text-[#0A1E13] pt-32 pb-24 px-6 md:px-12 lg:px-16 selection:bg-[#0A1E13] selection:text-[#FBF9F6]">
      {/* Light Luxury Geometric Dot Mesh Overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[radial-gradient(#0A1E13_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        
        {/* PREMIUM ACCOUNT HEADER MARQUEE */}
        <div className="bg-[#0A1E13] p-12 md:p-20 mb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4B27A]/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
              <div className="relative">
                <div className="w-28 h-28 bg-[#EFECE5]/10 border border-white/5 flex items-center justify-center text-[#FBF9F6] overflow-hidden p-1 shadow-2xl">
                  {userData?.photoURL ? (
                    <img src={userData.photoURL} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <User size={40} strokeWidth={1} className="text-[#FBF9F6]/20" />
                  )}
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#D4B27A] flex items-center justify-center text-[#0A1E13] shadow-xl">
                  <Award size={14} strokeWidth={1.5} />
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-[1px] w-6 bg-[#D4B27A]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#D4B27A]">Registry Member</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-serif font-light text-[#FBF9F6] tracking-tight">
                  {userData?.displayName || "Elite Member"}
                </h1>
                <p className="text-[10px] text-[#FBF9F6]/40 font-bold uppercase tracking-[0.3em]">{user?.email}</p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <div className="px-4 py-2 border border-white/5 bg-white/5 text-[9px] font-bold uppercase tracking-[0.3em] text-[#D4B27A]">
                    2,450 Vitality Points
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="group relative h-14 px-8 bg-[#FBF9F6] text-[#0A1E13] overflow-hidden transition-transform hover:scale-[1.02]"
            >
              <div className="absolute inset-0 bg-[#D4B27A] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.211,0.61,0.355,1]" />
              <span className="relative z-10 text-[9px] font-bold uppercase tracking-[0.4em] flex items-center gap-4">
                <LogOut size={14} strokeWidth={1} />
                Terminate Session
              </span>
            </button>
          </div>
        </div>

        {/* WORKSPACE CONTENT SPLIT GRID */}
        <div className="grid lg:grid-cols-12 gap-20 items-start">
          
          {/* LEFT RUNWAY: DASHBOARD ROUTING MATRIX */}
          <div className="lg:col-span-4 space-y-16">
            {/* Minimal Stat Metric Tiles */}
            <div className="grid grid-cols-2 gap-0 border border-[#0A1E13]/5">
              <Link to="/cart" className="group p-10 bg-transparent border-r border-[#0A1E13]/5 hover:bg-[#EFECE5]/40 transition-all duration-500">
                <p className="text-[10px] font-bold text-[#D4B27A] uppercase tracking-[0.3em] mb-4">Cart</p>
                <p className="text-4xl font-serif font-light text-[#0A1E13]">{stats.cart}</p>
                <div className="mt-8 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#0A1E13]/40 group-hover:text-[#0A1E13] transition-colors">
                  View Manifest <ChevronRight size={10} />
                </div>
              </Link>
              
              <Link to="/wishlist" className="group p-10 bg-transparent hover:bg-[#EFECE5]/40 transition-all duration-500">
                <p className="text-[10px] font-bold text-[#D4B27A] uppercase tracking-[0.3em] mb-4">Saved</p>
                <p className="text-4xl font-serif font-light text-[#0A1E13]">{stats.wishlist}</p>
                <div className="mt-8 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#0A1E13]/40 group-hover:text-[#0A1E13] transition-colors">
                  Curations <ChevronRight size={10} />
                </div>
              </Link>
            </div>

            {/* Structured Navigation Panel */}
            <div className="space-y-2">
              <p className="text-[10px] font-bold text-[#0A1E13]/20 uppercase tracking-[0.4em] mb-8">Management</p>
              <div className="divide-y divide-[#0A1E13]/5 border-y border-[#0A1E13]/5">
                {[
                  { icon: Settings, label: "Identity Parameters" },
                  { icon: Package, label: "Consignment Logs" },
                  { icon: CreditCard, label: "Settlement Frameworks" },
                  { icon: MapPin, label: "Distribution Endpoints" },
                  { icon: Bell, label: "Transmission Directives" },
                ].map((item, idx) => (
                  <button key={idx} className="w-full flex items-center justify-between py-6 group hover:px-2 transition-all">
                    <div className="flex items-center gap-6">
                      <item.icon size={16} strokeWidth={1} className="text-[#0A1E13]/20 group-hover:text-[#D4B27A] transition-colors" />
                      <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0A1E13]/60 group-hover:text-[#0A1E13] transition-colors">{item.label}</span>
                    </div>
                    <ArrowUpRight size={14} strokeWidth={1} className="text-[#0A1E13]/10 opacity-0 group-hover:opacity-100 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT RUNWAY: LEDGER RECORDS AREA */}
          <div className="lg:col-span-8 space-y-20">
            <div>
              <div className="flex items-end justify-between mb-12 border-b border-[#0A1E13]/5 pb-10">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-[#D4B27A]">
                    <div className="h-[1px] w-8 bg-[#D4B27A]" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Ledger Record</span>
                  </div>
                  <h3 className="text-3xl font-serif font-light text-[#0A1E13]">Recent Consignments</h3>
                </div>
                <Link to="/orders" className="text-[9px] font-bold text-[#D4B27A] uppercase tracking-[0.3em] hover:text-[#0A1E13] transition-colors">
                  View Full Archive
                </Link>
              </div>

              {recentOrders.length > 0 ? (
                <div className="divide-y divide-[#0A1E13]/5">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="group py-8 flex flex-col sm:flex-row items-center justify-between gap-10 hover:bg-[#EFECE5]/20 transition-colors px-4">
                      <div className="flex items-center gap-10">
                        <div className="text-[10px] font-mono font-light text-[#0A1E13]/20 tracking-widest uppercase">
                          REF//{(order.id || "").toString().slice(0, 8).toUpperCase()}
                        </div>
                        <div className="space-y-2">
                          <p className="text-[10px] font-bold text-[#0A1E13] uppercase tracking-[0.2em]">
                            Allocation Dispatched
                          </p>
                          <p className="text-[10px] text-[#0A1E13]/40 font-light tracking-[0.3em] uppercase">
                            {order.createdAt?.toDate().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-12">
                        <p className="text-2xl font-serif font-light text-[#0A1E13]">₹{order.total}</p>
                        <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#D4B27A]">
                          {order.status}
                        </span>
                        <ArrowUpRight size={16} strokeWidth={1} className="text-[#0A1E13]/10 group-hover:text-[#D4B27A] transition-colors" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-24 border border-dashed border-[#0A1E13]/10 text-center space-y-10">
                  <div className="space-y-4">
                    <p className="text-2xl font-serif font-light text-[#0A1E13]">Manifest Clear</p>
                    <p className="text-[10px] text-[#0A1E13]/40 font-light uppercase tracking-[0.3em] max-w-xs mx-auto">Your entry file lists no active dispatches at this current timestamp.</p>
                  </div>
                  <Link to="/shop" className="inline-block px-12 py-5 bg-[#0A1E13] text-[#FBF9F6] text-[10px] font-bold uppercase tracking-[0.4em] transition-all hover:scale-[1.02]">
                    Start Curation
                  </Link>
                </div>
              )}
            </div>

            {/* CURATED REWARDS SUB-BANNER */}
            <div className="bg-[#EFECE5] p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="space-y-4 text-center md:text-left">
                <p className="text-[9px] font-bold text-[#D4B27A] uppercase tracking-[0.4em]">Proprietary Dividends</p>
                <h3 className="text-2xl font-serif font-light tracking-tight">House Premium Accretion</h3>
                <p className="text-[10px] text-[#0A1E13]/40 font-light uppercase tracking-[0.2em] max-w-sm">Accumulate parameters at a baseline margin of 550 points from your complimentary reserve.</p>
              </div>
              <button className="h-14 px-10 border border-[#0A1E13] text-[#0A1E13] text-[9px] font-bold uppercase tracking-[0.4em] hover:bg-[#0A1E13] hover:text-[#FBF9F6] transition-all duration-500">
                Execute Dividend
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
