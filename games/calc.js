import readlineSync from 'readline-sync';
import { getRandom, inputName } from '../src/index.js';
import resultCalculation from '../src/resultCalculation.js';

const userName = inputName();
console.log('What is the result of the expression?');
const operator = ['+', '-', '*'];
let countOfQuestion = 0;
const gameCalc = () => {
  const a = getRandom(10);
  const b = getRandom(10);
  const c = getRandom(operator);
  const caseOfQuestion = `${a} ${c} ${b}`;
  const resultOfCalc = resultCalculation(a, b, c);
  console.log(`Question: ${caseOfQuestion}`);
  const userAnswer = readlineSync.question('Your answer: ');
  console.log(`Youre answer: ${userAnswer}`);
  if (resultOfCalc === Number(userAnswer)) {
    console.log('Correct!');
    countOfQuestion += 1;
    if (countOfQuestion === 3) {
      return console.log(`Congratulations, ${userName}!`);
    }
    return gameCalc();
  }
  return console.log(`Question: ${caseOfQuestion}
        Youre answer: ${userAnswer}
        '${userAnswer}' is wrong answer ;(. Correct answer was '${resultOfCalc}'.
        Let's try again, ${userName}!`);
};
export default gameCalc;
