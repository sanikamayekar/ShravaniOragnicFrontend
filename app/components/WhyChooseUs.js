// "use client";
// import Image from "next/image";

// export default function WhyChooseUs() {
//   return (
//     <section className="bg-[#F3F4F6] py-16 px-6 md:px-32 xl:px-44 relative overflow-hidden ">
//       <div className=" mx-auto grid md:grid-cols-2 gap-12 items-start relative z-10">
//         {/* Left Section */}
//         <div className="flex flex-col space-y-12 w-full">
//           {/* Why Choose Us */}
//           <div>
//             <h2 className="text-4xl font-playfair text-[#1D4D2C] text-center md:text-left mb-6">
//               Why Choose Us
//             </h2>
//             <div className="bg-[#FFF8F1] rounded-xl shadow-lg grid grid-cols-3 gap-6 p-6 max-w-[500px] md:max-w-none mx-auto md:mx-0">
//               {[ 
//                 { img: "/images/about/no-chemicals.png", text: "No Chemicals" },
//                 { img: "/images/about/locally-sourced.png", text: "Locally Sourced" },
//                 { img: "/images/about/farmers-first.png", text: "Farmers First" }
//               ].map((item, idx) => (
//                 <div key={idx} className="flex flex-col items-center text-center space-y-2">
//                   <Image src={item.img} alt={item.text} width={50} height={50} />
//                   <p className="text-sm font-semibold text-[#1D4D2C]">{item.text}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Testimonials */}
//           <div className="absolute left-0 bottom-10 z-20 w-[50vw]">
//             <h3 className="text-3xl font-bold text-[#1D4D2C] mb-4 text-center md:text-left">
//               Testimonials
//             </h3>
//             <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl flex items-center gap-4 md:gap-6 w-full  mx-auto relative">
//               <Image
//                 src="/images/about/testimonial.jpg"
//                 alt="Customer"
//                 width={60}
//                 height={60}
//                 className="rounded-full object-cover w-[60px] h-[60px]"
//               />
//               <p className="text-gray-700 text-base md:text-lg font-roboto leading-relaxed">
//                 “The best organic products I’ve ever tried!<br />
//                 Fresh, tasty, and truly chemical free.”
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Right Section - Farmer Image */}
//         <div className="rounded-2xl overflow-hidden shadow-xl mt-20 md:mt-0">
//           <Image
//           width={1000}
//           height={1000}
//             src="/images/about/farmer.jpg"
//             alt="Farmer"
//             className="object-cover rounded-2xl"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

;



