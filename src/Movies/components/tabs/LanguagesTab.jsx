import React, { useRef } from "react";
import MaterialTable, {
  MTableAction,
  MTableToolbar,
} from "@material-table/core";
import TabPanel from "../../../Shared/components/TabPanel";
import { Button, Paper } from "@material-ui/core";
import { tableIcons } from "../../../Shared/components/tableIcons";

export const LanguagesTab = (props) => {
  const {
    tabSelected,
    languagesAvilable,
    setLanguagesAvilable,
    populate,
    handleCreateLanguage,
    handleUpdateLanguage,
    handleDeleteLanguage,
  } = props;

  const col = [{ title: "Idiomas", field: "name" }];

  const handleSubmit = async (body) => {
    try {
      if (body._id) {
        await handleUpdateLanguage(body, body._id);
        populate();
        return;
      }
      return await handleCreateLanguage(body);
    } catch (error) {
      console.error(error);
    }
  };

  const addActionRef = useRef();

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
        onClick={() => addActionRef.current.click()}
      >
        Nuevo Idioma
      </Button>
      <MaterialTable
        title={"Languages"}
        columns={col}
        data={languagesAvilable}
        icons={tableIcons}
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
          addRowPosition: "first",
          actionColumnIndex: -1,
        }}
        editable={{
          /* isEditable: (rowData) => rowData, */
          onRowAdd: (newData) =>
            new Promise((resolve) => {
              resolve();
              setLanguagesAvilable([...languagesAvilable, newData]);
              handleSubmit(newData);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
              resolve();
              handleSubmit(newData);
            }),
          onRowDelete: (oldData) =>
            new Promise(async (resolve) => {
              const language = await handleDeleteLanguage(oldData._id);
              if (language) {
                populate();
              }
              resolve();
            }),
        }}
        components={{
          Container: (props) => (
            <Paper {...props} variant="outlined" elevation={1} />
          ),
          Toolbar: (props) => (
            <div style={{ height: "0px" }}>
              <MTableToolbar {...props} />
            </div>
          ),
          Action: (props) => {
            if (
              typeof props.action === typeof Function ||
              props.action.tooltip !== "Add"
            ) {
              return <MTableAction {...props} />;
            }
            return <div ref={addActionRef} onClick={props.action.onClick} />;
          },
        }}
      />
    </TabPanel>
  );
};
