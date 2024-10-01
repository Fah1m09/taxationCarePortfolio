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
        description="Taxation Care is a consultant firm providing tax advice and assistance to individuals, businesses and organizations on various tax related matters. Their work typically involves preparing and submitting tax returns, researching tax laws, advising on tax planning, and representing clients in disputes with tax authorities. Also it includes training programs, consulting services and tools aimed at simplifying the tax filing process, ensuring compliance and maximizing potential refunds or benefits."
      />
      <WhoWeAreSection />
      <AboutSectionOne />
    </>
  );
};

export default AboutPage;
