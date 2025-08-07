import Image from "next/image";

const SpaImages = () => {
  return (
    <div className="flex w-full flex-col gap-6 lg:w-[60%]">
      <Image
        width={760}
        height={400}
        alt=""
        className="w-full h-auto rounded-[24px] object-cover"
        src="/images/Rectangle632.png"
      />
      <div className="flex flex-col gap-6 md:flex-row">
        <Image
          width={368}
          height={400}
          alt=""
          className="w-full md:w-1/2 h-auto rounded-[24px] object-cover"
          src="/images/Rectangle633.png"
        />
        <Image
          width={368}
          height={400}
          alt=""
          className="w-full md:w-1/2 h-auto rounded-[24px] object-cover"
          src="/images/Rectangle634.png"
        />
      </div>
    </div>
  );
};

export default SpaImages;
