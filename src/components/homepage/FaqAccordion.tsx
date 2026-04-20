"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Faq } from "@/types/sanity";

export default function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="divide-y divide-pine-teal">
      {faqs.map((item, i) => (
        <div key={item._id}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between py-5 text-left gap-4"
            aria-expanded={open === i}
          >
            <span className="font-semibold text-parchment">{item.question}</span>
            <motion.span
              className="shrink-0 text-cinnamon text-xl select-none"
              animate={{ rotate: open === i ? 45 : 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              +
            </motion.span>
          </button>

          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{ overflow: "hidden" }}
              >
                <p className="pb-5 text-khaki leading-relaxed text-sm">{item.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
