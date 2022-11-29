import {
  inputName, printAnswer, testAnswer, testQuestion,
} from '../src/index.js';
import isPrimary from '../src/isPrimary.js';

const userName = inputName();
let countOfQuestion = 0;
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
const gamePrime = () => {
  while (countOfQuestion < 3) {
    const question = testQuestion(50);
    const correctAnswer = isPrimary(question);
    const userAnswer = printAnswer();
    countOfQuestion += testAnswer(userAnswer, correctAnswer, question, userName, countOfQuestion);
  }
};

export default gamePrime;
