"use client"

import React from "react"
import { useParams, useRouter } from "next/navigation"
import { useCmsPostDetail } from "@/sdk/queries/cms"
import Image from "@/components/ui/image"
import { ArrowLeft, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/navigation"
import SubscriptionSection from "@/components/SubscriptionSection"

const Page = () => {
  const params = useParams()
  const router = useRouter()
  const slug = params.slug as string

  const { post, loading } = useCmsPostDetail(slug)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("mn-MN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }


  if (loading) {
    return (
      <div className='px-4 md:px-8 lg:px-15 py-6 md:py-12 pt-20 md:pt-28'>
        <div className='w-full shrink-0 flex items-center justify-center min-h-[60vh]'>
          <div className='flex flex-col items-center gap-4'>
            <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-primary'></div>
            <p className='text-gray-600 font-roboto text-sm'>Loading news details...</p>
          </div>
        </div>
      </div>
    )
  }

  if (!loading && !post) {
    return (
      <div className='px-4 md:px-8 lg:px-15 py-6 md:py-12 pt-20 md:pt-28'>
        <div className='w-full shrink-0 flex items-center justify-center min-h-[60vh]'>
          <div className='flex flex-col items-center gap-4 text-center'>
            <div className='flex flex-col gap-2'>
              <h2 className='text-black font-roboto text-xl font-medium'>News Not Found</h2>
              <p className='text-gray-600 font-roboto text-sm max-w-md'>
                The news you&apos;re looking for is not available or may have been removed.
              </p>
            </div>
            <Button
              variant="outline"
              onClick={() => router.back()}
              className='mt-2'
            >
              Go Back
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="mt-22 min-h-[50vh] sm:min-h-[60vh] lg:min-h-screen px-4 sm:px-8 lg:px-44 xl:px-15 py-6 sm:py-8 lg:py-10">
      <div className="min-h-screen">
        <nav className="flex items-center justify-between px-6 py-4 max-w-4xl mx-auto">
          <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft size={20} />
            <span className="font-roboto text-lg font-normal">Back</span>
          </Link>
        </nav>

        <main className="max-w-4xl mx-auto px-6 pb-16">
          <div className="relative mb-6">
            <Image
              src={post?.thumbnail?.url}
              alt={post?.title}
              width={800}
              height={300}
              className="w-full h-80 md:h-96 object-cover rounded-2xl"
            />
          </div>

          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-500 font-medium">
                {formatDate(
                  (post as any).createdAt || new Date().toISOString()
                )}
              </span>

              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Share2 size={18} className="text-gray-600" />
              </button>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
              {post?.title}
            </h1>
          </div>

          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post?.content }} />
        </main>

        <SubscriptionSection />
      </div>
    </div>
  )
}

export default Page