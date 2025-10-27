import { FC, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import electrician from "../../assets/home/electrician.svg";
import worker from "../../assets/home/worker.svg";
import welder from "../../assets/home/welder.svg";
import driver from "../../assets/home/driver.svg";
import hospitality from "../../assets/home/hospitality.svg";
import technician from "../../assets/home/technician.svg";
import JobApplicationPopup from "../common/JobApplicationPopup";

interface JobCategory {
  title: string;
  subtitle: string;
  image: string;
}

const jobCategories: JobCategory[] = [
  {
    title: "Construction & Infrastructure",
    subtitle: "Building, masonry, structural fabrication, and general site work.",
    image: worker,
  },
  {
    title: "Electrical & Plumbing Specialists",
    subtitle: "Industrial and residential electrical installation, pipefitting, and maintenance.",
    image: electrician,
  },
  {
    title: "Welding & Fabrication Experts",
    subtitle: "Precision metal fabrication, specialized industrial welding, and structural steel work.",
    image: welder,
  },
  {
    title: "Professional Drivers & Logistics",
    subtitle: "Certified heavy vehicle, truck, trailer, and light delivery drivers.",
    image: driver,
  },
  {
    title: "Hospitality & Service Sector",
    subtitle: " Hotel staff, catering, essential service roles, and facilities management.",
    image: hospitality,
  },
  {
    title: "Technical Maintenance",
    subtitle: "Machinery repair, industrial plant maintenance, and equipment troubleshooting.",
    image: technician,
  },
];

const JobCategories: FC = () => {
  const [showPopup,setShowPopup]=useState(false);
  return (
    <section className="bg-white md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        {/* Heading */}
        <h2 className="text-xl md:text-5xl font-semibold bg-gradient-to-r from-[#003366] to-[#0066CC] bg-clip-text text-transparent md:mb-5 leading-snug pb-1.5">
          Explore High-Demand Job Categories
        </h2>
        <p className="text-[#130B0BE5] text-sm md:text-xl font-normal mx-auto mb-4">
         Connecting skilled Indian talent with verified roles across Saudi Arabia's fastest-growing sectors. 
        </p>

        {/* Swiper Section */}
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 }, // tablet
            1024: { slidesPerView: 3 }, // desktop
            1280: { slidesPerView: 4 },
          }}
          className="pb-10 w-full"
        >
          {jobCategories.map((job, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white border border-[#E9E9E9] rounded-sm min-h-80 flex w-full flex-col items-center text-center p-3 md:p-6 ">
                <img
                  src={job.image}
                  alt={job.title}
                  className="w-20 h-20 object-contain mb-4"
                />
                <h3 className="text-xl font-semibold text-[#0D3965] mb-2">
                  {job.title}
                </h3>
                <p className="text-[#758CA3] text-base mb-4">{job.subtitle}</p>
                <button onClick={()=>setShowPopup(true)}className="bg-[#E9A908] border-2 border-[#E9A908] hover:bg-[#F59E0B] text-white font-semibold py-2 px-6 rounded-lg transition-all">
                  View Opportunities
                </button>
              
              </div>
              
            </SwiperSlide>
          ))}
        </Swiper>
        {showPopup && <JobApplicationPopup onClose={() => setShowPopup(false)} />}
      </div>
    </section>
  );
};

export default JobCategories;
