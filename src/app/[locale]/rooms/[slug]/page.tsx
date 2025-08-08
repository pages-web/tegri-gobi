'use client';

import { Button } from '@/components/ui/button';
import React, { useState } from 'react'
import {
  Heart, Share2, VectorSquare,
  Eye,
  Wind,
  Zap,
  Wifi,
  Bath,
  TreePine,
  Plus,
  Users,
  ShowerHead
} from 'lucide-react';
import { useParams } from 'next/navigation';
import useRooms from '@/sdk/queries/rooms';
import { useCmsPostDetail } from '@/sdk/queries/cms';
import Image from '@/components/ui/image';
import { Card, CardContent } from '@/components/ui/card';

const getIconByLabel = (label: string): React.ReactNode => {
  const normalizedLabel = label.toLowerCase().trim();

  if (normalizedLabel.includes('m²') || normalizedLabel.includes('size')) {
    return <VectorSquare className="w-4 h-4" />;
  }
  if (normalizedLabel.includes('guest')) {
    return <Users className="w-4 h-4" />;
  }
  if (normalizedLabel.includes('stargazing') || normalizedLabel.includes('window')) {
    return <Eye className="w-4 h-4" />;
  }
  if (normalizedLabel.includes('air') || normalizedLabel.includes('conditioner')) {
    return <Wind className="w-4 h-4" />;
  }
  if (normalizedLabel.includes('smart') || normalizedLabel.includes('system')) {
    return <Zap className="w-4 h-4" />;
  }
  if (normalizedLabel.includes('wifi')) {
    return <Wifi className="w-4 h-4" />;
  }
  if (normalizedLabel.includes('bath')) {
    return <Bath className="w-4 h-4" />;
  }
  if (normalizedLabel.includes('shower')) {
    return <ShowerHead className="w-4 h-4" />;
  }
  if (normalizedLabel.includes('terrace')) {
    return <TreePine className="w-4 h-4" />;
  }

  return <Plus className="w-4 h-4" />;
};

const parseInformationString = (information: string) => {
  return information.split(',').map(item => item.trim()).filter(item => item.length > 0);
};

