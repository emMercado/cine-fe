import React, { useEffect, useState } from "react";
import MaterialTable from "@material-table/core";
import { Button } from "@material-ui/core";
import { tableIcons } from "../../Shared/components/tableIcons";
import { ModalTicketFormUI } from "./ModalTicketFormUI";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";

const ScheduleManagerUI = (props) => {
  const {
    handleGetSchedules,
    handleGetTickets,
    handleGetScheduleById,
    handleCreateTicket,
    handleDeleteTicket,
  } = props;
  const [openModal, setOpenModal] = useState(false);
  const [selectedValue, setSelectedValue] = useState();
  const [schedulesAvilable, setSchedulesAvilable] = useState([]);
  const [ticketsAvilable, setTicketsAvilable] = useState([]);

  const col = [
    { title: "Id", field: "_id" },
    { title: "Horario", field: `schedule._id` },
    { title: "Columna", field: `position.col` },
    { title: "Fila", field: `position.row` },
  ];

  const populateSchedules = async () => {
    const { data } = await handleGetSchedules();
    setSchedulesAvilable(data);
  };

  const populateTickets = async () => {
    const { data } = await handleGetTickets();
    setTicketsAvilable(data);
  };

  useEffect(() => {
    populateSchedules();
    populateTickets();
  }, []);

  const handleOpenModal = (rowData) => {
    setSelectedValue(rowData);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleClickDeleteTicket = async (ticketId) => {
    try {
      const deleteTicket = await handleDeleteTicket(ticketId);
      if (!deleteTicket) {
        return;
      }
    } catch (error) {
      alert(error);
    } finally {
      populateTickets();
    }
  };

  return (
    <>
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
        Generar nuevo Boleto
      </Button>
      <MaterialTable
        title={"Horarios"}
        icons={tableIcons}
        columns={col}
        data={ticketsAvilable}
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
              handleClickDeleteTicket(rowData._id);
            },
          },
        ]}
      />
      <ModalTicketFormUI
        setOpenModal={setOpenModal}
        open={openModal}
        onClose={handleCloseModal}
        populate={populateTickets}
        populates={populateSchedules}
        selectedValue={selectedValue}
        schedulesAvilable={schedulesAvilable}
        setSchedulesAvilable={setSchedulesAvilable}
        handleGetScheduleById={handleGetScheduleById}
        handleCreateTicket={handleCreateTicket}
      />
    </>
  );
};

export default ScheduleManagerUI;
