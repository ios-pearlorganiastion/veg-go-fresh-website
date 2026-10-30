import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Leaf,
  PackageCheck,
  Scale,
  ShieldCheck,
  ShoppingBasket,
  Smartphone,
  Sprout,
  TrendingUp,
} from "lucide-react";
import Navbar from "../components/Navbar"; // Agar shared me hai to: "../components/shared/Navbar"
import Footer from "../components/layout/Footer";

import slide1 from "../assets/images/hero/1.png";
import slide2 from "../assets/images/hero/2.png";
import slide3 from "../assets/images/hero/3.png";

const SLIDES = [
  {
    image: slide1,
    alt: "Fresh vegetables in a wooden crate",
  },
  {
    image: slide2,
    alt: "Fresh farm produce on scale",
  },
  {
    image: slide3,
    alt: "Eco friendly vegetables packaging",
  },
];

const WHY_CHOOSE = [
  {
    icon: Smartphone,
    title: "Convenience",
    text: "Explore and order vegetables through digital shopping channels.",
  },
  {
    icon: Scale,
    title: "Transparency",
    text: "Clear product descriptions, units of measurement, and pricing.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Awareness",
    text: "A focus on selecting and handling produce with appropriate care.",
  },
  {
    icon: PackageCheck,
    title: "Responsible Choices",
    text: "Exploring packaging alternatives that balance product protection, practicality, and environmental considerations.",
  },
  {
    icon: TrendingUp,
    title: "A Growing Vision",
    text: "Building a customer-focused business with ambitions to expand beyond Hyderabad and serve more communities across India.",
  },
];

const FRESHNESS_STEPS = [
  {
    title: "Sourcing",
    text: "Vegetables are obtained through our sourcing channels, selected according to product requirements and availability.",
  },
  {
    title: "Quality checks",
    text: "Visible condition and freshness indicators are assessed before a product is packed.",
  },
  {
    title: "Accurate weighing",
    text: "Quantity is measured with suitable weighing equipment, with the unit and price shown clearly.",
  },
  {
    title: "Packing & delivery",
    text: "Packaging and handling suited to the produce help protect its condition in transit.",
  },
];

function ExploreButton({ className = "" }: { className?: string }) {
  return (
    <Link
      to="/home"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#135029] px-7 py-3.5 text-sm sm:text-base font-semibold text-white shadow-md shadow-[#135029]/20 transition hover:bg-[#0f4023] hover:-translate-y-0.5 ${className}`}
    >
      <ShoppingBasket className="w-5 h-5" />
      Explore Vegetables
      <ArrowRight className="w-4 h-4" />
    </Link>
  );
}

function StoryButton({ className = "" }: { className?: string }) {
  return (
    <Link
      to="/about"
      className={`inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#135029] bg-white px-7 py-3.5 text-sm sm:text-base font-semibold text-[#135029] transition hover:bg-[#EAF6EA] hover:-translate-y-0.5 ${className}`}
    >
      <BookOpen className="w-5 h-5" />
      Discover Our Story
    </Link>
  );
}

