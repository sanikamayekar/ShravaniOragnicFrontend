// "use client";
// import Image from "next/image";
// import { motion } from "framer-motion";

// const categories = [
//   { id: 1, src: "/category1.jpg" },
//   { id: 2, src: "/category2.jpg" },
//   { id: 3, src: "/category3.jpg" },
//   { id: 4, src: "/category4.jpg" },
//   { id: 5, src: "/category5.jpg" },
//   { id: 6, src: "/category6.jpg" },
//   { id: 7, src: "/category7.jpg" },
//   { id: 8, src: "/category8.jpg" },
//   { id: 9, src: "/category9.jpg" },
// ];

// export default function FeaturedCategories() {
//   return (
//     <section className="w-full bg-gray-100 pt-0 pb-8">
//       <div className="w-full px-4 lg:px-0">
//         <div className="flex overflow-x-auto gap-6 snap-x snap-mandatory scrollbar-hide">
//           {categories.map((cat) => (
//             <motion.div
//               key={cat.id}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               whileHover={{ scale: 1.05 }}
//               viewport={{ once: true, amount: 0.2 }}
//               transition={{ duration: 0.6, ease: "easeOut" }}
//               className="flex-shrink-0 relative w-80 md:w-[32rem] h-64 rounded-lg snap-start shadow-lg group overflow-hidden"
//             >
//               <Image
//                 src={cat.src}
//                 alt={`Category ${cat.id}`}
//                 fill
//                 className="rounded-lg object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
//               />
//               <div className="absolute inset-0 bg-black/30 flex items-center justify-center rounded-lg" />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const categories = [
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

export default function FeaturedCategories() {
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
        {[...categories, ...categories].map((cat, idx) => (
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
}
