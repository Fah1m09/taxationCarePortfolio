"use client";
import Image from "next/image";

const Training = () => {
  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 space-y-12">
            <div className="flex flex-col gap-y-4 rounded-sm ">
              <div className="flex items-center gap-4">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 2H11.82C11.4 0.84 10.3 0 9 0C7.7 0 6.6 0.84 6.18 2H2C0.9 2 0 2.9 0 4V18C0 19.1 0.9 20 2 20H16C17.1 20 18 19.1 18 18V4C18 2.9 17.1 2 16 2ZM9 2C9.55 2 10 2.45 10 3C10 3.55 9.55 4 9 4C8.45 4 8 3.55 8 3C8 2.45 8.45 2 9 2ZM11 16H4V14H11V16ZM14 12H4V10H14V12ZM14 8H4V6H14V8Z"
                    fill="#344793"
                    fill-opacity="0.54"
                  />
                  <path
                    d="M15 11C12.24 11 10 13.24 10 16C10 18.76 12.24 21 15 21C17.76 21 20 18.76 20 16C20 13.24 17.76 11 15 11ZM15.705 19.045V20H14.37V19.035C13.515 18.855 12.79 18.305 12.735 17.335H13.715C13.765 17.86 14.125 18.27 15.04 18.27C16.02 18.27 16.24 17.78 16.24 17.475C16.24 17.06 16.02 16.67 14.905 16.405C13.665 16.105 12.815 15.595 12.815 14.57C12.815 13.71 13.51 13.15 14.37 12.965V12H15.705V12.975C16.635 13.2 17.1 13.905 17.13 14.67H16.15C16.125 14.115 15.83 13.735 15.04 13.735C14.29 13.735 13.84 14.075 13.84 14.555C13.84 14.975 14.165 15.25 15.175 15.51C16.185 15.77 17.265 16.205 17.265 17.465C17.26 18.38 16.575 18.88 15.705 19.045Z"
                    fill="#4A6CF7"
                  />
                </svg>

                <p className="text-sm">Online Class (Zoom)</p>
              </div>
              <h3 className="text-[26px] font-semibold">
                ITP Exam Preparation Course
              </h3>
              <p className="text-body-color">
                Class starting from 4th October (Friday & Saturday)
              </p>
              <p>
                Time:{"  "}
                <span className="ml-2 rounded-full bg-blue-400 px-4 py-1 text-sm text-white">
                  9.00 pm - 10.30 pm
                </span>
              </p>

              <p className="mt-6">
                Course Fee:{" "}
                <span className="font-semibold text-green-700 dark:text-green-400">
                  3,000/-
                </span>{" "}
                Taka
              </p>
            </div>
            <div className="mt-5 flex gap-6 rounded-sm bg-gray-light px-4 py-4 dark:bg-gray-dark sm:px-10 md:px-[20px] md:py-[30px] xl:p-[30px] 2xl:px-[40px] 2xl:py-[40px]">
              <div>
                <Image
                  src="/images/instructor.jpg"
                  alt="about-image"
                  width={300}
                  height={100}
                  className="w-[160px]"
                />
              </div>
              <div>
                <p className="text-sm text-body-color">Course Instructor</p>
                <h3 className="text-[26px] font-semibold">Md. Enamul Haque</h3>
                <p className="mt-4 text-body-color">
                  B.Com (Hon’s) M.Com (Accounting) (RU)
                  <br />
                  Masters of Accountancy in Taxation (DU)
                  <br /> NBR Certified VAT and Tax Consultant.
                </p>
              </div>
            </div>
            <div className="mt-6 lg:mt-[60px] flex gap-4">
              <h3 className="text-3xl font-bold">
                Click here to start your course
              </h3>
              <a
                target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLSeG8xXDV2Q-LEtVJBd716TQMDeToqlRCRyIycuGjyQDAcmpSA/viewform?usp=send_form"
                className="rounded-xl border px-4 py-1"
              >
                GET COURSE
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Training;
