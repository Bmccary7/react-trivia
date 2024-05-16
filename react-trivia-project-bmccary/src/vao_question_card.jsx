import { useEffect, useState } from "react";
import triviaQuestions from "./Question_list";

function Question({ question, choices, answer, index }) {
  const [selectedChoices, setSelectedChoices] = useState(new Set());
  const select = (choice) => {
    setSelectedChoices((set) => new Set([...Array.from(set), choice]));
    console.log(choice);
  };
  useEffect(() => {
    setSelectedChoices(new Set());
  }, [index]);
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
              backgroundColor: selectedChoices.has(choice)
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
    </>
  );
}

export default Question;
