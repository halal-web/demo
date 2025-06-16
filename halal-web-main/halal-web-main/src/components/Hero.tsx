import { Button } from "@/components/ui/button";
const Hero = () => {
  return <section className="min-h-screen flex flex-col justify-center items-center px-4 bg-black relative overflow-hidden" style={{
    background: "radial-gradient(ellipse 85% 60% at 0% 0%, #212132 0%, #0d1830 20%, #142145 60%, #000 100%)"
  }}>
      <div aria-hidden className="hero-glow-blink pointer-events-none absolute -top-1/2 -left-1/2 w-[220vw] h-[135vw] max-w-none rounded-full z-[1]" style={{
      background:
      "radial-gradient(ellipse 70% 53% at 12% 6%, rgba(59, 130, 246, 0.52) 0%, rgba(56, 189, 248, 0.36) 33%, rgba(106, 80, 230, 0.22) 60%, transparent 90%)",
      filter: "blur(115px)"
    }} />
      <div className="flex flex-col justify-center items-center min-h-screen max-w-4xl mx-auto text-center relative z-10 m-0">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-[0_5px_20px_rgba(30,50,200,0.18)]">
          Luxurious Web Design for 
          <span className="text-white block">Business Growth</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-2xl mx-auto leading-relaxed">
          Professional <strong>web design services</strong> for halal businesses.  
          Stand out from your competitors online with a modern, high-performance website designed by Halal Web.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" variant="default" onClick={() => window.open('https://calendly.com/halalweb-owner/30min', '_blank')} className="text-white px-8 py-4 text-lg font-semibold rounded-full shadow-[0_0_28px_#38bdf8] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-blue-950 hover:bg-blue-800">
            Book a Free Consultation
          </Button>
          <p className="text-sm text-slate-400">
            ✨ 3 successful projects delivered for local businesses
          </p>
        </div>
      </div>
    </section>;
};
export default Hero;
