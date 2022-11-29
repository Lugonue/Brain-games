import readlineSync from 'readline-sync';
import { getRandom, inputName, testAnswer } from '../src/index.js';
import resultCalculation from '../src/resultCalculation.js';

const userName = inputName();
console.log('What is the result of the expression?');
const operator = ['+', '-', '*'];
let countOfQuestion = 0;
const gameCalc = () => {
  while (countOfQuestion < 3) {
    const a = getRandom(10);
    const b = getRandom(10);
    const c = getRandom(operator);
    const question = `${a} ${c} ${b}`;
    const correctAnswer = resultCalculation(a, b, c);
    console.log(`Question: ${question}`);
    const userAnswer = Number(readlineSync.question('Your answer: '));
    console.log(`Youre answer: ${userAnswer}`);
    countOfQuestion += testAnswer(userAnswer, correctAnswer, question, userName, countOfQuestion);
  }
};

export default gameCalc;
