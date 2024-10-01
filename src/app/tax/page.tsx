import Breadcrumb from "@/components/Common/Breadcrumb";

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
    </>
  );
};

export default TaxPage;
