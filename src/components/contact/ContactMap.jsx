import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  MousePointerClick,
} from "lucide-react";

/* ---------- Content (update when client data arrives) ---------- */
const PHONE = "+91 63988 83191";
const PHONE_LINK = "+916398883191";
const ADDRESS = "Main Road, Chhatarpur, Madhya Pradesh - 471001";
const TIMING = "Mon - Sat: 9:00 AM - 7:00 PM";

// Replace with the client's exact address or business name once available
const MAP_QUERY = "Chhatarpur, Madhya Pradesh";

const EYEBROW = "Find Us";
const HEADING = "Visit Our Location";
const SUBTEXT =
  "We are based in Chhatarpur and serve sites across the surrounding districts. Get directions or call us before you visit.";

const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  MAP_QUERY
)}&output=embed`;
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  MAP_QUERY
)}`;

/* ---------- Animation variants ---------- */
const headerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardList = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } },
};

const cardItem = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/* ---------- Component ---------- */
export default function ContactMap() {
  // Map stays locked until clicked, so it never hijacks page scrolling
  const [active, setActive] = useState(false);

  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28">
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

        {/* ---------- Map + location card ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mt-14"
        >
          {/* Map frame */}
          <div
            onMouseLeave={() => setActive(false)}
            className="relative h-105 overflow-hidden rounded-4xl border-4 border-white shadow-2xl shadow-blue-900/20 sm:h-120 lg:h-135"
          >
            <iframe
              title="ARS Dewatering Contractor location map"
              src={MAP_SRC}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className={`size-full border-0 ${
                active ? "" : "pointer-events-none"
              }`}
            />

            {/* Click-to-interact overlay */}
            {!active && (
              <button
                type="button"
                onClick={() => setActive(true)}
                aria-label="Click to interact with the map"
                className="group absolute inset-0 cursor-pointer"
              >
                <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-[#0A2A6B] shadow-lg backdrop-blur-md transition-transform duration-300 group-hover:scale-105 sm:text-sm">
                  <MousePointerClick size={16} className="text-[#1747B0]" />
                  Click to interact with the map
                </span>
              </button>
            )}
          </div>

          {/* Location card */}
          <motion.div
            variants={cardList}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative z-10 mx-auto -mt-10 w-[calc(100%-2rem)] max-w-md overflow-hidden rounded-3xl bg-linear-to-br from-[#061538] via-[#0A2A6B] to-[#1747B0] p-6 text-white shadow-2xl shadow-blue-900/40 sm:p-7 lg:absolute lg:left-8 lg:top-1/2 lg:mx-0 lg:mt-0 lg:w-96 lg:-translate-y-1/2"
          >
            {/* Glow */}
            <motion.span
              className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-sky-400/25 blur-3xl"
              animate={{ x: [0, -25, 0], y: [0, 25, 0], scale: [1, 1.25, 1] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative">
              <motion.div variants={cardItem} className="flex items-center gap-3">
                <span className="relative flex size-12 items-center justify-center">
                  <span className="absolute inset-0 animate-ping rounded-2xl bg-sky-400/40" />
                  <span className="relative flex size-12 items-center justify-center rounded-2xl bg-white text-[#1747B0] shadow-lg">
                    <MapPin size={24} />
                  </span>
                </span>
                <div className="leading-tight">
                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-100/70">
                    Our Office
                  </p>
                  <p className="text-lg font-semibold">ARS Dewatering</p>
                </div>
              </motion.div>

              <div className="my-5 h-px bg-linear-to-r from-white/30 via-white/10 to-transparent" />

              <ul className="space-y-4 text-sm">
                <motion.li variants={cardItem} className="flex gap-3">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-sky-300" />
                  <span className="text-blue-50/90">{ADDRESS}</span>
                </motion.li>

                <motion.li variants={cardItem}>
                  <a
                    href={`tel:${PHONE_LINK}`}
                    className="flex gap-3 text-blue-50/90 transition hover:text-sky-200"
                  >
                    <Phone size={18} className="mt-0.5 shrink-0 text-sky-300" />
                    {PHONE}
                  </a>
                </motion.li>

                <motion.li variants={cardItem} className="flex gap-3">
                  <Clock size={18} className="mt-0.5 shrink-0 text-sky-300" />
                  <span className="text-blue-50/90">{TIMING}</span>
                </motion.li>
              </ul>

              <motion.a
                variants={cardItem}
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noreferrer"
                className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#0A2A6B] shadow-lg transition hover:scale-[1.02]"
              >
                <Navigation
                  size={16}
                  className="transition-transform duration-300 group-hover:rotate-12"
                />
                Get Directions
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}