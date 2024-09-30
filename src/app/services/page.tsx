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
        description="Empowering Your Business with Comprehensive IT Solutions."
      />
      <ServicesSection />
    </>
  );
};

export default ServicesPage;
