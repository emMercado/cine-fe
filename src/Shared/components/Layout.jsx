import { Outlet } from "react-router-dom";
import { AuthPage } from "../../Auth/pages/AuthPage";
import { AuthStatus } from "../navigation/AuthStatus";
import { useAuthContext } from "../providers/AuthProvider";
import MyAppBar from "./AppBar/components/AppBar";

export const Layout = () => {
  const { sesion } = useAuthContext();

  return (
    <>
      {!sesion ? (
        <AuthPage />
      ) : (
        <>
          <AuthStatus />
          <Outlet />
        </>
      )}
    </>
  );
};
