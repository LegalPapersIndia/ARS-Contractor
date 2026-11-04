// import { useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import { animate, motion, useInView } from "framer-motion";
// import {
//   ArrowRight,
//   Phone,
//   ShieldCheck,
//   Clock,
//   Wrench,
//   CalendarCheck,
//   MapPin,
//   CheckCircle2,
// } from "lucide-react";

// /* ---------- Content (update when client data arrives) ---------- */
// const PHONE = "+91 63988 83191";
// const PHONE_LINK = "+916398883191";

// const BADGE = "Trusted Dewatering Contractor in Chhatarpur (M.P.)";
// const HEADING_TOP = "Reliable Dewatering Solutions for";
// const HEADING_HIGHLIGHT = "Every Construction Site";
// const SUBTEXT =
//   "ARS removes stagnant water from foundations, basements and excavations quickly and safely, so your project stays on schedule with guaranteed results.";

// const POINTS = ["Guaranteed Work", "Modern Pump Equipment", "On-time Completion"];

// // Placeholder numbers: replace with the client's real figures
// const STATS = [
//   { icon: CalendarCheck, to: 10, suffix: "+", label: "Years of Experience" },
//   { icon: Wrench, to: 250, suffix: "+", label: "Projects Completed" },
//   { icon: Clock, to: 24, suffix: "/7", label: "Emergency Support" },
//   { icon: ShieldCheck, to: 100, suffix: "%", label: "Work Guarantee" },
// ];

// const BUBBLES = [
//   { left: "6%", size: 10, delay: 0, duration: 9 },
//   { left: "14%", size: 18, delay: 2, duration: 12 },
//   { left: "27%", size: 8, delay: 4, duration: 8 },
//   { left: "38%", size: 14, delay: 1, duration: 11 },
//   { left: "52%", size: 9, delay: 5, duration: 9 },
//   { left: "63%", size: 20, delay: 3, duration: 13 },
//   { left: "74%", size: 11, delay: 0.5, duration: 10 },
//   { left: "85%", size: 16, delay: 2.5, duration: 12 },
//   { left: "93%", size: 8, delay: 6, duration: 8 },
// ];

// /* ---------- Small helpers ---------- */
// function Counter({ to, suffix = "" }) {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true });

//   useEffect(() => {
//     if (!inView) return;
//     const controls = animate(0, to, {
//       duration: 2,
//       ease: "easeOut",
//       onUpdate: (v) => {
//         if (ref.current) ref.current.textContent = Math.round(v) + suffix;
//       },
//     });
//     return () => controls.stop();
//   }, [inView, to, suffix]);

//   return <span ref={ref}>0{suffix}</span>;
// }

// const container = {
//   hidden: {},
//   show: { transition: { staggerChildren: 0.14, delayChildren: 0.15 } },
// };

// const item = {
//   hidden: { opacity: 0, y: 30 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
// };

// function Wave() {
//   const shape = (
//     <svg
//       viewBox="0 0 1440 120"
//       preserveAspectRatio="none"
//       className="h-full w-1/2 shrink-0"
//     >
//       <path
//         d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
//         fill="currentColor"
//       />
//     </svg>
//   );

//   return (
//     <div className="pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden">
//       <motion.div
//         className="absolute inset-x-0 bottom-0 flex h-16 w-[200%] text-sky-300/30 sm:h-24"
//         animate={{ x: ["-50%", "0%"] }}
//         transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//       >
//         {shape}
//         {shape}
//       </motion.div>
//       <motion.div
//         className="relative flex h-12 w-[200%] text-white sm:h-20"
//         animate={{ x: ["0%", "-50%"] }}
//         transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
//       >
//         {shape}
//         {shape}
//       </motion.div>
//     </div>
//   );
// }

// /* ---------- Component ---------- */
// export default function Hero() {
//   return (
//     <section className="relative isolate flex min-h-[calc(100svh-4.5rem)] items-center overflow-hidden bg-linear-to-br from-[#061538] via-[#0A2A6B] to-[#1747B0] text-white lg:min-h-[calc(100svh-7rem)]">
//       {/* ---------- Background layers ---------- */}
//       {/* grid pattern */}
//       <div
//         className="absolute inset-0 -z-10 opacity-40"
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)",
//           backgroundSize: "56px 56px",
//         }}
//       />
//       {/* glow blobs */}
//       <div className="absolute -left-24 top-10 -z-10 size-96 rounded-full bg-sky-500/20 blur-3xl" />
//       <div className="absolute -right-24 bottom-10 -z-10 size-md rounded-full bg-blue-400/20 blur-3xl" />

