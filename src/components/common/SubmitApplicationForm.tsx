import { countryCodes } from "@/data/countryCodes";
import { jobCategories } from "@/data/jobCategories";
import { CircleCheckBig, Upload } from "lucide-react";
import { useEffect, useState } from "react";




const SubmitApplicationForm = () => {
  const [monthYear, setMonthYear] = useState("");
  
  const [formData, setFormData] = useState({
    SingleLine: "",
    PhoneNumber_countrycodeval: "",
    PhoneNumber_countrycode: "",
    Email: "",
    Dropdown: "",
    DecisionBox: "",
    FileUpload:""
  });
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
  const [fileName, setFileName] = useState("");
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = e.target;
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
      `form-3`
    ) as HTMLFormElement;
     // Set the redirect URL dynamically
  const redirectField = form.querySelector<HTMLInputElement>(
    'input[name="zf_redirect_url"]'
  );
  if (redirectField) {
    redirectField.value = `${window.location.origin}/thank-you`;
  }
    form?.submit();
  };

  return (
    <div>
      {/* Form Card */}
      <div className="max-w-4xl mx-3 md:mx-auto mt-10 bg-white rounded-2xl shadow-md border-[8px] border-[#F5F5F5C4] p-8">
        <h2 className="text-xl font-semibold text-center text-gray-800 mb-2">
          Submit Your Application
        </h2>
        <p className="text-center text-gray-500 mb-6 text-sm">
          Ready to kickstart your career in Saudi Arabia? Send your CV and we’ll
          connect you to the right opportunities.
        </p>

        <form
          action="https://forms.zohopublic.in/jobifyglobal/form/JobifyGlobalApplication/formperma/-uO2JaZtKh6HhZm7axeKT8CVEazw7cl0CNRpluKfGjs/htmlRecords/submit"
          method="POST"
          name="form"
          id="form-3"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
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

          <div>
            <label className="block text-sm font-semibold text-[#424242] mb-1">
              Full Name*
            </label>
            <input
              name="SingleLine"
              type="text"
              onChange={handleChange}
              placeholder="Enter Full name"
              value={formData.SingleLine}
              required
              className="w-full text-sm border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-[#FBFBFB]"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#424242] mb-1">
              Mobile Number*
            </label>
            <div className="flex">
              <select
                name="PhoneNumber_countrycodeval"
                onChange={handleChange}
                value={formData.PhoneNumber_countrycodeval}
                required
                className="border border-gray-300 rounded-l-lg px-5 py-3 text-sm  text-gray-700 focus:outline-none bg-[#FBFBFB]"
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
                placeholder="For Eg: 98989 98985"
                required
                className="w-full  bg-[#FBFBFB] border-t border-b border-r border-gray-300 rounded-r-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#424242] mb-1">
              Your Email*
            </label>
            <input
              name="Email"
              onChange={handleChange}
              type="email"
              value={formData.Email}
              placeholder="you@gmail.com"
              required
              className="w-full  bg-[#FBFBFB] border border-gray-300 rounded-lg px-5 py-3 text-sm  focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#424242] mb-1">
              Job Category*
            </label>
            <select
              onChange={handleChange}
              name="Dropdown"
              value={formData.Dropdown}
              required
              className="w-full  bg-[#FBFBFB] border border-gray-300 rounded-lg px-5 py-3 text-sm  focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="">Select your job category</option>
              {jobCategories.map((job) => (
                <option key={job.value} value={job.value}>
                  {job.label}
                </option>
              ))}
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-[#424242] mb-1">
              Upload CV (PDF/DOC)
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
            <p className="text-xs text-gray-500 mt-2">
              Maximum file size: 2MB. Supported formats: PDF, DOC, DOCX
            </p>
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
          </div>

          <div className="md:col-span-2 text-center mt-4">
            <button
              type="submit"
              className=" w-full bg-[#E9A908] text-white font-semibold px-8 py-3 rounded-lg hover:bg-yellow-600 transition-colors"
            >
              Submit Application
            </button>
            <p className="text-sm text-[#396088] font-medium mt-3 flex items-center justify-center gap-0">
              <CircleCheckBig className="h-4" />
              No Upfront Payment
            </p>
            <p className="text-sm text-[#C1CDC5] font-medium text-center mt-2">
              We only charge after you secure your job and arrive in <br />
              Saudi Arabia. Your success is our guarantee.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SubmitApplicationForm;
