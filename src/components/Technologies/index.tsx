"use client";

import SectionTitle from "@/components/Common/SectionTitle";
import { useState } from "react";
import technologiesData from "./technologiesData";

const Technologies = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % technologiesData.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + technologiesData.length) % technologiesData.length,
    );
  };

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle title="Our Clients" paragraph="" center mb="80px" />
        <h3 className="text-2xl font-semibold text-primary"> TAX </h3>
        <div
          className="relative mx-auto w-full
                     rounded-lg p-6
                    py-12"
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform  duration-700 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {technologiesData
                .filter((x) => x.type === "Tax")
                .map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="rounded-lg  transition-shadow duration-300 hover:shadow-2xl">
                      <h3 className="text-center text-2xl font-bold ">
                        {testimonial.name}
                      </h3>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Previous button */}
          <div
            className="absolute left-0 
                      top-1/2 -translate-y-1/2 transform"
          >
            <button
              className="rounded-full bg-white
                     p-2 text-black
                     opacity-40 transition-colors
                     duration-300 hover:bg-green-600"
              onClick={prevSlide}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          </div>

          {/* Next button */}
          <div
            className="absolute right-0 
                      top-1/2 -translate-y-1/2 transform"
          >
            <button
              className="rounded-full bg-white
                     p-2 text-black
                     opacity-40 transition-colors 
                     duration-300 hover:bg-green-600"
              onClick={nextSlide}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
        <h3 className="text-2xl font-semibold text-primary"> Customs </h3>
        <div
          className="relative mx-auto w-full
                     rounded-lg p-6
                    py-12"
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform  duration-700 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {technologiesData
                .filter((x) => x.type === "Customs")
                .map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="rounded-lg  transition-shadow duration-300 hover:shadow-2xl">
                      <h3 className="text-center text-2xl font-bold ">
                        {testimonial.name}
                      </h3>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Previous button */}
          <div
            className="absolute left-0 
                      top-1/2 -translate-y-1/2 transform"
          >
            <button
              className="rounded-full bg-white
                     p-2 text-black
                     opacity-40 transition-colors
                     duration-300 hover:bg-green-600"
              onClick={prevSlide}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          </div>

          {/* Next button */}
          <div
            className="absolute right-0 
                      top-1/2 -translate-y-1/2 transform"
          >
            <button
              className="rounded-full bg-white
                     p-2 text-black
                     opacity-40 transition-colors 
                     duration-300 hover:bg-green-600"
              onClick={nextSlide}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
        <h3 className="text-2xl font-semibold text-primary"> VAT </h3>
        <div
          className="relative mx-auto w-full
                     rounded-lg p-6
                    py-12"
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform  duration-700 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {technologiesData
                .filter((x) => x.type === "VAT")
                .map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="rounded-lg  transition-shadow duration-300 hover:shadow-2xl">
                      <h3 className="text-center text-2xl font-bold ">
                        {testimonial.name}
                      </h3>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Previous button */}
          <div
            className="absolute left-0 
                      top-1/2 -translate-y-1/2 transform"
          >
            <button
              className="rounded-full bg-white
                     p-2 text-black
                     opacity-40 transition-colors
                     duration-300 hover:bg-green-600"
              onClick={prevSlide}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          </div>

          {/* Next button */}
          <div
            className="absolute right-0 
                      top-1/2 -translate-y-1/2 transform"
          >
            <button
              className="rounded-full bg-white
                     p-2 text-black
                     opacity-40 transition-colors 
                     duration-300 hover:bg-green-600"
              onClick={nextSlide}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Technologies;
