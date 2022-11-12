import React from "react";
import MaterialTable from "@material-table/core";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
import TabPanel from "../../../Shared/components/TabPanel";
import { Button } from "@material-ui/core";
import { ModalMovieManagerUI } from "../modals/ModalMovieManagerUI";

export const MoviesTab = (props) => {
  const {
    tabSelected,
    movies,
    handleOpenModal,
    handleModalClose,
    open,
    onClose,
  } = props;
  const col = [
    { title: "Title", field: "title" },
    /* { title: "username", field: "username" },
    { title: "Role", field: "role" }, */
  ];
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
        New Movie
      </Button>
      <MaterialTable
        title={"Movies"}
        columns={col}
        data={movies}
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
            //disabled: !fullAccess,
            tooltip: "Edit movie",
            onClick: (event, rowData) => {
              //  handleClickEditGroup(rowData);
            },
          },
          {
            icon: Delete,
            tooltip: "Delete movie",
            onClick: (event, rowData) => alert("Delete movie " + rowData.name),
          },
        ]}
      />
      <ModalMovieManagerUI
        open={open}
        onClose={onClose}
        handleModalClose={handleModalClose}
      />
    </TabPanel>
  );
};
