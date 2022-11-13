import React from "react";
import axios from "axios";
import { ProtagonistsTab } from "../components/tabs/ProtagonistsTab";

export const ProtagonistManagerPage = (props) => {
  const {
    tabSelected,
    protagonistsAvilable,
    setProtagonistsAvilable,
    populate,
  } = props;

  const handleCreateProtagonist = async (body) => {
    const data = await axios.post(
      `http://localhost:3001/api/protagonist/registerProtagonist`,
      body
    );
    return data;
  };

  const handleUpdateProtagonist = async (body, id) => {
    const data = await axios.put(
      `http://localhost:3001/api/protagonist/${id}`,
      body
    );
    return data;
  };

  const handleDeleteProtagonist = async (id) => {
    const data = await axios.delete(
      `http://localhost:3001/api/protagonist/${id}`
    );
    return data;
  };
  return (
    <ProtagonistsTab
      tabSelected={tabSelected}
      protagonistsAvilable={protagonistsAvilable}
      setProtagonistsAvilable={setProtagonistsAvilable}
      populate={populate}
      handleCreateProtagonist={handleCreateProtagonist}
      handleUpdateProtagonist={handleUpdateProtagonist}
      handleDeleteProtagonist={handleDeleteProtagonist}
    />
  );
};
