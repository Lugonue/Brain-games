import readlineSync from 'readline-sync';
import makeWelcome from './cli.js';

const runEngine = (rules, makeRound) => {
  const userName = makeWelcome();
  console.log(rules);
  for (let i = 0; i < 3; i += 1) {
    const roundData = makeRound();
    const question = roundData[0];
    const correctAnswer = roundData[1];
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    console.log(`Youre answer: ${userAnswer}`);
    if (userAnswer !== correctAnswer) {
      console.log(`Question: ${question}\nYoure answer: ${userAnswer}\n'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runEngine;
