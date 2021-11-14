import React from "react";

import { Header } from "../components/header/Header";
import { MainContent } from "../components/mainContent/MainContent";
import { PaginationElement } from "../components/paginationElement/PaginationElement";
import { useState, useEffect } from "react";
import { useDebounce } from "../hooks/useDebounce";
import axios from "axios";

export const Products = () => {
  const [isChecked, setIsChecked] = useState([false, false]);
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const checkboxes = ["active", "promo"];

  const pageLimit =
    window.innerWidth <= 600 ? 4 : window.innerWidth <= 1200 ? 6 : 8;

  const handleCheckboxChange = (value) => {
    setIsChecked(value);
    setPage(1);
  };

  const handleSearchBarChange = (value) => {
    setSearchTerm(value);
  };

  const handlePageChange = (value) => {
    setPage(value);
  };

  useEffect(() => {
    // TO DO finish debounce search

    axios
      .get(
        `https://join-tsh-api-staging.herokuapp.com/products?search=${debouncedSearchTerm}&limit=${pageLimit}&page=${page}&promo=${
          isChecked[1] ? isChecked[1] : ""
        }&active=${isChecked[0] ? isChecked[0] : ""}`
      )
      .then((response) => {
        setProducts(response.data);
      });
  }, [debouncedSearchTerm, isChecked, pageLimit, page]);

  if (!products) return null;

  return (
    <>
      <Header
        checkboxes={checkboxes}
        checkboxState={isChecked}
        onCheckboxChange={handleCheckboxChange}
        onSearchBarChange={handleSearchBarChange}
      />
      <MainContent products={products} />

      {/* handle display of products if less than page limit  - margins*/}
      <PaginationElement
        count={products.meta.totalPages}
        page={page}
        onChange={handlePageChange}
      />
    </>
  );
};
