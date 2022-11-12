import React, { useEffect, useState } from "react";
import MaterialTable from "@material-table/core";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
import TabPanel from "../../../Shared/components/TabPanel";
import { Button } from "@material-ui/core";
import { ModalGenreFormUI } from "../modals/ModalGenreFormUI";

export const GenresTab = (props) => {
  const {
    open,
    onClose,
    selectedValue,
    selectedMovie,
    handleModalClose,
    tabSelected,
    genres,
    handleOpenModal,
    handleGetGenres,
  } = props;
  const col = [{ title: "Title", field: "name" }];

  const [genresAvilable, setGenresAvilable] = useState([]);

  useEffect(() => {
    populate();
  }, []);

  const populate = async () => {
    const {data} = await handleGetGenres();
    setGenresAvilable(data);
  };

  return (
    <TabPanel value={tabSelected} index={1} id="user-info">
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
        Nuevo genero
      </Button>
      <MaterialTable
        title={"Generos"}
        columns={col}
        data={genresAvilable}
        options={{
          actionsColumnIndex: -1,
          emptyRowsWhenPaging: false,
          headerStyle: { fontSize: 15 },
          rowStyle: { fontSize: 15 },
          sorting: true,
          thirdSortClick: false,
          paginationType: "stepper",
          pageSizeOptions: [10, 25],
          showTitle: true,
          search: true,
          showEmptyDataSourceMessage: false,
        }}
        actions={[
          {
            icon: Edit,
            //disabled: !fullAccess,
            tooltip: "Edit genre",
            onClick: (event, rowData) => {
              //  handleClickEditGroup(rowData);
            },
          },
          {
            icon: Delete,
            tooltip: "Delete genre",
            onClick: (event, rowData) => alert("Delete genre " + rowData.name),
          },
        ]}
      />
      <ModalGenreFormUI
        open={open}
        onClose={onClose}
        handleModalClose={handleModalClose}
      />
    </TabPanel>
  );
};
