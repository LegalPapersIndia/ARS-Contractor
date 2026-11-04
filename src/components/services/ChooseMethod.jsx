import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  Droplets,
  Waves,
  Gauge,
  Building2,
  ArrowRight,
  Phone,
  ThumbsUp,
  Info,
} from "lucide-react";

/* ---------- Content (update when client data arrives) ---------- */
const PHONE = "+91 63988 83191";
const PHONE_LINK = "+916398883191";

const EYEBROW = "Choose the Right Method";
const HEADING = "Which Dewatering Method Suits Your Site?";
const SUBTEXT =
  "Select your site condition and we will highlight the method that usually works best. The final choice is always confirmed after a site visit.";

// Guidance below is indicative. Confirm with the client before going live.
const METHODS = [
  {
    icon: Droplets,
    name: "Well Point",
    depth: "Shallow excavations",
    soil: "Sandy and silty soil",
    water: "Medium inflow",
    setup: "Quick",
    cost: "Low to medium",
    bestFor: "Trenches and shallow foundations",
  },
  {
    icon: Waves,
    name: "Deep Well",
    depth: "Deep excavations",
    soil: "Sand, gravel and mixed layers",
    water: "High inflow",
    setup: "Takes longer",
    cost: "Medium to high",
    bestFor: "Large basements and deep pits",
  },
  {
    icon: Gauge,
    name: "Sump Pump",
    depth: "Small, shallow pits",
    soil: "Clay and firm soil",
    water: "Low to medium inflow",
    setup: "Very quick",
    cost: "Low",
    bestFor: "Rain water and seepage removal",
  },
  {
    icon: Building2,
    name: "Basement Pumping",
    depth: "Any depth (already flooded)",
    soil: "Not soil dependent",
    water: "Very high volume",
    setup: "Immediate",
    cost: "Medium",
    bestFor: "Flooded basements and foundations",
  },
];

const ROWS = [
  { label: "Excavation depth", key: "depth" },
  { label: "Soil type", key: "soil" },
  { label: "Water volume", key: "water" },
  { label: "Setup time", key: "setup" },
  { label: "Relative cost", key: "cost" },
  { label: "Best for", key: "bestFor" },
];

