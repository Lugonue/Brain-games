import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = () => {
  const inputUserName = readlineSync.question('May I have your name? ');
  return console.log(`Hello, ${inputUserName}!`);
};

export default userName;
