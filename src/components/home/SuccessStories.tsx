
import { FC, useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import testimonialIcon from "../../assets/home/testimonial.svg";
import starIcon from "../../assets/home/SVG (34).png"
import JobApplicationPopup from "../common/JobApplicationPopup";

interface Testimonial {
  name: string;
  role: string;
  location: string;
  salary: string;
  testimonial: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Anil Sharma",
    role: "Chef",
    location: "Dubai, UAE",
    salary: "₹60,000/month",
    testimonial:
      "Thanks to Jobify, I secured my dream job in Dubai within weeks! The visa process was smooth, and the team guided me at every step.",
    image: testimonialIcon,
  },
  {
    name: "Mohammed Faisal",
    role: "Plumber",
    location: "Doha, Qatar",
    salary: "₹48,000/month",
    testimonial:
      "I never thought finding a good overseas job would be this easy. Jobify helped me with all documentation and interview preparation.",
    image: testimonialIcon,
  },
  {
    name: "Suresh Nair",
    role: "Construction Supervisor",
    location: "Muscat, Oman",
    salary: "₹75,000/month",
    testimonial:
      "Excellent service! The Jobify team arranged interviews quickly, and I’m now working in a reputed company in Oman.",
    image: testimonialIcon,
  },
  {
    name: "Farhan Ahmed",
    role: "IT Technician",
    location: "Riyadh, Saudi Arabia",
    salary: "₹85,000/month",
    testimonial:
      "Professional and transparent process. From document verification to onboarding, Jobify made everything stress-free.",
    image: testimonialIcon,
  },
  {
    name: "Sunil Patil",
    role: "Heavy Vehicle Driver",
    location: "Kuwait City, Kuwait",
    salary: "₹55,000/month",
    testimonial:
      "I was referred by a friend, and within a month I had my job offer. Highly recommend Jobify for anyone looking abroad.",
    image: testimonialIcon,
  },
];

const SuccessStories: FC = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const [swiperReady, setSwiperReady] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setSwiperReady(true);
  }, []);

  return (
    <section id="testimonials" className="bg-white pt-0 pb-16 md:py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-5 md:gap-10 items-start">
        {/* LEFT SIDE */}
        <div className="flex-1">
          <h2 className="text-xl md:text-4xl font-semibold bg-gradient-to-r from-[#003366] to-[#0066CC] bg-clip-text text-transparent mb-2 text-center md:text-left">
            Success Stories
          </h2>
          <p className="text-sm md:text-lg text-[rgba(19, 11, 11, 0.80)]  font-normal font-body mb-4 text-center md:text-left">
            Hear from workers who have successfully found jobs in Saudi Arabia
            through Jobify
          </p>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-3 md:mb-4 md:items-start md:justify-start">
            <button
              ref={prevRef}
              className="w-10 h-10 border border-[#036] rounded-md flex items-center justify-center hover:bg-blue-100 transition"
            >
              <ChevronLeft />
            </button>
            <button
              ref={nextRef}
              className="w-10 h-10 border border-[#036] rounded-md flex items-center justify-center hover:bg-blue-100 transition"
            >
              <ChevronRight />
            </button>
          </div>

          {/* CTA CARD */}
          <div className="xl:block hidden border rounded-2xl shadow-[0_0_4px_0_rgba(31,38,46,0.10)] p-6 md:p-4">
            <h3 className="text-xl text-[#08294B] font-semibold mb-2">
              Build Your Future in Saudi Arabia
            </h3>
            <p className="text-[#575A5D] text-sm md:text-base mb-4">
              Join hundreds of skilled workers who have built successful careers
              in Saudi Arabia
            </p>
            <button
              onClick={() => setShowPopup(true)}
              className="bg-[#E9A908] hover:bg-yellow-500 text-white font-semibold py-2 px-6 rounded-md transition-all"
            >
              Start Your Journey Today
            </button>
            {showPopup && (
              <JobApplicationPopup onClose={() => setShowPopup(false)} />
            )}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 w-full max-w-3xl relative">
          {swiperReady && (
            <Swiper
              modules={[Navigation]}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                768: { slidesPerView: 1.5 },
                1024: { slidesPerView: 2.5 },
              }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                if (typeof swiper.params.navigation !== "boolean") {
                  const nav = swiper.params.navigation;
                  if (nav) {
                    nav.prevEl = prevRef.current;
                    nav.nextEl = nextRef.current;
                  }
                }
              }}
              className="w-full"
            >
              {testimonials.map((t, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white border rounded-2xl shadow-sm p-6 pb-16 h-full flex flex-col items-start">
                    <div className="flex items-center gap-4 mb-4">
                      {/* Replace Image with First Letter Avatar */}
                      <div className="w-14 h-14 rounded-full bg-[#036] flex items-center justify-center text-white text-xl font-semibold">
                        {t.name.charAt(0)}
                      </div>

                      <div>
                        <h3 className="font-bold text-base text-[#036]">{t.name}</h3>
                        <div className="flex">
                          <img src={starIcon} alt="staricon" />
                          <img src={starIcon} alt="staricon" />
                          <img src={starIcon} alt="staricon" />
                          <img src={starIcon} alt="staricon" />
                          <img src={starIcon} alt="staricon" />
                        </div>
                        <p className="text-sm text-[#758CA3] font-normal">{t.role}</p>
                        <p className="text-sm text-[#61605E] flex gap-0">
                          <MapPin className="h-5" />
                          {t.location}
                        </p>
                      </div>
                    </div>

                    <div className="bg-[#2E64C21A] border border-[rgba(46, 100, 194, 0.20)] text-sm text-[#2E67C2] font-semibold text-center py-2 px-2 w-full rounded-lg mb-4">
                      Monthly Salary: {t.salary}
                    </div>
                    <p className="text-[#758CA3] text-base leading-relaxed">
                      “{t.testimonial}”
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
