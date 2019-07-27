import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function GetPhotos() {
  return "ok";
}

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to sese some magic {GetPhotos()} happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
