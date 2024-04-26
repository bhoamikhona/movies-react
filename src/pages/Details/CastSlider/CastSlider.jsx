import React from "react";
import "./CastSlider.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CastCard from "./CastCard/CastCard.jsx";

function CastSlider({ cast }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 15,
    },
    largeDesktop: {
      breakpoint: { max: 3000, min: 2000 },
      items: 10,
    },
    desktop: {
      breakpoint: { max: 2000, min: 1500 },
      items: 8,
    },
    largeTablet: {
      breakpoint: { max: 1500, min: 1000 },
      items: 7,
    },
    tablet: {
      breakpoint: { max: 1000, min: 700 },
      items: 4,
    },
    smallTablet: {
      breakpoint: { max: 700, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <div className="cast-slider">
      <h3 className="cast-slider__title">Cast</h3>
      <Carousel responsive={responsive}>
        {cast?.map(({ character, id, name, profile_path }) => (
          <CastCard
            key={id}
            character={character}
            name={name}
            headshot={profile_path}
          />
        ))}
      </Carousel>
    </div>
  );
}

export default CastSlider;
