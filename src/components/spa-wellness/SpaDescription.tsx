"use client";
import SpaAccordion from "./SpaAccordton";

const SpaDescription = () => {
  return (
    <div className="w-full lg:w-[40%] max-h-full flex flex-col p-4 sm:p-6 gap-6 border border-[#DBDBDB] rounded-[20px] items-start">
      <div className="flex flex-col items-start gap-3 w-full">
        <h1 className="text-black font-medium text-base sm:text-lg md:text-xl leading-[20px] font-roboto not-italic">
          Spa of one’s own
        </h1>
        <p className="text-[rgba(0,0,0,0.70)] font-roboto text-sm sm:text-base not-italic font-normal leading-normal">
          A world away from the streets of New York below, Aman New York’s Spa
          Houses offer the ultimate peaceful escape. Each comprises a double
          treatment room, a spacious living area with daybed, a large outdoor
          terrace with both a cold plunge and hot bath, and either a Banya – a
          wood-clad sauna - or Hammam - a steam room with marble walls and a
          heated marble treatment table.
        </p>
      </div>

      <div className="flex flex-col items-start gap-3 w-full">
        <h1 className="text-black font-medium text-base sm:text-lg md:text-xl leading-[20px] font-roboto not-italic">
          Exclusive experiences
        </h1>
        <p className="text-[rgba(0,0,0,0.70)] font-roboto text-sm sm:text-base not-italic font-normal leading-normal">
          Available for half or full day private hire, Spa House experiences
          include a selection of customised treatments, relaxation time between
          private lounge area and terrace, access to all spa and fitness
          facilities including the hotel’s swimming pool, and healthy snacks and
          refreshments, along with choices from the special Spa House menu.
        </p>
      </div>

      <SpaAccordion />
    </div>
  );
};

export default SpaDescription;
