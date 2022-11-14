import React, { useEffect, useState } from "react";
import MaterialTable from "@material-table/core";
import { Button } from "@material-ui/core";
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
  } = props;
  const [openModal, setOpenModal] = useState(false);
  const [selectedValue, setSelectedValue] = useState();
  const [schedulesAvilable, setSchedulesAvilable] = useState([]);
  const [moviesAvilable, setMoviesAvilable] = useState([]);
  const [roomAvilable, setRoomAvilable] = useState([
    { _id: 1, number: "1" },
    { _id: 2, number: "2" },
  ]);

  const col = [
    { title: "Pelicula", field: "movie.title" },
    { title: "Dia", field: "date" },
    { title: "Sala", field: "room.number" },
  ];

  const populateMovies = async () => {
    const { data } = await handleGetMovies();
    setMoviesAvilable(data);
  };

  const populateSchedules = async () => {
    const { data } = await handleGetSchedules();
    setSchedulesAvilable(data);
  };
  console.log(schedulesAvilable)
  useEffect(() => {
    populateMovies();
    populateSchedules();
  }, []);

  const handleOpenModal = (rowData) => {
    setSelectedValue(rowData);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleClickDeleteSchedule = async (scheduleId) => {
    await handleDeleteSchedule(scheduleId);
  };

  return (
    <>
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
      <ModalScheduleFormUI
        /* handleOpenModal={handleOpenModal} */
        open={openModal}
        onClose={handleCloseModal}
        selectedValue={selectedValue}
        populate={populateSchedules}
        handleCreateSchedule={handleCreateSchedule}
        handleUpdateSchedule={handleUpdateSchedule}
        moviesAvilable={moviesAvilable}
        roomAvilable={roomAvilable}
      />
    </>
  );
};

export default ScheduleManagerUI;
