import { PrivacyPolicy } from "@/types/privacyPolicy";

export const privacyPolicyData: PrivacyPolicy[] = [
  {
    id: 1,
    name: "Information We Collect",
    description:
      "We collect personal information you provide to us directly when you use our Services, such as when you contact us for support. We may also collect certain information automatically when you use our Services, such as your IP address, device information, browser type, and usage data through cookies and similar technologies. The types of personal information we may collect include:",
    children: [
      {
        id: 1,
        description:
          "Contact information (e.g., name, email address, phone number)",
      },
      {
        id: 2,
        description:
          "Communications you send to us (e.g., emails, support inquiries)",
      },
      {
        id: 3,
        description:
          "Information you provide when participating in surveys, contests, or promotions",
      },
    ],
  },
  {
    id: 2,
    name: "How We Use Your Information",
    description:
      "We use the personal information we collect for the following purposes:",
    children: [
      {
        id: 1,
        description: "To provide and maintain our Services",
      },
      {
        id: 2,
        description: "To communicate with you about our Services",
      },
      {
        id: 3,
        description: "To respond to your inquiries",
      },
      {
        id: 4,
        description: "To improve our Services and develop new features",
      },
      {
        id: 5,
        description: "To protect the security and integrity of our Services",
      },
    ],
  },
  {
    id: 3,
    name: "Data Security",
    description:
      "We take reasonable measures to protect the security of your personal information and prevent unauthorized access, disclosure, or modification. However, no method of transmission over the internet or electronic storage is 100% secure, so we cannot guarantee absolute security.",
    children: null,
  },
  {
    id: 4,
    name: "Changes to this Privacy Policy",
    description:
      "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website or through other communication channels.",
    children: null,
  },
];
