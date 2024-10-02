import { AppWrapper } from "@/app/AppWrapper";
import GoogleAnalytics from "@/components/Scripts/GoogleAnalytics";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Taxation Care",
  description: "HASSLE FREE Accounts TAX & VAT Solutions",
  metadataBase: new URL("https://taxationcare.netlify.app/"),
  // other metadata
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head>
        <GoogleAnalytics />
      </head>

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
