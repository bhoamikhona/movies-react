import React from "react";
import "./NotFound.css";
import noResults from "../../assets/no-results.png";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="no-results">
      <div className="no-results__img-container">
        <img src={noResults} alt="no results" className="no-results__img" />
      </div>
      <div className="no-results__info-container">
        <h1 className="no-results__title">Sorry Pal,</h1>
        <p className="no-results__para">
          No such movie to watch, try searching something else or head over to
          Google for more info.
        </p>
        <Link to="/" className="primary__btn">
          Home &#x27F6;
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
