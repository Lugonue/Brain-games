import readlineSync from 'readline-sync';
import { getRandom, inputName } from './index.js';

const greatestDevisor = (a, b) => {
  const aDivisor = [];
  const bDivisor = [];
  const stackDivisors = [];
  for (let i = 1; i <= a; i += 1) {
    if (a % i === 0) {
      aDivisor.push(i);
    }
  }
  for (let i = 1; i <= b; i += 1) {
    if (b % i === 0) {
      bDivisor.push(i);
    }
  }
  if (aDivisor.length < bDivisor.length) {
    for (let i = 0; i < aDivisor.length; i += 1) {
      if (bDivisor.includes(aDivisor[i])) {
        stackDivisors.push(aDivisor[i]);
      }
    }
  } else {
    for (let i = 0; i < bDivisor.length; i += 1) {
      if (aDivisor.includes(bDivisor[i])) {
        stackDivisors.push(bDivisor[i]);
      }
    }
  }
  return stackDivisors.length === 0 ? 0 : Math.max(...stackDivisors);
};

const userName = inputName();
console.log('Find the greatest common divisor of given numbers.');
let countOfQuestion = 0;
const gameGdc = (firstItem, secondItem) => {
  const num1 = getRandom(firstItem);
  const num2 = getRandom(secondItem);
  const correctAnswer = greatestDevisor(num1, num2);
  console.log(`Question: ${num1} ${num2}`);
  const userAnswer = readlineSync.question('Your answer: ');
  console.log(`Youre answer: ${userAnswer}`);
  if (correctAnswer === Number(userAnswer)) {
    console.log('Correct!');
    countOfQuestion += 1;
    if (countOfQuestion === 3) {
      return console.log(`Congratulations, ${userName}!`);
    }
    return gameGdc(firstItem, secondItem);
  } return console.log(`Qestion: ${num1} ${num2}
        Youre answer: ${userAnswer}
        '${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
        Let's try again, ${userName}!`);
};

export default gameGdc;
