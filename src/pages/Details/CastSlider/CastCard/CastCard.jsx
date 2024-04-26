import React from "react";
import "./CastCard.css";
import avatar from "../../../../assets/avatar.png";

function CastCard({ headshot, name, character }) {
  return (
    <div className="cast__card">
      <div className="cast__img-container">
        <img
          src={
            headshot ? `https://image.tmdb.org/t/p/original${headshot}` : avatar
          }
          alt={`${name} headshot`}
          className="cast__img"
        />
      </div>
      <div className="cast__info-container">
        <h4 className="cast__name">{name}</h4>
        <h5 className="cast__character">{character}</h5>
      </div>
    </div>
  );
}

export default CastCard;
