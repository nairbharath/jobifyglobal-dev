import { FC, useState } from "react";
import submitCV from "../../assets/home/submitCV.svg"
import CVPopup from "../common/CvPopup";
const SubmitCVSection: FC = () => {
  const [showPopup,setShowPopup]=useState(false);
  return (
    <section className="bg-white  pt-14 md:p-14j ">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row justify-center lg:gap-40">
        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">
          <h2 className="text-lg md:text-4xl font-semibold text-[#036] mt-10  mb-1 md:mb-4">
          Don't See Your Skill Category Listed?
          </h2>
          <p className="text-[#2A2424]  text-sm md:text-xl font-normal mb-8 max-w-lg">
            We’re onboarding new verified employers and niche roles. Browse our database of current vacancies to explore opportunities for skilled professionals like you.
          </p>
          <button onClick={()=>setShowPopup(true)} className="w-full md:w-fit  bg-[#E9A908] hover:bg-[#C58E1C] text-white font-semibold py-3 px-8 rounded-lg transition-all">
            Submit Your CV
          </button>
          {showPopup && <CVPopup onClose={() => setShowPopup(false)} />}
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center">
          <img
            src={submitCV}
            alt="Submit your CV illustration"
            className="w-[80%] md:w-[70%] lg:w-[60%] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default SubmitCVSection;
