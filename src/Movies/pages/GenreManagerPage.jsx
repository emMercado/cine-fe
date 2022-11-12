import React from "react";
import { ModalGenreFormUI } from "../components/modals/ModalGenreFormUI";

export const GenreManagerPage = (props) => {
  const { open, onClose, handleModalClose } = props;
  return (
    <ModalGenreFormUI
      open={open}
      onClose={onClose}
      handleModalClose={handleModalClose}
    />
  );
};
