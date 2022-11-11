import React from "react";
import MaterialTable from "@material-table/core";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
import TabPanel from "../../../Shared/components/TabPanel";

export const GenresTab = (props) => {
  const { tabSelected, genres } = props;
  const col = [
    { title: "Title", field: "title" },
    /* { title: "username", field: "username" },
    { title: "Role", field: "role" }, */
  ];
  return (
    <TabPanel value={tabSelected} index={1} id="user-info">
      <MaterialTable
        title={"Genres"}
        columns={col}
        data={genres}
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
    </TabPanel>
  );
};
