import React from "react";
import "./Slider.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../Card/Card.jsx";

function Slider({ movies, title }) {
  if (!Array.isArray(movies) || movies.length === 0) {
    return null;
  }

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 9,
    },
    largeDesktop: {
      breakpoint: { max: 3000, min: 2000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 2000, min: 1500 },
      items: 5,
    },
    largeTablet: {
      breakpoint: { max: 1500, min: 1000 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1000, min: 700 },
      items: 3,
    },
    smallTablet: {
      breakpoint: { max: 700, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="carousel__container">
      <h2 className="carousel__title">{title}</h2>

      <Carousel responsive={responsive}>
        {movies?.map(({ poster_path, id, title, overview }) => (
          <Card
            key={id}
            poster={poster_path}
            id={id}
            title={title}
            overview={overview}
          />
        ))}
      </Carousel>
    </div>
  );
}

export default Slider;
