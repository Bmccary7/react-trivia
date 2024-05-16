import { useEffect, useState } from "react";
import triviaQuestions from "./Question_list";

function Question({ question, choices, answer }) {
  const [score, setScore] = useState(0);
  const [currentQ, setQ] = useState(0);
  const [qAnswered, setqAnswered] = useState(new Set());
  const [selectedChoice, setSelectedChoice] = useState(new Set());
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
  const select = (choice) => {
    setSelectedChoice((set) => new Set([...Array.from(set), choice]));
    if (!qAnswered.has(question)) {
      if (choice === answer) {
        setScore(score + 1);
        setqAnswered(() => new Set([...Array.from(qAnswered), question]));
      } else {
        setqAnswered(() => new Set([...Array.from(qAnswered), question]));
      }
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
      <h3 className="questionBox">
        {question} Answered: {qAnswered.has(question) ? "✔️" : "❌"}
      </h3>
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
        <p className="scoreContainer">Score: {score}</p>
        <button className="navBtn" onClick={nextQ}>
          Next
        </button>
      </div>
    </>
  );
}

export default Question;
