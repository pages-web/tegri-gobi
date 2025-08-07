"use client";

import { useState } from "react";

type DiningView = "restaurants" | "bar" | "lounge" | "private-dining";

interface CoreButtonsProps {
  onViewChange: (view: DiningView) => void;
}

const DiningCoreButton = ({ onViewChange }: CoreButtonsProps) => {
  const [activeView, setActiveView] = useState<DiningView>("restaurants");

  const buttons: { label: string; view: DiningView }[] = [
    { label: "Restaurants", view: "restaurants" },
    { label: "Bar", view: "bar" },
    { label: "Lounge", view: "lounge" },
    { label: "Private dining", view: "private-dining" },
  ];

  const handleClick = (view: DiningView) => {
    setActiveView(view);
    onViewChange(view);
  };

  return (
    <div className="flex items-center gap-3 self-stretch flex-wrap">
      {buttons.map((btn) => (
        <button
          key={btn.view}
          onClick={() => handleClick(btn.view)}
          className={`flex items-center justify-center cursor-pointer h-9 py-2 px-3 gap-2.5 rounded-[100px] text-center font-roboto text-sm font-normal leading-none ${
            activeView === btn.view
              ? "bg-[#D33718] text-white"
              : "bg-white text-black border border-[#DBDBDB]"
          }`}
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
};

export default DiningCoreButton;
