import {
  inputName, testAnswer, testQuestion, printAnswer,
} from '../src/index.js';
import isEven from '../src/isEven.js';

const userName = inputName();
console.log('Answer "yes" if the number is even, otherwise answer "no"');
let countOfQuestion = 0;
const gameEven = () => {
  while (countOfQuestion < 3) {
    const question = testQuestion(100);
    const correctAnswer = isEven(question);
    const userAnswer = printAnswer();
    countOfQuestion += testAnswer(userAnswer, correctAnswer, question, userName, countOfQuestion);
  }
};

export default gameEven;
