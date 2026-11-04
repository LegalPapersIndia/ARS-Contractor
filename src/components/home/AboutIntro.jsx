import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  animate,
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowRight, Phone, CheckCircle2, Award } from "lucide-react";
import aboutMain from "../../Asset/about-main.png";
import aboutSecondary from "../../Asset/about-secondary.png";

/* ---------- Content (update when client data arrives) ---------- */
const PHONE_LINK = "+916398883191";

const EYEBROW = "Who We Are";
const HEADING = "Trusted Dewatering Experts in Chhatarpur";
const PARA_1 =
  "ARS is a professional dewatering contractor serving builders, contractors and developers across Chhatarpur and nearby districts. We keep excavations, foundations and basements dry so your construction work can move ahead without delays.";
const PARA_2 =
  "With modern pumping equipment, a skilled on-site team and a clear, honest approach, we deliver safe and dependable results on projects of every size.";
const HIGHLIGHT = "Right equipment. Skilled team. Guaranteed results.";

// Placeholder number: replace with the client's real experience
const EXPERIENCE_YEARS = 10;

const POINTS = [
  "Guaranteed work quality",
  "Modern, high-capacity pumps",
  "Experienced site engineers",
  "On-time project completion",
];

/* ---------- Helpers ---------- */
function Counter({ to, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = Math.round(v) + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, to, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const textContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

/* ---------- Component ---------- */
export default function AboutIntro() {
  const sectionRef = useRef(null);

  // Parallax: both images move slightly in opposite directions on scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
const mainY = useTransform(scrollYProgress, [0, 1], [-15, 15]);
const secondaryY = useTransform(scrollYProgress, [0, 1], [10, -10]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-40 top-0 size-md rounded-full bg-sky-100/70 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 size-md rounded-full bg-blue-100/60 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2 lg:gap-20 lg:px-6">
        {/* ---------- Left: image collage ---------- */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-xl pb-14 pl-4 pr-6 lg:max-w-none lg:pr-10"
        >
          {/* Dotted pattern */}
          <div
            className="absolute -right-2 top-8 -z-10 size-36 opacity-70"
            style={{
              backgroundImage:
                "radial-gradient(#1747B0 2px, transparent 2px)",
              backgroundSize: "16px 16px",
            }}
          />

          {/* Offset frame */}
          <div className="absolute left-0 top-4 -z-10 h-105 w-[85%] rounded-4xl border-2 border-sky-300 sm:h-130 lg:h-150" />

          {/* Main image */}
          <div className="relative h-105 w-[85%] overflow-hidden rounded-4xl shadow-2xl shadow-blue-900/25 sm:h-130 lg:h-150">
            <motion.img
              src={aboutMain}
              alt="ARS dewatering team at work on a construction site"
              loading="lazy"
              style={{ y: mainY }}
              className="absolute inset-0 size-full scale-110 object-cover object-top"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#061538]/40 via-transparent to-transparent" />
          </div>

          {/* Secondary image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="absolute bottom-0 right-0 aspect-square w-[48%] overflow-hidden rounded-3xl border-8 border-white shadow-2xl shadow-blue-900/25"
          >
            <motion.img
              src={aboutSecondary}
              alt="High-capacity dewatering pump and pipes"
              loading="lazy"
              style={{ y: secondaryY }}
           className="absolute inset-0 size-full scale-110 object-cover"
            />
          </motion.div>

          {/* Experience badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.7,
              type: "spring",
              stiffness: 200,
              damping: 14,
            }}
            className="absolute bottom-8 left-0 sm:-left-2"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center gap-3 rounded-2xl bg-linear-to-br from-[#0A2A6B] to-[#1747B0] px-5 py-4 text-white shadow-2xl shadow-blue-900/40"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-white/15">
                <Award size={24} />
              </span>
              <div className="leading-tight">
                <p className="text-3xl font-bold">
                  <Counter to={EXPERIENCE_YEARS} suffix="+" />
                </p>
                <p className="mt-0.5 text-xs font-medium text-blue-100">
                  Years of Experience
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ---------- Right: content ---------- */}
        <motion.div
          variants={textContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
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
            className="mt-5 h-1 w-20 rounded-full bg-linear-to-r from-[#1747B0] to-sky-400"
          />

          <motion.p
            variants={fadeUp}
            className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            {PARA_1}
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            {PARA_2}
          </motion.p>

          <motion.blockquote
            variants={fadeUp}
            className="mt-7 rounded-r-2xl border-l-4 border-[#1747B0] bg-blue-50 px-5 py-4 text-base font-semibold text-[#0A2A6B] sm:text-lg"
          >
            {HIGHLIGHT}
          </motion.blockquote>

          <motion.ul
            variants={textContainer}
            className="mt-8 grid gap-4 sm:grid-cols-2"
          >
            {POINTS.map((p) => (
              <motion.li
                key={p}
                variants={fadeUp}
                className="flex items-center gap-3 text-sm font-medium text-slate-700 sm:text-base"
              >
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-[#1747B0] to-sky-500 text-white">
                  <CheckCircle2 size={16} />
                </span>
                {p}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              to="/about"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-linear-to-r from-[#0A2A6B] to-[#1747B0] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-blue-900/25 transition hover:shadow-xl hover:shadow-blue-900/30"
            >
              <span className="relative z-10">Read Our Story</span>
              <ArrowRight
                size={18}
                className="relative z-10 transition-transform group-hover:translate-x-1"
              />
              <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-sky-500 to-[#1747B0] transition-transform duration-500 group-hover:translate-x-0" />
            </Link>

            <a
              href={`tel:${PHONE_LINK}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#0A2A6B]/20 px-8 py-4 text-sm font-bold text-[#0A2A6B] transition hover:border-[#0A2A6B] hover:bg-[#0A2A6B] hover:text-white"
            >
              <Phone size={18} />
              Call Now
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}