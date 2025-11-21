import React from "react";
import { Mail, Clock, MapPin, Phone, Send, MessageCircle } from "lucide-react";
import SubmitApplicationForm from "@/components/common/SubmitApplicationForm";
import Header from "@/components/common/Header";
import Footer from "@/components/Footer";
import heroBg from "../assets/home/hero-home-bacground.svg";
import ContactPageForm from "@/components/common/ContactPageForm";


const address =
  "A321, Master Mind 4, Royal Palms, Goregaon (E), Mumbai, Maharashtra 400065 India";

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  address
)}`;

const ContactSection: React.FC = () => {
  return (
    <div>
      <Header />
      <section
        className="py-28 md:h-[1300px]"
        style={{
          backgroundImage: `
    linear-gradient(91.65deg, rgba(226,239,245,0.5) 1.34%, rgba(247,241,227,0.5) 98.66%),
    linear-gradient(0deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%),
    url(${heroBg})
  `,
          backgroundBlendMode: "multiply, multiply, normal",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-2xl md:text-4xl font-semibold text-sky-700">
              Connect With Our Talent Solutions For Your ‘Right Job’
            </h1>
            <p className="text-neutral-600 mt-3 text-base font-heading">
              Whether you're a candidate or an enterprise partner, our dedicated
              team is ready to provide immediate, expert assistance.
            </p>
          </div>
          <ContactPageForm />
          <div className="flex justify-center items-center">
            {/* WhatsApp CTA */}
            <div className="flex flex-col md:flex-row mt-8 p-5  bg-white md:w-[1100px] max-w-4xl gap-5 md:gap-20 rounded-lg  border-[5px] border-[#FFFFFFC4]">
              <div>
                <h2 className="text-gray-700 mb-3">Chat with Us on WhatsApp</h2>
                <p>Get quick, personal support directly from our team.</p>
              </div>

              <a
                href="https://wa.me/919967262012"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-xl font-medium transition-all flex-1"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
          {/* Contact Section */}
          <div className="flex items-center justify-center">
            <div className="bg-white rounded-2xl shadow-md p-10 mt-12 max-w-[1000px] border-[5px] border-[#FFFFFFC4]">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
              {/* Contact Number */}
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center gap-3 mb-2">
                  <Phone className="text-[#424242] w-6 h-6" />
                  <h4 className="font-semibold text-[#424242] text-base">
                    Contact Number
                  </h4>
                </div>
                <a  href="tel: +91 99672 62012"className="text-[#E9A908] font-medium text-base -mt-1 md:ml-10">
                  +91 99672 62012
                </a>
              </div>

                {/* Email */}
                <div className="flex flex-col items-center md:items-start">
                  <div className="flex items-center gap-3 mb-2">
                    <Mail className="text-[#424242] w-6 h-6" />
                    <h4 className="font-semibold text-gray-800 text-lg">
                      Send an Email
                    </h4>
                  </div>
                  <div className="text-[#E9A908] text-base space-y-1">
                    <a
                      href="mailto:support@jobifyglobal.in?subject=Support%20Inquiry%20"
                      className="hover:underline"
                    >
                      support@jobifyglobal.in
                    </a>
                    <br />
                    <a
                      href="mailto:careers@jobifyglobal.in?subject=Career%20Inquiry%20"
                      className="hover:underline"
                    >
                      careers@jobifyglobal.in
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex flex-col items-center md:items-start">
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="text-[#424242] w-6 h-6" />
                    <h4 className="font-semibold text-gray-800 text-lg">
                      Working Hours
                    </h4>
                  </div>
                  <p className="text-gray-600 text-base leading-relaxed md:ml-7">
                    Monday to Friday:
                    <br /> 9:00am – 7:00pm IST
                  </p>
                </div>

                {/* Office Address */}
                <div className="flex flex-col items-center md:items-start">
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className="text-[#424242] w-6 h-6" />
                    <h4 className="font-semibold text-gray-800 text-lg">
                      Office
                    </h4>
                  </div>
                  {/* <p className="text-gray-600 text-base leading-relaxed md:ml-7">
                 A321, Master Mind 4, Royal Palms, Goregaon (E), Mumbai, Maharashtra 400065 India

                </p> */}
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors block"
                    aria-label={`Open address in Google Maps: ${address}`}
                  >
                    A321, Master Mind 4, Royal Palms,
                    <br />
                    Goregaon (E),
                    <br />
                    Mumbai, Maharashtra 400065
                    <br />
                    India
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default ContactSection;
