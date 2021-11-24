import React from "react";
import { SearchBar } from "../searchBar/SearchBar";
import { CheckboxElement } from "../checkboxElement/CheckboxElement";
import { ButtonElement } from "../buttonElement/ButtonElement";
import { Link } from "react-router-dom";
import { AppRoute } from "../../../routing/AppRoute.enum";

export const Header = ({
  checkboxes,
  checkboxState,
  onCheckboxChange,
  onSearchBarChange,
}) => {
  const handleCheckboxChange = (position) => {
    const updatedCheckedState = checkboxState.map((item, index) =>
      index === position ? !item : item
    );
    onCheckboxChange(updatedCheckedState);
  };

  const handleSearchBarChange = (value) => {
    onSearchBarChange(value);
  };

  return (
    <>
      <div className="header">
        <h1>join.tsh.io</h1>
        <SearchBar onSearchBarChange={handleSearchBarChange} />
        <div className="checkbox__wrapper">
          {checkboxes.map((name, index) => {
            return (
              <CheckboxElement
                key={index}
                name={name}
                checkboxState={checkboxState[index]}
                onCheckboxChange={() => handleCheckboxChange(index)}
              />
            );
          })}
        </div>

        <Link className="login-link" to={AppRoute.login}>
          <ButtonElement name="Log in" type="login" />
        </Link>
      </div>
    </>
  );
};
