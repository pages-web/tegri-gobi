import React from 'react'
import Image from 'next/image'
import { ArrowRight, CarFront, MapPin, Plane } from 'lucide-react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

const GettingHereSection = () => {
  const t = useTranslations("Getting")

  return (
    <section className="w-full mx-auto py-10 flex flex-col justify-center items-center gap-6 self-stretch">
      <div className='flex flex-col justify-center items-center gap-6'>
        <div className='flex flex-col items-center gap-3'>
          <h2 className='text-black text-center font-roboto text-3xl not-italic font-normal leading-normal'>
            {t("Getting here")}
          </h2>

          <p className='text-center font-roboto text-sm not-italic font-normal leading-5 max-w-3xl'>
            {t("Reaching the tranquility")}
          </p>
        </div>
      </div>

      <div className="relative w-full aspect-[1320/654] max-h-[880px]">
        <Image
          src="/images/getting-here.png"
          alt='Getting here - scenic view'
          fill
          className='rounded-3xl'
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1320px"
        />
      </div>

      <div className='flex justify-between items-start self-stretch'>
        <div className='flex justify-center items-center gap-1'>
          <div className='flex p-2.5 items-start gap-2.5'>
            <MapPin className='w-6 h-6 text-black' />
          </div>
          <p className='text-black font-roboto text-sm not-italic font-normal leading-4'>
            {t("bulgan sum")} <br /> {t("south")}
          </p>
        </div>

        <div className='flex justify-center items-center gap-1'>
          <div className='flex p-2.5 items-start gap-2.5'>
            <Plane className='w-6 h-6 text-black' />
          </div>
          <p className='text-black font-roboto text-sm not-italic font-normal leading-4'>
            {t("Domestic")}<br /> {t("Chinghis Khaan")}
          </p>
        </div>

        <div className='flex justify-center items-center gap-1'>
          <div className='flex p-2.5 items-start gap-2.5'>
            <CarFront className='w-6 h-6 text-black' />
          </div>
          <p className='text-black font-roboto text-sm not-italic font-normal leading-4'>
            {t("Dalanzadgad")} <br /> {t("hours")}
          </p>
        </div>

        <Link href="https://maps.app.goo.gl/43x5uoDPeo7fcvVE8" target='_blank' className='flex justify-center items-center gap-2.5'>
          <p className="text-black font-roboto text-lg not-italic font-normal leading-normal">
            {t("Get Directions")}
          </p>
          <ArrowRight className='w-6 h-6 text-black' />
        </Link>
      </div>
    </section>
  )
}

export default GettingHereSection