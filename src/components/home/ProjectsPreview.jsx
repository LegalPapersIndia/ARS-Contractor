import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import project1 from "../../Asset/project-1.png";
import project2 from "../../Asset/project-2.png";
import project3 from "../../Asset/project-3.png";
import project4 from "../../Asset/project-4.png";

/* ---------- Content (update when client data arrives) ---------- */
const EYEBROW = "Our Work";
const HEADING = "Projects We Have Delivered";
const SUBTEXT =
  "A look at the kind of sites we keep dry, from deep excavations to basements and large construction foundations.";

// Placeholder projects: replace titles, places and photos with the client's real work
const PROJECTS = [
  {
    image: project1,
    tag: "Deep Excavation",
    title: "Foundation Excavation Dewatering",
    place: "Chhatarpur, M.P.",
    text: "Continuous pumping to keep a deep foundation pit dry and stable throughout construction.",
  },
  {
    image: project2,
    tag: "Basement",
    title: "Basement Water Removal",
    place: "Chhatarpur, M.P.",
    text: "Fast removal of accumulated water so basement work could continue without delay.",
  },
  {
    image: project3,
    tag: "Deep Well",
    title: "Deep Well Dewatering Setup",
    place: "Chhatarpur, M.P.",
    text: "Deep well and submersible pump setup for strong groundwater control.",
  },
  {
    image: project4,
    tag: "Drainage",
    title: "Site Drainage and Discharge",
    place: "Chhatarpur, M.P.",
    text: "Planned discharge lines that carry water away and keep the site clear.",
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
  show: { transition: { staggerChildren: 0.14 } },
};

/* ---------- Component ---------- */
export default function ProjectsPreview() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-40 top-0 size-md rounded-full bg-sky-100/70 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 size-md rounded-full bg-blue-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-6">
        {/* ---------- Heading row ---------- */}
        <motion.div
          variants={headerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
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
              {SUBTEXT}
            </motion.p>
          </div>

          <motion.div variants={fadeUp} className="hidden md:block">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-[#0A2A6B]/20 px-7 py-3.5 text-sm font-bold text-[#0A2A6B] transition hover:border-[#0A2A6B] hover:bg-[#0A2A6B] hover:text-white"
            >
              View All Projects
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </motion.div>

        {/* ---------- Project cards ---------- */}
        <motion.div
          variants={gridContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:auto-rows-80 lg:grid-cols-3"
        >
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              className={
                i === 0 ? "lg:row-span-2" : i === 1 ? "lg:col-span-2" : ""
              }
            >
              <Link
                to="/projects"
                className="group relative block h-80 overflow-hidden rounded-3xl shadow-lg shadow-blue-900/10 transition-shadow duration-500 hover:shadow-2xl hover:shadow-blue-900/30 sm:h-96 lg:h-full"
              >
                {/* Image */}
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-linear-to-t from-[#061538]/95 via-[#061538]/30 to-transparent transition-opacity duration-500" />
                <div className="absolute inset-0 bg-linear-to-t from-[#0A2A6B]/90 to-[#1747B0]/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Tag */}
                <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-white/15 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                  {p.tag}
                </span>

                {/* Arrow button */}
                <span className="absolute right-5 top-5 flex size-11 translate-y-2 items-center justify-center rounded-full bg-white text-[#0A2A6B] opacity-0 shadow-lg transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight size={20} />
                </span>

                {/* Text */}
                <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-7">
                  <p className="flex items-center gap-1.5 text-xs font-medium text-sky-200">
                    <MapPin size={14} />
                    {p.place}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold leading-snug sm:text-2xl">
                    {p.title}
                  </h3>

                  {/* Description: always visible on mobile, reveals on hover for desktop */}
                  <div className="grid grid-rows-[1fr] transition-all duration-500 ease-out lg:grid-rows-[0fr] lg:group-hover:grid-rows-[1fr]">
                    <div className="overflow-hidden">
                      <p className="pt-3 text-sm leading-relaxed text-blue-50/90">
                        {p.text}
                      </p>
                    </div>
                  </div>

                  {/* Animated underline */}
                  <span className="mt-4 block h-0.5 w-10 rounded-full bg-sky-400 transition-all duration-500 group-hover:w-full" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* ---------- Mobile button ---------- */}
        <div className="mt-10 text-center md:hidden">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 rounded-full bg-linear-to-r from-[#0A2A6B] to-[#1747B0] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-blue-900/25"
          >
            View All Projects
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
