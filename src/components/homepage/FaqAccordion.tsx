"use client";

import { useState } from "react";
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
          >
            <span className="font-semibold text-parchment">{item.question}</span>
            <span className="shrink-0 text-cinnamon text-xl">{open === i ? "−" : "+"}</span>
          </button>
          {open === i && (
            <p className="pb-5 text-khaki leading-relaxed text-sm">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}
