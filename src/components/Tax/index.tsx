"use client";

import Image from "next/image";
import Link from "next/link";
import { taxData } from "./taxData";

const Tax = () => {
  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full space-y-12 px-4">
            <table className="w-full">
              <thead>
                <tr className="text-xl font-semibold">
                  <td className="px-4 py-2">SL</td>
                  <td className="px-4 py-2">Act Title</td>
                  <td className="px-4 py-2">Date</td>
                  <td className="px-4 py-2">Download</td>
                </tr>
              </thead>
              <tbody className="mt-[30px]">
                {taxData.map((tax) => (
                  <tr key={tax.id} className="cursor-pointer">
                    <td className="px-4 py-2">{tax.id}</td>
                    <td className="px-4 py-2">{tax.title}</td>
                    <td className="px-4 py-2">{tax.date}</td>
                    <td className="px-4 py-2">
                      <Link
                        href={tax?.link}
                        passHref={true}
                        target="_blank"
                      >
                        <Image
                          src="/images/logo/download.svg"
                          alt="logo"
                          className="w-[20px] dark:hidden"
                          width={40}
                          height={30}
                        />
                        <Image
                          src="/images/logo/download-light.svg"
                          alt="logo"
                          className="hidden w-[20px] dark:block"
                          width={40}
                          height={30}
                        />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Tax;
