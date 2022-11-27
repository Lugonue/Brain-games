import { getRandom, inputName } from "./index.js";
import readlineSync from 'readline-sync';

const userName = inputName();
console.log('Find the greatest common divisor of given numbers.');
let countOfQuestion = 0;
export const gameGdc = (firstItem, secondItem) => {
    const a = getRandom(firstItem);
    const b = getRandom(secondItem);
    const correctAnswer = greatestDevisor(a, b);
    console.log(`Qestion: ${a} ${b}`);
    var userAnswer = readlineSync.question(`Your answer: `);
    console.log(`Youre answer: ${userAnswer}`);
    if (correctAnswer == userAnswer) {
        console.log('Correct!');
        countOfQuestion += 1;
        if (countOfQuestion === 3) {
            return console.log(`Congratulations, ${userName}!`)
        }
        return gameGdc(firstItem, secondItem);
    } else {
        console.log(`Qestion: ${a} ${b}`);
        console.log(`Youre answer: ${userAnswer}`);
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${userName}!`)

    }

    
}

const greatestDevisor = (a, b) => {
    let aDivisor = [];
    let bDivisor = [];
    let stackDivisors = [];
    for (let i = 1; i <= a; i += 1) {
        if (a % i === 0) {
            aDivisor.push(i);
        }
    }
    for (let i = 1; i <= b; i += 1) {
        if (b % i === 0) {
            bDivisor.push(i);
        }
    }
    if (aDivisor.length < bDivisor.length) {
        for (let i = 0; i < aDivisor.length; i += 1) {
            if (bDivisor.includes(aDivisor[i])) {
                stackDivisors.push(aDivisor[i]);
            }
        }
    } else {
        for (let i = 0; i < bDivisor.length; i += 1) {
            if (aDivisor.includes(bDivisor[i])) {
                stackDivisors.push(bDivisor[i]);
            }
        }
    }
    return stackDivisors.length === 0 ? 0 : Math.max(...stackDivisors);
}