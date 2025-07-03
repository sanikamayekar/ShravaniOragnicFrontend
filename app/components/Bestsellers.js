"use client";
import Image from "next/image";

// Your images
import riceImage from "../../public/images/bestsellers/traditional-rice.jpg";
import teaImage from "../../public/images/bestsellers/herbal-teas.jpg";
import oilImage from "../../public/images/bestsellers/cold-pressed-oils.jpg";

export default function Bestsellers() {
  return (
    <section className="bg-[#f5f5f5] py-16 md:py-20 px-4 md:px-10 lg:px-20">
      <div className="text-center">
        <h2 className="text-4xl font-playfair text-[#21613F] mb-2">
          Explore Our Bestsellers
        </h2>
        <p className="text-lg text-[#21613F] mb-8">
          Authentic, Organic and full of Goodness
        </p>
        <p className="text-sm text-gray-700 mb-16">
          Discover the purity of our most loved items. Each product is carefully
          crafted from nature's best ingredients to nourish your body, mind, and soul.
        </p>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-lg text-center border border-gray-200">
          <Image
            src={riceImage}
            alt="Traditional Rice Varieties"
            width={400}
            height={300}
            className="object-cover w-full h-[250px] mb-4"
          />
          <h3 className="text-xl font-semibold text-[#333333] mb-2">Traditional Rice Varieties</h3>
          <p className="text-sm text-gray-600 mb-4">
            Heirloom grains, cultivated organically for richer taste & nutrition.
          </p>
          <p className="text-xs text-gray-500 mb-6">
            CHEMICAL-FREE • GLUTEN-FREE • ENERGY BOOSTING
          </p>
          <p className="text-xl text-[#21613F] font-bold mb-6">From ₹120</p>
          <button className="bg-[#57951BF7] text-white py-3 px-10 rounded-md text-lg font-playfair">
            Shop Now
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-lg text-center border border-gray-200">
          <Image
            src={teaImage}
            alt="Herbal Teas & Filter Coffee"
            width={400}
            height={300}
            className="object-cover w-full h-[250px] mb-4"
          />
          <h3 className="text-xl font-semibold text-[#333333] mb-2">Herbal Teas & Filter Coffee</h3>
          <p className="text-sm text-gray-600 mb-4">
            Energize your day with our hand-blended teas and robust coffees.
          </p>
          <p className="text-xs text-gray-500 mb-6">
            CAFFEINE BALANCE AYURVEDIC HERBS - FARM FRESH
          </p>
          <p className="text-xl text-[#21613F] font-bold mb-6">From ₹150</p>
          <button className="bg-[#57951BF7] text-white py-3 px-10 rounded-md text-lg font-playfair">
            Shop Now
          </button>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-lg text-center border border-gray-200">
          <Image
            src={oilImage}
            alt="Cold-Pressed Oils & Natural Essences"
            width={400}
            height={300}
            className="object-cover w-full h-[250px] mb-4"
          />
          <h3 className="text-xl font-semibold text-[#333333] mb-2">
            Cold-Pressed Oils & Natural Essences
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Extracted using traditional methods to preserve flavor and nutrients.
          </p>
          <p className="text-xs text-gray-500 mb-6">
            ZERO ADDITIVES • IDEAL FOR COOKING & SKIN
          </p>
          <p className="text-xl text-[#21613F] font-bold mb-6">From ₹250</p>
          <button className="bg-[#57951BF7] text-white py-3 px-10 rounded-md text-lg font-playfair">
            View Product
          </button>
        </div>
      </div>
    </section>
  );
}