const Page = () => {
  const params = useParams();
  const { rooms, loading: roomsLoading } = useRooms()

  const { post, loading: postLoading } = useCmsPostDetail(params.slug as string)

  const room = rooms.find(
    (room) => room._id === post?.customFieldsMap?.rooms?.product
  );

  const [isFavorited, setIsFavorited] = useState(false);
  const [isSharing, setIsSharing] = useState(false);

  const isLoading = roomsLoading || postLoading || !post;

  const handleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  const handleShare = async () => {
    if (isSharing) return;

    setIsSharing(true);

    const shareData = {
      title: 'Family Capsule',
      text: 'Experience refined comfort and grounded simplicity in our Gobi-inspired lodges',
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      }
    } catch (error) {
      if (error instanceof Error && error.name !== 'AbortError') {
        console.error('Error sharing:', error);
      }
    } finally {
      setIsSharing(false);
    }
  };

  if (isLoading) {
    return (
      <div className='px-4 md:px-8 lg:px-15 py-6 md:py-12 pt-20 md:pt-28'>
        <div className='w-full shrink-0 flex items-center justify-center min-h-[60vh]'>
          <div className='flex flex-col items-center gap-4'>
            <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-primary'></div>
            <p className='text-gray-600 font-roboto text-sm'>Loading room details...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!isLoading && post && !room) {
    return (
      <div className='px-4 md:px-8 lg:px-15 py-6 md:py-12 pt-20 md:pt-28'>
        <div className='w-full shrink-0 flex items-center justify-center min-h-[60vh]'>
          <div className='flex flex-col items-center gap-4 text-center'>
            <div className='w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center'>
              <VectorSquare className='w-8 h-8 text-gray-400' />
            </div>
            <div className='flex flex-col gap-2'>
              <h2 className='text-black font-roboto text-xl font-medium'>Room Not Found</h2>
              <p className='text-gray-600 font-roboto text-sm max-w-md'>
                The room you&apos;re looking for is not available or may have been removed.
              </p>
            </div>
            <Button
              variant="outline"
              onClick={() => window.history.back()}
              className='mt-2'
            >
              Go Back
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='px-4 md:px-8 lg:px-15 py-6 md:py-12 pt-20 md:pt-28'>
      <div className='w-full shrink-0'>
        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
          <div className='flex flex-col items-start gap-3 flex-1'>
            <h2 className='text-black font-roboto text-2xl sm:text-3xl not-italic font-normal leading-normal'>
              {post?.title || "N/A"}
            </h2>
            <p className='text-black font-roboto text-[14px] not-italic font-normal leading-5 lg:max-w-4xl 2xl:max-w-5xl'>
              {post?.excerpt || "N/A"}
            </p>
          </div>

          <div className='flex items-center justify-between gap-4 sm:justify-between sm:pt-11 self-start sm:self-auto w-20 sm:w-24'>
            <Button
              variant="ghost"
              className='flex justify-center items-center p-2.5 hover:bg-white'
              onClick={handleFavorite}
            >
              <Heart
                className={`w-5 h-5 sm:w-6 sm:h-6 ${isFavorited ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
              />
            </Button>

            <Button
              variant="ghost"
              className='flex justify-center items-center p-2.5 hover:bg-white'
              onClick={handleShare}
              disabled={isSharing}
            >
              <Share2 className={`w-5 h-5 sm:w-6 sm:h-6 ${isSharing ? 'text-gray-400' : 'text-gray-600'}`} />
            </Button>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row gap-6 lg:gap-8 pt-6'>
          <div className='flex-1 lg:flex-[2] flex flex-col gap-6 lg:gap-8'>
            <div className='flex flex-col items-start gap-4 self-stretch'>
              <div className='w-full h-[250px] sm:h-[350px] lg:h-[480px] relative rounded-lg overflow-hidden'>
                <Image src={post?.thumbnail?.url} alt={post?.title} className='w-full h-full object-cover p-0' />
              </div>

              <p className='text-black font-roboto text-sm not-italic font-normal leading-6 self-stretch' dangerouslySetInnerHTML={{ __html: post?.content || '' }} />
            </div>



            <div className='flex flex-col gap-4 lg:gap-6 items-start self-stretch'>
              <h2 className='text-black font-roboto text-lg sm:text-xl not-italic font-normal leading-normal self-stretch'>Amenities</h2>

              <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-6 w-full'>
                {post?.customFieldsMap?.rooms?.amenities?.split(',').map((item: string, index: number) => {

                  return (
                    <div key={index} className='flex items-center justify-center gap-2 sm:gap-3 p-2 sm:p-3 lg:p-4 border border-gray-200 rounded-lg min-h-[60px] sm:min-h-[70px]'>
                      <div className='flex flex-col items-center text-center'>
                        <span className='text-xs sm:text-sm font-medium leading-tight'>{item.trim()}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className='flex flex-col items-start self-stretch gap-4'>
              <h2 className='text-black font-roboto text-lg sm:text-xl not-italic font-normal leading-normal self-stretch'>Room Rules</h2>

              <ul className='self-stretch text-black font-roboto text-sm sm:text-[16px] not-italic font-normal leading-6 space-y-2'>
                {post?.customFieldsMap?.rooms?.roomRules?.split(',').map((rule: string, index: number) => (
                  <li key={index} className='flex items-start gap-2 '>
                    <span className='text-black mt-1'>•</span>
                    <span className='flex-1'>{rule.trim()}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Card className='w-full lg:flex-[1] flex flex-col gap-4 lg:gap-6 items-center lg:sticky lg:top-28 self-start'>
            <CardContent className='flex w-full p-4 sm:p-5 flex-col gap-4 lg:gap-6 items-start'>
              <div className='flex flex-col items-start gap-3 lg:gap-3.5 self-stretch'>
                <h2 className='text-black font-roboto text-base sm:text-lg not-italic font-normal leading-normal self-stretch'>
                  Information
                </h2>

                <div className='flex flex-wrap gap-2 lg:gap-3 w-full'>
                  {(() => {
                    const information = post?.customFieldsMap?.rooms?.information;
                    if (!information) return null;

                    const parsedInformation = typeof information === 'string'
                      ? parseInformationString(information)
                      : information;

                    return (
                      <>
                        {parsedInformation.map((item: string, index: number) => (
                          <div key={index} className='flex px-3 py-1.5 lg:px-4 lg:py-2 items-center gap-2 lg:gap-2.5 rounded-full border border-[#DBDBDB] backdrop-blur-sm shadow-sm transition-shadow duration-200 min-h-[35px] lg:min-h-[38px]'>
                            <div className='flex-shrink-0 text-gray-600'>
                              {getIconByLabel(item)}
                            </div>
                            <span className='font-roboto text-xs sm:text-[14px] not-italic font-normal leading-normal'>{item}</span>
                          </div>
                        ))}
                      </>
                    );
                  })()}
                </div>
              </div>

              <div className='flex py-3 lg:py-4 justify-between items-center self-stretch border-y border-[#DBDBDB]'>
                <p className='text-black font-roboto text-base sm:text-lg not-italic font-normal leading-normal'>Per Night:</p>
                <div className='flex gap-0.5'>
                  <p className='text-primary font-roboto text-base sm:text-lg not-italic font-medium leading-normal'>$</p>
                  <p className='text-primary font-roboto text-base sm:text-lg not-italic font-medium leading-normal'>{room?.unitPrice || 'N/A'}</p>
                  <p className='text-primary font-roboto text-base sm:text-lg not-italic font-medium leading-normal'>USD</p>
                </div>
              </div>

              <div className='flex flex-col items-start gap-3 lg:gap-3.5 self-stretch'>
                <h2 className='text-black font-roboto text-base sm:text-lg not-italic font-normal leading-normal self-stretch'>
                  Extra Services
                </h2>

                <ul className='flex flex-col items-start gap-2 lg:gap-3 self-stretch'>
                  {post?.customFieldsMap?.rooms?.extraService?.split(',').map((service: string, index: number) => (
                    <li key={index} className='text-black/70 font-roboto text-xs sm:text-[14px] not-italic font-normal leading-normal flex items-start gap-2'>
                      <span className='text-black/70 mt-1'>•</span>
                      <span className='flex-1'>{service.trim()}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button variant="default" className='w-full rounded-full py-3 sm:py-4 text-sm sm:text-base'>
                Book Room
              </Button>
            </CardContent>
          </Card>
        </div>
      </div >
    </div >
  )
}

export default Page