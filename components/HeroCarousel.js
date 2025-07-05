"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Static slides data
const slides = [
  { 
    id: 1, 
    src: "/hero1.jpg", 
    alt: "Fresh Farm Products",
    title: (
      <>
        FRESH FROM <br /> FARM TO TABLE
      </>
    ),
    subtitle: "Discover premium quality organic products",
    buttonText: "SHOP NOW",
    buttonLink: "#"
  },
  { 
    id: 2, 
    src: "/hero2.jpg", 
    alt: "Organic Vegetables",
    title: "ORGANIC & NATURAL",
    subtitle: "100% pesticide-free vegetables",
    buttonText: "EXPLORE",
    buttonLink: "#"
  },
  { 
    id: 3, 
    src: "/hero3.jpg", 
    alt: "Fresh Fruits",
    title: "SEASONAL FRUITS",
    subtitle: "Handpicked fresh from our farms",
    buttonText: "ORDER NOW",
    buttonLink: "#"
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  // Auto-advance every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Handlers for arrows
  const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrent((current + 1) % slides.length);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].src}
            alt={slides[current].alt}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black/40">
            <div className="mx-6 md:mx-32 px-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-playfair font-bold text-white mb-6 drop-shadow-lg leading-tight max-w-6xl">
                {slides[current].title}
              </h1>
              {slides[current].subtitle && (
                <p className="text-lg sm:text-xl md:text-2xl text-white mb-6 drop-shadow-lg max-w-2xl font-semibold">
                  {slides[current].subtitle}
                </p>
              )}
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded shadow-lg text-base md:text-lg transition-all duration-200 hover:scale-105">
                {slides[current].buttonText}
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Left Arrow */}
      <button
        className="absolute top-1/2 left-4 md:left-6 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 z-10 transition-all duration-200 hover:scale-110"
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        <FaChevronLeft size={20} />
      </button>

      {/* Right Arrow */}
      <button
        className="absolute top-1/2 right-4 md:right-6 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 z-10 transition-all duration-200 hover:scale-110"
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        <FaChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              idx === current ? "bg-white scale-125" : "bg-gray-400 hover:bg-gray-300"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}