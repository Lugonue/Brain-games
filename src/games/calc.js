import runEngine from '../index.js';
import getRandom from '../utils.js';

const resultCalculation = (a, b, c) => {
  switch (c) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default: return NaN;
  }
};

const makeRound = () => {
  const operators = ['+', '-', '*'];
  const a = getRandom(1, 10);
  const b = getRandom(1, 10);
  const c = operators[Math.floor(Math.random() * operators.length)];
  const question = `${a} ${c} ${b}`;
  const correctAnswer = String(resultCalculation(a, b, c));
  return [question, correctAnswer];
};

export default () => {
  const rules = 'What is the result of the expression?';
  runEngine(rules, makeRound);
};
