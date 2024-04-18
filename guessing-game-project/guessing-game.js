const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

let secretNumber = 5

const checkGuess = (num) => {
    if(num > secretNumber) {
        console.log('Too High.')
        return false
    }
    if(num < secretNumber) {
        console.log('Too Low.')
        return false
    }
    if(num == Number(secretNumber)) {
        console.log('You Win!')
        return true
    }
}

const askGuess = () => {
    rl.question("Enter a guess: ", (answer) => {
        if(checkGuess(answer)) {
        rl.close()
        } else {
            askGuess()
        }
    })
}



askGuess()
