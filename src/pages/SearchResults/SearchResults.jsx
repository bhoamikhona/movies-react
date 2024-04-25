import React, { useContext, useEffect } from "react";
import "./SearchResults.css";
import { MovieContext } from "../../context/MovieContext.js";
import { useParams } from "react-router-dom";
import { Grid } from "react-loader-spinner";
import Card from "../../components/Card/Card.jsx";
import NotFound from "../../components/NotFound/NotFound.jsx";

function SearchResults() {
  const { query } = useParams();
  const { searchMovies, movies, isLoading } = useContext(MovieContext);

  useEffect(() => {
    if (query) {
      searchMovies(query);
    }
  }, [query]);

  console.log("search results - movies:", movies);

  return (
    <div>
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
      ) : movies.length ? (
        <main className="search__main">
          <h1 className="search__title">Search Results</h1>
          <div className="search__cards-container">
            {movies?.map(({ poster_path, id, title, overview }) => (
              <Card
                key={id}
                poster={poster_path}
                id={id}
                title={title}
                overview={overview}
              />
            ))}
          </div>
        </main>
      ) : (
        <NotFound />
      )}
    </div>
  );
}

export default SearchResults;
