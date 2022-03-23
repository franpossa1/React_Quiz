import React, { useEffect } from "react";
import "./App.css";
import Main from "./Main";
import Quizzes from "./Quizzes";
export default function App() {
  //states
  const [mainScreen, setMainScreen] = React.useState(true);
  const [gameEnd, setGameEnd] = React.useState(false);

  const [questionData, setQuestionData] = React.useState([]);
  const [score, setScore] = React.useState(0);

  console.log(questionData);
  //Functions
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  function matchAnswer(question, answer) {
    setQuestionData((prevData) =>
      prevData.map((q) => {
        if (q.question === question) {
          return {
            ...q,
            selected_answer: answer,
          };
        } else {
          return { ...q };
        }
      })
    );
  }

  function checkAnswerSelected() {
    const allSelected = questionData.every(
      (question) => question.selected_answer
    );

    if (allSelected) {
      questionData.map((quest) => {
        if (quest.correct_answer === quest.selected_answer) {
          setScore((prevSc) => prevSc + 1);
        }
      });
    } else {
      alert("Please select all the answers");
    }
    setGameEnd(true);
  }

  const StartGame = () => {
    setMainScreen(false);
    setScore(0);
  };
  function restart() {
    setMainScreen(true);
    setScore(0);
    setGameEnd(false);
    setQuestionData([]);

    fetchHook();
  }
  function fetchHook() {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=15&difficulty=easy&type=multiple"
    )
      .then((res) => res.json())
      .then((data) =>
        setQuestionData(
          data.results.map((result) => ({
            question: result.question,
            correct_answer: result.correct_answer,
            incorrect_answers: shuffle([
              ...result.incorrect_answers,
              result.correct_answer,
            ]),
          }))
        )
      );
  }
  //Hooks
  useEffect(() => {
    fetchHook();
  }, []);

  //Render
  return (
    <div>
      {mainScreen ? (
        <Main gamePusher={StartGame} />
      ) : (
        <Quizzes
          matchAnswer={matchAnswer}
          questionData={questionData}
          checkAnswerSelected={checkAnswerSelected}
          gameEnd={gameEnd}
          score={score}
          restart={restart}
        />
      )}
    </div>
  );
}
