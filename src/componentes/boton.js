import React from "react";
import "../hojas-de-estilo/Boton.css";

function Boton({ numero, manejarClic }) {
 
    const esOperador = (valor) => {
    if (valor === "." || valor === "=" || isNaN(valor)) {
      return true;
    }
    return false;
  };

  return (
    <div
      className={`boton-contenedor ${esOperador(numero) ? "operador" : null}`}
      onClick={() => manejarClic(numero)}
    >
      {numero}
    </div>
  );
}
export default Boton;
