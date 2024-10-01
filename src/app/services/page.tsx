import Breadcrumb from "@/components/Common/Breadcrumb";
import ServicesSection from "@/components/Services/ServicesSection";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Taxation Care",
  description: "This is Services Page for Taxation Care",
  // other metadata
};

const ServicesPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Services"
        description="At Taxation Care, we offer complexities in tax regulations and financial planning meet expert guidance and strategic insights."
      />
      <ServicesSection />
    </>
  );
};

export default ServicesPage;
