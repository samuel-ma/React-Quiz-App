import React from 'react';
import {AnswerObject} from "../App";

type Props = {
  question: string;
  answers: string[];
  callBack: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNumber: number;
  totalQuestion: number;
}

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callBack,
  userAnswer,
  questionNumber,
  totalQuestion,
}) => (
  <div>
    <p className='number'>
      Question: {questionNumber} / {totalQuestion}
    </p>

    <p dangerouslySetInnerHTML={{__html: question}}>
      <div>
        {answers.map(answer => (
          <div key={answer}>
            <button title='Answer' type='button' disabled={userAnswer ? true : false} value={answer} onClick={callBack} >
              <span dangerouslySetInnerHTML={{__html: answer}} />
            </button>
          </div>
        ))}
      </div>
    </p>
  </div>
);

export default QuestionCard