// recommend = indexes of METHODS to highlight
const FINDER = [
  {
    label: "Shallow trench or pit",
    hint: "Up to a few metres deep",
    recommend: [0, 2],
  },
  {
    label: "Deep excavation",
    hint: "Large or deep foundation",
    recommend: [1],
  },
  {
    label: "Already flooded",
    hint: "Basement or pit full of water",
    recommend: [3],
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

const badge = {
  initial: { opacity: 0, y: 8, scale: 0.8 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 8, scale: 0.8 },
  transition: { duration: 0.25 },
};

/* ---------- Component ---------- */
export default function ChooseMethod() {
  const [selected, setSelected] = useState(null);
  const recommended = selected === null ? [] : FINDER[selected].recommend;
  const isRec = (i) => recommended.includes(i);

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-40 top-0 size-md rounded-full bg-sky-100/70 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 size-md rounded-full bg-blue-100/60 blur-3xl" />

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

        {/* ---------- Finder ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto mt-12 max-w-4xl"
        >
          <p className="mb-4 text-center text-sm font-semibold text-slate-500">
            My site is a...
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            {FINDER.map((f, i) => {
              const active = selected === i;
              return (
                <button
                  key={f.label}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setSelected(active ? null : i)}
                  className={`group relative overflow-hidden rounded-2xl border px-5 py-4 text-left transition-all duration-300 ${
                    active
                      ? "border-transparent text-white shadow-xl shadow-blue-900/25"
                      : "border-slate-200 bg-white text-[#0A2A6B] shadow-sm hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="finder-active"
                      className="absolute inset-0 bg-linear-to-br from-[#0A2A6B] via-[#123C93] to-[#1D5FD1]"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                      }}
                    />
                  )}
                  <span className="relative block text-base font-semibold">
                    {f.label}
                  </span>
                  <span
                    className={`relative mt-1 block text-xs ${
                      active ? "text-blue-100" : "text-slate-500"
                    }`}
                  >
                    {f.hint}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* ---------- Desktop comparison table ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-12 hidden overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-xl shadow-blue-900/10 lg:block"
        >
          {/* Header row */}
          <div className="grid grid-cols-[11rem_repeat(4,minmax(0,1fr))] border-b border-slate-200 bg-slate-50">
            <div className="flex items-end p-5 text-xs font-bold uppercase tracking-widest text-slate-500">
              Compare
            </div>
            {METHODS.map((m, i) => {
              const Icon = m.icon;
              const rec = isRec(i);
              return (
                <div
                  key={m.name}
                  className={`relative flex flex-col items-center gap-3 px-4 pb-5 pt-8 text-center transition-colors duration-500 ${
                    rec
                      ? "bg-linear-to-b from-[#0A2A6B] to-[#1747B0] text-white"
                      : "text-[#0A2A6B]"
                  }`}
                >
                  <AnimatePresence>
                    {rec && (
                      <motion.span
                        {...badge}
                        className="absolute left-1/2 top-2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[11px] font-bold text-[#1747B0] shadow-md"
                      >
                        <ThumbsUp size={12} />
                        Recommended
                      </motion.span>
                    )}
                  </AnimatePresence>

                  <span
                    className={`flex size-12 items-center justify-center rounded-2xl transition-colors duration-500 ${
                      rec
                        ? "bg-white/15 text-white"
                        : "bg-linear-to-br from-[#1747B0] to-sky-500 text-white"
                    }`}
                  >
                    <Icon size={22} />
                  </span>
                  <p className="text-base font-semibold">{m.name}</p>
                </div>
              );
            })}
          </div>

          {/* Body rows */}
          {ROWS.map((r, ri) => (
            <div
              key={r.key}
              className={`grid grid-cols-[11rem_repeat(4,minmax(0,1fr))] ${
                ri !== ROWS.length - 1 ? "border-b border-slate-100" : ""
              }`}
            >
              <div className="flex items-center bg-slate-50/60 p-5 text-sm font-semibold text-slate-600">
                {r.label}
              </div>
              {METHODS.map((m, i) => (
                <div
                  key={m.name}
                  className={`flex items-center justify-center px-4 py-5 text-center text-sm font-medium transition-colors duration-500 ${
                    isRec(i)
                      ? "bg-sky-50 text-[#0A2A6B]"
                      : "text-slate-700"
                  }`}
                >
                  {m[r.key]}
                </div>
              ))}
            </div>
          ))}
        </motion.div>

        {/* ---------- Mobile / tablet cards ---------- */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:hidden">
          {METHODS.map((m, i) => {
            const Icon = m.icon;
            const rec = isRec(i);
            return (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                className={`relative overflow-hidden rounded-3xl border bg-white shadow-sm transition-all duration-500 ${
                  rec
                    ? "border-[#1747B0] shadow-xl shadow-blue-900/20 ring-2 ring-sky-300"
                    : "border-slate-200"
                }`}
              >
                <div
                  className={`flex items-center gap-3 px-5 py-4 transition-colors duration-500 ${
                    rec
                      ? "bg-linear-to-r from-[#0A2A6B] to-[#1747B0] text-white"
                      : "bg-slate-50 text-[#0A2A6B]"
                  }`}
                >
                  <span
                    className={`flex size-11 items-center justify-center rounded-xl ${
                      rec
                        ? "bg-white/15"
                        : "bg-linear-to-br from-[#1747B0] to-sky-500 text-white"
                    }`}
                  >
                    <Icon size={20} />
                  </span>
                  <p className="text-base font-semibold">{m.name}</p>

                  <AnimatePresence>
                    {rec && (
                      <motion.span
                        {...badge}
                        className="ml-auto inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[11px] font-bold text-[#1747B0]"
                      >
                        <ThumbsUp size={11} />
                        Best match
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>

                <dl className="divide-y divide-slate-100 px-5">
                  {ROWS.map((r) => (
                    <div
                      key={r.key}
                      className="flex items-start justify-between gap-4 py-3 text-sm"
                    >
                      <dt className="shrink-0 font-semibold text-slate-500">
                        {r.label}
                      </dt>
                      <dd className="text-right font-medium text-slate-800">
                        {m[r.key]}
                      </dd>
                    </div>
                  ))}
                </dl>
              </motion.div>
            );
          })}
        </div>

        {/* Note */}
        <p className="mx-auto mt-6 flex max-w-3xl items-start justify-center gap-2 text-center text-xs text-slate-500 sm:text-sm">
          <Info size={16} className="mt-0.5 shrink-0 text-[#1747B0]" />
          This guide is indicative. The final method depends on soil, depth and
          water conditions found during the site visit.
        </p>

        {/* ---------- Bottom CTA ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mt-12 overflow-hidden rounded-3xl bg-linear-to-r from-[#0A2A6B] to-[#1747B0] p-7 text-white shadow-2xl shadow-blue-900/25 sm:p-9"
        >
          <span className="absolute -right-10 -top-10 size-44 rounded-full bg-white/10" />
          <span className="absolute -bottom-16 right-24 size-40 rounded-full bg-white/10" />

          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="text-2xl font-medium sm:text-3xl">
                Still not sure which one you need?
              </h3>
              <p className="mt-2 text-sm text-blue-100/90 sm:text-base">
                We will inspect your site and recommend the right method, free
                of cost.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#0A2A6B] shadow-lg transition hover:scale-[1.03]"
              >
                Book Free Site Visit
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <a
                href={`tel:${PHONE_LINK}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-bold transition hover:border-white hover:bg-white/15"
              >
                <Phone size={16} />
                {PHONE}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}