import { getSingleProduct } from "@/actions/server/product";
import CartButton from "@/components/buttons/CartButton";
import Image from "next/image";
import React from "react";
import { FaCartPlus, FaStar } from "react-icons/fa";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = await getSingleProduct(id);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }
  console.log(product);

  return {
    title: product.title,
    description: product.description?.slice(0, 160),

    openGraph: {
      title: product.title,
      description: product.description?.slice(0, 160),
      images: [
        {
          url: product.image || "https://i.ibb.co.com/MxSZcZs3/image.png",
          width: 1200,
          height: 630,
          alt: product.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: product.title,
      description: product.description?.slice(0, 160),
      images: [product.image || "https://i.ibb.co.com/MxSZcZs3/image.png"],
    },
  };
}


const ProductDetails = async ({ params }) => {
  const { id } = await params;

  const product = await getSingleProduct(id);

  console.log(product);
  

  const {
    title,
    price,
    rating,
    image,
    discount,
    sold,
    description,
    reviews,
    info,
    qna,
  } = product;

  const discountedPrice = price - (price * discount) / 100;

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image */}
      <div className="rounded-xl overflow-hidden " >

        <Image
          src={image}
          alt={title}
          width={600}
          height={420}
          className="w-full h-105 object-cover"
        />
      </div>
      {/* info */}
      <div>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>

        {/* rating */}
        <div className="flex items-center gap-2  mb-4">
          <div className="flex text-yellow-400">
            {Array.from({ length: 5 }, (_, i) => (
              <FaStar
                key={i}
                className={i < Math.round(rating) ? "" : "opacity-30"}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">
            {rating} ({reviews} reviews) {sold} sold
          </span>
        </div>
        {/* price */}
        <div className="mb-4">
          <span className="text-2xl font-bold">৳{discountedPrice}</span>
          {discount > 0 && (
            <span className="ml-3 text-sm text-gray-500 line-through">
              ৳{price}
            </span>
          )}
        </div>
        {/* Actions */}
        <CartButton product={product}></CartButton>
      </div>
      <div className="col-span-full">
        {/* description */}
        <div className="mt-8 space-y-4 text-gray-700 leading-relaxed">
          <h3 className="font-semibold mb-2">Description</h3>
          {description?.split("\n\n").map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>

        {/* key feature */}
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Key Features</h3>
          <ul className="list-disc list-inside space-y-1">
            {info?.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        {/* Q&A */}
        <div className="mt-8">
          <h3 className="font-semibold mb-3">Q & A</h3>
          <div className="space-y-3">
            {qna?.map((item, i) => (
              <div key={i} className="border rounded-lg p-3">
                <p className="font-medium">{item.question}</p>
                <p className="text-sm text-gray-600 mt-1">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
