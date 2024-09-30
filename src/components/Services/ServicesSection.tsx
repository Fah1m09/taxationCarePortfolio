import SectionTitle from "@/components/Common/SectionTitle";
import Image from "next/image";
import SingleService from "./SingleService";
import servicesData from "./servicesData";

const ServicesSection = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">  
        <div className="md:pb-20 lg:pb-28">
        <div className="-mx-4 flex flex-wrap items-center"> 
          <div className="w-full px-4 lg:w-1/2">
          <SectionTitle
            title="What we offer"
            paragraph="At Taxation Care, we offer a comprehensive range of IT services designed to meet the diverse needs of businesses across industries. Leveraging our expertise, cutting-edge technology, and industry best practices, we deliver tailored solutions that empower our clients to succeed in today's digital landscape. Our services include:"
          />  
          </div> 
          <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                <Image
                  src="/images/service/service_2_white.svg"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src="/images/service/service_2_dark.svg"
                  alt="about-image"
                  fill
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                />
              </div>
          </div>
        </div> 
        </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((service) => (
              <SingleService key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
