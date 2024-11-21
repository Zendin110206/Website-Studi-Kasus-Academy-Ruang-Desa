// components/villageSlider.js
"use client"; // Marking this component as a Client Component

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const VillageSlider = () => {
  // Slider settings
  const settings = {
    dots: true,
    arrows: false, // Hide arrows for a cleaner look
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      <div>
        <Image
          src="/assets/village1.png"
          alt="Village Image 1"
          width={600}
          height={400}
          className="rounded-[20px] mx-auto"
        />
      </div>
      <div>
        <Image
          src="/assets/village2.png"
          alt="Village Image 2"
          width={600}
          height={400}
          className="rounded-[20px] mx-auto"
        />
      </div>
      <div>
        <Image
          src="/assets/village3.png"
          alt="Village Image 3"
          width={600}
          height={400}
          className="rounded-[20px] mx-auto"
        />
      </div>
    </Slider>
  );
};

export default VillageSlider;
