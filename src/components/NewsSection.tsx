import React from 'react'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'

const NewsSection = () => {
  const t = useTranslations("News")
  const newsItems = [
    {
      id: 1,
      image: '/images/1.png',
      tags: 'Guide',
      date: 'July 20, 2025',
      title: 'Stargazing Nights Return',
      description: 'Experience the Gobi\'s breathtaking night sky with our guided stargazing sessions, now available every weekend through autumn.'
    },
    {
      id: 2,
      image: '/images/2.png',
      tags: 'Travel',
      date: 'July 15, 2025',
      title: 'Desert Wellness Retreat Wrap-Up',
      description: 'Last week\'s slow-living retreat brought together mindful travelers from around the world for yoga, journaling, and deep desert stillness.'
    },
    {
      id: 3,
      image: '/images/4.png',
      tags: 'Travel',
      date: 'July 02, 2025',
      title: 'Autumn Bookings Now Open',
      description: 'Plan your escape early — reservations for the serene Gobi autumn season are now available, with limited lodge availability in October.'
    },
    {
      id: 4,
      image: '/images/1.png',
      tags: 'Travel',
      date: 'July 02, 2025',
      title: 'Autumn Bookings Now Open',
      description: 'Plan your escape early — reservations for the serene Gobi autumn season are now available, with limited lodge availability in October.'
    }
  ]

  return (
    <section className="w-full mx-auto py-10">
      <h1 className="text-3xl font-roboto text-black mb-4 font-normal leading-normal">
        {t("Latest news")}
      </h1>

      <div className="flex justify-between items-start mb-4">
        <p className="text-black font-roboto text-sm font-normal leading-5">
          {t("See how the sands shift")}
        </p>

        <Link
          href="/news"
          className="text-gray-700 hover:text-gray-900 font-medium flex items-center justify-center gap-2.5 "
        >
          {t("See All")}
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
        {newsItems.map((item) => (
          <Link href="/" key={item.id}>
            <article className="flex flex-col items-end gap-4">
              <Image
                src={item.image}
                alt={item.title}
                width={424}
                height={380}
                className="object-cover rounded-2xl max-h-[380px] w-full self-stretch aspect-square"
              />

              <div className="flex flex-col items-start gap-3">
                <div className="line-clamp-1 text-[14px] font-normal leading-normal text-black/70 font-roboto overflow-hidden flex items-center gap-2">
                  <span className="font-medium">{item.tags}</span>
                  <span>•</span>
                  <span>{item.date}</span>
                </div>

                <h3 className="text-black text-lg font-normal leading-normal font-roboto">
                  {item.title}
                </h3>

                <p className="overflow-hidden text-black/70 text-ellipsis text-[14px] font-normal leading-normal font-roboto">
                  {item.description}
                </p>
              </div>
            </article></Link>
        ))}
      </div>
    </section>
  )
}

export default NewsSection