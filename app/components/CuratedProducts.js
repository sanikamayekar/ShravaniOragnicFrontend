import React from "react";

const CuratedProducts = () => {
  return (
    <div className="bg-[#f5f5f5] py-12 px-4 md:px-10 lg:px-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Curated Products */}
          <div className="bg-white shadow-md rounded-lg p-6 flex items-center text-center border-b border-gray-200">
            <img
              src="/images/icons/curated-products-icon.png"
              alt="Curated Products"
              className="w-12 h-12 mb-4 mx-auto" // Adjusted icon size and centered
            />
            <div>
              <h3 className="text-xl font-semibold text-[#333333] mb-2">Curated Products</h3>
              <p className="text-sm text-gray-600">Provide Curated Products for all products over $100</p>
            </div>
          </div>

          {/* Handmade */}
          <div className="bg-white shadow-md rounded-lg p-6 flex items-center text-center border-b border-gray-200">
            <img
              src="/images/icons/handmade-icon.png"
              alt="Handmade"
              className="w-12 h-12 mb-4 mx-auto" // Adjusted icon size and centered
            />
            <div>
              <h3 className="text-xl font-semibold text-[#333333] mb-2">Handmade</h3>
              <p className="text-sm text-gray-600">We ensure the product quality that is our main goal</p>
            </div>
          </div>

          {/* Natural Food */}
          <div className="bg-white shadow-md rounded-lg p-6 flex items-center text-center border-b border-gray-200">
            <img
              src="/images/icons/natural-food-icon.png"
              alt="Natural Food"
              className="w-12 h-12 mb-4 mx-auto" // Adjusted icon size and centered
            />
            <div>
              <h3 className="text-xl font-semibold text-[#333333] mb-2">Natural Food</h3>
              <p className="text-sm text-gray-600">Return product within 3 days for any product you buy</p>
            </div>
          </div>

          {/* Free Home Delivery */}
          <div className="bg-white shadow-md rounded-lg p-6 flex items-center text-center border-b border-gray-200">
            <img
              src="/images/icons/free-delivery-icon.png"
              alt="Free Delivery"
              className="w-12 h-12 mb-4 mx-auto" // Adjusted icon size and centered
            />
            <div>
              <h3 className="text-xl font-semibold text-[#333333] mb-2">Free Home Delivery</h3>
              <p className="text-sm text-gray-600">We ensure the product quality that you can trust easily</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CuratedProducts;
