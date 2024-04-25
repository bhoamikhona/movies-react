import React, { useContext } from "react";
import "./Home.css";
import Banner from "./Banner/Banner.jsx";
import { MovieContext } from "../../context/MovieContext.js";
import { Grid } from "react-loader-spinner";
import Slider from "../../components/Slider/Slider.jsx";

function Home() {
  const {
    movies: [firstMovie, ...restMovies],
    isLoading,
  } = useContext(MovieContext);
  console.log(firstMovie, restMovies);
  return (
    <main className="main">
      {isLoading ? (
        <Grid
          visible={true}
          height="80"
          width="80"
          color="#ff1919"
          ariaLabel="grid-loading"
          radius="12.5"
          wrapperStyle={{}}
          wrapperClass="grid-wrapper"
        />
      ) : (
        <div>
          <Banner movie={firstMovie} />
          <Slider movies={restMovies} title="Popular" />
        </div>
      )}
    </main>
  );
}

export default Home;
