import React from 'react'
import style from './Quiz.module.css'
import  { useState } from 'react';

function Quiz() {
  
  const questions = [{
    questionsText: "how many planets are there in the solar system?",
    answerOptions: [
        { answerText: "8", isCorrect: true },
        { answerText: "10", isCorrect: false },
        { answerText: "9", isCorrect: false },
        { answerText: "12", isCorrect: false },  
    ],

 },
 {
    questionsText: "Who invented Reactjs?",
    answerOptions: [
        { answerText: "Douglas Crockford", isCorrect: false },
        { answerText: "Sheryl Sandberg", isCorrect: false },
        { answerText: "Brendan Eich", isCorrect: false },
        { answerText: "Jordan Walke", isCorrect: true },  
    ],

 },
 {
    questionsText: "Which state leads in sweet potato production across India?",
    answerOptions: [
        { answerText: "Andhra Pradesh", isCorrect: false },
        { answerText: "Odisha", isCorrect: true },
        { answerText: "Gujarat", isCorrect: false },
        { answerText: "Karnataka", isCorrect: false },  
    ],

 },
 {
    questionsText: "Which country is set to build its own space station by 2030?",
    answerOptions: [
        { answerText: "India", isCorrect: false},
        { answerText: "China", isCorrect: false },
        { answerText: "Russia", isCorrect: true },
        { answerText: "Japan", isCorrect: false },  
    ],

 },
];
  
    
  const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<br/>
						<div className='question-text'>{questions[currentQuestion].questionsText}</div>
						</div>
						<br/>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
   
  
}

export default Quiz
