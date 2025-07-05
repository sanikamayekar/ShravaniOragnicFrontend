// import Image from "next/image";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import { Playfair_Display } from "next/font/google";
// import farmersMarket from "../public/images/about/farmers-market.jpg";
// import peanutsBowls from "../public/images/about/peanuts-bowls.jpg";
// import TopHeader from "../components/TopHeader";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import HeroCarousel from "../components/HeroCarousel";
// import ProductGrid from "../components/ProductGrid";
// import FeaturedCategories from "@/components/FeaturedCategories";
// import { motion } from 'framer-motion';


// const AboutShop = () => {
//   return (
//     <section className="bg-[#f3f4f6] py-16 md:py-20 overflow-hidden">
//       <div className="mx-6 md:mx-32">
//         <div className="flex flex-col md:flex-row items-center gap-12">
//           {/* Left: Images */}
//           <div className="relative flex justify-center items-end gap-6 pt-4 max-w-full overflow-hidden">
//             {/* First image – Full screen height but contained within margins */}
//             <div className="w-64 sm:w-72 md:w-80 lg:w-96 h-screen max-h-[100vh] rounded-lg overflow-hidden shadow-lg">
//               <Image
//                 src={farmersMarket}
//                 alt="Woman selecting fresh organic kale at farmers market"
//                 placeholder="blur"
//                 className="object-cover h-full w-full"
//                 priority
//               />
//             </div>
            
// <div className="relative w-64 sm:w-72 md:w-80 lg:w-96 h-[600px] self-end mr-4">
//   {/* Decorative L-frame – top-right only with spacing */}
//   <span className="absolute -top-4 -right-4 h-[10px] w-[250px] bg-black z-30" />
//   <span className="absolute -top-3 -right-4 h-[250px] w-[10px] bg-black z-30" />
  
//   {/* Image Section */}
//   <div className="relative rounded-lg shadow-xl overflow-visible h-full">
//     <Image
//       src={peanutsBowls}
//       alt="Assorted organic nuts displayed in rustic bowls"
//       placeholder="blur"
//       className="object-cover h-full w-full"
//     />
//   </div>
// </div>
//           </div>

//           {/* Right: Text Section */}
//           <div className="text-center max-w-xl mx-auto md:mx-0 px-2 w-full md:w-5/12"> {/* Reduced width for text section */}
//             <p className="text-[16px] lg:text-[18px] font-medium tracking-wide text-gray-700 mb-4 lg:mb-6">
//               Know More About Shop
//             </p>
//             <h2 className="text-[40px] sm:text-[48px] lg:text-[56px] font-bold text-green-900 leading-snug mb-6 lg:mb-8">
//               Trusted <br className="block md:hidden" />
//               <span className="whitespace-nowrap">Organic Food Store</span>
//             </h2>
//             <p className="text-gray-800 text-[16px] lg:text-[18px] leading-relaxed">
//               At <span className="font-semibold">Shravani</span>, we believe that healthy
//               living begins with pure and natural food. Founded with a passion to
//               deliver authentic, chemical-free products to every household, we bring
//               you a thoughtfully curated range of 100% organic and natural food items — 
//               available through both our online store and retail outlets.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };


// // Why Choose Us Section
// const WhyChooseUs = () => {
//   return (
//     <section className="bg-[#D9D9D95E] h-[633px] relative overflow-hidden my-4">
//       <div className="mx-6 md:mx-32 py-8 relative">
//         <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-10 items-start h-full relative">
          
//           {/* Left Column */}
//           <div className="flex flex-col gap-6 justify-start pt-10 h-full relative z-10">
//             {/* Heading - Center Aligned */}
//             <h2 className="text-[43px] font-extrabold text-[#20603e] font-playfair text-center">
//               Why Choose Us
//             </h2>
            
//             {/* Testimonials Header - Center Aligned */}
//             <h3 className="text-[40px] font-extrabold text-black font-playfair mt-47 text-center">
//               Testimonials
//             </h3>
//           </div>
          
