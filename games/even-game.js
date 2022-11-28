import readlineSync from 'readline-sync';
import { getRandom, inputName } from '../src/index.js';

const userName = inputName();
console.log('Answer "yes" if the number is even, otherwise answer "no"');
let countOfQuestion = 0;
const questionAboutEven = () => {
  const caseOfQuestion = getRandom(100);
  console.log(`Question: ${caseOfQuestion}`);
  const userAnswer = readlineSync.question('Your answer: ');
  console.log(`Youre answer: ${userAnswer}`);
  if (caseOfQuestion % 2 === 0) {
    if (userAnswer === 'yes') {
      countOfQuestion += 1;
      console.log('Correct!');
      if (countOfQuestion === 3) {
        return console.log(`Congratulations, ${userName}!`);
      }
      return questionAboutEven();
    }
    return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'yes'.
    Let's try again, ${userName}!`);
  }
  if (userAnswer === 'no') {
    countOfQuestion += 1;
    console.log('Correct!');
    if (countOfQuestion === 3) {
      return `Congratulations, ${userName}!`;
    }
    return questionAboutEven();
  }
  return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'no'.
  Let's try again, ${userName}!`);
};

export default questionAboutEven;
