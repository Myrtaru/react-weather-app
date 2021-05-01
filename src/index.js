import React from "react";
import ReactDOM from "react-dom";
import { StrictMode } from "react";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";


const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
