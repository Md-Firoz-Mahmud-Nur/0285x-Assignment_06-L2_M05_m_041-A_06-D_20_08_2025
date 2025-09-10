import { Award, Heart, Shield, Target, Truck, Zap } from "lucide-react";

const OurMission = () => {
  return (
    <div className="mb-24">
      <div className="slide-in-left rounded-3xl p-12 shadow-2xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-8 flex items-center gap-4 text-5xl font-bold text-gray-800">
              <div className="rounded-2xl bg-linear-to-br from-blue-500 to-cyan-500 p-3">
                <Target className="h-10 w-10 text-white" />
              </div>
              <span className="gradient-text">Our Mission</span>
            </h2>
            <p className="mb-6 text-xl leading-relaxed font-medium text-gray-700">
              To revolutionize global logistics by making distance irrelevant.
              We're pioneering the future through cutting-edge AI technology,
              sustainable practices, and an unwavering dedication to excellence.
            </p>
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              Every delivery represents a connection – a birthday surprise, a
              business breakthrough, a bridge across continents. We're
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
                  className="flex items-center gap-2 rounded-full border-2 border-blue-200 bg-linear-to-r from-blue-50 to-cyan-50 px-4 py-2 transition-transform duration-300 hover:scale-105 hover:border-blue-300 hover:from-white/80 hover:to-white/80"
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
            <div className="rotate-slow absolute inset-0 rounded-3xl bg-linear-to-br from-blue-400 to-cyan-500 opacity-30 blur-2xl"></div>
            <div className="relative flex h-96 w-full items-center justify-center overflow-hidden rounded-3xl bg-linear-to-br from-blue-500 via-cyan-500 to-blue-600 shadow-2xl">
              <div className="shimmer absolute inset-0"></div>
              <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
              <Truck className="float relative z-10 h-32 w-32 text-white/90" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
