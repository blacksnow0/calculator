import { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus(e) {
    e.preventDefault();
    const value = Number(inputRef.current.value);
    if (!isNaN(value)) {
      setResult((result) => result + value);
    }
    inputRef.current.value = "";
    inputRef.current.focus();
  }

  function minus(e) {
    e.preventDefault();
    const value = Number(inputRef.current.value);
    if (!isNaN(value)) {
      setResult((result) => result - value);
    }
    inputRef.current.value = "";
    inputRef.current.focus();
  }

  function times(e) {
    e.preventDefault();
    const value = Number(inputRef.current.value);
    if (!isNaN(value)) {
      setResult((result) => result * value);
    }
    inputRef.current.value = "";
    inputRef.current.focus();
  }

  function divide(e) {
    e.preventDefault();
    const value = Number(inputRef.current.value);
    if (!isNaN(value) && value !== 0) {
      setResult((result) => result / value);
    }
    inputRef.current.value = "";
    inputRef.current.focus();
  }

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = "";
    inputRef.current.focus();
  }

  function resetResult(e) {
    e.preventDefault();
    setResult(0);
    inputRef.current.value = "";
    inputRef.current.focus();
  }

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>{result}</p>
        <input ref={inputRef} type="number" placeholder="Type a number" />
        <button onClick={plus}>Add</button>
        <button onClick={minus}>Minus</button>
        <button onClick={times}>Multiply</button>
        <button onClick={divide}>Divide</button>
        <button onClick={resetInput}>Reset Input</button>
        <button onClick={resetResult}>Reset Result</button>
      </form>
    </div>
  );
}

export default App;
