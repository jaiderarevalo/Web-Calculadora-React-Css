import React from "react";
import "../hojas-de-estilo/botonClear.css";

const BotonClear = ({ children, clear }) => (
  <div className="botonClear" onClick={clear}>
    {children}
  </div>
);
export default BotonClear;
