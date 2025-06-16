import { Button } from "@/components/ui/button";
import { PhoneCall, ExternalLink, CheckSquare, Landmark, Image as ImageIcon } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
const projects = [{
  title: "Basel",
  description: "Achieved an increase in sales within six months through a customized strategy.",
  url: "https://alghurabatravel.com",
  image: "/lovable-uploads/53846490-68e6-453b-a6e7-098757ea62b2.png",
  client: "Crimson Studio",
  isNew: true,
  metrics: [{
    value: "30% Increase in Sales"
  }, {
    value: "40% Boost in Retention"
  }]
}, {
  title: "London",
  description: "Streamlined operations, reducing costs by with our automation solutions.",
  url: "https://halaleditors.in",
  image: "",
  // No image yet
  client: "Raven Company Inc",
  isNew: false,
  metrics: [{
    value: "25% Conversion Rates"
  }, {
    value: "50% Reduced in CPA"
  }]
}, {
  title: "Coming Soon",
  description: "Another amazing project in development. Stay tuned for more incredible designs!",
  url: "#",
  image: "",
  client: "TBA",
  isNew: false,
  metrics: []
}];
const Portfolio = () => {
  return <section className="py-16 px-4 bg-black min-h-[60vh] flex flex-col items-center justify-center relative mt-20 mb-20" id="portfolio">
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
            Portfolio: Halal Web’s Recent Website Projects
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Explore our recent <strong>web design</strong> and <strong>SEO</strong> projects for businesses—each website is uniquely tailored to help our clients grow online.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-14 w-full">
          {projects.map((project, idx) => {
          const [ref, visible] = useScrollReveal<HTMLDivElement>();
          return <div ref={ref} key={idx} className={`relative rounded-3xl group shadow-2xl overflow-hidden border border-blue-900 bg-gradient-to-br from-white/5 via-black/70 to-black/90 transition-all duration-300 flex flex-col hover:scale-[1.03] luxury-scroll-animate ${visible ? "luxury-reveal" : ""}`} style={{
            boxShadow: "0 4px 48px 0 #2563eb22, 0 2px 8px 0 #0008"
          }}>
                {/* Card image, placeholder, or add screenshot UI */}
                <div className="relative w-full aspect-video bg-gradient-to-br from-blue-950/80 via-blue-900/70 to-blue-800/50 flex items-center justify-center">
                  {project.image ? <img src={project.image} alt={`Screenshot of ${project.title} website project by Halal Web`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" style={{
                objectPosition: "center"
              }} /> : <div className="w-full h-full flex flex-col justify-center items-center bg-gradient-to-br from-blue-900/60 via-indigo-900/50 to-blue-950/60 relative">
                      <div className="absolute inset-0 flex items-center justify-center z-0">
                        <span className="block w-40 h-40 rounded-2xl blur-2xl opacity-40 bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-900"></span>
                      </div>
                      <div className="relative z-10 flex flex-col items-center">
                        <ImageIcon size={52} className="text-blue-400/70 mb-4 drop-shadow-lg" strokeWidth={1.4} />
                        <span className="text-lg font-semibold text-blue-100 mb-1 drop-shadow">
                          Image coming soon
                        </span>
                        <span className="text-xs text-blue-200/80 mb-3 font-medium italic tracking-wide">
                          Screenshot will be added soon
                        </span>
                        <Button variant="secondary" className="rounded-full px-5 py-2 font-bold text-blue-700 opacity-60 cursor-not-allowed pointer-events-none" disabled aria-label="Add Screenshot">
                          Add Screenshot
                        </Button>
                      </div>
                    </div>}
                  {/* Blue image glow */}
                  <div aria-hidden className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-12 rounded-xl z-0 pointer-events-none" style={{
                background: "radial-gradient(ellipse 60% 44% at 50% 90%, #38bdf877 0%, transparent 100%)",
                filter: "blur(24px)"
              }}></div>
                </div>
                {/* Info overlay */}
                <div className="flex-1 flex flex-col p-6 pt-5 bg-gradient-to-t from-black/85 via-black/50 to-transparent">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="inline-flex items-center text-lg md:text-xl font-semibold text-white mr-2">
                      {project.isNew ? <CheckSquare className="mr-1 h-5 w-5 text-blue-400" /> : <Landmark className="mr-1 h-5 w-5 text-blue-400" />}
                      {project.title}
                    </span>
                    {project.isNew && <span className="text-xs ml-1 py-0.5 px-1.5 rounded bg-blue-600/90 text-white font-semibold tracking-wide shadow-sm">
                        NEW
                      </span>}
                    {project.url !== "#" && <a href={project.url} target="_blank" rel="noopener noreferrer" className="ml-2 p-1 rounded text-blue-300 hover:bg-blue-700/10 transition-colors" aria-label={`Open ${project.title} website`}>
                        <ExternalLink className="h-4 w-4" />
                      </a>}
                  </div>
                  <div className="flex flex-wrap items-center gap-2 mb-1 text-sm text-gray-300/80">
                    {project.client}
                  </div>
                  <div className="text-slate-200 text-base mb-3">{project.description}</div>
                  <div className="flex flex-wrap gap-3">
                    {project.metrics.map((metric, i) => <span key={i} className="rounded-full bg-gray-800/80 text-slate-100 text-xs px-3 py-1 font-medium border border-gray-700">
                        {metric.value}
                      </span>)}
                  </div>
                </div>
              </div>;
        })}
        </div>
        <div className="text-center">
          <Button size="lg" variant="default" onClick={() => window.open('https://calendly.com/halalweb-owner/30min', '_blank')} className="text-white px-8 py-4 text-lg font-semibold rounded-full shadow-[0_0_28px_#38bdf8] shadow-lg hover:shadow-xl border border-blue-800 transition-all duration-300 bg-blue-950 hover:bg-blue-800">
            Book a Web Design Call
          </Button>
        </div>
      </div>
      <div className="absolute left-0 right-0 bottom-0 w-full h-36 z-0 pointer-events-none" style={{
      background: "radial-gradient(ellipse at 50% 120%, #2563eb88 0%, transparent 80%)",
      filter: "blur(32px)"
    }} />
    </section>;
};
export default Portfolio;
