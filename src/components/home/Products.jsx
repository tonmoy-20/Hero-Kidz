import React from "react";
import ProductCard from "../cards/ProductCard";
import { getProducts } from "@/actions/server/product";

const Products = async () => {
  const products = await getProducts();

  // convert MongoDB ObjectId to string (important fix)
  const formattedProducts = products.map((product) => ({
    ...product,
    _id: product._id.toString(),
  }));

  return (
    <div>
      <h2 className="text-center text-4xl font-bold mb-10">Our Products</h2>

      <div className="grid md:grid-cols-4 gap-5">
        {formattedProducts.map((product, i) => (
          <ProductCard key={product._id || i} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
