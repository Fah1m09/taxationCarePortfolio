import Breadcrumb from "@/components/Common/Breadcrumb";
import Customs from "@/components/Customs";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customs | Taxation Care",
  description: "This is Customs Page for Taxation Care",
  // other metadata
};

const CustomsPage = () => {
  return (
    <>
      <Breadcrumb pageName="Customs" description="" />
      <Customs />
    </>
  );
};

export default CustomsPage;
