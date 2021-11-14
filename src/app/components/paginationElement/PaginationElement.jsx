import React from "react";
import { usePagination } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  nav: {
    backgroundColor: "#f8f8fa",
    padding: "3.2rem 0 5.6rem",
    display: "flex",
    justifyContent: "center",
  },

  ul: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    justifyContent: "center",
    "& > *": {
      padding: ".8rem",
      "&:first-child": {
        paddingRight: "1.6rem",
        "& button": {
          textTransform: "capitalize",
        },
      },
      "&:last-child": {
        paddingLeft: "1.6rem",
        "& button": {
          textTransform: "capitalize",
        },
      },
    },
    "& button": {
      backgroundColor: "transparent",
      border: "none",
    },
  },
});

export const PaginationElement = (props) => {
  const classes = useStyles();

  const { count, page, onChange } = props;

  const { items } = usePagination({
    count: count,
    page: page,
    showFirstButton: true,
    showLastButton: true,
    hidePrevButton: true,
    hideNextButton: true,
    boundaryCount: 1,
    siblingCount: 1,
  });

  const handleChange = (page) => {
    onChange(page);
  };

  return (
    <nav className={classes.nav}>
      <ul className={classes.ul}>
        {items.map(({ page, type, selected, onClick, ...item }, index) => {
          // if (page === 4) return null;
          let children = null;

          if (type === "start-ellipsis" || type === "end-ellipsis") {
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
