import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Briefcase } from "lucide-react";
import Logo from "@/assets/LogoFull.svg";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPopup,setShowPopup]=useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/20 bg-white">
      <div className="container-custom max-w-[1280px] mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <a href="/"><img src={Logo} alt="Logo" className="md:w-[200px] w-[150px] md:h-[50px] h-[40px]" /></a>
            
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="/about-us"
              className="text-foreground hover:text-primary transition-colors font-medium md:text-[14px] text-[12px]"
            >
              About Us
            </a>
            {/* <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-foreground hover:text-primary transition-colors font-medium md:text-[14px] text-[12px]"
            >
              Testimonials
            </button> */}
            <a href="/contact-us"
              className="text-foreground hover:text-primary transition-colors font-medium md:text-[14px] text-[12px]"
            >
              Contact Us
            </a>
            <Button 
              className="cursor-pointer py-[8px] px-[24px] rounded-[12px] bg-[#FCA229] hover:bg-[#FCA229]/80 md:text-[16px] text-[14px] font-normal text-white"
              size="default"
              onClick={() => scrollToSection('contact')}
            >
              Submit Your CV
            </Button>
            
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden bg-white text-[#000000] hover:bg-white p-3 rounded-md"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-card border-t  shadow-none border-none">
          <div className="container-custom py-4">
            <nav className="flex flex-col gap-4">
              <a 
                href="/about-us"
                className="text-left text-foreground hover:text-primary transition-colors font-[14px] py-2"
              >
                About
              </a>
              {/* <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-left text-foreground hover:text-primary transition-colors font-[14px] py-2"
              >
                Testimonials
              </button> */}
              <a href="/contact-us"
                // onClick={() => scrollToSection('contact')}
                className="text-left text-foreground hover:text-primary transition-colors font-[14px] py-2"
              >
                Contact Us
              </a>
              {/* <Button 
                className="cursor-pointer py-[8px] px-[24px] rounded-[12px] bg-[#FCA229] hover:bg-[#FCA229]/80 md:text-[16px] text-[14px] font-normal text-white"
                size="default"
                onClick={() => scrollToSection('apply')}  
              >
                Apply Now
              </Button> */}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;