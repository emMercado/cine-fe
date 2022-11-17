import axios from "axios";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [sesion, setSesion] = useState();

  const login = async (username, password, callback) => {
    const response = await axios.post("http://localhost:3001/api/auth/login", {
      username,
      password,
    });
    if (response.data.token) {
      setSesion(response.data);
      callback();
    }
  };

  const logout = (callback) => {
    setSesion(null);
    callback();
  };

  const value = { sesion, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};