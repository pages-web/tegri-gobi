'use client';

import { Button } from '@/components/ui/button';
import React, { useState } from 'react'
import { Heart, Share2, Wifi, Car, Utensils, Bath, Bed, Users, Wind, Thermometer, Star, Gamepad2, Coffee } from 'lucide-react';
import { useParams } from 'next/navigation';
import useRooms from '@/sdk/queries/rooms';
import { useCmsPostDetail } from '@/sdk/queries/cms';
import Image from '@/components/ui/image';

const Page = () => {
  const params = useParams();
  const { rooms } = useRooms()

  const { post } = useCmsPostDetail(params.slug as string)

  const room = rooms.find(
    (room) => room._id === post?.customFieldsMap?.rooms?.product
  );

  const [isFavorited, setIsFavorited] = useState(false);
  const [isSharing, setIsSharing] = useState(false);

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

  return (
    <div className='px-4 md:px-8 lg:px-15 py-6 md:py-12 pt-20 md:pt-28'>
      <div className='w-full shrink-0'>
        <div className='flex items-center justify-between'>
          <div className='flex flex-col items-start gap-3'>
            <h2 className='text-black font-roboto text-3xl not-italic font-normal leading-normal'>
              {post?.title || "N/A"}
            </h2>
            <p className='text-black font-roboto text-[14px] not-italic font-normal leading-5 lg:max-w-4xl 2xl:max-w-5xl'>
              {post?.excerpt || "N/A"}
            </p>
          </div>

          <div className='flex items-start gap-6 pt-11'>
            <Button
              variant="ghost"
              className='flex justify-center items-center p-2.5 hover:bg-white'
              onClick={handleFavorite}
            >
              <Heart
                className={`w-6 h-6 ${isFavorited ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
              />
            </Button>

            <Button
              variant="ghost"
              className='flex justify-center items-center p-2.5 hover:bg-white'
              onClick={handleShare}
              disabled={isSharing}
            >
              <Share2 className={`w-6 h-6 ${isSharing ? 'text-gray-400' : 'text-gray-600'}`} />
            </Button>
          </div>
        </div>

        <div className='flex gap-8 pt-6'>
          <div className='flex-[2] flex flex-col gap-8'>
            <div className='flex flex-col items-start gap-4 self-stretch'>
              <div className='w-full h-[480px] relative rounded-lg overflow-hidden'>
                <Image src={post?.thumbnail?.url} alt={post?.title} className='w-full h-full object-cover' />
              </div>

              <p className='text-black font-roboto text-sm not-italic font-normal leading-6 self-stretch'>
                {post?.excerpt}
              </p>
            </div>



            <div className='flex flex-col gap-6 items-start self-stretch'>
              <h2 className='text-black font-roboto text-xl not-italic font-normal leading-normal self-stretch'>Amenities</h2>

              <div className='grid grid-cols-2 gap-4'>
                {post?.customFieldsMap?.rooms?.amenities?.split(',').map((item: string, index: number) => {
                  const trimmedItem = item.trim();

                  // Map amenity names to appropriate icons and descriptions
                  const getAmenityDetails = (amenity: string) => {
                    const amenityMap: { [key: string]: { icon: any, description: string } } = {
                      'Airport Pickup': {
                        icon: Car,
                        description: 'Convenient airport transfer service'
                      },
                      'Wifi': {
                        icon: Wifi,
                        description: 'High-speed internet access'
                      },
                      'Air Conditioning': {
                        icon: Wind,
                        description: 'Climate controlled comfort'
                      },
                      'Restaurant': {
                        icon: Utensils,
                        description: 'On-site dining options'
                      },
                      'Coffee': {
                        icon: Coffee,
                        description: 'Fresh coffee service'
                      },
                      'Bathroom': {
                        icon: Bath,
                        description: 'Private bathroom facilities'
                      },
                      'Stargazing': {
                        icon: Star,
                        description: 'Perfect for night sky viewing'
                      },
                      'Gaming': {
                        icon: Gamepad2,
                        description: 'Entertainment and gaming facilities'
                      }
                    };

                    // Check for exact match first
                    if (amenityMap[amenity]) {
                      return amenityMap[amenity];
                    }

                    // Check for partial matches
                    const lowerAmenity = amenity.toLowerCase();
                    for (const [key, value] of Object.entries(amenityMap)) {
                      if (lowerAmenity.includes(key.toLowerCase()) || key.toLowerCase().includes(lowerAmenity)) {
                        return value;
                      }
                    }

                    // Default fallback
                    return {
                      icon: Star,
                      description: 'Additional amenity available'
                    };
                  };

                  const { icon: IconComponent, description } = getAmenityDetails(trimmedItem);

                  return (
                    <div key={`${trimmedItem}-${index}`} className='flex items-center gap-3 p-4 border border-gray-200 rounded-lg'>
                      <IconComponent className='w-5 h-5 text-gray-600' />
                      <div className='flex flex-col'>
                        <span className='text-sm font-medium'>{trimmedItem}</span>
                        <span className='text-xs text-gray-500'>{description}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className='flex flex-col gap-4'>
              <h3 className='text-xl font-medium text-black'>Room Rules</h3>
              <ul className='space-y-2 text-sm text-gray-700'>
                <li>• Check-in time is 3:00 PM, check-out time is 11:00 AM</li>
                <li>• No smoking allowed inside the room. Designated smoking areas are available outside.</li>
                <li>• Please conserve water and electricity by turning off lights and appliances when not in use.</li>
                <li>• Guests are responsible for locking the doors and securing their belongings.</li>
                <li>• Room keys must be returned at check-out. Lost keys incur a replacement fee.</li>
              </ul>
            </div>


          </div>

          <div className='flex-[1] flex flex-col gap-6'>
            <div className='bg-gray-50 p-6 rounded-lg'>
              <h3 className='text-lg font-medium mb-4'>Information</h3>
              <div className='space-y-4'>
                <div className='flex items-center gap-3'>
                  <Bed className='w-5 h-5 text-gray-600' />
                  <span className='text-sm'>38m²</span>
                </div>
                <div className='flex items-center gap-3'>
                  <Users className='w-5 h-5 text-gray-600' />
                  <span className='text-sm'>1 - 4 Guests</span>
                </div>
                <div className='flex items-center gap-3'>
                  <Bath className='w-5 h-5 text-gray-600' />
                  <span className='text-sm'>Bathroom</span>
                </div>
                <div className='flex items-center gap-3'>
                  <Wind className='w-5 h-5 text-gray-600' />
                  <span className='text-sm'>Air conditioner</span>
                </div>
                <div className='flex items-center gap-3'>
                  <Utensils className='w-5 h-5 text-gray-600' />
                  <span className='text-sm'>Terrace</span>
                </div>
                <div className='flex items-center gap-3'>
                  <Bath className='w-5 h-5 text-gray-600' />
                  <span className='text-sm'>Shower</span>
                </div>
                <div className='flex items-center gap-3'>
                  <Star className='w-5 h-5 text-gray-600' />
                  <span className='text-sm'>Stargazing window</span>
                </div>
                <div className='flex items-center gap-3'>
                  <Thermometer className='w-5 h-5 text-gray-600' />
                  <span className='text-sm'>Air conditioner</span>
                </div>
                <div className='flex items-center gap-3'>
                  <Gamepad2 className='w-5 h-5 text-gray-600' />
                  <span className='text-sm'>Smart responsive system</span>
                </div>
                <div className='flex items-center gap-3'>
                  <Wifi className='w-5 h-5 text-gray-600' />
                  <span className='text-sm'>Free wifi</span>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className='border-t pt-4'>
              <div className='flex justify-between items-center mb-4'>
                <span className='text-sm text-gray-600'>Per Night:</span>
                <span className='text-lg font-semibold text-red-500'>$ 200.00 USD</span>
              </div>
            </div>

            {/* Extra Services */}
            <div className='flex flex-col gap-4'>
              <h4 className='font-medium'>Extra Services</h4>
              <ul className='space-y-2 text-sm text-gray-700'>
                <li>• Free Private Parking</li>
                <li>• Smart responsive system</li>
                <li>• Kids Play Area</li>
                <li>• Free Early Check-in</li>
                <li>• Delicious Meals & Snacks</li>
              </ul>
            </div>

            {/* Book Button */}
            <Button className='w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg'>
              Book Room
            </Button>
          </div>
        </div>
      </div >
    </div >
  )
}

export default Page