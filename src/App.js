import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./App.css";
import { MyRouter } from "./components/MyRouter";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <h1> Hello, World! </h1>
        <Link className="link" to={"/A"}>
          A
        </Link>
        <Link className="link" to={"/B"}>
          B
        </Link>
        <Link className="link" to={"/C"}>
          C
        </Link>
        <Link className="link" to={"/D"}>
          D
        </Link>
        <MyRouter />
      </div>
    </BrowserRouter>
  );
};

export default App;
