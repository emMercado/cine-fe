import axios from "axios";
import React from "react";
import MoviesManagerUI from "../components/MoviesManagerUI";

const MoviesManagerPage = () => {
  const handleGetProtagonists = async () => {
    const { data } = await axios.get(`http://localhost:3001/api/protagonist`);
    return data;
  };

  const handleGetLanguages = async () => {
    const { data } = await axios.get(`http://localhost:3001/api/language`);
    return data;
  };

  const handleGetGenres = async () => {
    const { data } = await axios.get(`http://localhost:3001/api/genre`);
    return data;
  };

  /* const handleGetMovies = async () => {
    const { data } = await axios.get(`http://localhost:3001/api/genre`);
    return data;
  }; */

  /*  const getMovies = async () => {
         return get('/api/movies')
     }
  */
  return (
    <MoviesManagerUI
      handleGetProtagonists={handleGetProtagonists}
      handleGetLanguages={handleGetLanguages}
      handleGetGenres={handleGetGenres}
    />
  );
};

export default MoviesManagerPage;
