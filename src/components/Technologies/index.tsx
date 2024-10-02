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
              {technologiesData.map((testimonial, index) => (
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
              className="rounded-full bg-green-500
                     p-2 
                     text-white transition-colors
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
              className="rounded-full bg-green-500
                     p-2
                     text-white transition-colors 
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
      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Technologies;
