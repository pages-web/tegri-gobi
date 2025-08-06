import React from 'react'
import AccommodationList from '../../components/AccommodationList';
import TrendActivitiesSection from '../../components/TrendActivitiesSection';
import JourneySection from '../../components/JourneySection';
import GallerySection from '../../components/GallerySection';
import NewsSection from '../../components/NewsSection';
import MemoriesSection from "../../components/MemoriesSection"
import GettingHereSection from '../../components/GettingHereSection';
import SubscriptionSection from '../../components/SubscriptionSection';

export default function Home() {
  return (
    <div>
      <div className="relative min-h-screen overflow-hidden">
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
      <div className='px-15 py-10 items-center'>
        <AccommodationList />
        <TrendActivitiesSection />
        <JourneySection />
        <GallerySection />
        <NewsSection />
        <MemoriesSection />
        <GettingHereSection />
        <SubscriptionSection />
      </div>
    </div>
  );
}