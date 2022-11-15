import axios from "axios";
import React from "react";
import RoomManagerUI from "../components/RoomManagerUI";

const RoomManagerPage = () => {
  const handleCreateRoom = async (body) => {
    const data = await axios.post(
      `http://localhost:3001/api/room/registerRoom`,
      body
    );
    return data;
  };

  const handleUpdateRoom = async (body, id) => {
    const data = await axios.put(`http://localhost:3001/api/room/${id}`, body);
    return data;
  };

  const handleGetRooms = async () => {
    const { data } = await axios.get(`http://localhost:3001/api/room/`);
    return data;
  };

  const handleDeleteRoom = async (id) => {
    const { data } = await axios.delete(`http://localhost:3001/api/room/${id}`);
    return data;
  };

  return (
    <RoomManagerUI
      handleGetRooms={handleGetRooms}
      handleUpdateRoom={handleUpdateRoom}
      handleCreateRoom={handleCreateRoom}
      handleDeleteRoom={handleDeleteRoom}
    />
  );
};

export default RoomManagerPage;
