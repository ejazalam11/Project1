import React from "react";
import Image from "next/image"; // Import the Image component from Next.js
import HomeSection from "../Images/HomeSection.jpg";
import ScrollArrow from "../Components/ScrollArrow/page";
import GreenIcon from "../Images/greenIcon.png";
import AnimatedText from "../Components/AnimatedText/page";
import VideoIntro from "../Components/VideoIntro/page";
import LimitedVillas from "../Components/LimitedVillas/page";
import ClubHouse from "../Components/ClubHouse/page";
import Attraction from "../Components/Attraction/page";
import Testimonials from "../Components/Testimonials/page";
export function HeroSection() {
  return (
    <div>
      <Image
        src={HomeSection}
        alt="Actual site image"
        className="w-[100%] h-[100vh]"
      />

      <div className="relative">
        <h1 className="text-white font-semibold text-5xl absolute top-[-90px] left-[30%] ">
          Gateway to Fine Living
        </h1>
      </div>
      <div className="absolute left-[650px] top-[180px]">
        <ScrollArrow />
      </div>

      <div>
        <AnimatedText />
      </div>

      <div>
        <VideoIntro />
      </div>
      <div>
        <LimitedVillas />
      </div>
      <div>
        <ClubHouse />
      </div>
      <div>
        <Attraction />
      </div>
      <div>
        <Testimonials />
      </div>
    </div>
  );
}

export default HeroSection;
