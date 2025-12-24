"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Briefcase, Home, Store } from "lucide-react";

const categories = [
  {
    icon: Home,
    title: "Personal parcels",
    desc: "Gift boxes, documents, and personal items to friends and family.",
  },
  {
    icon: Store,
    title: "Online sellers",
    desc: "Ship orders to customers with tracking and proof of delivery.",
  },
  {
    icon: Briefcase,
    title: "Business logistics",
    desc: "Scheduled pickups and bulk shipments for growing companies.",
  },
];

export default function Categories() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Built for every sender
          </h2>
          <p className="mt-2 text-slate-600">
            From personal deliveries to full-scale business logistics.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-1 text-lg font-semibold text-slate-900">
                    {c.title}
                  </h3>
                  <p className="text-sm text-slate-600">{c.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
