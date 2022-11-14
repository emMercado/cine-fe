import React, { useState } from "react";
import MaterialTable from "@material-table/core";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
import TabPanel from "../../../Shared/components/TabPanel";
import { Button } from "@material-ui/core";
import { ModalMovieFormUI } from "../modals/ModalMovieFormUI";
import { tableIcons } from "../../../Shared/components/tableIcons";

export const MoviesTab = (props) => {
  const {
    tabSelected,
    handleOpenModal,
    handleModalClose,
    open,
    onClose,
    genresAvilable,
    protagonistsAvilable,
    languagesAvilable,
    handleCreateMovie,
    handleUpdateMovie,
    handleDeleteMovie,
    moviesAvilable,
    setMoviesAvilable,
    populate,
    selectedValue,
  } = props;
  const col = [
    { title: "Title", field: "title" },
    { title: "Duracion min", field: `duration` },
  ];

  const handleClickDeleteMovie = async (movieId) => {
    await handleDeleteMovie(movieId);
    populate();
    return;
  };

  return (
    <TabPanel value={tabSelected} index={0} id="user-info">
      <Button
        variant="contained"
        disableElevation
        style={{
          marginRight: 10,
          backgroundColor: "#70a954",
          color: "#fff",
        }}
        onClick={() => handleOpenModal()}
      >
        Nueva Pelicula
      </Button>
      <MaterialTable
        title={"Movies"}
        icons={tableIcons}
        columns={col}
        data={moviesAvilable}
        options={{
          actionsColumnIndex: -1,
          emptyRowsWhenPaging: false,
          headerStyle: { fontSize: 15 },
          rowStyle: { fontSize: 15 },
          sorting: true,
          thirdSortClick: false,
          paginationType: "stepper",
          pageSizeOptions: [10, 25, 50, 100, 250, 500],
          showTitle: true,
          search: true,
          showEmptyDataSourceMessage: false,
        }}
        actions={[
          {
            icon: Edit,
            tooltip: "Edit movie",
            onClick: (event, rowData) => {
              handleOpenModal(rowData);
            },
          },
          {
            icon: Delete,
            tooltip: "Delete movie",
            onClick: (event, rowData) => {
              handleClickDeleteMovie(rowData._id);
            },
          },
        ]}
      />
      <ModalMovieFormUI
        open={open}
        onClose={onClose}
        handleModalClose={handleModalClose}
        genresAvilable={genresAvilable}
        protagonistsAvilable={protagonistsAvilable}
        selectedValue={selectedValue}
        languagesAvilable={languagesAvilable}
        handleCreateMovie={handleCreateMovie}
        handleUpdateMovie={handleUpdateMovie}
        handleDeleteMovie={handleDeleteMovie}
        populate={populate}
      />
    </TabPanel>
  );
};
