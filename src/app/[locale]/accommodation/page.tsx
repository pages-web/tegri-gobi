import React from 'react'
import Accommodation from './Accommodation';
import LodgeStays from './LodgeStays';
import SubscriptionSection from '@/app/components/SubscriptionSection';

const Page = () => {
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
      <div className='px-15 py-10 items-center gap-20 flex flex-col'>
        <Accommodation />
        <LodgeStays />
        <SubscriptionSection />
      </div>
    </div>
  )
}

export default Page