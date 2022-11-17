import { useNavigate } from "react-router-dom";
import MyAppBar from "../components/AppBar/components/AppBar.jsx";
import { useAuthContext } from "../providers/AuthProvider.jsx";

export const AuthStatus = () => {
  const { sesion, logout } = useAuthContext();
  const navigate = useNavigate();

  if (!sesion) {
    return <p>No esta conectado</p>;
  }

  return (
    <>
      <MyAppBar logout={logout} navigate={navigate} sesion={sesion} />
    </>
  );
};
