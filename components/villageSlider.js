"use client"; // Menandai komponen ini sebagai Client Component

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./villageSlider.css"; // Mengimpor custom CSS

const VillageSlider = () => {
  // Pengaturan slider
  const settings = {
    dots: true,
    arrows: false, // Menyembunyikan panah untuk tampilan yang lebih bersih
    infinite: true,
    speed: 500,
    // fade: true, // Menghapus efek fade untuk menggunakan transisi slide
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slide-item">
          <Image
            src="/assets/desa1.png"
            alt="Village Image 1"
            width={600}
            height={400}
            className="rounded-[20px] mx-auto"
          />
        </div>
        <div className="slide-item">
          <Image
            src="/assets/desa5.png"
            alt="Village Image 2"
            width={600}
            height={400}
            className="rounded-[20px] mx-auto"
          />
        </div>
        <div className="slide-item">
          <Image
            src="/assets/desa6.png"
            alt="Village Image 3"
            width={600}
            height={400}
            className="rounded-[20px] mx-auto"
          />
        </div>
      </Slider>
    </div>
  );
};

export default VillageSlider;
