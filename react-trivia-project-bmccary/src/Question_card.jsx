import triviaQuestions from "./Question_list";

function Question(question, A, B, C, D, answer) {
  return (
    <>
      <h3 className="questionBox">Questions</h3>
      <div className="buttonContainer">
        <button className="btn">A</button>
        <button className="btn">B</button>
        <button className="btn">C</button>
        <button className="btn">D</button>
      </div>
    </>
  );
}

export default Question;
