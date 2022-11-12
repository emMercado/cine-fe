import React from "react";
import { ModalGenreFormUI } from "../components/modals/ModalGenreFormUI";
import axios from "axios";
import { GenresTab } from "../components/tabs/GenresTab";

export const GenreManagerPage = (props) => {
  const { tabSelected, genres, handleOpenModal, open, onClose } = props;

  const handleGetGenres = async () => {
    const { data } = await axios.get(`http://localhost:3001/api/genre`);
    return data;
  };

  return (
    <GenresTab
      tabSelected={tabSelected}
      genres={genres}
      handleOpenModal={handleOpenModal}
      open={open}
      onClose={onClose}
      handleGetGenres={handleGetGenres}
    />
  );
};