import { countryCodes } from "@/data/countryCodes";
import { jobCategories } from "@/data/jobCategories";
import { Upload } from "lucide-react";
import { useEffect, useState } from "react";

const ContactPageForm = () => {
  const [formData, setFormData] = useState({
    SingleLine: "",
    PhoneNumber_countrycodeval: "",
    PhoneNumber_countrycode: "",
    Email: "",
    Dropdown: "",
    DecisionBox: "",
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
      utm_source: urlParams.get("utm_source") || "",
      utm_medium: urlParams.get("utm_medium") || "",
      utm_campaign: urlParams.get("utm_campaign") || "",
      utm_term: urlParams.get("utm_term") || "",
      utm_content: urlParams.get("utm_content") || "",
      gclid: urlParams.get("gclid") || "",
    });
  }, []);
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
      `form`
    ) as HTMLFormElement;
    form?.submit();
  };

  return (
    <div>
      {/* Form Card */}
      <div className="max-w-4xl mx-3 md:mx-auto mt-10 bg-white rounded-2xl shadow-md p-8 border-[5px] border-[#FFFFFFC4]">
        {/* <p className="text-center mb-5 text-lg">Ready to start your career in Saudi Arabia? Submit your application  and we'll match you with the right opportunities.</p> */}
        <form
          action="https://forms.zohopublic.in/jobifyglobal/form/JobifyGlobalApplication/formperma/-uO2JaZtKh6HhZm7axeKT8CVEazw7cl0CNRpluKfGjs/htmlRecords/submit"
          method="POST"
          name="form"
          id="form"
          onSubmit={handleSubmit}
        >
          {/* Hidden Fields */}
          <input type="hidden" name="zf_referrer_name" value="" />
          <input type="hidden" name="zf_redirect_url" value="" />
          <input type="hidden" name="zc_gad" value="" />
          <input type="hidden" name="utm_source" value={utmParams.utm_source} />
          <input type="hidden" name="utm_medium" value={utmParams.utm_medium} />
          <input
            type="hidden"
            name="utm_campaign"
            value={utmParams.utm_campaign}
          />
          <input type="hidden" name="utm_term" value={utmParams.utm_term} />
          <input
            type="hidden"
            name="utm_content"
            value={utmParams.utm_content}
          />
          <input type="hidden" name="gclid" value={utmParams.gclid} />
          <input type="hidden" name="client_code" value="asaqi" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:mb-6">
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
                  className="border border-gray-300 rounded-l-lg px-5 py-3 text-sm w-20 text-gray-700 focus:outline-none bg-[#FBFBFB]"
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
          </div>
          <div className="md:col-span-2  mt-4">
            <div className="md:mb-6">
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
                className="w-full  bg-[#FBFBFB] border border-gray-300 rounded-lg px-5 py-3 text-sm  focus:outline-none"
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
            {/* ✅ Checkbox Section */}
            <div className="flex items-start gap-3 mt-6">
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

            <button
              type="submit"
              className=" w-full bg-[#E9A908] text-white font-semibold px-8 py-3 rounded-lg hover:bg-yellow-600 transition-colors mt-5"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ContactPageForm;
