"use client";
import Image from "next/image";
import { useState } from "react";

const GREEN = "#5d8f2a";

const categories = [
  "Rice Varieties",
  "Millets & Groundnuts",
  "Spices & Chutneys",
  "Oils",
  "Honey Beverages",
];

const products = [
  {
    name: "Dal Chutney",
    price: 150,
    image: "/images/products/DalPowder.jpg",
    description: "Delicious blend of spices",
  },
  {
    name: "Til Chutney",
    price: 150,
    image: "/images/products/TilChutney.jpg",
    description: "Rich and aromatic til chutney",
  },
  {
    name: "Groundnut Chutney",
    price: 150,
    image: "/images/products/GroundnutChutney.jpg",
    description: "Crunchy and tasty chutney",
  },
  {
    name: "Coconut Powder",
    price: 150,
    image: "/images/products/CoconutPowder.jpg",
    description: "Pure and natural coconut powder",
  },
];

export default function ProductGrid() {
  const [quantities, setQuantities] = useState(products.map(() => 1));
  const [activeCategory, setActiveCategory] = useState("Spices & Chutneys");

  const updateQty = (index, delta) => {
    setQuantities((prev) =>
      prev.map((q, i) => (i === index ? Math.max(1, q + delta) : q))
    );
  };

  return (
    <section className="bg-white py-16 text-center">
      <div className="mx-6 md:mx-32">
        {/* Title & Subtitle */}
        <h2 className="text-5xl font-bold text-green-900 mb-4 font-playfair">
          OUR PRODUCTS
        </h2>
        <p className="text-gray-700 text-lg mb-12 font-roboto">
          Nurturing nature's goodness to enrich your everyday living.
        </p>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-lg font-medium text-lg ${
                cat === activeCategory
                  ? "bg-[#5d8f2a] text-white"
                  : "text-gray-700 hover:text-green-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product, i) => (
            <div
              key={product.name}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-300"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-lg text-gray-800 mt-1 mb-3">₹{product.price}</p>

                {/* Static Amount / Description */}
                <p className="text-base text-gray-600 text-sm mb-4">{product.description}</p>

                {/* Quantity Selector */}
                <div className="flex items-center mb-4 gap-4 border border-gray-300 rounded-lg w-max mx-auto">
                  <button
                    onClick={() => updateQty(i, -1)}
                    className="w-8 h-8 flex items-center justify-center text-lg text-gray-700 hover:bg-gray-200 rounded-l-lg"
                  >
                    −
                  </button>
                  <span className="px-4 w-12 text-center text-gray-800 font-semibold">{quantities[i]}</span>
                  <button
                    onClick={() => updateQty(i, 1)}
                    className="w-8 h-8 flex items-center justify-center text-lg text-gray-700 hover:bg-gray-200 rounded-r-lg"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart */}
                <button className="w-full bg-[#5d8f2a] text-white py-3 rounded-lg font-medium hover:bg-[#4b741e] transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
