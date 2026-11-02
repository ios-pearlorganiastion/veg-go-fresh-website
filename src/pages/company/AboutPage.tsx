import { Link } from "react-router-dom";
import {
  ArrowRight,
  Eye,
  Handshake,
  Leaf,
  Lightbulb,
  Scale,
  ShieldCheck,
  ShoppingBasket,
  Sprout,
  Target,
  TrendingUp,
  Gem,
} from "lucide-react";
import founderImage from "../../assets/images/founder/founder.png";

const VALUES = [
  { icon: Handshake, title: "Integrity", text: "We aim to communicate honestly and fulfil our commitments." },
  { icon: ShieldCheck, title: "Quality", text: "We seek to maintain appropriate standards in product selection and handling." },
  { icon: Scale, title: "Transparency", text: "We believe clear measurements, prices, and product information are essential to customer confidence." },
  { icon: Lightbulb, title: "Innovation", text: "We use modern business thinking and digital channels to improve convenience." },
  { icon: Leaf, title: "Responsibility", text: "We aim to make thoughtful sourcing, packaging, and operational decisions." },
  { icon: TrendingUp, title: "Growth with Purpose", text: "We aspire to expand while maintaining a strong focus on customer satisfaction and business reliability." },
];

const COMPANY_INFO = [
  ["Legal company name", "VegGo Fresh Private Limited"],
  ["Business category", "Fresh vegetables and digital grocery delivery"],
  ["Founder", "Bandi Shivakumar"],
  ["Headquarters", "Hyderabad, Telangana, India"],
  ["Business model", "App and website-based delivery"],
  ["Expansion ambition", "Across India"],
];

