import readlineSync from 'readline-sync';
import greatestDevisor from '../src/greatestDevisor.js';
import { getRandom, inputName, testAnswer } from '../src/index.js';

const userName = inputName();
console.log('Find the greatest common divisor of given numbers.');
let countOfQuestion = 0;
const gameGdc = (firstItem, secondItem) => {
  while (countOfQuestion < 3) {
    const num1 = getRandom(firstItem);
    const num2 = getRandom(secondItem);
    const question = `${num1} ${num2}`;
    const correctAnswer = greatestDevisor(num1, num2);
    console.log(`Question: ${question}`);
    const userAnswer = Number(readlineSync.question('Your answer: '));
    console.log(`Youre answer: ${userAnswer}`);
    countOfQuestion += testAnswer(userAnswer, correctAnswer, question, userName, countOfQuestion);
  }
};

export default gameGdc;
