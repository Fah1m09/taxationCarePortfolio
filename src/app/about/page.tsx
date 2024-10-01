import AboutSectionOne from "@/components/About/AboutSectionOne";
import WhoWeAreSection from "@/components/About/WhoWeAreSection";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Taxation Care",
  description: "This is About Page for Taxation Care",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="Dynamic and forward-thinking IT company committed to delivering cutting-edge solutions tailored to meet the diverse needs of our clients."
      />
      <WhoWeAreSection />
      <AboutSectionOne />
    </>
  );
};

export default AboutPage;
