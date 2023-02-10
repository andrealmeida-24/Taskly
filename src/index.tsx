import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Directory from "./Directory";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Directory />
  </React.StrictMode>
);
