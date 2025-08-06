"use client"

import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { ReviewCard } from "./ReviewCard";
import React, { useState } from 'react'
import { useTranslations } from 'next-intl';

const reviewsData = [
  {
    "id": 1,
    "name": "Bat-Erdene Lhagva",
    "role": "Guest",
    "avatar": "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    "rating": 4.2,
    "review": "Tegri Gobi is unlike any place I've ever visited. The silence of the desert, the stars above my capsule, and the warm hospitality made it a soul-deep experience. Every detail is thoughtful, from the meals to the guided tours. I left feeling grounded and completely recharged."
  },
  {
    "id": 2,
    "name": "James Lena",
    "role": "Guest",
    "avatar": "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    "rating": 4.5,
    "review": "Sleeping in the capsule house under the Gobi sky was unforgettable. It's rare to find such comfort and style in such a remote, untouched location. The spa, the food, the team—everything exceeded our expectations."
  },
  {
    "id": 3,
    "name": "Khulan Bat",
    "role": "Guest",
    "avatar": "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    "rating": 5.0,
    "review": "The cultural tour to the nomadic family and riding camels through the dunes felt like stepping into another world. Tegri Gobi balances modern luxury with deep respect for Mongolian traditions. I'll be back."
  },
  {
    "id": 4,
    "name": "Sarah Mitchell",
    "role": "Guest",
    "avatar": "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    "rating": 4.8,
    "review": "An extraordinary escape from the ordinary. The desert landscape paired with luxurious amenities created the perfect balance of adventure and comfort. The stargazing experience was absolutely magical."
  },
  {
    "id": 5,
    "name": "David Chen",
    "role": "Guest",
    "avatar": "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    "rating": 4.7,
    "review": "Tegri Gobi exceeded all expectations. The combination of traditional Mongolian culture and modern luxury is seamless. The staff's attention to detail and genuine warmth made this trip unforgettable."
  }
]

const MemoriesSection = () => {

  const t = useTranslations("Memories")

  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerPage = 4
  const totalPages = Math.ceil(reviewsData.length / itemsPerPage)

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1))
  }

  const getCurrentItems = () => {
    const startIndex = currentIndex * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return reviewsData.slice(startIndex, endIndex)
  }



  return (
    <section className="w-full mx-auto py-10">
      <div className="mb-5">
        <h1 className="text-3xl font-roboto text-black mb-4 font-normal leading-normal">
          {t("Memories Made at Tegri Gobi")}
        </h1>

        <div className="flex justify-between items-start">
          <p className="text-black font-roboto text-sm font-normal leading-5">
            {t("See how the sands shift")}
          </p>

          <div className='flex gap-1'>
            <Button variant="ghost" type='button' onClick={handlePrevious}>
              <ArrowLeft />
            </Button>

            <Button variant="ghost" type='button' onClick={handleNext}>
              <ArrowRight />
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
        {getCurrentItems().map((review) => (
          <ReviewCard
            key={review.id}
            name={review.name}
            role={review.role}
            avatar={review.avatar}
            rating={review.rating}
            review={review.review}
          />
        ))}
      </div>
    </section >
  )
}

export default MemoriesSection