import React from "react";
import "./App.css";

export default function Main(props) {
  return (

<div>
<div className="container-main">
      <div className="main-tittle-name">QuizziGames</div>
       <div className="main-text">How much u know about videogames?</div>
       <div className="main-btn" onClick={props.gamePusher}>Start</div>
     </div>



</div>

    
  );
}
