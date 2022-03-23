import React from "react";
export default function CountResult (props) {
    return (
        <div className="check-container">
            <div className="score-div">You Scored {props.score}/5 correct Answers</div>
            
{
    props.gameEnd?  <div onClick={props.restart} className="result-button"> NewGame</div>
     :  <div onClick={props.checkAnswerSelected} className="result-button"> CheckAnswers</div>
    
}

        
        </div>
    )
}