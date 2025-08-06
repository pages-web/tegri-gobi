'use client'

import React, { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { MapPin, Phone, Mail, CarFront, ArrowRight, Plus } from 'lucide-react'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { PrivacyTermsModal } from "@/components/common/privacy-terms-modal"
import Image from 'next/image'

const data = [
  {
    title: "Meet Us",
    icon: MapPin,
    desc: "Ömnögovi Province, South Gobi 21220, Mongolia",
  },
  {
    title: "Call us",
    icon: Phone,
    desc: "+976 77773331 +976 77773331",
  },
  {
    title: "Mail us",
    icon: Mail,
    desc: "info@tegrigobi.mn",
  },
];


const Page = () => {
  const t = useTranslations('Contact')

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [showPrivacyModal, setShowPrivacyModal] = useState(false)

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  })

  const faqItems = [
    { id: 1, title: t('Accommodation & Booking') },
    { id: 2, title: t('Travel & Transportation') },
    { id: 3, title: t('Food & Dietary') },
    { id: 4, title: t('Experiences & Tours') },
    { id: 5, title: t('Other Questions') }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <>
      <PrivacyTermsModal
        open={showPrivacyModal}
        onClose={() => setShowPrivacyModal(false)}
      />
      <div className='px-4 md:px-8 lg:px-15 py-6 md:py-12 pt-20 md:pt-28 flex flex-col gap-10 md:gap-20'>
        <div className='flex flex-col items-start gap-6 md:gap-10'>
          <div className='flex items-center gap-2.5 self-stretch'>
            <div className='flex flex-col items-start gap-3'>
              <h2 className='text-black font-roboto text-2xl md:text-3xl font-normal leading-normal'>{t('Contact Us')}</h2>
            </div>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start w-full'>
            <div className='flex w-full h-full flex-col items-start gap-8 md:gap-12 shrink-0 order-2 lg:order-1'>
              <div className='flex flex-col items-start gap-6 self-stretch'>
                {data.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-start gap-2.5 self-stretch"
                  >
                    <div className="flex items-center gap-2.5 self-stretch">
                      <item.icon className="w-6 h-6 text-black" />
                      <h2 className="text-black font-dmSans text-lg font-medium leading-5">
                        {item.title}
                      </h2>
                    </div>
                    <p className="self-stretch text-black font-roboto text-[14px] font-normal leading-normal">
                      {item.desc}
                    </p>
                  </div>
                ))}


              </div>

              <form onSubmit={handleSubmit} className='flex flex-col gap-6 items-start self-stretch'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 self-stretch items-start'>
                  <div className='flex flex-col items-start gap-2.5'>
                    <Label className='text-black font-roboto text-[14px] font-normal leading-normal'>
                      {t('First name')}
                    </Label>
                    <Input
                      name="firstName"
                      placeholder={t('Enter your first name')}
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className='w-full rounded-full backdrop-blur-sm h-11'
                    />
                  </div>
                  <div className='flex flex-col items-start gap-2.5'>
                    <Label className='text-black font-roboto text-[14px] font-normal leading-normal'>
                      {t('Last name')}
                    </Label>
                    <Input
                      name="lastName"
                      placeholder={t('Enter your last name')}
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className='w-full rounded-full backdrop-blur-sm h-11'
                    />
                  </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 self-stretch items-start'>
                  <div className='flex flex-col items-start gap-2.5'>
                    <Label className='text-black font-roboto text-[14px] font-normal leading-normal'>
                      {t('Email')}
                    </Label>
                    <Input
                      name="email"
                      type="email"
                      placeholder={t('Enter your email address')}
                      value={formData.email}
                      onChange={handleInputChange}
                      className='w-full rounded-full backdrop-blur-sm h-11'
                    />
                  </div>
                  <div className='flex flex-col items-start gap-2.5'>
                    <Label className='text-black font-roboto text-[14px] font-normal leading-normal'>
                      {t('Phone')}
                    </Label>
                    <Input
                      name="phone"
                      placeholder={t('+976 xxxx xxxx')}
                      value={formData.phone}
                      onChange={handleInputChange}
                      className='w-full rounded-full backdrop-blur-sm h-11'
                    />
                  </div>
                </div>

                <div className='flex flex-col items-start gap-2.5 self-stretch'>
                  <Label className='text-black font-roboto text-[14px] font-normal leading-normal'>
                    {t('Message')}
                  </Label>
                  <Textarea
                    name="message"
                    placeholder={t('Leave a message')}
                    value={formData.message}
                    onChange={handleInputChange}
                    className='w-full rounded-lg backdrop-blur-sm min-h-[120px]'
                  />
                </div>

                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  By submitting the form you agree to our {" "}
                  <button
                    type="button"
                    onClick={() => setShowPrivacyModal(true)}
                    className="text-primary hover:underline"
                  >
                    {t("Privacy Policy")}
                  </button>{" "}
                  and{" "}
                  <button
                    type="button"
                    onClick={() => setShowPrivacyModal(true)}
                    className="text-primary hover:underline"
                  >
                    {t("Terms of Conditions")}
                  </button>
                </p>

                <Button
                  variant="default"
                  type="submit"
                  className='w-full h-11 px-3 gap-2 rounded-full justify-center self-stretch'
                >
                  {t('Send Message')}
                </Button>
              </form>
            </div>

            <div className='flex w-full h-full flex-col items-start gap-4 md:gap-6 order-1 lg:order-2'>
              <Image
                src="/images/112.png"
                width={648}
                height={568}
                alt=''
                className='shrink-0 w-full rounded-2xl md:rounded-3xl max-h-[300px] md:max-h-[568px] object-cover self-stretch'
              />

              <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between self-stretch gap-4'>
                <div className='flex items-center gap-1'>
                  <div className='flex p-2.5 items-start gap-2.5'>
                    <CarFront className='w-5 h-5 md:w-6 md:h-6' />
                  </div>
                  <p className='text-black font-roboto text-sm md:text-base not-italic font-normal leading-[18px] flex-1'>
                    Dalanzadgad Airport (DLZ) ~2 hours by car
                  </p>
                </div>
                <div className='flex justify-center items-center gap-2.5 cursor-pointer hover:opacity-80 transition-opacity'>
                  <p className='text-black font-roboto text-sm md:text-base not-italic font-normal leading-normal'>
                    Get Directions
                  </p>
                  <ArrowRight className='w-5 h-5 md:w-6 md:h-6' />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col items-start gap-6 md:gap-10'>
          <div className='flex flex-col items-start gap-3'>
            <h2 className='text-black font-roboto text-2xl md:text-3xl font-normal leading-normal'>{t('Have you any questions?')}</h2>
            <p className='text-black font-roboto text-sm md:text-[14px] font-normal leading-5 max-w-4xl'>
              Experience refined comfort and grounded simplicity in our Gobi-inspired lodges — where every stay connects you to nature, stillness, and yourself. Let the vastness of the Gobi surround you in curated comfort, designed to restore and reconnect.
            </p>
          </div>

          <div className='flex flex-col items-start self-stretch'>
            {faqItems.map((item) => (
              <div key={item.id} className='w-full border-b border-gray-200 last:border-b-0 text-black'>
                <Button
                  variant="ghost"
                  onClick={() => setExpandedFaq(expandedFaq === item.id ? null : item.id)}
                  className='w-full px-0 py-4 md:py-6 text-left flex items-center justify-between hover:bg-transparent transition-all duration-200'
                >
                  <span className='flex items-center gap-2 md:gap-4 flex-1 min-w-0'>
                    <span className='font-roboto text-sm md:text-base font-normal shrink-0'>
                      {item.id.toString().padStart(2, '0')}.
                    </span>
                    <span className='font-roboto text-sm md:text-base font-normal truncate'>{item.title}</span>
                  </span>
                  <Plus
                    className={`w-5 h-5 md:w-6 md:h-6 shrink-0 transition-transform duration-300 ${expandedFaq === item.id ? 'rotate-45' : 'rotate-0'
                      }`}
                  />
                </Button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedFaq === item.id
                    ? 'max-h-96 opacity-100 pb-4 md:pb-6'
                    : 'max-h-0 opacity-0 pb-0'
                    }`}
                >
                  <div className='text-gray-600 px-0'>
                    <p className='text-sm md:text-base'>Content for {item.title} would go here...</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div >
    </>
  )
}

export default Page