import React, { useEffect, useState } from "react";
import MaterialTable from "@material-table/core";
import { Button, Grid } from "@material-ui/core";
import { tableIcons } from "../../Shared/components/tableIcons";
import { ModalScheduleFormUI } from "./ModalScheduleFormUI";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";

const ScheduleManagerUI = (props) => {
  const {
    handleGetMovies,
    handleGetSchedules,
    handleCreateSchedule,
    handleUpdateSchedule,
    handleDeleteSchedule,
    handleGetRooms,
  } = props;
  const [openModal, setOpenModal] = useState(false);
  const [selectedValue, setSelectedValue] = useState();
  const [schedulesAvilable, setSchedulesAvilable] = useState([]);
  const [moviesAvilable, setMoviesAvilable] = useState([]);
  const [roomsAvilable, setRoomsAvilable] = useState([]);

  const col = [
    { title: "Pelicula", field: "movie.title" },
    { title: "Horario", field: "date" },
    { title: "Sala", field: "room.number" },
  ];

  const populateMovies = async () => {
    const { data } = await handleGetMovies();
    setMoviesAvilable(data);
  };

  const populateRooms = async () => {
    const { data } = await handleGetRooms();
    setRoomsAvilable(data);
  };

  const populateSchedules = async () => {
    const { data } = await handleGetSchedules();
    setSchedulesAvilable(data);
  };

  useEffect(() => {
    populateMovies();
    populateSchedules();
    populateRooms();
  }, []);

  const handleOpenModal = (rowData) => {
    setSelectedValue(rowData);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleClickDeleteSchedule = async (scheduleId) => {
    try {
      const deleteSchedule = await handleDeleteSchedule(scheduleId);
      if (!deleteSchedule) {
        return;
      }
      alert("Se elimino con exito");
      populateSchedules();
    } catch (error) {
      alert(error);
    }
  };

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
            onClick={() => handleOpenModal()}
          >
            Nuevo horario
          </Button>
          <MaterialTable
            title={"Horarios"}
            icons={tableIcons}
            columns={col}
            data={schedulesAvilable}
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
                tooltip: "Edit schedule",
                onClick: (event, rowData) => {
                  handleOpenModal(rowData);
                },
              },
              {
                icon: Delete,
                tooltip: "Delete schedule",
                onClick: (event, rowData) => {
                  handleClickDeleteSchedule(rowData._id);
                },
              },
            ]}

          />
        </Grid>  
      <ModalScheduleFormUI
        open={openModal}
        onClose={handleCloseModal}
        selectedValue={selectedValue}
        populate={populateSchedules}
        handleCreateSchedule={handleCreateSchedule}
        handleUpdateSchedule={handleUpdateSchedule}
        moviesAvilable={moviesAvilable}
        roomsAvilable={roomsAvilable}
      />
    </>
  );
};

export default ScheduleManagerUI;
