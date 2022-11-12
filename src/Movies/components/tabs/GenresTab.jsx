import React, { useEffect, useRef, useState } from "react";
import MaterialTable, {
  MTableAction,
  MTableToolbar,
} from "@material-table/core";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
import TabPanel from "../../../Shared/components/TabPanel";
import { Button, Paper } from "@material-ui/core";
import { tableIcons } from "../../../Shared/components/tableIcons";

export const GenresTab = (props) => {
  const {
    tabSelected,
    handleGetGenres,
    handlePostGenre,
    handleUpdateGenre,
    handleDeleteGenre,
  } = props;
  const [genresAvilable, setGenresAvilable] = useState([]);

  const col = [{ title: "Title", field: "name" }];

  useEffect(() => {
    populate();
  }, []);

  const populate = async () => {
    const { data } = await handleGetGenres();
    setGenresAvilable(data);
  };

  const handleSubmit = async (body) => {
    try {
      if (body._id) {
        await handleUpdateGenre(body, body._id);
        populate();
        return;
      }
      return await handlePostGenre(body);
    } catch (error) {
      console.error(error);
    }
  };

  const addActionRef = useRef();

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
        onClick={() => addActionRef.current.click()}
      >
        Nuevo genero
      </Button>
      <MaterialTable
        title={"Generos"}
        columns={col}
        data={genresAvilable}
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
              setGenresAvilable([...genresAvilable, newData]);
              handleSubmit(newData);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
              resolve();
              handleSubmit(newData);
            }),
          onRowDelete: (oldData) =>
            new Promise(async (resolve) => {
              const genre = await handleDeleteGenre(oldData._id);
              if (genre) {
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