//       {/* ripples */}
//       <div className="pointer-events-none absolute right-[18%] top-[28%] -z-10 hidden lg:block">
//         {[0, 1, 2].map((i) => (
//           <motion.span
//             key={i}
//             className="absolute size-64 -translate-1/2 rounded-full border border-sky-300/30"
//             initial={{ scale: 0.4, opacity: 0 }}
//             animate={{ scale: [0.4, 2], opacity: [0.6, 0] }}
//             transition={{
//               duration: 6,
//               delay: i * 2,
//               repeat: Infinity,
//               ease: "easeOut",
//             }}
//           />
//         ))}
//       </div>

//       {/* rising bubbles */}
//       {BUBBLES.map((b, i) => (
//         <motion.span
//           key={i}
//           className="pointer-events-none absolute bottom-0 -z-10 rounded-full border border-white/30 bg-white/10"
//           style={{ left: b.left, width: b.size, height: b.size }}
//           animate={{ y: [0, -700], opacity: [0, 0.8, 0] }}
//           transition={{
//             duration: b.duration,
//             delay: b.delay,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />
//       ))}

//       {/* ---------- Content ---------- */}
//       <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 pb-32 pt-14 lg:grid-cols-2 lg:gap-10 lg:px-6 lg:pb-40 lg:pt-20">
//         {/* Left: text */}
//         <motion.div variants={container} initial="hidden" animate="show">
//           <motion.span
//             variants={item}
//             className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold tracking-wide backdrop-blur-md sm:text-sm"
//           >
//             <span className="relative flex size-2">
//               <span className="absolute inline-flex size-full animate-ping rounded-full bg-sky-300 opacity-75" />
//               <span className="relative inline-flex size-2 rounded-full bg-sky-300" />
//             </span>
//             {BADGE}
//           </motion.span>

//           <motion.h1
//             variants={item}
//             className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
//           >
//             {HEADING_TOP}{" "}
//             <span className="bg-linear-to-r from-sky-300 via-white to-sky-200 bg-clip-text text-transparent">
//               {HEADING_HIGHLIGHT}
//             </span>
//           </motion.h1>

//           <motion.p
//             variants={item}
//             className="mt-6 max-w-xl text-base leading-relaxed text-blue-100/90 sm:text-lg"
//           >
//             {SUBTEXT}
//           </motion.p>

//           <motion.ul
//             variants={item}
//             className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-white/90"
//           >
//             {POINTS.map((p) => (
//               <li key={p} className="flex items-center gap-2">
//                 <CheckCircle2 size={18} className="text-sky-300" />
//                 {p}
//               </li>
//             ))}
//           </motion.ul>

//           <motion.div
//             variants={item}
//             className="mt-9 flex flex-col gap-4 sm:flex-row"
//           >
//             <Link
//               to="/contact"
//               className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-bold text-[#0A2A6B] shadow-xl shadow-black/20 transition hover:scale-[1.03]"
//             >
//               <span className="relative z-10">Get Free Quote</span>
//               <ArrowRight
//                 size={18}
//                 className="relative z-10 transition-transform group-hover:translate-x-1"
//               />
//               <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-sky-200 to-white transition-transform duration-500 group-hover:translate-x-0" />
//             </Link>

//             <a
//               href={`tel:${PHONE_LINK}`}
//               className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-8 py-4 text-sm font-bold backdrop-blur-md transition hover:border-white hover:bg-white/15"
//             >
//               <Phone size={18} />
//               {PHONE}
//             </a>
//           </motion.div>
//         </motion.div>

//         {/* Right: stat cards */}
//         <div className="relative mx-auto w-full max-w-md lg:max-w-none">
//           <div className="grid grid-cols-2 gap-4 sm:gap-5">
//             {STATS.map((s, i) => {
//               const Icon = s.icon;
//               return (
//                 <div key={s.label} className={i % 2 === 1 ? "mt-8" : ""}>
//                   <motion.div
//                     initial={{ opacity: 0, scale: 0.85, y: 40 }}
//                     animate={{ opacity: 1, scale: 1, y: 0 }}
//                     transition={{
//                       delay: 0.5 + i * 0.15,
//                       duration: 0.7,
//                       ease: "easeOut",
//                     }}
//                   >
//                     <motion.div
//                       animate={{ y: [0, -10, 0] }}
//                       transition={{
//                         duration: 4 + i,
//                         repeat: Infinity,
//                         ease: "easeInOut",
//                       }}
//                       className="rounded-3xl border border-white/20 bg-white/10 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-7"
//                     >
//                       <span className="flex size-12 items-center justify-center rounded-2xl bg-linear-to-br from-sky-400 to-blue-600 shadow-lg">
//                         <Icon size={22} />
//                       </span>
//                       <p className="mt-5 text-3xl font-extrabold sm:text-4xl">
//                         <Counter to={s.to} suffix={s.suffix} />
//                       </p>
//                       <p className="mt-1 text-xs font-medium text-blue-100/80 sm:text-sm">
//                         {s.label}
//                       </p>
//                     </motion.div>
//                   </motion.div>
//                 </div>
//               );
//             })}
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1.3, duration: 0.6 }}
//             className="mt-10 flex items-center justify-center gap-2 text-sm text-blue-100/80 sm:mt-12"
//           >
//             <MapPin size={16} className="text-sky-300" />
//             Serving Chhatarpur and nearby districts
//           </motion.div>
//         </div>
//       </div>

