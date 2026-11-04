import { useRef } from "react";
import { motion } from "framer-motion";
import {
  Handshake,
  HardHat,
  Award,
  Clock,
  Users,
  MessageSquareText,
} from "lucide-react";

/* ---------- Content (update when client data arrives) ---------- */
const EYEBROW = "Our Core Values";
const HEADING = "Principles We Work By on Every Site";
const SUBTEXT =
  "These values shape how we plan the work, treat our clients and look after the people on site.";

// Placeholder values. Replace with the client's own if they have different ones.
const VALUES = [
  {
    icon: Handshake,
    title: "Honesty",
    text: "We tell you what your site really needs, give a fair quote and never push work that is not required.",
  },
  {
    icon: HardHat,
    title: "Safety First",
    text: "Safe practices protect our team, your workers and your property, on every site and every shift.",
  },
  {
    icon: Award,
    title: "Quality Work",
    text: "Well maintained equipment and careful installation, so the result is dependable from day one.",
  },
  {
    icon: Clock,
    title: "Respect for Time",
    text: "Water delays can be costly, so we plan carefully and work to keep your schedule on track.",
  },
  {
    icon: Users,
    title: "Skilled People",
    text: "Trained engineers and operators who understand pumps, soil and water, and take pride in their work.",
  },
  {
    icon: MessageSquareText,
    title: "Clear Communication",
    text: "You always know what is happening, what it will cost and what comes next, from the first call onward.",
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

const gridContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

/* ---------- Value card with mouse spotlight ---------- */
function ValueCard({ value }) {
  const ref = useRef(null);
  const Icon = value.icon;

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.div variants={fadeUp} className="h-full">
      <div
        ref={ref}
        onMouseMove={handleMove}
        className="group relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-sky-300 hover:shadow-2xl hover:shadow-blue-900/15 sm:p-8"
      >
        {/* Spotlight that follows the mouse */}
        <span
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(320px circle at var(--mx, 50%) var(--my, 50%), rgba(56,189,248,0.22), transparent 70%)",
          }}
        />

        {/* Always-moving soft glow */}
        <motion.span
          className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-sky-200/50 blur-2xl"
          animate={{ x: [0, -25, 0], y: [0, 25, 0], scale: [1, 1.25, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative">
          {/* Icon with ripple */}
          <div className="relative size-16">
            <span className="absolute inset-0 rounded-2xl bg-sky-400/30 opacity-0 group-hover:animate-ping group-hover:opacity-100" />
            <span className="relative flex size-16 items-center justify-center rounded-2xl bg-linear-to-br from-[#0A2A6B] to-[#1D5FD1] text-white shadow-lg shadow-blue-900/25 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
              <Icon size={28} />
            </span>
          </div>

          <h3 className="mt-6 text-xl font-semibold text-[#0A2A6B]">
            {value.title}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            {value.text}
          </p>

          {/* Growing line */}
          <span className="mt-6 block h-0.5 w-10 rounded-full bg-linear-to-r from-[#1747B0] to-sky-400 transition-all duration-500 group-hover:w-full" />
        </div>
      </div>
    </motion.div>
  );
}

/* ---------- Component ---------- */
export default function CoreValues() {
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

        {/* ---------- Value cards ---------- */}
        <motion.div
          variants={gridContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {VALUES.map((v) => (
            <ValueCard key={v.title} value={v} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}