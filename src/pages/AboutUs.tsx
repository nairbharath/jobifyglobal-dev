import React, { useState } from "react";
import {
  Users,
  Building2,
  Award,
  Headphones,
  Shield,
  Wallet,
  Plane,
} from "lucide-react";
import Header from "@/components/common/Header";
import Footer from "@/components/Footer";
import buildingIcon from "../assets/home/buildingIcon.svg";
import soldierIcon from "../assets/home/soldierIcon.svg";
import winningIcon from "../assets/home/winningIcon.svg";
import supportIcon from "../assets/home/supportIcon.svg";
import aboutBanner from "../assets/about/aboutBanner.svg";
import partner from "../assets/about/partner.svg";
import money from "../assets/about/money.svg";
import airplane from "../assets/about/airplane.svg";
import CVPopup from "@/components/common/CvPopup";
const About: React.FC = () => {
  const [showPopup,setShowPopup]=useState(false);
  return (
    <div className="">
      <Header />
      <section
        style={{ backgroundImage: `url(${aboutBanner})` }}
        className=" flex-col bg-cover bg-no-repeat h-full md:h-[680px] pt-20 pb-20 md:pt-32 px-4 md:px-16"
      >
        <div className="flex items-center justify-center ">
          {/* Stats Header */}
          <div className="flex flex-wrap py-2 md:px-6  w-fit rounded-full md:border md:border-[#048] md:justify-center md:gap-6 ">
            <div className="flex flex-col md:flex-row md:gap-4">
              <div className="flex items-center gap-2 text-gray-800 font-medium">
                <img src={soldierIcon} />
                <span>
                  <strong className="bg-gradient-to-r from-[#003366] to-[#0066CC] bg-clip-text text-transparent">
                    1000+
                  </strong>{" "}
                  Workers Placed
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-800 font-medium">
                <img src={buildingIcon} />
                <span>
                  <strong className="bg-gradient-to-r from-[#003366] to-[#0066CC] bg-clip-text text-transparent">
                    50+
                  </strong>{" "}
                  Partner Companies
                </span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:gap-4">
              <div className="flex items-center gap-2 text-gray-800 font-medium">
                <img src={winningIcon} />
                <span>
                  <strong className="bg-gradient-to-r from-[#003366] to-[#0066CC] bg-clip-text text-transparent">
                    95%
                  </strong>{" "}
                  Success Rate
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-800 font-medium">
                <img src={supportIcon} />
                <span>
                  <strong className="bg-gradient-to-r from-[#003366] to-[#0066CC] bg-clip-text text-transparent">
                    24/7
                  </strong>{" "}
                  Support Available
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="max-w-6xl mx-auto md:text-center mt-2 md:mt-10">
          <h2 className="text-2xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#003366] to-[#0066CC]  mb-3 md:mb-6 pb-1.5">
            About Jobify Global <br />
            Building the Workforce of Tomorrow, Today
          </h2>
          <p className="text-[#130B0BE5] max-w-5xl mx-auto leading-relaxed text-sm md:text-xl">
            We empower skilled professionals to achieve global career growth.
            Our mission is to make overseas employment simple, transparent, and
            safe. We rigorously connect top-tier Indian talent with verified,
            ethical employers across the Middle East, primarily in Saudi Arabia.
            <br/>We believe your career potential should never be limited by geography.
          </p>
          <p className="bg-gradient-to-r from-[#9A3B0B] from-[33.28%] to-[#E9A908] to-[67.25%] bg-clip-text text-transparent text-sm md:text-lg font-medium mt-3">
            ✓ No Payment Until Job Secured
          </p>
        </div>
      </section>
      {/* Why Trust Us */}
      <div className="bg-white py-10 md:py-16 px-6">
        <h3 className="text-2xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#003366] to-[#0066CC]  mb-4 md:mb-12 md:text-center">
          Why We Are The First Choice For Job Finders
        </h3>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Trusted Employers */}
          <div className="border border-[#014285] rounded-md p-4 md:p-8 text-center shadow-sm hover:shadow-lg transition-shadow h-fit">
            <div className="flex items-center gap-3">
              <img src={partner} width="35" height="35" />
              <h4 className="text-[#004386] font-semibold text-base md:text-2xl mb-2">
                Verified, Trusted Employers
              </h4>
            </div>

            <div className="mt-2">
              <p className="text-gray-600 leading-relaxed text-left">
                We partner only with verified companies that follow ethical hiring practices. Every job listing is screened to ensure worker safety and legal compliance.

              </p>
            </div>
          </div>
          <div className="border border-[#014285] rounded-md p-4 md:p-8 text-center shadow-sm hover:shadow-lg transition-shadow h-fit">
            <div className="flex items-center gap-3">
              <img src={money} width="35" height="35" />
              <h4 className="text-[#004386] font-semibold text-base md:text-2xl mb-2">
                Zero Upfront Financial Risk
              </h4>
            </div>

            <div className="mt-2">
              <p className="text-gray-600 leading-relaxed text-left">
                You don't pay anything until your job and visa are officially confirmed. No hidden fees, no false promises, just honest opportunities that deliver results.

              </p>
            </div>
          </div>
          <div className="border border-[#014285] rounded-md p-4 md:p-8 text-center shadow-sm hover:shadow-lg transition-shadow min-h-36">
            <div className="flex items-center gap-3">
              <img src={airplane} width="35" height="35" />
              <h4 className="text-[#004386] font-semibold text-base md:text-2xl mb-2">
                End-to-End Support
              </h4>
            </div>

            <div className="mt-2">
              <p className="text-gray-600 leading-relaxed text-left">
                From preparing your documents to booking your flight, we're with you at every step. Our support team ensures your journey to Saudi Arabia is smooth and stress-free.

              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-14" id="contact">
          <button onClick={()=>setShowPopup(true)} className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-3 rounded-full shadow-md transition">
            Start Your Application
          </button>
          {showPopup && <CVPopup onClose={() => setShowPopup(false)} />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
