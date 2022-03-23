import React from "react";
import Question from "./Question";
import CountResult from "./CountResult";

export default function Quizzes(props) {
 

  

  return (
    <div className="quizz-container">
      {props.questionData.map((questionArray, index) => {
        return (
          <Question
            key={index}
            matchAnswer={props.matchAnswer}
            infoQuestion={questionArray}
            selected={questionArray.selected_answer}
            gameEnd={props.gameEnd}
          />
        );
      })}
      <CountResult restart={props.restart} score={props.score} gameEnd={props.gameEnd} checkAnswerSelected={props.checkAnswerSelected} />
    </div>
  );
}
