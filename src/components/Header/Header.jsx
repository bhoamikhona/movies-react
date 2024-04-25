import React from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";

function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__left">
          <div className="header__logo-container">
            <img
              src={logo}
              alt="popcorn - movie time"
              className="header__logo-img"
            />
          </div>
        </div>

        <div className="header__right">
          <form className="header__form">
            <input
              className="header__form-input"
              type="text"
              placeholder="Search..."
            />
            <button className="header__form-btn">
              <SearchIcon />
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}

export default Header;
