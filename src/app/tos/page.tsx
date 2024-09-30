import Breadcrumb from "@/components/Common/Breadcrumb";
import TermsOfService from "@/components/TermsOfService";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Taxation Care",
  description: "This is TOS Page for Taxation Care",
  // other metadata
};

const TosPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Terms of Service"
        description="By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms."
      />
      <TermsOfService />
    </>
  );
};

export default TosPage;
