import React from "react";

import { Header } from "../components/header/Header";
import { MainContent } from "../components/mainContent/MainContent";
import { PaginationElement } from "../components/paginationElement/PaginationElement";
import { useState, useEffect } from "react";
import axios from "axios";

export const Products = () => {
  const [products, setProducts] = useState(null);
  const [page, setPage] = useState(1);

  const checkboxes = ["active", "promo"];
  const pageLimit =
    window.innerWidth <= 600 ? 4 : window.innerWidth <= 1200 ? 6 : 8;

  let [isChecked, setIsChecked] = useState([false, false]);

  const handleCheckboxChange = (value) => {
    setIsChecked(value);
  };

  const handlePageChange = (value) => {
    setPage(value);
  };

  useEffect(() => {
    axios
      .get(
        `https://join-tsh-api-staging.herokuapp.com/products?limit=${pageLimit}&page=${page}&promo=${
          isChecked[1] ? isChecked[1] : ""
        }&active=${isChecked[0] ? isChecked[0] : ""}`
      )
      .then((response) => {
        setProducts(response.data);
      });
  }, [pageLimit, page, isChecked]);

  if (!products) return null;

  return (
    <>
      <Header
        checkboxes={checkboxes}
        checkboxState={isChecked}
        onChange={handleCheckboxChange}
      />
      <MainContent products={products} page={page} />

      {/* handle display of products if less than page limit */}
      <PaginationElement
        count={products.meta.totalPages}
        page={page}
        onChange={handlePageChange}
      />
    </>
  );
};
