import { useState } from "react";
import { motion } from "framer-motion";
import { Home, Building2, Route, Factory, CheckCircle2, MousePointerClick } from "lucide-react";
import residential from "../../Asset/about/industry-residential.png";
import commercial from "../../Asset/about/industry-commercial.png";
import infrastructure from "../../Asset/about/industry-infrastructure.png";
import industrial from "../../Asset/about/industry-industrial.png";

/* ---------- Content (update when client data arrives) ---------- */
const EYEBROW = "Industries We Serve";
const HEADING = "Dewatering Support for Every Kind of Project";
const SUBTEXT =
  "From a single house foundation to a large industrial plant, we adapt our method and equipment to the type of site and the people building it.";

// Confirm with the client which project types they actually handle
const INDUSTRIES = [
  {
    icon: Home,
    title: "Residential Builders",
    image: residential,
    text: "Apartments, houses and township projects where basements and foundations must stay dry for work to continue.",
    points: [
      "Basement and foundation dewatering",
      "Quick support for small and mid size sites",
      "Flexible pump rental",
    ],
  },
  {
    icon: Building2,
    title: "Commercial Buildings",
    image: commercial,
    text: "Offices, malls, hotels and hospitals with deep basements and tight project schedules.",
    points: [
      "Deep excavation support",
      "Continuous monitoring of water levels",
      "Planned together with your site engineers",
    ],
  },
  {
    icon: Route,
    title: "Infrastructure Projects",
    image: infrastructure,
    text: "Roads, bridges, drains and utility lines where trenches and pits need controlled water levels.",
    points: [
      "Trench and pipeline dewatering",
      "Drainage and discharge planning",
      "Support for long duration work",
    ],
  },
  {
    icon: Factory,
    title: "Industrial Sites",
    image: industrial,
    text: "Factories, warehouses and plant foundations that need stable, dry ground before construction begins.",
    points: [
      "Foundation and pit dewatering",
      "Heavy duty pumping",
      "Safe discharge arrangements",
    ],
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

/* ---------- Component ---------- */
export default function Industries() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-40 top-0 size-md rounded-full bg-sky-100/70 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 size-md rounded-full bg-blue-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-6">
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
            className="mx-auto mt-5 h-1 w-20 rounded-full bg-linear-to-r from-[#1747B0] to-sky-400"
          />

          <motion.p
            variants={fadeUp}
            className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            {SUBTEXT}
          </motion.p>
        </motion.div>

        {/* ---------- Expanding cards ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:flex lg:gap-4"
        >
          {INDUSTRIES.map((ind, i) => {
            const Icon = ind.icon;
            const isActive = active === i;

            return (
              <div
                key={ind.title}
                role="button"
                tabIndex={0}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setActive(i);
                }}
                className={`group relative h-105 cursor-pointer overflow-hidden rounded-3xl shadow-lg shadow-blue-900/10 outline-none transition-[flex,box-shadow] duration-700 ease-out focus-visible:ring-4 focus-visible:ring-sky-300 sm:h-115 lg:h-130 ${
                  isActive
                    ? "lg:flex-3 lg:shadow-2xl lg:shadow-blue-900/30"
                    : "lg:flex-1"
                }`}
              >
                {/* Image */}
                <img
                  src={ind.image}
                  alt={ind.title}
                  loading="lazy"
                  className={`absolute inset-0 size-full object-cover transition-transform duration-1000 ease-out ${
                    isActive ? "lg:scale-105" : "lg:scale-100"
                  } group-hover:scale-110`}
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-linear-to-t from-[#061538]/95 via-[#061538]/35 to-[#061538]/10" />
                <div
                  className={`absolute inset-0 bg-linear-to-t from-[#0A2A6B]/80 to-[#1747B0]/20 transition-opacity duration-700 ${
                    isActive ? "lg:opacity-100" : "lg:opacity-0"
                  }`}
                />

                {/* Icon */}
                <span
                  className={`absolute left-5 top-5 flex size-12 items-center justify-center rounded-2xl border border-white/30 bg-white/15 text-white backdrop-blur-md transition-all duration-500 sm:size-14 ${
                    isActive ? "lg:bg-white lg:text-[#1747B0]" : ""
                  }`}
                >
                  <Icon size={24} />
                </span>

                {/* Vertical title (desktop, inactive cards) */}
                <span
                  className={`absolute bottom-6 left-1/2 hidden -translate-x-1/2 rotate-180 whitespace-nowrap text-lg font-semibold tracking-wide text-white transition-opacity duration-500 [writing-mode:vertical-rl] lg:block ${
                    isActive ? "lg:opacity-0" : "lg:opacity-100"
                  }`}
                >
                  {ind.title}
                </span>

                {/* Details */}
                <div
                  className={`absolute inset-x-0 bottom-0 p-6 text-white transition-all duration-700 lg:w-md lg:p-8 ${
                    isActive
                      ? "lg:translate-y-0 lg:opacity-100"
                      : "lg:pointer-events-none lg:translate-y-6 lg:opacity-0"
                  }`}
                >
                  <h3 className="text-2xl font-medium leading-snug sm:text-3xl">
                    {ind.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-blue-50/90 sm:text-base">
                    {ind.text}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {ind.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-3 text-sm font-medium text-white/95"
                      >
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-sky-400 to-blue-600">
                          <CheckCircle2 size={12} />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>

                  <span className="mt-5 block h-0.5 w-12 rounded-full bg-sky-400" />
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Hint (desktop) */}
        <p className="mt-6 hidden items-center justify-center gap-2 text-sm text-slate-500 lg:flex">
          <MousePointerClick size={16} className="text-[#1747B0]" />
          Hover over a card to explore
        </p>
      </div>
    </section>
  );
}