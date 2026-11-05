import { motion } from "framer-motion";
import {
  PhoneCall,
  ClipboardCheck,
  FileText,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

/* ---------- Content (update when client data arrives) ---------- */
const EYEBROW = "What Happens Next";
const HEADING = "Here Is What Happens After You Contact Us";
const SUBTEXT =
  "No confusion and no pressure. Three simple steps take you from your first message to a clear plan for your site.";

// Confirm this process with the client before going live
const STEPS = [
  {
    icon: PhoneCall,
    label: "Step 1",
    title: "We Get in Touch",
    text: "Our team calls or messages you to understand your site and the water problem you are facing.",
    points: ["Short, simple conversation", "We note depth, location and urgency"],
  },
  {
    icon: ClipboardCheck,
    label: "Step 2",
    title: "Free Site Visit",
    text: "Our engineer visits your site to check water level, soil condition and the working area.",
    points: ["Inspection at no cost", "Right method suggested for your site"],
  },
  {
    icon: FileText,
    label: "Step 3",
    title: "Clear Quote and Plan",
    text: "You receive a clear quote and a work plan. Work starts only when you are ready.",
    points: ["Straightforward pricing", "Timeline explained upfront"],
  },
];

const BUBBLES = [
  { left: "6%", size: 10, delay: 0, duration: 10 },
  { left: "15%", size: 18, delay: 2, duration: 13 },
  { left: "28%", size: 8, delay: 4, duration: 9 },
  { left: "42%", size: 14, delay: 1, duration: 12 },
  { left: "55%", size: 9, delay: 5, duration: 10 },
  { left: "68%", size: 20, delay: 3, duration: 14 },
  { left: "79%", size: 11, delay: 0.5, duration: 11 },
  { left: "90%", size: 16, delay: 2.5, duration: 13 },
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

/* ---------- Wave that blends with the previous (light grey) section ---------- */
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
        className="absolute inset-x-0 bottom-0 flex h-10 w-[200%] text-sky-300/30 sm:h-16"
        animate={{ x: ["-50%", "0%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {shape}
        {shape}
      </motion.div>
      <motion.div
        className="relative flex h-7 w-[200%] text-slate-50 sm:h-12"
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
export default function NextSteps() {
  return (
    <section className="relative isolate overflow-hidden bg-linear-to-b from-[#0A2A6B] via-[#0F3A8E] to-[#071B47] pb-24 pt-28 text-white sm:pt-32 lg:pt-40">
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
        className="absolute -left-32 top-1/4 -z-10 size-md rounded-full bg-sky-400/25 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-32 bottom-1/4 -z-10 size-md rounded-full bg-blue-400/25 blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Ripples (desktop) */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 hidden -translate-1/2 lg:block">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="absolute size-130 -translate-1/2 rounded-full border border-sky-300/15"
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

      {/* Rising bubbles */}
      {BUBBLES.map((b, i) => (
        <motion.span
          key={i}
          className="pointer-events-none absolute bottom-0 -z-10 rounded-full border border-white/30 bg-white/10"
          style={{ left: b.left, width: b.size, height: b.size }}
          animate={{ y: [0, -800], opacity: [0, 0.8, 0] }}
          transition={{
            duration: b.duration,
            delay: b.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <TopWave />

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
            className="mt-6 text-base leading-relaxed text-blue-100/85 sm:text-lg"
          >
            {SUBTEXT}
          </motion.p>
        </motion.div>

        {/* ---------- Steps ---------- */}
        <div className="relative mt-16">
          {/* Flowing connector (desktop) */}
          <div className="absolute left-[16%] right-[16%] top-12 hidden h-0.5 lg:block">
            <div className="h-full w-full border-t-2 border-dashed border-sky-300/50" />
            <motion.span
              className="absolute -top-1.5 size-3.5 rounded-full bg-white shadow-lg shadow-sky-300/80 ring-4 ring-sky-400/50"
              initial={{ left: "0%" }}
              animate={{ left: ["0%", "100%"] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 0.6,
              }}
            />
          </div>

          <div className="grid gap-8 lg:grid-cols-3 lg:gap-8">
            {STEPS.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.18,
                    ease: "easeOut",
                  }}
                  className="group relative"
                >
                  {/* Icon circle */}
                  <div className="relative z-10 mx-auto flex size-24 items-center justify-center">
                    <span className="absolute inset-0 animate-ping rounded-full bg-sky-300/20" />
                    <motion.span
                      animate={{ y: [0, -6, 0] }}
                      transition={{
                        duration: 4 + i,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="relative flex size-24 items-center justify-center rounded-full bg-linear-to-br from-sky-400 to-blue-600 text-white shadow-2xl shadow-sky-500/30 ring-8 ring-white/10 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
                    >
                      <Icon size={36} strokeWidth={1.6} />
                    </motion.span>
                  </div>

                  {/* Card */}
                  <div className="relative -mt-12 overflow-hidden rounded-3xl border border-white/15 bg-white/8 px-6 pb-7 pt-16 text-center backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:border-sky-300/50 group-hover:bg-white/12 group-hover:shadow-2xl group-hover:shadow-sky-500/20 sm:px-8">
                    {/* Always-moving glow */}
                    <motion.span
                      className="pointer-events-none absolute -right-10 -top-10 size-36 rounded-full bg-sky-400/25 blur-2xl"
                      animate={{
                        x: [0, -25, 0],
                        y: [0, 25, 0],
                        scale: [1, 1.3, 1],
                      }}
                      transition={{
                        duration: 6 + i,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    {/* Top accent line */}
                    <span className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-sky-400 via-white to-sky-400 opacity-70" />

                    <div className="relative">
                      <span className="inline-block rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-sky-200">
                        {s.label}
                      </span>

                      <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>

                      <p className="mt-3 text-sm leading-relaxed text-blue-100/85 sm:text-base">
                        {s.text}
                      </p>

                      <ul className="mt-5 space-y-2.5 text-left">
                        {s.points.map((p) => (
                          <li
                            key={p}
                            className="flex items-start gap-3 text-sm font-medium text-white/90"
                          >
                            <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-sky-400 to-blue-600">
                              <CheckCircle2 size={12} />
                            </span>
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ---------- Reassurance strip ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto mt-14 flex max-w-3xl items-center gap-4 overflow-hidden rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-xl sm:gap-5 sm:px-7 sm:py-5"
        >
          <span className="relative flex size-12 shrink-0 items-center justify-center">
            <span className="absolute inset-0 animate-ping rounded-xl bg-sky-300/30" />
            <span className="relative flex size-12 items-center justify-center rounded-xl bg-white text-[#1747B0] shadow-lg">
              <ShieldCheck size={24} />
            </span>
          </span>
          <p className="text-sm font-medium leading-relaxed text-white/95 sm:text-base">
            No obligation. You decide after the site visit and the quote, and
            you are never pushed into work you do not need.
          </p>
        </motion.div>
      </div>
    </section>
  );
}