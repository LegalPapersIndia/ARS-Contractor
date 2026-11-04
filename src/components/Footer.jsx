import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  ArrowUp,
  MessageCircle,
  ChevronRight,
} from "lucide-react";

/* ---------- Content (client ka data aane par yahin badalna) ---------- */
const BRAND = "ARS";
const BRAND_TAG = "Dewatering Contractor";
const ABOUT_TEXT =
  "Removing accumulated water from construction sites—quickly, safely, and reliably—and preparing the area for work: this is what we are known for.";
const PHONE = "+91 98765 43210";
const PHONE_LINK = "+919876543210";
const WHATSAPP = "919876543210";
const EMAIL = "info@arsdewatering.com";
const ADDRESS = "Main Road, Chhatarpur, Madhya Pradesh - 471001";
const TIMING = "Mon - Sat: 9:00 AM - 7:00 PM";

const QUICK_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

const SERVICES = [
  "Well Point Dewatering",
  "Deep Well Dewatering",
  "Sump Pump Dewatering",
  "Basement Water Removal",
  "Pump Rental",
  "Drainage Solutions",
];

/* Social icons (inline SVG, koi extra package nahi chahiye). href="#" ki jagah client ke links daalna */
const SOCIALS = [
  {
    name: "Facebook",
    href: "#",
    path: "M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z",
  },
  {
    name: "Instagram",
    href: "#",
    path: "M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.25-3.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z",
  },
  {
    name: "YouTube",
    href: "#",
    path: "M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.82.42A2.5 2.5 0 0 0 2.42 7.19C2 8.76 2 12 2 12s0 3.24.42 4.81a2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77C22 15.24 22 12 22 12s0-3.24-.42-4.81zM10 15V9l5.2 3L10 15z",
  },
];

/* Reveal animation (har column ke liye) */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
  }),
};

/* Chalti hui paani ki wave (footer ke upar) */
function WaveTop() {
  const wave = (
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      className="h-full w-1/2 shrink-0"
    >
      <path
        d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
        fill="currentColor"
      />
    </svg>
  );

  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 -translate-y-[99%] overflow-hidden text-[#071B47]">
      {/* peeche wali halki wave */}
      <motion.div
        className="absolute inset-x-0 bottom-0 flex h-12 w-[200%] text-sky-400/30 sm:h-16"
        animate={{ x: ["-50%", "0%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        {wave}
        {wave}
      </motion.div>
      {/* aage wali main wave */}
      <motion.div
        className="relative flex h-10 w-[200%] sm:h-14"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      >
        {wave}
        {wave}
      </motion.div>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative mt-24 bg-[#071B47] text-slate-300">
      <WaveTop />

      {/* ---------- CTA strip ---------- */}
      <div className="relative mx-auto max-w-7xl px-5 lg:px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative -translate-y-1/2 overflow-hidden rounded-3xl bg-gradient-to-r from-[#1747B0] via-[#1D5FD1] to-sky-500 p-7 shadow-2xl shadow-blue-900/40 sm:p-10"
        >
          {/* decorative circles */}
          <span className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-white/10" />
          <span className="absolute -bottom-16 right-24 h-40 w-40 rounded-full bg-white/10" />

          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
                Has water collected on the site?
              </h3>
              <p className="mt-2 max-w-xl text-sm text-blue-50/90 sm:text-base">
                Call today; our team is ready for a free site visit.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href={`tel:${PHONE_LINK}`}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#0A2A6B] shadow-lg transition hover:scale-[1.03]"
              >
                <Phone size={16} />
                Call Now
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg transition hover:scale-[1.03] hover:bg-emerald-400"
              >
                <MessageCircle size={16} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ---------- Main columns ---------- */}
      <div className="mx-auto -mt-10 max-w-7xl px-5 pb-12 lg:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-4"
          >
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#1747B0] to-sky-500 text-lg font-extrabold text-white shadow-lg">
                {BRAND}
              </div>
              <div className="leading-tight">
                <p className="text-xl font-extrabold text-white">{BRAND}</p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  {BRAND_TAG}
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              {ABOUT_TEXT}
            </p>

            <div className="mt-6 flex items-center gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-slate-300 transition-all hover:-translate-y-1 hover:border-sky-400 hover:bg-sky-500 hover:text-white"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-2"
          >
            <h4 className="mb-5 text-sm font-bold uppercase tracking-widest text-white">
              Quick Links
              <span className="mt-2 block h-[3px] w-10 rounded-full bg-sky-400" />
            </h4>
            <ul className="space-y-3 text-sm">
              {QUICK_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="group inline-flex items-center gap-1.5 text-slate-400 transition hover:text-sky-300"
                  >
                    <ChevronRight
                      size={14}
                      className="-ml-1 opacity-0 transition-all group-hover:ml-0 group-hover:opacity-100"
                    />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-3"
          >
            <h4 className="mb-5 text-sm font-bold uppercase tracking-widest text-white">
              Our Services
              <span className="mt-2 block h-[3px] w-10 rounded-full bg-sky-400" />
            </h4>
            <ul className="space-y-3 text-sm">
              {SERVICES.map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="group inline-flex items-center gap-1.5 text-slate-400 transition hover:text-sky-300"
                  >
                    <ChevronRight
                      size={14}
                      className="-ml-1 opacity-0 transition-all group-hover:ml-0 group-hover:opacity-100"
                    />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            variants={fadeUp}
            custom={3}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-3"
          >
            <h4 className="mb-5 text-sm font-bold uppercase tracking-widest text-white">
              Contact Us
              <span className="mt-2 block h-[3px] w-10 rounded-full bg-sky-400" />
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-sky-400" />
                <span className="text-slate-400">{ADDRESS}</span>
              </li>
              <li>
                <a
                  href={`tel:${PHONE_LINK}`}
                  className="flex gap-3 text-slate-400 transition hover:text-sky-300"
                >
                  <Phone size={18} className="mt-0.5 shrink-0 text-sky-400" />
                  {PHONE}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex gap-3 break-all text-slate-400 transition hover:text-sky-300"
                >
                  <Mail size={18} className="mt-0.5 shrink-0 text-sky-400" />
                  {EMAIL}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock size={18} className="mt-0.5 shrink-0 text-sky-400" />
                <span className="text-slate-400">{TIMING}</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* ---------- Bottom bar ---------- */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 text-center text-[13px] text-slate-400 sm:flex-row sm:text-left lg:px-6">
          <p>
            &copy; {year} <span className="font-semibold text-white">{BRAND} {BRAND_TAG}</span>.
            All rights reserved.
          </p>
          <p className="text-slate-500">Chhatarpur (M.P.) | Quality Work, Guaranteed</p>

          <button
            onClick={scrollTop}
            aria-label="Back to top"
            className="group flex h-11 w-11 items-center justify-center rounded-full bg-sky-500 text-white shadow-lg transition hover:-translate-y-1 hover:bg-sky-400 sm:order-last"
          >
            <ArrowUp size={18} className="transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}