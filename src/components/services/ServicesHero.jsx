// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   ChevronRight,
//   Home,
//   Phone,
//   Droplets,
//   Waves,
//   Gauge,
//   Building2,
//   Truck,
//   Route,
// } from "lucide-react";
// import heroBg from "../../Asset/services-hero.png";

// /* ---------- Content (update when client data arrives) ---------- */
// const PHONE = "+91 63988 83191";
// const PHONE_LINK = "+916398883191";

// const BADGE = "Dewatering Services | Chhatarpur (M.P.)";
// const HEADING_TOP = "Complete Water Removal";
// const HEADING_HIGHLIGHT = "Solutions";
// const HEADING_BOTTOM = "for Every Construction Site";
// const SUBTEXT =
//   "From shallow foundations to deep excavations, we plan, install and monitor the right dewatering system for your site, with modern pumps and an experienced team.";

// const SERVICE_CHIPS = [
//   { icon: Droplets, label: "Well Point" },
//   { icon: Waves, label: "Deep Well" },
//   { icon: Gauge, label: "Sump Pump" },
//   { icon: Building2, label: "Basement" },
//   { icon: Truck, label: "Pump Rental" },
//   { icon: Route, label: "Drainage" },
// ];

// /* ---------- Animation variants ---------- */
// const container = {
//   hidden: {},
//   show: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
// };

// const item = {
//   hidden: { opacity: 0, y: 30 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
// };

// /* ---------- Animated wave ---------- */
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
//         className="absolute inset-x-0 bottom-0 flex h-12 w-[200%] text-sky-300/30 sm:h-20"
//         animate={{ x: ["-50%", "0%"] }}
//         transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//       >
//         {shape}
//         {shape}
//       </motion.div>
//       <motion.div
//         className="relative flex h-9 w-[200%] text-white sm:h-16"
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
// export default function ServicesHero() {
//   return (
//     <section className="relative isolate flex min-h-[calc(100svh-4.5rem)] flex-col overflow-hidden bg-[#061538] text-white lg:min-h-[calc(100svh-7rem)]">
//       {/* ---------- Background image (slow zoom) ---------- */}
//       <motion.img
//         src={heroBg}
//         alt=""
//         aria-hidden="true"
//         fetchPriority="high"
//         initial={{ scale: 1.15 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 12, ease: "easeOut" }}
//         className="absolute inset-0 -z-20 size-full object-cover object-top"
//       />

//       {/* ---------- Overlays for readability ---------- */}
//       <div className="absolute inset-0 -z-10 bg-linear-to-r from-[#061538]/80 via-[#0A2A6B]/45 to-transparent" />
//       <div className="absolute inset-0 -z-10 bg-linear-to-t from-[#061538]/60 via-transparent to-[#061538]/10" />

//       {/* ---------- Main content ---------- */}
//       <div className="mx-auto flex w-full max-w-7xl flex-1 items-center px-5 pb-40 pt-12 sm:pb-44 lg:px-6 lg:pb-48 lg:pt-16">
//         <motion.div
//           variants={container}
//           initial="hidden"
//           animate="show"
//           className="max-w-3xl"
//         >
//           {/* Breadcrumb */}
//           <motion.nav
//             variants={item}
//             aria-label="Breadcrumb"
//             className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-medium backdrop-blur-md sm:text-sm"
//           >
//             <Link
//               to="/"
//               className="inline-flex items-center gap-1.5 text-blue-100 transition hover:text-white"
//             >
//               <Home size={14} />
//               Home
//             </Link>
//             <ChevronRight size={14} className="text-sky-300" />
//             <span className="font-semibold text-white">Services</span>
//           </motion.nav>

//           {/* Badge */}
//           <motion.span
//             variants={item}
//             className="mt-6 flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-200 sm:text-sm"
//           >
//             <span className="h-0.5 w-8 rounded-full bg-sky-300" />
//             {BADGE}
//           </motion.span>

//           {/* Heading */}
//           <motion.h1
//             variants={item}
//             className="mt-5 text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl lg:text-7xl"
//           >
//             {HEADING_TOP}{" "}
//             <span className="bg-linear-to-r from-sky-300 via-white to-sky-200 bg-clip-text text-transparent">
//               {HEADING_HIGHLIGHT}
//             </span>{" "}
//             {HEADING_BOTTOM}
//           </motion.h1>

//           {/* Subtext */}
//           <motion.p
//             variants={item}
//             className="mt-6 max-w-xl text-base leading-relaxed text-blue-50/90 sm:text-lg"
//           >
//             {SUBTEXT}
//           </motion.p>

