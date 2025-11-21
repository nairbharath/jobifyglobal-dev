import { Helmet } from "react-helmet";
import Footer from "@/components/Footer";
import { ArrowLeft, Mail, MapPin, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/common/Header";

const TermsAndConditions = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | Mawbis International LLP</title>
        <meta 
          name="description" 
          content="Read the official terms and conditions of Mawbis International LLP regarding the use of jobifyglobal.in and our overseas employment facilitation services." 
        />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary-hover text-primary-foreground py-16 md:py-20">
          <div className="container-custom">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Terms & Conditions
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl">
              Please read our terms carefully before using our services.
            </p>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="section-padding bg-secondary">
          <div className="container-custom max-w-4xl">
            <div className="bg-card rounded-lg shadow-soft p-6 md:p-10 space-y-10">
              
              {/* Introduction */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-heading font-semibold text-foreground border-b-2 border-accent pb-3">
                  Introduction
                </h2>
                <div className="space-y-4 text-foreground/80 leading-relaxed">
                  <p>
                    These Terms & Conditions ("Terms") govern your use of the website{" "}
                    <span className="font-semibold text-foreground">jobifyglobal.in</span>, owned and operated by Mawbis International LLP ("we," "our," or "us").
                  </p>
                  <p>
                    By using our website or submitting any information, you agree to be bound by these Terms.
                  </p>
                  <p>
                    If you do not agree, please do not use our services.
                  </p>
                </div>
              </div>

              {/* Services */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-heading font-semibold text-foreground border-b-2 border-accent pb-3">
                  Services
                </h2>
                <div className="space-y-4 text-foreground/80 leading-relaxed">
                  <p>
                    Mawbis International LLP operates as a facilitation and coordination company connecting candidates with overseas employers and licensed recruitment agencies.
                  </p>
                  <p>
                    We are not a direct employer. All placements are managed through verified partners and government-approved channels.
                  </p>
                </div>
              </div>

              {/* Candidate Responsibilities */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-heading font-semibold text-foreground border-b-2 border-accent pb-3">
                  Candidate Responsibilities
                </h2>
                <ul className="space-y-3 text-foreground/80 leading-relaxed list-none">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>All applicants must provide true and accurate information when submitting applications or CVs.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>Any false information may result in rejection or legal consequences.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>Candidates are responsible for maintaining updated contact details.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>Submitting an application does not guarantee employment or visa approval.</span>
                  </li>
                </ul>
              </div>

              {/* Fees and Payments */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-heading font-semibold text-foreground border-b-2 border-accent pb-3">
                  Fees and Payments
                </h2>
                <div className="space-y-4 text-foreground/80 leading-relaxed">
                  <p>
                    Mawbis International LLP does not charge any upfront fees for registration or application.
                  </p>
                  <p>
                    Any applicable service charges or processing costs (if applicable) are communicated transparently and collected only after successful placement or as per official agreements.
                  </p>
                </div>
              </div>

              {/* Data Privacy */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-heading font-semibold text-foreground border-b-2 border-accent pb-3">
                  Data Privacy
                </h2>
                <div className="space-y-4 text-foreground/80 leading-relaxed">
                  <p>
                    Personal data collected through the website is handled according to our{" "}
                    <Link 
                      to="/privacy-policy" 
                      className="text-accent hover:underline font-semibold"
                    >
                      Privacy Policy
                    </Link>.
                  </p>
                  <p>
                    By using our website, you consent to our data-handling practices described therein.
                  </p>
                </div>
              </div>

              {/* Limitation of Liability */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-heading font-semibold text-foreground border-b-2 border-accent pb-3">
                  Limitation of Liability
                </h2>
                <div className="space-y-4 text-foreground/80 leading-relaxed">
                  <p>
                    Mawbis International LLP strives to maintain accurate information but does not guarantee that all job listings or partner details are error-free.
                  </p>
                  <p>
                    We shall not be liable for any direct or indirect loss resulting from use of the site, delay, or unavailability of services.
                  </p>
                </div>
              </div>

              {/* Intellectual Property */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-heading font-semibold text-foreground border-b-2 border-accent pb-3">
                  Intellectual Property
                </h2>
                <div className="space-y-4 text-foreground/80 leading-relaxed">
                  <p>
                    All content, text, graphics, and logos on this website are the property of Mawbis International LLP.
                  </p>
                  <p>
                    Unauthorized use, copying, or reproduction of materials is strictly prohibited.
                  </p>
                </div>
              </div>

              {/* Jurisdiction */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-heading font-semibold text-foreground border-b-2 border-accent pb-3">
                  Jurisdiction
                </h2>
                <div className="space-y-4 text-foreground/80 leading-relaxed">
                  <p>
                    These Terms are governed by the laws of India.
                  </p>
                  <p>
                    All disputes shall be subject to the jurisdiction of courts located in Mumbai, Maharashtra.
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="space-y-4 bg-secondary/50 rounded-lg p-6">
                <h2 className="text-2xl md:text-3xl font-heading font-semibold text-foreground border-b-2 border-accent pb-3">
                  Contact
                </h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  For queries related to these Terms, contact:
                </p>
                <div className="space-y-4">
                  <h3 className="text-xl font-heading font-semibold text-foreground">
                    Mawbis International LLP
                  </h3>
                  
                  <div className="space-y-3 text-foreground/80">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <span>A321, Master Mind 4, Royal Palms, Goregaon (E), Mumbai, Maharashtra 400065, India</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                      <a 
                        href="mailto:support@mawbisglobal.in" 
                        className="text-accent hover:underline font-semibold"
                      >
                        support@jobifyglobal.in
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Globe className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="font-semibold">jobifyglobal.in</span>
                    </div>
                  </div>
                  
                  <p className="text-foreground font-semibold mt-4">
                    Last updated: October 2025
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default TermsAndConditions;
