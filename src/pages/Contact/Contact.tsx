"use client";

import {
  Briefcase,
  CheckCircle,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Package,
  Phone,
  Send,
  User,
} from "lucide-react";
import type React from "react";
import { useEffect, useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  serviceType: string;
}

interface ValidationErrors {
  [key: string]: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    serviceType: "general",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const serviceTypes = [
    { value: "general", label: "General Inquiry", icon: MessageCircle },
    { value: "shipping", label: "Shipping Question", icon: Package },
    { value: "tracking", label: "Tracking Issue", icon: MapPin },
    { value: "billing", label: "Billing Support", icon: Briefcase },
    { value: "complaint", label: "File a Complaint", icon: User },
  ];

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = "Subject must be at least 5 characters";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (): Promise<void> => {
    if (!validateForm()) {
      const formElement = document.getElementById("contact-form");
      if (formElement) {
        formElement.style.animation = "shake 0.1s ease-in-out";
        setTimeout(() => {
          formElement.style.animation = "";
        }, 500);
      }
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2500));

      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        serviceType: "general",
      });

      setTimeout(() => setIsSubmitted(false), 6000);
    } catch (error) {
      setIsSubmitting(false);
      console.error("Submission error:", error);
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-blue-50 via-blue-100 to-cyan-100 p-6">
        <div className="w-full max-w-lg rounded-3xl border border-white/20 bg-white/90 p-12 text-center shadow-2xl backdrop-blur-xl">
          <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-linear-to-r from-blue-500 via-blue-600 to-cyan-600 shadow-lg shadow-blue-200">
            <CheckCircle className="h-12 w-12 text-white" />
          </div>

          <h2 className="t mb-4 bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-3xl font-bold text-gray-800">
            Message Sent Successfully!
          </h2>

          <p className="mb-8 text-lg leading-relaxed text-gray-600">
            Thank you for contacting ParcelEx. Our team will review your inquiry
            and respond within 24 hours.
          </p>

          <button
            onClick={() => setIsSubmitted(false)}
            className="transform rounded-2xl bg-linear-to-r from-cyan-400 via-cyan-500 to-cyan-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-cyan-200 transition-all duration-300 hover:scale-105 hover:from-cyan-500 hover:via-cyan-600 hover:to-cyan-700 hover:shadow-xl"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative mt-10 min-h-screen overflow-hidden bg-linear-to-br from-blue-50 via-blue-100 to-cyan-100">
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
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(3deg); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.5); }
        }
        .fade-in-up { animation: fadeInUp 0.8s ease-out; }
        .slide-in-left { animation: slideInLeft 0.8s ease-out; }
        .slide-in-right { animation: slideInRight 0.8s ease-out; }
        .float { animation: float 6s ease-in-out infinite; }
        .glow { animation: glow 3s ease-in-out infinite; }
        .glass {
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(16px);
        }
        .gradient-border {
          background: linear-gradient(white, white) padding-box,
                      linear-gradient(45deg, #3b82f6, #06b6d4) border-box;
          border: 2px solid transparent;
        }
      `}</style>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="float absolute top-20 left-10 h-32 w-32 rounded-full bg-linear-to-r from-blue-300 to-cyan-300 opacity-20"></div>
        <div
          className="float absolute top-40 right-20 h-24 w-24 rounded-full bg-linear-to-r from-cyan-300 to-sky-300 opacity-20"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="float absolute bottom-32 left-32 h-40 w-40 rounded-full bg-linear-to-r from-blue-200 to-cyan-200 opacity-15"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div
        className={`relative z-10 mx-auto max-w-7xl px-6 py-16 transition-all duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="fade-in-up mb-20 text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
            <div className="glow rounded-2xl bg-linear-to-r from-blue-500 to-cyan-600 p-3">
              <Package className="h-10 w-10 text-white" />
            </div>
            <h1 className="bg-linear-to-r from-blue-600 via-cyan-600 to-blue-800 bg-clip-text text-6xl font-black text-transparent">
              Contact Us
            </h1>
          </div>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
            Experience premium parcel delivery services. Our expert team is
            ready to assist you with all your shipping needs.
          </p>
        </div>

        <div className="grid gap-16 lg:grid-cols-2">
          <div className="slide-in-left">
            <div className="glass h-full rounded-3xl border-2 border-blue-200 p-10 shadow-2xl">
              <h2 className="mb-10 flex items-center gap-3 text-4xl font-bold text-gray-800">
                <MessageCircle className="h-8 w-8 text-blue-600" />
                Get in Touch
              </h2>

              <div className="space-y-8">
                {[
                  {
                    icon: Phone,
                    title: "Phone",
                    content: "+1 (555) 123-4567",
                    gradient: "from-blue-400 to-blue-600",
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    content: "support@parcelex.com",
                    gradient: "from-cyan-400 to-cyan-600",
                  },
                  {
                    icon: MapPin,
                    title: "Address",
                    content: "123 Delivery Street, Logistics City, LC 12345",
                    gradient: "from-sky-400 to-sky-600",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group flex cursor-pointer items-center rounded-2xl p-4 transition-all duration-300 hover:bg-white/50"
                  >
                    <div
                      className={`h-16 w-16 bg-linear-to-r ${item.gradient} mr-6 flex items-center justify-center rounded-2xl shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
                    >
                      <item.icon className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">
                        {item.title}
                      </h3>
                      <p className="text-base text-gray-600">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 rounded-2xl border border-blue-200/50 bg-linear-to-r from-blue-50 to-cyan-50 p-8">
                <div className="mb-4 flex items-center gap-3">
                  <Clock className="h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-bold text-blue-800">
                    Business Hours
                  </h3>
                </div>
                <div className="space-y-2 text-blue-700">
                  {[
                    { day: "Monday - Friday", hours: "8:00 AM - 8:00 PM" },
                    { day: "Saturday", hours: "9:00 AM - 6:00 PM" },
                    { day: "Sunday", hours: "10:00 AM - 4:00 PM" },
                  ].map((schedule, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between rounded-lg bg-white/60 px-4 py-2"
                    >
                      <span className="font-semibold">{schedule.day}:</span>
                      <span>{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="slide-in-right">
            <div
              id="contact-form"
              className="glass rounded-3xl border-2 border-blue-200 p-10 shadow-2xl"
            >
              <h2 className="mb-10 flex items-center gap-3 text-4xl font-bold text-gray-800">
                <Send className="h-8 w-8 text-cyan-500" />
                Send Message
              </h2>

              <div className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="mb-3 block text-sm font-bold text-gray-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full rounded-2xl border-2 bg-white/80 px-6 py-4 text-lg backdrop-blur-sm transition-all duration-300 focus:ring-4 focus:outline-none ${
                        errors.name
                          ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                          : "border-gray-200 hover:border-blue-300 focus:border-blue-500 focus:ring-blue-200"
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="mt-2 text-sm font-semibold text-red-500">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="mb-3 block text-sm font-bold text-gray-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full rounded-2xl border-2 bg-white/80 px-6 py-4 text-lg backdrop-blur-sm transition-all duration-300 focus:ring-4 focus:outline-none ${
                        errors.email
                          ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                          : "border-gray-200 hover:border-blue-300 focus:border-blue-500 focus:ring-blue-200"
                      }`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm font-semibold text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="mb-3 block text-sm font-bold text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full rounded-2xl border-2 border-gray-200 bg-white/80 px-6 py-4 text-lg backdrop-blur-sm transition-all duration-300 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-200 focus:outline-none"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="mb-3 block text-sm font-bold text-gray-700">
                      Service Type
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="w-full rounded-2xl border-2 border-gray-200 bg-white/80 px-6 py-4 text-lg backdrop-blur-sm transition-all duration-300 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-200 focus:outline-none"
                    >
                      {serviceTypes.map((service) => (
                        <option key={service.value} value={service.value}>
                          {service.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="mb-3 block text-sm font-bold text-gray-700">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full rounded-2xl border-2 bg-white/80 px-6 py-4 text-lg backdrop-blur-sm transition-all duration-300 focus:ring-4 focus:outline-none ${
                      errors.subject
                        ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                        : "border-gray-200 hover:border-blue-300 focus:border-blue-500 focus:ring-blue-200"
                    }`}
                    placeholder="How can we help you today?"
                  />
                  {errors.subject && (
                    <p className="mt-2 text-sm font-semibold text-red-500">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="mb-3 block text-sm font-bold text-gray-700">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className={`w-full resize-none rounded-2xl border-2 bg-white/80 px-6 py-4 text-lg backdrop-blur-sm transition-all duration-300 focus:ring-4 focus:outline-none ${
                      errors.message
                        ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                        : "border-gray-200 hover:border-blue-300 focus:border-blue-500 focus:ring-blue-200"
                    }`}
                    placeholder="Please describe your inquiry in detail. The more information you provide, the better we can assist you."
                  />
                  {errors.message && (
                    <p className="mt-2 text-sm font-semibold text-red-500">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`w-full transform rounded-2xl px-8 py-5 text-xl font-bold text-white shadow-2xl transition-all duration-300 hover:scale-105 focus:ring-4 focus:ring-cyan-200 focus:outline-none ${
                    isSubmitting
                      ? "cursor-not-allowed bg-gray-400"
                      : "bg-linear-to-r from-blue-500 via-blue-600 to-cyan-500 transition-all duration-300 ease-in-out hover:from-blue-600 hover:via-blue-700 hover:to-cyan-600 hover:shadow-lg hover:shadow-cyan-200 focus:ring-blue-200 active:scale-95"
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-3">
                      <div className="h-6 w-6 animate-spin rounded-full border-3 border-white border-t-transparent"></div>
                      <span>Sending Message...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-3">
                      <Send className="h-6 w-6" />
                      <span>Send Message</span>
                    </div>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