//           {/* Buttons */}
//           <motion.div
//             variants={item}
//             className="mt-9 flex flex-col gap-4 sm:flex-row"
//           >
//             <Link
//               to="/contact"
//               className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-bold text-[#0A2A6B] shadow-xl shadow-black/30 transition hover:scale-[1.03]"
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
//               className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-8 py-4 text-sm font-bold backdrop-blur-md transition hover:border-white hover:bg-white/20"
//             >
//               <Phone size={18} />
//               {PHONE}
//             </a>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* ---------- Service chips strip ---------- */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
//         className="absolute inset-x-0 bottom-14 z-10 sm:bottom-20 lg:bottom-24"
//       >
//         <div className="mx-auto max-w-7xl px-5 lg:px-6">
//           <div className="flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] lg:grid lg:grid-cols-6 lg:overflow-visible [&::-webkit-scrollbar]:hidden">
//             {SERVICE_CHIPS.map((c, i) => {
//               const Icon = c.icon;
//               return (
//                 <motion.a
//                   key={c.label}
//                   href="#services-list"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 1.1 + i * 0.08, duration: 0.5 }}
//                   whileHover={{ y: -4 }}
//                   className="group flex shrink-0 items-center gap-3 rounded-2xl border border-white/20 bg-[#061538]/55 px-4 py-3 backdrop-blur-xl transition-colors hover:border-sky-300/60 hover:bg-[#0A2A6B]/70"
//                 >
//                   <span className="flex size-9 items-center justify-center rounded-xl bg-linear-to-br from-sky-400 to-blue-600 shadow-lg transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
//                     <Icon size={18} />
//                   </span>
//                   <span className="whitespace-nowrap text-sm font-semibold">
//                     {c.label}
//                   </span>
//                 </motion.a>
//               );
//             })}
//           </div>
//         </div>
//       </motion.div>

//       {/* ---------- Bottom wave ---------- */}
//       <Wave />
//     </section>
//   );
// }



import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Home, Phone } from "lucide-react";
import heroBg from "../../Asset/services-hero.png";

/* ---------- Content (update when client data arrives) ---------- */
const PHONE = "+91 63988 83191";
const PHONE_LINK = "+916398883191";

const BADGE = "Dewatering Services | Chhatarpur (M.P.)";
const HEADING_TOP = "Complete Water Removal";
const HEADING_HIGHLIGHT = "Solutions";
const HEADING_BOTTOM = "for Every Site";
const SUBTEXT =
  "From shallow foundations to deep excavations, we plan, install and monitor the right dewatering system for your site.";

/* ---------- Animation variants ---------- */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

/* ---------- Animated wave ---------- */
function Wave() {
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
    <div className="pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden">
      <motion.div
        className="absolute inset-x-0 bottom-0 flex h-10 w-[200%] text-sky-300/30 sm:h-16"
        animate={{ x: ["-50%", "0%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {shape}
        {shape}
      </motion.div>
      <motion.div
        className="relative flex h-7 w-[200%] text-white sm:h-12"
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
export default function ServicesHero() {
  return (
    <section className="relative isolate flex min-h-104 items-center overflow-hidden bg-[#061538] text-white sm:min-h-120 lg:min-h-136">
      {/* ---------- Background image (slow zoom) ---------- */}
      <motion.img
        src={heroBg}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0 -z-20 size-full object-cover object-center"
      />

      {/* ---------- Overlays for readability ---------- */}
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-[#061538]/85 via-[#0A2A6B]/50 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-[#061538]/50 via-transparent to-[#061538]/10" />

      {/* ---------- Content ---------- */}
      <div className="mx-auto w-full max-w-7xl px-5 pb-20 pt-10 sm:pb-24 lg:px-6 lg:pb-28 lg:pt-12">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          {/* Breadcrumb */}
          <motion.nav
            variants={item}
            aria-label="Breadcrumb"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-medium backdrop-blur-md sm:text-sm"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-blue-100 transition hover:text-white"
            >
              <Home size={14} />
              Home
            </Link>
            <ChevronRight size={14} className="text-sky-300" />
            <span className="font-semibold text-white">Services</span>
          </motion.nav>

          {/* Badge */}
          <motion.span
            variants={item}
            className="mt-5 flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-200 sm:text-sm"
          >
            <span className="h-0.5 w-8 rounded-full bg-sky-300" />
            {BADGE}
          </motion.span>

          {/* Heading */}
          <motion.h1
            variants={item}
            className="mt-4 text-3xl font-medium leading-[1.15] tracking-tight sm:text-4xl lg:text-6xl"
          >
            {HEADING_TOP}{" "}
            <span className="bg-linear-to-r from-sky-300 via-white to-sky-200 bg-clip-text text-transparent">
              {HEADING_HIGHLIGHT}
            </span>{" "}
            {HEADING_BOTTOM}
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={item}
            className="mt-4 max-w-xl text-sm leading-relaxed text-blue-50/90 sm:text-base lg:text-lg"
          >
            {SUBTEXT}
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={item}
            className="mt-7 flex flex-col gap-3 sm:flex-row sm:gap-4"
          >
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#0A2A6B] shadow-xl shadow-black/30 transition hover:scale-[1.03]"
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
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-bold backdrop-blur-md transition hover:border-white hover:bg-white/20"
            >
              <Phone size={18} />
              {PHONE}
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* ---------- Bottom wave ---------- */}
      <Wave />
    </section>
  );
}