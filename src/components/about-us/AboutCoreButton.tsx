"use client";

import { useState } from "react";

interface CoreButtonsProps {
  onViewChange: (view: "overview" | "reports") => void;
}

const AboutCoreButtons = ({ onViewChange }: CoreButtonsProps) => {
  const [activeView, setActiveView] = useState<"overview" | "reports">(
    "overview"
  );

  const handleClick = (view: "overview" | "reports") => {
    setActiveView(view);
    onViewChange(view);
  };

  const buttons: { label: string; view: "overview" | "reports" }[] = [
    { label: "Overview", view: "overview" },
    { label: "Reports", view: "reports" },
  ];

  return (
    <div className="flex items-center gap-3 self-stretch">
      {buttons.map((btn) => (
        <button
          key={btn.view}
          onClick={() => handleClick(btn.view)}
          className={`flex items-center justify-center cursor-pointer h-9 py-2 px-3 gap-2.5 rounded-[100px] text-center font-roboto text-sm font-normal leading-none ${activeView === btn.view
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

export default AboutCoreButtons;
