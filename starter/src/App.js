import React, { Component, useState } from "react";
import { QUESTIONS } from './shared/questions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        questions: QUESTIONS,
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className=""> Current Score:  </div>
        < RenderQuiz questions={this.state.questions}/>
      </React.Fragment>
    )
  }
}

function RenderQuiz({questions}) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const handleAnsClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion <questions.length) {
    setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    };
  }
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  return (
    <div className="app">
      {/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}.
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">{questions[currentQuestion].questionText}</div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button onClick={() => handleAnsClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}


export default App;