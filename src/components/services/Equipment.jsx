import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  Waves,
  Fuel,
  Gauge,
  Network,
  Droplets,
  Cable,
  CheckCircle2,
  ArrowRight,
  Target,
} from "lucide-react";

/* ---------- Content (update when client data arrives) ---------- */
const EYEBROW = "Our Equipment";
const HEADING = "Equipment Built for Tough Site Conditions";
const SUBTEXT =
  "The right machine makes the difference between a dry site and a delayed project. Explore the equipment we use to keep your excavation under control.";

// Confirm with the client which equipment they actually own and use
const EQUIPMENT = [
  {
    icon: Waves,
    name: "Submersible Pumps",
    text: "Sealed pumps that work fully underwater. They are lowered into wells, sumps and flooded pits to lift water efficiently.",
    points: [
      "Runs fully submerged",
      "Suitable for wells, sumps and pits",
      "Quiet operation",
      "Easy to lower and retrieve",
    ],
    usedFor: "Deep wells, basements and sump pits",
  },
  {
    icon: Fuel,
    name: "Diesel Engine Pumps",
    text: "Engine driven pumps that keep working where grid power is missing or unreliable, built for high volume pumping at open sites.",
    points: [
      "Works without grid power",
      "High volume pumping",
      "Mobile and easy to reposition",
      "Suited for long running jobs",
    ],
    usedFor: "Open excavations and remote sites",
  },
  {
    icon: Gauge,
    name: "Self-Priming Pumps",
    text: "Pumps that clear air from the suction line on their own, making them a strong fit for well point systems and sumps that run dry at times.",
    points: [
      "Handles air in the suction line",
      "Core of well point systems",
      "Quick start up",
      "Good for changing water levels",
    ],
    usedFor: "Well point systems and shallow pits",
  },
  {
    icon: Network,
    name: "Hoses and Pipes",
    text: "Suction and discharge hoses, pipes, couplings and fittings that carry water from the pump to a safe drainage point.",
    points: [
      "Suction and discharge lines",
      "Flexible and rigid options",
      "Quick coupling fittings",
      "Length arranged as per site",
    ],
    usedFor: "Every dewatering setup",
  },
  {
    icon: Droplets,
    name: "Well Point Kits",
    text: "Riser pipes, well point tips and header pipes assembled together to lower the water table along trenches and shallow excavations.",
    points: [
      "Riser pipes and well point tips",
      "Header pipe connection",
      "Fast to install and remove",
      "Adjustable to trench length",
    ],
    usedFor: "Trenches and shallow foundations",
  },
  {
    icon: Cable,
    name: "Power and Control",
    text: "Generators, cables and control panels that keep pumps running safely, with arrangements for continuous operation on long jobs.",
    points: [
      "Generator backup arrangement",
      "Safe and tidy cabling",
      "Panels and starters",
      "Supports round the clock pumping",
    ],
    usedFor: "Long duration and round the clock jobs",
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

const pointsContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const pointItem = {
  hidden: { opacity: 0, x: -15 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

/* ---------- Component ---------- */
export default function Equipment() {
  const [active, setActive] = useState(0);
  const current = EQUIPMENT[active];
  const CurrentIcon = current.icon;

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

        {/* ---------- Tabs + detail ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-14 grid gap-6 lg:grid-cols-12 lg:gap-8"
        >
          {/* Tab list */}
          <div className="lg:col-span-4">
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none lg:flex-col lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden">
              {EQUIPMENT.map((e, i) => {
                const Icon = e.icon;
                const isActive = i === active;
                return (
                  <button
                    key={e.name}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-pressed={isActive}
                    className={`relative flex shrink-0 items-center gap-3 overflow-hidden rounded-2xl border px-4 py-3.5 text-left transition-colors duration-300 lg:shrink lg:gap-4 lg:px-5 lg:py-4 ${
                      isActive
                        ? "border-sky-300/50 text-white"
                        : "border-white/10 bg-white/5 text-blue-100/80 hover:border-white/30 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="equipment-active"
                        className="absolute inset-0 bg-linear-to-r from-[#1747B0] to-sky-500/70"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 32,
                        }}
                      />
                    )}

                    <span
                      className={`relative flex size-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                        isActive
                          ? "bg-white text-[#1747B0]"
                          : "bg-white/10 text-sky-200"
                      }`}
                    >
                      <Icon size={22} />
                    </span>

                    <span className="relative whitespace-nowrap text-sm font-semibold sm:text-base lg:whitespace-normal">
                      {e.name}
                    </span>

                    <ArrowRight
                      size={18}
                      className={`relative ml-auto hidden transition-all duration-300 lg:block ${
                        isActive
                          ? "translate-x-0 opacity-100"
                          : "-translate-x-2 opacity-0"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detail panel */}
          <div className="lg:col-span-8">
            <div className="relative overflow-hidden rounded-4xl border border-white/15 bg-white/5 p-5 backdrop-blur-xl sm:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.name}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="grid items-center gap-8 md:grid-cols-[16rem_1fr]"
                >
                  {/* Visual */}
                  <div className="relative mx-auto aspect-square w-full max-w-64 overflow-hidden rounded-3xl bg-linear-to-br from-[#0A2A6B] via-[#123C93] to-[#1D5FD1] shadow-2xl shadow-black/30">
                    <div
                      className="absolute inset-0 opacity-40"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
                        backgroundSize: "28px 28px",
                      }}
                    />

                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="absolute left-1/2 top-1/2 size-28 -translate-1/2 rounded-full border border-sky-300/40"
                        initial={{ scale: 0.4, opacity: 0 }}
                        animate={{ scale: [0.4, 2.2], opacity: [0.6, 0] }}
                        transition={{
                          duration: 4.5,
                          delay: i * 1.5,
                          repeat: Infinity,
                          ease: "easeOut",
                        }}
                      />
                    ))}

                    <div className="absolute left-1/2 top-1/2 -translate-1/2">
                      <motion.span
                        animate={{ y: [0, -8, 0] }}
                        transition={{
                          duration: 3.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="flex size-24 items-center justify-center rounded-3xl bg-white/10 text-white shadow-2xl ring-1 ring-white/30 backdrop-blur-xl"
                      >
                        <CurrentIcon size={44} strokeWidth={1.5} />
                      </motion.span>
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-300">
                      Equipment {String(active + 1).padStart(2, "0")} /{" "}
                      {String(EQUIPMENT.length).padStart(2, "0")}
                    </p>

                    <h3 className="mt-2 text-2xl font-medium leading-tight sm:text-3xl">
                      {current.name}
                    </h3>

                    <p className="mt-4 text-sm leading-relaxed text-blue-100/80 sm:text-base">
                      {current.text}
                    </p>

                    <motion.ul
                      variants={pointsContainer}
                      initial="hidden"
                      animate="show"
                      className="mt-5 grid gap-3 sm:grid-cols-2"
                    >
                      {current.points.map((p) => (
                        <motion.li
                          key={p}
                          variants={pointItem}
                          className="flex items-start gap-3 text-sm font-medium text-white/90"
                        >
                          <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-sky-400 to-blue-600">
                            <CheckCircle2 size={14} />
                          </span>
                          {p}
                        </motion.li>
                      ))}
                    </motion.ul>

                    <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3">
                      <span className="flex size-9 items-center justify-center rounded-xl bg-sky-400/20 text-sky-200">
                        <Target size={18} />
                      </span>
                      <div className="leading-tight">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-blue-100/60">
                          Used for
                        </p>
                        <p className="text-sm font-semibold">
                          {current.usedFor}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Bottom action row */}
              <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
                <p className="text-sm text-blue-100/80">
                  Need help choosing the right equipment for your site?
                </p>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#0A2A6B] shadow-lg transition hover:scale-[1.03]"
                >
                  Talk to Our Expert
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}