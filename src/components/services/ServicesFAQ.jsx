import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Phone, MessageCircle, HelpCircle } from "lucide-react";

/* ---------- Content (update when client data arrives) ---------- */
const PHONE = "+91 63988 83191";
const PHONE_LINK = "+916398883191";
const WHATSAPP = "916398883191";
const WHATSAPP_MESSAGE = "Hello, I have a question about your dewatering services.";

const EYEBROW = "FAQ";
const HEADING = "Frequently Asked Questions";
const SUBTEXT =
  "Quick answers to the questions we hear most from builders and site owners. Can not find yours? Just call or message us.";

// Confirm answers with the client before going live
const FAQS = [
  {
    q: "What is dewatering and why does my site need it?",
    a: "Dewatering is the removal of groundwater or surface water from a construction site. If water collects in a foundation, basement or trench, it can weaken the soil, delay work and affect the quality of concrete. Dewatering keeps the excavation dry and stable so work can continue safely.",
  },
  {
    q: "How do I know which dewatering method is right for my site?",
    a: "The right method depends on the depth of the excavation, the type of soil and how much water is coming in. Our engineer checks these during a site visit and then recommends the most practical and cost effective option.",
  },
  {
    q: "How long does a dewatering job take?",
    a: "It depends on the size of the site and the method used. A small sump pump setup can be ready quickly, while a deep well system needs more time for installation. After the site visit we share a clear plan and timeline.",
  },
  {
    q: "How is the cost decided?",
    a: "The cost depends on excavation depth, soil type, water inflow, duration of work, the equipment needed, and power or fuel requirements. We give a clear quote after inspecting your site, with no hidden charges.",
  },
  {
    q: "Do you provide pumps on rent without the full service?",
    a: "Yes. If your team can handle the setup, you can take pumps, hoses and accessories on rent. Short term and long term options are available, and our team can guide you on the right capacity.",
  },
  {
    q: "Can you help in an emergency, like a flooded basement?",
    a: "Yes, call us as soon as you notice the problem. We will try to arrange equipment and a team on priority so that water is cleared and your work can resume as early as possible.",
  },
  {
    q: "Which areas do you serve?",
    a: "We work in Chhatarpur and nearby districts. If your site is outside this region, call us and we will let you know if we can support it.",
  },
  {
    q: "What do I need to arrange at the site?",
    a: "Mainly safe access for our equipment, a power or fuel point where required, and a proper place to discharge the pumped water. Our team will explain the exact requirements during the site visit.",
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

const listContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const listItem = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/* ---------- Component ---------- */
export default function ServicesFAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28">
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

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-12 lg:items-start lg:gap-14 lg:px-6">
        {/* ---------- Left: heading + help card ---------- */}
        <div className="lg:col-span-5">
          <div>
            <motion.div
              variants={headerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
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
                {SUBTEXT}
              </motion.p>
            </motion.div>

            {/* Help card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="relative mt-8 overflow-hidden rounded-3xl bg-linear-to-br from-[#061538] via-[#0A2A6B] to-[#1747B0] p-6 text-white shadow-2xl shadow-blue-900/25 sm:p-7"
            >
              <motion.span
                className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-sky-400/25 blur-2xl"
                animate={{ x: [0, -25, 0], y: [0, 25, 0], scale: [1, 1.25, 1] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="relative">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md">
                  <HelpCircle size={24} />
                </span>
                <h3 className="mt-4 text-xl font-medium">
                  Still have a question?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-blue-100/85">
                  Talk to our team directly and get a clear answer for your
                  site.
                </p>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                  <a
                    href={`tel:${PHONE_LINK}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#0A2A6B] shadow-lg transition hover:scale-[1.03]"
                  >
                    <Phone size={16} />
                    {PHONE}
                  </a>
                  <a
                    href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                      WHATSAPP_MESSAGE
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:scale-[1.03] hover:bg-emerald-400"
                  >
                    <MessageCircle size={16} />
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ---------- Right: accordion ---------- */}
        <motion.div
          variants={listContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-4 lg:col-span-7"
        >
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={f.q}
                variants={listItem}
                className={`relative overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                  isOpen
                    ? "border-sky-300 shadow-xl shadow-blue-900/10"
                    : "border-slate-200 shadow-sm hover:border-sky-200 hover:shadow-md"
                }`}
              >
                {/* Left accent bar */}
                <span
                  className={`absolute inset-y-0 left-0 w-1 bg-linear-to-b from-[#1747B0] to-sky-400 transition-opacity duration-300 ${
                    isOpen ? "opacity-100" : "opacity-0"
                  }`}
                />

                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-7"
                >
                  <span
                    className={`flex size-9 shrink-0 items-center justify-center rounded-xl text-sm font-bold transition-colors duration-300 ${
                      isOpen
                        ? "bg-linear-to-br from-[#1747B0] to-sky-500 text-white"
                        : "bg-blue-50 text-[#1747B0]"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span
                    className={`flex-1 text-base font-semibold transition-colors duration-300 sm:text-lg ${
                      isOpen ? "text-[#1747B0]" : "text-[#0A2A6B]"
                    }`}
                  >
                    {f.q}
                  </span>

                  <span
                    className={`flex size-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "rotate-45 bg-[#1747B0] text-white"
                        : "bg-slate-100 text-[#0A2A6B]"
                    }`}
                  >
                    <Plus size={18} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-6 pl-5 text-sm leading-relaxed text-slate-600 sm:px-7 sm:pl-20 sm:text-base">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}