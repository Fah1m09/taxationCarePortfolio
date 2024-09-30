import SinglePolicy from "@/components/PrivacyPolicy/SinglePolicy";
import { privacyPolicyData } from "@/components/PrivacyPolicy/privacyPolicyData";

const PrivacyPolicy = () => {
  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center px-4">
            <p className="mb-10 flex items-center text-lg font-medium text-body-color">
              {`Taxation Care ("we," "our," or "us") is committed to protecting the privacy and security of your personal information. 
              This Privacy Policy describes how we collect, use, disclose, and protect the personal information we collect through our website, 
              applications, products, and services (collectively, the "Services").`}
            </p>

            <ul className="mb-5 list-inside list-decimal text-lg font-medium text-body-color">
              {privacyPolicyData.map((policy) => (
                <SinglePolicy key={policy.id} term={policy} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
