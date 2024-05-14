import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="titleBox">
        <h1 className="name">Brandon McCary</h1>
        <div className="cardBackground">
          <div className="card">
            <div className="logoContainer">
              <img src={viteLogo} className="logo vite" alt="Vite logo" />
              <h2 className="title">Silly trivia with qwazy questions!</h2>
              <img src={reactLogo} className="logo react" alt="React logo" />
            </div>
            <div className="contentBox">
              <h3 className="questionBox">Question</h3>

              <div className="buttonContainer">
                <button className="btn">A</button>
                <button className="btn">B</button>
                <button className="btn">C</button>
                <button className="btn">D</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
