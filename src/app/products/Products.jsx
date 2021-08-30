import React from "react";

import { Header } from "../components/header/Header";
import { MainContent } from "../components/mainContent/MainContent";
// import { useState, useEffect } from "react";
// import axios from "axios";

export const Products = () => {
  //   const [products, setProducts] = useState(null);

  //   useEffect(() => {
  //     axios
  //       .get("https://join-tsh-api-staging.herokuapp.com/products")
  //       .then((response) => {
  //         setProducts(response.data);
  //       });
  //   }, []);

  //   if (!products) return null; // OBSLUZYC TO W MainContent

  //   const { items } = products.items;

  return (
    <>
      <Header />
      <MainContent />
    </>
  );
};
