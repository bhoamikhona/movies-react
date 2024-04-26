import "./Banner.css";
import { Link } from "react-router-dom";

function Banner({ movie }) {
  // const { backdrop_path, id, title, overview } = movie;

  if (!movie || movie.length === 0) {
    return null;
  }

  return (
    <div className="banner">
      <div className="banner__img-container">
        <img
          src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
          alt={`${movie?.title} backdrop`}
          className="banner__img"
        />
      </div>
      <div className="banner__info-container">
        <h1 className="banner__title">{movie?.title}</h1>
        <p className="banner__overview">{movie?.overview}</p>
        <Link className="primary__btn" to={`/movie/${movie?.id}`}>
          More &#x27F6;
        </Link>
      </div>
    </div>
  );
}

export default Banner;
