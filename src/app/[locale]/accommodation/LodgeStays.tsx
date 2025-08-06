import React from 'react'
import {
  Users,
  Bed,
  Eye,
  Wind,
  Zap,
  Wifi,
  Bath,
  TreePine,
  Plus
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Amenity {
  icon: React.ReactNode;
  label: string;
}

interface LodgeStays {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  amenities: Amenity[];
}

const lodgeStays: LodgeStays[] = [
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


const LodgeStays = () => {
  return (
    <div className='flex flex-col items-start gap-10 self-stretch'>
      <div className='flex items-center gap-2.5 self-stretch'>
        <div className='flex flex-col items-start gap-3'>
          <h2 className='text-black font-roboto text-3xl font-normal leading-normal'>
            Lodge Stays
          </h2>
          <p className='text black font-roboto text-[14px] font-normal leading-5 w-5xl'>
            Experience refined comfort and grounded simplicity in our Gobi-inspired lodges — where every stay connects you to nature, stillness, and yourself. Let the vastness of the Gobi surround you in curated comfort, designed to restore and reconnect.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8">
        {lodgeStays.map((lodge) => (
          <Card
            key={lodge.id}
            className="overflow-hidden p-0 shadow-sm hover:shadow-lg transition-shadow duration-300 border-0"
          >
            <div className="w-full p-5 mb-0">
              <div className="w-full max-h-[300px] overflow-hidden rounded-2xl">
                <img
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
                {lodge.amenities.map((amenity, index) => (
                  <div key={index} className="flex p-2.5 justify-center items-center gap-2.5 rounded-full border border-gray-300 backdrop-blur-md">
                    <div className="text-black flex-shrink-0">
                      {amenity.icon}
                    </div>
                    <span className="text-xs text-black font-medium truncate">
                      {amenity.label}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default LodgeStays