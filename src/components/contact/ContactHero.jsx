import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Home, Phone, MessageCircle } from "lucide-react";
import heroBg from "../../Asset/contact/contact-hero.png";

/* ---------- Content (update when client data arrives) ---------- */
const PHONE = "+91 63988 83191";
const PHONE_LINK = "+916398883191";
const WHATSAPP = "916398883191";
const WHATSAPP_MESSAGE =
  "Hello, I would like to discuss dewatering for my site.";

const BADGE = "Contact ARS | Chhatarpur (M.P.)";
const HEADING_TOP = "Let Us Solve Your";
const HEADING_HIGHLIGHT = "Water Problem";
const HEADING_BOTTOM = "Today";
const SUBTEXT =
  "Call, message or send an enquiry. Our team will understand your site and guide you with a clear plan and a fair quote.";

/* ---------- Animation variants ---------- */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

/* ---------- Animated wave ---------- */
function Wave() {
  const shape = (
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className="h-full w-1/2 shrink-0"
    >
      <path
        d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
        fill="currentColor"
      />
    </svg>
  );

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden">
      <motion.div
        className="absolute inset-x-0 bottom-0 flex h-10 w-[200%] text-sky-300/30 sm:h-16"
        animate={{ x: ["-50%", "0%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {shape}
        {shape}
      </motion.div>
      <motion.div
        className="relative flex h-7 w-[200%] text-white sm:h-12"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      >
        {shape}
        {shape}
      </motion.div>
    </div>
  );
}

/* ---------- Component ---------- */
export default function ContactHero() {
  return (
    <section className="relative isolate flex min-h-104 items-center overflow-hidden bg-[#061538] text-white sm:min-h-120 lg:min-h-136">
      {/* ---------- Background image (slow zoom) ---------- */}
      <motion.img
        src={heroBg}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0 -z-20 size-full object-cover object-center"
      />

      {/* ---------- Overlays for readability ---------- */}
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-[#061538]/85 via-[#0A2A6B]/50 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-[#061538]/50 via-transparent to-[#061538]/10" />

      {/* ---------- Content ---------- */}
      <div className="mx-auto w-full max-w-7xl px-5 pb-20 pt-10 sm:pb-24 lg:px-6 lg:pb-28 lg:pt-12">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          {/* Breadcrumb */}
          <motion.nav
            variants={item}
            aria-label="Breadcrumb"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-medium backdrop-blur-md sm:text-sm"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-blue-100 transition hover:text-white"
            >
              <Home size={14} />
              Home
            </Link>
            <ChevronRight size={14} className="text-sky-300" />
            <span className="font-semibold text-white">Contact</span>
          </motion.nav>

          {/* Badge */}
          <motion.span
            variants={item}
            className="mt-5 flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-200 sm:text-sm"
          >
            <span className="h-0.5 w-8 rounded-full bg-sky-300" />
            {BADGE}
          </motion.span>

          {/* Heading */}
          <motion.h1
            variants={item}
            className="mt-4 text-3xl font-medium leading-[1.15] tracking-tight sm:text-4xl lg:text-6xl"
          >
            {HEADING_TOP}{" "}
            <span className="bg-linear-to-r from-sky-300 via-white to-sky-200 bg-clip-text text-transparent">
              {HEADING_HIGHLIGHT}
            </span>{" "}
            {HEADING_BOTTOM}
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={item}
            className="mt-4 max-w-xl text-sm leading-relaxed text-blue-50/90 sm:text-base lg:text-lg"
          >
            {SUBTEXT}
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={item}
            className="mt-7 flex flex-col gap-3 sm:flex-row sm:gap-4"
          >
            <a
              href={`tel:${PHONE_LINK}`}
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#0A2A6B] shadow-xl shadow-black/30 transition hover:scale-[1.03]"
            >
              <Phone size={18} className="relative z-10" />
              <span className="relative z-10">{PHONE}</span>
              <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-sky-200 to-white transition-transform duration-500 group-hover:translate-x-0" />
            </a>

            <a
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                WHATSAPP_MESSAGE
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 py-3.5 text-sm font-bold shadow-xl shadow-emerald-900/30 transition hover:scale-[1.03] hover:bg-emerald-400"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* ---------- Bottom wave ---------- */}
      <Wave />
    </section>
  );
}