import readlineSync from 'readline-sync';
import greatestDivisor from '../src/greatestDivisor.js';
import { getRandom, inputName, testAnswer } from '../src/index.js';

const userName = inputName();
console.log('Find the greatest common divisor of given numbers.');
let countOfQuestion = 0;
const gameGdc = (min, max) => {
  while (countOfQuestion < 3) {
    const num1 = getRandom(min, max);
    const num2 = getRandom(min, max);
    const question = `${num1} ${num2}`;
    const correctAnswer = greatestDivisor(num1, num2);
    console.log(`Question: ${question}`);
    const userAnswer = Number(readlineSync.question('Your answer: '));
    console.log(`Youre answer: ${userAnswer}`);
    countOfQuestion += testAnswer(userName, question, correctAnswer, userAnswer, countOfQuestion);
  }
};

export default gameGdc;
