import readlineSync from 'readline-sync';

export const brainEven = () => {
    console.log("Welcome to the Brain Games!");
    var userName = readlineSync.question('May I have your name? ');
    console.log( 'Hello, ' + userName + '!' );
    console.log('Answer "yes" if the number is even, otherwise answer "no"');
    return userName;
}
const userName = brainEven();
let countOfQuestion = 0;
export const questionAboutEven = () => {
    const numberIntoQuestion = Math.floor(Math.random() * 100);
    console.log(`Qestion: ${numberIntoQuestion}`);
    var userAnswer = readlineSync.question(`Your answer: `);
    console.log(`Youre answer: ${userAnswer}`)
    if (numberIntoQuestion % 2 === 0) {
        if (userAnswer === 'yes') {
            countOfQuestion += 1;
            console.log(`Correct!`);
            if (countOfQuestion === 3) {
                return `Congratulations, ${userName}!`
            }
            return questionAboutEven();
        } else {
            return `'no or somthing' is wrong answer ;(. Correct answer was 'yes'.
            Let's try again, ${userName}!`
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
            return `'yes or somthing' is wrong answer ;(. Correct answer was 'no'.
            Let's try again, ${userName}!`
        }
    }
}  