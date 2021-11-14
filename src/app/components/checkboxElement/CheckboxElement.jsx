import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles({
  input: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  icon: {
    borderRadius: ".4rem",
    width: "2.4rem",
    height: "2.4rem",
    boxShadow: "inset 0 0 0 1px #E0E2EA, inset 0 -1px 0 #E0E2EA",
    backgroundColor: "#fff",
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: "#fff",
    },
  },
  checkedIcon: {
    backgroundColor: "#4460F7",
    boxShadow: "inset 0 0 0 1px #4460F7, inset 0 -1px 0 #4460F7",
    "&:before": {
      display: "block",
      width: "2.4rem",
      height: "2.4rem",
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: "#2140E8",
      boxShadow: "inset 0 0 0 1px #2140E8, inset 0 -1px 0 #2140E8",
    },
  },
  label: {
    textTransform: "capitalize",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "1.4rem",
    lineHeight: "1.6rem",
  },
});

export const CheckboxElement = (props) => {
  const { name, checkboxState, onCheckboxChange } = props;

  const classes = useStyles();

  const handleChange = (event) => {
    onCheckboxChange(event.target.checked);
  };

  return (
    <FormControlLabel
      control={
        <Checkbox
          name={name}
          className={classes.input}
          disableRipple
          color="default"
          checkedIcon={
            <span className={clsx(classes.icon, classes.checkedIcon)} />
          }
          icon={<span className={classes.icon} />}
          checked={checkboxState}
          onChange={handleChange}
        />
      }
      label={<span className={classes.label}>{name}</span>}
      labelPlacement="end"
    />
  );
};
