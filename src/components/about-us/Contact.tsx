import { Input } from "../ui/input";

const Contact = () => {
  return (
    <div className="flex px-4 sm:px-8 lg:px-[60px] flex-col items-center gap-6 sm:gap-8 lg:gap-[45px] self-stretch">
      <div className="flex items-center justify-center gap-3 self-stretch flex-col">
        <h1 className="text-center text-xl sm:text-2xl lg:text-[30px] font-normal leading-none font-['Roboto'] text-black">
          Be the first to know
        </h1>
        <p className="text-center text-xs sm:text-sm lg:text-[14px] leading-[18px] font-roboto font-normal text-[#000] max-w-md sm:max-w-lg lg:max-w-none">
          To receive updates about exclusive experiences, events, new
          destinations and more, please register your interest.
        </p>
      </div>
      <div className="flex w-full max-w-sm sm:max-w-md lg:max-w-lg">
        <Input
          placeholder="Your email"
          className="flex-1 h-[40px] sm:h-[43px] rounded-l-[100px] rounded-r-none shadow-none border-[#DBDBDB] border-r-0 focus:border-r-0 text-sm sm:text-base"
        />
        <button className="h-[40px] sm:h-[43px] cursor-pointer rounded-l-none rounded-r-[100px] border text-black text-center font-roboto text-xs sm:text-sm lg:text-[14px] not-italic font-normal leading-normal px-4 sm:px-6">
          SEND
        </button>
      </div>
    </div>
  );
};
export default Contact;
