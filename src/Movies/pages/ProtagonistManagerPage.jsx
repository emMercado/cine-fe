import React from "react";
import axios from "axios";
import { ProtagonistsTab } from "../components/tabs/ProtagonistsTab";

export const ProtagonistManagerPage = (props) => {
  const { tabSelected, handleOpenModal, open, onClose } = props;

  const handleGetGenres = async () => {
    const { data } = await axios.get(`http://localhost:3001/api/genre`);
    return data;
  };

  return (
    <ProtagonistsTab
      tabSelected={tabSelected}
      handleOpenModal={handleOpenModal}
      open={open}
      onClose={onClose}
      handleGetGenres={handleGetGenres}
    />
  );
};
