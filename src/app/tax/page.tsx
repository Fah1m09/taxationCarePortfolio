import Breadcrumb from "@/components/Common/Breadcrumb";
import Tax from "@/components/Tax";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax | Taxation Care",
  description: "This is Tax Page for Taxation Care",
  // other metadata
};

const TaxPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Tax"
        description=""
      />
      <Tax/>
    </>
  );
};

export default TaxPage;
