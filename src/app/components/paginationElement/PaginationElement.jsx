import React from "react";
import { usePagination } from "@material-ui/lab";

export const PaginationElement = ({ count, page, onChange }) => {
  const siblingCount = count <= 6 ? 0 : 1;

  const { items } = usePagination({
    count: count,
    page: page,
    showFirstButton: true,
    showLastButton: true,
    hidePrevButton: true,
    hideNextButton: true,
    boundaryCount: 3,
    siblingCount: siblingCount,
  });

  const handleChange = (page) => {
    onChange(page);
  };

  return (
    <nav className="pagination">
      <ul className="pagination__items">
        {items.map(({ page, type, selected, onClick, ...item }, index) => {
          let children = null;

          if (type === "start-ellipsis") {
            children = "…";
          } else if (type === "page") {
            children = (
              <button
                type="button"
                style={{
                  color: selected ? "#4460f7" : undefined,
                }}
                onClick={() => handleChange(page)}
                {...item}
              >
                {page}
              </button>
            );
          } else {
            children = (
              <button
                type="button"
                onClick={() => handleChange(page)}
                {...item}
              >
                {type}
              </button>
            );
          }

          return <li key={index}>{children}</li>;
        })}
      </ul>
    </nav>
  );
};
