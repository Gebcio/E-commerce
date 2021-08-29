import React from "react";
import { SearchBar } from "../searchBar/SearchBar";
import { CheckboxElement } from "../checkboxElement/CheckboxElement";
import { ButtonElement } from "../buttonElement/ButtonElement";
import { Link } from "react-router-dom";
import { AppRoute } from "../../../routing/AppRoute.enum";

export const Header = () => {
  return (
    <>
      <div className="header">
        <h1>join.tsh.io</h1>
        <SearchBar />
        <div className="checkbox__wrapper">
          <CheckboxElement name="active" />
          <CheckboxElement name="promo" />
        </div>

        <Link className="login-link" to={AppRoute.login}>
          <ButtonElement name="Log in" type="login" />
        </Link>
      </div>
    </>
  );
};
