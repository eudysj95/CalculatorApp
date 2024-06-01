import { useState } from "react";
import "./App.css";

function App() {
  const [inputState, setInputState] = useState("0");
  const [operacion, setOperacion] = useState("");
  const [viejoValor, setViejoValor] = useState(0);
  const [nuevoValor, setNuevoValor] = useState(0);
  const [operando, setOperando] = useState(false);

  const mostrarInput = (e) => {
    e.preventDefault();
    let valorInput = e.target.textContent;
    console.log(e.target.id)

    if (inputState === "0" && operando === false) {
      setInputState(valorInput);
    } else if (inputState !== "0" && operando === false) {
      setInputState(inputState + valorInput);
    } else if (operando === true && nuevoValor === 0) {
      setInputState(valorInput);
      setNuevoValor(valorInput);
    } else if (operando === true && nuevoValor !== 0) {
      setInputState(viejoValor + valorInput);
      setNuevoValor(parseInt(viejoValor) + parseInt(valorInput));
    }
  };

  const sumar = (e) => {
    e.preventDefault();
    
    setViejoValor(parseInt(inputState));
    setOperando(true);
    setOperacion("suma");
    setInputState(inputState + "+");
  };

  const restar = (e) => {
    e.preventDefault();

    setViejoValor(parseInt(inputState));
    setOperando(true);
    setOperacion("resta");
    setInputState(inputState + "-");
  };

  const multiplicar = (e) => {
    e.preventDefault();

    setViejoValor(parseInt(inputState));
    setOperando(true);
    setOperacion("multiplicacion");
    setInputState(inputState + "*");
  };

  const dividir = (e) => {
    e.preventDefault();

    setViejoValor(parseInt(inputState));
    setOperando(true);
    setOperacion("division");
    setInputState(inputState + "/");
  };

  const simboloIgual = (e) => {
    e.preventDefault();
    var nuevoInput;

    if (operacion === "suma") {
      nuevoInput = parseInt(viejoValor) + parseInt(nuevoValor);
    } else if (operacion === "resta") {
      nuevoInput = parseInt(viejoValor) - parseInt(nuevoValor);
    } else if (operacion === "multiplicacion") {
      nuevoInput = parseInt(viejoValor) * parseInt(nuevoValor);
    } else if (operacion === "division") {
      nuevoInput = parseInt(viejoValor) / parseInt(nuevoValor);
    }

    setOperacion("");
    setOperando(false);
    setViejoValor(nuevoInput);
    setNuevoValor(0);
    setInputState(nuevoInput);
  };

  const reset = (e) => {
    e.preventDefault();

    setOperacion("");
    setOperando(false);
    setViejoValor(0);
    setNuevoValor(0);
    setInputState("0");
  };

  const borrar = (e) => {
    e.preventDefault();

    let nuevoInput = inputState.slice(0, inputState.length - 1);

    setInputState(nuevoInput);
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-[#25ADE7] h-[45%] w-2/4 max-w-[300px] mx-auto p-4 border-2 border-black rounded-3xl">
        <div className="mt-4 rounded-xl h-16 bg-[#1c576e] flex justify-center items-center border-2 border-black">
          <input
            type="number"
            className="w-[95%] h-12 border-2 border-black bg-[#A1B4C2] text-black text-3xl text-right p-2"
            name="input"
            value={inputState}
          />
        </div>

        <div className="bg-[#C1C1C1] mt-3 h-[70%] border-2 border-black">
          <div className="grid grid-cols-4 gap-2 p-2 text-[#F4FAFC] font-bold text-md">
            <button
              className="bg-[#586876] border-2 border-black"
              name="num7"
              id="num7"
              onClick={mostrarInput}
              readOnly
            >
              7
            </button>
            <button
              className="bg-[#586876] border-2 border-black"
              name="num8"
              id="num8"
              onClick={mostrarInput}
              readOnly
            >
              8
            </button>
            <button
              className="bg-[#586876] border-2 border-black"
              name="num9"
              id="num9"
              onClick={mostrarInput}
              readOnly
            >
              9
            </button>
            <button className="bg-[#F5641E] border-2 border-black" name="del" id="del" onClick={borrar} readOnly>
              DEL
            </button>
            <button
              className="bg-[#586876] border-2 border-black"
              name="num4"
              id="num4"
              onClick={mostrarInput}
              readOnly
            >
              4
            </button>
            <button
              className="bg-[#586876] border-2 border-black"
              name="num5"
              id="num5"
              onClick={mostrarInput}
              readOnly
            >
              5
            </button>
            <button
              className="bg-[#586876] border-2 border-black"
              name="num6"
              id="num6"
              onClick={mostrarInput}
              readOnly
            >
              6
            </button>
            <button className="bg-[#888888] border-2 border-black" name="mas" id="mas" onClick={sumar} readOnly>
              +
            </button>
            <button
              className="bg-[#586876] border-2 border-black"
              name="num1"
              id="num1"
              onClick={mostrarInput}
              readOnly
            >
              1
            </button>
            <button
              className="bg-[#586876] border-2 border-black"
              name="num2"
              id="num2"
              onClick={mostrarInput}
              readOnly
            >
              2
            </button>
            <button
              className="bg-[#586876] border-2 border-black"
              name="num3"
              id="num3"
              onClick={mostrarInput}
              readOnly
            >
              3
            </button>
            <button className="bg-[#888888] border-2 border-black" name="menos" id="menos" onClick={restar} readOnly>
              -
            </button>
            <button className=""></button>
            <button
              className="bg-[#586876] border-2 border-black"
              name="num0"
              id="num0"
              onClick={mostrarInput}
              readOnly
            >
              0
            </button>
            <button className="bg-[#888888] border-2 border-black" name="entre" id="entre" onClick={dividir} readOnly>
              /
            </button>
            <button className="bg-[#888888] border-2 border-black" name="por" id="por" onClick={multiplicar} readOnly>
              *
            </button>

            <button className="bg-[#F5641E] border-2 border-black col-span-2" onClick={reset}>
              RESET
            </button>
            <button className="bg-[#888888] border-2 border-black col-span-2" onClick={simboloIgual} readOnly>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
