"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Loogo from "../Images/logo.png";
import Image from "next/image";

const Navbar = () => {
  // State to manage background color
  const [bgWhite, setBgWhite] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgWhite(true); // Set background to white if scrolled more than 50px
      } else {
        setBgWhite(false); // Reset to transparent when scrolled to the top
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`flex justify-center fixed w-[100%] ${
          bgWhite ? "bg-white" : "bg-transparent"
        } transition-colors duration-300`}
      >
        <Link
          href="/Details"
          className={`mt-10  font-semibold ${
            bgWhite ? "text-black" : "text-yellow-100"
          }`}
        >
          Details
        </Link>
        <Link
          href="/Location"
          className={`mt-10 ml-10  font-semibold ${
            bgWhite ? "text-black" : "text-yellow-100"
          }`}
        >
          Location
        </Link>
        <Link href="/" className="ml-10">
          <Image src={Loogo} alt="Logo" className="w-[150px] h-[80px]" />
        </Link>
        <Link
          href="/Facilities"
          className={`mt-10 ml-10  font-semibold ${
            bgWhite ? "text-black" : "text-yellow-100"
          }`}
        >
          Facilities
        </Link>
      </div>

      <div className="flex w-full top-[100%] fixed">
        <div className="-rotate-90 absolute bottom-[440px] left-[90%]">
          <h2 className="text-white text-[14px] bg-amber-900 p-2 w-[170px] cursor-pointer">
            Clubhouse Enquiry
          </h2>
        </div>
        <div className="-rotate-90 absolute bottom-[220px] left-[89%]">
          <h2 className="text-white bg-amber-900 text-[14px] p-2 w-[195px] cursor-pointer">
            Book Your Dream Home
          </h2>
        </div>
        <div className="-rotate-90 absolute bottom-[40px] text-[14px] left-[93%] cursor-pointer">
          <h2 className="text-white bg-amber-900 p-2 w-[100px]">
            Villa rental
          </h2>
        </div>
      </div>

      {/* <div className="text-yellow-600">Helloo</div> */}
    </>
  );
};

export default Navbar;
