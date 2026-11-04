import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Phone, ArrowRight, Navigation } from "lucide-react";

/* ---------- Content (update when client data arrives) ---------- */
const PHONE = "+91 63988 83191";
const PHONE_LINK = "+916398883191";

const EYEBROW = "Service Areas";
const HEADING = "Serving Chhatarpur and Nearby Districts";
const SUBTEXT =
  "Our team and equipment are ready to reach your site across Chhatarpur and the surrounding region. Check the areas we regularly serve below.";

const MAIN_AREA = "Chhatarpur";

// Placeholder areas: replace with the client's real service locations
const AREAS = [
  "Khajuraho",
  "Nowgong",
  "Bijawar",
  "Maharajpur",
  "Rajnagar",
  "Harpalpur",
  "Panna",
  "Tikamgarh",
  "Sagar",
  "Damoh",
  "Satna",
];

// Pin positions on the radar (percent of the radar box)
const PINS = [
  { name: "Rajnagar", left: 50, top: 12 },
  { name: "Khajuraho", left: 80, top: 30 },
  { name: "Bijawar", left: 84, top: 66 },
  { name: "Panna", left: 58, top: 88 },
  { name: "Maharajpur", left: 22, top: 74 },
  { name: "Nowgong", left: 16, top: 36 },
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

const chipContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } },
};

const chip = {
  hidden: { opacity: 0, scale: 0.85, y: 15 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

/* ---------- Component ---------- */
export default function ServiceAreas() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-32 top-10 size-md rounded-full bg-sky-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 size-md rounded-full bg-blue-200/40 blur-3xl" />
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(rgba(10,42,107,0.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-16 lg:px-6">
        {/* ---------- Left: content ---------- */}
        <div>
          <motion.div
            variants={headerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
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
              className="mt-5 h-1 w-20 rounded-full bg-linear-to-r from-[#1747B0] to-sky-400"
            />

            <motion.p
              variants={fadeUp}
              className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg"
            >
              {SUBTEXT}
            </motion.p>
          </motion.div>

          {/* Area chips */}
          <motion.ul
            variants={chipContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3"
          >
            {/* Main area */}
            <motion.li
              variants={chip}
              className="col-span-2 flex items-center gap-3 rounded-2xl bg-linear-to-r from-[#0A2A6B] to-[#1747B0] px-5 py-4 text-white shadow-lg shadow-blue-900/25 sm:col-span-3"
            >
              <span className="flex size-10 items-center justify-center rounded-xl bg-white/15">
                <Navigation size={20} />
              </span>
              <div className="leading-tight">
                <p className="text-base font-semibold">{MAIN_AREA}</p>
                <p className="text-xs text-blue-100/80">Head location</p>
              </div>
            </motion.li>

            {AREAS.map((a) => (
              <motion.li
                key={a}
                variants={chip}
                whileHover={{ y: -4 }}
                className="group flex cursor-default items-center gap-2.5 rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:border-sky-300 hover:bg-sky-50 hover:text-[#0A2A6B]"
              >
                <MapPin
                  size={16}
                  className="shrink-0 text-[#1747B0] transition-transform duration-300 group-hover:scale-125"
                />
                {a}
              </motion.li>
            ))}
          </motion.ul>

          {/* Not listed strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-col gap-4 rounded-2xl border border-sky-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between"
          >
            <p className="text-sm font-medium text-slate-700">
              Not sure if we cover your location? Call us and we will let you
              know.
            </p>
            <div className="flex shrink-0 gap-3">
              <a
                href={`tel:${PHONE_LINK}`}
                className="inline-flex items-center gap-2 rounded-full bg-[#0A2A6B] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#1747B0]"
              >
                <Phone size={15} />
                {PHONE}
              </a>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-1.5 rounded-full border border-[#0A2A6B]/20 px-5 py-2.5 text-sm font-bold text-[#0A2A6B] transition hover:border-[#0A2A6B]"
              >
                Contact
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* ---------- Right: radar coverage ---------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-lg overflow-hidden rounded-[2.5rem] bg-linear-to-br from-[#061538] via-[#0A2A6B] to-[#123C93] p-4 shadow-2xl shadow-blue-900/30 lg:max-w-none"
        >
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative mx-auto aspect-square w-full max-w-md">
            {/* Rings */}
            <div className="absolute inset-[30%] rounded-full border border-sky-300/30" />
            <div className="absolute inset-[15%] rounded-full border border-dashed border-sky-300/25" />
            <div className="absolute inset-0 rounded-full border border-sky-300/20" />

            {/* Radar sweep */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, rgba(56,189,248,0) 0deg, rgba(56,189,248,0.35) 70deg, rgba(56,189,248,0) 71deg)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            />

            {/* Ripples from center */}
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="absolute left-1/2 top-1/2 size-1/2 -translate-1/2 rounded-full border border-sky-300/40"
                initial={{ scale: 0.3, opacity: 0 }}
                animate={{ scale: [0.3, 2], opacity: [0.6, 0] }}
                transition={{
                  duration: 5,
                  delay: i * 1.6,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
            ))}

            {/* Center: head location */}
            <div className="absolute left-1/2 top-1/2 z-10 -translate-1/2 text-center">
              <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-white text-[#0A2A6B] shadow-xl shadow-sky-400/40 ring-8 ring-sky-300/20">
                <MapPin size={28} />
              </span>
              <p className="mt-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                {MAIN_AREA}
              </p>
            </div>

            {/* Pins */}
            {PINS.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.6 + i * 0.15,
                  type: "spring",
                  stiffness: 220,
                  damping: 14,
                }}
                className="absolute z-10 -translate-1/2"
                style={{ left: `${p.left}%`, top: `${p.top}%` }}
              >
                <div className="flex flex-col items-center gap-1.5">
                  <span className="relative flex size-3">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-sky-300 opacity-75" />
                    <span className="relative inline-flex size-3 rounded-full bg-sky-300 ring-2 ring-white/60" />
                  </span>
                  <span className="whitespace-nowrap rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-md sm:text-xs">
                    {p.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="relative mt-3 text-center text-xs font-medium text-blue-100/70">
            Coverage shown is indicative, not to scale
          </p>
        </motion.div>
      </div>
    </section>
  );
}