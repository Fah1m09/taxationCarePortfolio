import technologiesData from "./technologiesData";
import SingleTechnology from "./SingleTechnology";
import SectionTitle from "@/components/Common/SectionTitle";

const Technologies = () => {
  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="We are ready to help"
          paragraph="Unlock Your Potential with Expert Guidance: We're Prepared to Assist You Every Step of the Way, With Industry Standard Solutions."
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center rounded-sm bg-gray-light px-8 py-8 dark:bg-gray-dark sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]">
              {technologiesData.map((technology) => (
                <SingleTechnology key={technology.id} technology={technology} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Technologies;
