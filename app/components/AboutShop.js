"use client";
import Image from "next/image";

/**
 * AboutShop Section – As per final design request
 * ✅ First image taller
 * ✅ Second image aligned to bottom with black L-corner at top-right only with spacing
 */

import farmersMarket from "../../public/images/about/farmers-market.jpg";
import peanutsBowls from "../../public/images/about/peanuts-bowls.jpg";

export default function AboutShop() {
  return (
    <section className="bg-[#f3f4f6] py-16 md:py-20 px-4 md:px-10 lg:px-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Images */}
        <div className="relative flex justify-center items-end gap-6 pt-4">
          {/* First image – Taller */}
          <div className="w-64 sm:w-72 md:w-80 lg:w-96 h-[480px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={farmersMarket}
              alt="Woman selecting fresh organic kale at farmers market"
              placeholder="blur"
              className="object-cover h-full w-full"
              priority
            />
          </div>

          {/* Second image – Aligned to bottom with top-right L-corner */}
          <div className="relative w-64 sm:w-72 md:w-80 lg:w-96 h-[400px] self-end">
            {/* Decorative L-frame – top-right only with spacing */}
            <span className="absolute -top-4 -right-4 h-[10px] w-[200px] bg-black z-10" />
            <span className="absolute -top-4 -right-4 h-[200px] w-[10px] bg-black z-10" />
            <div className="relative rounded-lg overflow-hidden shadow-xl h-full">
              <Image
                src={peanutsBowls}
                alt="Assorted organic nuts displayed in rustic bowls"
                placeholder="blur"
                className="object-cover h-full w-full"
              />
            </div>
          </div>
        </div>

        {/* Right: Text */}
        <div className="text-center md:text-left max-w-xl mx-auto md:mx-0 px-2">
          <p className="text-[15px] font-medium tracking-wide text-gray-700 mb-2 lg:mb-4">
            Know More About Shop
          </p>
          <h2 className="text-[34px] sm:text-[38px] lg:text-[42px] font-bold text-green-900 leading-snug mb-6">
            Trusted <br className="block md:hidden" />
            <span className="whitespace-nowrap">Organic Food Store</span>
          </h2>
          <p className="text-gray-800 text-[16px] lg:text-[17px] leading-relaxed">
            At <span className="font-semibold">Shravani</span>, we believe that healthy
            living begins with pure and natural food. Founded with a passion to
            deliver authentic, chemical-free products to every household, we bring
            you a thoughtfully curated range of 100% organic and natural food items — 
            available through both our online store and retail outlets.
          </p>
        </div>
      </div>
    </section>
  );
}
