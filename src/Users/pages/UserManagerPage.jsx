import axios from 'axios';
import React from 'react'
import UserManagerUI from '../components/UserManagerUI';

const UserManagerPage = () => {
    const handleGetUsers = async () => {
        const { data } = await axios.get(`http://localhost:3001/api/user`);
        return data;
      };
    
      const handleCreateUser = async (body) => {
        const data = await axios.post(
          `http://localhost:3001/api/user/registerUser`, body);
        return data;
      };
    
      const handleUpdateUser = async (body, id) => {
        const data = await axios.put(`http://localhost:3001/api/user/${id}`, body);
        return data;
      };
    
      const handleDeleteUser = async (id) => {
        const data = await axios.delete(`http://localhost:3001/api/user/${id}`);
        return data;
      };
    
      return (
        <UserManagerUI
          handleGetUsers={handleGetUsers}
          handleCreateUser={handleCreateUser}
          handleUpdateUser={handleUpdateUser}
          handleDeleteUser={handleDeleteUser}
        />
      );
}

export default UserManagerPage;