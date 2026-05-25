import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "./useAuth";
import { Mail, Lock, User, ArrowRight, Leaf, AlertCircle, ShieldCheck } from "lucide-react";

const Signup = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await signup(email, password, displayName);
      navigate("/");
    } catch {
      setError("We couldn't create your account. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F3ECE1] flex items-center justify-center px-6 py-32 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#4A5D4E]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#6D4C3D]/5 rounded-full blur-[120px]" />
      </div>

      <div className="w-full max-w-xl bg-[#FDFBF7] rounded-[48px] border border-[#E6DDC4]/40 shadow-[0_40px_100px_rgba(74,93,78,0.05)] p-8 md:p-16 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#4A5D4E] rounded-2xl text-white mb-8 shadow-xl shadow-[#4A5D4E]/20">
            <Leaf size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif italic text-[#2D231D] tracking-tight mb-4">
            Begin Your <span className="text-[#4A5D4E] not-italic font-black uppercase tracking-tighter">Journey</span>
          </h2>
          <p className="text-[#5A5047] font-medium">Join our community of natural wellness and energy.</p>
        </div>

        {error && (
          <div className="mb-8 p-4 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-3 text-red-600 text-sm font-bold">
            <AlertCircle size={18} />
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-[#4A5D4E]/40 ml-4">Full Name</label>
            <div className="relative">
              <User className="absolute left-6 top-1/2 -translate-y-1/2 text-[#4A5D4E]/20" size={20} />
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="John Doe"
                className="w-full pl-14 pr-6 py-5 rounded-2xl bg-[#FDFBF7] border border-[#E6DDC4]/40 focus:bg-white focus:border-[#4A5D4E]/30 outline-none transition-all font-bold text-[#2D231D] placeholder:text-[#4A5D4E]/20 shadow-sm"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-[#4A5D4E]/40 ml-4">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-[#4A5D4E]/20" size={20} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full pl-14 pr-6 py-5 rounded-2xl bg-[#FDFBF7] border border-[#E6DDC4]/40 focus:bg-white focus:border-[#4A5D4E]/30 outline-none transition-all font-bold text-[#2D231D] placeholder:text-[#4A5D4E]/20 shadow-sm"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-[#4A5D4E]/40 ml-4">Password</label>
            <div className="relative">
              <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-[#4A5D4E]/20" size={20} />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a strong password"
                className="w-full pl-14 pr-6 py-5 rounded-2xl bg-[#FDFBF7] border border-[#E6DDC4]/40 focus:bg-white focus:border-[#4A5D4E]/30 outline-none transition-all font-bold text-[#2D231D] placeholder:text-[#4A5D4E]/20 shadow-sm"
                required
              />
            </div>
          </div>

          <div className="flex items-start gap-3 px-2 py-4">
            <ShieldCheck size={18} className="text-[#4A5D4E] flex-shrink-0 mt-0.5" />
            <p className="text-[10px] text-[#4A5D4E]/40 font-bold leading-relaxed">
              By creating an account, you agree to our <span className="text-[#2D231D]">Terms of Service</span> and <span className="text-[#2D231D]">Privacy Policy</span>.
            </p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="group w-full py-5 rounded-2xl bg-[#4A5D4E] text-white font-black text-lg hover:bg-[#2D231D] transition-all transform active:scale-[0.98] shadow-xl shadow-[#4A5D4E]/20 flex items-center justify-center gap-3"
          >
            {loading ? (
              <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                Create Account
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>

        <div className="mt-12 text-center">
          <p className="text-sm text-[#5A5047] font-medium">
            Already have an account?{" "}
            <Link to="/login" className="text-[#4A5D4E] font-black hover:underline ml-1">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
