import React, { createContext, useState, useEffect } from "react";
import { fetchDataFromApi } from "../services/movieApi.js";

export const MovieContext = createContext();

export const MovieProvider = function ({ children }) {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPopularMovies = async function () {
    try {
      setIsLoading(true);
      const data = await fetchDataFromApi("/movie/popular");
      setMovies(data.results);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
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
    fetchPopularMovies();
  }, []);

  const value = {
    movies,
    selectedMovie,
    recommendations,
    isLoading,
    error,
    searchMovies,
    fetchPopularMovies,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
