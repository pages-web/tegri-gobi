"use client";

import { useState } from "react";

interface CoreButtonsProps {
  onViewChange: (view: "overview" | "reports") => void;
}

const CoreButtons = ({ onViewChange }: CoreButtonsProps) => {
  const [activeView, setActiveView] = useState<"overview" | "reports">(
    "overview"
  );

  const handleOverviewClick = () => {
    setActiveView("overview");
    onViewChange("overview");
  };

  const handleReportsClick = () => {
    setActiveView("reports");
    onViewChange("reports");
  };

  return (
    <div className="flex items-center gap-3 self-stretch">
      <button
        onClick={handleOverviewClick}
        className={`flex items-center justify-center cursor-pointer h-9 py-2 px-3 gap-2.5 rounded-[100px] text-center font-roboto text-sm font-normal leading-none ${activeView === "overview"
          ? "bg-primary text-white"
          : "bg-white text-black border border-[#DBDBDB]"
          }`}
      >
        Overview
      </button>
      <button
        onClick={handleReportsClick}
        className={`flex items-center justify-center cursor-pointer h-9 py-2 px-3 gap-2.5 rounded-[100px] text-center font-roboto text-sm font-normal leading-none ${activeView === "reports"
          ? "bg-primary text-white"
          : "bg-white text-black border border-[#DBDBDB]"
          }`}
      >
        Reports
      </button>
    </div>
  );
};
export default CoreButtons;
