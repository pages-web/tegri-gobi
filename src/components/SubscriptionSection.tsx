"use client"

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { useTranslations } from 'next-intl'

const SubscriptionSection = () => {
  const t = useTranslations("Subscription")

  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Email submitted:', email)
  }

  return (
    <section className="w-full mx-auto py-10 flex flex-col items-start gap-2.5">
      <div className='flex flex-col items-center gap-10 self-stretch'>
        <div className='flex flex-col justify-center items-center gap-6 self-stretch text-black'>
          <div className='flex flex-col items-center gap-3'>
            <h2 className='text-center font-roboto text-3xl not-italic font-normal leading-normal'>
              {t("Be the first to know")}
            </h2>
            <p className='max-w-4xl text-center font-roboto text-sm not-italic font-normal leading-normal'>
              {t("To receive updates")}
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
          <div className="relative flex items-center">
            <Input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 pr-20 rounded-full border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:border-gray-400 focus:ring-0"
              required
            />
            <Button
              type="submit"
              variant="ghost"
              className="absolute right-1 h-10 px-6 rounded-full font-medium text-sm"
            >
              {t("SEND")}
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default SubscriptionSection