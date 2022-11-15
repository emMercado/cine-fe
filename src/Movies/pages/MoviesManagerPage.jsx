import axios from "axios";
import React from "react";
import MoviesManagerUI from "../components/MoviesManagerUI";

const MoviesManagerPage = () => {
  const handleGetMovies = async () => {
    const { data } = await axios.get(`http://localhost:3001/api/movie`);
    return data;
  };

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

  const handleCreateMovie = async (body) => {
    const data = await axios.post(`http://localhost:3001/api/movie/registerMovie`, body);
    return data;
  };

  const handleUpdateMovie = async (body, id) => {
    const data = await axios.put(`http://localhost:3001/api/movie/${id}`, body);
    return data;
  };

  const handleDeleteMovie = async (id) => {
    const data = await axios.delete(`http://localhost:3001/api/movie/${id}`);
    return data;
  };

  return (
    <MoviesManagerUI
      handleGetMovies={handleGetMovies}
      handleGetProtagonists={handleGetProtagonists}
      handleGetLanguages={handleGetLanguages}
      handleGetGenres={handleGetGenres}
      handleCreateMovie={handleCreateMovie}
      handleUpdateMovie={handleUpdateMovie}
      handleDeleteMovie={handleDeleteMovie}
    />
  );
};

export default MoviesManagerPage;
