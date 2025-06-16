import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ICON_SIZE = 32;

// Stronger blue gradients and fills for icons, matching website blue #2563eb and #60a5fa
// All glows remain inside icon bg, not in section bg
const LuxePalette = () => (
  <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 24 24" fill="none">
    <defs>
      <radialGradient id="blueSilverA" cx="50%" cy="45%" r="80%">
        <stop offset="0%" stopColor="#60a5fa" />
        <stop offset="27%" stopColor="#3b82f6" />
        <stop offset="64%" stopColor="#2563eb" />
        <stop offset="100%" stopColor="#1e40af" />
      </radialGradient>
      <filter id="luxuryBlueGlowA" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#2563ebcc" />
      </filter>
    </defs>
    <ellipse
      cx="12" cy="12" rx="10" ry="10"
      fill="url(#blueSilverA)"
      stroke="#60a5fa"
      strokeWidth="1.7"
      filter="url(#luxuryBlueGlowA)"
    />
    <ellipse
      cx="12" cy="12" rx="9" ry="9"
      fill="#2563eb"
      fillOpacity="0.13"
    />
    {/* Palette shape */}
    <path
      d="M7.5 12a4.5 4.5 0 019 0c0 2.05-1.67 3.71-3.72 3.97a1.28 1.28 0 00-.98 1.62c.19.61.77 1.06 1.44.98a7.5 7.5 0 10-6.21-7.32"
      stroke="#bfdbfe"
      strokeWidth="1.4"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ filter: "drop-shadow(0 0 2px #60a5faf0)" }}
    />
    <circle cx="15.5" cy="9.5" r="1.08" fill="#2563eb" />
    <circle cx="11" cy="7" r="0.96" fill="#60a5fa" />
    <circle cx="8" cy="11" r="0.92" fill="#dbeafe" fillOpacity={0.56} />
    <circle cx="10" cy="14" r="0.78" fill="#60a5fa99" />
  </svg>
);

const LuxeZap = () => (
  <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="blueSilverB" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#60a5fa"/>
        <stop offset="55%" stopColor="#2563eb"/>
        <stop offset="100%" stopColor="#1e3a8a"/>
      </linearGradient>
      <filter id="luxuryBlueGlowB" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="2" stdDeviation="4.5" floodColor="#2563ebb3" />
      </filter>
    </defs>
    <rect x="2" y="2" width="20" height="20" rx="10"
      fill="url(#blueSilverB)" filter="url(#luxuryBlueGlowB)"/>
    <path
      d="M13.5 2L6 14.5H12L10.5 22L18 9.5H12L13.5 2Z"
      stroke="#dbeafe"
      strokeWidth="1.22"
      fill="none"
      strokeLinejoin="round"
      style={{ filter: "drop-shadow(0 0 3px #60a5faee)" }}
    />
  </svg>
);

const LuxeHeart = () => (
  <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 24 24" fill="none">
    <defs>
      <radialGradient id="blueSilverC" cx="50%" cy="40%" r="80%">
        <stop offset="10%" stopColor="#60a5fa" />
        <stop offset="44%" stopColor="#2563eb" />
        <stop offset="90%" stopColor="#1e40af" />
        <stop offset="100%" stopColor="#1e3a8a" />
      </radialGradient>
      <filter id="luxuryBlueGlowC" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="3" stdDeviation="6" floodColor="#60a5fa99" />
      </filter>
    </defs>
    <circle cx="12" cy="12" r="10"
      fill="url(#blueSilverC)" filter="url(#luxuryBlueGlowC)" />
    <path
      d="M16.35 7.24c-1.23-1.23-3.23-1.23-4.46 0l-.53.53-.53-.53a3.15 3.15 0 10-4.46 4.46l5 5 5-5c1.23-1.23 1.23-3.23 0-4.46z"
      fill="none"
      stroke="#dbeafe"
      strokeWidth="1.42"
      strokeLinejoin="round"
      style={{ filter: "drop-shadow(0 0 3.5px #60a5fa99)" }}
    />
  </svg>
);

const LuxeCpu = () => (
  <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="blueSilverD" x1="0" y1="0" x2="24" y2="24">
        <stop offset="18%" stopColor="#60a5fa"/>
        <stop offset="65%" stopColor="#2563eb"/>
        <stop offset="100%" stopColor="#1e40af"/>
      </linearGradient>
      <filter id="luxuryBlueGlowD" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="2" stdDeviation="5" floodColor="#2563eb99" />
      </filter>
    </defs>
    <rect x="2" y="2" width="20" height="20" rx="8"
      fill="url(#blueSilverD)" filter="url(#luxuryBlueGlowD)" />
    <rect x="6.5" y="6.5" width="11" height="11" rx="3" fill="#2563eb22" stroke="#60a5fa" strokeWidth="1"/>
    <rect x="10" y="10" width="4" height="4" rx="1.2" fill="#60a5faaa"/>
  </svg>
);

const WhyChooseUs = () => {
  const [ref, visible] = useScrollReveal<HTMLDivElement>();
  const features = [
    {
      icon: <LuxePalette />,
      title: "Custom Design",
      description: "Every website is uniquely designed to match your brand and vision"
    },
    {
      icon: <LuxeZap />,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising on quality"
    },
    {
      icon: <LuxeHeart />,
      title: "Dedicated Support",
      description: "Ongoing support and maintenance to keep your site running smoothly"
    },
    {
      icon: <LuxeCpu />,
      title: "Cutting-Edge Tech",
      description: "We use the latest frameworks and tools to give your website a modern, reliable edge"
    }
  ];

  return (
    <section ref={ref}
      className={`py-16 px-4 bg-black relative mt-20 mb-20 transition-all duration-700 ${
        visible ? "luxury-reveal" : "luxury-scroll-animate"
      }`}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Why Choose Halal Web?
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            We combine creativity with technical expertise to deliver websites that not only look great 
            but also perform exceptionally well.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-2xl hover:bg-[#273043]/60 transition-colors duration-300"
            >
              <div
                className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, #23272f 0%, #2563eb 54%, #60a5fa 100%)",
                  boxShadow:
                    "0 0 30px 0 #2563eb77, 0 2px 11px 0 #60a5fa33, 0 1.5px 7px 0 #1e40af44",
                  border: "1px solid #60a5fa66"
                }}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* No section-level blue glow here */}
    </section>
  );
};

export default WhyChooseUs;
