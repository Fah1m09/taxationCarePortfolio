type PrivacyPolicyChild = {
  id: number;
  description: string;
};

export type PrivacyPolicy = {
  id: number;
  name: string;
  description: string;
  children: PrivacyPolicyChild[] | null;
};
