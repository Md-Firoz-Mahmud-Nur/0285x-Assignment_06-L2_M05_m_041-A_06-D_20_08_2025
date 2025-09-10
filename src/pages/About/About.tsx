"use client";

import type React from "react";
import { useEffect, useState } from "react";
import "./About.css";
import CoreValues from "./CoreValues";
import HeroAbout from "./HeroAbout";
import OurLeadership from "./OurLeadership";
import OurMission from "./OurMission";
import Stats from "./Stats";

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative mt-10 min-h-screen overflow-hidden bg-linear-to-br from-blue-50 via-cyan-50 to-blue-100">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="float absolute top-20 left-10 h-64 w-64 rounded-full bg-linear-to-r from-blue-300 to-cyan-300 opacity-20 blur-3xl"></div>
        <div
          className="float absolute top-60 right-20 h-48 w-48 rounded-full bg-linear-to-r from-cyan-300 to-blue-400 opacity-20 blur-3xl"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="float absolute bottom-40 left-32 h-72 w-72 rounded-full bg-linear-to-r from-blue-200 to-cyan-200 opacity-15 blur-3xl"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="float absolute top-1/2 right-1/4 h-40 w-40 rounded-full bg-linear-to-r from-cyan-300 to-blue-300 opacity-20 blur-3xl"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div
        className={`relative z-10 mx-auto max-w-7xl px-6 py-16 transition-all duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <HeroAbout></HeroAbout>
        <Stats></Stats>
        <OurMission></OurMission>
        <CoreValues></CoreValues>
        <OurLeadership></OurLeadership>
      </div>
    </div>
  );
};

export default About;
