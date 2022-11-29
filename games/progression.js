import readlineSync from 'readline-sync';
import { getRandom, inputName, testAnswer } from '../src/index.js';
import makeProgression from '../src/makeProgression.js';

const userName = inputName();
let countOfQuestion = 0;
console.log('What number is missing in the progression?');
const gameProgression = () => {
  while (countOfQuestion < 3) {
    const startProgression = getRandom(20);
    const emptyElementId = getRandom(9);
    let progr = makeProgression(startProgression);
    const correctAnswer = progr[emptyElementId];
    progr[emptyElementId] = '..';
    progr = progr.join(' ');
    console.log(`Question: ${progr}`);
    const userAnswer = Number(readlineSync.question('Your answer: '));
    console.log(`Youre answer: ${userAnswer}`);
    countOfQuestion += testAnswer(userAnswer, correctAnswer, progr, userName, countOfQuestion);
  }
};

export default gameProgression;
