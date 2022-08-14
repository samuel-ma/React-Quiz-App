
import QuestionCard from "./components/QuestionCard";


function App() {

  const startTrivia = async() => {

  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    <div className="App">
      <h1>Quiz</h1>
      <button className="start" onClick={startTrivia}>Start</button>
      <p className="score">Score: 0</p>
      <p className="question">Loading Questions...</p>
      <QuestionCard/>
      <button className="next" onClick={nextQuestion}>Next Question</button>
    </div>
  );
}

export default App;
