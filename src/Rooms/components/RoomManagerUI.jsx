import MaterialTable, {
  MTableAction,
  MTableToolbar,
} from "@material-table/core";
import { Button, Paper, Grid } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import { tableIcons } from "../../Shared/components/tableIcons";

const RoomManagerUI = (props) => {
  const {
    handleCreateRoom,
    handleGetRooms,
    handleUpdateRoom,
    handleDeleteRoom,
  } = props;

  const [roomsAvilable, setRoomsAvilable] = useState([]);

  const col = [{ title: "Salas", field: "number" }];

  useEffect(() => {
    populate();
  }, []);

  const populate = async () => {
    const { data } = await handleGetRooms();
    setRoomsAvilable(data);
  };

  const handleSubmit = async (body) => {
    try {
      if (body._id) {
        await handleUpdateRoom(body, body._id);
        populate();
        return;
      }
      await handleCreateRoom(body);
    } catch (error) {
      console.error(error);
    } finally {
      populate();
    }
  };

  const handleClickDeleteRoom = async (id) => {
    try {
      await handleDeleteRoom(id);
      populate();
    } catch (error) {
      console.error(error);
    }
  };

  const addActionRef = useRef();

  return (
    <>
      <Grid xs={12} spacing={10} style={{padding: '30px'}}>    
          <Button
            variant="contained"
            disableElevation
            style={{
              marginBottom: 20,
              backgroundColor: "#70a954",
              color: "#fff",
            }}
            onClick={() => addActionRef.current.click()}
          >
            Nueva Sala
          </Button>
          <MaterialTable
            title={"Salas"}
            columns={col}
            data={roomsAvilable}
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
              onRowAdd: (newData) =>
                new Promise((resolve) => {
                  resolve();
                  setRoomsAvilable([...roomsAvilable, newData]);
                  handleSubmit(newData);
                }),
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve) => {
                  resolve();
                  handleSubmit(newData);
                }),
              onRowDelete: (oldData) =>
                new Promise(async (resolve) => {
                  await handleClickDeleteRoom(oldData._id);
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
        </Grid>  
    </>
  );
};

export default RoomManagerUI;
