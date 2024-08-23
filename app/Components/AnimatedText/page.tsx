"use client";
import React, { useEffect, useRef, useState } from "react";
import GreenIcon from "../../Images/greenIcon.png";
import Image from "next/image"; // Import the Image component from Next.js
import "./AnimatedText.css";

const AnimatedText: React.FC = () => {
  const textRef = useRef<HTMLHeadingElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-center py-10">
      <Image
        src={GreenIcon}
        alt="green"
        className="w-[100px] h-[90px] text-center"
      />

      <h3
        ref={textRef}
        className={`text-4xl bg-clip-text text-transparent bg-gradient-to-r from-black to-[#8ddd41] bg-[length:200%] bg-[left] transition-all duration-[6s] ease-linear ${
          isVisible ? "animate-fill-text" : "animate-reset-text"
        }`} // Use different animation based on visibility
      >
        Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit. Esse,
        dolor? Ipsum iure <br /> praesentium vel! Assumenda, illum e.
      </h3>

      <Image
        src={GreenIcon}
        alt="green"
        className="w-[100px] h-[90px] text-center"
      />
    </div>
  );
};

export default AnimatedText;
