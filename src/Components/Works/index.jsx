import React from "react";
import Design from '../../assets/Design.jpg';
import Strategy from '../../assets/Stratge.jpg';
import Development from '../../assets/Development.jpg';

const steps = [
  {
    id: "01",
    title: "Design",
    description: "Understand needs, craft user-centric designs, refine for clarity, deploy strategically, and assess feedback for improvement.",
    image: Design,
  },
  {
    id: "02",
    title: "Strategy",
    description: "Research, plan, and create SEO-optimized, user-focused content aligned with goals, regularly updated for relevance.",
    image: Strategy,
  },
  {
    id: "03",
    title: "Develop",
    description: "Identify needs, craft valuable content, review thoroughly, publish strategically, and analyze performance for improvement.",
    image: Development,
  },
];

const WorkProcess = () => {
  return (
    <section className="bg-[#0A0F1D] text-white py-16 px-6 md:px-12">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h2
          id="faqs"
          className="mb-6 text-2xl sm:text-3xl md:text-4xl font-semibold  relative inline-block 
          after:content-[''] after:absolute after:left-1/2 after:-bottom-2 after:w-[140px] sm:after:w-[150px] 
          md:after:w-[180px] lg:after:w-[210px] after:h-1 after:bg-[#114B9F] after:rounded-lg after:-translate-x-1/2"
        >
          Work Process
        </h2>
        <h3 className="text-xl sm:text-2xl md:text-3xl text-[#114B9F] font-bold mt-3">
          Our Working Process
        </h3>
      </div>

      {/* Work Process Cards with Animated Arrows */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 relative">
        {steps.map((step, index) => (
          <div key={step.id} className="text-center flex flex-col items-center relative w-full max-w-xs sm:max-w-sm">
            {/* Image with Step Number */}
            <div className="relative w-40 sm:w-48 md:w-56 lg:w-64 aspect-square">
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-full rounded-full object-cover border-4 border-blue-500 shadow-lg"
              />
              <div className="absolute top-2 left-2 bg-blue-500 text-white text-lg font-bold w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full">
                {step.id}
              </div>
            </div>

            {/* Animated Arrow Between Steps (Only on large screens) */}
            {index < steps.length - 1 && (
              <div className="hidden lg:flex absolute top-1/2 -right-24 transform -translate-y-1/2 animate-moveArrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="white"
                  className="w-10 h-10 sm:w-12 sm:h-12"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-4-4m4 4l-4 4" />
                </svg>
              </div>
            )}

            {/* Title & Description */}
            <h3 className="text-lg sm:text-xl font-semibold mt-4">{step.title}</h3>
            <p className="text-sm sm:text-base mt-2 text-gray-300 px-4">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      {/* Tailwind CSS for Arrow Animation */}
      <style>
        {`
          @keyframes moveArrow {
            0% { transform: translateX(0); opacity: 0.6; }
            50% { transform: translateX(10px); opacity: 1; }
            100% { transform: translateX(0); opacity: 0.6; }
          }

          .animate-moveArrow {
            animation: moveArrow 1.5s infinite ease-in-out;
          }
        `}
      </style>
    </section>
  );
};

export default WorkProcess;
