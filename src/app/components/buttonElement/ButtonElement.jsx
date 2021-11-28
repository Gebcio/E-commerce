import React from "react";
import Button from "@material-ui/core/Button";
import clsx from "clsx";

export const ButtonElement = ({ name, type, onMouseUp }) => {
  const handleOnMouseUp = (value) => {
    onMouseUp(value);
  };

  return (
    <Button
      className={clsx("btn", `btn--${type}`)}
      type={type}
      onMouseUp={name === "Show details" ? handleOnMouseUp : null}
    >
      {name}
    </Button>
  );
};
