import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Droplets,
  Waves,
  Gauge,
  Building2,
  Truck,
  Route,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Target,
} from "lucide-react";

/* ---------- Content (update when client data arrives) ---------- */
const WHATSAPP = "916398883191";

const EYEBROW = "Our Services";
const HEADING = "Dewatering Solutions for Every Site Condition";
const SUBTEXT =
  "Explore each method in detail and see which one fits your excavation, soil and budget. Not sure which to choose? We will guide you after a free site visit.";

import wellPoint from "../../Asset/services/service-well-point.png";
import deepWell from "../../Asset/services/service-deep-well.png";
import sumpPump from "../../Asset/services/service-sump-pump.png";
import basement from "../../Asset/services/service-basement.png";
import pumpRental from "../../Asset/services/service-pump-rental.png";
import drainage from "../../Asset/services/service-drainage.png";

const SERVICES = [
  {
    icon: Droplets,
    title: "Well Point Dewatering",
    text: "A row of closely spaced shallow wells connected to a header pipe and pump lowers the water table around your excavation, keeping trenches and foundations dry and stable.",
    points: [
      "Ideal for shallow excavations",
      "Works well in sandy and silty soil",
      "Quick installation and removal",
      "Cost effective for long trenches",
    ],
    bestFor: "Trenches and shallow foundations",
    image: wellPoint,
  },
  {
    icon: Waves,
    title: "Deep Well Dewatering",
    text: "Deep bored wells with submersible pumps control groundwater at greater depth, making it possible to excavate safely on large sites with high water tables.",
    points: [
      "Controls deep groundwater",
      "Handles large excavation areas",
      "Submersible pump in every well",
      "Reliable for long duration work",
    ],
    bestFor: "Deep basements and large sites",
    image: deepWell,
  },
  {
    icon: Gauge,
    title: "Sump Pump Dewatering",
    text: "Water is collected in a sump pit and pumped away. It is a simple, low cost way to remove surface water, rain water and seepage from pits and trenches.",
    points: [
      "Simple and economical method",
      "Handles surface and seepage water",
      "Easy to move across the site",
      "Suitable for small to medium pits",
    ],
    bestFor: "Small pits and rain water removal",
    image: sumpPump,
  },
  {
    icon: Building2,
    title: "Basement Water Removal",
    text: "High capacity pumping to clear flooded basements and foundations quickly, so waterproofing, shuttering and concrete work can continue without long delays.",
    points: [
      "Rapid high volume pumping",
      "Suitable for flooded basements",
      "Safe discharge arrangement",
      "Emergency support available",
    ],
    bestFor: "Flooded basements and foundations",
    image: basement,
  },
  {
    icon: Truck,
    title: "Pump Rental",
    text: "Dewatering pumps, hoses and accessories on rent in different capacities. Choose short term or long term rental based on how long your site needs them.",
    points: [
      "Multiple pump capacities",
      "Short and long term rental",
      "Hoses, pipes and fittings available",
      "Technical guidance on request",
    ],
    bestFor: "Contractors needing flexible equipment",
    image: pumpRental,
  },
  {
    icon: Route,
    title: "Drainage Solutions",
    text: "Planned drainage and discharge arrangements that carry water away from your site and stop it from coming back, working on their own or along with other methods.",
    points: [
      "Planned discharge routes",
      "Prevents repeated water logging",
      "Works with other dewatering methods",
      "Suitable for site roads and yards",
    ],
    bestFor: "Sites with repeated water logging",
    image: drainage,
  },
];

/* ---------- Animation variants ---------- */
const headerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const listContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};

/* ---------- Visual panel (image or animated icon panel) ---------- */
function ServiceVisual({ service, index }) {
  const Icon = service.icon;

  return (
    <div className="relative">
      {/* Dotted pattern */}
      <div
        className="absolute -bottom-6 -right-6 -z-10 size-32 opacity-60"
        style={{
          backgroundImage: "radial-gradient(#1747B0 2px, transparent 2px)",
          backgroundSize: "16px 16px",
        }}
      />

      <div className="group relative aspect-4/3 overflow-hidden rounded-4xl shadow-2xl shadow-blue-900/25">
        {service.image ? (
          <>
            <img
              src={service.image}
              alt={service.title}
              loading="lazy"
              className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#061538]/60 via-transparent to-transparent" />
          </>
        ) : (
          <div className="absolute inset-0 bg-linear-to-br from-[#061538] via-[#0A2A6B] to-[#1D5FD1]">
            {/* Grid pattern */}
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)",
                backgroundSize: "36px 36px",
              }}
            />

            {/* Glow blobs */}
            <motion.span
              className="absolute -left-10 -top-10 size-56 rounded-full bg-sky-400/25 blur-3xl"
              animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.span
              className="absolute -bottom-12 -right-10 size-56 rounded-full bg-blue-400/25 blur-3xl"
              animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Ripples */}
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="absolute left-1/2 top-1/2 size-40 -translate-1/2 rounded-full border border-sky-300/40"
                initial={{ scale: 0.4, opacity: 0 }}
                animate={{ scale: [0.4, 2.2], opacity: [0.6, 0] }}
                transition={{
                  duration: 5,
                  delay: i * 1.6,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
            ))}

            {/* Center icon */}
            <div className="absolute left-1/2 top-1/2 -translate-1/2">
              <motion.span
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex size-24 items-center justify-center rounded-3xl bg-white/10 text-white shadow-2xl ring-1 ring-white/30 backdrop-blur-xl transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110 sm:size-28"
              >
                <Icon size={48} strokeWidth={1.5} />
              </motion.span>
            </div>
          </div>
        )}

        {/* Service label */}
        <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-white/15 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
          Service {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}

