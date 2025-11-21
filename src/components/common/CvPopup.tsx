import { FC, useEffect, useState } from "react";
import { X, CheckCircle2, Upload } from "lucide-react";
import soldierIcon from "../../assets/home/soldierIcon.svg";
import winningIcon from "../../assets/home/winningIcon.svg";
import supportIcon from "../../assets/home/supportIcon.svg";
import { countryCodes } from "@/data/countryCodes";
import { jobCategories } from "@/data/jobCategories";
const CVPopup: FC<{ onClose: () => void }> = ({ onClose }) => {

  const [monthYear, setMonthYear] = useState("");
  const [fileName, setFileName] = useState("");
  const [utmParams, setUtmParams] = useState({
      utm_source: "",
      utm_medium: "",
      utm_campaign: "",
      utm_term: "",
      utm_content: "",
      gclid: "",
    });
  
    // Capture UTM parameters on component mount
    useEffect(() => {
      
      const urlParams = new URLSearchParams(window.location.search);
      setUtmParams({
        utm_source: urlParams.get('utm_source') || '',
        utm_medium: urlParams.get('utm_medium') || '',
        utm_campaign: urlParams.get('utm_campaign') || '',
        utm_term: urlParams.get('utm_term') || '',
        utm_content: urlParams.get('utm_content') || '',
        gclid: urlParams.get('gclid') || '',
      });


      // Asia/Kolkata as you’re in India
  const d = new Date();
  const fmt = d.toLocaleString("en-GB", {
    month: "short",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  }); // e.g., "Oct 2025"
  setMonthYear(fmt.replace(" ", "-")); // "Oct-2025"

    }, []);
  const [formData, setFormData] = useState({
    SingleLine: "",
    PhoneNumber_countrycodeval: "",
    PhoneNumber_countrycode: "",
    Email: "",
    Dropdown: "",
    DecisionBox: "",
    FileUpload: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = e.target;

    // handle checkbox separately
    const value =
      target instanceof HTMLInputElement && target.type === "checkbox"
        ? target.checked
          ? "true"
          : ""
        : target.value;

    setFormData((prev) => ({
      ...prev,
      [target.name]: value,
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("formData submitted", formData);
    const form: HTMLFormElement | null = document.getElementById(
      `form-1`
    ) as HTMLFormElement;
    const redirectField = form.querySelector<HTMLInputElement>(
    'input[name="zf_redirect_url"]'
  );
  if (redirectField) {
    redirectField.value = `${window.location.origin}/thank-you`;
  }
    form?.submit();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="relative bg-white rounded-2xl shadow-lg w-full max-w-md p-6 sm:p-8 animate-fadeIn max-h-[95vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <h2 className="text-2xl font-semibold text-[#003366] text-center mb-1">
          Apply for Verified Saudi Jobs
        </h2>
        <p className="text-[#003366] text-sm italic text-center mb-4">
          “No Upfront Fee”
        </p>

        {/* Icons Row */}
        {/* <div className="flex justify-center gap-6 mb-6 text-sm font-medium text-[#003366]">
          <div className="flex flex-col items-center">
            <img src={soldierIcon} alt="Workers" className="w-6 h-6 mb-1" />
            <p>1000+ Workers</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={winningIcon} alt="Success" className="w-6 h-6 mb-1" />
            <p>95% Success</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={supportIcon} alt="Support" className="w-6 h-6 mb-1" />
            <p>24/7 Support</p>
          </div>
        </div> */}

        {/* Form */}
        <form
          action="https://forms.zohopublic.in/jobifyglobal/form/JobifyGlobalApplication/formperma/-uO2JaZtKh6HhZm7axeKT8CVEazw7cl0CNRpluKfGjs/htmlRecords/submit"
          method="POST"
          name="form"
          id="form-1"
          onSubmit={handleSubmit}
           encType="multipart/form-data"
          className="space-y-4"
        >
             {/* Hidden Fields */}
          <input type="hidden" name="zf_referrer_name" value="" />
          <input type="hidden" name="zf_redirect_url" value="" />
          <input type="hidden" name="zc_gad" value="" />
          <input type="hidden" name="utm_source" value={utmParams.utm_source} />
          <input type="hidden" name="utm_medium" value={utmParams.utm_medium} />
          <input type="hidden" name="utm_campaign" value={utmParams.utm_campaign} />
          <input type="hidden" name="utm_term" value={utmParams.utm_term} />
          <input type="hidden" name="utm_content" value={utmParams.utm_content} />
          <input type="hidden" name="gclid" value={utmParams.gclid} />
          <input type="hidden" name="client_code" value="asaqi" />
          <input type="hidden" name="MonthYear" value={monthYear} />
          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold text-[#003366] mb-1 text-left">
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              name="SingleLine"
              type="text"
              onChange={handleChange}
              placeholder="Enter Full name"
              value={formData.SingleLine}
              className="w-full bg-[#FBFBFB] border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-sm font-semibold text-[#003366] mb-1 text-left">
              Mobile Number<span className="text-red-500">*</span>
            </label>
            <div className="flex">
              <select
                name="PhoneNumber_countrycodeval"
                onChange={handleChange}
                value={formData.PhoneNumber_countrycodeval}
                required
                className="border bg-[#FBFBFB] border-gray-300 rounded-l-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
              >
                {countryCodes.map((country) => (
                  <option key={country.code} value={country.dial_code}>
                    {country.code} {country.dial_code}
                  </option>
                ))}
              </select>
              <input
                name="PhoneNumber_countrycode"
                onChange={handleChange}
                value={formData.PhoneNumber_countrycode}
                type="tel"
                placeholder="For Eg: 99898 98985"
                className="w-full border bg-[#FBFBFB] border-gray-300 rounded-r-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-[#003366] mb-1 text-left">
              Your Email<span className="text-red-500">*</span>
            </label>
            <input
              name="Email"
              onChange={handleChange}
              type="email"
              value={formData.Email}
              placeholder="You@Gmail.Com"
              className="w-full  bg-[#FBFBFB] border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
            />
          </div>

          {/* Job Category */}
          <div>
            <label className="block text-sm font-semibold text-[#003366] mb-1 text-left">
              Job Category<span className="text-red-500">*</span>
            </label>
            <select
              onChange={handleChange}
              name="Dropdown"
              value={formData.Dropdown}
              className="w-full bg-[#FBFBFB] border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
            >
              <option value="">Select your job category</option>
              {jobCategories.map((job) => (
                <option key={job.value} value={job.value}>
                  {job.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#003366] mb-1 text-left">
              Upload CV<span className="text-red-500">*</span>
            </label>
            <div className="border border-dashed border-gray-300 rounded-lg p-3  bg-[#FBFBFB] hover:bg-gray-50">
              <input
                name="FileUpload"
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                id="cvUpload"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setFileName(file.name);
                  } else {
                    setFileName("");
                  }
                }}
              />
              <label
                htmlFor="cvUpload"
                className="cursor-pointer text-sm flex items-center"
              >
                {!fileName ? (
                  <>
                    <Upload className="h-4" />
                    <p>Upload Your CV</p>
                  </>
                ) : (
                  <p className="text-sm text-green-700 mt-1 truncate">
                    <strong>Selected:</strong> {fileName}
                  </p>
                )}
              </label>
            </div>
          </div>
          <div className="w-full flex items-start gap-3 mt-6">
              <input
                name="DecisionBox"
                onChange={handleChange}
                type="checkbox"
                id="consent"
                checked={formData.DecisionBox === "true"}
                className="w-5 h-5 mt-0.5 accent-[#E9A908] border border-gray-400 rounded focus:ring-2 focus:ring-[#E9A908] cursor-pointer"
                required
              />
              <label
                htmlFor="consent"
                className="text-sm text-[#1E1E1E] leading-relaxed"
              >
                I agree to the collection and use of my data for application
                review and relevant opportunities.
                <span>*</span>
              </label>
            </div>

          {/* Apply Now Button */}
          <button
            type="submit"
            className="w-full bg-[#E9A908] hover:bg-yellow-500 text-white font-semibold py-2 rounded-md transition-all"
          >
            Apply Now
          </button>

          {/* No Upfront Payment Note */}
          {/* <div className="flex flex-col items-center text-center mt-2">
            <p className="flex items-center text-[#003366] font-medium text-sm">
              <CheckCircle2 className="w-4 h-4 mr-2 text-[#003366]" />
              No Upfront Payment
            </p>
            <p className="text-xs text-gray-500 mt-1 max-w-xs">
              We only charge after you secure your job and arrive in Saudi
              Arabia. Your success is our guarantee.
            </p>
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default CVPopup;
