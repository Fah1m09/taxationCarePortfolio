import SingleTerm from "@/components/TermsOfService/SingleTerm";
import { tosData } from "@/components/TermsOfService/tosData";

const TermsOfService = () => {
  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center px-4">
            <p className="mb-10 flex items-center text-lg font-medium text-body-color">
              {`This page outlines the terms and conditions ("Terms") under
            which services are provided by Taxation Care ("Company", "We",
            "Our") to you ("User", "Client", "You"). By accessing or using our
            services, you agree to be bound by these Terms. If you do not agree
            to these Terms, please refrain from using our services.`}
            </p>

            <ul className="mb-5 list-inside list-decimal text-lg font-medium text-body-color">
              {tosData.map((term) => (
                <SingleTerm key={term.id} term={term} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsOfService;
