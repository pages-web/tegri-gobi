"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, FileCheck } from "lucide-react";

const SpaAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const spaServices = [
    {
      id: 1,
      title: "Sample Half Day Banya Experience ​",
      content:
        "Indulge in our signature massage treatments designed to relax your mind and rejuvenate your body. Our skilled therapists use traditional techniques combined with modern wellness practices to provide the ultimate relaxation experience.",
      services: [
        "One Banya sauna treatment per guest ​",
        "Body scrub and sensory shower experience ",
        "60-minute custom full-body massage",
      ],
    },
    {
      id: 2,
      title: "Sample Half Day Banya Experience ​",
      content:
        "Experience our luxurious facial treatments that cleanse, nourish, and revitalize your skin. Each treatment is customized to your specific skin type and concerns.",
      services: [
        "One Banya sauna treatment per guest ​",
        "Body scrub and sensory shower experience ",
        "60-minute custom full-body massage",
      ],
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        opacity: { duration: 0.2 },
        height: { duration: 0.3 },
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        opacity: { duration: 0.3, delay: 0.1 },
        height: { duration: 0.3 },
      },
    },
  };

  const chevronVariants = {
    closed: { rotate: 0 },
    open: { rotate: 180 },
  };

  return (
    <div className="w-full border-t border-t-[#DBDBDB] ">
      <div className="space-y-4">
        {spaServices.map((item, index) => (
          <div
            key={item.id}
            className="overflow-hidden rounded-xl bg-white transition-all mt-5"
          >
            <motion.button
              initial={false}
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              aria-expanded={activeIndex === index}
            >
              <h3 className="text-black font-medium text-base md:text-lg xl:text-[20px] leading-[20px] font-roboto cursor-pointer">
                {item.title}
              </h3>
              <motion.div
                variants={chevronVariants}
                animate={activeIndex === index ? "open" : "closed"}
                transition={{ duration: 0.3 }}
                className="ml-4 text-gray-500"
              >
                <ChevronDown className="w-6 h-6" />
              </motion.div>
            </motion.button>

            <AnimatePresence initial={false}>
              {activeIndex === index && (
                <motion.div
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={itemVariants}
                  className="overflow-hidden"
                >
                  <div className="">
                    {item.services && (
                      <div>
                        <ul className="grid grid-cols-1 sm:grid-cols-1 gap-6 mt-2">
                          {item.services.map((service, serviceIndex) => (
                            <li
                              key={serviceIndex}
                              className="flex items-center gap-4 text-gray-600"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="8"
                                height="9"
                                viewBox="0 0 8 9"
                                fill="none"
                              >
                                <circle cx="4" cy="4.5" r="4" fill="#C2C2C2" />
                              </svg>
                              <span className="text-[rgba(0,0,0,0.70)] font-roboto text-[16px] not-italic font-normal leading-normal">
                                {service}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpaAccordion;
