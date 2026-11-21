import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Clock,
  FileText,
  Home,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";

/* ---------- Content (client ke saath ek baar review kar lena) ---------- */
const PHONE = "+91 63988 83191";
const PHONE_LINK = "+916398883191";
const WHATSAPP = "916398883191";
const EMAIL = "rajpootarvind5390@gmail.com";
const LAST_UPDATED = "21 November 2026";

const TITLE = "Terms & Conditions";
const INTRO =
  "The terms that apply when you use this website and when you work with ARS Dewatering Contractor.";

const SECTIONS = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    blocks: [
      {
        p: 'By using this website or contacting ARS Dewatering Contractor ("ARS", "we", "us"), you agree to these terms. If you do not agree, please do not use the website.',
      },
    ],
  },
  {
    id: "our-services",
    title: "About Our Services",
    blocks: [
      {
        p: "ARS provides dewatering services for construction sites. The information on this website is for general guidance. It is not an offer or a contract.",
      },
    ],
  },
  {
    id: "quotations",
    title: "Quotations and Agreements",
    blocks: [
      {
        p: "We give a quotation after we understand your site. The quotation may change if the actual site conditions differ from what was described.",
      },
      {
        p: "Work begins only after the quotation or work order is accepted by both sides. The scope of work, price, timeline and any guarantee or warranty are as stated in the written quotation or agreement.",
      },
    ],
  },
  {
    id: "client-responsibilities",
    title: "Your Responsibilities",
    blocks: [
      { p: "To help us do the work safely and on time, we ask you to:" },
      {
        list: [
          "Give us accurate information about the site and the problem",
          "Provide safe access for our people and equipment",
          "Provide a power or fuel point where it is needed",
          "Arrange a proper place to discharge the pumped water, with any permissions required",
          "Tell us about underground services and any hazards on the site",
        ],
      },
    ],
  },
  {
    id: "payments",
    title: "Payments",
    blocks: [
      {
        p: "Payment terms are as agreed in the quotation or work order. Delay in payment may affect the continuation of the work.",
      },
    ],
  },
  {
    id: "timelines",
    title: "Timelines and Site Conditions",
    blocks: [
      {
        p: "Timelines we share are estimates. Groundwater, soil, rain, power supply and site access can affect progress. We will keep you informed if the plan needs to change.",
      },
    ],
  },
  {
    id: "equipment",
    title: "Equipment on Site",
    blocks: [
      {
        p: "Equipment supplied by ARS remains our property. Please keep it safe on site and tell us immediately about any damage or loss. Charges for loss or damage may apply as agreed.",
      },
    ],
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    blocks: [
      {
        p: "To the extent permitted by law, ARS is not liable for indirect or consequential losses, or for delays caused by conditions beyond our reasonable control. Our responsibility for any job is limited to what is stated in the written agreement.",
      },
    ],
  },
  {
    id: "website-use",
    title: "Use of This Website",
    blocks: [
      {
        list: [
          "Please do not misuse the website or try to harm it or its users",
          "The text, images and logo on this website belong to ARS",
          "Please do not copy or reuse them without our written permission",
        ],
      },
    ],
  },
  {
    id: "third-party",
    title: "Third-Party Links and Services",
    blocks: [
      {
        p: "This website may link to or use services from other companies, such as Google Maps and WhatsApp. We are not responsible for their content or policies.",
      },
    ],
  },
  {
    id: "governing-law",
    title: "Governing Law",
    blocks: [
      {
        p: "These terms are governed by the laws of India. Any dispute will be subject to the courts at Chhatarpur, Madhya Pradesh.",
      },
    ],
  },
  {
    id: "changes",
    title: "Changes to These Terms",
    blocks: [
      {
        p: "We may update these terms from time to time. The latest version will always be on this page, with the date it was last updated.",
      },
    ],
  },
];

