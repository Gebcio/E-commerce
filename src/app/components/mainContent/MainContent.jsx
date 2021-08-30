import React from "react";
import { ProductCard } from "../productCard/ProductCard";
import { useState, useEffect } from "react";
import axios from "axios";

export const MainContent = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios
      .get("https://join-tsh-api-staging.herokuapp.com/products")
      .then((response) => {
        setProducts(response.data);
      });
  }, []);

  if (!products) return null;

  const { items } = products;

  const productCards = items.map((item) => (
    <ProductCard key={item.id} props={item} />
  ));

  return <div className="main-content">{productCards}</div>;
};
