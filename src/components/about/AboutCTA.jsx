import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Phone,
  MessageCircle,
  ClipboardList,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import ctaBg from "../../Asset/about/about-cta.png";

/* ---------- Content (update when client data arrives) ---------- */
const PHONE = "+91 63988 83191";
const PHONE_LINK = "+916398883191";
const WHATSAPP = "916398883191";
const WHATSAPP_MESSAGE =
  "Hello, I would like to discuss dewatering for my site.";

const EYEBROW = "Get in Touch";
const HEADING = "Let Us Keep Your Next Project Dry";
const SUBTEXT =
  "Choose the way that is easiest for you. Our team will respond, understand your site and guide you to the right solution.";

const CHIPS = ["Free site visit", "Clear quote", "Quick response"];

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
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
};

/* ---------- Wave that blends with the previous dark section ---------- */
function TopWave() {
  const shape = (
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className="h-full w-1/2 shrink-0"
    >
      <path
        d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
        fill="currentColor"
      />
    </svg>
  );

  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 rotate-180 overflow-hidden">
      <motion.div
        className="absolute inset-x-0 bottom-0 flex h-10 w-[200%] text-sky-300/25 sm:h-16"
        animate={{ x: ["-50%", "0%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {shape}
        {shape}
      </motion.div>
      <motion.div
        className="relative flex h-7 w-[200%] text-[#061538] sm:h-12"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      >
        {shape}
        {shape}
      </motion.div>
    </div>
  );
}

/* ---------- Component ---------- */
export default function AboutCTA() {
  const sectionRef = useRef(null);

  // Gentle parallax on the background image
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  const ACTIONS = [
    {
      icon: Phone,
      title: "Call Us",
      text: "Talk to our team directly and get quick answers about your site.",
      cta: PHONE,
      href: `tel:${PHONE_LINK}`,
      external: false,
      accent: "from-sky-400 to-blue-600",
    },
    {
      icon: MessageCircle,
      title: "Chat on WhatsApp",
      text: "Share your site details and photos, and we will reply with guidance.",
      cta: "Start Chat",
      href: `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
        WHATSAPP_MESSAGE
      )}`,
      external: true,
      accent: "from-emerald-400 to-emerald-600",
    },
    {
      icon: ClipboardList,
      title: "Send an Enquiry",
      text: "Fill in a short form and book a free site visit at your convenience.",
      cta: "Open Enquiry Form",
      to: "/contact",
      accent: "from-sky-400 to-blue-600",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-[#061538] pb-20 pt-28 text-white sm:pb-24 sm:pt-32 lg:pb-28 lg:pt-40"
    >
      {/* Background image with parallax */}
      <motion.img
        src={ctaBg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        style={{ y: bgY }}
        className="absolute inset-0 -z-20 size-full scale-110 object-cover"
      />

      {/* Overlays */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-[#061538] via-[#0A2A6B]/70 to-[#061538]/90" />
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* Glow blobs */}
      <div className="absolute -left-32 top-1/3 -z-10 size-md rounded-full bg-sky-500/20 blur-3xl" />
      <div className="absolute -right-32 bottom-10 -z-10 size-md rounded-full bg-blue-500/20 blur-3xl" />

      <TopWave />

      <div className="mx-auto max-w-7xl px-5 lg:px-6">
        {/* ---------- Heading ---------- */}
        <motion.div
          variants={headerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-sky-200 backdrop-blur-md"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-sky-300 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-sky-300" />
            </span>
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
            className="mx-auto mt-5 h-1 w-20 rounded-full bg-linear-to-r from-sky-300 to-white"
          />

          <motion.p
            variants={fadeUp}
            className="mt-6 text-base leading-relaxed text-blue-50/90 sm:text-lg"
          >
            {SUBTEXT}
          </motion.p>

          <motion.ul
            variants={fadeUp}
            className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-3"
          >
            {CHIPS.map((c) => (
              <li
                key={c}
                className="flex items-center gap-2 text-sm font-medium text-white/90"
              >
                <CheckCircle2 size={18} className="text-sky-300" />
                {c}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* ---------- Action cards ---------- */}
        <motion.div
          variants={gridContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid gap-6 md:grid-cols-3 lg:gap-8"
        >
          {ACTIONS.map((a, i) => {
            const Icon = a.icon;

            const inner = (
              <>
                {/* Always-moving glow */}
                <motion.span
                  className="pointer-events-none absolute -right-10 -top-10 size-36 rounded-full bg-sky-400/25 blur-2xl"
                  animate={{ x: [0, -25, 0], y: [0, 25, 0], scale: [1, 1.3, 1] }}
                  transition={{
                    duration: 6 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Top accent line */}
                <span className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-sky-400 via-white to-sky-400 opacity-70" />

                <div className="relative">
                  <div className="relative size-16">
                    {a.external && (
                      <span className="absolute inset-0 animate-ping rounded-2xl bg-emerald-400/40" />
                    )}
                    <span
                      className={`relative flex size-16 items-center justify-center rounded-2xl bg-linear-to-br ${a.accent} text-white shadow-xl shadow-black/30 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}
                    >
                      <Icon size={28} />
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-semibold">{a.title}</h3>

                  <p className="mt-2 text-sm leading-relaxed text-blue-100/80 sm:text-base">
                    {a.text}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#0A2A6B] shadow-lg transition-transform duration-300 group-hover:scale-105">
                    {a.cta}
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </>
            );

            const cardClass =
              "group relative block h-full overflow-hidden rounded-3xl border border-white/15 bg-white/8 p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-sky-300/50 hover:bg-white/12 hover:shadow-2xl hover:shadow-sky-500/15 sm:p-8";

            return (
              <motion.div key={a.title} variants={fadeUp}>
                {a.to ? (
                  <Link to={a.to} className={cardClass}>
                    {inner}
                  </Link>
                ) : (
                  <a
                    href={a.href}
                    target={a.external ? "_blank" : undefined}
                    rel={a.external ? "noreferrer" : undefined}
                    className={cardClass}
                  >
                    {inner}
                  </a>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}