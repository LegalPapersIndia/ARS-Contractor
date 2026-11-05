import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, MessageCircle, ArrowUp } from "lucide-react";

/* ---------- Content (update when client data arrives) ---------- */
const PHONE_LINK = "+916398883191";
const WHATSAPP = "916398883191";
const WHATSAPP_MESSAGE =
  "Hello, I would like to know more about your dewatering services.";

export default function FloatingContact() {
  const [showTop, setShowTop] = useState(false);

  // Show the back-to-top button only after scrolling down
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            key="top"
            initial={{ opacity: 0, scale: 0.6, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 10 }}
            transition={{ duration: 0.2 }}
            onClick={scrollTop}
            aria-label="Back to top"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#0A2A6B] shadow-lg ring-1 ring-slate-200 transition hover:-translate-y-1 hover:bg-slate-50"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Call button */}
      <motion.a
        href={`tel:${PHONE_LINK}`}
        aria-label="Call us now"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
        className="group relative flex items-center"
      >
        {/* Tooltip label (desktop hover) */}
        <span className="pointer-events-none absolute right-full mr-3 hidden translate-x-2 whitespace-nowrap rounded-full bg-[#0A2A6B] px-4 py-2 text-xs font-semibold text-white opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:block">
          Call Now
        </span>

        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br from-[#0A2A6B] to-[#1747B0] text-white shadow-xl shadow-blue-900/30 transition-transform duration-300 group-hover:scale-110 group-active:scale-95">
          <Phone size={22} />
        </span>
      </motion.a>

      {/* WhatsApp button */}
      <motion.a
        href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
          WHATSAPP_MESSAGE
        )}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.5, ease: "easeOut" }}
        className="group relative flex items-center"
      >
        {/* Tooltip label (desktop hover) */}
        <span className="pointer-events-none absolute right-full mr-3 hidden translate-x-2 whitespace-nowrap rounded-full bg-emerald-600 px-4 py-2 text-xs font-semibold text-white opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:block">
          Chat on WhatsApp
        </span>

        <span className="relative flex h-14 w-14 items-center justify-center">
          {/* Ripple pulse */}
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
          <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl shadow-emerald-600/30 transition-transform duration-300 group-hover:scale-110 group-active:scale-95">
            <MessageCircle size={26} />
          </span>
        </span>
      </motion.a>
    </div>
  );
}