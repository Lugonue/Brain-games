import readlineSync from 'readline-sync';
import { getRandom, inputName, testAnswer } from '../src/index.js';
import isEven from '../src/isEven.js';

const userName = inputName();
console.log('Answer "yes" if the number is even, otherwise answer "no"');
let countOfQuestion = 0;
const questionAboutEven = () => {
  while (countOfQuestion < 3) {
    const question = getRandom(100);
    const correctAnswer = isEven(question);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    console.log(`Youre answer: ${userAnswer}`);
    countOfQuestion += testAnswer(userAnswer, correctAnswer, question, userName, countOfQuestion);
  }
};

export default questionAboutEven;
