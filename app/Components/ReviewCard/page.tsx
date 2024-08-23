import React from "react";
import Image from "next/image";
import { Card, CardHeader, CardDescription } from "@/components/ui/card";

interface ReviewCardProps {
  description: string;
  imageSrc: any;
  reviewer: string;
  rating: number; // Rating out of 5
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  description,
  imageSrc,
  reviewer,
  rating,
}) => {
  return (
    <Card className="w-[380px]">
      <CardHeader>
        <CardDescription className="text-[14px] font-semibold">
          {description}
        </CardDescription>

        <hr className="h-[2px] bg-green-600" />

        <div className="flex items-center">
          <Image
            src={imageSrc}
            alt="review"
            width={70}
            height={70}
            className="rounded-3xl mt-3"
          />
          <h3 className="text-green-700 ml-5">-{reviewer}</h3>

          {/* Rating stars */}
          <div className="ml-5 flex items-center">
            {[...Array(rating)].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-green-500"
              >
                <path
                  fillRule="evenodd"
                  d="M12 17.7l-6.2 3.8 1.2-7-5.2-5.1 7.2-1 3.2-6.5 3.2 6.5 7.2 1-5.2 5.1 1.2 7-6.2-3.8z"
                  clipRule="evenodd"
                />
              </svg>
            ))}
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default ReviewCard;
