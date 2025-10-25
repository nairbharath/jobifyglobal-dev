import { Briefcase, Facebook, Instagram, MessageCircle, Mail, Phone } from "lucide-react";
import JobApplicationPopup from "./common/JobApplicationPopup";
import { useState } from "react";

const Footer = () => {
  const [showPopup,setShowPopup]=useState(false);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/919999999999', '_blank');
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-heading font-bold">Jobify Global</h3>
            </div>
            
            <p className="text-primary-foreground/80 leading-relaxed mb-6 max-w-md">
              Your trusted partner for finding skilled job opportunities in Saudi Arabia. 
              We connect Indian workers with verified employers in the Gulf region.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/80">+91 9999999999</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/80">info@jobifyabroad.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="/about-us"
                  // onClick={() => scrollToSection('about')}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('testimonials')}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <a href="/contact-us"
                  // onClick={() => scrollToSection('contact')}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a 
                  href="/privacy-policy" 
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Privacy Policy
                </a>
              </li>

               <li>
                <a 
                  href="/terms-and-conditions" 
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Terms and Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li className="text-primary-foreground/80">Job Placement</li>
              <li className="text-primary-foreground/80">Visa Processing</li>
              <li className="text-primary-foreground/80">Document Support</li>
              <li className="text-primary-foreground/80">Travel Assistance</li>
              <li className="text-primary-foreground/80">24/7 Support</li>
            </ul>
          </div>
        </div>

        {/* Social Media & CTA */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Social Media */}
          <div className="flex items-center gap-4">
            <span className="text-primary-foreground/80 font-medium">Follow Us:</span>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                // href="#" 
                href="https://www.instagram.com/__jo_b_if_y?igsh=Z2c5Y21idjRpODB0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <button 
                onClick={openWhatsApp}
                className="w-10 h-10 bg-success hover:bg-success/90 rounded-full flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* CTA */}
          <button 
            // onClick={() => scrollToSection('apply')}
            onClick={()=>setShowPopup(true)}
            className="bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
          >
            Start Your Journey Today
          </button>
          {showPopup && (
              <JobApplicationPopup onClose={() => setShowPopup(false)} />
            )}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <div>
              © 2025 Jobify Global. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="/terms-and-conditions" className="hover:text-accent transition-colors">Terms & Conditions</a>
              <a href="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;