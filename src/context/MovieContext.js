import React, { createContext, useState, useEffect } from "react";
import { fetchDataFromApi } from "../services/movieApi.js";

export const MovieContext = createContext();

export const MovieProvider = function ({ children }) {
  const [movies, setMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [movieCredits, setMovieCredits] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [similar, setSimilar] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovies = async function (type) {
    try {
      setIsLoading(true);
      const data = await fetchDataFromApi(`/movie/${type}`);

      if (type === "popular") setPopularMovies(data.results);
      else if (type === "upcoming") setUpcomingMovies(data.results);
      else if (type === "top_rated") setTopRatedMovies(data.results);
    } catch (error) {
      setError(true);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const searchMovies = async function (query) {
    try {
      setIsLoading(true);
      const data = await fetchDataFromApi("/search/movie", { query });
      setMovies(data.results);
    } catch (error) {
      setError(true);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchMovieData = async function (id) {
    try {
      setIsLoading(true);
      const data = await fetchDataFromApi(
        `/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`
      );
      const credits = await fetchDataFromApi(
        `/movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}`
      );

      const recommends = await fetchDataFromApi(
        `/movie/${id}/recommendations?api_key=${process.env.REACT_APP_API_KEY}`
      );

      const simi = await fetchDataFromApi(
        `/movie/${id}/similar?api_key=${process.env.REACT_APP_API_KEY}`
      );

      setSelectedMovie(data);
      setMovieCredits(credits);
      setRecommendations(recommends.results);
      setSimilar(simi.results);
    } catch (error) {
      setError(true);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies("popular");
    fetchMovies("upcoming");
    fetchMovies("top_rated");
  }, []);

  const value = {
    movies,
    popularMovies,
    topRatedMovies,
    upcomingMovies,
    selectedMovie,
    setSelectedMovie,
    recommendations,
    similar,
    isLoading,
    error,
    searchMovies,
    fetchMovies,
    fetchMovieData,
    movieCredits,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
