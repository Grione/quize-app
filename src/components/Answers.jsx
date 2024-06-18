import { useRef } from "react";

export default function Answers({ answers, userAnswer, unswerState, onSelect }) {

  const shuffeldedAnswers = useRef();

  if (!shuffeldedAnswers.current) {
    shuffeldedAnswers.current = [...answers];
    shuffeldedAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {
        shuffeldedAnswers.current.map((answer) => {
          const isSelected = userAnswer === answer;

          let cssClass = '';

          if (unswerState === 'answered' && isSelected) {
            cssClass = 'selected';
          }

          if ((unswerState === 'correct' || unswerState === 'wrong') && isSelected) {
            cssClass = unswerState;
          }

          return (
            <li key={answer} className="answer">
              <button
                onClick={() => onSelect(answer)}
                className={cssClass}
                disabled={unswerState !== ''}>
                {answer}
              </button>
            </li>
          )
        })
      }
    </ul>
  )
}