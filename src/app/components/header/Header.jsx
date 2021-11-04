import React from "react";
import { SearchBar } from "../searchBar/SearchBar";
import { CheckboxElement } from "../checkboxElement/CheckboxElement";
import { ButtonElement } from "../buttonElement/ButtonElement";
import { Link } from "react-router-dom";
import { AppRoute } from "../../../routing/AppRoute.enum";

export const Header = (props) => {
  const { checkboxes, checkboxState, onChange } = props;

  const handleCheckboxChange = (position) => {
    const updatedCheckedState = checkboxState.map((item, index) =>
      index === position ? !item : item
    );
    onChange(updatedCheckedState);
  };

  return (
    <>
      <div className="header">
        <h1>join.tsh.io</h1>
        <SearchBar />
        <div className="checkbox__wrapper">
          {
            checkboxes.map((name, index) => {
              return (
                <CheckboxElement
                  key={index}
                  name={name}
                  checkboxState={checkboxState[index]}
                  onChange={() => handleCheckboxChange(index)}
                />
              );
            })
            /* {<CheckboxElement
            name="active"
            checkboxState={checkboxState[0]}
            onChange={handleCheckboxChange}
          />
          <CheckboxElement
            name="promo"
            checkboxState={checkboxState[1]}
            onChange={handleCheckboxChange}
          /> */
          }
        </div>

        <Link className="login-link" to={AppRoute.login}>
          <ButtonElement name="Log in" type="login" />
        </Link>
      </div>
    </>
  );
};
