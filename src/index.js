import readlineSync from 'readline-sync';

export const inputName = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const getRandom = (items) => {
  if (Array.isArray(items)) {
    const itemOfQuestion = items[Math.floor(Math.random() * items.length)];
    return itemOfQuestion;
  }
  if (Number.isInteger(items)) {
    return Math.floor(Math.random() * items);
  }
  return NaN;
};

export const testAnswer = (userAnswer, correctAnswer, question, userName, countOfQuestion) => {
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
