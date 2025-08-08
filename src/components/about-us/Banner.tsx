import CarIcon from "@/icons/about-us/CarIcon";
import LocationIcon from "@/icons/about-us/LocationIcon";
import PlaneIcon from "@/icons/about-us/PlaneIcon";
import RightArrowIcon from "@/icons/about-us/RightArrowIcon";
import Image from "next/image";

const Banner = () => {
  const data = [
    {
      icon: <LocationIcon />,
      title: (
        <p className="text-black font-roboto text-[14px] not-italic font-normal leading-[18px]">
          Bulgan Soum, Ömnögovi Province, <br /> South Gobi 21220, Mongolia
        </p>
      ),
    },
    {
      icon: <PlaneIcon />,
      title: (
        <p className="text-black font-roboto text-[14px] not-italic font-normal leading-[18px]">
          Domestic flight to Dalanzadgad (~1.5 hrs) from <br /> Chinggis Khaan
          International Airport (UBN)
        </p>
      ),
    },
    {
      icon: <CarIcon />,
      title: (
        <p className="text-black font-roboto text-[14px] not-italic font-normal leading-[18px]">
          Dalanzadgad Airport (DLZ) <br /> ~2 hours by car
        </p>
      ),
    },
  ];
  return (
    <div className="w-full flex flex-col gap-6 items-start self-stretch">
      <Image
        width={1320}
        height={654}
        alt=""
        src={"/images/image-6.png"}
        className="object-cover w-full h-full"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
      />

      <div className="flex flex-col md:flex-row items-center justify-between h-11 w-full mb-32 sm:mb-0">
        <div className="flex flex-col md:flex-row justify-between w-full">
          {data.map((data, index) => {
            return (
              <div
                key={index}
                className="flex gap-1 justify-center items-center"
              >
                <div className="flex items-center justify-center w-12 h-12">
                  {data.icon}
                </div>

                {data.title}
              </div>
            );
          })}
          <div className="flex items-center gap-2">
            <p className="text-[14px] leading-[18px] font-normal text-black font-['Roboto']">
              Get Directions
            </p>
            <RightArrowIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
