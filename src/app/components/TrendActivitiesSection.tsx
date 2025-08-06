import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

const TrendActivitiesSection = () => {
  const t = useTranslations("Activities")
  const data = [
    {
      "title": "Dining Delights",
      "description": "Savor seasonal, locally inspired cuisine where every dish is crafted with intention and served with desert warmth.",
      "schedule": [
        { "label": "Dinner", "time": "6:00pm - 10:00pm" }
      ],
      "image": "/images/2.png"
    },
    {
      "title": "Spa & Wellness",
      "description": "Recenter your body and spirit through grounding rituals, mindful movement, and deep desert stillness.",
      "schedule": [
        { "label": "Tuesday - Saturday", "time": "4:00pm - 12:00am" }
      ],
      "image": "/images/2.png"
    },
    {
      "title": "Meeting & Celebration",
      "description": "Host meaningful gatherings in a setting where timeless landscapes meet heartfelt moments and seamless service.",
      "schedule": [
        { "label": "Monday - Sunday", "time": "7:00am - 9:00pm" }
      ],
      "image": "/images/2.png"
    },
    {
      "title": "Meeting & Celebration",
      "description": "Host meaningful gatherings in a setting where timeless landscapes meet heartfelt moments and seamless service.",
      "schedule": [
        { "label": "Monday - Sunday", "time": "7:00am - 9:00pm" }
      ],
      "image": "/images/2.png"
    }
  ]

  return (
    <section className="w-full mx-auto py-10">
      <div className="mb-12">
        <h1 className="text-3xl font-roboto text-black mb-4 font-normal leading-normal">
          {t("Experience our trend activities")}
        </h1>
        <p className="text-black max-w-4xl font-roboto text-sm font-normal leading-5">
          {t("Our trending experiences")}
        </p>
      </div>

      <div className="justify-between items-start w-full">
        <div className="items-start gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {data.map((item, index) => (
            <div key={index} className='flex flex-col items-start gap-3'>
              <Image src={item.image} alt={item.title} width={424} height={403} className='rounded-2xl' />

              <div className='flex flex-col items-start gap-2'>
                <h2 className='text-black font-roboto text-lg font-normal leading-normal'>{item.title.toUpperCase()}</h2>

                <p className='overflow-hidden max-w-96 text-black font-dm-sans text-sm font-normal leading-normal'>{item.description}</p>

                {item.schedule.map((schedule, scheduleIndex) => (
                  <p key={scheduleIndex} className="justify-start text-black text-base font-normal font-roboto leading-normal">
                    {schedule.label}<br />{schedule.time}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrendActivitiesSection