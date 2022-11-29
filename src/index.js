import readlineSync from 'readline-sync';

export const inputName = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const getRandomOperator = (items) => {
  const itemOfQuestion = items[Math.floor(Math.random() * items.length)];
  return itemOfQuestion;
};

export const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const testQuestion = (min, max) => {
  const question = getRandom(min, max);
  console.log(`Question: ${question}`);
  return question;
};
export const printAnswer = () => {
  const userAnswer = readlineSync.question('Your answer: ');
  console.log(`Youre answer: ${userAnswer}`);
  return userAnswer;
};
export const testAnswer = (userName, question, correctAnswer, userAnswer, countOfQuestion) => {
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    if (countOfQuestion === 2) {
      return console.log(`Congratulations, ${userName}!`);
    }
    return 1;
  }
  console.log(`Question: ${question}\nYoure answer: ${userAnswer}\n'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
  return 3;
};
