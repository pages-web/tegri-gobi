import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

interface ReviewCardProps {
  name: string;
  role: string;
  avatar: string;
  rating: number;
  review: string;
}

export function ReviewCard({ name, role, avatar, rating, review }: ReviewCardProps) {

  return (
    <Card className="h-[240px] border border-[#DBDBDB] rounded-[20px]">
      <CardContent className="p-5">
        <div className="flex flex-col items-start gap-2.5 self-stretch">
          <div className="flex justify-between items-center self-stretch">

            <div className="flex items-center gap-2.5">
              <Avatar className="w-12 h-12">
                <AvatarImage src={avatar} alt={name} />
                <AvatarFallback className="bg-gray-200 text-gray-600">
                  {name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>

              <div className="flex flex-col items-start gap-0.5">
                <h3 className="text-black font-roboto text-base not-italic font-medium leading-normal self-stretch">
                  {name}
                </h3>
                <p className="text-black/70 font-roboto text-base not-italic font-normal leading-normal">
                  {role}
                </p>
              </div>
            </div>


            <div className="flex items-center gap-[3px]">
              <span className="text-primary text-center font-roboto text-sm not-italic font-medium leading-normal">
                {rating.toFixed(1)}
              </span>

              <Star className="w-[14px] h-[14px] fill-primary text-primary" />
            </div>
          </div>

          <div className="flex pt-2.5 justify-center items-center gap-2.5 self-stretch">
            <p className="text-black/70 font-roboto text-base not-italic font-normal leading-5">
              {review}
            </p>
          </div>
        </div>
      </CardContent >
    </Card >
  );
}