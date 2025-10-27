import React, { useState } from "react";
import SubmitApplicationForm from "../common/SubmitApplicationForm";
import heroBg from "../../assets/home/hero-home-bacground.svg"
import soldierIcon from "../../assets/home/soldierIcon.svg";
import buildingIcon from "../../assets/home/buildingIcon.svg"
import winningIcon from "../../assets/home/winningIcon.svg";
import supportIcon from "../../assets/home/supportIcon.svg"
const HeroSection: React.FC = () => {
  
  return (
    <section className="bg-cover bg-center bg-no-repeat py-16 overflow-hidden pt-24 md:h-[1200px]" style={{backgroundImage:`url(${heroBg})`}}>
      <div className="flex justify-center items-center flex-col ml-5 md:ml-0 md:flex-row mb-6 gap-3">
        <div className="flex gap-4">
           <div className="flex items-center gap-0">
            <img src={soldierIcon}/>
            <span className="mx-2 bg-gradient-to-r from-[#003366] to-[#0066CC] bg-clip-text text-transparent font-normal text-sm md:text-lg"><span className="font-extrabold bg-gradient-to-r from-[#003366] to-[#0066CC] bg-clip-text text-transparent">1000+</span> Workers Placed</span>
        </div>
        <div className="flex items-center gap-0">
            <img src={buildingIcon}/>
            <span className="mx-2 bg-gradient-to-r from-[#003366] to-[#0066CC] bg-clip-text text-transparent font-normal text-sm md:text-lg"><span className="font-extrabold bg-gradient-to-r from-[#003366] to-[#0066CC] bg-clip-text text-transparent">50+</span> Partner Companies</span>
        </div>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-0">
            <img src={winningIcon}/>
            <span className="mx-2 bg-gradient-to-r from-[#003366] to-[#0066CC] bg-clip-text text-transparent font-normal text-sm md:text-lg"><span className="font-extrabold bg-gradient-to-r from-[#003366] to-[#0066CC] bg-clip-text text-transparent">95%</span> Success Rate</span>
        </div>
        <div className="flex items-center gap-0">
            <img src={supportIcon}/>
            <span className="mx-2 bg-gradient-to-r from-[#003366] to-[#0066CC] bg-clip-text text-transparent font-normal text-sm md:text-lg"><span className="font-extrabold bg-gradient-to-r from-[#003366] to-[#0066CC] bg-clip-text text-transparent">24/7</span> Success Rate</span>
        </div>
        </div>
      </div>
      <h1 className="text-xl md:text-5xl  font-heading font-semibold text-center bg-gradient-to-r from-[#003366] to-[#0066CC] bg-clip-text text-transparent pb-1.5">
      High-Value Jobs in Saudi Arabia
      </h1>
      <p className="text-center text-[rgba(19, 11, 11, 0.90)] mt-3 text-sm md:text-xl font-body font-normal">
        Secure Verified Jobs for Skilled Indian Professionals. No Payment Until You're Hired.
      </p>
      <p className="text-center bg-gradient-to-r from-[#9A3B0B] from-[33.28%] to-[#E9A908] to-[67.25%] bg-clip-text text-transparent text-sm md:text-lg mt-4 font-normal">
        ✓ No Payment Until Job Secured
      </p>

      {/* Form Card */}
      <SubmitApplicationForm/>
    </section>
  );
};

export default HeroSection;
