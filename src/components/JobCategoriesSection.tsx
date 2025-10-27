import { Hammer, Zap, Car, Users, Wrench, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const JobCategoriesSection = () => {
  const navigate = useNavigate();
  
  const jobCategories = [
    {
      icon: Building,
      title: "Construction Workers",
      description: "Building, masonry, general construction",
      inDemand: true
    },
    {
      icon: Zap,
      title: "Electricians & Plumbers",
      description: "Electrical work, plumbing, maintenance",
      inDemand: true
    },
    {
      icon: Wrench,
      title: "Welders & Fabricators",
      description: "Metal work, welding, fabrication",
      inDemand: true
    },
    {
      icon: Car,
      title: "Drivers",
      description: "Heavy vehicle, truck, delivery drivers",
      inDemand: false
    },
    {
      icon: Users,
      title: "Hospitality & Cleaning",
      description: "Hotel staff, cleaning services",
      inDemand: false
    },
    {
      icon: Hammer,
      title: "Skilled Technicians",
      description: "HVAC, machinery, technical roles",
      inDemand: true
    }
  ];

  return (
    <section id="jobCategories" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary  mb-6">
            Job Categories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore opportunities across various industries in Saudi Arabia. 
            We specialize in connecting skilled workers with the right employers.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobCategories.map((category, index) => (
            <div 
              key={index} 
              className="trust-badge relative group cursor-pointer"
            >
              {/* High Demand Badge */}
              {category.inDemand && (
                <div className="absolute -top-3 -right-3 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  High Demand
                </div>
              )}
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <category.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                  {category.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {category.description}
                </p>
                
                <div className="mt-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => {
                      const categorySlug = category.title.toLowerCase().replace(/\s+/g, '-').replace('&', '');
                      navigate(`/jobs?category=${categorySlug}`);
                    }}
                    className="text-accent hover:text-accent/80 border-accent hover:border-accent/80"
                  >
                    View Opportunities →
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-card rounded-2xl p-8 shadow-soft border border-accent/20">
            <h3 className="text-2xl font-heading font-semibold text-primary mb-4">
              Don't see your skill category?
            </h3>
            <p className="text-muted-foreground mb-6">
              We're constantly expanding our opportunities. Submit your CV and we'll match you with suitable positions.
            </p>
            <button 
              onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              Submit Your CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobCategoriesSection;