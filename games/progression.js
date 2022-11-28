import readlineSync from 'readline-sync';
import { getRandom, inputName } from '../src/index.js';
import makeProgression from '../src/makeProgression.js';

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
