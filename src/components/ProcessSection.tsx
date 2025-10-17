import { FileText, UserCheck, Video, Plane, CheckCircle } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: FileText,
      number: "01",
      title: "Apply Online",
      description: "Submit your CV or fill our simple application form",
      highlight: "Easy online application"
    },
    {
      icon: UserCheck,
      number: "02",
      title: "Shortlisting",
      description: "We match you with the right employer based on your skills",
      highlight: "Perfect job matching"
    },
    {
      icon: Video,
      number: "03",
      title: "Interview & Selection",
      description: "Online or offline interview with Saudi employer",
      highlight: "Direct employer contact"
    },
    {
      icon: Plane,
      number: "04",
      title: "Visa & Travel",
      description: "We guide you through visa process until you fly",
      highlight: "Complete travel support"
    }
  ];

  return (
    <section className="section-padding bg-card">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Our simple 4-step process makes getting a job in Saudi Arabia easy and transparent
          </p>
          
          {/* Key Promise */}
          <div className="inline-flex items-center gap-3 bg-success/10 text-success border border-success/20 rounded-full px-6 py-3 font-semibold">
            <CheckCircle className="w-5 h-5" />
            <span>Payment Only After Job Secured & Visa Approved</span>
          </div>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-accent/30"></div>
          
          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="trust-badge text-center relative">
                  {/* Step Number */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-lg z-10">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-6 mt-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {step.description}
                  </p>
                  
                  {/* Highlight */}
                  <div className="text-sm font-medium text-accent bg-accent/10 rounded-full px-4 py-2">
                    {step.highlight}
                  </div>
                </div>

                {/* Mobile Connection Line */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center py-4">
                    <div className="w-0.5 h-8 bg-accent/30"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="grid md:grid-cols-2 gap-8 mt-16 pt-16 border-t border-border">
          <div className="bg-primary/5 rounded-2xl p-8">
            <h3 className="text-2xl font-heading font-semibold text-primary mb-4">
              What We Handle For You
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                <span>Document preparation and verification</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                <span>Medical examination coordination</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                <span>Visa application and processing</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                <span>Flight booking and travel arrangements</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-accent/5 rounded-2xl p-8">
            <h3 className="text-2xl font-heading font-semibold text-primary mb-4">
              Your Investment
            </h3>
            <div className="text-3xl font-heading font-bold text-accent mb-4">
              ₹0 Upfront
            </div>
            <p className="text-muted-foreground mb-4">
              We believe in your success. That's why we only charge our service fee after you've secured your job and received your visa approval.
            </p>
            <div className="text-sm font-medium text-success">
              ✓ No hidden charges ✓ Transparent pricing ✓ Success-based payment
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;