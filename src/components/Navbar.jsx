import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone, Mail, MapPin, ArrowRight, MessageCircle } from "lucide-react";

/* ---------- Content (client ka data aane par yahin badalna) ---------- */
const PHONE = "+91 98765 43210";
const PHONE_LINK = "+919876543210";
const WHATSAPP = "919876543210";
const EMAIL = "info@arsdewatering.com";
const LOCATION = "Chhatarpur (M.P.)";
const BRAND = "ARS";
const BRAND_TAG = "Dewatering Contractor";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  // Scroll par navbar ka style change
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Page change par mobile menu band + page top par
  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  // Menu khula ho to body scroll lock
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* ---------- Top info bar (sirf desktop, scroll par hide) ---------- */}
      <div
        className={`hidden overflow-hidden bg-[#0A2A6B] text-white transition-all duration-500 lg:block ${
          scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
        }`}
      >
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-6 text-[13px]">
          <div className="flex items-center gap-6 text-white/85">
            <span className="flex items-center gap-2">
              <MapPin size={14} className="text-sky-300" />
              {LOCATION}
            </span>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-2 transition hover:text-white"
            >
              <Mail size={14} className="text-sky-300" />
              {EMAIL}
            </a>
          </div>
          <a
            href={`tel:${PHONE_LINK}`}
            className="flex items-center gap-2 font-medium transition hover:text-sky-200"
          >
            <Phone size={14} className="text-sky-300" />
            Call Us: {PHONE}
          </a>
        </div>
      </div>

      {/* ---------- Main navbar ---------- */}
      <nav
        className={`relative border-b transition-all duration-300 ${
          scrolled
            ? "border-slate-200 bg-white/90 shadow-[0_8px_30px_rgba(10,42,107,0.10)] backdrop-blur-xl"
            : "border-transparent bg-white"
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-300 lg:px-6 ${
            scrolled ? "h-16" : "h-[72px]"
          }`}
        >
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-3">
            <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-[#0A2A6B] via-[#123C93] to-[#1D5FD1] shadow-md transition-transform duration-300 group-hover:scale-105">
              <span className="text-[17px] font-extrabold tracking-wide text-white">
                {BRAND}
              </span>
              {/* silver shine */}
              <span className="absolute -left-6 top-0 h-full w-4 rotate-12 bg-white/30 blur-[2px] transition-all duration-700 group-hover:left-14" />
            </div>
            <div className="leading-tight">
              <p className="text-lg font-extrabold tracking-tight text-[#0A2A6B]">
                {BRAND}
              </p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                {BRAND_TAG}
              </p>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `relative block px-4 py-2 text-[15px] font-semibold transition-colors ${
                      isActive
                        ? "text-[#1747B0]"
                        : "text-slate-700 hover:text-[#1747B0]"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute inset-x-4 -bottom-0.5 h-[3px] rounded-full bg-gradient-to-r from-[#1747B0] to-sky-400"
                          transition={{ type: "spring", stiffness: 400, damping: 32 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${PHONE_LINK}`}
              aria-label="Call us"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-[#0A2A6B] transition hover:border-[#1747B0] hover:bg-[#1747B0] hover:text-white"
            >
              <Phone size={18} />
            </a>
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#0A2A6B] to-[#1747B0] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-900/20 transition-all hover:shadow-xl hover:shadow-blue-900/30"
            >
              <span className="relative z-10">Get Free Quote</span>
              <ArrowRight
                size={16}
                className="relative z-10 transition-transform group-hover:translate-x-1"
              />
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-sky-500 to-[#1747B0] transition-transform duration-500 group-hover:translate-x-0" />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-[#0A2A6B] transition active:scale-95 lg:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? "close" : "menu"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {open ? <X size={22} /> : <Menu size={22} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>

        {/* ---------- Mobile menu ---------- */}
        <AnimatePresence>
          {open && (
            <>
              {/* backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpen(false)}
                className="fixed inset-0 top-[72px] -z-10 bg-slate-900/40 backdrop-blur-sm lg:hidden"
              />

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden border-t border-slate-100 bg-white lg:hidden"
              >
                <div className="max-h-[calc(100vh-72px)] overflow-y-auto px-5 pb-6 pt-3">
                  <ul className="space-y-1">
                    {NAV_LINKS.map((link, i) => (
                      <motion.li
                        key={link.to}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.05 * i + 0.1 }}
                      >
                        <NavLink
                          to={link.to}
                          end={link.to === "/"}
                          className={({ isActive }) =>
                            `flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-semibold transition ${
                              isActive
                                ? "bg-blue-50 text-[#1747B0]"
                                : "text-slate-700 hover:bg-slate-50"
                            }`
                          }
                        >
                          {link.label}
                          <ArrowRight size={16} className="opacity-50" />
                        </NavLink>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.div
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mt-5 grid grid-cols-2 gap-3"
                  >
                    <a
                      href={`tel:${PHONE_LINK}`}
                      className="flex items-center justify-center gap-2 rounded-xl bg-[#0A2A6B] py-3.5 text-sm font-bold text-white active:scale-95"
                    >
                      <Phone size={16} /> Call Now
                    </a>
                    <a
                      href={`https://wa.me/${WHATSAPP}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3.5 text-sm font-bold text-white active:scale-95"
                    >
                      <MessageCircle size={16} /> WhatsApp
                    </a>
                  </motion.div>

                  <p className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500">
                    <MapPin size={13} /> {LOCATION}
                  </p>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}