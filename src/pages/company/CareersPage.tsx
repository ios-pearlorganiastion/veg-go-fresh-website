import {
  Briefcase,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Scale,
  PackageCheck,
  Truck,
  Sprout,
  Users,
  CheckCircle2,
  Mail,
} from "lucide-react";

export default function CareersPage() {
  // Real VegGo Fresh produce-driven roles (based on PDF model)
  const openings = [
    {
      title: "Fresh Produce Procurement & Sourcing Executive",
      dept: "Farm & Sourcing",
      type: "Full Time",
      loc: "Hyderabad / Rural Mandis, TS",
      desc: "Connect directly with local vegetable farmers, APMC mandis, and supply partners to source daily morning produce maintaining fair prices and consistent availability.",
    },
    {
      title: "Produce Quality Inspector & Sorting Supervisor",
      dept: "Quality Assurance",
      type: "Full Time",
      loc: "Hyderabad Fulfillment Hub",
      desc: "Lead inspection checklists for incoming produce, grading vegetables for freshness, firmness, blemishes, and ensuring non-standard produce is responsibly rejected.",
    },
    {
      title: "Inventory Weighing & Packaging Associate",
      dept: "Hub Operations",
      type: "Full Time",
      loc: "Hyderabad Fulfillment Hub",
      desc: "Ensure transparent measurements with digital weighing equipment and pack orders into responsible kraft paper & recyclable packaging safely for transit.",
    },
    {
      title: "Field Delivery Partner & Fleet Lead",
      dept: "Last Mile Logistics",
      type: "Full Time",
      loc: "Hyderabad & Suburban Clusters",
      desc: "Coordinate route planning, timely doorstep morning deliveries to households and verify weight batches at dispatch.",
    },
    {
      title: "B2B Accounts & Institutional Supply Lead",
      dept: "Business Growth",
      type: "Full Time",
      loc: "Hyderabad (HQ)",
      desc: "Onboard restaurants, caterers, kiranas, and commercial buyers for bulk fresh vegetable supplies under our business partnership program.",
    },
    {
      title: "Customer Support & Freshness Escalation Executive",
      dept: "Customer Experience",
      type: "Full Time",
      loc: "Hyderabad (Hybrid)",
      desc: "Address customer feedback related to produce condition, resolve return/replacement requests transparently, and maintain service trust.",
    },
  ];

  const workValues = [
    {
      icon: Sprout,
      title: "Rooted in Agriculture",
      desc: "Work closely with the real farming ecosystem and make vegetable supply chains transparent.",
    },
    {
      icon: Scale,
      title: "Culture of Transparency",
      desc: "We stand for accurate measurements, honest pricing, and clear communication at every level.",
    },
    {
      icon: PackageCheck,
      title: "Thoughtful Operations",
      desc: "Hands-on experience in eco-friendly packaging and hygienic cold/ambient storage practices.",
    },
    {
      icon: Users,
      title: "A Growing Family",
      desc: "Founded by entrepreneurs from farming roots with big ambitions to expand from Hyderabad across India.",
    },
  ];

  const handleApply = (role: string) => {
    const subject = encodeURIComponent(`Application for ${role} - VegGo Fresh`);
    const body = encodeURIComponent(
      `Hello VegGo Fresh HR Team,\n\nI am interested in applying for the role of "${role}" at VegGo Fresh Private Limited.\n\nPlease find my resume and brief background attached.\n\nName:\nPhone:\nCurrent Location:\nExperience in Produce / Operations:\n\nThank you!`
    );
    window.location.href = `mailto:careers@veggofresh.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="w-full max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">
      {/* Hero Banner */}
      <div className="bg-[#EAF6EA] border border-[#D5EAD3] rounded-3xl p-8 sm:p-14 text-center">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#135029] text-xs font-semibold shadow-xs mb-4">
          <Briefcase className="w-3.5 h-3.5 text-[#228B22]" /> Careers at VegGo Fresh
        </span>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#113B1E] max-w-3xl mx-auto leading-tight">
          Build the Future of Fresh Produce Delivery With Us
        </h1>
        <p className="mt-4 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          At <strong>VegGo Fresh Private Limited</strong>, we are combining farming roots with modern logistics, transparent measurements, and thoughtful packaging. Join our team in Hyderabad and help us serve households across India.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-[#135029]">
          <span className="flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-full border border-[#D5EAD3]">
            <CheckCircle2 className="w-4 h-4 text-[#228B22]" /> Farmer-First Ethos
          </span>
          <span className="flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-full border border-[#D5EAD3]">
            <CheckCircle2 className="w-4 h-4 text-[#228B22]" /> Accurate Weighing Standards
          </span>
          <span className="flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-full border border-[#D5EAD3]">
            <CheckCircle2 className="w-4 h-4 text-[#228B22]" /> Responsible Packaging
          </span>
        </div>
      </div>

      {/* Why Work at VegGo Fresh */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900">
            Why Join VegGo Fresh?
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Work where real produce meets honest commerce.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {workValues.map((v) => (
            <div
              key={v.title}
              className="bg-white border border-[#EEF4ED] rounded-2xl p-6 space-y-3 text-left shadow-2xs hover:shadow-xs transition"
            >
              <div className="w-10 h-10 rounded-xl bg-[#EAF6EA] flex items-center justify-center text-[#135029]">
                <v.icon className="w-5 h-5 text-[#228B22]" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">{v.title}</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Current Openings */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Current Openings ({openings.length})
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Positions open across Hyderabad Hub &amp; Regional Sourcing Belts
            </p>
          </div>
          <span className="text-xs text-slate-500">
            Direct Hiring Desk: <strong className="text-[#135029]">careers@veggofresh.com</strong>
          </span>
        </div>

        <div className="grid gap-4">
          {openings.map((job) => (
            <div
              key={job.title}
              className="bg-white border border-[#EEF4ED] rounded-2xl p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:border-[#228B22]/50 hover:shadow-sm transition text-left"
            >
              <div className="space-y-2 max-w-3xl">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {job.title}
                  </h3>
                  <span className="bg-[#EAF6EA] text-[#135029] text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
                    {job.dept}
                  </span>
                  <span className="bg-slate-100 text-slate-600 text-[11px] font-medium px-2 py-0.5 rounded-md">
                    {job.type}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {job.desc}
                </p>

                <div className="flex items-center gap-1.5 text-xs text-slate-500 pt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#228B22] shrink-0" />
                  <span>{job.loc}</span>
                </div>
              </div>

              <div className="shrink-0">
                <button
                  onClick={() => handleApply(job.title)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#135029] text-white text-xs font-bold hover:bg-[#0f4023] transition shadow-xs cursor-pointer"
                >
                  Apply via Email
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sourcing / Internship / Custom Application Callout */}
      <div className="bg-[#FAFBF9] border border-[#E3ECE2] rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-1 text-xs font-bold text-[#135029] uppercase tracking-wider">
            <Mail className="w-4 h-4 text-[#228B22]" /> Don't see your exact role?
          </div>
          <h3 className="text-lg sm:text-2xl font-extrabold text-slate-900">
            Have experience in Agriculture, Fresh Logistics or Retail?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            We are always happy to meet agronomists, warehouse specialists, dispatch runners, and operations leaders. Send your resume with your city and area of expertise.
          </p>
        </div>

        <button
          onClick={() => handleApply("General Application / Agriculture & Operations")}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-[#135029] text-[#135029] bg-white text-xs sm:text-sm font-bold hover:bg-[#EAF6EA] transition shadow-xs cursor-pointer shrink-0"
        >
          Send Open Application
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}