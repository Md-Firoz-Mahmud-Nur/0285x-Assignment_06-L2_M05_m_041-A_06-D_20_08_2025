"use client";

const stats = [
  { label: "Parcels delivered", value: "500K+" },
  { label: "Cities covered", value: "120+" },
  { label: "Average rating", value: "4.9/5" },
  { label: "On-time deliveries", value: "98%" },
];

export default function Highlights() {
  return (
    <section className="bg-linear-to-r from-cyan-500 via-blue-600 to-cyan-500 py-20 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Trusted by thousands of senders
        </h2>
        <div className="mt-8 grid gap-6 text-center md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-bold">{s.value}</div>
              <p className="mt-1 text-sm text-slate-300">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
