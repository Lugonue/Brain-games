import {
  inputName, printAnswer, testAnswer, testQuestion,
} from '../src/index.js';
import isPrimary from '../src/isPrimary.js';

const gamePrime = () => {
  const userName = inputName();
  let countOfQuestion = 0;
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  while (countOfQuestion < 3) {
    const question = testQuestion(50);
    const correct = isPrimary(question);
    // const userAnswer = printAnswer();
    countOfQuestion += testAnswer(userName, question, correct, printAnswer(), countOfQuestion);
  }
};

export default gamePrime;
