import React from "react";
//import logo from './logo.svg';
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>file download</h1>
      <form>
        <textarea>Download me as file data.</textarea>
        <a href="javascript:void(0)" download="data.txt">
          Download Text
        </a>
      </form>
    </div>
  );
}

export default App;
