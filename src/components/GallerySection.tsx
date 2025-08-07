"use client"

import React from 'react'
import Image from './ui/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { useCmsPosts } from "@/sdk/queries/cms"

const GallerySection = () => {
  const { posts: galleryDatas } = useCmsPosts({
    categoryId: "zwCVBrt1HszVFqLUXsVBi",
  })

  const galleryData = galleryDatas.filter((post) =>
    post.categoryIds.includes("zwCVBrt1HszVFqLUXsVBi")
  )

  return (
    <section className="w-full py-10">
      <div className="relative w-full">
        <Carousel
          className="w-full"
          opts={{
            align: "center",
            loop: true,
            containScroll: false,
          }}
        >
          <CarouselContent className="-ml-4">
            {galleryData.flatMap((post) => post.images).map((image, index) => (
              <CarouselItem key={index} className="pl-4 basis-[60%] md:basis-[70%] lg:basis-[60%]">
                <div className="relative h-[300px] lg:h-[400px] 2xl:h-[540px] w-full rounded-2xl overflow-hidden bg-gray-100 shadow-xl transition-all duration-300 hover:shadow-2xl">
                  <Image
                    src={image.url}
                    alt={image.name}
                    className="object-cover rounded-2xl"
                    priority={index === 0}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="absolute left-1/7 top-1/2 -translate-y-1/2 h-12 w-12 backdrop-blur-md bg-white/10 hover:bg-transparent text-white hover:text-white  border-none shadow-lg transition-all duration-200 hover:scale-105 z-10" />
          <CarouselNext className="absolute right-1/7 top-1/2 -translate-y-1/2 h-12 w-12 backdrop-blur-md bg-white/10 hover:bg-transparent text-white hover:text-white border-none shadow-lg transition-all duration-200 hover:scale-105 z-10" />
        </Carousel>
      </div>
    </section>
  )
}

export default GallerySection