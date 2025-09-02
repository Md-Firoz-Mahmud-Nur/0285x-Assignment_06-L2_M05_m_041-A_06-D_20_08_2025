"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

import { CheckCircle, MapPin, Package, Truck } from "lucide-react";

const HowItWorks = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const steps = [
    {
      icon: Package,
      title: "Book Your Parcel",
      description: "Enter pickup and delivery details with just a few clicks",
    },
    {
      icon: Truck,
      title: "We Pickup",
      description:
        "Our delivery partner collects your parcel from your location",
    },
    {
      icon: MapPin,
      title: "Track in Transit",
      description: "Real-time tracking updates throughout the delivery journey",
    },
    {
      icon: CheckCircle,
      title: "Safe Delivery",
      description: "Your parcel reaches its destination securely and on time",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-linear-to-b from-blue-200 via-white to-cyan-100 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.1),transparent_50%)]"></div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          className="mb-16 text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Badge className="mb-4 border border-blue-200 bg-linear-to-r from-blue-100 to-cyan-100 px-4 py-1.5 text-sm font-semibold text-blue-700 shadow-sm hover:from-blue-200 hover:to-cyan-200">
            Simple Process
          </Badge>
          <h2 className="mb-4 text-4xl font-bold text-balance md:text-5xl">
            How It{" "}
            <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-xl text-pretty">
            Get your parcels in just four{" "}
            <span className="bg-linear-to-r from-blue-800 to-cyan-700 bg-clip-text font-semibold tracking-widest text-transparent">
              simple
            </span>{" "}
            steps
          </p>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="group relative h-full transform overflow-hidden border-2 border-blue-200 bg-linear-to-br from-white via-blue-50/30 to-cyan-50/50 shadow-xl backdrop-blur-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
                <div className="absolute inset-0 bg-linear-to-br from-blue-500/0 to-cyan-500/0 transition-all duration-500 group-hover:from-blue-500/5 group-hover:to-cyan-500/5"></div>

                <CardContent className="relative z-10 p-8 text-center">
                  <div className="relative mb-6">
                    <div className="relative mx-auto flex h-20 w-20 items-center justify-center overflow-hidden rounded-3xl bg-linear-to-br from-blue-500 via-blue-600 to-cyan-600 shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl">
                      <div className="absolute inset-0 bg-linear-to-tr from-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                      <step.icon className="relative z-10 h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-cyan-500 to-cyan-600 text-base font-bold text-white shadow-lg ring-4 ring-white transition-transform duration-300 group-hover:scale-110">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-slate-800 transition-colors duration-300 group-hover:text-blue-700">
                    {step.title}
                  </h3>
                  <p className="leading-relaxed text-balance text-gray-600">
                    {step.description}
                  </p>
                </CardContent>

                <div className="absolute right-0 bottom-0 left-0 h-1 scale-x-0 transform bg-linear-to-r from-blue-500 via-cyan-500 to-blue-500 transition-transform duration-500 group-hover:scale-x-100"></div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
