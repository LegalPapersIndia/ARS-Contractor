import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Target, Eye, CheckCircle2, Waves } from "lucide-react";
import missionBg from "../../Asset/about/mission-bg.png";

/* ---------- Content (update when client data arrives) ---------- */
const EYEBROW = "Mission and Vision";
const HEADING = "What Drives Us Every Day";
const SUBTEXT =
  "A clear purpose guides how we plan, work and treat every site and every client.";

// Placeholder statements. Replace with the client's own mission and vision.
const CARDS = [
  {
    icon: Target,
    label: "Our Mission",
    title: "Keep Every Site Dry and On Schedule",
    text: "To deliver safe, reliable and fairly priced dewatering that keeps construction sites dry, so builders can finish their projects on time and with confidence.",
    points: [
      "Inspect every site before recommending a method",
      "Use well maintained equipment and trained operators",
      "Communicate clearly from quote to completion",
    ],
  },
  {
    icon: Eye,
    label: "Our Vision",
    title: "The Most Trusted Dewatering Partner",
    text: "To become the most trusted dewatering partner for builders and contractors across our region, known for dependable work and honest dealings.",
    points: [
      "Grow our equipment and team as demand grows",
      "Adopt better methods and safer practices",
      "Build long term relationships with clients",
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

const pointsContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.4 } },
};

const pointItem = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/* ---------- Component ---------- */
export default function MissionVision() {
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
      className="relative isolate overflow-hidden bg-[#061538] py-20 text-white sm:py-24 lg:py-28"
    >
      {/* Background image with parallax */}
      <motion.img
        src={missionBg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        style={{ y: bgY }}
        className="absolute inset-0 -z-20 size-full scale-110 object-cover"
      />

      {/* Overlays */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-[#061538]/90 via-[#0A2A6B]/80 to-[#061538]/95" />
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)",
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

        {/* ---------- Cards ---------- */}
        <div className="relative mt-14 grid gap-6 lg:grid-cols-2 lg:gap-10">
          {/* Center connector (desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.6,
              type: "spring",
              stiffness: 200,
              damping: 14,
            }}
            className="absolute left-1/2 top-1/2 z-10 hidden -translate-1/2 lg:block"
          >
            <span className="relative flex size-16 items-center justify-center rounded-full bg-white text-[#1747B0] shadow-2xl shadow-sky-400/30 ring-8 ring-sky-300/20">
              <Waves size={26} />
            </span>
          </motion.div>

          {CARDS.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, x: i === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.div
                  variants={pointsContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  className="group relative h-full overflow-hidden rounded-4xl border border-white/15 bg-white/8 p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-sky-300/50 hover:shadow-2xl hover:shadow-sky-500/15 sm:p-10"
                >
                  {/* Always-moving glow */}
                  <motion.span
                    className="pointer-events-none absolute -right-12 -top-12 size-48 rounded-full bg-sky-400/25 blur-3xl"
                    animate={{
                      x: [0, -30, 0],
                      y: [0, 30, 0],
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 7 + i * 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Top accent line */}
                  <span className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-sky-400 via-white to-sky-400 opacity-70" />

                  <div className="relative">
                    <div className="flex items-center gap-4">
                      <span className="flex size-16 items-center justify-center rounded-2xl bg-linear-to-br from-sky-400 to-blue-600 text-white shadow-xl shadow-blue-900/40 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                        <Icon size={30} />
                      </span>
                      <span className="text-sm font-bold uppercase tracking-[0.25em] text-sky-300">
                        {c.label}
                      </span>
                    </div>

                    <h3 className="mt-6 text-2xl font-medium leading-snug sm:text-3xl">
                      {c.title}
                    </h3>

                    <p className="mt-4 text-sm leading-relaxed text-blue-100/80 sm:text-base">
                      {c.text}
                    </p>

                    <div className="my-6 h-px bg-linear-to-r from-white/30 via-white/10 to-transparent" />

                    <ul className="space-y-3">
                      {c.points.map((p) => (
                        <motion.li
                          key={p}
                          variants={pointItem}
                          className="flex items-start gap-3 text-sm font-medium text-white/90 sm:text-base"
                        >
                          <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-sky-400 to-blue-600">
                            <CheckCircle2 size={14} />
                          </span>
                          {p}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}