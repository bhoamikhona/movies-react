import React, { useContext } from "react";
import "./Home.css";
import Banner from "../../components/Banner/Banner.jsx";
import { MovieContext } from "../../context/MovieContext.js";
import { Grid } from "react-loader-spinner";
import Slider from "../../components/Slider/Slider.jsx";

function Home() {
  const {
    popularMovies: [firstPopularMovie, ...restPopularMovies],
    upcomingMovies,
    topRatedMovies,
    isLoading,
    error,
  } = useContext(MovieContext);

  return (
    <main className="main">
      {isLoading ? (
        <span className="loader">
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
        </span>
      ) : (
        <div>
          <Banner movie={firstPopularMovie} />
          <Slider movies={restPopularMovies} title="Popular" />
          <Slider movies={upcomingMovies} title="Upcoming" />
          <Slider movies={topRatedMovies} title="Top Rated" />
        </div>
      )}
    </main>
  );
}

export default Home;
