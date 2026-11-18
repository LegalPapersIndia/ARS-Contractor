import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Droplets, Home, Phone, ArrowRight } from "lucide-react";

/* ---------- Content (update when client data arrives) ---------- */
const PHONE = "+91 63988 83191";
const PHONE_LINK = "+916398883191";

const EYEBROW = "Error 404";
const HEADING = "This Page Has Run Dry";
const TEXT =
  "The page you are looking for may have moved or no longer exists. Let us take you back to solid ground.";

const QUICK_LINKS = [
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

const BUBBLES = [
  { left: "8%", size: 10, delay: 0, duration: 9 },
  { left: "20%", size: 16, delay: 2, duration: 12 },
  { left: "34%", size: 8, delay: 4, duration: 8 },
  { left: "52%", size: 14, delay: 1, duration: 11 },
  { left: "68%", size: 18, delay: 3, duration: 13 },
  { left: "82%", size: 9, delay: 5, duration: 9 },
  { left: "92%", size: 12, delay: 2.5, duration: 10 },
];

/* ---------- Animation variants ---------- */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

/* ---------- Animated wave ---------- */
function Wave() {
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
    <div className="pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden">
      <motion.div
        className="absolute inset-x-0 bottom-0 flex h-12 w-[200%] text-sky-300/30 sm:h-20"
        animate={{ x: ["-50%", "0%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {shape}
        {shape}
      </motion.div>
      <motion.div
        className="relative flex h-9 w-[200%] text-white sm:h-16"
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
export default function NotFoundSection() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-4.5rem)] items-center overflow-hidden bg-linear-to-br from-[#061538] via-[#0A2A6B] to-[#1747B0] text-white lg:min-h-[calc(100svh-7rem)]">
      {/* Background grid */}
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* Glow blobs */}
      <motion.div
        className="absolute -left-24 top-10 -z-10 size-96 rounded-full bg-sky-500/25 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-24 bottom-20 -z-10 size-md rounded-full bg-blue-400/25 blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Rising bubbles */}
      {BUBBLES.map((b, i) => (
        <motion.span
          key={i}
          className="pointer-events-none absolute bottom-0 -z-10 rounded-full border border-white/30 bg-white/10"
          style={{ left: b.left, width: b.size, height: b.size }}
          animate={{ y: [0, -700], opacity: [0, 0.8, 0] }}
          transition={{
            duration: b.duration,
            delay: b.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-3xl px-5 pb-32 pt-14 text-center sm:pb-36 lg:px-6"
      >
        {/* 404 with a water drop as the zero */}
        <motion.div
          variants={item}
          className="flex items-center justify-center gap-2 sm:gap-4"
          aria-label="404"
        >
          <span className="bg-linear-to-b from-white to-sky-300 bg-clip-text text-8xl font-bold leading-none text-transparent sm:text-[10rem]">
            4
          </span>

          <span className="relative flex size-24 items-center justify-center sm:size-36">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="absolute inset-0 rounded-full border border-sky-300/50"
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: [0.6, 1.8], opacity: [0.7, 0] }}
                transition={{
                  duration: 4,
                  delay: i * 1.3,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
            ))}
            <motion.span
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative flex size-20 items-center justify-center rounded-full bg-linear-to-br from-sky-400 to-blue-600 text-white shadow-2xl shadow-sky-500/40 ring-8 ring-white/10 sm:size-32"
            >
              <Droplets className="size-9 sm:size-14" strokeWidth={1.5} />
            </motion.span>
          </span>

          <span className="bg-linear-to-b from-white to-sky-300 bg-clip-text text-8xl font-bold leading-none text-transparent sm:text-[10rem]">
            4
          </span>
        </motion.div>

        <motion.span
          variants={item}
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-sky-200 backdrop-blur-md"
        >
          <span className="size-1.5 rounded-full bg-sky-300" />
          {EYEBROW}
        </motion.span>

        <motion.h1
          variants={item}
          className="mt-5 text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-5xl"
        >
          {HEADING}
        </motion.h1>

        <motion.div
          variants={item}
          className="mx-auto mt-5 h-1 w-20 rounded-full bg-linear-to-r from-sky-300 to-white"
        />

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-blue-50/90 sm:text-lg"
        >
          {TEXT}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            to="/"
            className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-bold text-[#0A2A6B] shadow-xl shadow-black/30 transition hover:scale-[1.03] sm:w-auto"
          >
            <Home size={18} className="relative z-10" />
            <span className="relative z-10">Back to Home</span>
            <ArrowRight
              size={18}
              className="relative z-10 transition-transform group-hover:translate-x-1"
            />
            <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-sky-200 to-white transition-transform duration-500 group-hover:translate-x-0" />
          </Link>

          <a
            href={`tel:${PHONE_LINK}`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-8 py-4 text-sm font-bold backdrop-blur-md transition hover:border-white hover:bg-white/20 sm:w-auto"
          >
            <Phone size={18} />
            {PHONE}
          </a>
        </motion.div>

        <motion.ul
          variants={item}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          {QUICK_LINKS.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="inline-flex rounded-full border border-white/20 bg-white/8 px-4 py-2 text-sm font-medium text-blue-100 backdrop-blur-md transition hover:-translate-y-0.5 hover:border-sky-300/60 hover:bg-white/15 hover:text-white"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </motion.ul>
      </motion.div>

      <Wave />
    </section>
  );
}