//           {/* Right Column – Farmer Image */}
//           <div className="relative w-full max-w-[433px] h-[580px] rounded-[37px] overflow-hidden shadow-lg mt-10 md:mt-0 z-0">
//             <Image
//               src="/images/about/farmer.jpg"
//               alt="Farmer"
//               fill
//               className="object-cover"
//             />
//           </div>
//         </div>
        
//         {/* Features - Positioned like testimonial card */}
//         <div className="absolute top-[180px] left-0 z-20 max-w-[760px] bg-[#FFF8F1] rounded-xl shadow-lg p-6">
//           <div className="grid grid-cols-3 gap-6">
//             {[
//               { img: "/images/about/no-chemicals.png", text: "No Chemicals" },
//               { img: "/images/about/locally-sourced.png", text: "Locally Sourced" },
//               { img: "/images/about/farmers-first.png", text: "Farmers First" },
//             ].map((item, idx) => (
//               <div key={idx} className="flex flex-col items-center text-center space-y-2">
//                 <div className="w-12 h-12 bg-[#E8F5E8] rounded-full flex items-center justify-center">
//                   <Image src={item.img} alt={item.text} width={24} height={24} />
//                 </div>
//                 <p className="text-base font-medium text-[#1D4D2C] font-roboto leading-tight">{item.text}</p>
//               </div>
//             ))}
//           </div>
//         </div>
 
//         {/* Testimonial Card - Overlaying both columns like Figma design */}
//         <div className="absolute bottom-6 left-0 right-0 z-20 max-w-[760px] bg-white rounded-[24px] shadow-xl p-6 flex items-center gap-6">
//           <Image
//             src="/images/about/testimonial.jpg"
//             alt="Customer"
//             width={90}
//             height={90}
//             className="rounded-full object-cover w-[90px] h-[90px] flex-shrink-0"
//           />
//           <div className="flex-1">
//             <p className="text-black text-[16px] font-roboto leading-relaxed text-left">
//               "The best organic products I've ever tried! Quality beyond expectations with
//             </p>
//             <p className="text-black text-[16px] font-roboto leading-relaxed text-left mt-1">
//               Fresh, Tasty, and truly chemical free goodness delivered to my doorstep"
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// // Blog Cards Component
// const blogs = [
//   {
//     id: 1,
//     image: "/images/blog1.jpg",
//     title: "The Shravani Story: From Farms to Families",
//     description: "Learn how Shravani began with a simple mission – authentic, chemical-free food straight from trusted farmers.",
//     linkText: "Read More →",
//   },
//   {
//     id: 2,
//     image: "/images/blog2.jpg",
//     title: "Why Choosing Organic Is a Healthier and Smarter Choice",
//     description: "Understand the life-changing effects of eating clean, natural food – and why your food decisions shape a healthier planet.",
//     linkText: "Explore Insights →",
//   },
//   {
//     id: 3,
//     image: "/images/blog3.jpg",
//     title: "Cook Healthy with Shravani: Recipes That Nourish",
//     description: "Discover wholesome recipes made with our organic products – from golden ghee to vibrant spices.",
//     linkText: "Get Recipes →",
//   },
// ];

