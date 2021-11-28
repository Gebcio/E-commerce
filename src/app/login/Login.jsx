import React from "react";
import loginImage from "../assets/loginImage.svg";
import { Link } from "react-router-dom";
import { AppRoute } from "../../routing/AppRoute.enum";
import { ButtonElement } from "../components/buttonElement/ButtonElement";

export const Login = () => {
  return (
    <div className="login-page">
      <img src={loginImage} alt="login image" width="604px" />

      <div className="login-page__text">
        <h1>
          <Link to={AppRoute.home}>join.tsh.io</Link>
        </h1>
        <h2>Login</h2>
        <form>
          <div>
            <label>
              Username
              <input name="username" placeholder="Enter username" />
            </label>
          </div>
          <div>
            <label>
              Password
              <input
                name="password"
                type="password"
                placeholder="Enter password"
              />
            </label>
          </div>
          <ButtonElement name="Log in" type="contained" />
          <a href="#">Forgot password?</a>
        </form>
      </div>
    </div>
  );
};
