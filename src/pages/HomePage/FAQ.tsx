"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How can I track my parcel?",
    a: "You can track your parcel in real-time from the Track Parcel section using your tracking ID.",
  },
  {
    q: "Do you provide international delivery?",
    a: "Yes, we deliver to over 200 countries with customs support.",
  },
  {
    q: "Is my parcel insured?",
    a: "All parcels are insured, and additional coverage is available for valuable items.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept cards, mobile banking, and cash-on-delivery (selected areas).",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-linear-to-b from-blue-100 via-white to-cyan-100 py-20">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="mb-10 text-center text-4xl font-bold">
          Frequently Asked{" "}
          <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Questions
          </span>
        </h2>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="rounded-xl border border-blue-200 bg-white shadow-md"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between p-5 text-left font-semibold"
              >
                {f.q}
                <ChevronDown
                  className={`transition ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-gray-600">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
