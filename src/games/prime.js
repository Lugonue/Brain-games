import runEngine from '../index.js';
import getRandom from '../utils.js';

const isPrimary = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return 'no';
  }
  return number < 2 ? 'no' : 'yes';
};

const makeRound = () => {
  const question = getRandom(0, 30);
  const correctAnswer = isPrimary(question);
  return [question, correctAnswer];
};

export default () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runEngine(rules, makeRound);
};
