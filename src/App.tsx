
import {useState} from "react";
import QuestionCard from "./components/QuestionCard";
import { fetchQuestions } from "./API";
import { QuestionState, Difficulty } from "./API";
import { GlobalStyle } from "./App.styles";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswers: string;

}

const TOTAL_QUESTIONS = 10;

function App() {

  const [loading, setLoading ] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);


  const startTrivia = async() => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    )

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React. MouseEvent<HTMLButtonElement>) => {
    if (!gameOver){
      const answer = e.currentTarget.value;

      const correct = questions[number].correct_answer === answer;

      if (correct) setScore(prev => prev + 1 );

      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswers: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev,answerObject]);
    }
  }

  const nextQuestion = () => {
    //Move on to the next question
    const nextQuestion = number + 1;

    if (nextQuestion === TOTAL_QUESTIONS){
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  }

  return (
    <>
    <GlobalStyle/>
    <div className="App">
      <h1>REACT QUIZ</h1>
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <button type="button" className="start" onClick={startTrivia}>Start</button>
      ) : null}

      {!gameOver ? <p className="score">Score:  {score}</p> : null }     
      {loading && <p className="question">Loading Questions...</p>}
      {!loading&& !gameOver && (

       <QuestionCard
          questionNumber={number + 1}
          totalQuestion = {TOTAL_QUESTIONS}
          question = {questions[number].question}
          answers = {questions[number].answers}
          userAnswers = {userAnswers ? userAnswers[number] : undefined}
          callBack = {checkAnswer}
      /> 
      )}

      {!gameOver 
      && !loading 
      && userAnswers.length === number + 1 
      && number !== TOTAL_QUESTIONS - 1 ? (
        <button type="button" className="next" onClick={nextQuestion}>Next Question</button>
      ) : null}

    </div>

    </>
  );
}

export default App;
