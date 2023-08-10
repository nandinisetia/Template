import React, { createContext, useContext, useState } from 'react';
import {quiz} from '../data/quiz.js'
import '../cssFiles/quiz.css'
import { useNavigate } from 'react-router-dom';
const ScoreContext = createContext();


export default function Quiz() {
    const navigate = useNavigate();
    const charts = () => {
        navigate("/dashboard");
      };
    const [activeQuestion, setActiveQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [Topic,setTopic]=useState(0);
  const [showResult, setShowResult] = useState(false)
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
  const [result, setResult] = useState({
    scoreBudget: 0,
    scoreInvest: 0,
    scoreSave: 0,
    scoreDebt:0,
    scoreRetire:0,
  })

  const { questions } = quiz
  const { question, choices, correctAnswer,topic,points } = questions[activeQuestion]

  
const onClickNext = () => {
    setSelectedAnswerIndex(null);
  
    // Create an object to map topics to their corresponding result state properties
    const topicToResultProperty = {
      'Budgeting': 'scoreBudget',
      'Investing': 'scoreInvest',
      'Saving': 'scoreSave',
      'Debt Managemnet': 'scoreDebt',
      'Retirement Planning': 'scoreRetire',
    };
  
    // Update the result state based on the selected answer's correctness
    setResult((prev) => {
      const topicProperty = topicToResultProperty[topic];
  
      if (selectedAnswer) {
        return {
          ...prev,
          [topicProperty]: prev[topicProperty] + points,
          correctAnswers: prev.correctAnswers + 1,
        };
      } else {
        return {
          ...prev,
          [topicProperty]: prev[topicProperty] + 0,
        };
      }
    });
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1)
    } else {
      setActiveQuestion(0)
      setShowResult(true)
    }
  }

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index)
    if (answer === correctAnswer) {
      setSelectedAnswer(true)
    } else {
      setSelectedAnswer(false)
    }
  }

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`)

  return (
    <div className='quiz h-screen'>
    <div className="quiz-container max-h-[525px] min-h-[400px]">
      {!showResult ? (
        <div>
          <div>
            <span className="active-question-no">{addLeadingZero(activeQuestion + 1)}</span>
            <span className="total-question">/{addLeadingZero(questions.length)}</span>
          </div>
          <h2 className='font-sm font-semibold'>{question}</h2>
          <ul>
            {choices.map((answer, index) => (
              <li
                onClick={() => onAnswerSelected(answer, index)}
                key={answer}
                className={selectedAnswerIndex === index ? 'selected-answer' : null}>
                {answer}
              </li>
            ))}
          </ul>
          <div className="flex-right">
            <button onClick={onClickNext} disabled={selectedAnswerIndex === null}>
              {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        </div>
      ) : (
        <div className="result">
          <h3>Result</h3>
  <p>
    Budget Score: {result.scoreBudget}
  </p>
  <p>
    Invest Score: {result.scoreInvest}
  </p>
  <p>
    Save Score: {result.scoreSave}
  </p>
  <p>
    Debt Score: {result.scoreDebt}
  </p>
  <p>
    Retire Score: {result.scoreRetire}
  </p>
</div>
)}
    </div>
    </div>
  )
    }
