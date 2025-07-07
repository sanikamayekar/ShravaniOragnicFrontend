"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

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
  const [isPaused, setIsPaused] = useState(false);
  const [api, setApi] = useState();

  // Auto-advance every 5s (with pause on hover)
  useEffect(() => {
    if (isPaused || !api) return;
    
    const interval = setInterval(() => {
      const nextIndex = (current + 1) % slides.length;
      setCurrent(nextIndex);
      api.scrollTo(nextIndex, false);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isPaused, current, api]);

  // Listen to shadcn carousel changes (only for manual interactions)
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      const selected = api.selectedScrollSnap();
      if (selected !== current) {
        setCurrent(selected);
      }
    };

    api.on("select", onSelect);
    return () => api.off("select", onSelect);
  }, [api, current]);

  // Handlers for arrows 
  const prevSlide = () => {
    const newIndex = (current - 1 + slides.length) % slides.length;
    setCurrent(newIndex);
    if (api) api.scrollTo(newIndex, false);
  };
  
  const nextSlide = () => {
    const newIndex = (current + 1) % slides.length;
    setCurrent(newIndex);
    if (api) api.scrollTo(newIndex, false);
  };

  // Handle dot clicks
  const goToSlide = (index) => {
    setCurrent(index);
    if (api) api.scrollTo(index, false);
  };

  return (
    <div 
      className="relative w-full h-screen overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Carousel 
        setApi={setApi}
        className="w-full h-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="h-screen -ml-0">
          {slides.map((slide, index) => (
            <CarouselItem key={slide.id} className="pl-0 h-screen min-w-full">
              <div className="relative h-full w-full">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority
                  className="object-cover"
                />
                <AnimatePresence mode="wait">
                  {index === current && (
                    <motion.div
                      key={slide.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black/40"
                    >
                      <div className="mx-6 md:mx-32 px-4">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-playfair font-bold text-white mb-6 drop-shadow-lg leading-tight max-w-6xl">
                          {slide.title}
                        </h1>
                        {slide.subtitle && (
                          <p className="text-lg sm:text-xl md:text-2xl text-white mb-6 drop-shadow-lg max-w-2xl font-semibold">
                            {slide.subtitle}
                          </p>
                        )}
                        <a 
                          href={slide.buttonLink}
                          className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded shadow-lg text-base md:text-lg transition-all duration-200 hover:scale-105"
                        >
                          {slide.buttonText}
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <button
          className="absolute top-1/2 left-4 md:left-8 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm text-gray-800 p-4 rounded-lg shadow-lg hover:bg-white hover:shadow-xl z-20 transition-all duration-300 hover:scale-110 border border-gray-200"
          onClick={prevSlide}
          aria-label="Previous Slide"
        >
          <FaChevronLeft size={18} />
        </button>

        <button
          className="absolute top-1/2 right-4 md:right-8 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm text-gray-800 p-4 rounded-lg shadow-lg hover:bg-white hover:shadow-xl z-20 transition-all duration-300 hover:scale-110 border border-gray-200"
          onClick={nextSlide}
          aria-label="Next Slide"
        >
          <FaChevronRight size={18} />
        </button>

        {/* Custom Dots */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                idx === current ? "bg-white scale-125" : "bg-gray-400 hover:bg-gray-300"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
}