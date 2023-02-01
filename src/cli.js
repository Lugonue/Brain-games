import readlineSync from 'readline-sync';

const makeWelcome = () => {
  console.log('Welcome to the Brain Games!');
  const inputUserName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${inputUserName}!`);
  return inputUserName;
};

export default makeWelcome;
