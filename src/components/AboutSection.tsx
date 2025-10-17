import { Shield, FileText, Plane, CheckCircle } from "lucide-react";

const AboutSection = () => {
  const trustPoints = [
    {
      icon: Shield,
      title: "Trusted Companies",
      description: "Partner with verified employers in Saudi Arabia"
    },
    {
      icon: FileText,
      title: "Simple Process",
      description: "Easy application and documentation support"
    },
    {
      icon: Plane,
      title: "Full Support",
      description: "Complete guidance from application to travel"
    }
  ];

  return (
    <section id="about" className="section-padding bg-card">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-6">
            About Jobify Global
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground mb-8">
              We connect skilled Indian workers with trusted companies in Saudi Arabia. 
              With a focus on transparency and support, we make your overseas job journey 
              safe and simple.
            </p>
            
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-3 bg-success/10 text-success border border-success/20 rounded-full px-6 py-3 font-semibold">
              <CheckCircle className="w-5 h-5" />
              <span>No Hidden Fees - Payment Only After Job Secured</span>
            </div>
          </div>
        </div>

        {/* Trust Points Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {trustPoints.map((point, index) => (
            <div key={index} className="trust-badge text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 rounded-full flex items-center justify-center">
                <point.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                {point.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">1000+</div>
            <div className="text-muted-foreground">Workers Placed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Partner Companies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">95%</div>
            <div className="text-muted-foreground">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;