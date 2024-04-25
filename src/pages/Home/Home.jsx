import React, { useContext } from "react";
import "./Home.css";
import Banner from "./Banner/Banner.jsx";
import { MovieContext } from "../../context/MovieContext.js";
import { Grid } from "react-loader-spinner";
import Carousel from "../../components/Carousel/Carousel.jsx";

function Home() {
  const {
    movies: [firstMovie, ...restMovies],
    isLoading,
  } = useContext(MovieContext);
  console.log(firstMovie, restMovies);
  return (
    <main className="main">
      {isLoading ? (
        <Grid />
      ) : (
        <div>
          <Banner movie={firstMovie} />
          <Carousel movies={restMovies} />
        </div>
      )}
    </main>
  );
}

export default Home;
