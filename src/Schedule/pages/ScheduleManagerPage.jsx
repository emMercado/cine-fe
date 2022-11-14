import React from "react";
import axios from "axios";
import ScheduleManagerUI from "../components/ScheduleManagerUI";

const ScheduleManagerPage = () => {
  const handleGetMovies = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3001/api/movie`);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const handleGetSchedules = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3001/api/schedule`);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreateSchedule = async (body) => {
    try {
      const data = await axios.post(
        `http://localhost:3001/api/schedule/registerSchedule`,
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
    <ScheduleManagerUI
      handleGetMovies={handleGetMovies}
      handleGetSchedules={handleGetSchedules}
      handleCreateSchedule={handleCreateSchedule}
      handleUpdateSchedule={handleUpdateSchedule}
      handleDeleteSchedule={handleDeleteSchedule}
    />
  );
};

export default ScheduleManagerPage;
