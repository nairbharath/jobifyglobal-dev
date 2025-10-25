// import { FC } from "react";
// import file1 from "../../assets/home/file1.svg";
// import file2 from "../../assets/home/file2.svg";
// import file3 from "../../assets/home/file3.svg";
// import file4 from "../../assets/home/AirplaneTilt.svg";
// import tick from "../../assets/home/tick.svg";
// import group from "../../assets/home/group.svg";
// import coin from "../../assets/home/coin.svg";
// import darkTick from "../../assets/home/darkTick.svg"
// const steps = [
//   {
//     id: 1,
//     icon: file1,
//     title: "STEP 1: Apply Online",
//     desc: "Submit your CV or fill our simple application form",
//   },
//   {
//     id: 2,
//     icon: file2,
//     title: "STEP 2: Shortlisting",
//     desc: "We match you with the right employer based on your skills",
//   },
//   {
//     id: 3,
//     icon: file3,
//     title: "STEP 3: Interview & Selection",
//     desc: "Online or offline interview with Saudi employer",
//   },
//   {
//     id: 4,
//     icon: file4,
//     title: "STEP 4: Visa & Travel",
//     desc: "We guide you through visa process until you fly",
//   },
// ];

// const HowItWorks: FC = () => {
//   return (
//     <section className="bg-white py-20">
//       <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
//         {/* Heading */}
//         <h2 className="text-3xl md:text-5xl font-semibold bg-gradient-to-r from-[#003366] to-[#0066CC] bg-clip-text text-transparent  mb-3">
//           How It Works
//         </h2>
//         <p className="text-gray-600 mb-6">
//           Our simple 4-step process makes getting a job in Saudi Arabia easy and
//           transparent
//         </p>

//         {/* Payment badge */}
//         <div className="inline-block bg-[#98C22E1A] text-[#3A4D04] font-bold px-5 py-2 rounded-full border border-[#98C22E33] mb-14">
//           <p className="flex gap-2"><img src={darkTick}/>Payment Only After Job Secured & Visa Approved</p>
//         </div>

//         {/* Steps Row */}
//         <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-10 md:gap-0 relative mb-16">
//           {steps.map((step, i) => (
//             <div
//               key={step.id}
//               className="flex-1 flex flex-col items-center text-center px-4 md:px-6"
//             >
//               <div className="relative mb-3 border-2 border-[#003366] rounded-full p-2">
//                 <div className="bg-gradient-to-b from-[#003366] to-[#0066CC] w-16 h-16 rounded-full flex items-center justify-center shadow-[0_0_4px_0_rgba(31,38,46,0.10)]">
//                   <img src={step.icon} alt={step.title} className="w-8 h-8" />
//                 </div>
//                 {/* connector line except last */}
//                 {i < steps.length - 1 && (
//                   <div className="hidden lg:block absolute top-1/2 left-full translate-x-0 w-48 border-t border-dashed border-[#003366]/20 z-[0]" />
//                 )}
//               </div>
//               <h3 className="text-lg md:text-base font-semibold  mb-1">
//                 {step.title}
//               </h3>
//               <p className=" text-sm max-w-[220px] mx-auto">{step.desc}</p>
//             </div>
//           ))}
//         </div>

//         {/* Bottom Cards */}
//         <div className="grid md:grid-cols-2 gap-8 text-left">
//           {/* Left Card */}
//           <div className="border border-[#002561] rounded-2xl p-6 md:p-6 flex flex-col lg:flex-row items-start gap-4  ">
//             <div className="flex-1 ">
//               <h3 className="text-lg md:text-2xl font-semibold bg-gradient-to-r from-[#003366] to-[#0066CC] bg-clip-text text-transparent mb-4">
//                 What We Handle For You
//               </h3>
//               <ul className="space-y-2 text-[#565757] text-base">
//                 <li className="flex gap-1 items-center">
//                   <img src={tick} alt="tick" /> Document preparation and
//                   verification
//                 </li>
//                 <li className="flex gap-1 items-center">
//                   <img src={tick} alt="tick" /> Medical examination coordination
//                 </li>
//                 <li className="flex gap-1 items-center">
//                   <img src={tick} alt="tick" /> Visa application and processing
//                 </li>
//                 <li className="flex gap-1 items-center">
//                   <img src={tick} alt="tick" />
//                   Flight booking and travel arrangements
//                 </li>
//               </ul>
//             </div>
//             <img
//               src={group}
//               alt="Documents illustration"
//               className="w-24 md:w-40 object-contain"
//             />
//           </div>

//           {/* Right Card */}
//           <div className="border border-[#F4E4A2] rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row items-start gap-4 shadow-[0_0_4px_0_rgba(31,38,46,0.10)] bg-[#FFFDF9]">
//             <div className="flex-1">
//               <h3 className="text-lg md:text-2xl font-semibold bg-gradient-to-r from-[#003366] to-[#0066CC] bg-clip-text text-transparent mb-2">
//                 Your Investment
//               </h3>
//               <p className="text-[#D97E08] text-3xl font-bold mb-2 font-heading">
//                 ₹0 Upfront
//               </p>
//               <p className="text-[#565757] text-base font-normal mb-3">
//                 We believe in your success. That’s why we only charge our
//                 service fee after you’ve secured your job and received your visa
//                 approval.
//               </p>
//               <p className="text-sm text-[#036821] font-normal w-full">
//                 ✓ No hidden charges &nbsp; ✓ Transparent pricing &nbsp; ✓
//                 Success-based payment
//               </p>
//             </div>

