import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import clsx from "clsx";

export const CheckboxElement = ({ name, checkboxState, onCheckboxChange }) => {
  const handleChange = (event) => {
    onCheckboxChange(event.target.checked);
  };

  return (
    <FormControlLabel
      control={
        <Checkbox
          name={name}
          className="checkbox__input"
          disableRipple
          color="default"
          checkedIcon={
            <span className={clsx("checkbox__icon", "checkbox__checkedIcon")} />
          }
          icon={<span className="checkbox__icon" />}
          checked={checkboxState}
          onChange={handleChange}
        />
      }
      label={<span className="checkbox__label">{name}</span>}
      labelPlacement="end"
    />
  );
};
