import readlineSync from 'readline-sync';
import { getRandom, inputName, testAnswer } from '../src/index.js';
import isPrimary from '../src/isPrimary.js';

const userName = inputName();
let countOfQuestion = 0;
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
const gamePrime = () => {
  while (countOfQuestion < 3) {
    const question = getRandom(50);
    const correctAnswer = isPrimary(question);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    console.log(`Youre answer: ${userAnswer}`);
    countOfQuestion += testAnswer(userAnswer, correctAnswer, question, userName, countOfQuestion);
  }
};

export default gamePrime;
