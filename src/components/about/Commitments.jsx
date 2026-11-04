import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  ClipboardCheck,
  FileText,
  Wrench,
  HardHat,
  PhoneCall,
  ArrowRight,
  Phone,
} from "lucide-react";

/* ---------- Content (update when client data arrives) ---------- */
const PHONE = "+91 63988 83191";
const PHONE_LINK = "+916398883191";

const EYEBROW = "Our Commitments";
const HEADING = "Our Promise to Every Client";
const SUBTEXT =
  "Good dewatering is not only about pumps. It is also about how we treat your site, your time and your budget. This is what you can expect from us.";

// Confirm each promise with the client before going live
const COMMITMENTS = [
  {
    icon: ClipboardCheck,
    title: "Free Site Visit",
    text: "We inspect your site before we quote, at no cost to you, so the plan fits real conditions.",
  },
  {
    icon: FileText,
    title: "Clear and Honest Quote",
    text: "Straightforward pricing with no hidden charges and no surprise add-ons later.",
  },
  {
    icon: Wrench,
    title: "Properly Maintained Equipment",
    text: "Pumps, hoses and accessories are checked before they reach your site, to avoid breakdowns.",
  },
  {
    icon: HardHat,
    title: "Safe Working Practices",
    text: "Trained people following safe procedures to protect your workers, our team and your property.",
  },
  {
    icon: PhoneCall,
    title: "Regular Updates and Support",
    text: "You stay informed during the work, and you can reach us whenever you need help.",
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

/* ---------- Component ---------- */
export default function Commitments() {
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

      <div className="mx-auto grid max-w-7xl items-start gap-14 px-5 lg:grid-cols-12 lg:gap-16 lg:px-6">
        {/* ---------- Left: heading + shield visual ---------- */}
        <div className="lg:col-span-5">
          <motion.div
            variants={textContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
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
              className="mt-5 h-1 w-20 rounded-full bg-linear-to-r from-sky-400 to-white"
            />

            <motion.p
              variants={fadeUp}
              className="mt-6 text-base leading-relaxed text-blue-100/80 sm:text-lg"
            >
              {SUBTEXT}
            </motion.p>
          </motion.div>

          {/* Shield visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative mx-auto mt-10 flex size-56 items-center justify-center sm:size-64 lg:mx-0"
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="absolute inset-0 rounded-full border border-sky-300/40"
                initial={{ scale: 0.4, opacity: 0 }}
                animate={{ scale: [0.4, 1.5], opacity: [0.6, 0] }}
                transition={{
                  duration: 5,
                  delay: i * 1.6,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
            ))}

            <span className="absolute inset-6 rounded-full border border-dashed border-sky-300/25" />

            <motion.span
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative flex size-32 items-center justify-center rounded-4xl bg-linear-to-br from-sky-400 to-blue-600 text-white shadow-2xl shadow-sky-500/30 ring-8 ring-white/10 sm:size-36"
            >
              <ShieldCheck size={64} strokeWidth={1.5} />
            </motion.span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#0A2A6B] shadow-lg transition hover:scale-[1.03]"
            >
              Get Free Quote
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <a
              href={`tel:${PHONE_LINK}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-bold transition hover:border-white hover:bg-white/15"
            >
              <Phone size={16} />
              {PHONE}
            </a>
          </motion.div>
        </div>

        {/* ---------- Right: commitment list ---------- */}
        <div className="relative lg:col-span-7">
          {/* Vertical line */}
          <div className="absolute bottom-10 left-8 top-10 w-0.5 -translate-x-1/2 bg-white/10">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="h-full origin-top bg-linear-to-b from-sky-400 to-white/60"
            />
          </div>

          <ul className="space-y-5">
            {COMMITMENTS.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.li
                  key={c.title}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.08,
                    ease: "easeOut",
                  }}
                  className="group relative flex items-start gap-5"
                >
                  {/* Icon node */}
                  <span className="relative z-10 flex size-16 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-sky-400 to-blue-600 text-white shadow-xl shadow-blue-900/40 ring-8 ring-[#0A2A6B] transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                    <Icon size={26} />
                  </span>

                  {/* Card */}
                  <div className="relative flex-1 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-500 group-hover:translate-x-2 group-hover:border-sky-300/40 group-hover:bg-white/10 sm:p-6">
                    <motion.span
                      className="pointer-events-none absolute -right-8 -top-8 size-28 rounded-full bg-sky-400/20 blur-2xl"
                      animate={{
                        x: [0, -20, 0],
                        y: [0, 20, 0],
                        scale: [1, 1.3, 1],
                      }}
                      transition={{
                        duration: 6 + i,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    <div className="relative">
                      <h3 className="text-lg font-semibold sm:text-xl">
                        {c.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-blue-100/80 sm:text-base">
                        {c.text}
                      </p>
                      <span className="mt-4 block h-0.5 w-10 rounded-full bg-sky-400 transition-all duration-500 group-hover:w-full" />
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}