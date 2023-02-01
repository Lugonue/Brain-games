import runEngine from '../index.js';
import getRandom from '../utils.js';

const makeProgression = () => {
  const firstNumberProgression = getRandom(1, 100);
  const progression = [];
  for (let i = firstNumberProgression; i <= firstNumberProgression + 9; i += 1) {
    progression.push(i);
  }
  return progression;
};

const makeRound = () => {
  const index = getRandom(1, 9);
  const progression = makeProgression();
  const correctAnswer = String(progression[index]);
  progression[index] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

export default () => {
  const rules = 'What number is missing in the progression?';
  runEngine(rules, makeRound);
};
