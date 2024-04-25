import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useNavigate();

  const handleSearch = function (e) {
    e.preventDefault();
    setSearchQuery("");
    router(`/search/${searchQuery}`);
  };

  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__left">
          <Link to="/">
            <div className="header__logo-container">
              <img
                src={logo}
                alt="popcorn - movie time"
                className="header__logo-img"
              />
            </div>
          </Link>
        </div>

        <div className="header__right" onSubmit={handleSearch}>
          <form className="header__form">
            <input
              className="header__form-input"
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
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