/* ---------- Animation variants ---------- */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
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
        className="absolute inset-x-0 bottom-0 flex h-9 w-[200%] text-sky-300/30 sm:h-14"
        animate={{ x: ["-50%", "0%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {shape}
        {shape}
      </motion.div>
      <motion.div
        className="relative flex h-6 w-[200%] text-white sm:h-10"
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
export default function TermsConditions() {
  return (
    <>
      {/* ---------- Banner ---------- */}
      <section className="relative isolate overflow-hidden bg-linear-to-br from-[#061538] via-[#0A2A6B] to-[#1747B0] pb-24 pt-14 text-white sm:pb-28 sm:pt-16 lg:pb-32">
        <div
          className="absolute inset-0 -z-10 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <motion.div
          className="absolute -left-24 top-0 -z-10 size-96 rounded-full bg-sky-500/25 blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-7xl px-5 lg:px-6"
        >
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
            <span className="font-semibold text-white">{TITLE}</span>
          </motion.nav>

          <motion.div variants={item} className="mt-6 flex items-center gap-4">
            <span className="flex size-14 items-center justify-center rounded-2xl bg-linear-to-br from-sky-400 to-blue-600 shadow-xl shadow-blue-900/40">
              <FileText size={28} />
            </span>
            <h1 className="text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
              {TITLE}
            </h1>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-4 max-w-2xl text-sm leading-relaxed text-blue-50/90 sm:text-base lg:text-lg"
          >
            {INTRO}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-sky-100 backdrop-blur-md"
          >
            <Clock size={14} />
            Last updated: {LAST_UPDATED}
          </motion.p>
        </motion.div>

        <Wave />
      </section>

      {/* ---------- Content ---------- */}
      <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
        <div className="pointer-events-none absolute -right-40 top-0 size-md rounded-full bg-sky-100/70 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-start gap-10 px-5 lg:grid-cols-12 lg:gap-12 lg:px-6">
          {/* Table of contents */}
          <aside className="lg:col-span-4">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 lg:sticky lg:top-32">
              <p className="text-xs font-bold uppercase tracking-widest text-[#1747B0]">
                On this page
              </p>
              <ul className="mt-4 space-y-1">
                {SECTIONS.map((s, i) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="group flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-white hover:text-[#0A2A6B] hover:shadow-sm"
                    >
                      <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-[11px] font-bold text-[#1747B0] transition group-hover:bg-[#1747B0] group-hover:text-white">
                        {i + 1}
                      </span>
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Terms text */}
          <article className="lg:col-span-8">
            <div className="space-y-10">
              {SECTIONS.map((s) => (
                <motion.section
                  key={s.id}
                  id={s.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="scroll-mt-24 lg:scroll-mt-32"
                >
                  <h2 className="flex items-center gap-3 text-xl font-semibold text-[#0A2A6B] sm:text-2xl">
                    <span className="h-6 w-1 rounded-full bg-linear-to-b from-[#1747B0] to-sky-400" />
                    {s.title}
                  </h2>

                  {s.blocks.map((b, i) =>
                    b.p ? (
                      <p
                        key={i}
                        className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base"
                      >
                        {b.p}
                      </p>
                    ) : (
                      <ul key={i} className="mt-3 space-y-2">
                        {b.list.map((li) => (
                          <li
                            key={li}
                            className="flex items-start gap-3 text-sm leading-relaxed text-slate-600 sm:text-base"
                          >
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#1747B0]" />
                            {li}
                          </li>
                        ))}
                      </ul>
                    )
                  )}
                </motion.section>
              ))}

              {/* Contact card */}
              <motion.section
                id="contact"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative scroll-mt-24 overflow-hidden rounded-3xl bg-linear-to-br from-[#061538] via-[#0A2A6B] to-[#1747B0] p-7 text-white shadow-2xl shadow-blue-900/25 sm:p-9 lg:scroll-mt-32"
              >
                <motion.span
                  className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-sky-400/25 blur-3xl"
                  animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="relative">
                  <h2 className="text-xl font-semibold sm:text-2xl">
                    Questions About These Terms?
                  </h2>
                  <p className="mt-2 text-sm text-blue-100/85 sm:text-base">
                    ARS Dewatering Contractor, Chhatarpur (M.P.). Contact us
                    and we will be happy to help.
                  </p>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <a
                      href={`tel:${PHONE_LINK}`}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#0A2A6B] shadow-lg transition hover:scale-[1.03]"
                    >
                      <Phone size={16} />
                      {PHONE}
                    </a>
                    <a
                      href={`https://wa.me/${WHATSAPP}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-bold shadow-lg transition hover:scale-[1.03] hover:bg-emerald-400"
                    >
                      <MessageCircle size={16} />
                      WhatsApp
                    </a>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-bold transition hover:border-white hover:bg-white/15"
                    >
                      <Mail size={16} />
                      <span className="break-all">{EMAIL}</span>
                    </a>
                  </div>
                </div>
              </motion.section>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}