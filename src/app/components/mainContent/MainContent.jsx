import React from "react";
import { ProductCard } from "../productCard/ProductCard";
// import { PaginationElement } from "../paginationElement/PaginationElement";

export const MainContent = (props) => {
  const {
    products: { items },
    // , meta
    // page,
    // onChange,
  } = props;

  // const handleChange = (value) => {
  //   onChange(value);
  // };

  const productCards = items.map((product) => (
    <ProductCard key={product.id} props={product} />
  ));

  return (
    <>
      <div className="main-content">
        {productCards}

        {/* <PaginationElement
          count={meta.totalPages}
          page={page}
          onChange={handleChange}
        /> */}
      </div>
    </>
  );
};
