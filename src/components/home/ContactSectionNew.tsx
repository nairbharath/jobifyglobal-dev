import React, { useState } from 'react'
import { Phone, Mail, Clock, MapPin, ChevronDown } from 'lucide-react'
import ContactPageForm from '../common/ContactPageForm'


const address =
  "A321, Master Mind 4, Royal Palms, Goregaon (E), Mumbai, Maharashtra 400065 India";

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  address
)}`;


const ContactSectionNew = () => {
  const [formData, setFormData] = useState({
    name: '',
    countryCode: 'IN',
    phone: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    })) 
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <section
      id="contact"
      className="py-16  px-8 lg:px-16 bg-[#FFFDF9] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="md:text-4xl text-[18px] font-bold text-[#1E3F63] max-w-[450px]  md:mb-4 mb-2">
                Our Experts Are Here to Help You
              </h2>
              <p className="md:text-xl text-[12px] font-medium text-[#1E3F63]">
                Get in Touch with Our Business Setup Specialists
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
              {/* Contact Number */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Phone className="h-5 md:h-6 w-5 md:w-6 text-[#11273C]" />
                </div>
                <div>
                  <h3 className="font-semibold md:text-large text-[14px] text-[#424242] md:mb-2 mb-1">
                    Contact number
                  </h3>
                  <p className="text-[#E9A908] md:text-large text-[14px] font-medium">
                    +91 99672 62012
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Mail className="h-5 md:h-6 w-5 md:w-6 text-[#11273C]" />
                </div>
                <div>
                  <h3 className="font-semibold md:text-large text-[14px] text-[#424242] md:mb-2 mb-1">
                    Send an email
                  </h3>
                  <div className="space-y-1 md:text-base text-[14px] font-medium">
                    <a
                      href="mailto:apply@jobifyglobal.in?subject=Job%20Inquiry%20"
                      className="block text-[#E9A908] underline hover:text-[#E9A908]/80 transition-colors"
                    >
                      apply@jobifyglobal.in
                    </a>
                    <a
                      href="mailto:support@jobifyglobal.in?subject=Support%20Inquiry%20"
                      className="block text-[#E9A908] underline hover:text-[#E9A908]/80 transition-colors"
                    >
                      support@jobifyglobal.in
                    </a>
                  </div>
                </div>
              </div>

              {/* Vertical Divider */}
              <div className="hidden md:block absolute left-[40%] top-0 w-[0.5px] h-20 bg-gray-300 transform -translate-x-1/2"></div>

              {/* Working Hours */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Clock className="h-5 md:h-6 w-5 md:w-6 text-[#11273C]" />
                </div>
                <div>
                  <h3 className="font-semibold md:text-large text-[14px] text-[#424242] md:mb-2 mb-1">
                    Working Hours
                  </h3>
                  <div className="space-y-1 md:text-base text-[14px] font-medium text-[#5F5E5C] ">
                    <p>
                      Monday to Friday: <br /> 9:00am- 07:00pm IST
                    </p>
                  </div>
                </div>
              </div>

              {/* Vertical Divider for bottom row */}
              <div className="hidden md:block absolute left-[40%] bottom-0 w-[0.5px] h-[150px] bg-gray-300 transform -translate-x-1/2"></div>

              {/* Office */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <MapPin className="h-5 md:h-6 w-5 md:w-6 text-[#11273C]" />
                </div>
                <div>
                  <h3 className="font-semibold md:text-large text-[14px] text-[#424242] md:mb-2 mb-1">
                    Office
                  </h3>
                  {/* <p className="md:text-base text-[14px] font-medium text-[#5F5E5C]">
                    A321, Master Mind 4, Royal Palms, Goregaon (E), Mumbai, Maharashtra 400065 India
                  </p>
                   */}
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors block"
                    aria-label={`Open address in Google Maps: ${address}`}
                  >
                    A321, Master Mind 4, Royal Palms, Nagari Niwara,
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

          {/* Right Column - Contact Form */}
          <div className="-mt-10">
            <ContactPageForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSectionNew;