"use client";

import Image from "next/image";
import Link from "next/link";
import { FaStar, FaShoppingCart } from "react-icons/fa";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";

const ProductCard = ({ product }) => {
  const { title, price, image, ratings, reviews, sold, discount } = product;

  const discountedPrice =
    product.price - (product.price * product.discount) / 100;

  return (
    <div className="card bg-base-100 shadow-lg hover:shadow-2xl transition duration-300">
      <figure className="relative h-48 w-full">
        <Image
          width={200}
          height={180}
          src={image}
          alt={title}
          className="object-cover rounded-t-xl"
        />
      </figure>

      <div className="card-body">
        {/* Title */}
        <h2 className="card-title text-base font-semibold line-clamp-2">
          {title}
        </h2>

        <div className="flex items-center space-x-2 mt-2">
          <div className="flex text-yellow-400">
            {Array.from({ length: 5 }, (_, i) => (
              <FaStar
                key={i}
                className={
                  i < Math.round(ratings) ? "opacity-100" : "opacity-40"
                }
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">({reviews} reviews)</span>
        </div>

        <div className="flex justify-between items-center mt-2">
          <span className="font-bold text-lg">৳{price}</span>
          <span className="text-sm text-gray-500">{sold} sold</span>
        </div>

        {/* Add To Cart Button */}
        <div className="card-actions mt-3">
          <button
            // onClick={() => onAddToCart(product)}
            className="btn btn-primary w-full flex items-center gap-2"
          >
            <FaShoppingCart />
            Add to Cart
          </button>
          <Link
            href={`/products/${product._id}`}
            className="btn btn-primary btn-outline mt-4 w-full"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
