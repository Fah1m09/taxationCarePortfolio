import AboutSectionOne from "@/components/About/AboutSectionOne";
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Technologies from "@/components/Technologies";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Taxation Care",
  description: "HASSLE FREE Accounts TAX & VAT Solutions",
  metadataBase: new URL("https://taxationcare.netlify.app/"),
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Services />
      {/* <Video /> */}
      <Technologies />
      <AboutSectionOne />
    </>
  );
}
