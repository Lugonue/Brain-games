import {
  inputName, testAnswer, testQuestion, printAnswer,
} from '../src/index.js';
import isEven from '../src/isEven.js';

const gameEven = () => {
  const userName = inputName();
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  let countOfQuestion = 0;
  while (countOfQuestion < 3) {
    const question = testQuestion(1, 100);
    const correct = isEven(question);
    const userAnswer = printAnswer();
    countOfQuestion += testAnswer(userName, question, correct, userAnswer, countOfQuestion);
  }
};

export default gameEven;
