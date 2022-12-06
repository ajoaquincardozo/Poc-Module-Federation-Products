import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import { getProducts } from "../products";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const result = await getProducts();
    setProducts(result.products);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-6">
      {products.map(product => <ProductItem key={product.id} product={product}/>)}
    </div>
  );
}
