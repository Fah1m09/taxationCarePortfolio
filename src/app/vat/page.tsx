import Breadcrumb from "@/components/Common/Breadcrumb";
import Vat from "@/components/Vat";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "VAT | Taxation Care",
  description: "This is VAT Page for Taxation Care",
  // other metadata
};

const VatPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="VAT"
        description=""
      />
      <Vat />
    </>
  );
};

export default VatPage;
