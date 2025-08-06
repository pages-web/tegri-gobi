import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

const journeyData = [
  {
    id: 1,
    title: "Stargazing Nights",
    description:
      "Experience enchanting movie nights under the vast Gobi sky, where guests can enjoy cinematic presentations in an elegant open-air setting amidst the tranquil desert ambiance.",
    image: "/images/3.png",
  },
  {
    id: 2,
    title: "Sunrise Meditation",
    description:
      "Awaken your mind and body with guided sunrise meditation sessions in the stillness of the desert, bringing peace and clarity for the day ahead.",
    image: "/images/4.png",
  },
  {
    id: 3,
    title: "Camelback Journeys",
    description:
      "Embark on traditional camelback journeys led by experienced guides, exploring hidden landscapes and immersing yourself in the nomadic heritage of the Gobi.",
    image: "/images/1.png",
  },
  {
    id: 4,
    title: "Desert Nomad Dining",
    description:
      "Savor authentic Mongolian cuisine in an intimate desert dining experience, combining local flavors with breathtaking natural scenery.",
    image: "/images/2.png",
  },
]

const JourneySection = () => {
  const t = useTranslations("Journey")

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
          <div key={item.id} className={`flex w-full justify-between items-center ${index % 2 !== 0 ? 'flex-row-reverse' : ''
            }`}>
            <Image src={item.image} alt={item.title} width={760} height={440} className='rounded-2xl w-7/12 2xl:max-h-[550px] max-h-[440px]' />

            <div className='w-5/12 flex flex-col items-start gap-6 shrink-0'>
              <div className='w-[90%] mx-auto'>
                <ul className="flex flex-col w-full items-end gap-3 list-disc">
                  <li className="text-black font-roboto text-2xl font-normal leading-none self-stretch">
                    {item.title}
                  </li>
                  <p className="text-black font-roboto text-xs font-normal leading-4">
                    {item.description}
                  </p>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default JourneySection