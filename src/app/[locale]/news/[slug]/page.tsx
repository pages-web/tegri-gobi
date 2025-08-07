"use client"

import React from "react"
import { notFound, useParams } from "next/navigation"
import { useCmsPostDetail } from "@/sdk/queries/cms"
import { Loading } from "@/components/ui/loading"
import Image from "@/components/ui/image"
import { Link } from "@/i18n/navigation"


const Page = () => {
  const params = useParams()
  const slug = params.slug as string

  const { post, loading } = useCmsPostDetail(slug)

  if (loading) {
    return (
      <div className='flex items-center justify-center min-h-[400px]'>
        <Loading />
      </div>
    )
  }

  if (!post) {
    notFound()
  }

  return (
    <div className='px-15 py-10 items-center gap-20 flex flex-col'>
      <p>{post.title}</p>
      <Image src={post.thumbnail.url} alt={post.title} />
    </div>
  )
}

export default Page