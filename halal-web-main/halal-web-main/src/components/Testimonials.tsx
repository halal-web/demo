
import { Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Testimonials = () => {
  const testimonials = [{
    name: "Sarah Johnson",
    role: "Business Owner, Retail",
    content: "Halal Web delivered exactly what we needed—a professional website design that boosted our online visibility and SEO rankings!",
    rating: 5
  }, {
    name: "Ahmed Rahman",
    role: "Entrepreneur, Service Industry",
    content: "Outstanding website service! They understood our vision perfectly and created an SEO-friendly website for our brand.",
    rating: 5
  }, {
    name: "Lisa Chen",
    role: "Marketing Director, Hospitality",
    content: "Highly recommend Halal Web for anyone needing a quality website. Great SEO advice and excellent support throughout.",
    rating: 5
  }];
  const [ref, visible] = useScrollReveal<HTMLDivElement>();

  return <section ref={ref}
    className={`py-16 px-4 bg-black relative mt-20 mb-20 transition-all duration-700 ${
      visible ? "luxury-reveal" : "luxury-scroll-animate"
    }`}
  >
      {/* Blue glow at bottom ONLY here */}
      <div className="blue-glow-bottom" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Client Testimonials for Halal Web</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Read what satisfied businesses have to say about our web design & SEO optimization services.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-blue-950/50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex mb-4" aria-label={`Rated ${testimonial.rating} out of 5`}>
                {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />)}
              </div>
              <blockquote className="text-slate-200 mb-6 leading-relaxed">
                &quot;{testimonial.content}&quot;
              </blockquote>
              <div>
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-sm text-slate-300">{testimonial.role}</div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Testimonials;
