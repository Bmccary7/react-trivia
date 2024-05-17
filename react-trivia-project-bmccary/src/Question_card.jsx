import { useEffect, useState } from "react";
import triviaQuestions from "./Question_list";

function Question() {
  // hooks for the score keeper, next/prev buttons, determinant for if question was
  // answered already, and whether a choice was selected already per question
  const [score, setScore] = useState(0);
  const [currentQ, setQ] = useState(0);
  const [qAnswered, setqAnswered] = useState(new Set());
  const [selectedChoice, setSelectedChoice] = useState(new Set());
  // method to increment when pressing the next button/decrement when pressing prev
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
  // method for marking a question as answered when a choice is selected/clicked
  // gives a +1 to score if the answer is right
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
  // useEffect re-renders the paramater (setSelectedChoice) based on the
  // dependancy changing (currentQ). Basically, when the question changes,
  // whether forward or back, the choices re-render (the question choices reset)
  useEffect(() => {
    setSelectedChoice(new Set());
  }, [currentQ]);
  // variable declaration to specify where to pull the parameters from.
  // this is basically props but a different way to do it.
  // if you were to still use props in App.jsx, you could simply do
  // <Question {...triviaQuestions[currentQ]}> with the spread operator.
  const { question, choices, answer } = triviaQuestions[currentQ];
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
              //conditionals for changing the color of the answer choice card
              //that is clicked, based on the choice being right/wrong
              //default is black background.
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