export default function AboutPage() {
  return (
    <div className="w-full max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">
      {/* 1. Meet Our Founder (SABSE TOP PAR) */}
      <div
        id="founder"
        className="bg-white border border-[#EEF4ED] rounded-3xl shadow-sm p-6 sm:p-10 grid md:grid-cols-[240px_1fr] gap-8 items-center text-left"
      >
        <div className="flex flex-col items-center text-center">
          <div className="w-48 h-56 sm:w-52 sm:h-60 rounded-2xl overflow-hidden border-2 border-[#D5EAD3] shadow-md bg-slate-50">
            <img
              src={founderImage}
              alt="Bandi Shivakumar - Founder of VegGo Fresh"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <h3 className="mt-4 font-bold text-slate-900 text-lg">Bandi Shivakumar</h3>
          <p className="text-xs text-slate-500 mt-0.5">Founder, VegGo Fresh Private Limited</p>
          <p className="text-[11px] text-[#228B22] font-medium mt-2 leading-relaxed">
            Entrepreneurship · MBA · Corporate Business Experience · Agricultural Background
          </p>
        </div>

        <div className="space-y-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#228B22]">
            <Sprout className="w-4 h-4" /> Meet our founder
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            An Entrepreneur with Agricultural Roots and a Modern Business Mindset
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            The story of VegGo Fresh reflects the vision of its founder, Bandi
            Shivakumar — a young entrepreneur whose background combines a
            connection to farming through his family, an MBA education, and
            experience in the corporate business environment.
          </p>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Growing up in a family connected to agriculture gave him an
            important perspective on the role that farming and fresh produce
            play in everyday life. His education and corporate experience shaped
            his interest in business strategy, market understanding, and
            customer-oriented growth.
          </p>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            He established VegGo Fresh with the ambition of building a modern
            fresh-produce business that combines agricultural understanding with
            digital convenience — and aims to grow it step by step, learning
            from the market and building strong business relationships.
          </p>
          <blockquote className="border-l-4 border-[#228B22] bg-[#F4FAF3] rounded-r-xl p-4 text-sm text-[#113B1E] leading-relaxed">
            “A strong business is built not only on an idea, but also on customer
            trust, consistent execution, responsible decisions, and the
            willingness to keep improving.”
          </blockquote>
        </div>
      </div>

      {/* 2. Building a Modern Fresh-Produce Brand (FOUNDER KE THEEK NICHE) */}
      <div className="bg-[#EAF6EA] border border-[#D5EAD3] rounded-3xl p-8 sm:p-12 text-center">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#135029] text-xs font-semibold shadow-xs mb-4">
          <Leaf className="w-3.5 h-3.5 text-[#228B22]" /> Our Story
        </span>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#113B1E] max-w-2xl mx-auto leading-tight">
          Building a Modern Fresh-Produce Brand
        </h1>
        <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          VegGo Fresh Private Limited is a fresh-produce business based in
          Hyderabad, Telangana, India. We aim to make vegetable shopping more
          accessible and convenient through app-based and website-based
          ordering.
        </p>
        <p className="mt-4 text-sm sm:text-base font-semibold text-[#135029]">
          Freshness You Can Trust. Quality You Can Measure.
        </p>
      </div>

      {/* 3. Mission / Vision / Commitment */}
      <div id="vision" className="grid md:grid-cols-3 gap-6 text-left">
        {[
          {
            icon: Target,
            title: "Our Mission",
            text: "To simplify everyday vegetable shopping through convenient digital access, a focus on quality, transparent measurements, customer-oriented service, and responsible business practices.",
          },
          {
            icon: Eye,
            title: "Our Vision",
            text: "To build VegGo Fresh into a trusted fresh-produce brand originating in Hyderabad and progressively expanding its reach across India.",
          },
          {
            icon: Gem,
            title: "Our Commitment",
            text: "We aim to develop long-term relationships with customers, suppliers, and business partners through transparency, continuous improvement, and dependable service.",
          },
        ].map(({ icon: Icon, title, text }) => (
          <div key={title} className="bg-white border border-[#EEF4ED] p-6 rounded-2xl shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#EAF6EA] flex items-center justify-center text-[#228B22]">
              <Icon className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">{title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed">{text}</p>
          </div>
        ))}
      </div>

      {/* 4. Our Business Approach */}
      <div className="grid md:grid-cols-2 gap-8 items-start text-left bg-white border border-[#EEF4ED] rounded-3xl p-6 sm:p-10 shadow-xs">
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Our Business Approach</h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Inspired by agricultural roots and guided by modern business
            thinking, VegGo Fresh seeks to bring together product quality,
            customer convenience, transparent measurements, and thoughtful
            packaging practices.
          </p>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            We plan to work through multiple sourcing methods to support product
            availability and meet customer requirements — with a focus on
            appropriate product selection, careful handling, clear pricing, and
            a convenient ordering experience.
          </p>
        </div>
        <div className="space-y-4 md:pt-11">
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Our growth-oriented approach emphasises serving different customer
            segments — households, retailers, and institutional or commercial
            buyers — according to our service capabilities.
          </p>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            We recognise that customers value not only the vegetables they
            purchase but also the reliability and transparency of the business
            supplying them.
          </p>
        </div>
      </div>

      {/* 5. Ideology */}
      <div className="bg-[#F4FAF3] border border-[#E3EFE1] rounded-3xl p-6 sm:p-10 text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Our Ideology</h2>
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl mx-auto">
          We believe everyday vegetable shopping can be improved through a
          combination of agricultural understanding, modern business practices,
          digital convenience, and customer trust. Customers deserve clear
          information about what they buy, how much they receive, and what they
          pay — and businesses should keep exploring better ways to protect
          fresh produce while reducing unnecessary packaging waste.
        </p>
      </div>

      {/* 6. Values */}
      <div className="space-y-6 text-left">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 text-center">Our Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUES.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-white border border-[#EEF4ED] p-6 rounded-2xl shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#EAF6EA] flex items-center justify-center text-[#228B22]">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">{title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 7. Company Information */}
      <div className="space-y-4 text-left">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 text-center">Company Information</h2>
        <div className="max-w-2xl mx-auto bg-white border border-[#EEF4ED] rounded-2xl overflow-hidden shadow-xs">
          <dl className="divide-y divide-[#EEF4ED]">
            {COMPANY_INFO.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[140px_1fr] sm:grid-cols-[200px_1fr] gap-3 px-5 py-3 text-sm">
                <dt className="font-semibold text-slate-700">{k}</dt>
                <dd className="text-slate-600">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* 8. CTA */}
      <div className="bg-[#135029] rounded-3xl p-8 sm:p-12 text-center text-white">
        <h2 className="text-xl sm:text-3xl font-extrabold">Make Every Vegetable Purchase More Confident</h2>
        <p className="mt-2 text-sm sm:text-base text-white/80">
          Discover a fresh approach to everyday vegetable shopping with VegGo Fresh.
        </p>
        <Link
          to="/home"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm sm:text-base font-semibold text-[#135029] hover:bg-[#EAF6EA] transition"
        >
          <ShoppingBasket className="w-5 h-5" />
          Explore Vegetables
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}