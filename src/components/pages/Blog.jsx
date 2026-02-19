import Image from "next/image";
import Link from "next/link";
import React from "react";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Top 10 Educational Toys for Kids in 2026",
      description:
        "Discover the best educational toys that help children develop creativity and problem-solving skills.",
      image: "https://i.ibb.co.com/G37CyF6S/image.png",
      date: "January 15, 2026",
      author: "Admin",
    },
    {
      id: 2,
      title: "Why Wooden Toys Are Making a Comeback",
      description:
        "Explore why parents are choosing sustainable wooden toys over plastic alternatives.",
      image: "https://i.ibb.co.com/Kg1pRbd/image.png",
      date: "January 10, 2026",
      author: "Admin",
    },
    {
      id: 3,
      title: "How Toys Improve Early Childhood Development",
      description:
        "Learn how the right toys can enhance motor skills, creativity, and emotional intelligence.",
      image: "https://i.ibb.co.com/MyRVbHc3/image.png",
      date: "January 5, 2026",
      author: "Admin",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 md:px-12">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold text-gray-800">Our Blog</h1>
        <p className="text-gray-500 mt-3">
          Insights, guides, and updates from our toy store
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
          >
            <div className="relative h-56 w-full">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <p className="text-sm text-gray-400 mb-2">
                {blog.date} • {blog.author}
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                {blog.title}
              </h2>

              <p className="text-gray-600 text-sm mb-4">{blog.description}</p>

              <Link
                href="#"
                className="text-indigo-600 font-medium hover:underline"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
