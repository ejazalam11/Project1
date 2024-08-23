"use client";
import React, { useState } from "react";
import CardReview from "../../Components/ReviewCard/page";
import Reviwer1 from "../../Images/Review.jpg";
import Image from "next/image";
import ReviewVideo from "../../Images/ReviewVideo.jpg";
import Review2 from "../../Images/Review2.jpg";
import "./Style.css"; // Import custom CSS for blinking animation

export default function Testimonials() {
  const reviews = [
    <CardReview
      key={1}
      description="My experience at Mangalyam Meadows has been fantastic."
      reviewer="-Sana Chosi"
      imageSrc={Reviwer1}
      rating={4}
    />,
    <CardReview
      key={2}
      description="Thanks to the tranquility & peace in this project, it refreshes and rejuvenates us on every family weekend trip."
      reviewer="-Ram Mishra"
      imageSrc={Review2}
      rating={4}
    />,
    <CardReview
      key={3}
      description="While others overpromised and underdelivered, DGIP underpromised and overdelivered us at Mangalyam Meadows."
      reviewer="-Pooja"
      imageSrc={Reviwer1}
      rating={5}
    />,
    <CardReview
      key={4}
      description="Every issue that we have is solved over a WhatsApp message."
      reviewer="-Prakash & Sonia"
      imageSrc={ReviewVideo}
      rating={5}
    />,
    <CardReview
      key={5}
      description="My experience at Mangalyam Meadows has been fantastic."
      reviewer="Hadia"
      imageSrc={Reviwer1}
      rating={4}
    />,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  return (
    <div className="h-[100vh] mt-10">
      {/* Flex container to align testimonials and video side by side */}
      <div className="flex justify-evenly items-start ">
        {/* Testimonials Section */}
        <div className="flex-1">
          <div className="text-center">
            <h1 className="text-[32px] text-[#7b9140] font-semibold pt-10 uppercase">
              Testimonials
            </h1>
            <p className="text-[14px] py-8 text-[#595959]">
              At Mangalyam Meadows, we commit to offering luxury to our clients.
              <br />
              Don't just take it from us; let our customers do all the talking.
            </p>
          </div>

          {/* Review Slider */}
          <div className="flex justify-center">
            <div className="w-full flex justify-center">
              {reviews[currentIndex]}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="mt-6 flex justify-center space-x-3">
            {reviews.map((_, index) => (
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
        </div>

        {/* Video Section */}
        <div className="flex-1 flex justify-start relative right-10">
          {!isVideoLoaded ? (
            <div className="relative cursor-pointer" onClick={handleVideoLoad}>
              <Image
                src={ReviewVideo} // Placeholder image before video loads
                alt="Placeholder"
                width={600}
                height={300}
                className="rounded-lg mt-9 z-10 "
              />
              {/* Blinking Play Button */}
              <button className="custom-play-button absolute left-[340px] top-[-190px] transform -translate-x-1/2 -translate-y-1/2">
                &#9654;
              </button>
            </div>
          ) : (
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/SX1viFZ5afU"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </div>
  );
}
