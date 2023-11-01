import React from "react";
import "../hojas-de-estilo/Pantalla.css";

const Pantalla = ({ input, result }) => (
  <div className="input">
    <div>{input || 0} </div>
    <div>{result}</div>
  </div>
);
export default Pantalla;
