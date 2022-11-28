import readlineSync from 'readline-sync';
import greatestDevisor from '../src/greatestDevisor.js';
import { getRandom, inputName } from '../src/index.js';

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
