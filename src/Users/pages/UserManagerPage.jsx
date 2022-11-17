import React from "react";
import axios from "axios";
import UserManagerUI from "../components/UserManagerUI";

const UserManagerPage = () => {
  const handleGetUsers = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3001/api/user`);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const handleGetRoles = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3001/api/role`);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreateUser = async (body) => {
    try {
      const data = await axios.post(
        `http://localhost:3001/api/user/registerUser`,
        body
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateUser = async (id, body) => {
    try {
      const data = await axios.put(
        `http://localhost:3001/api/user/${id}`,
        body
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      const data = await axios.delete(`http://localhost:3001/api/user/${id}`);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UserManagerUI
      handleGetRoles={handleGetRoles}
      handleGetUsers={handleGetUsers}
      handleCreateUser={handleCreateUser}
      handleUpdateUser={handleUpdateUser}
      handleDeleteUser={handleDeleteUser}
    />
  );
};

export default UserManagerPage;
