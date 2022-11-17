import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Shared/providers/AuthProvider";
import { ThemeProvider } from "@material-ui/core";
import theme from "./Shared/theme/LightTheme"


ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <BrowserRouter>
        <AuthProvider>
          <App theme="lightTheme"/>
        </AuthProvider>
      </BrowserRouter>
    </React.StrictMode>
  </ThemeProvider>
);
