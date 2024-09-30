import Breadcrumb from "@/components/Common/Breadcrumb";
import PrivacyPolicy from "@/components/PrivacyPolicy";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Taxation Care",
  description: "This is Privacy Policy Page for Taxation Care",
  // other metadata
};

const PrivacyPolicyPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Privacy Policy"
        description="By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Privacy Policy."
      />
      <PrivacyPolicy />
    </>
  );
};

export default PrivacyPolicyPage;
