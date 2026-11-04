import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  MapPin,
  Lightbulb,
  Compass,
  Flag,
} from "lucide-react";
import storyMain from "../../Asset/about/story-main.png";
import storySecondary from "../../Asset/about/story-secondary.png";

/* ---------- Content (update when client data arrives) ---------- */
const PHONE = "+91 63988 83191";
const PHONE_LINK = "+916398883191";

const EYEBROW = "Our Story";
const HEADING = "From Water Logged Sites to Work Ready Ground";
const PARA_1 =
  "ARS was built around a simple idea: construction work should never stop because of water. When a foundation or basement floods, every lost day costs builders money and momentum, and they need help that is close, quick and dependable.";
const PARA_2 =
  "Today we support builders, contractors and developers across Chhatarpur and nearby districts with modern pumping equipment, trained operators and honest, clear communication from the first call to the last day on site.";

// Placeholder story. Replace with the client's real history and milestones.
const MILESTONES = [
  {
    icon: Lightbulb,
    title: "The Idea",
    text: "Reliable dewatering support close to the site, so builders do not have to wait or look far for help.",
  },
  {
    icon: Compass,
    title: "The Approach",
    text: "Inspect first, choose the right method, then install and monitor the system with trained people.",
  },
  {
    icon: Flag,
    title: "The Goal",
    text: "To be the first name builders in our region call whenever water becomes a problem on site.",
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
export default function OurStory() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-40 top-0 size-md rounded-full bg-sky-100/70 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 size-md rounded-full bg-blue-100/60 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2 lg:gap-20 lg:px-6">
        {/* ---------- Left: content ---------- */}
        <motion.div
          variants={textContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
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

          {/* Milestones with drawing line */}
          <div className="relative mt-9">
            <div className="absolute bottom-6 left-6 top-6 w-0.5 -translate-x-1/2 bg-slate-200">
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.6, ease: "easeInOut" }}
                className="h-full origin-top bg-linear-to-b from-[#1747B0] to-sky-400"
              />
            </div>

            <ul className="space-y-6">
              {MILESTONES.map((m, i) => {
                const Icon = m.icon;
                return (
                  <motion.li
                    key={m.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                      duration: 0.6,
                      delay: i * 0.15,
                      ease: "easeOut",
                    }}
                    className="group relative flex items-start gap-5"
                  >
                    <span className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-[#0A2A6B] to-[#1D5FD1] text-white shadow-lg shadow-blue-900/25 ring-4 ring-white transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                      <Icon size={22} />
                    </span>
                    <div className="pt-0.5">
                      <h3 className="text-lg font-semibold text-[#0A2A6B]">
                        {m.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600 sm:text-base">
                        {m.text}
                      </p>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </div>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-linear-to-r from-[#0A2A6B] to-[#1747B0] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-blue-900/25 transition hover:shadow-xl hover:shadow-blue-900/30"
            >
              <span className="relative z-10">Talk to Our Team</span>
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

        {/* ---------- Right: arch image collage ---------- */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-lg pb-12 pl-10 pr-4 lg:max-w-none"
        >
          {/* Dotted pattern */}
          <div
            className="absolute -top-6 right-0 -z-10 size-36 opacity-70"
            style={{
              backgroundImage: "radial-gradient(#1747B0 2px, transparent 2px)",
              backgroundSize: "16px 16px",
            }}
          />

          {/* Offset arch frame */}
          <div className="absolute right-0 top-5 -z-10 h-110 w-[82%] rounded-t-[10rem] rounded-b-4xl border-2 border-sky-300 sm:h-135 lg:h-155" />

          {/* Main arch image */}
          <div className="group relative ml-auto h-110 w-[82%] overflow-hidden rounded-t-[10rem] rounded-b-4xl shadow-2xl shadow-blue-900/25 sm:h-135 lg:h-155">
            <img
              src={storyMain}
              alt="ARS team setting up a dewatering pump on site"
              loading="lazy"
              className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#061538]/50 via-transparent to-transparent" />
          </div>

          {/* Secondary image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="absolute bottom-0 left-0 aspect-square w-[46%] overflow-hidden rounded-3xl border-8 border-white shadow-2xl shadow-blue-900/25"
          >
            <motion.img
              src={storySecondary}
              alt="Clear water flowing from a discharge pipe"
              loading="lazy"
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 size-full object-cover"
            />
          </motion.div>

          {/* Location badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.7,
              type: "spring",
              stiffness: 200,
              damping: 14,
            }}
            className="absolute right-0 top-[58%]"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center gap-3 rounded-2xl bg-linear-to-br from-[#0A2A6B] to-[#1747B0] px-4 py-3.5 text-white shadow-2xl shadow-blue-900/40"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-white/15">
                <MapPin size={22} />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-semibold">Local Team</p>
                <p className="mt-0.5 text-xs text-blue-100">
                  Chhatarpur (M.P.)
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}