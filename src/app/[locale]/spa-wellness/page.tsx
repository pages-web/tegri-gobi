import SpaAccordion from "@/components/spa-wellness/SpaAccordton";
import SpaDescription from "@/components/spa-wellness/SpaDescription";
import SpaImages from "@/components/spa-wellness/SpaImages";
import Stillness from "@/components/spa-wellness/Stillness";

const Page = () => {
  return (
    <div>
      <div className="relative mt-22 px-4 sm:px-8 lg:px-6 xl:px-15 py-6 sm:py-8 lg:py-10 min-h-[50vh] sm:min-h-[60vh] lg:min-h-screen">
        <Stillness />
        <div className="flex flex-col lg:flex-row gap-6 mt-6">
          <SpaImages />
          <SpaDescription />
        </div>
      </div>
    </div>
  );
};

export default Page;
