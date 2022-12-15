import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import { getProducts } from "../products";

export default function Products({ onDetailClick }) {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-6">
      {products.map(product => <ProductItem key={product.id} product={product} onDetailClick={() => onDetailClick(product.id)}/>)}
    </div>
  );
}
