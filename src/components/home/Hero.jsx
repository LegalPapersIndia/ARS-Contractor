

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  CalendarCheck,
  MapPin,
  Building2,
  ChevronDown,
} from "lucide-react";
import heroBg from "../../Asset/hero-bg.jpg";

/* ---------- Content (update when client data arrives) ---------- */
const PHONE = "+91 63988 83191";
const PHONE_LINK = "+916398883191";

const BADGE = "Dewatering Contractor | Serving Sites Across India";
const HEADING_TOP = "Professional";
const HEADING_HIGHLIGHT = "Dewatering Solutions";
const HEADING_BOTTOM = "for Construction Sites";
const SUBTEXT =
  "Based in Chhatarpur (M.P.) and working on projects across India, we remove water from foundations, basements and excavations quickly and safely, keeping your project on schedule.";

const FEATURES = [
  {
    icon: CalendarCheck,
    title: "Since 2018",
    text: "Years of dewatering experience",
  },
  {
    icon: ShieldCheck,
    title: "Guaranteed Work",
    text: "Quality assured on every project",
  },
  {
    icon: MapPin,
    title: "Service Across India",
    text: "Projects in Gujarat, M.P. and U.P.",
  },
  {
    icon: Building2,
    title: "Large Project Experience",
    text: "Smart city, railway and building sites",
  },
];

/* ---------- Animation variants ---------- */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

/* ---------- Component ---------- */
export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-4.5rem)] flex-col overflow-hidden bg-[#061538] text-white lg:min-h-[calc(100svh-7rem)]">
      {/* ---------- Background image (slow zoom) ---------- */}
      <motion.img
        src={heroBg}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 12, ease: "easeOut" }}
        className="absolute inset-0 -z-20 size-full object-cover"
      />

      {/* ---------- Overlays for readability ---------- */}
    {/* ---------- Overlays for readability ---------- */}
<div className="absolute inset-0 -z-10 bg-linear-to-r from-[#061538]/80 via-[#0A2A6B]/45 to-transparent" />
<div className="absolute inset-0 -z-10 bg-linear-to-t from-[#061538]/60 via-transparent to-[#061538]/10" />

      {/* ---------- Main content ---------- */}
      <div className="mx-auto flex w-full max-w-7xl flex-1 items-center px-5 pb-10 pt-14 lg:px-6 lg:pt-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold tracking-wide backdrop-blur-md sm:text-sm"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-sky-300 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-sky-300" />
            </span>
            {BADGE}
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl lg:text-7xl"
          >
            {HEADING_TOP}{" "}
            <span className="bg-linear-to-r from-sky-300 via-white to-sky-200 bg-clip-text text-transparent">
              {HEADING_HIGHLIGHT}
            </span>{" "}
            {HEADING_BOTTOM}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-blue-50/90 sm:text-lg"
          >
            {SUBTEXT}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-bold text-[#0A2A6B] shadow-xl shadow-black/30 transition hover:scale-[1.03]"
            >
              <span className="relative z-10">Get a Quote</span>
              <ArrowRight
                size={18}
                className="relative z-10 transition-transform group-hover:translate-x-1"
              />
              <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-sky-200 to-white transition-transform duration-500 group-hover:translate-x-0" />
            </Link>

            <a
              href={`tel:${PHONE_LINK}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-8 py-4 text-sm font-bold backdrop-blur-md transition hover:border-white hover:bg-white/20"
            >
              <Phone size={18} />
              {PHONE}
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* ---------- Scroll indicator (desktop) ---------- */}
      <motion.a
        href="#home-next"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-40 right-6 hidden flex-col items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/70 lg:flex"
      >
        <span className="[writing-mode:vertical-rl]">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.span>
      </motion.a>

      {/* ---------- Bottom feature strip ---------- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
        className="relative border-t border-white/15 bg-[#061538]/70 backdrop-blur-xl"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className={`flex items-center gap-3 px-5 py-5 sm:gap-4 sm:py-6 lg:px-6 ${
                  i !== 0 ? "lg:border-l lg:border-white/10" : ""
                } ${i % 2 === 1 ? "border-l border-white/10 lg:border-l" : ""} ${
                  i > 1 ? "border-t border-white/10 lg:border-t-0" : ""
                }`}
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-sky-400 to-blue-600 shadow-lg sm:size-12">
                  <Icon size={20} />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-bold sm:text-base">{f.title}</p>
                  <p className="mt-0.5 hidden text-xs text-blue-100/75 sm:block">
                    {f.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}