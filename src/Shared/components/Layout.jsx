import { Link, Outlet } from "react-router-dom";
import { AuthStatus } from "../navigation/AuthStatus";
import MyAppBar from "./AppBar/components/AppBar";

export const Layout = () => {
  return (
    <>
      <AuthStatus />
      <MyAppBar />
      <Outlet />
    </>
  );
};
