'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  VectorSquare,
  Bed,
  Eye,
  Wind,
  Zap,
  Wifi,
  Bath,
  TreePine,
  ArrowRight,
  Plus,
  Users,
  ShowerHead
} from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import Image from './ui/image';
import { useCmsPosts } from "@/sdk/queries/cms"
import useRooms from '@/sdk/queries/rooms';
interface RoomInformation {
  icon: React.ReactNode | string;
  label: string;
}

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

const parseInformationString = (informationString: string): RoomInformation[] => {
  if (!informationString || typeof informationString !== 'string') {
    return [];
  }

  return informationString
    .split(',')
    .map(item => item.trim())
    .filter(item => item.length > 0)
    .map(label => ({
      icon: getIconByLabel(label),
      label: label
    }));
};

const lodgeStays = [
  {
    id: 'deluxe-capsule',
    title: 'DELUXE CAPSULE',
    price: 250,
    originalPrice: 270,
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'The 38m² Deluxe Capsule seamlessly combines luxury and comfort, offering an exclusive retreat for couples and solo travelers amidst the pristine landscapes of the Gobi Desert.',
    amenities: [
      { icon: <Users className="w-4 h-4" />, label: '38m2' },
      { icon: <Bed className="w-4 h-4" />, label: '1-2 Guests' },
      { icon: <Wind className="w-4 h-4" />, label: 'Air conditioner' },
      { icon: <Eye className="w-4 h-4" />, label: 'Stargazing window' },
      { icon: <Bath className="w-4 h-4" />, label: 'Bathroom' },
      { icon: <TreePine className="w-4 h-4" />, label: 'Terrace' },
      { icon: <Wifi className="w-4 h-4" />, label: 'Free wifi' },
      { icon: <Plus className="w-4 h-4" />, label: '+3' }
    ]
  },
  {
    id: 'family-capsule',
    title: 'FAMILY CAPSULE',
    price: 300,
    image: 'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'The Family Capsule, spanning 38m², is thoughtfully designed to accommodate up to four guests, providing a spacious and elegant environment ideal for families and groups of friends seeking both comfort and privacy.',
    amenities: [
      { icon: <Users className="w-4 h-4" />, label: '38m2' },
      { icon: <Bed className="w-4 h-4" />, label: '1-4 Guests' },
      { icon: <Eye className="w-4 h-4" />, label: 'Stargazing window' },
      { icon: <Wind className="w-4 h-4" />, label: 'Air conditioner' },
      { icon: <Zap className="w-4 h-4" />, label: 'Smart responsive system' },
      { icon: <TreePine className="w-4 h-4" />, label: 'Terrace' },
      { icon: <Bath className="w-4 h-4" />, label: 'Bathroom' },
      { icon: <Plus className="w-4 h-4" />, label: '+3' }
    ]
  },
  {
    id: 'deluxe-capsule-2',
    title: 'DELUXE CAPSULE',
    price: 250,
    originalPrice: 270,
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'The 38m² Deluxe Capsule seamlessly combines luxury and comfort, offering an exclusive retreat for couples and solo travelers amidst the pristine landscapes of the Gobi Desert.',
    amenities: [
      { icon: <Users className="w-4 h-4" />, label: '38m2' },
      { icon: <Bed className="w-4 h-4" />, label: '1-2 Guests' },
      { icon: <Wind className="w-4 h-4" />, label: 'Air conditioner' },
      { icon: <Eye className="w-4 h-4" />, label: 'Stargazing window' },
      { icon: <Bath className="w-4 h-4" />, label: 'Bathroom' },
      { icon: <TreePine className="w-4 h-4" />, label: 'Terrace' },
      { icon: <Wifi className="w-4 h-4" />, label: 'Free wifi' },
      { icon: <Plus className="w-4 h-4" />, label: '+3' }
    ]
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState('accommodation');
  const t = useTranslations("Accommodation")

  const { rooms } = useRooms()


  const { posts: accomdationsDatas } = useCmsPosts({
    categoryId: "zbkh-YNyS1IcKMZeAlPUj",
  })

  const accomdationsData = accomdationsDatas.filter((post) =>
    post.categoryIds.includes("zbkh-YNyS1IcKMZeAlPUj")
  )

  const tabOptions = [
    {
      id: 'accommodation',
      title: 'Accommodation',
    },
    {
      id: 'lodgeStays',
      title: 'Lodge stays',
    }
  ]

  return (
    <section className="w-full mx-auto py-10">
      <div className="mb-12">
        <h1 className="text-3xl font-roboto text-black mb-4 font-normal leading-normal">
          {t("Comfort Rooted in Nature")}
        </h1>
        <p className="text-black max-w-4xl font-roboto text-sm font-normal leading-5">
          {t("Experience refined comfort")}
        </p>
      </div>

      <div className="flex items-center justify-between mb-8">
        <div className="flex gap-4">
          {tabOptions.map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? 'default' : 'ghost'}
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full px-6 ${activeTab === tab.id
                ? 'bg-primary hover:bg-primary text-white'
                : 'text-gray-600 hover:text-gray-900 border border-[#DBDBDB]'
                }`}
            >
              {tab.title}
            </Button>
          ))}
        </div>

        <Link
          href="/accommodation"
          className="text-gray-700 hover:text-gray-900 font-medium flex items-center justify-center gap-2.5 "
        >
          {t("See All")}
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>

      {activeTab === 'accommodation' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8">
          {accomdationsData.map((accommodation) => (
            <Card
              key={accommodation._id}
              className="overflow-hidden p-0 shadow-sm hover:shadow-lg transition-shadow duration-300 border-0"
            >
              <div className="w-full p-5 mb-0">
                <div className="w-full max-h-[300px] overflow-hidden rounded-2xl">
                  <Image
                    width={600}
                    height={300}
                    src={accommodation.thumbnail.url}
                    alt={accommodation.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <CardContent className="p-5 pt-3">
                <Link href={`/rooms/${accommodation._id}`}>
                  <div className="flex flex-col items-start gap-2.5 w-full">
                    <div className='flex h-8 justify-between items-center self-stretch'>
                      <h3 className="text-black font-roboto text-lg font-medium leading-normal">
                        {accommodation.title}
                      </h3>
                      <div className="flex items-start gap-1.5">
                        <div className="flex items-center gap-2">
                          {(() => {

                            const correspondingRoom = rooms.find(room =>
                              accommodation?.customFieldsMap?.rooms?.product === room._id
                            );

                            const price = correspondingRoom?.unitPrice || accommodation?.customFieldsMap?.rooms?.price;
                            // const discountPrice = accommodation?.customFieldsMap?.rooms?.discountPrice;

                            return (
                              <>
                                <span className="text-black font-roboto text-xl font-normal leading-none">
                                  ${price}
                                </span>
                                {/* {discountPrice && (
                                  <span className="text-black/60 font-dm-sans text-base font-normal leading-none line-through">
                                    ${discountPrice}
                                  </span>
                                )} */}
                              </>
                            );
                          })()}
                        </div>
                      </div>
                    </div>
                    <p className="text-black text-sm leading-relaxed font-dm-sans font-normal mb-6 overflow-hidden">
                      {accommodation.excerpt}
                    </p>
                  </div>

                  <div className="flex w-full items-center content-center gap-2.5 flex-wrap">
                    {(() => {
                      const information = accommodation?.customFieldsMap?.rooms?.information;


                      if (!information) return null;

                      const parsedInformation = typeof information === 'string'
                        ? parseInformationString(information)
                        : information;

                      const maxVisible = 6;
                      const visibleItems = parsedInformation.slice(0, maxVisible);
                      const remainingCount = parsedInformation.length - maxVisible;

                      return (
                        <>
                          {visibleItems.map((info: RoomInformation, index: number) => (
                            <div key={index} className="flex p-2.5 justify-center items-center gap-2.5 rounded-full border border-gray-300 backdrop-blur-md">
                              <div className="text-black flex-shrink-0">
                                {info.icon}
                              </div>
                              <span className="text-xs text-black font-medium truncate">
                                {info.label}
                              </span>
                            </div>
                          ))}
                          {remainingCount > 0 && (
                            <div className="flex p-2.5 justify-center items-center gap-2.5 rounded-full border border-gray-300 backdrop-blur-md">
                              <div className="text-black flex-shrink-0">
                                <Plus className="w-4 h-4" />
                              </div>
                              <span className="text-xs text-black font-medium">
                                {remainingCount}
                              </span>
                            </div>
                          )}
                        </>
                      );
                    })()}
                  </div>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {activeTab === 'lodgeStays' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8">
          {lodgeStays.map((lodge) => (
            <Card
              key={lodge.id}
              className="overflow-hidden p-0 shadow-sm hover:shadow-lg transition-shadow duration-300 border-0"
            >
              <div className="w-full p-5 mb-0">
                <div className="w-full max-h-[300px] overflow-hidden rounded-2xl">
                  <Image
                    width={600}
                    height={300}
                    src={lodge.image}
                    alt={lodge.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <CardContent className="p-5 pt-3">
                <div className="flex flex-col items-start gap-2.5 w-full">
                  <div className='flex h-8 justify-between items-center self-stretch'>
                    <h3 className="text-black font-roboto text-lg font-medium leading-normal">
                      {lodge.title}
                    </h3>
                    <div className="flex items-start gap-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-black font-roboto text-xl font-normal leading-none">
                          ${lodge.price}
                        </span>
                        {lodge.originalPrice && (
                          <span className="text-black/60 font-dm-sans text-base font-normal leading-none line-through">
                            ${lodge.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <p className="text-black text-sm leading-relaxed font-dm-sans font-normal mb-6 overflow-hidden">
                    {lodge.description}
                  </p>
                </div>

                <div className="flex w-full items-center content-center gap-2.5 flex-wrap">
                  {(() => {
                    const maxVisible = 2;
                    const visibleItems = lodge.amenities.slice(0, maxVisible);
                    const remainingCount = lodge.amenities.length - maxVisible;

                    return (
                      <>
                        {visibleItems.map((amenity, index) => (
                          <div key={index} className="flex p-2.5 justify-center items-center gap-2.5 rounded-full border border-gray-300 backdrop-blur-md">
                            <div className="text-black flex-shrink-0">
                              {amenity.icon}
                            </div>
                            <span className="text-xs text-black font-medium truncate">
                              {amenity.label}
                            </span>
                          </div>
                        ))}
                        {remainingCount > 0 && (
                          <div className="flex p-2.5 justify-center items-center gap-2.5 rounded-full border border-gray-300 backdrop-blur-md">
                            <div className="text-black flex-shrink-0">
                              <Plus className="w-4 h-4" />
                            </div>
                            <span className="text-xs text-black font-medium truncate">
                              {remainingCount}
                            </span>
                          </div>
                        )}
                      </>
                    );
                  })()}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </section>
  );
}