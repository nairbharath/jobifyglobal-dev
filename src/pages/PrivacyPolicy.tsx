import { Helmet } from "react-helmet";
import Footer from "@/components/Footer";
import { ArrowLeft, Mail, MapPin, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/common/Header";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Mawbis International LLP</title>
        <meta 
          name="description" 
          content="Read the privacy policy of Mawbis International LLP to understand how we collect, use, and protect personal information for overseas job applications." 
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
              Privacy Policy
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl">
              Your privacy is important to us.
            </p>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="section-padding bg-secondary">
          <div className="container-custom max-w-4xl">
            <div className="bg-card rounded-lg shadow-soft p-6 md:p-10 space-y-10">
              
              {/* Information We Collect */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-heading font-semibold text-foreground border-b-2 border-accent pb-3">
                  Information We Collect
                </h2>
                <div className="space-y-4 text-foreground/80 leading-relaxed">
                  <p>
                    We collect the information that you provide when you submit your application or contact us through our website{" "}
                    <span className="font-semibold text-foreground">jobifyglobal.in</span>. This includes your name, phone number, email address, uploaded CV, and job preferences.
                  </p>
                  <p>
                    We may also collect automatic information such as IP address, browser type, and usage logs to improve our site performance.
                  </p>
                </div>
              </div>

              {/* How We Use Information */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-heading font-semibold text-foreground border-b-2 border-accent pb-3">
                  How We Use Information
                </h2>
                <ul className="space-y-3 text-foreground/80 leading-relaxed list-none">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>To contact candidates regarding overseas job opportunities.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>To process job applications and share with verified recruitment partners.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>To improve our website, advertisements, and candidate experience.</span>
                  </li>
                </ul>
                <p className="text-foreground/80 leading-relaxed">
                  We do not sell or rent personal information to any third party.
                </p>
              </div>

              {/* Data Security */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-heading font-semibold text-foreground border-b-2 border-accent pb-3">
                  Data Security
                </h2>
                <ul className="space-y-3 text-foreground/80 leading-relaxed list-none">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>All candidate data is securely stored using encrypted connections and protected Supabase cloud infrastructure.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>Access is limited only to authorized company personnel.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>We take all reasonable steps to prevent unauthorized access, alteration, or misuse of your data.</span>
                  </li>
                </ul>
              </div>

              {/* Your Rights */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-heading font-semibold text-foreground border-b-2 border-accent pb-3">
                  Your Rights
                </h2>
                <div className="space-y-4 text-foreground/80 leading-relaxed">
                  <p>
                    Candidates can request correction or deletion of their information at any time by emailing us at{" "}
                    <a 
                      href="mailto:support@mawbisglobal.in" 
                      className="text-accent hover:underline font-semibold"
                    >
                      support@jobifyglobal.in
                    </a>.
                  </p>
                  <p>
                    Upon verification, we will remove your data from our records as per applicable data-protection standards.
                  </p>
                </div>
              </div>

              {/* Updates to This Policy */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-heading font-semibold text-foreground border-b-2 border-accent pb-3">
                  Updates to This Policy
                </h2>
                <div className="space-y-4 text-foreground/80 leading-relaxed">
                  <p>
                    We may update this Privacy Policy periodically.
                  </p>
                  <p>
                    The latest version will always be available on this page with the effective date noted below.
                  </p>
                  <p className="font-semibold text-foreground">
                    Last updated: October 2025
                  </p>
                </div>
              </div>

              {/* Contact Us */}
              <div className="space-y-4 bg-secondary/50 rounded-lg p-6">
                <h2 className="text-2xl md:text-3xl font-heading font-semibold text-foreground border-b-2 border-accent pb-3">
                  Contact Us
                </h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  For any questions or requests about this policy, please contact:
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

export default PrivacyPolicy;
