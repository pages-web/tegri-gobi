"use client";

import { useState } from "react";
import RootedDeep from "@/components/dining/RootedDeep";
import DiningCoreButton from "@/components/dining/DiningCoreButton";
import GridImages from "./GridImages";

type DiningView = "restaurants" | "bar" | "lounge" | "private-dining";

const DiningClientSection = () => {
  const [currentView, setCurrentView] = useState<DiningView>("restaurants");

  const handleViewChange = (view: DiningView) => {
    setCurrentView(view);
  };

  return (
    <div className="flex flex-col gap-6">
      <RootedDeep />
      <DiningCoreButton onViewChange={handleViewChange} />
      <GridImages />
    </div>
  );
};

export default DiningClientSection;
