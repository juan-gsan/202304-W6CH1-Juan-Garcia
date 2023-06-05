import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App";
import "./style.css";
import { ContextProvider } from "./context/context.provider";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <ContextProvider>
        <App />
      </ContextProvider>
    </Router>
  </React.StrictMode>
);
