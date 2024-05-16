import { useEffect, useState } from "react";
import triviaQuestions from "./Question_list";

function Question({ question, choices, answer }) {
  const [score, setScore] = useState(0);
  const [currentQ, setQ] = useState(0);
  const nextQ = () => {
    if (currentQ < triviaQuestions.length - 1) {
      setQ(currentQ + 1);
    }
  };
  const prevQ = () => {
    if (currentQ > 0) {
      setQ(currentQ - 1);
    }
  };
  const [qAnswered, setqAnswered] = useState(new Set());
  const [selectedChoice, setSelectedChoice] = useState(new Set());
  const select = (choice) => {
    setSelectedChoice((set) => new Set([...Array.from(set), choice]));
    console.log(selectedChoice);
    if (() => !qAnswered.includes(question)) {
      setqAnswered(() => new Set([...Array.from(qAnswered), question]));
    }
    console.log(qAnswered);
    if (choice === answer) {
      console.log("Right answer");
    } else {
      console.log("Wrong answer");
    }
  };
  useEffect(() => {
    setSelectedChoice(new Set());
  }, [currentQ]);
  question = triviaQuestions[currentQ].question;
  choices = triviaQuestions[currentQ].choices;
  answer = triviaQuestions[currentQ].answer;
  return (
    <>
      <h3 className="questionBox">{question}</h3>
      <div className="buttonContainer">
        {choices.map((choice) => (
          <button
            className="btn"
            key={choice}
            onClick={() => select(choice)}
            style={{
              backgroundColor: selectedChoice.has(choice)
                ? choice === answer
                  ? "green"
                  : "red"
                : "black",
            }}
          >
            {choice}
          </button>
        ))}
      </div>
      <div className="nav_scoreContainer">
        <button className="navBtn" onClick={prevQ}>
          Prev
        </button>
        <p className="scoreContainer">Score: </p>
        <button className="navBtn" onClick={nextQ}>
          Next
        </button>
      </div>
    </>
  );
}

export default Question;
