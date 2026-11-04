import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Droplets,
  Waves,
  Gauge,
  Building2,
  Truck,
  Route,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

/* ---------- Content (update when client data arrives) ---------- */
const EYEBROW = "What We Do";
const HEADING = "Our Dewatering Services";
const SUBTEXT =
  "From small foundation pits to large excavation sites, we provide complete water removal solutions with modern equipment and an experienced team.";

const SERVICES = [
  {
    icon: Droplets,
    title: "Well Point Dewatering",
    text: "Closely spaced well points lower the water table around shallow excavations, keeping trenches and foundations dry.",
  },
  {
    icon: Waves,
    title: "Deep Well Dewatering",
    text: "High-capacity deep wells and submersible pumps for large sites and excavations that need deep groundwater control.",
  },
  {
    icon: Gauge,
    title: "Sump Pump Dewatering",
    text: "A simple, cost-effective method to collect and pump out surface and seepage water from pits and trenches.",
  },
  {
    icon: Building2,
    title: "Basement Water Removal",
    text: "Fast removal of accumulated water from basements and foundations, so construction work can continue safely.",
  },
  {
    icon: Truck,
    title: "Pump Rental",
    text: "Dewatering pumps, hoses and accessories available on rent in different capacities for short and long term needs.",
  },
  {
    icon: Route,
    title: "Drainage Solutions",
    text: "Planned drainage and discharge arrangements that carry water away from your site and prevent it from returning.",
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
  show: { transition: { staggerChildren: 0.12 } },
};

/* ---------- Component ---------- */
export default function ServicesPreview() {
  return (
    <section
      id="home-next"
      className="relative scroll-mt-18 overflow-hidden bg-slate-50 py-20 sm:py-24 lg:scroll-mt-28 lg:py-28"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-32 top-20 size-96 rounded-full bg-sky-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 size-96 rounded-full bg-blue-200/40 blur-3xl" />
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
            className="mt-5 text-3xl font-medium tracking-tight text-[#0A2A6B] sm:text-4xl lg:text-5xl"
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

        {/* ---------- Service cards ---------- */}
        <motion.div
          variants={gridContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div key={s.title} variants={fadeUp}>
                <Link
                  to="/services"
                  className="group relative block h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-transparent hover:shadow-2xl hover:shadow-blue-900/20 sm:p-8"
                >
                  {/* Hover fill */}
                  <span className="absolute inset-0 origin-bottom scale-y-0 bg-linear-to-br from-[#0A2A6B] via-[#123C93] to-[#1D5FD1] transition-transform duration-500 ease-out group-hover:scale-y-100" />

                  {/* Big number watermark */}
                  <span className="absolute right-5 top-3 text-7xl font-black text-slate-100 transition-colors duration-500 group-hover:text-white/10">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="relative">
                    <span className="flex size-14 items-center justify-center rounded-2xl bg-linear-to-br from-[#1747B0] to-sky-500 text-white shadow-lg shadow-blue-900/20 transition-all duration-500 group-hover:rotate-6 group-hover:bg-white group-hover:from-white group-hover:to-white group-hover:text-[#1747B0]">
                      <Icon size={26} />
                    </span>

                    <h3 className="mt-6 text-xl font-bold text-[#0A2A6B] transition-colors duration-500 group-hover:text-white">
                      {s.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600 transition-colors duration-500 group-hover:text-blue-50/90">
                      {s.text}
                    </p>

                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#1747B0] transition-colors duration-500 group-hover:text-white">
                      Learn More
                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ---------- View all button ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 text-center"
        >
          <Link
            to="/services"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-linear-to-r from-[#0A2A6B] to-[#1747B0] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-blue-900/25 transition hover:shadow-xl hover:shadow-blue-900/30"
          >
            <span className="relative z-10">View All Services</span>
            <ArrowRight
              size={18}
              className="relative z-10 transition-transform group-hover:translate-x-1"
            />
            <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-sky-500 to-[#1747B0] transition-transform duration-500 group-hover:translate-x-0" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}