import { getRandom, inputName } from "./index.js";
import readlineSync from 'readline-sync';

const userName = inputName();
let countOfQuestion = 0;
export const gameProgression = () => {
    const startProgression = getRandom(20);
    const emptyElementId = getRandom(9);
    let progression = makeProgression(startProgression);
    const emptyElement = progression[emptyElementId];
    progression[emptyElementId] = '..';
    progression = progression.join(' '); 
    console.log('What number is missing in the progression?');
    console.log(`Qestion: ${progression}`);
    var userAnswer = readlineSync.question(`Your answer: `);
    console.log(`Youre answer: ${userAnswer}`);
        if (userAnswer == emptyElement) {
        console.log('Correct!');
        countOfQuestion += 1;
        if (countOfQuestion === 3) {
            return console.log(`Congratulations, ${userName}!`)
        }
        return gameProgression();
    } else {
        console.log(`Qestion: ${progression}`);
        console.log(`Youre answer: ${userAnswer}`);
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${emptyElement}'.`);
        console.log(`Let's try again, ${userName}!`)
    }
    
}

const makeProgression = (firstItemProgression) => {
    let stackOfProgression = [];
    for (let i = firstItemProgression; i <= firstItemProgression + 9; i += 1) {
        stackOfProgression.push(i);
    }
    return stackOfProgression;
}