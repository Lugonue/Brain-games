import runEngine from '../index.js';
import getRandom from '../utils.js';

const greatestDivisor = (num1, num2) => {
  const commonDevisors = [];
  for (let i = 0; i <= num1; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) commonDevisors.push(i);
  }

  return String(Math.max(...commonDevisors));
};

const makeRound = () => {
  const num1 = getRandom(0, 30);
  const num2 = getRandom(0, 30);
  const question = `${num1} ${num2}`;
  const correctAnswer = greatestDivisor(num1, num2);
  return [question, correctAnswer];
};

export default () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  runEngine(rules, makeRound);
};
