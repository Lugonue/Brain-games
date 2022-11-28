import readlineSync from 'readline-sync';
import { getRandom, inputName } from '../src/index.js';
import isPrimary from '../src/isPrimary.js';

const userName = inputName();
let countOfQuestion = 0;
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
const gamePrime = () => {
  const num1 = getRandom(50);
  const correctAnswer = isPrimary(num1);
  console.log(`Question: ${num1}`);
  const userAnswer = readlineSync.question('Your answer: ');
  console.log(`Youre answer: ${userAnswer}`);
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    countOfQuestion += 1;
    if (countOfQuestion === 3) {
      return console.log(`Congratulations, ${userName}!`);
    }
    return gamePrime();
  }
  return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
        Let's try again, ${userName}!`);
};

export default gamePrime;
