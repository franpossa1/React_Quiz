import React from "react";
import Answer from "./Answer";
const rege1x = /&quot;|&#039;/gm;

export default function Question(props) {

 

  return (
    <div className="question-container">
      <div className={`question-ask `}>{props.infoQuestion.question.replace(rege1x,"'")}</div>
      <div className="answer-box">
        {props.infoQuestion.incorrect_answers.map((questionx) => {
          return (
            <Answer
              key={questionx}
              value={questionx}
              pregunta={props.infoQuestion.question}
              matchAnswer={props.matchAnswer}
              selected= {questionx ===props.infoQuestion.selected_answer}
              gameEnd={props.gameEnd}
              correcta={props.infoQuestion.correct_answer}
            />
          );
        })}
      </div>
      <hr className="line-css" />
    </div>
  );
}


