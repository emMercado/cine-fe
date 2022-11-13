import React from "react";
import axios from "axios";
import { GenresTab } from "../components/tabs/GenresTab";

export const GenreManagerPage = (props) => {
  const { tabSelected, genresAvilable, setGenresAvilable, populate } = props;

  const handleCreateGenre = async (body) => {
    const data = await axios.post(
      `http://localhost:3001/api/genre/registerGenre`,
      body
    );
    return data;
  };

  const handleUpdateGenre = async (body, id) => {
    const data = await axios.put(`http://localhost:3001/api/genre/${id}`, body);
    return data;
  };

  const handleDeleteGenre = async (id) => {
    const data = await axios.delete(`http://localhost:3001/api/genre/${id}`);
    return data;
  };

  return (
    <GenresTab
      tabSelected={tabSelected}
      genresAvilable={genresAvilable}
      setGenresAvilable={setGenresAvilable}
      populate={populate}
      handleCreateGenre={handleCreateGenre}
      handleUpdateGenre={handleUpdateGenre}
      handleDeleteGenre={handleDeleteGenre}
    />
  );
};
