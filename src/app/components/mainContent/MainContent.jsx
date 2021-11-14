import React from "react";
import { ProductCard } from "../productCard/ProductCard";

export const MainContent = (props) => {
  const {
    products: { items },
  } = props;

  const productCards = items.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  return (
    <>
      <div className="main-content">{productCards}</div>
    </>
  );
};
