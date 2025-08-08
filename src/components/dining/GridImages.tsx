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
      <div className="flex flex-col items-start gap-3 pb-20">
        <h1 className="text-black font-roboto text-[30px] font-normal leading-normal">
          Where curated cocktails meet world-class cuisine
        </h1>
        <p className="text-black/70 font-roboto text-base font-normal leading-normal">
          Discover a dining experience that honors the wild soul of the Gobi. At
          Tegri Gobi, every dish begins with intention—locally sourced,
          seasonally prepared, and deeply inspired by Mongolia’s nomadic
          heritage. Whether it’s sun-dried curds, fire-roasted lamb, or herbal
          teas hand-picked from the steppe, your meals are a celebration of
          simplicity, silence, and the land itself. Dine beneath the open sky or
          in our warm desert lodge—where each flavor connects you to place, to
          people, and to something timeless.
        </p>
      </div>
    </div>
  );
};

export default GridImages;
