import { Award, Heart, Rocket, TrendingUp } from "lucide-react";

const CoreValues = () => {
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
    <div className="mb-24">
      <h2 className="fade-in-up mb-4 text-center text-5xl font-bold">
        <span className="gradient-text">Our Core Values</span>
      </h2>
      <p className="mx-auto mb-16 max-w-3xl text-center text-xl text-gray-600">
        The principles that guide every decision we make and every package we
        deliver
      </p>
      <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-4">
        {values.map((value, index) => (
          <div
            key={index}
            className="group scale-in relative"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div
              className={`absolute inset-0 bg-linear-to-r ${value.color} rounded-3xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-40`}
            ></div>
            <div className="relative rounded-3xl border-2 border-blue-200 p-8 text-center shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-103 hover:border-blue-300">
              <div
                className={`h-20 w-20 bg-linear-to-br ${value.color} mx-auto mb-6 flex items-center justify-center rounded-3xl shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}
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
  );
};

export default CoreValues;
