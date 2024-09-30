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
            At Taxation Care, we are a dynamic and forward-thinking IT company
            driven by a passion for innovation and a commitment to excellence.
            Founded on the principles of integrity, professionalism, and a
            relentless pursuit of quality, our mission is to revolutionize the
            way businesses leverage technology to achieve their goals.
          </p>

          <p className="mb-5 flex items-center text-lg font-medium text-body-color">
            {`We specialize in providing cutting-edge IT solutions tailored to
            meet the unique needs of our clients. Whether you're a small startup
            looking to establish your online presence or a large corporation
            seeking to optimize your digital infrastructure, we have the
            expertise and creativity to deliver results that exceed your
            expectations.`}
          </p>

          <p className="mb-5 flex items-center text-lg font-medium text-body-color">
            {`At Taxation Care, we're not just another IT company – we're your
            strategic partner in success. Join us on the journey to unlock the
            full potential of your business through the power of technology.`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
