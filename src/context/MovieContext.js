import React, { createContext, useState, useEffect } from "react";
import { fetchDataFromApi } from "../services/movieApi.js";

export const MovieContext = createContext();

export const MovieProvider = function ({ children }) {
  const [movies, setMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovies = async function (type) {
    try {
      setIsLoading(true);
      const data = await fetchDataFromApi(`/movie/${type}`);
      setIsLoading(false);

      if (type === "popular") setPopularMovies(data.results);
      else if (type === "upcoming") setUpcomingMovies(data.results);
      else if (type === "top_rated") setTopRatedMovies(data.results);

      // return data.results;
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
      // return error;
    }
  };

  const searchMovies = async function (query) {
    try {
      setIsLoading(true);
      const data = await fetchDataFromApi("/search/movie", { query });
      setMovies(data.results);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
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
    setRecommendations,
    isLoading,
    error,
    searchMovies,
    fetchMovies,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
