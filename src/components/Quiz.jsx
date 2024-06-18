import { useState, useCallback } from "react";
import QUESTIONS from '../questions.js';
import finishImg from '../assets/quiz-complete.png';
import Question from "./Question.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const isQuizeFinish = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(answer) {
      setUserAnswers((prevUserAnswers) => {
        return [...prevUserAnswers, answer];
      })
    }, []);

  const handleSkipAnswer = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);



  if (isQuizeFinish) {
    return (
      <div id="summary">
        <img src={finishImg} alt="" />
        <h2>Finish!</h2>
      </div>
    )
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSkipAnswer={handleSkipAnswer}
        onSelectAnswer={handleSelectAnswer}
      />
    </div>

  )
}