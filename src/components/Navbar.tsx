import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ShoppingBasket, Phone, ShoppingCart } from "lucide-react";
import { VegGoLogo } from "./Logo";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { cartCount, cartTotal } = useCart();

  return (
    <header className="sticky top-0 z-50 shadow-xs">
      {/* Tier 1: Top Announcement Bar (Dark Green) */}
      <div className="bg-[#135029] text-white py-2 px-4 sm:px-6 lg:px-8 text-xs">
        <div className="w-full max-w-[1550px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Welcome To VegGo Fresh</span>
            <span className="hidden sm:inline text-emerald-200/70">
              — Quality You Can Measure
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6 font-semibold tracking-wide">
            <Link to="/home" className="hover:text-emerald-200 transition">
              Home
            </Link>
            <Link to="/about" className="hover:text-emerald-200 transition">
              About Us
            </Link>
            <a href="/#who-we-are" className="hover:text-emerald-200 transition">
              Our Story
            </a>
            <Link to="/about#founder" className="hover:text-emerald-200 transition">
              Founder
            </Link>
            <a
              href="mailto:support@veggofresh.com"
              className="hover:text-emerald-200 transition flex items-center gap-1 text-emerald-300"
            >
              <Phone className="w-3.5 h-3.5" /> Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Tier 2: Main Navigation Bar */}
      <div className="bg-white/95 backdrop-blur-md border-b border-[#E8F2E6]">
        <div className="w-full max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Link to="/" aria-label="VegGo Fresh Home" className="flex flex-col">
              <VegGoLogo className="h-12 sm:h-16 w-auto" />
              <span className="text-[10px] sm:text-[13px] font-bold text-[#135029] tracking-tight mt-0.5">
                Freshness You Can Trust. Quality You Can Measure.
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-bold text-slate-700">
            <a
              href="/#who-we-are"
              className="hover:text-[#135029] transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[2px] after:bg-[#135029] after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              Who we are
            </a>
            <a
              href="/#why-veggo"
              className="hover:text-[#135029] transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[2px] after:bg-[#135029] after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              Why VegGo
            </a>
            <a
              href="/#freshness"
              className="hover:text-[#135029] transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[2px] after:bg-[#135029] after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              Freshness
            </a>
            <a
              href="/#packaging"
              className="hover:text-[#135029] transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[2px] after:bg-[#135029] after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              Packaging
            </a>

            <Link
              to="/home"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#135029] text-white text-xs font-semibold hover:bg-[#0f4023] shadow-sm transition hover:shadow-md cursor-pointer"
            >
              <ShoppingBasket className="w-4 h-4" />
              Explore Store
            </Link>

            {/* CART BUTTON: Hidden when empty (cartCount === 0), shows when items added */}
            {cartCount > 0 && (
              <button
                onClick={() => navigate("/cart")}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#EAF6EA] border border-[#C5E5C2] text-[#135029] hover:bg-[#DCF2D8] transition shadow-xs cursor-pointer animate-in fade-in zoom-in-95 duration-200"
              >
                <div className="relative">
                  <ShoppingCart className="w-5 h-5 text-[#135029]" />
                  <span className="absolute -top-2 -right-2 text-[10px] w-4 h-4 rounded-full bg-[#135029] text-white font-extrabold flex items-center justify-center">
                    {cartCount}
                  </span>
                </div>
                <span className="text-xs font-bold">
                  ₹{cartTotal.toFixed(2)}
                </span>
              </button>
            )}
          </nav>

          {/* Right Side on Mobile: Cart Badge (if items exist) + Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            {cartCount > 0 && (
              <button
                onClick={() => navigate("/cart")}
                className="p-2 rounded-xl bg-[#EAF6EA] text-[#135029] relative cursor-pointer"
                aria-label="View Cart"
              >
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 text-[9px] w-4 h-4 rounded-full bg-[#135029] text-white font-extrabold flex items-center justify-center">
                  {cartCount}
                </span>
              </button>
            )}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E8F2E6] px-5 py-5 space-y-4 shadow-lg animate-in fade-in slide-in-from-top-3">
          <div className="flex flex-col space-y-3 text-sm font-bold text-slate-800">
            <Link
              to="/home"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#135029] hover:bg-[#EAF6EA] px-3 py-2 rounded-lg"
            >
              Home / Store
            </Link>
            <a
              href="/#who-we-are"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:bg-slate-50 px-3 py-2 rounded-lg text-slate-700"
            >
              Who we are
            </a>
            <a
              href="/#why-veggo"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:bg-slate-50 px-3 py-2 rounded-lg text-slate-700"
            >
              Why VegGo
            </a>
            <a
              href="/#freshness"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:bg-slate-50 px-3 py-2 rounded-lg text-slate-700"
            >
              Freshness
            </a>
            <a
              href="/#packaging"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:bg-slate-50 px-3 py-2 rounded-lg text-slate-700"
            >
              Packaging
            </a>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:bg-slate-50 px-3 py-2 rounded-lg text-slate-700"
            >
              About Us &amp; Founder
            </Link>
          </div>

          <div className="pt-3 border-t border-slate-100 space-y-2.5">
            {/* Mobile Cart Button (shown only when cart has items) */}
            {cartCount > 0 && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate("/cart");
                }}
                className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#EAF6EA] text-[#135029] font-bold text-sm"
              >
                <div className="flex items-center gap-2">
                  <ShoppingCart className="w-4 h-4" />
                  <span>View Cart ({cartCount} items)</span>
                </div>
                <span>₹{cartTotal.toFixed(2)}</span>
              </button>
            )}

            <Link
              to="/home"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#135029] text-white text-sm font-semibold shadow-md"
            >
              <ShoppingBasket className="w-4 h-4" />
              Explore Vegetables
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}