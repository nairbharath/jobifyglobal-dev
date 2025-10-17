import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Users } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('apply');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-overlay-light pt-20">
        <div className="max-w-4xl mx-auto">
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-overlay-light/10 backdrop-blur-sm rounded-full px-4 py-2">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">Saudi Arabia Jobs</span>
            </div>
            <div className="hidden flex items-center gap-2 bg-overlay-light/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Users className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">1000+ Workers Placed</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
            Your Gateway to Jobs in{" "}
            <span className="text-accent">Saudi Arabia</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-overlay-light/90">
            Trusted recruitment for skilled Indian workers. Start your journey today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="cta" 
              size="xl"
              onClick={scrollToContact}
              className="w-full sm:w-auto min-w-[200px]"
            >
              Apply Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              onClick={scrollToContact}
              className="hidden w-full sm:w-auto min-w-[200px] border-overlay-light/50 text-overlay-light hover:bg-overlay-light hover:text-primary"
            >
              Upload CV
            </Button>
          </div>

          {/* Trust Statement */}
          <div className="mt-12 p-6 bg-overlay-light/10 backdrop-blur-sm rounded-2xl border border-overlay-light/20">
            <p className="text-lg font-medium text-accent mb-2">✓ No Payment Until Job Secured</p>
            <p className="text-overlay-light/80">We only take payment after you successfully get your job and visa</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-overlay-light/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;