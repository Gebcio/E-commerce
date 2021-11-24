import React from "react";

import { Header } from "../components/header/Header";
import { MainContent } from "../components/mainContent/MainContent";
import { PaginationElement } from "../components/paginationElement/PaginationElement";
import { useState, useEffect } from "react";
import { useDebounce } from "../hooks/useDebounce";
import axios from "axios";

export const Products = () => {
  const [isChecked, setIsChecked] = useState([false, false]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pageLimit, setPageLimit] = useState(8);
  const [products, setProducts] = useState({ items: [], meta: [] });
  const [searchTerm, setSearchTerm] = useState("");

  const checkboxes = ["active", "promo"];
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  window.addEventListener("resize", () => {
    window.innerWidth <= 600
      ? setPageLimit(4)
      : window.innerWidth <= 1200
      ? setPageLimit(6)
      : setPageLimit(8);
  });

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
    axios
      .get(
        `https://join-tsh-api-staging.herokuapp.com/products?search=${debouncedSearchTerm}&limit=${pageLimit}&page=${page}&promo=${
          isChecked[1] ? isChecked[1] : ""
        }&active=${isChecked[0] ? isChecked[0] : ""}`
      )
      .then((response) => {
        setProducts(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        alert(`Something went wrong! ${error.message}`);
      });
  }, [debouncedSearchTerm, isChecked, pageLimit, page, isLoading]);

  if (!products) return null;

  return (
    <>
      <Header
        checkboxes={checkboxes}
        checkboxState={isChecked}
        onCheckboxChange={handleCheckboxChange}
        onSearchBarChange={handleSearchBarChange}
      />
      <MainContent isLoading={isLoading} products={products.items} />

      {!products.items.length ? null : (
        <PaginationElement
          count={products.meta.totalPages}
          page={page}
          onChange={handlePageChange}
        />
      )}
    </>
  );
};
