import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../providers/AuthProvider.jsx";

export const AuthStatus = () => {
  const { sesion, logout } = useAuthContext();
  const navigate = useNavigate();

  if (!sesion) {
    return <p>No esta conectado</p>;
  }

  return (
    <>
      <p>Conectado como {sesion.username}</p>
      <button
        onClick={() => {
          logout(() => navigate("/"));
        }}
      >
        Salir
      </button>
    </>
  );
};
