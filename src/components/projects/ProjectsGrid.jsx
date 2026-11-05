import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  MapPin,
  ArrowUpRight,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Wrench,
  Building,
  Layers,
} from "lucide-react";
import project1 from "../../Asset/project-1.png";
import project2 from "../../Asset/project-2.png";
import project3 from "../../Asset/project-3.png";
import project4 from "../../Asset/project-4.png";
import project5 from "../../Asset/projects/project-5.png";
import project6 from "../../Asset/projects/project-6.png";

/* ---------- Content (update when client data arrives) ---------- */
const EYEBROW = "Our Work";
const HEADING = "Projects We Have Delivered";
const SUBTEXT =
  "Browse by type of work. Click any project to see more details about the site and the method we used.";

const FILTERS = ["All", "Excavation", "Basement", "Deep Well", "Well Point", "Drainage"];

// Placeholder projects. Replace titles, places, details and photos with the client's real work.
const PROJECTS = [
  {
    id: 1,
    image: project1,
    category: "Excavation",
    title: "Foundation Excavation Dewatering",
    place: "Chhatarpur, M.P.",
    text: "Continuous pumping to keep a deep foundation pit dry and stable throughout construction.",
    service: "Sump and high capacity pumping",
    siteType: "Residential foundation",
    equipment: "Diesel engine pumps",
  },
  {
    id: 2,
    image: project2,
    category: "Basement",
    title: "Basement Water Removal",
    place: "Chhatarpur, M.P.",
    text: "Fast removal of accumulated water so basement work could continue without delay.",
    service: "Basement pumping",
    siteType: "Building basement",
    equipment: "Submersible pumps",
  },
  {
    id: 3,
    image: project3,
    category: "Deep Well",
    title: "Deep Well Dewatering Setup",
    place: "Chhatarpur, M.P.",
    text: "Deep well and submersible pump setup to control strong groundwater at depth.",
    service: "Deep well dewatering",
    siteType: "Large excavation",
    equipment: "Submersible pumps and control panel",
  },
  {
    id: 4,
    image: project4,
    category: "Drainage",
    title: "Site Drainage and Discharge",
    place: "Chhatarpur, M.P.",
    text: "Planned discharge lines that carry water away and keep the site clear.",
    service: "Drainage and discharge",
    siteType: "Construction site",
    equipment: "Discharge pipes and pumps",
  },
  {
    id: 5,
    image: project5,
    category: "Well Point",
    title: "Roadside Trench Dewatering",
    place: "Chhatarpur, M.P.",
    text: "A well point system along a long trench to keep pipeline work dry and moving.",
    service: "Well point dewatering",
    siteType: "Road and pipeline trench",
    equipment: "Well point kit and self-priming pump",
  },
  {
    id: 6,
    image: project6,
    category: "Basement",
    title: "Commercial Basement Pumping",
    place: "Chhatarpur, M.P.",
    text: "Clearing a flooded commercial basement so shuttering and concrete work could restart.",
    service: "Basement pumping",
    siteType: "Commercial building",
    equipment: "Submersible pump and hoses",
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

/* ---------- Detail popup ---------- */
function ProjectModal({ project, onClose, onPrev, onNext, hasNav }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (hasNav && e.key === "ArrowLeft") onPrev();
      if (hasNav && e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext, hasNav]);

  const details = [
    { icon: Wrench, label: "Service", value: project.service },
    { icon: Building, label: "Site Type", value: project.siteType },
    { icon: Layers, label: "Equipment", value: project.equipment },
  ];

  return (
    <motion.div
      className="fixed inset-0 z-60 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#061538]/80 backdrop-blur-sm"
      />

      {/* Panel */}
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.97 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="relative grid max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-4xl bg-white shadow-2xl lg:grid-cols-2 lg:overflow-hidden"
      >
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-20 flex size-11 items-center justify-center rounded-full bg-white text-[#0A2A6B] shadow-lg transition hover:scale-110 hover:bg-[#0A2A6B] hover:text-white"
        >
          <X size={20} />
        </button>

        {/* Image */}
        <div className="relative aspect-4/3 lg:aspect-auto lg:min-h-130">
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#061538]/50 via-transparent to-transparent" />

          <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-white/15 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
            {project.category}
          </span>

          {hasNav && (
            <div className="absolute inset-x-4 bottom-4 flex justify-between">
              <button
                type="button"
                onClick={onPrev}
                aria-label="Previous project"
                className="flex size-11 items-center justify-center rounded-full bg-white/90 text-[#0A2A6B] shadow-lg backdrop-blur-md transition hover:scale-110 hover:bg-white"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                type="button"
                onClick={onNext}
                aria-label="Next project"
                className="flex size-11 items-center justify-center rounded-full bg-white/90 text-[#0A2A6B] shadow-lg backdrop-blur-md transition hover:scale-110 hover:bg-white"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col p-6 sm:p-9 lg:overflow-y-auto">
          <p className="flex items-center gap-1.5 text-sm font-medium text-[#1747B0]">
            <MapPin size={16} />
            {project.place}
          </p>

          <h3 className="mt-3 text-2xl font-medium leading-tight text-[#0A2A6B] sm:text-3xl">
            {project.title}
          </h3>

          <div className="mt-4 h-1 w-16 rounded-full bg-linear-to-r from-[#1747B0] to-sky-400" />

          <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-base">
            {project.text}
          </p>

          <ul className="mt-6 space-y-3">
            {details.map((d) => {
              const Icon = d.icon;
              return (
                <li
                  key={d.label}
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-[#1747B0] to-sky-500 text-white">
                    <Icon size={18} />
                  </span>
                  <div className="leading-tight">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      {d.label}
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-[#0A2A6B]">
                      {d.value}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="mt-auto pt-7">
            <Link
              to="/contact"
              onClick={onClose}
              className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-linear-to-r from-[#0A2A6B] to-[#1747B0] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-blue-900/25 transition hover:shadow-xl"
            >
              <span className="relative z-10">Get a Similar Quote</span>
              <ArrowRight
                size={18}
                className="relative z-10 transition-transform group-hover:translate-x-1"
              />
              <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-sky-500 to-[#1747B0] transition-transform duration-500 group-hover:translate-x-0" />
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ---------- Component ---------- */
export default function ProjectsGrid() {
  const [filter, setFilter] = useState("All");
  const [selectedId, setSelectedId] = useState(null);

  const visible =
    filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  const selectedIndex = visible.findIndex((p) => p.id === selectedId);
  const selected = selectedIndex >= 0 ? visible[selectedIndex] : null;

  const close = useCallback(() => setSelectedId(null), []);
  const prev = useCallback(() => {
    if (selectedIndex < 0) return;
    setSelectedId(visible[(selectedIndex - 1 + visible.length) % visible.length].id);
  }, [selectedIndex, visible]);
  const next = useCallback(() => {
    if (selectedIndex < 0) return;
    setSelectedId(visible[(selectedIndex + 1) % visible.length].id);
  }, [selectedIndex, visible]);

  return (
    <section
      id="projects-grid"
      className="relative scroll-mt-18 overflow-hidden bg-slate-50 py-20 sm:py-24 lg:scroll-mt-28 lg:py-28"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-32 top-20 size-md rounded-full bg-sky-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 size-md rounded-full bg-blue-200/40 blur-3xl" />
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(rgba(10,42,107,0.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

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

        {/* ---------- Filter tabs ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex justify-start overflow-x-auto pb-2 scrollbar-none sm:justify-center [&::-webkit-scrollbar]:hidden"
        >
          <div className="flex gap-2 rounded-full border border-slate-200 bg-white p-1.5 shadow-sm">
            {FILTERS.map((f) => {
              const active = filter === f;    
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  aria-pressed={active}
                  className={`relative shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-300 ${
                    active ? "text-white" : "text-slate-600 hover:text-[#0A2A6B]"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="project-filter"
                      className="absolute inset-0 rounded-full bg-linear-to-r from-[#0A2A6B] to-[#1747B0] shadow-md shadow-blue-900/25"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{f}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        <p className="mt-5 text-center text-sm text-slate-500">
          Showing{" "}
          <span className="font-semibold text-[#0A2A6B]">{visible.length}</span>{" "}
          {visible.length === 1 ? "project" : "projects"}
        </p>

        {/* ---------- Project cards ---------- */}
        <motion.div
          layout
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.button
                key={p.id}
                type="button"
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                onClick={() => setSelectedId(p.id)}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white text-left shadow-sm transition-shadow duration-500 hover:shadow-2xl hover:shadow-blue-900/20"
              >
                {/* Image */}
                <div className="relative aspect-4/3 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#061538]/60 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-[#0A2A6B]/0 transition-colors duration-500 group-hover:bg-[#0A2A6B]/40" />

                  <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/15 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                    {p.category}
                  </span>

                  <span className="absolute right-4 top-4 flex size-11 translate-y-2 items-center justify-center rounded-full bg-white text-[#0A2A6B] opacity-0 shadow-lg transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight size={20} />
                  </span>
                </div>

                {/* Text */}
                <div className="relative flex flex-1 flex-col p-6">
                  <p className="flex items-center gap-1.5 text-xs font-medium text-[#1747B0]">
                    <MapPin size={14} />
                    {p.place}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold leading-snug text-[#0A2A6B] sm:text-xl">
                    {p.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-600">
                    {p.text}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#1747B0]">
                    View Details
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1.5"
                    />
                  </span>

                  <span className="absolute inset-x-6 bottom-0 h-0.5 origin-left scale-x-0 rounded-full bg-linear-to-r from-[#1747B0] to-sky-400 transition-transform duration-500 group-hover:scale-x-100" />
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ---------- Detail popup ---------- */}
      <AnimatePresence>
        {selected && (
          <ProjectModal
            key={selected.id}
            project={selected}
            onClose={close}
            onPrev={prev}
            onNext={next}
            hasNav={visible.length > 1}
          />
        )}
      </AnimatePresence>
    </section>
  );
}