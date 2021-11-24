import React from "react";
import { Loader } from "../loader/Loader";
import { ProductCard } from "../productCard/ProductCard";
import emptyListIcon from "../../assets/emptyListIcon.svg";

export const MainContent = ({ isLoading, products }) => {
  const productCards = products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  return (
    <>
      <div className="main-content">
        {isLoading ? (
          <Loader />
        ) : products.length === 0 ? (
          <div className="empty-list">
            <img src={emptyListIcon} alt="empty list icon" />
            <h2>Ooops… It’s empty here</h2>
            <p>There are no products on the list</p>
          </div>
        ) : (
          productCards
        )}
      </div>
    </>
  );
};
