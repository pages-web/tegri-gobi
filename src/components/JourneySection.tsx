"use client"

import { useTranslations } from 'next-intl'
import Image from './ui/image'
import React, { useEffect } from 'react'
import { useCmsPosts } from "@/sdk/queries/cms"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const JourneyItem = ({ item, index }: { item: any, index: number }) => {

  return (
    <div className={`flex w-full justify-between items-center ${index % 2 !== 0 ? 'flex-row-reverse' : ''
      }`}>
      <div className='w-7/12 relative'>
        <Carousel
          plugins={[
            Autoplay({
              delay: 6000,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {item.images.map((image: any, imageIndex: number) => (
              <CarouselItem key={imageIndex}>
                <Image
                  src={image.url}
                  alt={`${item.title} - Image ${imageIndex + 1}`}
                  width={760}
                  height={440}
                  className='rounded-2xl w-full 2xl:max-h-[550px] max-h-[440px] object-cover'
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>

      <div className='w-5/12 flex flex-col items-start gap-6 shrink-0'>
        <div className='w-[90%] mx-auto'>
          <div className="[&_ul]:list-disc [&_ul]:pl-5 [&_li]:mb-2" dangerouslySetInnerHTML={{ __html: item.content }} />
        </div>
      </div>
    </div>
  )
}

const JourneySection = () => {
  const t = useTranslations("Journey")

  const { posts: journeyDatas } = useCmsPosts({
    categoryId: "PTUOpWlxfq8bYKZ20CMcP",
  })

  const journeyData = journeyDatas.filter((post) =>
    post.categoryIds.includes("PTUOpWlxfq8bYKZ20CMcP")
  )


  return (
    <section className="w-full mx-auto py-10">
      <div className="mb-12">
        <h1 className="text-3xl font-roboto text-black mb-4 font-normal leading-normal">
          {t("Your Desert Journey")}
        </h1>
        <p className="text-black font-roboto text-sm font-normal leading-5">
          {t("Awaken your senses")}
        </p>
      </div>

      <div className='flex flex-col items-start gap-10'>
        {journeyData.map((item, index) => (
          <JourneyItem key={item._id} item={item} index={index} />
        ))}
      </div>
    </section>
  )
}

export default JourneySection