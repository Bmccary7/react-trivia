import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Question from "./Question_card";
import triviaQuestions from "./Question_list";

function App() {
  const [currentQ, setQ] = useState(0);
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
              <Question
                key={triviaQuestions[currentQ].question}
                question={triviaQuestions[currentQ].question}
                A={triviaQuestions[currentQ].choiceA}
                B={triviaQuestions[currentQ].choiceB}
                C={triviaQuestions[currentQ].choiceC}
                D={triviaQuestions[currentQ].choiceD}
                answer={triviaQuestions[currentQ].answer}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
