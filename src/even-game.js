import readlineSync from 'readline-sync';
import { getRandom, inputName } from './index.js';

const userName = inputName();
console.log('Answer "yes" if the number is even, otherwise answer "no"');
let countOfQuestion = 0;
export const questionAboutEven = () => {
    const caseOfQuestion = getRandom(100);
    console.log(`Question: ${caseOfQuestion}`);
    var userAnswer = readlineSync.question(`Your answer: `);
    console.log(`Youre answer: ${userAnswer}`)
    if (caseOfQuestion % 2 === 0) {
        if (userAnswer === 'yes') {
            countOfQuestion += 1;
            console.log(`Correct!`);
            if (countOfQuestion === 3) {
                return console.log(`Congratulations, ${userName}!`);
            }
            return questionAboutEven();
        } else {
            return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'yes'.
            Let's try again, ${userName}!`);
        }
    } else {
        if (userAnswer === 'no') {
            countOfQuestion += 1;
            console.log(`Correct!`);
            if (countOfQuestion === 3) {
                return `Congratulations, ${userName}!`
            }
            return questionAboutEven();
        } else {
            return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'no'.
            Let's try again, ${userName}!`)
        }
    }
}  