"use client"

import React from 'react'
import Image from './ui/image'
import { Link } from '@/i18n/navigation'
import { ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useCmsPosts } from "@/sdk/queries/cms"

const NewsSection = () => {
  const t = useTranslations("News")

  const { posts: newsDatas } = useCmsPosts({
    categoryId: "DaO_n5qfyK6p_-TlT9Bou",
  })

  const newsData = newsDatas.filter((post) =>
    post.categoryIds.includes("DaO_n5qfyK6p_-TlT9Bou")
  )

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("mn-MN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }


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
        {newsData.map((item) => (
          <Link href={`/news/${item._id}`} key={item._id}>
            <article className="flex flex-col items-end gap-4">
              <Image
                src={item.thumbnail.url}
                alt={item.title}
                width={424}
                height={380}
                className="object-cover rounded-2xl max-h-[380px] w-full self-stretch aspect-square"
              />

              <div className="flex flex-col items-start gap-3">
                <div className="line-clamp-1 text-[14px] font-normal leading-normal text-black/70 font-roboto overflow-hidden flex items-center gap-2">
                  {item?.tags && Array.isArray(item.tags) && item.tags.length > 0 && (
                    <>
                      <span className="font-medium">{item.tags[0]?.name}</span>
                      <span>•</span>
                    </>
                  )}

                  {formatDate(
                    (item as any).createdAt || new Date().toISOString()
                  )}
                </div>

                <h3 className="text-black text-lg font-normal leading-normal font-roboto">
                  {item.title}
                </h3>

                <p className="overflow-hidden text-black/70 text-ellipsis text-[14px] font-normal leading-normal font-roboto">
                  {item.excerpt}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default NewsSection