import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Send,
  User,
  ChevronDown,
  CheckCircle2,
  Building2,
} from "lucide-react";

/* ---------- Content (update when client data arrives) ---------- */
const PHONE = "+91 63988 83191";
const PHONE_LINK = "+916398883191";
const WHATSAPP = "916398883191";
const EMAIL = "info@arsdewatering.com";
const ADDRESS = "Main Road, Chhatarpur, Madhya Pradesh - 471001";
const TIMING = "Mon - Sat: 9:00 AM - 7:00 PM";

const EYEBROW = "Send an Enquiry";
const HEADING = "Tell Us About Your Site";
const SUBTEXT =
  "Share a few details and our team will contact you to arrange a free site visit and a clear quote.";

const SERVICE_OPTIONS = [
  "Well Point Dewatering",
  "Deep Well Dewatering",
  "Sump Pump Dewatering",
  "Basement Water Removal",
  "Pump Rental",
  "Drainage Solutions",
  "Not sure, need advice",
];

const INFO = [
  {
    icon: Phone,
    label: "Call Us",
    value: PHONE,
    href: `tel:${PHONE_LINK}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: PHONE,
    href: `https://wa.me/${WHATSAPP}`,
    external: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
  },
  {
    icon: MapPin,
    label: "Office Address",
    value: ADDRESS,
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: TIMING,
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

const infoContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};

const infoItem = {
  hidden: { opacity: 0, x: -25 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const inputBase =
  "w-full rounded-xl border bg-slate-50 py-3.5 pl-11 pr-4 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition focus:bg-white focus:ring-4";
const inputOk =
  "border-slate-200 focus:border-[#1747B0] focus:ring-sky-200/60";
const inputErr = "border-rose-300 focus:border-rose-400 focus:ring-rose-100";

const EMPTY = {
  name: "",
  phone: "",
  email: "",
  service: "",
  location: "",
  message: "",
};

/* ---------- Component ---------- */
export default function ContactMain() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

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
    if (form.email.trim() && !/^\S+@\S+\.\S+$/.test(form.email.trim()))
      next.email = "Enter a valid email address";

    setErrors(next);
    if (Object.keys(next).length) return;

    const lines = [
      "Hello, I would like to send an enquiry.",
      `Name: ${form.name.trim()}`,
      `Phone: ${digits}`,
      form.email.trim() && `Email: ${form.email.trim()}`,
      `Service: ${form.service || "Not selected"}`,
      form.location.trim() && `Site location: ${form.location.trim()}`,
      form.message.trim() && `Message: ${form.message.trim()}`,
    ].filter(Boolean);

    window.open(
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lines.join("\n"))}`,
      "_blank",
      "noopener,noreferrer"
    );

    setSent(true);
    setForm(EMPTY);
    setTimeout(() => setSent(false), 6000);
  };

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

        {/* ---------- Main card ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-14 grid overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-2xl shadow-blue-900/15 lg:grid-cols-5"
        >
          {/* ----- Left: info panel ----- */}
          <div className="relative isolate overflow-hidden bg-linear-to-br from-[#061538] via-[#0A2A6B] to-[#1747B0] p-7 text-white sm:p-10 lg:col-span-2">
            {/* Grid pattern */}
            <div
              className="absolute inset-0 -z-10 opacity-40"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            {/* Glow */}
            <motion.span
              className="absolute -left-10 -top-10 -z-10 size-56 rounded-full bg-sky-400/25 blur-3xl"
              animate={{ x: [0, 30, 0], y: [0, 25, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Ripples (bottom right) */}
            <div className="pointer-events-none absolute -bottom-20 -right-20 -z-10">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="absolute size-64 -translate-1/2 rounded-full border border-sky-300/30"
                  initial={{ scale: 0.4, opacity: 0 }}
                  animate={{ scale: [0.4, 1.6], opacity: [0.6, 0] }}
                  transition={{
                    duration: 6,
                    delay: i * 2,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md">
                <Building2 size={24} />
              </span>
              <h3 className="text-2xl font-medium">Contact Information</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-blue-100/80">
              Reach us in the way that suits you best. We usually respond
              quickly during working hours.
            </p>

            <motion.ul
              variants={infoContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-8 space-y-6"
            >
              {INFO.map((item) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-sky-200 ring-1 ring-white/15 transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-[#1747B0]">
                      <Icon size={20} />
                    </span>
                    <span className="min-w-0 leading-tight">
                      <span className="block text-xs font-semibold uppercase tracking-wider text-blue-100/60">
                        {item.label}
                      </span>
                      <span className="mt-1 block break-words text-sm font-medium sm:text-base">
                        {item.value}
                      </span>
                    </span>
                  </>
                );

                return (
                  <motion.li key={item.label} variants={infoItem}>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noreferrer" : undefined}
                        className="group flex items-center gap-4 transition-colors hover:text-sky-200"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="group flex items-center gap-4">
                        {content}
                      </div>
                    )}
                  </motion.li>
                );
              })}
            </motion.ul>
          </div>

          {/* ----- Right: form ----- */}
          <div className="p-7 sm:p-10 lg:col-span-3">
            <h3 className="text-2xl font-medium text-[#0A2A6B]">
              Get a Free Site Visit
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Fields marked with * are required.
            </p>

            <form onSubmit={handleSubmit} noValidate className="mt-7 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                {/* Name */}
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User
                      size={18}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#1747B0]"
                    />
                    <input
                      type="text"
                      value={form.name}
                      onChange={update("name")}
                      placeholder="Full name"
                      autoComplete="name"
                      aria-invalid={!!errors.name}
                      className={`${inputBase} ${
                        errors.name ? inputErr : inputOk
                      }`}
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-1.5 text-xs font-medium text-rose-500">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                    Mobile Number *
                  </label>
                  <div className="relative">
                    <Phone
                      size={18}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#1747B0]"
                    />
                    <input
                      type="tel"
                      inputMode="numeric"
                      value={form.phone}
                      onChange={update("phone")}
                      placeholder="10 digit number"
                      autoComplete="tel"
                      aria-invalid={!!errors.phone}
                      className={`${inputBase} ${
                        errors.phone ? inputErr : inputOk
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1.5 text-xs font-medium text-rose-500">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {/* Email */}
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                    Email (optional)
                  </label>
                  <div className="relative">
                    <Mail
                      size={18}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#1747B0]"
                    />
                    <input
                      type="email"
                      value={form.email}
                      onChange={update("email")}
                      placeholder="you@example.com"
                      autoComplete="email"
                      aria-invalid={!!errors.email}
                      className={`${inputBase} ${
                        errors.email ? inputErr : inputOk
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1.5 text-xs font-medium text-rose-500">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Service */}
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                    Service Needed
                  </label>
                  <div className="relative">
                    <Send
                      size={18}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#1747B0]"
                    />
                    <select
                      value={form.service}
                      onChange={update("service")}
                      className={`${inputBase} ${inputOk} appearance-none pr-10`}
                    >
                      <option value="">Select a service</option>
                      {SERVICE_OPTIONS.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      size={18}
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                  </div>
                </div>
              </div>

              {/* Site location */}
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                  Site Location
                </label>
                <div className="relative">
                  <MapPin
                    size={18}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#1747B0]"
                  />
                  <input
                    type="text"
                    value={form.location}
                    onChange={update("location")}
                    placeholder="Area or town where the site is"
                    className={`${inputBase} ${inputOk}`}
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                  Message
                </label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Tell us about your site, depth of excavation, or the problem you are facing"
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition focus:border-[#1747B0] focus:bg-white focus:ring-4 focus:ring-sky-200/60"
                />
              </div>

              <button
                type="submit"
                className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-linear-to-r from-[#0A2A6B] to-[#1747B0] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-blue-900/25 transition hover:shadow-xl hover:shadow-blue-900/30 active:scale-[0.99]"
              >
                <span className="relative z-10">Send Enquiry</span>
                <Send
                  size={16}
                  className="relative z-10 transition-transform group-hover:translate-x-1"
                />
                <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-sky-500 to-[#1747B0] transition-transform duration-500 group-hover:translate-x-0" />
              </button>

              <p className="text-center text-xs text-slate-500">
                Your details open in WhatsApp and are sent only when you press
                send there.
              </p>
            </form>

            <AnimatePresence>
              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="mt-5 flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700"
                >
                  <CheckCircle2 size={18} className="shrink-0" />
                  WhatsApp opened. Press send there to share your enquiry.
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}