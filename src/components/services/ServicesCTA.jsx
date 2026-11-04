import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Phone,
  Send,
  CheckCircle2,
  MapPin,
  User,
  ChevronDown,
} from "lucide-react";
import ctaBg from "../../Asset/services/services-cta.png";

/* ---------- Content (update when client data arrives) ---------- */
const PHONE = "+91 63988 83191";
const PHONE_LINK = "+916398883191";
const WHATSAPP = "916398883191";
const LOCATION = "Chhatarpur (M.P.) and nearby districts";

const EYEBROW = "Request a Callback";
const HEADING = "Need Dewatering at Your Site?";
const SUBTEXT =
  "Share a few details and our team will get back to you with a free site visit and a clear quote.";

const POINTS = [
  "Free site visit and inspection",
  "Clear quote with no hidden charges",
  "Right method for your site",
];

const SERVICE_OPTIONS = [
  "Well Point Dewatering",
  "Deep Well Dewatering",
  "Sump Pump Dewatering",
  "Basement Water Removal",
  "Pump Rental",
  "Drainage Solutions",
  "Not sure, need advice",
];

/* ---------- Animation variants ---------- */
const textContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const inputClass =
  "w-full rounded-xl border border-white/20 bg-white/10 py-3.5 pl-11 pr-4 text-sm text-white placeholder:text-blue-100/60 outline-none transition focus:border-sky-300 focus:bg-white/15 focus:ring-4 focus:ring-sky-300/20";

/* ---------- Component ---------- */
export default function ServicesCTA() {
  const sectionRef = useRef(null);
  const [form, setForm] = useState({ name: "", phone: "", service: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  // Gentle parallax on the background image
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [-25, 25]);

  const update = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const digits = form.phone.replace(/\D/g, "").slice(-10);
    const next = {};
    if (form.name.trim().length < 2) next.name = "Please enter your name";
    if (!/^[6-9]\d{9}$/.test(digits))
      next.phone = "Enter a valid 10 digit mobile number";
    setErrors(next);
    if (Object.keys(next).length) return;

    const message = [
      "Hello, I would like a callback.",
      `Name: ${form.name.trim()}`,
      `Phone: ${digits}`,
      `Service: ${form.service || "Not selected"}`,
    ].join("\n");

    window.open(
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );

    setSent(true);
    setForm({ name: "", phone: "", service: "" });
    setTimeout(() => setSent(false), 6000);
  };

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-[#061538] py-20 text-white sm:py-24 lg:py-28"
    >
      {/* Background image with parallax */}
      <motion.img
        src={ctaBg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        style={{ y: bgY }}
        className="absolute inset-0 -z-20 size-full scale-110 object-cover"
      />

      {/* Overlays */}
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-[#061538]/90 via-[#0A2A6B]/70 to-[#0A2A6B]/40" />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-[#061538]/60 via-transparent to-[#061538]/30" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-6">
        {/* ---------- Left: content ---------- */}
        <motion.div
          variants={textContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-sky-200 backdrop-blur-md"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-sky-300 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-sky-300" />
            </span>
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
            className="mt-5 h-1 w-20 rounded-full bg-linear-to-r from-sky-300 to-white"
          />

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-lg text-base leading-relaxed text-blue-50/90 sm:text-lg"
          >
            {SUBTEXT}
          </motion.p>

          <motion.ul variants={textContainer} className="mt-7 space-y-3">
            {POINTS.map((p) => (
              <motion.li
                key={p}
                variants={fadeUp}
                className="flex items-center gap-3 text-sm font-medium text-white/90 sm:text-base"
              >
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-sky-400 to-blue-600">
                  <CheckCircle2 size={16} />
                </span>
                {p}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a
              href={`tel:${PHONE_LINK}`}
              className="group inline-flex items-center gap-3"
            >
              <span className="flex size-12 items-center justify-center rounded-full bg-white text-[#0A2A6B] shadow-lg transition-transform duration-300 group-hover:scale-110">
                <Phone size={20} />
              </span>
              <span className="leading-tight">
                <span className="block text-xs text-blue-100/70">
                  Prefer to call?
                </span>
                <span className="block text-lg font-semibold">{PHONE}</span>
              </span>
            </a>

            <span className="hidden h-10 w-px bg-white/20 sm:block" />

            <p className="flex items-center gap-2 text-sm text-blue-100/80">
              <MapPin size={16} className="shrink-0 text-sky-300" />
              {LOCATION}
            </p>
          </motion.div>
        </motion.div>

        {/* ---------- Right: callback form ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-4xl border border-white/20 bg-white/10 p-6 shadow-2xl shadow-black/30 backdrop-blur-2xl sm:p-8">
            <motion.span
              className="pointer-events-none absolute -right-12 -top-12 size-44 rounded-full bg-sky-400/25 blur-3xl"
              animate={{ x: [0, -25, 0], y: [0, 25, 0], scale: [1, 1.25, 1] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative">
              <h3 className="text-xl font-medium sm:text-2xl">
                Get a Free Callback
              </h3>
              <p className="mt-1 text-sm text-blue-100/80">
                Fill in your details, it takes less than a minute.
              </p>

              <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
                {/* Name */}
                <div>
                  <div className="relative">
                    <User
                      size={18}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sky-300"
                    />
                    <input
                      type="text"
                      value={form.name}
                      onChange={update("name")}
                      placeholder="Your name"
                      autoComplete="name"
                      aria-invalid={!!errors.name}
                      className={inputClass}
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-1.5 text-xs font-medium text-rose-300">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <div className="relative">
                    <Phone
                      size={18}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sky-300"
                    />
                    <input
                      type="tel"
                      inputMode="numeric"
                      value={form.phone}
                      onChange={update("phone")}
                      placeholder="Mobile number"
                      autoComplete="tel"
                      aria-invalid={!!errors.phone}
                      className={inputClass}
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1.5 text-xs font-medium text-rose-300">
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Service */}
                <div className="relative">
                  <Send
                    size={18}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sky-300"
                  />
                  <select
                    value={form.service}
                    onChange={update("service")}
                    className={`${inputClass} appearance-none pr-10`}
                  >
                    <option value="" className="bg-[#0A2A6B] text-white">
                      Select service (optional)
                    </option>
                    {SERVICE_OPTIONS.map((s) => (
                      <option key={s} value={s} className="bg-[#0A2A6B] text-white">
                        {s}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    size={18}
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-blue-100/70"
                  />
                </div>

                <button
                  type="submit"
                  className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-bold text-[#0A2A6B] shadow-xl shadow-black/20 transition hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span className="relative z-10">Request Callback</span>
                  <Send
                    size={16}
                    className="relative z-10 transition-transform group-hover:translate-x-1"
                  />
                  <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-sky-200 to-white transition-transform duration-500 group-hover:translate-x-0" />
                </button>

                <p className="text-center text-xs text-blue-100/60">
                  Your details open in WhatsApp and are sent only when you
                  press send there.
                </p>
              </form>

              <AnimatePresence>
                {sent && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="mt-4 flex items-center gap-3 rounded-xl border border-emerald-300/40 bg-emerald-400/15 px-4 py-3 text-sm font-medium text-emerald-100"
                  >
                    <CheckCircle2 size={18} className="shrink-0" />
                    WhatsApp opened. Press send there to share your request.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}