/* ---------- Component ---------- */
export default function ServicesList() {
  return (
    <section
      id="services-list"
      className="relative scroll-mt-18 overflow-hidden bg-slate-50 py-20 sm:py-24 lg:scroll-mt-28 lg:py-28"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-32 top-20 size-md rounded-full bg-sky-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 size-md rounded-full bg-blue-200/40 blur-3xl" />
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(rgba(10,42,107,0.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-6">
        {/* ---------- Section heading ---------- */}
        <motion.div
          variants={headerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#1747B0]"
          >
            <span className="size-1.5 rounded-full bg-[#1747B0]" />
            {EYEBROW}
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="mt-5 text-3xl font-medium leading-tight tracking-tight text-[#0A2A6B] sm:text-4xl lg:text-5xl"
          >
            {HEADING}
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="mx-auto mt-5 h-1 w-20 rounded-full bg-linear-to-r from-[#1747B0] to-sky-400"
          />

          <motion.p
            variants={fadeUp}
            className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            {SUBTEXT}
          </motion.p>
        </motion.div>

        {/* ---------- Service rows ---------- */}
        <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-28">
          {SERVICES.map((s, i) => {
            const reversed = i % 2 === 1;
            return (
              <div
                key={s.title}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                {/* Visual */}
                <motion.div
                  initial={{ opacity: 0, x: reversed ? 60 : -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={reversed ? "lg:order-2" : ""}
                >
                  <ServiceVisual service={s} index={i} />
                </motion.div>

                {/* Content */}
                <motion.div
                  variants={listContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  className={reversed ? "lg:order-1" : ""}
                >
                  <motion.span
                    variants={fadeUp}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#1747B0]"
                  >
                    <span className="h-0.5 w-8 rounded-full bg-[#1747B0]" />
                    Service {String(i + 1).padStart(2, "0")}
                  </motion.span>

                  <motion.h3
                    variants={fadeUp}
                    className="mt-3 text-2xl font-medium leading-tight text-[#0A2A6B] sm:text-3xl lg:text-4xl"
                  >
                    {s.title}
                  </motion.h3>

                  <motion.p
                    variants={fadeUp}
                    className="mt-4 text-base leading-relaxed text-slate-600"
                  >
                    {s.text}
                  </motion.p>

                  <motion.ul
                    variants={fadeUp}
                    className="mt-6 grid gap-3 sm:grid-cols-2"
                  >
                    {s.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-3 text-sm font-medium text-slate-700"
                      >
                        <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-[#1747B0] to-sky-500 text-white">
                          <CheckCircle2 size={14} />
                        </span>
                        {p}
                      </li>
                    ))}
                  </motion.ul>

                  <motion.div
                    variants={fadeUp}
                    className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-sky-200 bg-white px-4 py-3 shadow-sm"
                  >
                    <span className="flex size-9 items-center justify-center rounded-xl bg-blue-100 text-[#1747B0]">
                      <Target size={18} />
                    </span>
                    <div className="leading-tight">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                        Best for
                      </p>
                      <p className="text-sm font-semibold text-[#0A2A6B]">
                        {s.bestFor}
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={fadeUp}
                    className="mt-8 flex flex-col gap-3 sm:flex-row"
                  >
                    <Link
                      to="/contact"
                      className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-linear-to-r from-[#0A2A6B] to-[#1747B0] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-900/25 transition hover:shadow-xl hover:shadow-blue-900/30"
                    >
                      <span className="relative z-10">Get Free Quote</span>
                      <ArrowRight
                        size={18}
                        className="relative z-10 transition-transform group-hover:translate-x-1"
                      />
                      <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-sky-500 to-[#1747B0] transition-transform duration-500 group-hover:translate-x-0" />
                    </Link>

                    <a
                      href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                        `Hello, I would like to know more about ${s.title}.`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-emerald-500/30 px-7 py-3.5 text-sm font-bold text-emerald-700 transition hover:border-emerald-500 hover:bg-emerald-500 hover:text-white"
                    >
                      <MessageCircle size={18} />
                      Ask on WhatsApp
                    </a>
                  </motion.div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}