import { useState } from "react";
import { motion } from "framer-motion";
import {
  Waves,
  Droplets,
  Building2,
  CloudRain,
  Mountain,
  Clock,
  RotateCw,
  CheckCircle2,
  MousePointerClick,
} from "lucide-react";

/* ---------- Content (update when client data arrives) ---------- */
const EYEBROW = "Challenges We Solve";
const HEADING = "Common Site Problems, Practical Solutions";
const SUBTEXT =
  "Most dewatering jobs start with one of these situations. Here is what goes wrong on site and how we deal with it.";

// General guidance. Confirm with the client before going live.
const CHALLENGES = [
  {
    icon: Waves,
    problem: "Flooded Foundation Pit",
    problemText:
      "Water fills the excavation and stops shuttering, steel work and concrete from going ahead.",
    solution: "Fast Clearing and Control",
    solutionText:
      "High capacity pumps clear the pit, and sump pits keep it dry so work can restart and continue.",
    points: ["Quick pump setup", "Sump pits to hold it dry"],
  },
  {
    icon: Droplets,
    problem: "Rising Groundwater",
    problemText:
      "As you dig deeper, groundwater keeps seeping in and the pit fills again and again.",
    solution: "Lower the Water Table",
    solutionText:
      "A well point or deep well system lowers the water level around the excavation before it reaches your work area.",
    points: ["Method chosen by depth and soil", "Continuous monitoring"],
  },
  {
    icon: Building2,
    problem: "Basement Seepage",
    problemText:
      "Water enters through walls and floors during waterproofing and concrete work.",
    solution: "Steady Pumping and Drainage",
    solutionText:
      "Continuous pumping with planned drainage keeps inflow under control during sensitive work.",
    points: ["Submersible pumps", "Safe discharge lines"],
  },
  {
    icon: CloudRain,
    problem: "Rain Water on Site",
    problemText:
      "Heavy rain collects in pits, trenches and site roads and leaves the site unusable.",
    solution: "Collect and Discharge",
    solutionText:
      "Sump pits and discharge lines gather the water and carry it away from your working area.",
    points: ["Quick response after rain", "Prevents repeated logging"],
  },
  {
    icon: Mountain,
    problem: "Soft, Muddy Soil",
    problemText:
      "Wet soil makes the ground unstable and unsafe for workers, machines and materials.",
    solution: "Firmer Working Ground",
    solutionText:
      "Removing water from around the excavation helps the soil dry out, so work is safer and easier.",
    points: ["Safer access for machines", "Better working conditions"],
  },
  {
    icon: Clock,
    problem: "Delays and Lost Days",
    problemText:
      "Every day lost to water delays the project and increases labour and machine costs.",
    solution: "Plan, Setup, Monitor",
    solutionText:
      "A clear plan, quick installation and regular monitoring help keep your schedule on track.",
    points: ["Clear plan from the start", "Regular updates to you"],
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
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
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

/* ---------- Flip card ---------- */
function FlipCard({ item, index }) {
  const [flipped, setFlipped] = useState(false);
  const Icon = item.icon;

  const face = {
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
  };

  return (
    <motion.div variants={fadeUp} className="h-80 sm:h-84" style={{ perspective: 1200 }}>
      <motion.div
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
        aria-label={`${item.problem}. Press to see our solution.`}
        onPointerEnter={(e) => e.pointerType === "mouse" && setFlipped(true)}
        onPointerLeave={(e) => e.pointerType === "mouse" && setFlipped(false)}
        onClick={(e) => {
          // On mouse devices hover already handles it
          if (e.nativeEvent.pointerType === "mouse") return;
          setFlipped((f) => !f);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setFlipped((f) => !f);
          }
        }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.7, ease: [0.4, 0.2, 0.2, 1] }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative size-full cursor-pointer outline-none focus-visible:ring-4 focus-visible:ring-sky-300/60 rounded-3xl"
      >
        {/* ----- Front: problem ----- */}
        <div
          style={face}
          className="absolute inset-0 flex flex-col overflow-hidden rounded-3xl border border-white/15 bg-white/8 p-7 backdrop-blur-xl sm:p-8"
        >
          <motion.span
            className="pointer-events-none absolute -right-10 -top-10 size-36 rounded-full bg-sky-400/25 blur-2xl"
            animate={{ x: [0, -25, 0], y: [0, 25, 0], scale: [1, 1.3, 1] }}
            transition={{
              duration: 6 + index,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <span className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-rose-400 via-amber-300 to-rose-400 opacity-70" />

          <div className="relative flex flex-1 flex-col">
            <span className="flex size-14 items-center justify-center rounded-2xl bg-white/10 text-sky-200 ring-1 ring-white/20">
              <Icon size={26} />
            </span>

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-rose-300">
              The Problem
            </p>
            <h3 className="mt-2 text-xl font-semibold leading-snug sm:text-2xl">
              {item.problem}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-blue-100/80">
              {item.problemText}
            </p>

            <span className="mt-auto inline-flex items-center gap-2 pt-5 text-xs font-semibold text-sky-200">
              <RotateCw size={14} />
              See how we fix it
            </span>
          </div>
        </div>

        {/* ----- Back: solution ----- */}
        <div
          style={{ ...face, transform: "rotateY(180deg)" }}
          className="absolute inset-0 flex flex-col overflow-hidden rounded-3xl bg-white p-7 shadow-2xl shadow-sky-500/20 sm:p-8"
        >
          <span className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-[#1747B0] via-sky-400 to-[#1747B0]" />
          <span className="pointer-events-none absolute -bottom-12 -right-12 size-40 rounded-full bg-sky-200/60 blur-2xl" />

          <div className="relative flex flex-1 flex-col">
            <span className="flex size-14 items-center justify-center rounded-2xl bg-linear-to-br from-[#0A2A6B] to-[#1D5FD1] text-white shadow-lg shadow-blue-900/25">
              <CheckCircle2 size={26} />
            </span>

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-[#1747B0]">
              Our Solution
            </p>
            <h3 className="mt-2 text-xl font-semibold leading-snug text-[#0A2A6B] sm:text-2xl">
              {item.solution}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {item.solutionText}
            </p>

            <ul className="mt-auto space-y-2 pt-4">
              {item.points.map((p) => (
                <li
                  key={p}
                  className="flex items-center gap-2.5 text-sm font-medium text-slate-700"
                >
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-[#1747B0] to-sky-500 text-white">
                    <CheckCircle2 size={12} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ---------- Component ---------- */
export default function Challenges() {
  return (
    <section className="relative isolate overflow-hidden bg-linear-to-b from-[#061538] via-[#0A2A6B] to-[#061538] pb-20 pt-28 text-white sm:pb-24 sm:pt-32 lg:pb-28 lg:pt-40">
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
      <motion.div
        className="absolute -left-32 top-1/4 -z-10 size-md rounded-full bg-sky-500/20 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-32 bottom-1/4 -z-10 size-md rounded-full bg-blue-500/20 blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

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

          <motion.p
            variants={fadeUp}
            className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-sky-200"
          >
            <MousePointerClick size={16} />
            Hover over a card, or tap it on mobile, to see our solution
          </motion.p>
        </motion.div>

        {/* ---------- Flip cards ---------- */}
        <motion.div
          variants={gridContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {CHALLENGES.map((c, i) => (
            <FlipCard key={c.problem} item={c} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}