// const BlogCards = () => {
//   return (
//     <section className="bg-white py-20">
//       <div className="mx-6 md:mx-32">
//         <div className="text-center mb-14">
//           <h2 className="text-4xl md:text-5xl font-extrabold text-[#1D4D2C] mb-4 font-[Playfair_Display]">Latest Blog</h2>
//           <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-roboto">
//             "Explore stories and insights from Shravani Organic Life — promoting clean eating, conscious choices, and a sustainable future."
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//           {blogs.map((blog) => (
//             <div key={blog.id} className="rounded-xl overflow-hidden bg-[#F1F1F1] shadow-md hover:shadow-lg transition-shadow duration-500 group flex flex-col h-[520px]">
//               <div className="relative w-full h-60">
//                 <Image src={blog.image} alt={blog.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
//               </div>
//               <div className="p-6 flex flex-col justify-between flex-grow space-y-4 font-roboto">
//                 <div>
//                   <h3 className="text-2xl font-bold text-gray-900 leading-tight">{blog.title}</h3>
//                   <p className="text-gray-700 text-base leading-relaxed mt-2">{blog.description}</p>
//                 </div>
//                 <button className="text-green-700 font-extrabold text-base hover:underline">{blog.linkText}</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // Bestsellers Component
// const Bestsellers = () => {
//   return (
//     <section className="bg-[#f5f5f5] py-0 md:py-0 mt-12">
//       <div className="mx-6 md:mx-32">
//         <div className="text-center">
//           <h2 className="text-5xl font-playfair font-bold text-[#21613F] mb-4">Explore Our Bestsellers</h2>
//           <p className="text-xl font-roboto font-bold text-[#21613F] mb-4">Authentic, Organic and full of Goodness</p>
//           <p className="text-base font-roboto text-gray-700 mb-16">Discover the purity of our most loved items .Each product is carefully crafted from nature's best ingredients to nourish your body ,mind and soul</p>
//         </div>
        
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
//           {/* Card 1 */}
//           <div className="bg-white p-6 rounded-lg text-center border border-gray-200 flex flex-col">
//             <Image 
//               src="/images/bestsellers/traditional-rice.jpg" 
//               alt="Traditional Rice Varieties" 
//               width={400} 
//               height={300} 
//               className="object-cover w-full h-[250px] mb-4 rounded-lg" 
//             />
//             <h3 className="text-xl font-roboto font-semibold text-[#333333] mb-2">Traditional Rice Varieties</h3>
//             <p className="text-sm font-roboto text-gray-600 mb-4">Heirloom grains, cultivated organically for richer taste & nutrition</p>
//             <p className="text-xs font-roboto text-gray-500 mb-6 uppercase tracking-wide">CHEMICAL-FREE • GLUTEN-FREE • ENERGY BOOSTING</p>
//             <p className="text-xl font-roboto text-[#21613F] font-bold mb-6">From ₹120</p>
//             <div className="mt-auto">
//               <button className="bg-[#57951BF7] text-white py-3 px-10 rounded-lg text-lg font-roboto w-full">Shop Now</button>
//             </div>
//           </div>

//           {/* Card 2 */}
//           <div className="bg-white p-6 rounded-lg text-center border border-gray-200 flex flex-col">
//             <Image 
//               src="/images/bestsellers/herbal-teas.jpg" 
//               alt="Herbal Teas & Filter Coffee" 
//               width={400} 
//               height={300} 
//               className="object-cover w-full h-[250px] mb-4 rounded-lg" 
//             />
//             <h3 className="text-xl font-roboto font-semibold text-[#333333] mb-2">Herbal Teas & Filter Coffee</h3>
//             <p className="text-sm font-roboto text-gray-600 mb-4">Energize your day with our hand-blended teas ad robust coffees.</p>
//             <p className="text-xs font-roboto text-gray-500 mb-6 uppercase tracking-wide">CAFFEINE BALANCE AYURVEDIC HERBS • FARM FRESH</p>
//             <p className="text-xl font-roboto text-[#21613F] font-bold mb-6">Shop Now</p>
//             <div className="mt-auto">
//               <button className="bg-[#57951BF7] text-white py-3 px-10 rounded-lg text-lg font-roboto w-full">Shop Now</button>
//             </div>
//           </div>

//           {/* Card 3 */}
//           <div className="bg-white p-6 rounded-lg text-center border border-gray-200 flex flex-col">
//             <Image 
//               src="/images/bestsellers/cold-pressed-oils.jpg" 
//               alt="Cold-Pressed Oils & Natural Essences" 
//               width={400} 
//               height={300} 
//               className="object-cover w-full h-[250px] mb-4 rounded-lg" 
//             />
//             <h3 className="text-xl font-roboto font-semibold text-[#333333] mb-2">Cold-Pressed Oils & Natural Essences</h3>
//             <p className="text-sm font-roboto text-gray-600 mb-4">Extracted using traditional methods to preserve flavor and nutrients</p>
//             <p className="text-xs font-roboto text-gray-500 mb-6 uppercase tracking-wide">ZERO ADDITIVES • IDEAL FOR COOKING & KIN</p>
//             <p className="text-xl font-roboto text-[#21613F] font-bold mb-6">View Product</p>
//             <div className="mt-auto">
//               <button className="bg-[#57951BF7] text-white py-3 px-10 rounded-lg text-lg font-roboto w-full">Shop Now</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// const CuratedProducts = () => {
//   return (
//     <section className="bg-[#f5f5f5] py-4 my-4">
//       <div className="mx-6 md:mx-32">
//         <div className="bg-white shadow-md rounded-lg p-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-gray-200">
//             {/* Curated Products */}
//             <div className="flex items-center text-center">
//               <img
//                 src="/images/icons/curated-products-icon.png"
//                 alt="Curated Products"
//                 className="w-12 h-12 mb-4 mx-auto"
//               />
//               <div>
//                 <h3 className="text-xl font-roboto font-semibold text-[#333333] mb-2">Curated Products</h3>
//                 <p className="text-sm font-roboto text-gray-600">Provide Curated Products for all products over $100</p>
//               </div>
//             </div>
            
