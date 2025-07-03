
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Playfair_Display } from "next/font/google";
import farmersMarket from "../../public/images/about/farmers-market.jpg";
import peanutsBowls from "../../public/images/about/peanuts-bowls.jpg";

// Hero Carousel Component
// Hero Carousel Component
const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const slides = [
    { id: 1, src: "/hero1.jpg", alt: "Slide 1" },
    { id: 2, src: "/hero2.jpg", alt: "Slide 2" },
    { id: 3, src: "/hero3.jpg", alt: "Slide 3" },
  ];

  const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrent((current + 1) % slides.length);

  // Auto-play functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
      }, 4000); // Change slide every 4 seconds

      return () => clearInterval(interval);
    }
  }, [isPaused, slides.length]); // Removed current from dependencies to fix slide change issue

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div 
      className="relative w-full h-[100vh] overflow-hidden py-6 px-4 md:px-10 lg:px-20"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0">
        <Image src={slides[current].src} alt={slides[current].alt} fill priority className="object-cover" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black/40">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-['Playfair_Display'] font-bold text-white mb-8 lg:mb-12 drop-shadow-lg leading-tight">
            FRESH FROM <br /> FARM TO TABLE
          </h1>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 lg:py-5 lg:px-10 text-lg lg:text-xl rounded shadow-lg transition-all duration-300 font-['Roboto']">
            SHOP NOW
          </button>
        </div>
      </div>
      <button onClick={prevSlide} className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 z-10">
        <FaChevronLeft size={20} />
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 z-10">
        <FaChevronRight size={20} />
      </button>
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, idx) => (
          <button key={idx} onClick={() => setCurrent(idx)} className={`w-3 h-3 rounded-full ${idx === current ? "bg-white" : "bg-gray-400"}`} aria-label={`Go to slide ${idx + 1}`} />
        ))}
      </div>
    </div>
  );
};
// FeaturedCategories Component
const categorie = [
  { id: 1, src: "/category1.jpg" },
  { id: 2, src: "/category2.jpg" },
  { id: 3, src: "/category3.jpg" },
  { id: 4, src: "/category4.jpg" },
  { id: 5, src: "/category5.jpg" },
  { id: 6, src: "/category6.jpg" },
  { id: 7, src: "/category7.jpg" },
  { id: 8, src: "/category8.jpg" },
  { id: 9, src: "/category9.jpg" },
];

const FeaturedCategories = () => {
  return (
    <section className="w-full bg-gray-100 pt-0 pb-8 overflow-hidden">
      <motion.div
        className="flex gap-6 w-fit"
        animate={{ x: ["0%", "-50%"] }}  // move from 0 to -50% of container width
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30,   // speed: lower is faster
        }}
      >
        {/* Repeat categories twice for seamless looping */}
        {[...categorie, ...categorie].map((cat, idx) => (
          <div
            key={idx}
            className="relative w-80 md:w-[32rem] h-64 rounded-lg flex-shrink-0 shadow-lg overflow-hidden"
          >
            <Image
              src={cat.src}
              alt={`Category ${cat.id}`}
              fill
              className="rounded-lg object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
            />
            <div className="absolute inset-0 bg-black/30 rounded-lg" />
          </div>
        ))}
      </motion.div>
    </section>
  );
};

// Product Grid Component
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

