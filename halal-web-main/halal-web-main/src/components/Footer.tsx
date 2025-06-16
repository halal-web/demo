import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";
const Footer = () => {
  return <footer className="text-white bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Online Presence?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and bring your vision to life with a stunning, professional website.
          </p>
          <Button size="lg" variant="default" onClick={() => window.open('https://calendly.com/halalweb-owner/30min', '_blank')} className="text-white px-8 py-4 text-lg font-semibold rounded-full shadow-[0_0_28px_#38bdf8] shadow-lg hover:shadow-xl transition-all duration-300 bg-blue-950 hover:bg-blue-800">
            Book a Call
          </Button>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <div className="text-center pt-8">
            <p className="text-gray-400">
              <span className="block sm:inline">
                Copyright © 2024 Halal Web
              </span>
              <span className="block sm:inline sm:ml-2">
                Made with <span aria-label="love" role="img">❤︎</span> by <span className="text-white font-semibold">Halal web</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;