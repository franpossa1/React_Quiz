import React from "react";

const rege1x = /&quot;|&#039;/gm;
export default function Answer(props) {
  return (
    <div
      className={`question-answer ${
        props.selected && !props.gameEnd && "selected"
      } ${
        props.gameEnd
          ? props.selected && props.value === props.correcta && "correct"
          : ""
      } ${
        props.gameEnd
          ? props.selected && props.value !== props.correcta && "incorrect"
          : ""
      } 
      ${props.gameEnd? !props.selected &&props.value === props.correcta && "was-this-one" : "" }
      
      `}
      onClick={() => props.matchAnswer(props.pregunta, props.value)}
    >
      
      { props.value.replace(rege1x,"'")}
    </div>
  );
}
