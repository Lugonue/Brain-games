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
    const itemOfQuestion = Math.floor(Math.random() * items);
    return itemOfQuestion === 0 ? itemOfQuestion + 1 : itemOfQuestion;
  }
  return NaN;
};
