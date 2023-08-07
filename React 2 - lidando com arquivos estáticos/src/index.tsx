import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "./index.css";
import ListaAnimes from "./pages/ListaAnimes";

ReactDOM.render(
  <React.StrictMode>
    <ListaAnimes />
  </React.StrictMode>,
  document.getElementById('root')
);
