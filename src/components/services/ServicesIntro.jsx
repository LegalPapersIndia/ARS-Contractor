import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  ClipboardCheck,
  Wrench,
  Gauge,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

/* ---------- Content (update when client data arrives) ---------- */
const PHONE = "+91 63988 83191";
const PHONE_LINK = "+916398883191";

const EYEBROW = "What We Offer";
const HEADING = "Six Dewatering Services, One Trusted Team";
const PARA_1 =
  "Every construction site has different soil, depth and water conditions, so one method does not fit all. We study your site first and then recommend the dewatering system that keeps your work dry in the most practical and cost effective way.";
const PARA_2 =
  "From a simple sump pump to a full deep well system, our team handles planning, installation, monitoring and removal, so you can focus on construction.";

const CHECKS = [
  "Free site visit and clear quote",
  "Right method for your soil and depth",
  "Modern pumps and reliable accessories",
];

const HIGHLIGHTS = [
  {
    icon: ClipboardCheck,
    title: "Site-Based Planning",
    text: "We inspect first, so you get a system designed for your actual site conditions.",
  },
  {
    icon: Wrench,
    title: "Complete Setup",
    text: "Pumps, pipes, wells and discharge lines installed by our own trained team.",
  },
  {
    icon: Gauge,
    title: "Regular Monitoring",
    text: "Continuous checks during the work to keep water levels under control.",
  },
  {
    icon: ShieldCheck,
    title: "Guaranteed Results",
    text: "We stay accountable until your excavation is dry and ready for work.",
  },
];

/* ---------- Animation variants ---------- */
const textContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.15 } },
};

/* ---------- Component ---------- */
export default function ServicesIntro() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-40 top-0 size-md rounded-full bg-sky-100/70 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 size-md rounded-full bg-blue-100/60 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-6">
        {/* ---------- Left: content ---------- */}
        <motion.div
          variants={textContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
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
            {PARA_1}
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            {PARA_2}
          </motion.p>

          <motion.ul variants={textContainer} className="mt-7 space-y-3">
            {CHECKS.map((c) => (
              <motion.li
                key={c}
                variants={fadeUp}
                className="flex items-center gap-3 text-sm font-medium text-slate-700 sm:text-base"
              >
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-[#1747B0] to-sky-500 text-white">
                  <CheckCircle2 size={16} />
                </span>
                {c}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-linear-to-r from-[#0A2A6B] to-[#1747B0] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-blue-900/25 transition hover:shadow-xl hover:shadow-blue-900/30"
            >
              <span className="relative z-10">Get Free Quote</span>
              <ArrowRight
                size={18}
                className="relative z-10 transition-transform group-hover:translate-x-1"
              />
              <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-sky-500 to-[#1747B0] transition-transform duration-500 group-hover:translate-x-0" />
            </Link>

            <a
              href={`tel:${PHONE_LINK}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#0A2A6B]/20 px-8 py-4 text-sm font-bold text-[#0A2A6B] transition hover:border-[#0A2A6B] hover:bg-[#0A2A6B] hover:text-white"
            >
              <Phone size={18} />
              {PHONE}
            </a>
          </motion.div>
        </motion.div>

        {/* ---------- Right: highlight cards ---------- */}
        <div className="relative">
          {/* Dotted pattern */}
          <div
            className="absolute -right-4 -top-6 -z-10 size-36 opacity-70"
            style={{
              backgroundImage: "radial-gradient(#1747B0 2px, transparent 2px)",
              backgroundSize: "16px 16px",
            }}
          />

          <motion.div
            variants={cardContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-5 sm:grid-cols-2"
          >
            {HIGHLIGHTS.map((h, i) => {
              const Icon = h.icon;
              return (
                <motion.div
                  key={h.title}
                  variants={{
                    hidden: { opacity: 0, y: 40, scale: 0.95 },
                    show: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: { duration: 0.6, ease: "easeOut" },
                    },
                  }}
                  className={i % 2 === 1 ? "sm:mt-8" : ""}
                >
                  <div className="group relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-transparent hover:shadow-2xl hover:shadow-blue-900/20 sm:p-7">
                    {/* Always-moving glow */}
                    <motion.span
                      className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-sky-300/40 blur-2xl"
                      animate={{
                        x: [0, -30, 0],
                        y: [0, 25, 0],
                        scale: [1, 1.3, 1],
                      }}
                      transition={{
                        duration: 6 + i,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    {/* Hover fill (bottom to top) */}
                    <span className="absolute inset-0 origin-bottom scale-y-0 bg-linear-to-br from-[#0A2A6B] via-[#123C93] to-[#1D5FD1] transition-transform duration-500 ease-out group-hover:scale-y-100" />

                    {/* Top accent line */}
                    <span className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-[#1747B0] to-sky-400" />

                    <div className="relative">
                      <span className="flex size-14 items-center justify-center rounded-2xl bg-linear-to-br from-[#1747B0] to-sky-500 text-white shadow-lg shadow-blue-900/20 transition-all duration-500 group-hover:rotate-6 group-hover:bg-white group-hover:from-white group-hover:to-white group-hover:text-[#1747B0]">
                        <Icon size={26} />
                      </span>

                      <h3 className="mt-5 text-lg font-semibold text-[#0A2A6B] transition-colors duration-500 group-hover:text-white">
                        {h.title}
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-slate-600 transition-colors duration-500 group-hover:text-blue-50/90">
                        {h.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}