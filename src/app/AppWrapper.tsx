"use client";

import { Providers } from "@/app/providers";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { ReactNode } from "react";

export const AppWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Providers>
      <Header />
      {children}
      <Footer />
      <ScrollToTop />
    </Providers>
  );
};
