"use client";
import React, { useState } from "react";
import Image from "next/image";
import ImageSlider1 from "../../Images/ImageSlider1.jpg";
import ImageSlider2 from "../../Images/ImageSlider2.jpg";
import ImageSlider3 from "../../Images/ImageSlider3.jpg";
import Fernvilla from "../../Components/Fernvilla/page";
const images = [ImageSlider1, ImageSlider2, ImageSlider3];

export default function LimitedVillas() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index: any) => {
    setCurrentIndex(index);
  };

  return (
    <div className="bg-yellow-50 h-[130vh] ">
      <div className="text-center">
        <h1 className="text-[32px] text-[#7b9140] font-semibold pt-10 uppercase">
          Our Limited Edition Villas
        </h1>
        <p className="text-[14px] py-8 text-[#595959]">
          At the core of Mangalyam Meadows lies the promise of exploring luxury
          and <br /> nature at its best. Introducing limited edition villas that
          are designed to enlighten <br /> the spirit and nurture the mind and
          body.
        </p>
      </div>

      {/* Image Slider */}
      <div className="flex flex-col justify-center items-center">
        <Image
          src={images[currentIndex]}
          alt="Villa Image"
          className=" rounded-lg w-[950px] h-[400px]"
          // src={images[currentIndex]}
          // alt="Villa Image"
          // layout="responsive" // Responsive image behavior
          // width={500} // Image width
          // height={100} // Ima ge height
          // className="rounded-lg"
        />
      </div>

      {/* Dots Navigation Outside the Image */}
      <div className="mt-6 flex justify-center space-x-3">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-6 h-6 rounded-full border-2 border-[#7b9140] flex items-center justify-center cursor-pointer transition-all duration-300 ${
              currentIndex === index ? "bg-[#7b9140]" : "bg-transparent"
            }`}
            onClick={() => handleDotClick(index)}
          >
            <div
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-white" : "bg-[#7b9140]"
              }`}
            ></div>
          </div>
        ))}
      </div>
      <Fernvilla />
    </div>
  );
}
