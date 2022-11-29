import readlineSync from 'readline-sync';
import {
  getRandom, getRandomOperator, inputName, testAnswer,
} from '../src/index.js';
import resultCalculation from '../src/resultCalculation.js';

const userName = inputName();
console.log('What is the result of the expression?');
const operator = ['+', '-', '*'];
let countOfQuestion = 0;
const gameCalc = () => {
  while (countOfQuestion < 3) {
    const a = getRandom(1, 10);
    const b = getRandom(1, 10);
    const c = getRandomOperator(operator);
    const question = `${a} ${c} ${b}`;
    const correctAnswer = resultCalculation(a, b, c);
    console.log(`Question: ${question}`);
    const userAnswer = Number(readlineSync.question('Your answer: '));
    console.log(`Youre answer: ${userAnswer}`);
    countOfQuestion += testAnswer(userName, question, correctAnswer, userAnswer, countOfQuestion);
  }
};

export default gameCalc;
