import "./App.css";
/* import { Toaster } from "react-hot-toast"; */
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import Router from "./Shared/navigation/Router";
import lightTheme from "./Shared/theme/LightTheme";
/* import darkTheme from './Shared/theme/DarkTheme'; */
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Toaster position="bottom-right" />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
