import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Camera,
  Eye,
  Lightbulb,
  MessageCircle,
  Phone,
  ArrowRight,
  CheckCheck,
} from "lucide-react";
import ctaBg from "../../Asset/projects/projects-hero.png";
import project1 from "../../Asset/project-1.png";
import project3 from "../../Asset/project-3.png";
import project5 from "../../Asset/projects/project-5.png";

/* ---------- Content (update when client data arrives) ---------- */
const PHONE = "+91 63988 83191";
const PHONE_LINK = "+916398883191";
const WHATSAPP = "916398883191";
const WHATSAPP_MESSAGE =
  "Hello, I am sending photos of my site for dewatering advice.";

const EYEBROW = "Have a Similar Site?";
const HEADING = "Send Us Photos of Your Site";
const SUBTEXT =
  "Share a few photos or a short video on WhatsApp. Our team will look at it and tell you what your site needs, before you even book a visit.";

const STEPS = [
  { icon: Camera, title: "Send Photos", text: "Share site photos on WhatsApp" },
  { icon: Eye, title: "We Review", text: "Our team checks your site" },
  { icon: Lightbulb, title: "Get Advice", text: "We suggest the right method" },
];

const PHOTOS = [
  { src: project1, alt: "Dewatering at a foundation excavation", rotate: -9, x: "0%", y: "8%", delay: 0 },
  { src: project3, alt: "Deep well dewatering setup", rotate: 7, x: "42%", y: "0%", delay: 1.2 },
  { src: project5, alt: "Well point dewatering along a trench", rotate: -3, x: "18%", y: "38%", delay: 2.4 },
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
        className="relative flex h-7 w-[200%] text-white sm:h-12"
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
export default function ProjectsCTA() {
  const sectionRef = useRef(null);

  // Gentle parallax on the background image
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

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
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-[#061538] via-[#0A2A6B]/80 to-[#061538]/95" />
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* Glow blobs */}
      <motion.div
        className="absolute -left-32 top-1/3 -z-10 size-md rounded-full bg-sky-500/20 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-32 bottom-10 -z-10 size-md rounded-full bg-blue-500/20 blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <TopWave />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-16 lg:px-6">
        {/* ---------- Left: content ---------- */}
        <motion.div
          variants={textContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
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
            className="mt-5 h-1 w-20 rounded-full bg-linear-to-r from-sky-300 to-white"
          />

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-lg text-base leading-relaxed text-blue-50/90 sm:text-lg"
          >
            {SUBTEXT}
          </motion.p>

          {/* Mini steps */}
          <motion.ul
            variants={fadeUp}
            className="mt-8 grid gap-4 sm:grid-cols-3"
          >
            {STEPS.map((s, i) => {
              const Icon = s.icon;
              return (
                <li
                  key={s.title}
                  className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/8 p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-sky-300/50 hover:bg-white/12"
                >
                  <span className="flex size-10 items-center justify-center rounded-xl bg-linear-to-br from-sky-400 to-blue-600 shadow-lg transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                    <Icon size={20} />
                  </span>
                  <p className="mt-3 text-sm font-semibold">
                    {i + 1}. {s.title}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-blue-100/75">
                    {s.text}
                  </p>
                </li>
              );
            })}
          </motion.ul>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                WHATSAPP_MESSAGE
              )}`}
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center justify-center gap-2.5 rounded-full bg-emerald-500 px-7 py-4 text-sm font-bold shadow-xl shadow-emerald-900/30 transition hover:scale-[1.03] hover:bg-emerald-400"
            >
              <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/30" />
              <MessageCircle size={18} className="relative" />
              <span className="relative">Send Photos on WhatsApp</span>
            </a>

            <a
              href={`tel:${PHONE_LINK}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-4 text-sm font-bold backdrop-blur-md transition hover:border-white hover:bg-white/20"
            >
              <Phone size={18} />
              {PHONE}
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-5">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-sky-200 transition hover:text-white"
            >
              Or request a free site visit
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </motion.div>

        {/* ---------- Right: tilted photo stack ---------- */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative mx-auto h-96 w-full max-w-md sm:h-112 lg:max-w-none"
        >
          {PHOTOS.map((p, i) => (
            <motion.div
              key={p.alt}
              initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
              whileInView={{ opacity: 1, scale: 1, rotate: p.rotate }}
              viewport={{ once: true }}
              transition={{
                delay: 0.3 + i * 0.2,
                duration: 0.8,
                ease: "easeOut",
              }}
              className="absolute w-[56%] sm:w-[52%]"
              style={{ left: p.x, top: p.y }}
            >
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 5 + i,
                  delay: p.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="aspect-4/3 overflow-hidden rounded-3xl border-4 border-white shadow-2xl shadow-black/40"
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="size-full object-cover"
                />
              </motion.div>
            </motion.div>
          ))}

          {/* Chat bubble */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 1.1,
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
            className="absolute bottom-0 right-0 z-10 w-64 sm:w-72"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-3xl rounded-br-md bg-white p-4 shadow-2xl shadow-black/40"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
                  <MessageCircle size={20} />
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-[#0A2A6B]">
                    ARS Dewatering
                  </p>
                  <p className="text-xs text-emerald-600">Replies with advice</p>
                </div>
              </div>
              <p className="mt-3 rounded-2xl rounded-tl-md bg-emerald-50 px-3.5 py-2.5 text-sm text-slate-700">
                Thanks for the photos. Here is what your site needs.
              </p>
              <p className="mt-2 flex items-center justify-end gap-1 text-[11px] text-slate-400">
                <CheckCheck size={14} className="text-sky-500" />
                Read
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}