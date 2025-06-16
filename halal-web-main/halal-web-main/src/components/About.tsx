import React from "react";
import { Gem } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const About = () => {
  const [ref, visible] = useScrollReveal<HTMLDivElement>();
  return (
    <section
      ref={ref}
      className={`relative flex items-center justify-center min-h-[56vh] py-20 px-4 bg-black overflow-hidden mt-20 mb-20 transition-all duration-700 ${
        visible ? "luxury-reveal" : "luxury-scroll-animate"
      }`}
    >
      {/* Blue animated blob/glow background, behind the card */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 w-[540px] h-[440px] sm:w-[440px] sm:h-[340px] rounded-3xl pointer-events-none -z-10"
        style={{
          transform: "translate(-50%, -54%)",
          background:
            "radial-gradient(ellipse 85% 60% at 55% 40%, #312e81bb 0%, #2563eb55 35%, #60a5faa6 58%, transparent 100%)",
          filter: "blur(58px)",
        }}
      />
      <div className="mx-auto max-w-3xl w-full rounded-[2rem] bg-gradient-to-br from-blue-950/70 via-blue-900/70 to-black/90 border border-blue-700/30 shadow-[0_8px_52px_-8px_rgba(37,99,235,0.43)] backdrop-blur-md px-8 py-14 flex flex-col items-center gap-10">
        {/* Luxury Icon Glowing Circle */}
        <div className="relative mb-1 flex items-center justify-center">
          <div className="absolute inset-0 scale-125 blur-[36px] opacity-70 rounded-full z-0 bg-gradient-to-tr from-blue-500/70 via-sky-400/40 to-indigo-600/40" />
          <div className="w-28 h-28 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-800 via-blue-600/80 to-blue-950 shadow-[0_0_44px_0_rgba(59,130,246,0.25)] border-[3px] border-blue-500/30 z-10">
            <Gem
              size={52}
              strokeWidth={2.2}
              className="text-sky-300 drop-shadow-[0_2px_12px_rgba(56,189,248,0.22)]"
            />
          </div>
        </div>
        {/* Heading and description */}
        <div className="text-center flex flex-col gap-5">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight drop-shadow-[0_4px_32px_rgba(68,170,255,0.18)]">
            <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-indigo-200 bg-clip-text text-transparent">
              About Halal Web
            </span>
          </h2>
          <p className="text-lg md:text-xl text-blue-100/90 leading-relaxed font-medium max-w-2xl mx-auto drop-shadow">
            <strong>Halal Web</strong> crafts <strong>visually stunning</strong> and <strong>luxurious websites</strong> for Muslim businesses and professionals. 
            Benefit from bespoke design, seamless experiences, and <strong>SEO-optimized</strong> solutions that transform your vision into a powerful digital presence.
          </p>
        </div>
        {/* Stats card */}
        <div className="mt-7 flex flex-col items-center gap-1">
          <div className="text-4xl md:text-5xl font-black text-blue-300 mb-2 drop-shadow-lg tracking-wider">
            3
          </div>
          <div className="text-slate-200 text-base md:text-lg font-medium">
            <strong>Projects Completed</strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
