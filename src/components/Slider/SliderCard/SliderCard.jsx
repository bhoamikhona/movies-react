import React from "react";
import "./SliderCard.css";
import { Link } from "react-router-dom";

function SliderCard({ poster, id, title, overview }) {
  return (
    <Link className="slider-card__link" to={`/movie/${id}`}>
      <div className="slider-card">
        <div className="slider-card__img-container">
          <img
            src={`https://image.tmdb.org/t/p/original${poster}`}
            alt=""
            className="slider-card__img"
          />
        </div>
        <div className="silder-card__info-container">
          <div className="slider-card__info">
            <h3 className="slider-card__title">
              {title.length > 23 ? `${title.substring(0, 20)}...` : title}
            </h3>
            <p className="slider-card__overview">{`${overview.substring(
              0,
              100
            )}...`}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default SliderCard;
