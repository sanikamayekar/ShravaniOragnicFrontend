// "use client";
// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const slides = [
//   { id: 1, src: "/hero1.jpg", alt: "Slide 1" },
//   { id: 2, src: "/hero2.jpg", alt: "Slide 2" },
//   { id: 3, src: "/hero3.jpg", alt: "Slide 3" },
// ];

// export default function HeroCarousel() {
//   const [current, setCurrent] = useState(0);

//   // Auto-advance every 5s
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   // Handlers for arrows
//   const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);
//   const nextSlide = () => setCurrent((current + 1) % slides.length);

//   return (
//     <div className="relative w-full h-[85vh] overflow-hidden py-6 px-4 md:px-10 lg:px-20">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={slides[current].id}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="absolute inset-0"
//         >
//           <Image
//             src={slides[current].src}
//             alt={slides[current].alt}
//             fill
//             priority
//             className="object-cover"
//           />
//           <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black/40">
//             <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-6 drop-shadow-lg font-
// Playfair Display">
//               FRESH FROM <br /> FARM TO TABLE
//             </h1>
//             <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded shadow">
//               SHOP NOW
//             </button>
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       {/* Left Arrow */}
//       <button
//         className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 z-10"
//         onClick={prevSlide}
//         aria-label="Previous Slide"
//       >
//         <FaChevronLeft size={20} />
//       </button>

//       {/* Right Arrow */}
//       <button
//         className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 z-10"
//         onClick={nextSlide}
//         aria-label="Next Slide"
//       >
//         <FaChevronRight size={20} />
//       </button>

//       {/* Dots */}
//       <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
//         {slides.map((_, idx) => (
//           <button
//             key={idx}
//             onClick={() => setCurrent(idx)}
//             className={`w-3 h-3 rounded-full ${
//               idx === current ? "bg-white" : "bg-gray-400"
//             }`}
//             aria-label={`Go to slide ${idx + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  { id: 1, src: "/hero1.jpg", alt: "Slide 1" },
  { id: 2, src: "/hero2.jpg", alt: "Slide 2" },
  { id: 3, src: "/hero3.jpg", alt: "Slide 3" },
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
    <div className="relative w-full h-[85vh] overflow-hidden py-6 px-4 md:px-10 lg:px-20">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
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
            <h1 className="text-4xl sm:text-6xl font-playfair text-white mb-6 drop-shadow-lg">
              FRESH FROM <br /> FARM TO TABLE
            </h1>
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded shadow">
              SHOP NOW
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Left Arrow */}
      <button
        className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 z-10"
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        <FaChevronLeft size={20} />
      </button>

      {/* Right Arrow */}
      <button
        className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 z-10"
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        <FaChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${
              idx === current ? "bg-white" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
