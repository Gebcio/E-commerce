import React from "react";
import searchIcon from "../../assets/searchIcon.svg";

export const SearchBar = () => {
  return (
    <div className="searchbar">
      <input type="text" className="searchbar__input" placeholder="Search" />
      <img src={searchIcon} alt="search icon" className="searchbar__icon" />
    </div>
  );
};
