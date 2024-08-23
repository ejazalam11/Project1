"use client";
import React, { useState } from "react";
import ImageVideo from "../../Images/ForVideo.jpg"; // Local image
import Image from "next/image";
import "./VideoIntro.css"; // Import custom CSS for animations

export default function VideoIntro() {
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const handlePlayClick = () => {
    setIsVideoVisible(true);
  };

  return (
    <div className="relative flex justify-center items-center py-10">
      {!isVideoVisible ? (
        <div className="relative cursor-pointer" onClick={handlePlayClick}>
          <Image
            src={ImageVideo}
            alt="Video Placeholder"
            // className="w-[80%] w-max-[80%]"
            width={1090}
            // layout="responsive"
          />
          <button className="custom-play-button absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            &#9654; {/* Play icon */}
          </button>
        </div>
      ) : (
        <iframe
          width="1060"
          height="515"
          src="https://www.youtube.com/embed/pPl3ZZdTP3g"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}
