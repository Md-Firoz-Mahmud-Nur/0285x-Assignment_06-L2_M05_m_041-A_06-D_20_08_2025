"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Package, Truck } from "lucide-react";

const HeroSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <section
      className="relative flex min-h-[90vh] items-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/hero-delivery-background.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/40 to-black/30"></div>

      <div className="absolute top-32 left-20 h-40 w-40 animate-pulse rounded-full bg-cyan-400/30 blur-3xl" />
      <div className="absolute right-16 bottom-28 h-52 w-52 animate-bounce rounded-full bg-sky-500/20 blur-3xl" />

      <div className="relative z-20 container mx-auto px-4 py-24 text-center md:py-32">
        <motion.div
          className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/10 p-10 shadow-[0_8px_60px_rgba(6,182,212,0.2)] backdrop-blur-lg"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <Badge className="mx-auto mb-6 border-0 bg-linear-to-r from-sky-500 via-cyan-400 to-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-md">
              🚀 Fast, Secure & Global
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="mb-6 bg-linear-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-5xl font-extrabold text-transparent drop-shadow-lg md:text-6xl lg:text-7xl"
          >
            Deliver Anything, Anywhere, Anytime
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mb-10 max-w-2xl text-lg text-cyan-50/90 md:text-xl"
          >
            From your doorstep to any destination — our global logistics network
            ensures your parcels arrive fast, safe, and affordable.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              className="rounded-xl bg-linear-to-r from-cyan-400 via-sky-500 to-blue-500 px-8 py-6 text-lg font-semibold text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
            >
              Book a Parcel
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="rounded-xl border border-white/40 bg-white/10 px-8 py-6 text-lg font-semibold text-white shadow-md backdrop-blur-md transition-all hover:border-cyan-300 hover:bg-cyan-500/30 hover:text-white hover:shadow-lg"
            >
              Track Parcel
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ y: -20 }}
        animate={{ y: 20 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute top-[20%] left-[10%] text-cyan-400/80"
      >
        <Package className="h-10 w-10" />
      </motion.div>

      <motion.div
        initial={{ y: 30 }}
        animate={{ y: -30 }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute top-[30%] right-[15%] text-sky-400/80"
      >
        <Truck className="h-12 w-12" />
      </motion.div>

      <motion.div
        initial={{ y: 25 }}
        animate={{ y: -25 }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute right-[40%] bottom-[10%] text-blue-400/70"
      >
        <Globe className="h-10 w-10" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
