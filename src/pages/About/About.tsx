"use client";

import PrimaryButton from "@/components/PrimaryButton";
import {
  Award,
  Clock,
  Globe,
  Heart,
  Linkedin,
  Mail,
  Package,
  Rocket,
  Shield,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Truck,
  Twitter,
  Users,
  Zap,
} from "lucide-react";
import type React from "react";
import { useEffect, useState } from "react";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  bio: string;
  social: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

interface Stat {
  id: number;
  number: string;
  label: string;
  icon: React.ElementType;
}

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO & Founder",
      image: "https://i.ibb.co.com/zQDLxpK/pexels-olly-842811.jpg",
      bio: "Visionary leader with 15+ years in logistics. Founded ParcelEx to revolutionize delivery services.",
      social: { linkedin: "#", twitter: "#", email: "sarah@parcelex.com" },
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CTO",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Tech innovator specializing in logistics technology and AI-powered route optimization.",
      social: { linkedin: "#", twitter: "#", email: "michael@parcelex.com" },
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      position: "Head of Operations",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Operations expert ensuring seamless delivery experiences across all service channels.",
      social: { linkedin: "#", email: "emma@parcelex.com" },
    },
    {
      id: 4,
      name: "David Kim",
      position: "Customer Success Manager",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Customer advocate focused on delivering exceptional service experiences and building relationships.",
      social: { linkedin: "#", twitter: "#", email: "david@parcelex.com" },
    },
  ];

  const stats: Stat[] = [
    { id: 1, number: "500K+", label: "Packages Delivered", icon: Package },
    { id: 2, number: "99.8%", label: "On-Time Delivery", icon: Clock },
    { id: 3, number: "50+", label: "Countries Served", icon: Globe },
    { id: 4, number: "24/7", label: "Customer Support", icon: Users },
  ];

  const values = [
    {
      icon: Rocket,
      title: "Innovation",
      description:
        "Pioneering cutting-edge technology to deliver faster, smarter, and more efficient solutions.",
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Committed to delivering world-class service with unmatched quality and precision.",
      color: "from-cyan-400 to-blue-500",
    },
    {
      icon: Heart,
      title: "Customer First",
      description:
        "Your satisfaction drives everything we do, treating every package with genuine care.",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description:
        "Continuously evolving and expanding to meet the changing needs of our global community.",
      color: "from-cyan-500 to-blue-600",
    },
  ];

  return (
    <div className="relative mt-10 min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.4); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.7); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .fade-in-up { animation: fadeInUp 0.8s ease-out; }
        .slide-in-left { animation: slideInLeft 0.8s ease-out; }
        .slide-in-right { animation: slideInRight 0.8s ease-out; }
        .scale-in { animation: scaleIn 0.6s ease-out; }
        .float { animation: float 6s ease-in-out infinite; }
        .pulse { animation: pulse 2s ease-in-out infinite; }
        .glow { animation: glow 3s ease-in-out infinite; }
        .shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
        .rotate-slow { animation: rotate 20s linear infinite; }
        .glass {
          background: rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.4);
        }
        .gradient-text {
          background: linear-gradient(135deg, #3b82f6, #06b6d4, #0ea5e9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="float absolute top-20 left-10 h-64 w-64 rounded-full bg-gradient-to-r from-blue-300 to-cyan-300 opacity-20 blur-3xl"></div>
        <div
          className="float absolute top-60 right-20 h-48 w-48 rounded-full bg-gradient-to-r from-cyan-300 to-blue-400 opacity-20 blur-3xl"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="float absolute bottom-40 left-32 h-72 w-72 rounded-full bg-gradient-to-r from-blue-200 to-cyan-200 opacity-15 blur-3xl"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="float absolute top-1/2 right-1/4 h-40 w-40 rounded-full bg-gradient-to-r from-cyan-300 to-blue-300 opacity-20 blur-3xl"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div
        className={`relative z-10 mx-auto max-w-7xl px-6 py-16 transition-all duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Section 1 */}
        <div className="fade-in-up mb-24 text-center">
          <div className="mb-8 flex items-center justify-center gap-2 md:gap-4">
            <div className="relative">
              <div className="absolute inset-0 animate-pulse rounded-3xl bg-gradient-to-r from-blue-500 to-cyan-500 opacity-50 blur-xl"></div>
              <div className="glow relative rounded-3xl bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 p-5">
                <Sparkles className="h-4 w-4 text-white md:h-14 md:w-14" />
              </div>
            </div>
            <h1 className="gradient-text text-3xl font-black md:text-5xl lg:text-7xl">
              About NextParcel
            </h1>
          </div>
          <p className="mx-auto mb-8 max-w-4xl leading-relaxed font-medium text-gray-700 md:text-2xl">
            Transforming the future of logistics with innovative technology,
            exceptional service, and a commitment to connecting the world, one
            package at a time.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "Trusted Worldwide", icon: Shield },
              { label: "AI-Powered", icon: Sparkles },
              { label: "Global Network", icon: Globe },
              { label: "Secure & Fast", icon: Zap },
            ].map((tag, index) => (
              <span
                key={index}
                className="glass flex items-center gap-2 rounded-full px-6 py-3 text-lg font-semibold text-blue-700 shadow-lg transition-transform duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <tag.icon className="h-5 w-5" />
                {tag.label}
              </span>
            ))}
          </div>
        </div>
        {/*  */}
        <div className="mb-24 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="group scale-in relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400 to-cyan-500 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30"></div>
              <div className="glass relative rounded-3xl p-8 text-center shadow-xl transition-all duration-300 hover:scale-105">
                <div className="pulse mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-2 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-4xl font-black text-transparent">
                  {stat.number}
                </h3>
                <p className="font-semibold text-gray-700">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
        {/* our mission  */}
        <div className="mb-24">
          <div className="glass slide-in-left rounded-3xl p-12 shadow-2xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-8 flex items-center gap-4 text-5xl font-bold text-gray-800">
                  <div className="rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 p-3">
                    <Target className="h-10 w-10 text-white" />
                  </div>
                  <span className="gradient-text">Our Mission</span>
                </h2>
                <p className="mb-6 text-xl leading-relaxed font-medium text-gray-700">
                  To revolutionize global logistics by making distance
                  irrelevant. We're pioneering the future through cutting-edge
                  AI technology, sustainable practices, and an unwavering
                  dedication to excellence.
                </p>
                <p className="mb-8 text-lg leading-relaxed text-gray-600">
                  Every delivery represents a connection – a birthday surprise,
                  a business breakthrough, a bridge across continents. We're
                  privileged to be the link in these meaningful moments.
                </p>
                <div className="flex flex-wrap gap-4">
                  {[
                    { label: "Lightning Speed", icon: Zap },
                    { label: "Fort Knox Security", icon: Shield },
                    { label: "Eco-Friendly", icon: Heart },
                    { label: "Premium Service", icon: Award },
                  ].map((value, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 rounded-full border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-50 px-4 py-2 transition-transform duration-300 hover:scale-105"
                    >
                      <value.icon className="h-5 w-5 text-blue-600" />
                      <span className="font-semibold text-blue-700">
                        {value.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="rotate-slow absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400 to-cyan-500 opacity-30 blur-2xl"></div>
                <div className="relative flex h-96 w-full items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 shadow-2xl">
                  <div className="shimmer absolute inset-0"></div>
                  <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                  <Truck className="float relative z-10 h-32 w-32 text-white/90" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* core  values */}
        <div className="mb-24">
          <h2 className="fade-in-up mb-4 text-center text-5xl font-bold">
            <span className="gradient-text">Our Core Values</span>
          </h2>
          <p className="mx-auto mb-16 max-w-3xl text-center text-xl text-gray-600">
            The principles that guide every decision we make and every package
            we deliver
          </p>
          <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="group scale-in relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${value.color} rounded-3xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-40`}
                ></div>
                <div className="glass relative rounded-3xl p-8 text-center shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105">
                  <div
                    className={`h-20 w-20 bg-gradient-to-br ${value.color} mx-auto mb-6 flex items-center justify-center rounded-3xl shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}
                  >
                    <value.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-gray-800">
                    {value.title}
                  </h3>
                  <p className="leading-relaxed text-gray-600">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/*  team   */}
        <div className="mb-24">
          <h2 className="fade-in-up mb-4 text-center text-5xl font-bold">
            <span className="gradient-text">Meet Our Leadership</span>
          </h2>
          <p className="mx-auto mb-16 max-w-3xl text-center text-xl text-gray-600">
            The visionaries driving innovation and excellence in global
            logistics
          </p>
          <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-4">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className="group scale-in relative"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredMember(member.id)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400 to-cyan-500 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30"></div>
                <div className="glass relative cursor-pointer rounded-3xl p-6 text-center shadow-xl transition-all duration-500 hover:-translate-y-4 hover:scale-105">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 opacity-50 blur-md transition-opacity duration-300 group-hover:opacity-70"></div>
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="relative mx-auto h-32 w-32 rounded-full border-4 border-white object-cover shadow-xl transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute -right-2 -bottom-2 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg">
                      <Star className="h-5 w-5 fill-white text-white" />
                    </div>
                  </div>

                  <h3 className="mb-2 text-2xl font-bold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="mb-4 font-semibold text-blue-600">
                    {member.position}
                  </p>

                  <div
                    className={`transition-all duration-300 ${
                      hoveredMember === member.id
                        ? "max-h-40 opacity-100"
                        : "max-h-20 overflow-hidden opacity-70"
                    }`}
                  >
                    <p className="mb-4 text-sm leading-relaxed text-gray-600">
                      {member.bio}
                    </p>
                  </div>

                  <div className="flex justify-center gap-3">
                    {member.social.linkedin && (
                      <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 shadow-md transition-transform duration-300 hover:scale-110">
                        <Linkedin className="h-5 w-5 text-white" />
                      </div>
                    )}
                    {member.social.twitter && (
                      <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 shadow-md transition-transform duration-300 hover:scale-110">
                        <Twitter className="h-5 w-5 text-white" />
                      </div>
                    )}
                    {member.social.email && (
                      <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 shadow-md transition-transform duration-300 hover:scale-110">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* cta */}
        <div className="fade-in-up text-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400 to-cyan-500 opacity-20 blur-2xl"></div>
            <div className="glass relative rounded-3xl p-12 shadow-2xl">
              <div className="mb-6 flex justify-center">
                <div className="rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-500 p-4 shadow-xl">
                  <Rocket className="h-12 w-12 text-white" />
                </div>
              </div>
              <h2 className="mb-6 text-5xl font-bold">
                <span className="gradient-text">
                  Ready to Experience Excellence?
                </span>
              </h2>
              <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed font-medium text-gray-700">
                Join thousands of satisfied customers who trust ParcelEx for
                their delivery needs. Let's make your next shipment
                extraordinary.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <button className="flex transform items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 px-10 py-5 text-xl font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:via-cyan-600 hover:to-blue-700 hover:shadow-2xl">
                  <Zap className="h-6 w-6" />
                  Get Started Today
                </button>
                <PrimaryButton text="Contact Us"></PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
