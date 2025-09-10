import { Clock, Globe, Package, Users } from "lucide-react";
import type React from "react";

interface Stat {
  id: number;
  number: string;
  label: string;
  icon: React.ElementType;
}
const Stats = () => {
  const stats: Stat[] = [
    { id: 1, number: "500K+", label: "Packages Delivered", icon: Package },
    { id: 2, number: "99.8%", label: "On-Time Delivery", icon: Clock },
    { id: 3, number: "50+", label: "Countries Served", icon: Globe },
    { id: 4, number: "24/7", label: "Customer Support", icon: Users },
  ];
  return (
    <div className="mb-24 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <div
          key={stat.id}
          className="group scale-in relative transition-transform duration-300 hover:scale-105"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-blue-400 to-cyan-500 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30"></div>
          <div className="relative rounded-3xl border-2 border-blue-200 p-8 text-center shadow-xl transition-all duration-300 hover:border-blue-300">
            <div className="pulse mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-blue-500 to-cyan-500 shadow-lg">
              <stat.icon className="h-8 w-8 text-white" />
            </div>
            <h3 className="mb-2 bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-4xl font-black text-transparent">
              {stat.number}
            </h3>
            <p className="font-semibold text-gray-700">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
