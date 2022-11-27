import { getRandom, inputName } from "./index.js";
import readlineSync from 'readline-sync';


const userName = inputName();
let countOfQuestion = 0;
console.log(`Answer "yes" if given number is prime. Otherwise answer "no".`);
export const gamePrime = () => {
    const num1 = getRandom(50);
    const correctAnswer = isPrimary(num1);
    console.log(`Qestion: ${num1}`);
    const userAnswer = readlineSync.question(`Your answer: `);
    console.log(`Youre answer: ${userAnswer}`);
    if (userAnswer === correctAnswer) {
        console.log('Correct!');
        countOfQuestion += 1;
        if (countOfQuestion === 3) {
            return console.log(`Congratulations, ${userName}!`)
        }
        return gamePrime();
    } else {
        return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
        Let's try again, ${userName}!`);
    }

}

const isPrimary = (number) => {
    for (let i = 2; i < number; i += 1) {
        if (number % i === 0) {
            return `no`;
        }
    }
    return `yes`;
}