"use client";

import { useState } from "react";
import Banner from "@/components/about-us/Banner";
import Contact from "@/components/about-us/Contact";
import Greeting from "@/components/about-us/Greeting";
import OurService from "@/components/about-us/OurService";
import Reports from "@/components/about-us/Reports";
import AboutCoreButtons from "@/components/about-us/AboutCoreButton";
import SubscriptionSection from "../SubscriptionSection";

const AboutClientSection = () => {
  const [currentView, setCurrentView] = useState<"overview" | "reports">(
    "overview"
  );

  const handleViewChange = (view: "overview" | "reports") => {
    setCurrentView(view);
  };

  return (
    <div>
      <div className="relative min-h-[50vh] sm:min-h-[60vh] lg:min-h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/video/main.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      </div>

      <div className="flex flex-col items-start self-stretch gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-8 lg:px-6 xl:px-15 py-6 sm:py-8 lg:py-10 w-full">
        <AboutCoreButtons onViewChange={handleViewChange} />

        {currentView === "overview" ? (
          <>
            <Greeting />
            <OurService />
            <div className="flex flex-col gap-12 sm:gap-16 lg:gap-20 w-full">
              <Banner />
              <SubscriptionSection />
            </div>
          </>
        ) : (
          <>
            <Reports />
            <SubscriptionSection />
          </>
        )}
      </div>
    </div>
  );
};

export default AboutClientSection;
