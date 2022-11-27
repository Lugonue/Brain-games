import readlineSync from 'readline-sync';
import { getRandom, inputName } from './index.js';

const calcCalc = (a,b,c) => {
    switch (c) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
    }
}

const userName = inputName();
console.log('What is the result of the expression?');
let operator = ['+', '-', '*'];
let countOfQuestion = 0;
export const expressionCalc = () => {
    const a = getRandom(10);
    const b = getRandom(10);
    const c = getRandom(operator);
    const caseOfQuestion = `${a} ${c} ${b}`;
    const resultOfCalc = calcCalc(a,b,c);
    console.log(`Question: ${caseOfQuestion}`);
    var userAnswer = readlineSync.question(`Your answer: `);
    console.log(`Youre answer: ${userAnswer}`)
    if (resultOfCalc == userAnswer) {
        console.log('Correct!');
        countOfQuestion += 1;
        if (countOfQuestion === 3) {
            return console.log(`Congratulations, ${userName}!`);
        }
        return expressionCalc();
    } else {
        return console.log(`Question: ${caseOfQuestion}
        Youre answer: ${userAnswer}
        '${userAnswer}' is wrong answer ;(. Correct answer was '${resultOfCalc}'.
        let's try again, ${userName}!`);
    }

}