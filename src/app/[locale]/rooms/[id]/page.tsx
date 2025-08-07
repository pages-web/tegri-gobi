import React from 'react'

interface PageProps {
  params: Promise<{
    locale: string;
    id: string;
  }>;
}

const Page = async ({ params }: PageProps) => {
  const { locale, id } = await params;

  return (
    <div>
      <div className='px-15 py-10 items-center gap-20 flex flex-col'>
        {/* Additional room content can go here */}
      </div>
    </div>
  )
}

export default Page