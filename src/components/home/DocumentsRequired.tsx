
import { FC } from "react";
import passport from "../../assets/home/passport.svg"
import aadhar from "../../assets/home/aadhar.svg"
import pan from "../../assets/home/pan.svg";
import education from "../../assets/home/education.svg"
import certificate from "../../assets/home/certificate.svg";
import address from "../../assets/home/address.svg"
interface DocumentItem {
  title: string;
  description: string;
  icon: string;
  required?: boolean;
  optional?: boolean;
}

const RequiredDocuments: FC = () => {
  const row1: DocumentItem[] = [
    {
      title: "Passport",
      description: "Valid passport with minimum 6 months validity",
      icon: passport,
      required: true,
    },
    {
      title: "Aadhar Card",
      description: "Government issued identity proof",
      icon: aadhar,
      required: true,
    },
    {
      title: "PAN Card",
      description: "Permanent Account Number card",
      icon: pan,
      required: true,
    },
  ];

  const row2: DocumentItem[] = [
    {
      title: "Educational Certificates",
      description: "School/college certificates and marksheets",
      icon: education,
      required: true,
    },
    {
      title: "Work Experience Certificates",
      description: "School/college certificates and marksheets",
      icon:certificate,
      optional: true,
    },
  ];

  const addressProof: DocumentItem = {
    title: "Address Proof",
    description: "Utility bill, rent agreement, or bank statement",
    icon: address,
    required: true,
  };

  return (
    <section className="bg-white  pt-0 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12  rounded-2xl p-8 md:p-8">
        {/* Heading */}
        <h2 className="text-xl md:text-5xl font-semibold text-center bg-gradient-to-r from-[#003366] to-[#0066CC] bg-clip-text text-transparent mb-2 md:mb-4">
          Required Documents
        </h2>
        <p className="text-gray-600 text-sm md:text-xl text-center mb-6 md:mb-12">
          Please ensure you have the following documents ready before submitting
          your application.
        </p>

        {/* --- ROW 1 (3 Cards) --- */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {row1.map((doc, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl  py-2 px-3 md:p-5 flex items-start gap-4 shadow-[0_0_4px_0_rgba(31,38,46,0.10)] hover:shadow-md transition-all"
            >
              <div className="bg-[#FAFAFA] rounded-md p-2">
                <img
                  src={doc.icon}
                  alt={doc.title}
                  className="w-12 h-12 object-contain"
                />
              </div>

              <div>
                <h3 className=" text-sm md:text-lg font-semibold bg-gradient-to-r from-[#003366] to-[#0066CC] bg-clip-text text-transparent flex items-center gap-2">
                  {doc.title}
                  {doc.required && (
                    <span className="text-[8px] md:text-[12px] bg-[#F9F4E4] text-[#DFAF45] font-medium px-2 py-1 md:px-2 md:py-[2px] rounded-md">
                      Required
                    </span>
                  )}
                  {doc.optional && (
                    <span className="text-[8px] md:text-[12px] bg-[#F3F8E9] text-[#7BA63F] font-medium px-2 py-[2px] rounded-md">
                      Optional
                    </span>
                  )}
                </h3>
                <p className="text-sm text-[#555758] md:text-base mt-1">{doc.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* --- ROW 2 (2 Cards) --- */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {row2.map((doc, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl p-5 flex items-start gap-4 shadow-[0_0_4px_0_rgba(31,38,46,0.10)] hover:shadow-md transition-all"
            >
              <div className="bg-[#FAFAFA] rounded-md p-2">
                <img
                  src={doc.icon}
                  alt={doc.title}
                  className="w-12 h-12 object-contain"
                />
              </div>

              <div>
                <h3 className=" text-sm md:text-lg font-semibold bg-gradient-to-r from-[#003366] to-[#0066CC] bg-clip-text text-transparent flex items-center gap-2">
                  {doc.title}
                  {doc.required && (
                    <span className="text-[8px] md:text-[12px] bg-[#F9F4E4] text-[#DFAF45] font-medium px-2 py-[2px] rounded-md">
                      Required
                    </span>
                  )}
                  {doc.optional && (
                    <span className="text-[8px] md:text-[12px] bg-[#F3F8E9] text-[#7BA63F] font-medium px-2 py-[2px] rounded-md">
                      Optional
                    </span>
                  )}
                </h3>
                <p className="text-[#555758] text-sm md:text-base mt-1">{doc.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* --- ROW 3 (Asymmetric Layout) --- */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Address Proof - 35% width on desktop */}
          <div className="md:w-[35%] w-full border border-gray-200 rounded-2xl p-5 flex items-start gap-4 shadow-[0_0_4px_0_rgba(31,38,46,0.10)] hover:shadow-md transition-all">
            <div className="bg-[#FAFAFA] rounded-md p-2">
              <img
                src={addressProof.icon}
                alt={addressProof.title}
                className="w-12 h-12 object-contain"
              />
            </div>

            <div>
              <h3 className="text-sm md:text-lg font-semibold bg-gradient-to-r from-[#003366] to-[#0066CC] bg-clip-text text-transparent flex items-center gap-2">
                {addressProof.title}
                <span className="text-[8px] md:text-[12px] bg-[#F9F4E4] text-[#DFAF45] font-medium px-2 py-[2px] rounded-md">
                  Required
                </span>
              </h3>
              <p className="text-[#555758] text-sm md:text-base mt-1">
                {addressProof.description}
              </p>
            </div>
          </div>

          {/* Important Note - 65% width on desktop */}
          <div className="md:w-[65%] w-full bg-[#FFFDF9] border border-[#FFDD50] rounded-2xl p-6 md:p-8">
            <h3 className=" text-sm md:text-lg font-semibold bg-gradient-to-r from-[#003366] to-[#0066CC] bg-clip-text text-transparent mb-2">
              Important Note
            </h3>
            <p className="text-[#555758] text-sm md:text-base leading-relaxed">
              All documents should be clear, readable copies. Original documents
              will be verified during the interview process. For work experience
              certificates, please provide as many as available to strengthen
              your application.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequiredDocuments;
