import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Taxation Care",
  description: "This is Contact Page for Taxation Care",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="If you have any queries feel free to connect with us"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
