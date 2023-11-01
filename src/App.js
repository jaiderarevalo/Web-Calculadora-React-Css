import "./App.css";
import Boton from "./componentes/boton";
import Pantalla from "./componentes/pantalla";
import BotonClear from "./componentes/botonClear";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const agregarInput = (valor) => {
    setInput(input + valor);
    setResult(evaluate(input + valor));
  };

  const calcularResultado = () => {
    setResult(evaluate(input));
  };

  const filas = [
    [1, 2, 3, "+"],
    [4, 5, 6, "-"],
    [7, 8, 9, "*"],
    ["=", 0, ".", "/"],
  ];

  const clearData = () => {
    setInput("");
    setResult(0);
  };

  return (
    <div className="App">
      <div className="contenedor-calculadora">
        <Pantalla input={input} result={result} />
        {filas.map((fila) => (
          <div className="fila">
            {fila.map((numero) => (
              <Boton
                manejarClic={numero === "=" ? calcularResultado : agregarInput}
                numero={numero}
              />
            ))}
          </div>
        ))}
        <div className="fila">
          <BotonClear clear={clearData}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
