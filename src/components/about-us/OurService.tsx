import CakeIcon from "@/icons/about-us/CakeIcon";
import HouseIcon from "@/icons/about-us/HouseIcon";
import ReceiptPersentIcon from "@/icons/about-us/ReceiptPersentIcon";
import SunIcon from "@/icons/about-us/SunIcon";

const OurService = () => {
  const data = [
    {
      icon: <HouseIcon />,
      title: "Accomodation & Lodge stays",
      detailTitle: "Stay under the stars",
      description:
        "Our capsule lodges are thoughtfully designed to blend modern comfort with the raw beauty of the Gobi Desert. ",
    },
    {
      icon: <SunIcon />,
      title: "Spa & Wellness",
      detailTitle: "Healing with stillness",
      description:
        "Our wellness offerings are inspired by the timeless rhythms of the Gobi Desert. Reconnect body and spirit through deeply restorative treatments—ranging from traditional Mongolian hot stone therapy to guided desert meditations, herbal steam, and sand-based therapy. ",
    },
    {
      icon: <CakeIcon />,
      title: "Dining",
      detailTitle: "Rooted in tradition",
      description:
        "Our dining experiences highlight seasonal, locally sourced ingredients prepared with care. Enjoy a curated mix of modern flavors and traditional Mongolian cuisine, served in an open-air setting under the vast desert sky. Every meal is an invitation to slow down, savor, and reconnect.",
    },
    {
      icon: <ReceiptPersentIcon />,
      title: "Offering free of charge",
      detailTitle: "More than a stay",
      description:
        "At Tegri Gobi, we believe generosity is part of true hospitality. That’s why we offer select experiences at no extra cost: stargazing from your capsule, guided sunrise meditations, cultural story nights around the fire, and more. ",
    },
  ];

  return (
    <div className="flex flex-col gap-4 items-start self-stretch  md:px-0">
      <div className="flex flex-col items-start gap-4 self-stretch">
        <h1 className="text-black font-roboto text-xl md:text-2xl font-medium leading-none">
          Our service
        </h1>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 self-stretch items-start">
          <p className="text-black/90 font-roboto text-sm md:text-base font-normal">
            Here, under the vast Mongolian sky, time slows down. The wind
            carries ancient stories, and every sunrise feels like a beginning.
            Whether you seek rest, inspiration, or quiet wonder, our capsule
            stays offer a
            <br className="hidden md:block" />
            sanctuary shaped by earth, sky, and soul.
          </p>
        </div>
      </div>

      <div className="px-4 md:px-5 flex flex-col items-start rounded-[20px] border border-[#DBDBDB] w-full mt-6 sm:mt-0">
        {data.map((data, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-start py-5 gap-4 self-stretch border-b border-[#DBDBDB]"
            >
              <div className="flex flex-col md:flex-row items-start gap-4 md:gap-[73px] self-stretch w-full">
                <div className="flex items-center gap-2.5 w-full md:w-[20%]">
                  {data.icon}
                  <h1 className="text-black font-roboto text-base font-normal leading-none">
                    {data.title}
                  </h1>
                </div>
                <div className="flex flex-col gap-2.5 items-start w-full md:w-[80%]">
                  <h1 className="text-black/70 font-roboto text-sm font-normal leading-none">
                    {data.detailTitle}
                  </h1>
                  <p className="text-black font-roboto text-base font-normal leading-none">
                    {data.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurService;
