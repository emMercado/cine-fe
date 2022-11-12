import React from "react";
import axios from "axios";
import { LanguagesTab } from "../components/tabs/LanguagesTab";

export const LanguageManagerPage = (props) => {
  const { tabSelected, handleOpenModal, open, onClose } = props;

  const handleGetGenres = async () => {
    const { data } = await axios.get(`http://localhost:3001/api/genre`);
    return data;
  };

  return (
    <LanguagesTab
      tabSelected={tabSelected}
      handleOpenModal={handleOpenModal}
      open={open}
      onClose={onClose}
      handleGetGenres={handleGetGenres}
    />
  );
};
