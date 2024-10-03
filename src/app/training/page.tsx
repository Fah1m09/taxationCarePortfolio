import Breadcrumb from "@/components/Common/Breadcrumb";
import Training from "@/components/Training";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Training | Taxation Care",
  description: "Training Taxation Care",
  // other metadata
};

const TrainingPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Training"
        description="A training programme will start from 11th October"
      />
      <Training />
    </>
  );
};

export default TrainingPage;
