import { Button } from "@/components/ui/button";
import React, { useEffect, useRef, useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

// Define the navigation links (no highlight for "Home")
const navLinks = [{
  name: "Home",
  href: "#home"
}, {
  name: "About",
  href: "#about"
}, {
  name: "Portfolio",
  href: "#portfolio"
}, {
  name: "Testimonials",
  href: "#testimonials"
}];

// Helper: get section id from href (e.g. "#about" -> "about")
function getSectionId(href: string) {
  return href.startsWith("#") ? href.slice(1) : href;
}
const Header = () => {
  // Tracks the current active nav link (by href)
  const [activeLink, setActiveLink] = useState(navLinks[0].href);

  // Refs for Intersection Observers (to sync nav highlight with scroll position)
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Update underline to follow scroll position/section
  useEffect(() => {
    const sectionIds = navLinks.map(link => getSectionId(link.href));
    const sectionElems = sectionIds.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (sectionElems.length === 0) return;
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      let foundSection: string | null = null;
      for (const entry of entries) {
        if (entry.isIntersecting) {
          foundSection = "#" + entry.target.id;
          break;
        }
      }
      if (foundSection) setActiveLink(foundSection);
    };

    // Responsive observer: all except mobile nav overlay open
    if (window.matchMedia("(min-width: 640px)").matches) {
      // tablet up (sm: 640px)
      observerRef.current = new window.IntersectionObserver(handleIntersect, {
        root: null,
        threshold: 0.3,
        rootMargin: "-30% 0px -60% 0px"
      });
      sectionElems.forEach(elem => observerRef.current?.observe(elem));
    }
    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  // Manual nav activation (used for click, focus, touch)
  const handleNavActivation = (href: string) => {
    setActiveLink(href);
  };
  return <header className="fixed top-0 left-0 w-full z-30 flex justify-center pointer-events-none">
      <nav className={`
          flex items-center w-full max-w-5xl pointer-events-auto transition-all
          px-2 sm:px-3 lg:px-0
          mt-2 sm:mt-3 md:mt-6
        `} style={{
      minHeight: "46px"
    }}>
        {/* Mobile & Tablet Header */}
        <div className="flex md:hidden w-full justify-center">
          <div className="relative flex items-center justify-between w-full max-w-xs sm:max-w-md bg-white rounded-full px-5 py-2 shadow-md border border-gray-200 select-none" style={{
          zIndex: 1
        }}>
            {/* MATCH PC: Blue glow BEHIND mobile pill header */}
            <span className="absolute inset-0 -z-10 pointer-events-none rounded-full" style={{
            // Match desktop: spread, center, color stops, blur, opacity
            background: "radial-gradient(ellipse 82% 64% at 60% 60%, #38bdf8 0%, #38bdf8aa 23%, #a78bfa33 66%, #fff 99%, transparent 100%)",
            filter: "blur(49px)",
            opacity: 0.33
          }} aria-hidden="true" />
            {/* Glow effect overlay for legacy (in case of mobile overlap) */}
            {/* ... keep existing code (legacy overlay, logo, nav/menu, etc) the same ... */}
            <span className="absolute inset-x-0 -top-3 bottom-3 w-full h-full rounded-full pointer-events-none z-0" style={{
            background: "radial-gradient(ellipse 60% 45% at 50% 60%, #38bdf8 0%, #a78bfa44 50%, #fff 100%, transparent 90%)",
            filter: "blur(18px)",
            opacity: 0.32
          }} aria-hidden="true" />
            <div className="font-extrabold text-lg tracking-wider text-black z-10" style={{
            fontFamily: '"JetBrains Mono", monospace',
            minWidth: 60,
            lineHeight: 1,
            letterSpacing: "0.01em"
          }}>
              Halal Web
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <button aria-label="Open Menu" className="p-2 rounded-full hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 ml-4 z-10">
                  <Menu className="w-7 h-7 text-blue-900" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="p-0 max-w-xs w-full sm:max-w-sm">
                <div className="flex flex-col h-full bg-white">
                  <div className="px-6 pt-6 pb-3 border-b">
                    <span className="font-extrabold text-lg tracking-wider text-black" style={{
                    fontFamily: '"JetBrains Mono", monospace'
                  }}>Halal Web</span>
                  </div>
                  <ul className="flex flex-col pt-6 px-6 gap-4 flex-1">
                    {navLinks.map(link => <li key={link.name}>
                        <a href={link.href} className={`block w-full py-2 px-3 rounded-lg text-base font-medium transition-colors nav-link ${activeLink === link.href ? "text-sky-500 font-bold" : "text-gray-800 hover:text-sky-500"}`} style={activeLink === link.href ? {
                      letterSpacing: "0.01em"
                    } : undefined} data-active={activeLink === link.href} tabIndex={0} onClick={() => handleNavActivation(link.href)} onFocus={() => handleNavActivation(link.href)} onTouchStart={() => handleNavActivation(link.href)}>
                          {link.name}
                          {/* Animated blue underline for active link */}
                          <span className={`
                              block transition-all h-[3px] mt-1 rounded bg-blue-400
                              ${activeLink === link.href ? 'opacity-100 w-full' : 'opacity-0 w-0'}
                            `} aria-hidden="true"></span>
                        </a>
                      </li>)}
                  </ul>
                  {/* Book a Call Button with blue glow on mobile */}
                  <div className="relative px-6 pb-8 flex items-center z-10">
                    {/* Glow effect: mobile/tablet, behind the button */}
                    <span className="absolute inset-x-0 left-[-18px] top-[-10px] w-[120%] h-[120%] z-0 pointer-events-none rounded-full" style={{
                    background: "radial-gradient(ellipse 70% 50% at 60% 70%, #38bdf8 0%, #a78bfa44 55%, #fff 100%, transparent 90%)",
                    filter: "blur(13px)",
                    opacity: 0.33
                  }} aria-hidden="true" />
                    <Button size="lg" variant="default" onClick={() => window.open('https://calendly.com/halalweb-owner/30min', '_blank')} className="w-full text-white px-6 py-3 text-base font-semibold rounded-full shadow-lg bg-blue-950 hover:bg-blue-800 relative z-10">
                      Book a Call
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Desktop pill header */}
        <div className="hidden md:flex flex-1 items-center justify-between w-full">
          <div className="flex flex-1 items-center justify-center w-full">
            {/* Pill container */}
            <div className="flex items-center w-full bg-white rounded-full border border-[#f1f1f2] px-6 py-2 pr-3" style={{
            boxShadow: "0 4px 40px 0 #38bdf880"
          }}>
              {/* Logo */}
              <div className="font-extrabold text-[1.5rem] tracking-wider text-black select-none mr-7" style={{
              fontFamily: '"JetBrains Mono", monospace',
              lineHeight: 1,
              letterSpacing: "0.01em"
            }}>
                Halal Web
              </div>
              {/* Desktop nav links, spaced out */}
              <ul className="flex items-center justify-center gap-7 lg:gap-12 flex-1">
                {navLinks.map(link => <li key={link.name} className="relative">
                    <a href={link.href} className={`
                        relative px-1 text-base font-normal
                        ${activeLink === link.href ? "text-sky-500 font-bold" : "text-black hover:text-sky-500"}
                        transition-colors
                      `} style={activeLink === link.href ? {
                  letterSpacing: "0.01em"
                } : undefined} data-active={activeLink === link.href} tabIndex={0} onClick={() => handleNavActivation(link.href)} onFocus={() => handleNavActivation(link.href)} onTouchStart={() => handleNavActivation(link.href)}>
                      {link.name}
                      {/* Animated blue underline for active link */}
                      <span aria-hidden="true" className={`
                          absolute left-0 -bottom-1 w-full h-[3px] rounded-lg transition-all duration-300
                          ${activeLink === link.href ? "bg-blue-500 opacity-100" : "opacity-0"}
                        `} />
                    </a>
                  </li>)}
              </ul>
              {/* Book a Call Button with blue glow */}
              <div className="flex items-center ml-4 relative">
                <span className="absolute inset-0 left-[-24px] top-[-16px] w-[120%] h-[130%] z-0 pointer-events-none
                  rounded-full" style={{
                background: "radial-gradient(ellipse 60% 45% at 80% 60%, #38bdf8 0%, #a78bfa44 50%, #fff 100%, transparent 90%)",
                filter: "blur(14px)",
                opacity: 0.3
              }} aria-hidden="true" />
                <Button size="lg" variant="default" onClick={() => window.open('https://calendly.com/halalweb-owner/30min', '_blank')} style={{
                boxShadow: "none"
              }} className="relative z-10 text-white px-7 py-3 text-base font-bold rounded-full transition-transform bg-blue-950 hover:bg-blue-800">
                  Book a Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <style>{`
        /* Remove all header blinking/glow/background pulse on all devices */
        .blink-header, .animate-blink, .hero-glow-blink {
          animation: none !important;
        }

        /* Responsive header display:
         * Mobile: <640px (shows only mobile),
         * Tablet: 640px - 1023px (shows mobile style, bigger width),
         * Desktop: >=1024px (shows desktop) */
        @media (max-width: 767px) {
          .md\\:flex { display: none !important; }
          .md\\:hidden { display: flex !important; }
        }
        @media (min-width: 768px) {
          .md\\:hidden { display: none !important; }
          .md\\:flex { display: flex !important; }
        }
        @media (min-width: 640px) and (max-width: 1023px) {
          .max-w-xs { max-width: 90vw !important; }
          .sm\\:max-w-md { max-width: 540px !important; }
          .px-5 { padding-left: 2rem !important; padding-right: 2rem !important; }
          .py-2 { padding-top: 0.6rem !important; padding-bottom: 0.6rem !important; }
        }
      `}</style>
    </header>;
};
export default Header;