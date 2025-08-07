import Image from "next/image";

const Reports = () => {
  const data = [
    {
      title: "Operational Report 2025",
      image: (
        <Image
          className="object-cover rounded-[12px] w-full h-full"
          width={384}
          height={247}
          alt=""
          src={"/images/Rectangle24.png"}
        />
      ),
    },
    {
      title: "Operational Report 2024",
      image: (
        <Image
          className="object-cover rounded-[12px] w-full h-full"
          width={384}
          height={247}
          alt=""
          src={"/images/Rectangle24.png"}
        />
      ),
    },
    {
      title: "Operational Report 2023",
      image: (
        <Image
          className="object-cover rounded-[12px] w-full h-full"
          width={384}
          height={247}
          alt=""
          src={"/images/Rectangle24.png"}
        />
      ),
    },
    {
      title: "Sustainabilitty Report 2025",
      image: (
        <Image
          className="object-cover rounded-[12px] w-full h-full"
          width={384}
          height={247}
          alt=""
          src={"/images/Rectangle25.png"}
        />
      ),
    },
    {
      title: "Sustainabilitty Report 2024",
      image: (
        <Image
          className="object-cover rounded-[12px] w-full h-full"
          width={384}
          height={247}
          alt=""
          src={"/images/Rectangle25.png"}
        />
      ),
    },
    {
      title: "Privacy & Policy",
      image: (
        <Image
          className="object-cover rounded-[12px] w-full h-full"
          width={384}
          height={247}
          alt=""
          src={"/images/Rectangle26.png"}
        />
      ),
    },
  ];
  return (
    <div className="flex flex-col items-start gap-6 self-stretch w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 w-full">
        {data.map((data, index) => {
          return (
            <div
              key={index}
              className="flex p-4 sm:p-5 flex-col cursor-pointer items-start gap-3 rounded-[14px] border border-[#DBDBDB] hover:shadow-md transition-shadow"
            >
              <h1 className="text-base sm:text-base xl:text-lg font-medium mb-2">
                {data.title}
              </h1>
              <div className="w-full  relative">{data.image}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Reports;