//             <img
//               src={coin}
//               alt="Investment illustration"
//               className="w-20 md:w-24 object-contain"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowItWorks;
import { FC } from "react";
import file1 from "../../assets/home/file1.svg";
import file2 from "../../assets/home/file2.svg";
import file3 from "../../assets/home/file3.svg";
import file4 from "../../assets/home/AirplaneTilt.svg";
import tick from "../../assets/home/tick.svg";
import group from "../../assets/home/group.svg";
import coin from "../../assets/home/coin.svg";
import darkTick from "../../assets/home/darkTick.svg";

const steps = [
  {
    id: 1,
    icon: file1,
    title: "STEP 1: Apply Online",
    desc: "Submit your CV or fill our simple application form",
  },
  {
    id: 2,
    icon: file2,
    title: "STEP 2: Shortlisting",
    desc: "We match you with the right employer based on your skills",
  },
  {
    id: 3,
    icon: file3,
    title: "STEP 3: Interview & Selection",
    desc: "Online or offline interview with Saudi employer",
  },
  {
    id: 4,
    icon: file4,
    title: "STEP 4: Visa & Travel",
    desc: "We guide you through visa process until you fly",
  },
];

const HowItWorks: FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        {/* Heading */}
        <h2 className="text-xl md:text-5xl font-semibold bg-gradient-to-r from-[#003366] to-[#0066CC] bg-clip-text text-transparent mb-3">
          How It Works
        </h2>
        <p className="text-gray-600 mb-6 text-sm md:text-xl">
          Our simple 4-step process makes getting a job in Saudi Arabia easy and
          transparent
        </p>

        {/* Payment badge */}
        <div className="inline-block bg-[#98C22E1A] text-[#3A4D04] font-bold px-5 py-2 rounded-full border border-[#98C22E33] mb-14">
          <p className="flex items-center justify-center  text-[10px] md:text-base md:gap-2">
            <img src={darkTick} alt="tick" className="w-4 h-4" />
            Payment Only After Job Secured & Visa Approved
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="relative flex flex-col items-start md:flex-row md:items-center justify-center gap-10 md:gap-0 mb-16">
          {steps.map((step, i) => (
            <div
              key={step.id}
              className="relative flex items-start md:items-center md:flex-col text-left md:text-center w-full md:w-auto"
            >
              {/* Icon + Connector */}
              <div className="relative flex flex-col items-center mr-4 md:mr-0 md:mb-3">
                <div className="border-2 border-[#003366] rounded-full p-2 bg-white">
                  <div className="bg-gradient-to-b from-[#003366] to-[#0066CC] w-14 h-14 rounded-full flex items-center justify-center shadow-[0_0_4px_0_rgba(31,38,46,0.10)]">
                    <img
                      src={step.icon}
                      alt={step.title}
                      className="w-7 h-7 object-contain"
                    />
                  </div>
                </div>

                {/* vertical line for mobile */}
                {i < steps.length - 1 && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 h-16 w-[2px] border-l border-dashed border-[#003366]/20 md:hidden" />
                )}

                {/* horizontal line for desktop */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-full translate-x-0 w-48 border-t border-dashed border-[#003366]/20 z-[0]" />
                )}
              </div>

              {/* Text */}
              <div>
                <h3 className="text-base font-semibold mb-1 text-[#003366]">
                  {step.title}
                </h3>
                <p className="text-sm text-[#555] leading-snug max-w-[260px] md:mx-auto">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {/* Left Card */}
          <div className="border border-[#002561] rounded-2xl p-6 md:p-6 flex flex-col md:flex-row items-start gap-0 md:gap-4 w-full ">
            <div className="flex-1">
              <h3 className="text-lg md:text-2xl font-semibold bg-gradient-to-r from-[#003366] to-[#0066CC] bg-clip-text text-transparent mb-4">
                What We Handle For You
              </h3>
              <ul className="space-y-2 text-[#565757] text-sm md:text-base">
                <li className="flex gap-2 items-center">
                  <img src={tick} alt="tick" /> Document preparation and
                  verification
                </li>
                <li className="flex gap-2 items-center">
                  <img src={tick} alt="tick" /> Medical examination coordination
                </li>
                <li className="flex gap-2 items-center">
                  <img src={tick} alt="tick" /> Visa application and processing
                </li>
                <li className="flex gap-2 items-center">
                  <img src={tick} alt="tick" />
                  Flight booking and travel arrangements
                </li>
              </ul>
            </div>
            <img
              src={group}
              alt="Documents illustration"
              className="w-auto h-auto md:w-40 object-contain mx-auto md:mx-0"
            />
          </div>

          {/* Right Card */}
          <div className="border border-[#F4E4A2] rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row items-start gap-4 shadow-[0_0_4px_0_rgba(31,38,46,0.10)] bg-[#FFFDF9]">
            <div className="flex-1">
              <h3 className="text-sm md:text-2xl font-semibold bg-gradient-to-r from-[#003366] to-[#0066CC] bg-clip-text text-transparent mb-2">
                Your Investment
              </h3>
              <p className="text-[#D97E08] text-xl md:text-3xl font-bold mb-2 font-heading">
                ₹0 Upfront
              </p>
              <p className="text-[#565757] text-sm md:text-base font-normal mb-3">
                We believe in your success. That’s why we only charge our service
                fee after you’ve secured your job and received your visa approval.
              </p>
              <p className="text-sm text-[#036821] font-normal">
                ✓ No hidden charges &nbsp;&nbsp; ✓ Transparent pricing
                &nbsp;&nbsp; ✓ Success-based payment
              </p>
            </div>

            <img
              src={coin}
              alt="Investment illustration"
              className="w-20 md:w-24 object-contain mx-auto md:mx-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
