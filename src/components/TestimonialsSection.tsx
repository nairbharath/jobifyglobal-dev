import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Electrician",
      location: "Riyadh, Saudi Arabia",
      image: "👨‍🔧",
      rating: 5,
      text: "I got my Saudi job within 2 months. The process was simple and safe. Jobify team supported me throughout the journey.",
      salary: "₹45,000/month"
    },
    {
      name: "Sunil Sharma",
      role: "Welder",
      location: "Jeddah, Saudi Arabia",
      image: "👨‍🏭",
      rating: 5,
      text: "Very honest company. They helped with everything from interview to visa. No payment until I got my job confirmed.",
      salary: "₹50,000/month"
    },
    {
      name: "Amit Patel",
      role: "Construction Worker",
      location: "Dammam, Saudi Arabia",
      image: "👷‍♂️",
      rating: 5,
      text: "Best experience! Clear communication, no hidden fees. Now working in a good company with proper accommodation.",
      salary: "₹40,000/month"
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from workers who have successfully found jobs in Saudi Arabia through Jobify
          </p>
        </div>

        {/* Mobile: Scrollable carousel, Desktop: Grid */}
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="flex gap-6 overflow-x-auto scrollbar-hide lg:contents">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-card rounded-2xl p-8 shadow-soft border border-border hover:shadow-medium transition-all duration-300 min-w-[300px] lg:min-w-0"
              >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-accent" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                "{testimonial.text}"
              </p>

              {/* Salary Highlight */}
              <div className="bg-success/10 text-success border border-success/20 rounded-lg px-4 py-2 mb-6 text-center font-semibold">
                Monthly Salary: {testimonial.salary}
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-heading font-semibold text-primary">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-accent font-medium">
                    📍 {testimonial.location}
                  </div>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-card rounded-2xl p-8 shadow-soft border border-accent/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-heading font-semibold text-primary mb-4">
              Ready to Start Your Success Story?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join hundreds of skilled workers who have built successful careers in Saudi Arabia
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold hover:bg-accent/90 transition-colors text-lg"
            >
              Begin Your Journey Today
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-border">
          <div className="text-center">
            <div className="text-2xl font-heading font-bold text-primary mb-1">1000+</div>
            <div className="text-sm text-muted-foreground">Happy Workers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-heading font-bold text-primary mb-1">95%</div>
            <div className="text-sm text-muted-foreground">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-heading font-bold text-primary mb-1">4.8/5</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-heading font-bold text-primary mb-1">50+</div>
            <div className="text-sm text-muted-foreground">Partner Companies</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;