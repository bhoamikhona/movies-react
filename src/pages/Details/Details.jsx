import React, { useContext, useEffect } from "react";
import "./Details.css";
import { Link, useParams } from "react-router-dom";
import { MovieContext } from "../../context/MovieContext.js";
import { Grid } from "react-loader-spinner";
import CastSlider from "./CastSlider/CastSlider.jsx";
import Slider from "../../components/Slider/Slider.jsx";

function Details() {
  const { id } = useParams();
  console.log(id);
  const {
    fetchMovieData,
    selectedMovie,
    movieCredits,
    recommendations,
    similar,
    isLoading,
  } = useContext(MovieContext);

  useEffect(() => {
    fetchMovieData(id);
  }, [id]);

  console.log(selectedMovie);
  console.log(movieCredits);
  console.log(recommendations);

  // const handleScroll = function () {
  //   const section = document.getElementById("info");

  //   if (section) section.scrollIntoView({ behavior: "smooth" });
  // };

  // const data = use
  return isLoading ? (
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
    <section className="details">
      <div className="details__img-container">
        <img
          src={`https://image.tmdb.org/t/p/original${selectedMovie?.backdrop_path}`}
          alt={selectedMovie?.title}
          className="details__img"
        />

        <div className="details__banner-info">
          <h2 className="details__title">{selectedMovie?.title}</h2>
          <p className="details__overview">
            {selectedMovie?.overview.length > 200
              ? `${selectedMovie?.overview.substring(0, 200)}...`
              : selectedMovie?.overview}
          </p>
          {/* <button id="more" className="primary__btn" onClick={handleScroll}>
            More &nbsp; &#x2193;
          </button> */}
        </div>
      </div>

      <div id="info" className="details__info-container">
        <div className="details__poster-container">
          <img
            src={`https://image.tmdb.org/t/p/original${selectedMovie?.poster_path}`}
            alt=""
            className="details__poster"
          />
        </div>

        <div className="details__info">
          <h2 className="details__title">{selectedMovie?.title}</h2>
          <h3 className="details__tagline">{selectedMovie?.tagline}</h3>
          <p className="details__overview">{selectedMovie?.overview}</p>

          <ul className="details__info-table">
            <li className="table__row">
              <span className="table__heading">Adult: </span>
              <span className="table__value">
                {selectedMovie?.adult ? "Yes" : "No"}
              </span>
            </li>
            <li className="table__row">
              <span className="table__heading">Budget: </span>
              <span className="table__value">
                ${Intl.NumberFormat().format(selectedMovie?.budget)}
              </span>
            </li>
            <li className="table__row">
              <span className="table__heading">Country: </span>
              <span className="table__value">
                {selectedMovie?.origin_country}
              </span>
            </li>
            <li className="table__row">
              <span className="table__heading">Production Companies: </span>
              <span className="table__value">
                {selectedMovie?.production_companies.map((company) => (
                  <span>
                    {company.name}
                    {selectedMovie?.production_companies.length > 1 ? ", " : ""}
                  </span>
                ))}
              </span>
            </li>
            <li className="table__row">
              <span className="table__heading">Production Countries: </span>
              <span className="table__value">
                {selectedMovie?.production_countries.map((country) => (
                  <span>
                    {country.name}
                    {selectedMovie?.production_countries.length > 1 ? ", " : ""}
                  </span>
                ))}
              </span>
            </li>
            <li className="table__row">
              <span className="table__heading">Release Year: </span>
              <span className="table__value">
                {new Date(selectedMovie?.release_date).getFullYear()}
              </span>
            </li>
            <li className="table__row">
              <span className="table__heading">Revenue: </span>
              <span className="table__value">
                ${Intl.NumberFormat().format(selectedMovie?.revenue)}
              </span>
            </li>
            <li className="table__row">
              <span className="table__heading">Runtime: </span>
              <span className="table__value">
                {selectedMovie?.runtime} mins
              </span>
            </li>
            <li className="table__row">
              <span className="table__heading">Languages: </span>
              <span className="table__value">
                {selectedMovie?.spoken_languages.map((lang) => (
                  <span>
                    {lang.name}
                    {selectedMovie?.spoken_languages.length > 1 ? ", " : ""}
                  </span>
                ))}
              </span>
            </li>

            <li className="table__row">
              <span className="table__heading">Status: </span>
              <span className="table__value">{selectedMovie?.status}</span>
            </li>
            <li className="table__row">
              <span className="table__heading">Rating: </span>
              <span className="table__value">
                {Number(selectedMovie?.vote_average).toFixed(2)}/10
              </span>
            </li>
          </ul>
          <div className="details__genres">
            {selectedMovie?.genres?.map(({ name, id }) => (
              <span className="details__genre" key={id}>
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="details__cast-slider">
        {movieCredits?.cast && <CastSlider cast={movieCredits.cast} />}
      </div>
      <Slider movies={recommendations} title="Recommendations" />
      <Slider movies={similar} title="Similar" />
    </section>
  );
}

export default Details;
