import React, { useState, useEffect } from "react";
import "./App.css";
import { fetchDataFromApi } from "./utils/api.js";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice.js";

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);

  const apiTesting = function () {
    fetchDataFromApi("/movie/popular").then((res) => {
      console.log(res);
      dispatch(getApiConfiguration(res));
    });
  };

  useEffect(() => {
    apiTesting();
  }, []);

  return <div className="app">{url?.total_pages}</div>;
}

export default App;
