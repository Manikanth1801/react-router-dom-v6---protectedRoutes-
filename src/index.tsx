import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalProvider from "./context/globalProvider";
import { BrowserRouter as Router } from "react-router-dom";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <GlobalProvider>
    <Router>
      <App />
    </Router>
  </GlobalProvider>,
);
