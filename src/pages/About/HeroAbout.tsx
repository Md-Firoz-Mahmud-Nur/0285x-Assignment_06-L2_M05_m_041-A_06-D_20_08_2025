import { Globe, Shield, Sparkles, Zap } from "lucide-react";

const HeroAbout = () => {
  return (
    <div className="fade-in-up mb-24 text-center">
      <div className="mb-8 flex items-center justify-center gap-2 md:gap-4">
        <div className="relative">
          <div className="absolute inset-0 animate-pulse rounded-3xl bg-linear-to-r from-blue-500 to-cyan-500 opacity-50 blur-xl"></div>
          <div className="glow relative rounded-3xl bg-linear-to-br from-blue-500 via-cyan-500 to-blue-600 p-5">
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
            className="flex items-center gap-2 rounded-full border-2 border-blue-200 bg-white/40 px-6 py-3 text-lg font-semibold text-blue-700 shadow-lg backdrop-blur-lg transition-transform duration-300 hover:scale-103 hover:border-blue-400 hover:bg-white/80"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <tag.icon className="h-5 w-5" />
            {tag.label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default HeroAbout;
