// frontend/components/UserProgramSection.js

"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const UserProgramSection = () => {
  const programs = [
    {
      title: "Bantuan Sosial",
      image: "/assets/users/bantuan sosial 1.png",
    },
    {
      title: "Hiking",
      image: "/assets/users/program hiking 1.png",
    },
    {
      title: "Vaksinasi",
      image: "/assets/users/vaksinasi 2.png",
    },
    // Add more programs as needed
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideCount = programs.length;
  const timeoutRef = useRef(null);

  // Variants for animation
  const variants = {
    enter: (direction) => ({
      opacity: 0,
      x: direction > 0 ? 300 : -300,
    }),
    center: {
      opacity: 1,
      x: 0,
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction < 0 ? 300 : -300,
    }),
  };

  // Function to reset the auto-slide timer
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  // Auto-slide effect
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slideCount);
    }, 3000);

    return () => {
      resetTimeout();
    };
  }, [currentSlide, slideCount]);

  // State to control animation direction
  const [direction, setDirection] = useState(1);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slideCount);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);
  };

  return (
    <section className="py-12" id="program">
      <div className="container mx-auto px-6 md:px-12">
        {/* Title */}
        <div className="text-center mb-8">
          <h3 className="text-4xl font-bold text-gray-800">Program</h3>
          <p className="text-lg text-gray-600">Cireundeu</p>
          <hr className="border-t-2 border-gray-800 mt-4 w-1/2 mx-auto" />
        </div>

        {/* Program Slider */}
        <div className="relative aspect-[16/9] max-w-4xl mx-auto">
          <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentSlide}
                className="absolute top-0 left-0 w-full h-full"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.5 },
                }}
                style={{ willChange: "transform, opacity" }}
              >
                {/* Image Component */}
                <Image
                  src={programs[currentSlide].image}
                  alt={programs[currentSlide].title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                  priority
                />
                <div className="bg-gray-800 bg-opacity-75 p-4 absolute bottom-0 w-full">
                  <h4 className="text-white text-xl font-bold">
                    {programs[currentSlide].title}
                  </h4>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition focus:outline-none"
            aria-label="Previous Slide"
          >
            &#10094;
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition focus:outline-none"
            aria-label="Next Slide"
          >
            &#10095;
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {programs.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentSlide ? 1 : -1);
                setCurrentSlide(index);
              }}
              className={`w-3 h-3 rounded-full focus:outline-none ${
                index === currentSlide ? "bg-blue-600" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserProgramSection;
