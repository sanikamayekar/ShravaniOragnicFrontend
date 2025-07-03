"use client";

import Image from "next/image";

const blogs = [
  {
    id: 1,
    image: "/images/blog1.jpg",
    title: "The Shravani Story: From Farms to Families",
    description:
      "Learn how Shravani began with a simple mission – authentic, chemical-free food straight from trusted farmers.",
    linkText: "Read More →",
  },
  {
    id: 2,
    image: "/images/blog2.jpg",
    title: "Why Choosing Organic Is a Healthier and Smarter Choice",
    description:
      "Understand the life-changing effects of eating clean, natural food – and why your food decisions shape a healthier planet.",
    linkText: "Explore Insights →",
  },
  {
    id: 3,
    image: "/images/blog3.jpg",
    title: "Cook Healthy with Shrovani: Recipes That Nourish",
    description:
      "Discover wholesome recipes made with our organic products – from golden ghee to vibrant spices.",
    linkText: "Get Recipes →",
  },
];

export default function BlogCards() {
  return (
    <section className="bg-white py-20 px-4 md:px-20"> {/* ✅ White section background */}
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1D4D2C] mb-4 font-[Playfair_Display]">
          Latest Blog
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-roboto">
          “Explore stories and insights from Shravani Organic Life — promoting clean eating, conscious choices, and a sustainable future.”
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="rounded-xl overflow-hidden bg-[#F1F1F1] shadow-md hover:shadow-lg transition-shadow duration-500 group flex flex-col h-[520px]" // ✅ Gray cards only
          >
            <div className="relative w-full h-60">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </div>
            <div className="p-6 flex flex-col justify-between flex-grow space-y-4 font-roboto">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                  {blog.title}
                </h3>
                <p className="text-gray-700 text-base leading-relaxed mt-2">
                  {blog.description}
                </p>
              </div>
              <button className="text-green-700 font-extrabold text-base hover:underline">
                {blog.linkText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