/* ================= HERO CAROUSEL (WIDE NO-GAP LAYOUT) ================= */
function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#FAFBF9] border-b border-[#EEF4ED] py-4 sm:py-6 lg:py-8">
      <div className="w-full max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. TOP CAROUSEL IMAGE CONTAINER */}
        <div className="relative w-full h-[280px] sm:h-[440px] lg:h-[540px] rounded-2xl overflow-hidden shadow-md bg-slate-100">
          {SLIDES.map((slide, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                i === index ? "opacity-100 z-10" : "opacity-0 pointer-events-none"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                draggable={false}
                className="w-full h-full object-cover"
              />
            </div>
          ))}

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {SLIDES.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === index ? "w-6 bg-white shadow" : "w-2 bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* 2. TEXT DIRECTLY UNDER IMAGE */}
        <div className="mt-6 sm:mt-8 text-left space-y-3">
          <h1 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#113B1E] tracking-tight">
            Fresh Vegetables. Smarter Shopping. A Better Everyday Experience.
          </h1>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-5xl">
            Welcome to VegGo Fresh Private Limited — a fresh-produce venture inspired by agricultural roots and driven by modern business thinking. We aim to make vegetable shopping more convenient through digital access, clear product information, transparent measurements, and thoughtful packaging choices.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Link
              to="/home"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-[#18532c] text-white text-sm font-semibold hover:bg-[#124022] transition shadow-xs cursor-pointer"
            >
              Explore Vegetables
            </Link>

            <Link
              to="/about"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg border-2 border-[#18532c] bg-white text-[#18532c] text-sm font-semibold hover:bg-[#EAF6EA] transition shadow-xs cursor-pointer"
            >
              Discover Our Story
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FBFDFB] text-slate-800 overflow-x-clip">
      
      {/* ================= 2-TIER NAVBAR COMPONENT ================= */}
      <Navbar />

      {/* ================= HERO CAROUSEL ================= */}
      <HeroCarousel />

      {/* ================= WHO WE ARE ================= */}
      <section id="who-we-are" className="scroll-mt-28 py-14 sm:py-20">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#228B22]">
            <Sprout className="w-4 h-4" /> Who we are
          </span>

          <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold text-[#113B1E]">
            Fresh Thinking. Fresh Choices. A Growing Vision.
          </h2>

          <div className="mt-6 space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            <p>
              VegGo Fresh Private Limited brings together an appreciation for
              agriculture and a modern approach to business. Founded by Bandi
              Shivakumar, whose family background is connected to farming, the
              company is being developed around the belief that fresh vegetable
              shopping can become more convenient, transparent, and
              customer-focused.
            </p>
            <p>
              With a focus on app and website delivery, we aim to make it
              easier for households and businesses to access vegetables while
              providing clear information about products, quantities, and
              pricing.
            </p>
            <p>
              From Hyderabad, Telangana, our ambition is to build a trusted
              fresh-produce brand that can grow responsibly and serve customers
              across India over time.
            </p>
          </div>

          <p className="mt-8 text-base sm:text-lg font-bold text-[#135029]">
            Our promise is to keep improving the way people discover,
            understand, and purchase fresh vegetables.
          </p>
        </div>
      </section>

      {/* ================= WHY CHOOSE VEGGO ================= */}
      <section id="why-veggo" className="scroll-mt-28 bg-[#F4FAF3] py-14 sm:py-20">
        <div className="w-full max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#228B22]">
              <Leaf className="w-4 h-4" /> Why choose VegGo Fresh?
            </span>
            <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold text-[#113B1E]">
              A Fresh Approach to Everyday Essentials
            </h2>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_CHOOSE.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="bg-white border border-[#E3EFE1] rounded-2xl p-6 shadow-xs hover:shadow-md transition text-left"
              >
                <div className="w-11 h-11 rounded-xl bg-[#EAF6EA] text-[#228B22] flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="mt-4 font-bold text-slate-900">{title}</h3>
                <p className="mt-1.5 text-sm text-slate-500 leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FRESHNESS ================= */}
      <section id="freshness" className="scroll-mt-28 py-14 sm:py-20">
        <div className="w-full max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#228B22]">
              <ShieldCheck className="w-4 h-4" /> From selection to delivery
            </span>
            <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold text-[#113B1E]">
              Our Freshness &amp; Quality Policy
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Fresh produce can naturally vary in appearance, size, and shelf
              life. Our objective is to manage these variations responsibly,
              provide accurate information, and keep improving.
            </p>
          </div>

          <ol className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
            {FRESHNESS_STEPS.map((s, i) => (
              <li
                key={s.title}
                className="relative bg-white border border-[#E3EFE1] rounded-2xl p-6 pt-8"
              >
                <span className="absolute -top-4 left-6 w-9 h-9 rounded-full bg-[#135029] text-white text-sm font-bold flex items-center justify-center shadow-md">
                  {i + 1}
                </span>
                <h3 className="font-bold text-slate-900">{s.title}</h3>
                <p className="mt-1.5 text-sm text-slate-500 leading-relaxed">
                  {s.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ================= PACKAGING ================= */}
      <section id="packaging" className="scroll-mt-28 bg-[#EAF6EA] py-12 sm:py-16">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-3xl font-extrabold text-[#113B1E]">
            Thoughtful Packaging for a Better Tomorrow
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            Packaging should serve a clear purpose: protecting vegetables,
            supporting safe handling, and making delivery convenient. We are
            exploring paper-based and recyclable options where they suit the
            product, transport conditions, and local recycling systems —
            because responsible packaging is an ongoing journey of practical
            improvements.
          </p>
        </div>
      </section>

      {/* ================= CLOSING CTA ================= */}
      <section className="py-16 sm:py-24">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#113B1E]">
            Make Every Vegetable Purchase More Confident
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Discover a fresh approach to everyday vegetable shopping with VegGo Fresh.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <ExploreButton />
            <StoryButton />
          </div>
        </div>
      </section>

      {/* ================= SHARED FOOTER ================= */}
      <Footer />
    </div>
  );
}