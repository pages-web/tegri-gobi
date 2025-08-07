import Image from "next/image";

const GridImages = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-5 w-full">
        <div className="flex-1 relative w-full sm:w-auto h-[200px] sm:h-[400px]">
          <Image
            src="/images/Frame2095585317.png"
            alt=""
            fill
            className="rounded-[20px] object-cover"
            style={{ objectFit: "cover" }}
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>
        <div className="flex-1 relative w-full sm:w-auto h-[200px] sm:h-[400px]">
          <Image
            src="/images/Frame2095585318.png"
            alt=""
            fill
            className="rounded-[20px] object-cover"
            style={{ objectFit: "cover" }}
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>
      </div>

      <div className="relative w-full h-[200px] sm:h-[400px]">
        <Image
          src="/images/Frame2095585319.png"
          alt=""
          fill
          className="rounded-[20px] object-cover"
          style={{ objectFit: "cover" }}
          sizes="100vw"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-5 w-full">
        <div className="flex-1 relative w-full sm:w-auto h-[200px] sm:h-[400px]">
          <Image
            src="/images/Frame2095585321.png"
            alt=""
            fill
            className="rounded-[20px] object-cover"
            style={{ objectFit: "cover" }}
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>
        <div className="flex-1 relative w-full sm:w-auto h-[200px] sm:h-[400px]">
          <Image
            src="/images/Frame2095585320.png"
            alt=""
            className="rounded-[20px] object-cover"
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  );
};

export default GridImages;
