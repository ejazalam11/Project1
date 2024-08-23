import React from "react";
import Image from "next/image";

import ClubBanner from "../../Images/club-banner.jpg";
export default function ClubHouse() {
  return (
    <div className="h-[130vh]">
      <div className="text-center">
        <h1 className="text-[32px] text-[#7b9140] font-semibold pt-10 uppercase">
          Clubhouse
        </h1>
        <p className="text-[14px] py-8 text-[#595959]">
          Inspired by architecture from around the world, the clubhouse has been
          built with <br /> thoughtful detail to design to give our valued
          luxury residents a world-class
          <br /> experience.
        </p>
      </div>

      <div>
        <Image src={ClubBanner} alt="banner" />
      </div>
    </div>
  );
}
