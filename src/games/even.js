import runEngine from '../index.js';
import getRandom from '../utils.js';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const makeRound = () => {
  const question = getRandom(0, 100);
  const correctAnswer = isEven(question);
  return [question, correctAnswer];
};

export default () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no"';
  runEngine(rules, makeRound);
};
