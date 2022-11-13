import React from "react";
import axios from "axios";
import { LanguagesTab } from "../components/tabs/LanguagesTab";

export const LanguageManagerPage = (props) => {
  const { tabSelected, languagesAvilable, setLanguagesAvilable, populate } =
    props;

  const handleCreateLanguage = async (body) => {
    const data = await axios.post(
      `http://localhost:3001/api/language/registerLanguage`,
      body
    );
    return data;
  };

  const handleUpdateLanguage = async (body, id) => {
    const data = await axios.put(
      `http://localhost:3001/api/language/${id}`,
      body
    );
    return data;
  };

  const handleDeleteLanguage = async (id) => {
    const data = await axios.delete(`http://localhost:3001/api/language/${id}`);
    return data;
  };

  return (
    <LanguagesTab
      tabSelected={tabSelected}
      languagesAvilable={languagesAvilable}
      setLanguagesAvilable={setLanguagesAvilable}
      populate={populate}
      handleCreateLanguage={handleCreateLanguage}
      handleUpdateLanguage={handleUpdateLanguage}
      handleDeleteLanguage={handleDeleteLanguage}
    />
  );
};
