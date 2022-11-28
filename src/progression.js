import readlineSync from 'readline-sync';
import { getRandom, inputName } from './index.js';

const makeProgression = (firstItemProgression) => {
  const stackOfProgression = [];
  for (let i = firstItemProgression; i <= firstItemProgression + 9; i += 1) {
    stackOfProgression.push(i);
  }
  return stackOfProgression;
};

const userName = inputName();
let countOfQuestion = 0;
console.log('What number is missing in the progression?');
const gameProgression = () => {
  const startProgression = getRandom(20);
  const emptyElementId = getRandom(9);
  let progression = makeProgression(startProgression);
  const emptyElement = progression[emptyElementId];
  progression[emptyElementId] = '..';
  progression = progression.join(' ');
  console.log(`Question: ${progression}`);
  const userAnswer = readlineSync.question('Your answer: ');
  console.log(`Youre answer: ${userAnswer}`);
  if (Number(userAnswer) === emptyElement) {
    console.log('Correct!');
    countOfQuestion += 1;
    if (countOfQuestion === 3) {
      return console.log(`Congratulations, ${userName}!`);
    }
    return gameProgression();
  }
  return console.log(`Question: ${progression}
    Youre answer: ${userAnswer}
    '${userAnswer}' is wrong answer ;(. Correct answer was '${emptyElement}'.
    Let's try again, ${userName}!`);
};

export default gameProgression;