//       {/* ---------- Bottom wave ---------- */}
//       <Wave />
//     </section>
//   );
// }






import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  Clock,
  Wrench,
  MapPin,
  ChevronDown,
} from "lucide-react";
import heroBg from "../../Asset/hero-bg.jpg";

/* ---------- Content (update when client data arrives) ---------- */
const PHONE = "+91 63988 83191";
const PHONE_LINK = "+916398883191";

const BADGE = "Trusted Dewatering Contractor | Chhatarpur (M.P.)";
const HEADING_TOP = "Professional";
const HEADING_HIGHLIGHT = "Dewatering Solutions";
const HEADING_BOTTOM = "for Construction Sites";
const SUBTEXT =
  "We remove stagnant water from foundations, basements and excavations quickly and safely, keeping your project on schedule with guaranteed results.";

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Guaranteed Work",
    text: "Quality assured on every project",
  },
  {
    icon: Wrench,
    title: "Modern Equipment",
    text: "High-capacity pumps and tools",
  },
  {
    icon: Clock,
    title: "Quick Response",
    text: "Fast support for urgent sites",
  },
  {
    icon: MapPin,
    title: "Free Site Visit",
    text: "Across Chhatarpur and nearby areas",
  },
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

/* ---------- Component ---------- */
export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-4.5rem)] flex-col overflow-hidden bg-[#061538] text-white lg:min-h-[calc(100svh-7rem)]">
      {/* ---------- Background image (slow zoom) ---------- */}
      <motion.img
        src={heroBg}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 12, ease: "easeOut" }}
        className="absolute inset-0 -z-20 size-full object-cover"
      />

      {/* ---------- Overlays for readability ---------- */}
    {/* ---------- Overlays for readability ---------- */}
<div className="absolute inset-0 -z-10 bg-linear-to-r from-[#061538]/80 via-[#0A2A6B]/45 to-transparent" />
<div className="absolute inset-0 -z-10 bg-linear-to-t from-[#061538]/60 via-transparent to-[#061538]/10" />

      {/* ---------- Main content ---------- */}
      <div className="mx-auto flex w-full max-w-7xl flex-1 items-center px-5 pb-10 pt-14 lg:px-6 lg:pt-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold tracking-wide backdrop-blur-md sm:text-sm"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-sky-300 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-sky-300" />
            </span>
            {BADGE}
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl lg:text-7xl"
          >
            {HEADING_TOP}{" "}
            <span className="bg-linear-to-r from-sky-300 via-white to-sky-200 bg-clip-text text-transparent">
              {HEADING_HIGHLIGHT}
            </span>{" "}
            {HEADING_BOTTOM}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-blue-50/90 sm:text-lg"
          >
            {SUBTEXT}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-bold text-[#0A2A6B] shadow-xl shadow-black/30 transition hover:scale-[1.03]"
            >
              <span className="relative z-10">Get Free Quote</span>
              <ArrowRight
                size={18}
                className="relative z-10 transition-transform group-hover:translate-x-1"
              />
              <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-sky-200 to-white transition-transform duration-500 group-hover:translate-x-0" />
            </Link>

            <a
              href={`tel:${PHONE_LINK}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-8 py-4 text-sm font-bold backdrop-blur-md transition hover:border-white hover:bg-white/20"
            >
              <Phone size={18} />
              {PHONE}
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* ---------- Scroll indicator (desktop) ---------- */}
      <motion.a
        href="#home-next"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-40 right-6 hidden flex-col items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/70 lg:flex"
      >
        <span className="[writing-mode:vertical-rl]">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.span>
      </motion.a>

      {/* ---------- Bottom feature strip ---------- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
        className="relative border-t border-white/15 bg-[#061538]/70 backdrop-blur-xl"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className={`flex items-center gap-3 px-5 py-5 sm:gap-4 sm:py-6 lg:px-6 ${
                  i !== 0 ? "lg:border-l lg:border-white/10" : ""
                } ${i % 2 === 1 ? "border-l border-white/10 lg:border-l" : ""} ${
                  i > 1 ? "border-t border-white/10 lg:border-t-0" : ""
                }`}
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-sky-400 to-blue-600 shadow-lg sm:size-12">
                  <Icon size={20} />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-bold sm:text-base">{f.title}</p>
                  <p className="mt-0.5 hidden text-xs text-blue-100/75 sm:block">
                    {f.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}