const ProductGrid = () => {
  const [quantities, setQuantities] = useState(products.map(() => 1));
  const [activeCategory, setActiveCategory] = useState("Spices & Chutneys");

  const updateQty = (index, delta) => {
    setQuantities((prev) =>
      prev.map((q, i) => (i === index ? Math.max(1, q + delta) : q))
    );
  };

  return (
    <section className="bg-white py-16 px-4 lg:px-20 text-center">
      <h2 className="text-4xl font-bold text-green-900 mb-2 font-playfair">OUR PRODUCTS</h2>
      <p className="text-gray-700 text-base mb-10 font-roboto">Nurturing nature’s goodness to enrich your everyday living.</p>
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full font-medium text-sm ${
              cat === activeCategory ? "bg-[#5d8f2a] text-white" : "text-gray-700 hover:text-green-900"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product, i) => (
          <div key={product.name} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-300">
            <Image src={product.image} alt={product.name} width={400} height={300} className="w-full h-64 object-cover" />
            <div className="p-4 text-left">
              <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
              <p className="text-gray-800 mt-1 mb-3">₹{product.price}</p>
              <p className="text-gray-600 text-sm mb-4">{product.description}</p>
              <div className="flex items-center mb-4 gap-4 border border-gray-300 rounded-lg w-max mx-auto">
                <button onClick={() => updateQty(i, -1)} className="w-8 h-8 flex items-center justify-center text-lg text-gray-700 hover:bg-gray-200 rounded-l-lg">−</button>
                <span className="px-4 w-12 text-center text-gray-800 font-semibold">{quantities[i]}</span>
                <button onClick={() => updateQty(i, 1)} className="w-8 h-8 flex items-center justify-center text-lg text-gray-700 hover:bg-gray-200 rounded-r-lg">+</button>
              </div>
              <button className="w-full bg-[#5d8f2a] text-white py-2 rounded font-medium hover:bg-[#4b741e] transition">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


const AboutShop = () => {
  return (
    <section className="bg-[#f3f4f6] py-16 md:py-20 px-4 md:px-10 lg:px-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Images */}
        <div className="relative flex justify-center items-end gap-6 pt-4">
          {/* First image – Taller */}
          <div className="w-64 sm:w-72 md:w-80 lg:w-96 h-[700px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={farmersMarket}
              alt="Woman selecting fresh organic kale at farmers market"
              placeholder="blur"
              className="object-cover h-full w-full"
              priority
            />
          </div>
          
          {/* Second image – Aligned to bottom with top-right L-corner */}
          <div className="relative w-64 sm:w-72 md:w-80 lg:w-96 h-[600px] self-end">
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

        {/* Right: Text - Now Centered */}
        <div className="text-center max-w-xl mx-auto md:mx-0 px-2">
          <p className="text-[18px] lg:text-[20px] font-medium tracking-wide text-gray-700 mb-4 lg:mb-6 font-['Roboto']">
            Know More About Shop
          </p>
          <h2 className="text-[48px] sm:text-[56px] lg:text-[64px] font-bold text-green-900 leading-snug mb-8 lg:mb-10 font-['Playfair_Display']">
            Trusted <br className="block md:hidden" />
            <span className="whitespace-nowrap">Organic Food Store</span>
          </h2>
          <p className="text-gray-800 text-[18px] lg:text-[20px] leading-relaxed font-['Roboto']">
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
}// Why Choose Us Section
const WhyChooseUs = () => {
  return (
    <section className="bg-[#F3F4F6] py-16 px-6 md:px-32 xl:px-44 relative overflow-hidden">
      <div className="mx-auto grid md:grid-cols-2 gap-12 items-start relative z-10">
        <div className="flex flex-col space-y-16 w-full">
          <div className="w-full max-w-[2000px] mx-auto">
            <h2 className="text-4xl font-playfair text-[#21613F] text-center md:text-left mb-6">Why Choose Us</h2>
            <div className="bg-[#FFF8F1] rounded-xl shadow-lg grid grid-cols-3 gap-8 p-8 max-w-[1000px] md:max-w-none mx-auto md:mx-0">
              {[ 
                { img: "/images/about/no-chemicals.png", text: "No Chemicals" },
                { img: "/images/about/locally-sourced.png", text: "Locally Sourced" },
                { img: "/images/about/farmers-first.png", text: "Farmers First" }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center space-y-2">
                  <Image src={item.img} alt={item.text} width={50} height={50} />
                  <p className="text-sm font-semibold text-[#1D4D2C]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute left-0 bottom-10 z-20 w-[50vw]">
            <h3 className="text-3xl font-bold text-[#21613F] mb-4 text-center md:text-left">Testimonials</h3>
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl flex items-center gap-4 md:gap-6 w-full mx-auto relative">
              <Image src="/images/about/testimonial.jpg" alt="Customer" width={60} height={60} className="rounded-full object-cover w-[60px] h-[60px]" />
              <p className="text-[#000000] text-base md:text-lg font-roboto leading-relaxed">“The best organic products I’ve ever tried! Fresh, tasty, and truly chemical free.”</p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-xl mt-20 md:mt-0">
          <Image width={1000} height={1000} src="/images/about/farmer.jpg" alt="Farmer" className="object-cover rounded-2xl" />
        </div>
      </div>
    </section>
  );
};

// Blog Cards Component
const blogs = [
  {
    id: 1,
    image: "/images/blog1.jpg",
    title: "The Shravani Story: From Farms to Families",
    description: "Learn how Shravani began with a simple mission – authentic, chemical-free food straight from trusted farmers.",
    linkText: "Read More →",
  },
  {
    id: 2,
    image: "/images/blog2.jpg",
    title: "Why Choosing Organic Is a Healthier and Smarter Choice",
    description: "Understand the life-changing effects of eating clean, natural food – and why your food decisions shape a healthier planet.",
    linkText: "Explore Insights →",
  },
  {
    id: 3,
    image: "/images/blog3.jpg",
    title: "Cook Healthy with Shravani: Recipes That Nourish",
    description: "Discover wholesome recipes made with our organic products – from golden ghee to vibrant spices.",
    linkText: "Get Recipes →",
  },
];

const BlogCards = () => {
  return (
    <section className="bg-white py-20 px-4 md:px-20">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1D4D2C] mb-4 font-[Playfair_Display]">Latest Blog</h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-roboto">
          “Explore stories and insights from Shravani Organic Life — promoting clean eating, conscious choices, and a sustainable future.”
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {blogs.map((blog) => (
          <div key={blog.id} className="rounded-xl overflow-hidden bg-[#F1F1F1] shadow-md hover:shadow-lg transition-shadow duration-500 group flex flex-col h-[520px]">
            <div className="relative w-full h-60">
              <Image src={blog.image} alt={blog.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
            </div>
            <div className="p-6 flex flex-col justify-between flex-grow space-y-4 font-roboto">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 leading-tight">{blog.title}</h3>
                <p className="text-gray-700 text-base leading-relaxed mt-2">{blog.description}</p>
              </div>
              <button className="text-green-700 font-extrabold text-base hover:underline">{blog.linkText}</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Bestsellers Component
const Bestsellers = () => {
  return (
    <section className="bg-[#f5f5f5] py-16 md:py-20 px-4 md:px-10 lg:px-20">
      <div className="text-center">
        <h2 className="text-4xl font-playfair text-[#21613F] mb-2">Explore Our Bestsellers</h2>
        <p className="text-lg text-[#21613F] mb-8">Authentic, Organic and full of Goodness</p>
        <p className="text-sm text-gray-700 mb-16">Discover the purity of our most loved items. Each product is carefully crafted from nature's best ingredients to nourish your body, mind, and soul.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-lg text-center border border-gray-200">
          <Image src="/images/bestsellers/traditional-rice.jpg" alt="Traditional Rice Varieties" width={400} height={300} className="object-cover w-full h-[250px] mb-4" />
          <h3 className="text-xl font-semibold text-[#333333] mb-2">Traditional Rice Varieties</h3>
          <p className="text-sm text-gray-600 mb-4">Heirloom grains, cultivated organically for richer taste & nutrition.</p>
          <p className="text-xs text-gray-500 mb-6">CHEMICAL-FREE • GLUTEN-FREE • ENERGY BOOSTING</p>
          <p className="text-xl text-[#21613F] font-bold mb-6">From ₹120</p>
          <button className="bg-[#57951BF7] text-white py-3 px-10 rounded-md text-lg font-playfair">Shop Now</button>
        </div>
        {/* Card 2 */}
        <div className="bg-white p-6 rounded-lg text-center border border-gray-200">
          <Image src="/images/bestsellers/herbal-teas.jpg" alt="Herbal Teas & Filter Coffee" width={400} height={300} className="object-cover w-full h-[250px] mb-4" />
          <h3 className="text-xl font-semibold text-[#333333] mb-2">Herbal Teas & Filter Coffee</h3>
          <p className="text-sm text-gray-600 mb-4">Energize your day with our hand-blended teas and robust coffees.</p>
          <p className="text-xs text-gray-500 mb-6">CAFFEINE BALANCE AYURVEDIC HERBS - FARM FRESH</p>
          <p className="text-xl text-[#21613F] font-bold mb-6">From ₹150</p>
          <button className="bg-[#57951BF7] text-white py-3 px-10 rounded-md text-lg font-playfair">Shop Now</button>
        </div>
        {/* Card 3 */}
        <div className="bg-white p-6 rounded-lg text-center border border-gray-200">
          <Image src="/images/bestsellers/cold-pressed-oils.jpg" alt="Cold-Pressed Oils & Natural Essences" width={400} height={300} className="object-cover w-full h-[250px] mb-4" />
          <h3 className="text-xl font-semibold text-[#333333] mb-2">Cold-Pressed Oils & Natural Essences</h3>
          <p className="text-sm text-gray-600 mb-4">Extracted using traditional methods to preserve flavor and nutrients.</p>
          <p className="text-xs text-gray-500 mb-6">ZERO ADDITIVES • IDEAL FOR COOKING & SKIN</p>
          <p className="text-xl text-[#21613F] font-bold mb-6">From ₹250</p>
          <button className="bg-[#57951BF7] text-white py-3 px-10 rounded-md text-lg font-playfair">View Product</button>
        </div>
      </div>
    </section>
  );
};

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


// Main Home Page Component
export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <FeaturedCategories/>
      <ProductGrid />
      <AboutShop/>
      <WhyChooseUs />
      <BlogCards />
      <Bestsellers />
      <CuratedProducts />
    </>
  );
}











