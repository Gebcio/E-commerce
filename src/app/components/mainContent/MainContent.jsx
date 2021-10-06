import React from "react";
import { ProductCard } from "../productCard/ProductCard";

export const MainContent = (props) => {
  const { products } = props;

  const productCards = products.map((product) => (
    <ProductCard key={product.id} props={product} />
  ));

  return <div className="main-content">{productCards}</div>;
};
