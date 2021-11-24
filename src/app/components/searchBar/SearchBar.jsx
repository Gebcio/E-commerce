import React from "react";
import searchIcon from "../../assets/searchIcon.svg";

export const SearchBar = ({ onSearchBarChange }) => {
  const onChange = (event) => {
    onSearchBarChange(event.target.value);
  };

  return (
    <div className="searchbar">
      <input
        type="text"
        className="searchbar__input"
        placeholder="Search"
        onChange={onChange}
      />
      <img src={searchIcon} alt="search icon" className="searchbar__icon" />
    </div>
  );
};
