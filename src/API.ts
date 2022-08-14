
import {shuffleArray} from './Utils';

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}

export type QuestionState = Question & {answers: string[]};

export enum Difficulty{
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export const fetchQuestions = async (amount: number, diffculty: Difficulty) => {
  const endpoint = `https://opentdb.com/api.com/php?amount=${amount}&difficulty=${Difficulty}&type=mutliple`
  const data = await (await (await fetch(endpoint)).json());
  return data.results.map((question: Question) => ({
    ...question,
    answer: shuffleArray([...question.incorrect_answers, question.correct_answer])
  }))
};