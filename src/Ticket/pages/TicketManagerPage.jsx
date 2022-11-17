import React from "react";
import axios from "axios";
import TicketManagerUI from "../components/TicketManagerUI";

const TicketManagerPage = () => {
  const handleGetSchedules = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3001/api/schedule`);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const handleGetScheduleById = async (id) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/api/schedule/${id}`
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const handleGetTickets = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3001/api/ticket`);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreateTicket = async (body) => {
    try {
      const data = await axios.post(
        `http://localhost:3001/api/ticket/registerTicket`,
        body
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateSchedule = async (id, body) => {
    try {
      const data = await axios.put(
        `http://localhost:3001/api/schedule/${id}`,
        body
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteSchedule = async (id) => {
    try {
      const data = await axios.delete(
        `http://localhost:3001/api/schedule/${id}`
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TicketManagerUI
      handleGetSchedules={handleGetSchedules}
      handleGetTickets={handleGetTickets}
      handleGetScheduleById={handleGetScheduleById}
      handleCreateTicket={handleCreateTicket}
      /* handleGetMovies={handleGetMovies}
      handleCreateSchedule={handleCreateSchedule}
      handleUpdateSchedule={handleUpdateSchedule}
      handleDeleteSchedule={handleDeleteSchedule}
      handleGetRooms={handleGetRooms} */
    />
  );
};

export default TicketManagerPage;
