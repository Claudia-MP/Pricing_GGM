import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import $ from "jquery";
import popper from "popper.js";

import App from "./routes/App";

const rootElement = document.getElementById("root");
//(ReactDOM.render(¿Qué quiero pintar?, ¿Dónde lo quiero pintar?))
ReactDOM.render(
 <App />,
  rootElement
);
