import triviaQuestions from "./Question_list";

function Question({ question, A, B, C, D, answer }) {
  const Acorrect = () => {
    if (A === answer) {
      document.getElementById("Abtn").style.backgroundColor = "green";
      console.log("Right answer");
    } else {
      document.getElementById("Abtn").style.backgroundColor = "red";
      console.log("Wrong Answer");
    }
  };
  const Bcorrect = () => {
    if (B === answer) {
      document.getElementById("Bbtn").style.backgroundColor = "green";
      console.log("Right answer");
    } else {
      document.getElementById("Bbtn").style.backgroundColor = "red";
      console.log("Wrong Answer");
    }
  };
  const Ccorrect = () => {
    if (C === answer) {
      document.getElementById("Cbtn").style.backgroundColor = "green";
      console.log("Right answer");
    } else {
      document.getElementById("Cbtn").style.backgroundColor = "red";
      console.log("Wrong answer");
    }
  };
  const Dcorrect = () => {
    if (D === answer) {
      document.getElementById("Dbtn").style.backgroundColor = "green";
      console.log("Right answer");
    } else {
      document.getElementById("Dbtn").style.backgroundColor = "red";
      console.log("Wrong Answer");
    }
  };

  return (
    <>
      <h3 className="questionBox">{question}</h3>
      <div className="buttonContainer">
        <button className="btn" id="Abtn" onClick={Acorrect}>
          {A}
        </button>
        <button className="btn" id="Bbtn" onClick={Bcorrect}>
          {B}
        </button>
        <button className="btn" id="Cbtn" onClick={Ccorrect}>
          {C}
        </button>
        <button className="btn" id="Dbtn" onClick={Dcorrect}>
          {D}
        </button>
      </div>
    </>
  );
}

export default Question;
