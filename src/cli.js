import readlineSync from 'readline-sync';

console.log("Welcome to the Brain Games!");
export const userName = () =>  {
    
    var inputUserName = readlineSync.question('May I have your name? ');
    return console.log('Hello, ' + inputUserName + '!');
} 
