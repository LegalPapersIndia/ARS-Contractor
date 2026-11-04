import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Wrench,
  HardHat,
  Zap,
  BadgeIndianRupee,
  Siren,
  Phone,
  ArrowRight,
} from "lucide-react";

/* ---------- Content (update when client data arrives) ---------- */
const PHONE = "+91 63988 83191";
const PHONE_LINK = "+916398883191";

const EYEBROW = "Why Choose ARS";
const HEADING = "The Dewatering Partner You Can Depend On";
const SUBTEXT =
  "Every site is different. We combine the right equipment, a skilled team and a clear process, so water never becomes the reason your project gets delayed.";

const REASONS = [
  {
    icon: ShieldCheck,
    title: "Guaranteed Work",
    text: "We stand behind every job. If the site is not dry as promised, we make it right.",
  },
  {
    icon: Wrench,
    title: "Modern Equipment",
    text: "Well maintained, high-capacity pumps and accessories that handle heavy groundwater flow.",
  },
  {
    icon: HardHat,
    title: "Experienced Team",
    text: "Trained site engineers and operators who know how to plan, install and monitor each setup.",
  },
  {
    icon: Zap,
    title: "Quick Response",
    text: "Fast mobilisation for urgent sites, so water logging does not stop your construction work.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Fair and Clear Pricing",
    text: "Honest quotes after a site visit, with no hidden charges and no last minute surprises.",
  },
  {
    icon: Siren,
    title: "Safety First",
    text: "Safe working practices on every site to protect our team, your workers and your property.",
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

/* ---------- Component ---------- */
export default function WhyChooseUs() {
  return (
    <section className="relative isolate overflow-hidden bg-linear-to-b from-[#061538] via-[#0A2A6B] to-[#061538] py-20 text-white sm:py-24 lg:py-28">
      {/* Background grid */}
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* Glow blobs */}
      <div className="absolute -left-32 top-10 -z-10 size-md rounded-full bg-sky-500/20 blur-3xl" />
      <div className="absolute -right-32 bottom-10 -z-10 size-md rounded-full bg-blue-500/20 blur-3xl" />

      {/* Slow ripples (decorative) */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 hidden -translate-1/2 lg:block">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="absolute size-130 -translate-1/2 rounded-full border border-sky-300/10"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: [0.5, 1.8], opacity: [0.5, 0] }}
            transition={{
              duration: 9,
              delay: i * 3,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-5 lg:px-6">
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
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-sky-200 backdrop-blur-md"
          >
            <span className="size-1.5 rounded-full bg-sky-300" />
            {EYEBROW}
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="mt-5 text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-5xl"
          >
            {HEADING}
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="mx-auto mt-5 h-1 w-20 rounded-full bg-linear-to-r from-sky-400 to-white"
          />

          <motion.p
            variants={fadeUp}
            className="mt-6 text-base leading-relaxed text-blue-100/80 sm:text-lg"
          >
            {SUBTEXT}
          </motion.p>
        </motion.div>

        {/* ---------- Reason cards ---------- */}
        <motion.div
          variants={gridContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {REASONS.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.title}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-sky-300/40 hover:shadow-2xl hover:shadow-sky-500/10 sm:p-8"
              >
                {/* Hover glow */}
                <span className="absolute inset-0 bg-linear-to-br from-sky-400/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Number watermark */}
                <span className="absolute right-6 top-4 text-6xl font-black text-white/5 transition-colors duration-500 group-hover:text-white/10">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative">
                  <span className="flex size-14 items-center justify-center rounded-2xl bg-linear-to-br from-sky-400 to-blue-600 text-white shadow-lg shadow-blue-900/40 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                    <Icon size={26} />
                  </span>

                  <h3 className="mt-6 text-xl font-semibold">{r.title}</h3>

                  <p className="mt-3 text-sm leading-relaxed text-blue-100/75">
                    {r.text}
                  </p>

                  {/* Animated bottom line */}
                  <span className="mt-6 block h-0.5 w-10 rounded-full bg-sky-400 transition-all duration-500 group-hover:w-full" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ---------- Bottom call strip ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-14 flex flex-col items-start justify-between gap-6 rounded-3xl border border-white/15 bg-linear-to-r from-white/10 to-white/5 p-7 backdrop-blur-xl sm:p-9 md:flex-row md:items-center"
        >
          <div>
            <h3 className="text-2xl font-medium sm:text-3xl">
              Talk to our dewatering expert today
            </h3>
            <p className="mt-2 text-sm text-blue-100/80 sm:text-base">
              Get a free site visit and a clear quote, with no obligation.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href={`tel:${PHONE_LINK}`}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#0A2A6B] shadow-lg transition hover:scale-[1.03]"
            >
              <Phone size={16} />
              {PHONE}
            </a>
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-bold transition hover:border-white hover:bg-white/15"
            >
              Get Free Quote
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}