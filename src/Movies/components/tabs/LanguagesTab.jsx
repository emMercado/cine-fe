import React from "react";
import MaterialTable from "@material-table/core";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
import TabPanel from "../../../Shared/components/TabPanel";
import { Button } from "@material-ui/core";
import { ModalLanguagesFormUI } from "../modals/ModalLanguagesFormUI";

export const LanguagesTab = (props) => {
  const {
    open,
    tabSelected,
    languages,
    handleOpenModal,
    onClose,
    handleModalClose,
  } = props;
  const col = [
    { title: "Title", field: "title" },
    /* { title: "username", field: "username" },
    { title: "Role", field: "role" }, */
  ];
  return (
    <TabPanel value={tabSelected} index={3} id="user-info">
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
        title={"Languages"}
        columns={col}
        data={languages}
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
            tooltip: "Edit language",
            onClick: (event, rowData) => {
              //  handleClickEditGroup(rowData);
            },
          },
          {
            icon: Delete,
            tooltip: "Delete language",
            onClick: (event, rowData) =>
              alert("Delete language " + rowData.name),
          },
        ]}
      />
      <ModalLanguagesFormUI
        open={open}
        onClose={onClose}
        handleModalClose={handleModalClose}
      />
    </TabPanel>
  );
};
