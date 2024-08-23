"use client";
import React, { useState } from "react";
import Image from "next/image";
import Image1 from "../../Images/FarmToTable.jpg";
import Image2 from "../../Images/IntoTheWood.jpg";
import Image3 from "../../Images/HritageTour.jpg";
import Image4 from "../../Images/templeView.jpg";
import Image5 from "../../Images/foodie-delight.jpg";
import Image6 from "../../Images/valsad-jaunt.jpg";

// Utility function to add <br/> every 5 words
const addLineBreaks = (text: any) => {
  const words = text.split(" ");
  return words.map((word: string, index: any) => (
    <>
      {word} {(index + 1) % 5 === 0 && <br />}
    </>
  ));
};

// Define the image data with text
const images = [
  {
    src: Image1,
    title: "Farm to Table",
    description: `Loram Maintenance of Way, Inc. is a railroad maintenance equipment and services provider. Loram provides track maintenance services to freight, passenger, and transit railroads worldwide, as well as sells and leases equipment which performs these functions.`,
  },
  {
    src: Image2,
    title: "Into the Woods",
    description: `Loram Maintenance of Way, Inc. is a railroad maintenance equipment and services provider. Loram provides track maintenance services to freight, passenger, and transit railroads worldwide, as well as sells and leases equipment which performs these functions.`,
  },
  {
    src: Image3,
    title: "Heritage Tour",
    description: `Loram Maintenance of Way, Inc. is a railroad maintenance equipment and services provider. Loram provides track maintenance services to freight, passenger, and transit railroads worldwide, as well as sells and leases equipment which performs these functions.`,
  },
  {
    src: Image4,
    title: "Soul of Valsad",
    description: `Loram Maintenance of Way, Inc. is a railroad maintenance equipment and services provider. Loram provides track maintenance services to freight, passenger, and transit railroads worldwide, as well as sells and leases equipment which performs these functions.`,
  },
  {
    src: Image5,
    title: "Foodie Delight",
    description: `Loram Maintenance of Way, Inc. is a railroad maintenance equipment and services provider. Loram provides track maintenance services to freight, passenger, and transit railroads worldwide, as well as sells and leases equipment which performs these functions.`,
  },
  {
    src: Image6,
    title: "Valsad Jaunt",
    description: `Loram Maintenance of Way, Inc. is a railroad maintenance equipment and services provider. Loram provides track maintenance services to freight, passenger, and transit railroads worldwide, as well as sells and leases equipment which performs these functions.`,
  },
];

export default function Attraction() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMoreIndex, setShowMoreIndex] = useState(null);

  const handleDotClick = (index: any) => {
    setCurrentIndex(index);
  };

  const handleReadMoreClick = (index: any) => {
    setShowMoreIndex(index === showMoreIndex ? null : index);
  };

  return (
    <div>
      <div className="text-center">
        <h1 className="text-[32px] text-[#7b9140] font-semibold pt-10 uppercase">
          Attractions
        </h1>
        <p className="text-[14px] py-8 text-[#595959]">
          A quaint and charming town tucked away in South Gujarat, Valsad offers
          a wholesome staying <br /> experience, letting you savour life in a
          serene and green environment. Our tours are thoughtfully tailor-made{" "}
          <br />
          to give you a glimpse of life at Valsad.
        </p>
      </div>

      {/* Image Slider */}
      <div className="flex flex-col justify-center items-center">
        {/* Display 3 images initially */}
        <div className="flex space-x-4">
          {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={image.src}
                alt={`Attraction Image ${index}`}
                className="rounded-lg w-[300px] h-[200px]"
                width={300}
                height={200}
              />
              {/* Text Below Each Image */}
              <h3 className="text-xl font-semibold text-[#707070] mt-4">
                {image.title}
              </h3>
              <p className="text-sm text-[#595959] mt-2 text-center">
                {/* Show 30 words initially, add <br/> after every 5 words */}
                {showMoreIndex === index
                  ? addLineBreaks(image.description)
                  : addLineBreaks(
                      image.description.split(" ").slice(0, 12).join(" ")
                    )}
                {/* Read More Button */}
                {image.description.split(" ").length > 8 && (
                  <button
                    className="text-[#7b9140] mt-2 underline"
                    onClick={() => handleReadMoreClick(index)}
                  >
                    {showMoreIndex === index ? "Read Less" : "Read More"}
                  </button>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="mt-6 flex justify-center space-x-3">
        {[0, 1, 2, 3].map((dotIndex) => (
          <div
            key={dotIndex}
            className={`w-6 h-6 rounded-full border-2 border-[#7b9140] flex items-center justify-center cursor-pointer transition-all duration-300 ${
              currentIndex === dotIndex ? "bg-[#7b9140]" : "bg-transparent"
            }`}
            onClick={() => handleDotClick(dotIndex)}
          >
            <div
              className={`w-3 h-3 rounded-full ${
                currentIndex === dotIndex ? "bg-white" : "bg-[#7b9140]"
              }`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}
