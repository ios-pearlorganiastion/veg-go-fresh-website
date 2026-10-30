import { useNavigate } from "react-router-dom";
import {
  Smartphone,
  CreditCard,
  Mail,
  MapPin,
  Phone,
  Scale,
  Leaf,
  ShieldCheck,
  ShoppingBag,
} from "lucide-react";
import { VegGoLogo } from "../Logo";
import { useToast } from "../../context/ToastContext";

export default function Footer() {
  const navigate = useNavigate();
  const { showToast } = useToast();

  const brandPillars = [
    {
      icon: ShieldCheck,
      title: "Freshness Focused",
      sub: "Careful product selection & handling",
    },
    {
      icon: Scale,
      title: "Quality You Can Measure",
      sub: "Clear units & transparent gram pricing",
    },
    {
      icon: ShoppingBag,
      title: "Digital Convenience",
      sub: "Effortless ordering via app & web",
    },
    {
      icon: Leaf,
      title: "Thoughtful Packaging",
      sub: "Exploring paper & recyclable options",
    },
  ];

  const companyLinks = [
    { title: "About Us", path: "/about" },
    { title: "Our Founder", path: "/about#founder" },
    { title: "Mission & Vision", path: "/about#vision" },
    { title: "Partner With Us", path: "/partner-with-us" },
    { title: "Careers", path: "/careers" },
  ];

  const customerServiceLinks = [
    { title: "Contact Us", path: "/contact" },
    { title: "FAQs", path: "/faqs" },
    { title: "Delivery Information", path: "/delivery-info" },
    { title: "Returns & Refunds", path: "/returns" },
  ];

  const policyLinks = [
    { title: "Privacy Policy", path: "/privacy-policy" },
    { title: "Terms & Conditions", path: "/terms" },
    { title: "Shipping & Delivery Policy", path: "/shipping-policy" },
    { title: "Cancellation & Refund Policy", path: "/refund-policy" },
  ];

  const handleLinkClick = (path: string, label: string) => {
    if (path.startsWith("/about#")) {
      navigate("/about");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    try {
      navigate(path);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      showToast(`${label} page coming soon`);
    }
  };

  return (
    <footer className="mt-12 sm:mt-16 bg-white border-t border-[#E8F2E6] overflow-hidden text-left">
      {/* Brand Pillars Highlight */}
      <div className="border-b border-slate-100 bg-[#F9FCF9] py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[1550px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {brandPillars.map((p) => (
            <div key={p.title} className="flex items-center gap-3.5 min-w-0">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-[#EAF6EA] flex items-center justify-center text-[#135029]">
                <p.icon className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h4 className="text-xs sm:text-sm font-semibold text-slate-900 leading-tight">
                  {p.title}
                </h4>
                <p className="mt-1 text-[11px] text-slate-500 leading-relaxed truncate">
                  {p.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Grid — Widened to 1550px to match Hero */}
      <div className="w-full max-w-[1550px] mx-auto py-10 lg:py-14 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-8">
          
          {/* Brand Info (Col 1 & 2) */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-4">
            <div
              className="cursor-pointer inline-block"
              onClick={() => {
                navigate("/home");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <VegGoLogo className="h-12 sm:h-14 w-auto" />
            </div>

            <p className="text-xs font-semibold text-[#135029] tracking-wide">
              Freshness You Can Trust. Quality You Can Measure.
            </p>

            <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
              A fresh-produce business focused on digital convenience, transparent
              measurements, and a growing vision for customers across India.
            </p>

            <div className="pt-1 text-xs text-slate-600 space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 shrink-0 text-[#228B22]" />
                <span>Hyderabad, Telangana, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0 text-[#228B22]" />
                <span className="font-medium">support@veggofresh.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0 text-[#228B22]" />
                <span>Customer Care: +91 90000 00000</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-3">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              {companyLinks.map((item) => (
                <li key={item.title}>
                  <button
                    onClick={() => handleLinkClick(item.path, item.title)}
                    className="hover:text-[#135029] hover:underline transition text-left cursor-pointer"
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service Links */}
          <div className="space-y-3">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900">
              Customer Service
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              {customerServiceLinks.map((item) => (
                <li key={item.title}>
                  <button
                    onClick={() => handleLinkClick(item.path, item.title)}
                    className="hover:text-[#135029] hover:underline transition text-left cursor-pointer"
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies Links */}
          <div className="space-y-3">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900">
              Policies
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              {policyLinks.map((item) => (
                <li key={item.title}>
                  <button
                    onClick={() => handleLinkClick(item.path, item.title)}
                    className="hover:text-[#135029] hover:underline transition text-left cursor-pointer"
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Download App & Payment */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-3">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900">
              Download App
            </h4>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Order fresh vegetables easily from your phone.
            </p>

            {/* Exact App Link Configured */}
            <button
              onClick={() => {
                window.open(
                  "https://play.google.com/store/apps/details?id=com.veggofresh.customer&pcampaignid=web_share",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
              className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-slate-900 text-white text-xs hover:bg-slate-800 transition cursor-pointer"
            >
              <Smartphone className="w-6 h-6 shrink-0 text-emerald-400" />
              <div className="text-left min-w-0">
                <div className="text-[9px] text-slate-400 leading-tight">GET IT ON</div>
                <div className="text-xs font-semibold leading-tight">Google Play &amp; iOS</div>
              </div>
            </button>

            <div className="pt-2">
              <h5 className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                Secure Payments
              </h5>
              <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                <CreditCard className="w-4 h-4 shrink-0 text-slate-600" />
                <span className="text-[11px]">UPI • Cards • COD</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-100 py-5 px-4 sm:px-6 lg:px-8 bg-slate-50 text-[11px] text-slate-500">
        <div className="w-full max-w-[1550px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} <strong>VegGo Fresh Private Limited</strong>. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <button onClick={() => showToast("CIN: U01111TS2024PTC000000")} className="hover:underline cursor-pointer">
              CIN Registered
            </button>
            <span>•</span>
            <button onClick={() => showToast("MSME Registered Business")} className="hover:underline cursor-pointer">
              MSME Recognized
            </button>
            <span>•</span>
            <button
              onClick={() => {
                navigate("/home");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="hover:underline font-semibold text-[#135029] cursor-pointer"
            >
              Home
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}