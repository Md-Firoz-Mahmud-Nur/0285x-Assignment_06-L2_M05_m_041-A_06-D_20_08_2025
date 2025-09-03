"use client";

import { CheckCircle, Globe, Shield, Truck, Zap } from "lucide-react";
import type React from "react";
import { useState } from "react";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  features: string[];
  color: string;
  gradient: string;
}

const WhyChooseUs = () => {
  const [activeService, setActiveService] = useState<number>(0);

  const services: Service[] = [
    {
      id: 1,
      title: "Express Delivery",
      description:
        "Lightning-fast delivery for urgent packages with live tracking and priority handling.",
      icon: Zap,
      features: [
        "Same-day delivery",
        "2-hour time slots",
        "Priority handling",
        "Real-time tracking",
      ],
      color: "text-cyan-600",
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      id: 2,
      title: "Standard Shipping",
      description:
        "Reliable and cost-effective shipping solution for your everyday deliveries.",
      icon: Truck,
      features: [
        "3-5 business days",
        "Secure packaging",
        "Insurance included",
        "Proof of delivery",
      ],
      color: "text-blue-600",
      gradient: "from-blue-400 to-indigo-500",
    },
    {
      id: 3,
      title: "International Delivery",
      description:
        "Deliver anywhere in the world with customs support and global tracking.",
      icon: Globe,
      features: [
        "Worldwide coverage",
        "Customs clearance",
        "Multi-language support",
        "Currency flexibility",
      ],
      color: "text-indigo-600",
      gradient: "from-indigo-400 to-purple-500",
    },
    {
      id: 4,
      title: "Secure Transport",
      description:
        "Safeguard your valuable and sensitive items with enhanced security logistics.",
      icon: Shield,
      features: [
        "Enhanced protection",
        "Signature verification",
        "Insurance up to $10K",
        "Chain of custody",
      ],
      color: "text-cyan-700",
      gradient: "from-blue-500 to-cyan-600",
    },
  ];

  const active = services[activeService];

  return (
    <section className="relative overflow-hidden bg-linear-to-br from-blue-50 via-cyan-50 to-blue-100 py-20">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 h-64 w-64 rounded-full bg-cyan-200/30 blur-3xl" />
        <div className="absolute right-1/3 bottom-0 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <h2 className="mb-14 text-center text-4xl font-bold text-gray-800 lg:text-5xl">
          <span className="bg-linear-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
            Why Choose Us?
          </span>
        </h2>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            {services.map((s, index) => (
              <div
                key={s.id}
                onClick={() => setActiveService(index)}
                className={`group flex cursor-pointer items-center gap-4 rounded-2xl border p-5 transition-all duration-300 ${
                  activeService === index
                    ? "border-transparent bg-linear-to-r from-blue-500 to-cyan-500 text-white shadow-xl"
                    : "border-gray-200 bg-white hover:border-blue-400 hover:shadow-md"
                }`}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-r ${s.gradient} text-white`}
                >
                  <s.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3
                    className={`font-semibold ${
                      activeService === index ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {s.title}
                  </h3>
                  <p
                    className={`text-sm ${
                      activeService === index
                        ? "text-gray-100"
                        : "text-gray-500 group-hover:text-gray-700"
                    }`}
                  >
                    {s.description.slice(0, 60)}...
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white/70 p-10 shadow-lg backdrop-blur-md transition-all duration-500">
            <div className="mb-6 flex items-center gap-4">
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-xl bg-linear-to-r ${active.gradient} text-white shadow-md`}
              >
                <active.icon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">
                {active.title}
              </h3>
            </div>

            <p className="mb-6 text-gray-700">{active.description}</p>

            <ul className="space-y-3">
              {active.features.map((f, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-linear-to-r from-blue-500 to-cyan-600 text-white">
                    <CheckCircle className="h-3 w-3" />
                  </div>
                  <span className="text-gray-700">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
