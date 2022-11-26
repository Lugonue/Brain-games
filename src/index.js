import readlineSync from 'readline-sync';

export const inputName = () => {
    console.log("Welcome to the Brain Games!");
    var userName = readlineSync.question('May I have your name? ');
    console.log( 'Hello, ' + userName + '!' );
    return userName;
}

export const getRandom = (items) => {
    if (Array.isArray(items)) {
        var item = items[Math.floor(Math.random()*items.length)];
        return item;
    }
    if (Number.isInteger(items)) {
        var item = Math.floor(Math.random()*items);
        return item;
    }
}

