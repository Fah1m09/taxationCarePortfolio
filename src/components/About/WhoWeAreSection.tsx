import SectionTitle from "../Common/SectionTitle";

const WhoWeAreSection = () => {
  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center px-4">
          <SectionTitle
            title="Who We Are"
            paragraph="A team of passionate individuals driven by a shared commitment to excellence and innovation."
            mb="44px"
          />

          <p className="mb-5 flex items-center text-lg font-medium text-body-color">
            At Taxation Care, we are dedicated to empowering individuals and
            businesses through expert tax guidance and support. Our mission is
            to simplify the complexities of tax regulations, ensuring our
            clients achieve compliance while maximizing their financial
            benefits. We have financial expert who specializes in tax law,
            planning, and compliance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
