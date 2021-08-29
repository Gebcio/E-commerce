import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles({
  button: {
    borderRadius: "4px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "1.4rem",
    height: "3.8rem",
    lineHeight: "1.6rem",
  },
});

export const ButtonElement = (props) => {
  const classes = useStyles();

  return (
    <Button className={clsx(classes.button, `btn--${props.type}`)}>
      {props.name}
    </Button>
  );
};
