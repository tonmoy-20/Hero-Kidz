import Products from "@/components/home/Products";
import React from "react";
import { getSingleProduct } from "@/actions/server/product";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = await getSingleProduct(id);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

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

const ProductsPage = () => {
  return (
    <div>
      <Products></Products>
    </div>
  );
};

export default ProductsPage;
