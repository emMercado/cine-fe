import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { AuthPage } from "./Auth/pages/AuthPage";
import { HomePage } from "./Home/pages/HomePage";
import { MoviesManagerPage } from "./Movies/pages/MoviesManagerPage";
import { RoomManagerPage } from "./Rooms/pages/RoomManagerPage";
import ScheduleManagerPage from "./Schedule/pages/ScheduleManagerPage";
import { Layout } from "./Shared/components/Layout";
import { RequiredAuth } from "./Shared/navigation/RequireAuth";
import { PerfilPage } from "./Shared/PerfilPage";
import { SinRuta } from "./Shared/SinRuta";
import TicketManagerPage from "./Ticket/pages/TicketManagerPage";
import UserManagerPage from "./Users/pages/UserManagerPage";
import { ThemeProvider } from "@material-ui/core";
import theme from "./Shared/theme/LightTheme"

const App = () => {
  return (
    <>
      {/* <Toaster position="bottom-right" /> */}
      
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/movie/manager" element={<MoviesManagerPage />} />
            <Route path="/room/manager" element={<RoomManagerPage />} />
            <Route path="/schedule/manager" element={<ScheduleManagerPage />} />
            <Route path="/user/manager" element={<UserManagerPage />} />
            <Route path="/ticket/manager" element={<TicketManagerPage />} />
            <Route
              path="/perfil"
              element={
                <RequiredAuth>
                  <PerfilPage />
                </RequiredAuth>
              }
            />
            <Route path="/login" element={<AuthPage />} />
            <Route path="*" element={<SinRuta />} />
          </Route>
        </Routes>
        
    </>
  );
};

export default App;
