import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import noPoster from "../../assets/no-poster.png";

function Card({ poster, id, title, overview }) {
  return (
    <Link className="card__link" to={`/movie/${id}`}>
      <div className="card">
        <div className="card__img-container">
          <img
            src={
              poster ? `https://image.tmdb.org/t/p/original${poster}` : noPoster
            }
            alt=""
            className="card__img"
          />
        </div>
        <div className="card__info-container">
          <div className="card__info">
            <h3 className="card__title">
              {title.length > 23 ? `${title.substring(0, 20)}...` : title}
            </h3>
            <p className="card__overview">{`${overview.substring(
              0,
              100
            )}...`}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
