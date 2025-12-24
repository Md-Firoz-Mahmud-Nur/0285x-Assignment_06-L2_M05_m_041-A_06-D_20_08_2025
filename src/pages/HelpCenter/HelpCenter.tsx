"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { HelpCircle, Package, Search } from "lucide-react";
import { useState } from "react";

const faqSections = [
  {
    id: "tracking",
    title: "Tracking & Status",
    icon: Package,
    faqs: [
      {
        q: "How do I track my parcel?",
        a: "Go to the Parcel Tracking page, enter your tracking ID (for example, TRK-20250820-000001), and you will see real-time status updates and a full status timeline for your shipment.",
      },
      {
        q: "My tracking status is not updating. What should I do?",
        a: "Some carriers update status in batches. If your status has not changed for more than 24–48 hours, contact support with your tracking ID so the team can investigate with the delivery partner.",
      },
      {
        q: "What does 'In Transit' / 'Out for Delivery' / 'Delivered' mean?",
        a: "In Transit means the parcel is moving between facilities. Out for Delivery means it is on a vehicle heading to the destination. Delivered means the parcel has been successfully handed over at the delivery address.",
      },
    ],
  },
  {
    id: "sending",
    title: "Sending Parcels",
    icon: HelpCircle,
    faqs: [
      {
        q: "How do I create a new parcel?",
        a: "If you are a sender, go to the Create Parcel page from your dashboard, fill in the pickup and delivery addresses, parcel type, weight, and confirm the booking to generate a tracking ID.",
      },
      {
        q: "Can I change the delivery address after booking?",
        a: "Address changes are sometimes possible before the parcel is dispatched. Open your parcel details page and use the Edit option if available, or contact support with the tracking ID and new address.",
      },
    ],
  },
  {
    id: "account",
    title: "Account & Roles",
    icon: HelpCircle,
    faqs: [
      {
        q: "What is the difference between Sender, Receiver, and Admin?",
        a: "Senders create and manage parcels, Receivers view incoming parcels and delivery history, and Admins have full control over parcels, users, and system configuration.",
      },
      {
        q: "How do I see only my parcels?",
        a: "If you are logged in as a sender or receiver, open the dashboard and use the My Parcels or Delivery History pages to view shipments linked to your account email.",
      },
    ],
  },
];

export default function HelpCenter() {
  const [query, setQuery] = useState("");

  const normalizedQuery = query.toLowerCase().trim();

  const filteredSections = faqSections.map((section) => ({
    ...section,
    faqs: section.faqs.filter(
      (faq) =>
        !normalizedQuery ||
        faq.q.toLowerCase().includes(normalizedQuery) ||
        faq.a.toLowerCase().includes(normalizedQuery),
    ),
  }));

  const hasResults = filteredSections.some((s) => s.faqs.length > 0);

  return (
    <section className="mt-10 min-h-screen bg-linear-to-br from-sky-50 via-white to-cyan-50 px-4 py-10 md:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
            <Badge variant="outline" className="border-sky-300 text-sky-700">
              Help Center
            </Badge>
            <span>Find answers about parcels, tracking, and your account</span>
          </div>
          <h1 className="mt-4 bg-linear-to-r from-sky-600 via-cyan-500 to-blue-700 bg-clip-text text-3xl font-black text-transparent md:text-5xl">
            How can we help you?
          </h1>
          <p className="mt-3 text-sm text-slate-600 md:text-base">
            Search FAQs or browse common topics about sending, receiving, and
            tracking parcels.
          </p>

          <div className="mt-6 flex items-center justify-center">
            <div className="relative w-full max-w-xl">
              <Search className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search: e.g. change address, tracking not updating..."
                className="h-11 rounded-xl border-sky-200 bg-white pl-9 shadow-sm focus-visible:ring-sky-400"
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {!hasResults && (
            <div className="rounded-2xl border border-amber-100 bg-amber-50 px-4 py-3 text-sm text-amber-800">
              No results found for “{query}”. Try different keywords or browse
              the topics below.
            </div>
          )}

          {filteredSections.map((section) =>
            section.faqs.length === 0 ? null : (
              <div
                key={section.id}
                className="rounded-2xl border border-sky-100 bg-white/80 p-4 shadow-sm"
              >
                <div className="mb-3 flex items-center gap-2">
                  <section.icon className="h-5 w-5 text-sky-600" />
                  <h2 className="text-sm font-semibold text-slate-900">
                    {section.title}
                  </h2>
                </div>
                <Accordion type="single" collapsible className="w-full">
                  {section.faqs.map((faq, idx) => (
                    <AccordionItem key={idx} value={`${section.id}-${idx}`}>
                      <AccordionTrigger className="text-left text-sm">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-xs text-slate-700">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
