import Header from "@/components/common/Header";
import Footer from "@/components/Footer";
import JobCategories from "@/components/home/JobCategories";
import { MessageCircle } from "lucide-react";
import React from "react";

const ThankYouHeader: React.FC = () => {
  return (
    <>
      <Header />
      <section className="bg-[linear-gradient(180deg,#FFFAEE_0%,#FAFAF8_48.08%,#FFFFFF_100%)] flex flex-col items-center justify-center text-center py-24 px-4">
        {/* Title and Message */}
        <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#003366] to-[#0066CC]  mb-3 mt-10 pb-1">
          Thank You for Reaching Out!
        </h1>
        <p className="text-[#130B0BE5] text-base md:text-lg">
          Your application has been successfully submitted.
        </p>
        <p className="text-[#130B0BE5] text-base md:text-lg mb-6">
          Our support team will review your details and connect you with
          verified employers shortly.
        </p>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-green-500 text-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600 hover:text-white transition-all duration-200"
        >
          {/* <FaWhatsapp className="text-xl" /> */}
          <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
        </a>
      </section>
      <div>
        <JobCategories />
      </div>

      <Footer />
    </>
  );
};

export default ThankYouHeader;