//             {/* Handmade */}
//             <div className="flex items-center text-center pl-8">
//               <img
//                 src="/images/icons/handmade-icon.png"
//                 alt="Handmade"
//                 className="w-12 h-12 mb-4 mx-auto"
//               />
//               <div>
//                 <h3 className="text-xl font-roboto font-semibold text-[#333333] mb-2">Handmade</h3>
//                 <p className="text-sm font-roboto text-gray-600">We ensure the product quality that is our main goal</p>
//               </div>
//             </div>
            
//             {/* Natural Food */}
//             <div className="flex items-center text-center pl-8">
//               <img
//                 src="/images/icons/natural-food-icon.png"
//                 alt="Natural Food"
//                 className="w-12 h-12 mb-4 mx-auto"
//               />
//               <div>
//                 <h3 className="text-xl font-roboto font-semibold text-[#333333] mb-2">Natural Food</h3>
//                 <p className="text-sm font-roboto text-gray-600">Return product within 3 days for any product you buy</p>
//               </div>
//             </div>
            
//             {/* Free Home Delivery */}
//             <div className="flex items-center text-center pl-8">
//               <img
//                 src="/images/icons/free-delivery-icon.png"
//                 alt="Free Delivery"
//                 className="w-12 h-12 mb-4 mx-auto"
//               />
//               <div>
//                 <h3 className="text-xl font-roboto font-semibold text-[#333333] mb-2">Free Home Delivery</h3>
//                 <p className="text-sm font-roboto text-gray-600">We ensure the product quality that you can trust easily</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // Main Home Page Component
// export default function Home() {
//   return (
//     <main className="flex flex-col min-h-screen bg-[#f5f5f5]">
//       {/* Top Header Section */}
//       <section>
//         <TopHeader />
//       </section>
             
//       {/* Navbar Section */}
//       <section>
//         <Navbar className="sticky top-0 z-50" />
//       </section>

//       {/* Hero Carousel Section */}
//       <section className="pb-8">
//         <HeroCarousel />
//       </section>

//       <section>
//         <FeaturedCategories/>
//       </section>
              
//       {/* Product Grid Section - CSR Component */}
//       <section>
//         <ProductGrid />
//       </section>

//       {/* About Shop Section */}
//       <section>
//         <AboutShop />
//       </section>

//       {/* Why Choose Us Section */}
//       <section>
//         <WhyChooseUs />
//       </section>

//       {/* Blog Cards Section */}
//       <section>
//         <BlogCards />
//       </section>

//       {/* Bestsellers Section */}
//       <section>
//         <Bestsellers />
//       </section>

//       {/* Curated Products Section */}
//       <section>
//         <CuratedProducts />
//       </section>

//       {/* Footer Section */}
//       <section>
//         <Footer />
//       </section>
//     </main>
//   );
// }

import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Playfair_Display } from "next/font/google";
import farmersMarket from "../public/images/about/farmers-market.jpg";
import peanutsBowls from "../public/images/about/peanuts-bowls.jpg";
import TopHeader from "../components/TopHeader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroCarousel from "../components/HeroCarousel";
import ProductGrid from "../components/ProductGrid";
import FeaturedCategories from "@/components/FeaturedCategories";
import { motion } from 'framer-motion';

