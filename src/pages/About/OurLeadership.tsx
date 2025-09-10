import { Linkedin, Mail, Star, Twitter } from "lucide-react";
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

const OurLeadership = () => {
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
      bio: "Customer advocate focused on delivering exceptional service experiences.",
      social: { linkedin: "#", twitter: "#", email: "david@parcelex.com" },
    },
  ];
  return (
    <div className="mb-24">
      <h2 className="fade-in-up mb-4 text-center text-5xl font-bold">
        <span className="gradient-text">Meet Our Leadership</span>
      </h2>
      <p className="mx-auto mb-16 max-w-3xl text-center text-xl text-gray-600">
        The visionaries driving innovation and excellence in global logistics
      </p>

      <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-4">
        {teamMembers.map((member, index) => (
          <div
            key={member.id}
            className="group scale-in relative transition-transform duration-500"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-linear-to-br from-blue-400 to-cyan-500 opacity-35 blur-xl transition-opacity duration-500 group-hover:opacity-0"></div>

            <div className="relative z-10 cursor-pointer rounded-3xl border-2 border-blue-200 bg-white/80 p-6 text-center shadow-xl backdrop-blur-md transition-all duration-500 group-hover:border-blue-400 hover:scale-105">
              <div className="relative mb-6">
                <div className="pointer-events-none absolute inset-0 rounded-full bg-linear-to-br from-blue-500 to-cyan-500 opacity-40 blur-md transition-opacity duration-300 group-hover:opacity-70"></div>
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="relative mx-auto h-32 w-32 rounded-full border-4 border-white object-cover shadow-xl transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute -right-2 -bottom-2 flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-cyan-500 shadow-lg">
                  <Star className="h-5 w-5 fill-white text-white" />
                </div>
              </div>

              <h3 className="mb-2 text-2xl font-bold text-gray-800">
                {member.name}
              </h3>
              <p className="mb-4 font-semibold text-blue-600">
                {member.position}
              </p>

              <div>
                <p className="mb-4 text-sm leading-relaxed text-gray-600">
                  {member.bio}
                </p>
              </div>

              <div className="flex justify-center gap-3">
                {member.social.linkedin && (
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-blue-600 shadow-md transition-transform duration-300 hover:scale-110">
                    <Linkedin className="h-5 w-5 text-white" />
                  </div>
                )}
                {member.social.twitter && (
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-cyan-500 to-blue-500 shadow-md transition-transform duration-300 hover:scale-110">
                    <Twitter className="h-5 w-5 text-white" />
                  </div>
                )}
                {member.social.email && (
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-blue-600 to-cyan-600 shadow-md transition-transform duration-300 hover:scale-110">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurLeadership;
