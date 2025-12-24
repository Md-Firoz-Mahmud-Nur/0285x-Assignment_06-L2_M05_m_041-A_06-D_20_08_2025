"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Clock, DollarSign, ShieldCheck } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const features = [
  {
    icon: Clock,
    title: "On-time delivery",
    description: "Guaranteed delivery windows and real-time status updates.",
  },
  {
    icon: ShieldCheck,
    title: "Secure handling",
    description: "Tamper-proof packaging and insured shipments.",
  },
  {
    icon: DollarSign,
    title: "Transparent pricing",
    description: "No hidden fees, clear cost breakdown before booking.",
  },
];

export default function Features() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-10 text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Badge className="mb-3 bg-blue-50 text-blue-700">Features</Badge>
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Everything you need in one service
          </h2>
          <p className="mt-2 text-slate-600">
            Designed for senders, receivers, and admins to manage deliveries
            with ease.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-3"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {features.map((f, i) => (
            <motion.div key={i} variants={fadeInUp}>
              <Card className="h-full border-blue-100 bg-blue-50/40 shadow-sm">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-1 text-lg font-semibold text-slate-900">
                    {f.title}
                  </h3>
                  <p className="text-sm text-slate-600">{f.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