const AboutShop = () => {
  return (
    <section className="bg-[#f3f4f6] py-16 md:py-20 overflow-hidden">
      <div className="mx-6 md:mx-32">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left: Images */}
          <div className="relative flex justify-center items-end gap-6 pt-4 max-w-full overflow-hidden">
            {/* First image – Full screen height but contained within margins */}
            <div className="w-64 sm:w-72 md:w-80 lg:w-96 h-screen max-h-[100vh] rounded-lg overflow-hidden shadow-lg">
              <Image
                src={farmersMarket}
                alt="Woman selecting fresh organic kale at farmers market"
                placeholder="blur"
                className="object-cover h-full w-full"
                priority
              />
            </div>
            
            <div className="relative w-64 sm:w-72 md:w-80 lg:w-96 h-[600px] self-end mr-4">
              {/* Decorative L-frame – top-right only with spacing */}
              <span className="absolute -top-4 -right-4 h-[10px] w-[250px] bg-black z-30" />
              <span className="absolute -top-3 -right-4 h-[250px] w-[10px] bg-black z-30" />
              
              {/* Image Section */}
              <div className="relative rounded-lg shadow-xl overflow-visible h-full">
                <Image
                  src={peanutsBowls}
                  alt="Assorted organic nuts displayed in rustic bowls"
                  placeholder="blur"
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
          </div>

          {/* Right: Text Section */}
          <div className="text-center max-w-xl mx-auto md:mx-0 px-2 w-full md:w-5/12">
            <p className="text-[16px] lg:text-[18px] font-medium tracking-wide text-gray-700 mb-4 lg:mb-6">
              Know More About Shop
            </p>
            <h2 className="text-[40px] sm:text-[48px] lg:text-[56px] font-bold text-green-900 leading-snug mb-6 lg:mb-8">
              Trusted <br className="block md:hidden" />
              <span className="whitespace-nowrap">Organic Food Store</span>
            </h2>
            <p className="text-gray-800 text-[16px] lg:text-[18px] leading-relaxed">
              At <span className="font-semibold">Shravani</span>, we believe that healthy
              living begins with pure and natural food. Founded with a passion to
              deliver authentic, chemical-free products to every household, we bring
              you a thoughtfully curated range of 100% organic and natural food items — 
              available through both our online store and retail outlets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Why Choose Us Section
const WhyChooseUs = () => {
  return (
    <section className="bg-[#D9D9D95E] h-[633px] relative overflow-hidden my-4">
      <div className="mx-6 md:mx-32 py-8 relative">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-10 items-start h-full relative">
          
          {/* Left Column */}
          <div className="flex flex-col gap-6 justify-start pt-10 h-full relative z-10">
            {/* Heading - Center Aligned */}
            <h2 className="text-[43px] font-extrabold text-[#20603e] font-playfair text-center">
              Why Choose Us
            </h2>
            
            {/* Testimonials Header - Center Aligned */}
            <h3 className="text-[40px] font-extrabold text-black font-playfair mt-47 text-center">
              Testimonials
            </h3>
          </div>
          
          {/* Right Column – Farmer Image */}
          <div className="relative w-full max-w-[433px] h-[580px] rounded-lg overflow-hidden shadow-lg mt-10 md:mt-0 z-0">
            <Image
              src="/images/about/farmer.jpg"
              alt="Farmer"
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        {/* Features - Positioned like testimonial card */}
        <div className="absolute top-[180px] left-0 z-20 max-w-[760px] bg-[#FFF8F1] rounded-lg shadow-lg p-6">
          <div className="grid grid-cols-3 gap-6">
            {[
              { img: "/images/about/no-chemicals.png", text: "No Chemicals" },
              { img: "/images/about/locally-sourced.png", text: "Locally Sourced" },
              { img: "/images/about/farmers-first.png", text: "Farmers First" },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-2">
                <div className="w-12 h-12 bg-[#E8F5E8] rounded-lg flex items-center justify-center">
                  <Image src={item.img} alt={item.text} width={24} height={24} />
                </div>
                <p className="text-base font-medium text-[#1D4D2C] font-roboto leading-tight">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
 
        {/* Testimonial Card - Overlaying both columns like Figma design */}
        <div className="absolute bottom-6 left-0 right-0 z-20 max-w-[760px] bg-white rounded-lg shadow-xl p-6 flex items-center gap-6">
          <Image
            src="/images/about/testimonial.jpg"
            alt="Customer"
            width={90}
            height={90}
            className="rounded-lg object-cover w-[90px] h-[90px] flex-shrink-0"
          />
          <div className="flex-1">
            <p className="text-black text-[16px] font-roboto leading-relaxed text-left">
              "The best organic products I've ever tried! Quality beyond expectations with
            </p>
            <p className="text-black text-[16px] font-roboto leading-relaxed text-left mt-1">
              Fresh, Tasty, and truly chemical free goodness delivered to my doorstep"
            </p>
          </div>
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
    <section className="bg-white py-20">
      <div className="mx-6 md:mx-32">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1D4D2C] mb-4 font-[Playfair_Display]">Latest Blog</h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-roboto">
            "Explore stories and insights from Shravani Organic Life — promoting clean eating, conscious choices, and a sustainable future."
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <div key={blog.id} className="rounded-lg overflow-hidden bg-[#F1F1F1] shadow-md hover:shadow-lg transition-shadow duration-500 group flex flex-col h-[520px]">
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
      </div>
    </section>
  );
};

// Bestsellers Component
const Bestsellers = () => {
  return (
    <section className="bg-[#f5f5f5] py-0 md:py-0 mt-12">
      <div className="mx-6 md:mx-32">
        <div className="text-center">
          <h2 className="text-5xl font-playfair font-bold text-[#21613F] mb-4">Explore Our Bestsellers</h2>
          <p className="text-xl font-roboto font-bold text-[#21613F] mb-4">Authentic, Organic and full of Goodness</p>
          <p className="text-base font-roboto text-gray-700 mb-16">Discover the purity of our most loved items .Each product is carefully crafted from nature's best ingredients to nourish your body ,mind and soul</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg text-center border border-gray-200 flex flex-col">
            <Image 
              src="/images/bestsellers/traditional-rice.jpg" 
              alt="Traditional Rice Varieties" 
              width={400} 
              height={300} 
              className="object-cover w-full h-[250px] mb-4 rounded-lg" 
            />
            <h3 className="text-xl font-roboto font-semibold text-[#333333] mb-2">Traditional Rice Varieties</h3>
            <p className="text-sm font-roboto text-gray-600 mb-4">Heirloom grains, cultivated organically for richer taste & nutrition</p>
            <p className="text-xs font-roboto text-gray-500 mb-6 uppercase tracking-wide">CHEMICAL-FREE • GLUTEN-FREE • ENERGY BOOSTING</p>
            <p className="text-xl font-roboto text-[#21613F] font-bold mb-6">From ₹120</p>
            <div className="mt-auto">
              <button className="bg-[#57951BF7] text-white py-3 px-10 rounded-lg text-lg font-roboto w-full">Shop Now</button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg text-center border border-gray-200 flex flex-col">
            <Image 
              src="/images/bestsellers/herbal-teas.jpg" 
              alt="Herbal Teas & Filter Coffee" 
              width={400} 
              height={300} 
              className="object-cover w-full h-[250px] mb-4 rounded-lg" 
            />
            <h3 className="text-xl font-roboto font-semibold text-[#333333] mb-2">Herbal Teas & Filter Coffee</h3>
            <p className="text-sm font-roboto text-gray-600 mb-4">Energize your day with our hand-blended teas ad robust coffees.</p>
            <p className="text-xs font-roboto text-gray-500 mb-6 uppercase tracking-wide">CAFFEINE BALANCE AYURVEDIC HERBS • FARM FRESH</p>
            <p className="text-xl font-roboto text-[#21613F] font-bold mb-6">Shop Now</p>
            <div className="mt-auto">
              <button className="bg-[#57951BF7] text-white py-3 px-10 rounded-lg text-lg font-roboto w-full">Shop Now</button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg text-center border border-gray-200 flex flex-col">
            <Image 
              src="/images/bestsellers/cold-pressed-oils.jpg" 
              alt="Cold-Pressed Oils & Natural Essences" 
              width={400} 
              height={300} 
              className="object-cover w-full h-[250px] mb-4 rounded-lg" 
            />
            <h3 className="text-xl font-roboto font-semibold text-[#333333] mb-2">Cold-Pressed Oils & Natural Essences</h3>
            <p className="text-sm font-roboto text-gray-600 mb-4">Extracted using traditional methods to preserve flavor and nutrients</p>
            <p className="text-xs font-roboto text-gray-500 mb-6 uppercase tracking-wide">ZERO ADDITIVES • IDEAL FOR COOKING & KIN</p>
            <p className="text-xl font-roboto text-[#21613F] font-bold mb-6">View Product</p>
            <div className="mt-auto">
              <button className="bg-[#57951BF7] text-white py-3 px-10 rounded-lg text-lg font-roboto w-full">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CuratedProducts = () => {
  return (
    <section className="bg-[#f5f5f5] py-4 my-4">
      <div className="mx-6 md:mx-32">
        <div className="bg-white shadow-md rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-gray-200">
            {/* Curated Products */}
            <div className="flex items-center text-center">
              <img
                src="/images/icons/curated-products-icon.png"
                alt="Curated Products"
                className="w-12 h-12 mb-4 mx-auto"
              />
              <div>
                <h3 className="text-xl font-roboto font-semibold text-[#333333] mb-2">Curated Products</h3>
                <p className="text-sm font-roboto text-gray-600">Provide Curated Products for all products over $100</p>
              </div>
            </div>
            
            {/* Handmade */}
            <div className="flex items-center text-center pl-8">
              <img
                src="/images/icons/handmade-icon.png"
                alt="Handmade"
                className="w-12 h-12 mb-4 mx-auto"
              />
              <div>
                <h3 className="text-xl font-roboto font-semibold text-[#333333] mb-2">Handmade</h3>
                <p className="text-sm font-roboto text-gray-600">We ensure the product quality that is our main goal</p>
              </div>
            </div>
            
            {/* Natural Food */}
            <div className="flex items-center text-center pl-8">
              <img
                src="/images/icons/natural-food-icon.png"
                alt="Natural Food"
                className="w-12 h-12 mb-4 mx-auto"
              />
              <div>
                <h3 className="text-xl font-roboto font-semibold text-[#333333] mb-2">Natural Food</h3>
                <p className="text-sm font-roboto text-gray-600">Return product within 3 days for any product you buy</p>
              </div>
            </div>
            
            {/* Free Home Delivery */}
            <div className="flex items-center text-center pl-8">
              <img
                src="/images/icons/free-delivery-icon.png"
                alt="Free Delivery"
                className="w-12 h-12 mb-4 mx-auto"
              />
              <div>
                <h3 className="text-xl font-roboto font-semibold text-[#333333] mb-2">Free Home Delivery</h3>
                <p className="text-sm font-roboto text-gray-600">We ensure the product quality that you can trust easily</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Home Page Component
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#f5f5f5]">
      {/* Top Header Section */}
      <section>
        <TopHeader />
      </section>
             
      {/* Navbar Section */}
      <section>
        <Navbar className="sticky top-0 z-50" />
      </section>

      {/* Hero Carousel Section */}
      <section className="pb-8">
        <HeroCarousel />
      </section>

      <section>
        <FeaturedCategories/>
      </section>
              
      {/* Product Grid Section - CSR Component */}
      <section>
        <ProductGrid />
      </section>

      {/* About Shop Section */}
      <section>
        <AboutShop />
      </section>

      {/* Why Choose Us Section */}
      <section>
        <WhyChooseUs />
      </section>

      {/* Blog Cards Section */}
      <section>
        <BlogCards />
      </section>

      {/* Bestsellers Section */}
      <section>
        <Bestsellers />
      </section>

      {/* Curated Products Section */}
      <section>
        <CuratedProducts />
      </section>

      {/* Footer Section */}
      <section>
        <Footer />
      </section>
    </main>
  );
}
