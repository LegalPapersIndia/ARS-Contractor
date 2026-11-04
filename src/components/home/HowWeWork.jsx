import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MapPin,
  ClipboardList,
  Wrench,
  Waves,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";

/* ---------- Content (update when client data arrives) ---------- */
const EYEBROW = "How We Work";
const HEADING = "A Simple, Clear Process from Call to Completion";
const SUBTEXT =
  "No confusion and no delays. Here is how we take your site from water logged to work ready.";

const STEPS = [
  {
    icon: MapPin,
    title: "Free Site Visit",
    text: "Our engineer visits your site and checks the water level, soil condition and working area.",
  },
  {
    icon: ClipboardList,
    title: "Planning and Quote",
    text: "We choose the right method and pump capacity, then share a clear and honest quote.",
  },
  {
    icon: Wrench,
    title: "Pump and Pipe Setup",
    text: "Our team safely installs pumps, pipes and discharge lines as per the plan.",
  },
  {
    icon: Waves,
    title: "Dewatering and Monitoring",
    text: "Continuous pumping with regular checks to keep your excavation dry and stable.",
  },
  {
    icon: BadgeCheck,
    title: "Handover",
    text: "Your site is ready for work. We remove the equipment or stay on for ongoing needs.",
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

/* ---------- Component ---------- */
export default function HowWeWork() {
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

        {/* ---------- Timeline ---------- */}
        <div className="relative mt-16">
          {/* Desktop line (horizontal) */}
          <div className="absolute left-[10%] right-[10%] top-10 hidden h-0.5 bg-slate-200 lg:block">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
              className="h-full origin-left bg-linear-to-r from-[#1747B0] to-sky-400"
            />
          </div>

          {/* Mobile line (vertical) */}
          <div className="absolute bottom-8 left-8 top-8 w-0.5 -translate-x-1/2 bg-slate-200 lg:hidden">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
              className="h-full origin-top bg-linear-to-b from-[#1747B0] to-sky-400"
            />
          </div>

          <ol className="relative grid gap-10 lg:grid-cols-5 lg:gap-6">
            {STEPS.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.li
  key={s.title}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{
    duration: 0.6,
    delay: i * 0.15,
    ease: "easeOut",
  }}
  className="group flex items-start gap-5 lg:flex-col lg:items-center lg:gap-6"
>
  {/* Step circle */}
  <div className="relative shrink-0">
    <span className="flex size-16 items-center justify-center rounded-full bg-linear-to-br from-[#0A2A6B] to-[#1D5FD1] text-white shadow-xl shadow-blue-900/30 ring-8 ring-slate-50 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110 lg:size-20">
      <Icon size={26} />
    </span>
    <span className="absolute -right-1 -top-1 flex size-7 items-center justify-center rounded-full bg-white text-xs font-bold text-[#1747B0] shadow-md ring-2 ring-sky-300">
      {i + 1}
    </span>
  </div>

  {/* Step card */}
  <div className="relative w-full flex-1 overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 pt-7 shadow-sm transition-all duration-500 group-hover:-translate-y-2 group-hover:border-transparent group-hover:shadow-2xl group-hover:shadow-blue-900/25 lg:text-center">
    {/* Always-moving glow */}
    <motion.span
      className="pointer-events-none absolute -right-10 -top-10 size-36 rounded-full bg-sky-300/40 blur-2xl"
      animate={{ x: [0, -35, 0], y: [0, 30, 0], scale: [1, 1.3, 1] }}
      transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.span
      className="pointer-events-none absolute -bottom-12 -left-10 size-32 rounded-full bg-blue-300/30 blur-2xl"
      animate={{ x: [0, 30, 0], y: [0, -25, 0], scale: [1, 1.25, 1] }}
      transition={{ duration: 7 + i, repeat: Infinity, ease: "easeInOut" }}
    />

    {/* Hover fill (bottom to top) */}
    <span className="absolute inset-0 origin-bottom scale-y-0 bg-linear-to-br from-[#0A2A6B] via-[#123C93] to-[#1D5FD1] transition-transform duration-500 ease-out group-hover:scale-y-100" />

    {/* Big number watermark */}
    {/* <span className="absolute -bottom-5 right-3 text-8xl font-black text-slate-100 transition-colors duration-500 group-hover:text-white/10">
      0{i + 1}
    </span> */}

    {/* Top accent line */}
    <span className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-[#1747B0] to-sky-400" />

    {/* Text */}
    <div className="relative">
      <h3 className="text-lg font-semibold text-[#0A2A6B] transition-colors duration-500 group-hover:text-white">
        {s.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600 transition-colors duration-500 group-hover:text-blue-50/90">
        {s.text}
      </p>
    </div>
  </div>
</motion.li>
              );
            })}
          </ol>
        </div>

        {/* ---------- CTA ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-linear-to-r from-[#0A2A6B] to-[#1747B0] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-blue-900/25 transition hover:shadow-xl hover:shadow-blue-900/30"
          >
            <span className="relative z-10">Book a Free Site Visit</span>
            <ArrowRight
              size={18}
              className="relative z-10 transition-transform group-hover:translate-x-1"
            />
            <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-sky-500 to-[#1747B0] transition-transform duration-500 group-hover:translate-x-0" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}