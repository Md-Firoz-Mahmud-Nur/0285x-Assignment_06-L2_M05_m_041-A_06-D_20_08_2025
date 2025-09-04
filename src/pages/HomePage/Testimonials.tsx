"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

import { Quote, Star } from "lucide-react";

const Testimonials = () => {
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

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Small Business Owner",
      content:
        "ParcelExpress has transformed how I ship products to my customers. Fast, reliable, and affordable!",
      rating: 5,
      avatar: "/professional-woman-smiling.png",
    },
    {
      name: "Michael Chen",
      role: "E-commerce Manager",
      content:
        "The tracking system is incredible. My customers always know exactly where their packages are.",
      rating: 5,
      avatar: "/professional-man-glasses.png",
    },
    {
      name: "Emily Rodriguez",
      role: "Freelancer",
      content:
        "I've tried many delivery services, but ParcelExpress consistently delivers on time, every time.",
      rating: 5,
      avatar: "/young-professional-woman.png",
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
          <Badge className="mb-4 border-blue-200 bg-linear-to-r from-blue-100 to-cyan-100 px-4 py-1.5 text-sm font-semibold text-blue-700 hover:from-blue-200 hover:to-cyan-200">
            Customer Stories
          </Badge>
          <h2 className="mb-4 text-4xl font-bold text-balance md:text-5xl">
            What Our{" "}
            <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Customers
            </span>{" "}
            Say
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-xl text-pretty">
            Join thousands of satisfied customers who trust us with their
            deliveries
          </p>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-3"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="group relative h-full transform overflow-hidden border-2 border-blue-200 bg-white shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
                <div className="absolute inset-0 -z-10 bg-linear-to-br from-blue-400 via-cyan-400 to-blue-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                <div className="absolute inset-0.5 z-0 rounded-lg bg-white"></div>

                <div className="absolute top-0 right-0 h-24 w-24 rounded-bl-full bg-linear-to-br from-blue-500/10 to-cyan-500/10"></div>

                <CardContent className="relative z-10 p-8">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-linear-to-br from-cyan-400 to-blue-500 opacity-50 blur-md"></div>
                      <div className="relative rounded-full bg-linear-to-br from-cyan-500 to-blue-600 p-3">
                        <Quote className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-yellow-400 text-yellow-400 drop-shadow-sm"
                        />
                      ))}
                    </div>
                  </div>

                  <p className="mb-8 text-lg leading-relaxed text-pretty text-slate-700 italic">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center border-t border-blue-100 pt-6">
                    <div className="relative">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="relative mr-4 h-14 w-14 rounded-full border-2 border-white object-cover shadow shadow-blue-400"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-800">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm font-medium text-blue-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
