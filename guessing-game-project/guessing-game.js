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
    if(num === Number(secretNumber)) {
        console.log('Correct!')
        return true
    }
}

const askGuess = () => {
    rl.question("Enter a guess: ", (answer) => {
        checkGuess(answer)
        rl.close()
    })
}

askGuess(29)
askGuess(36)
askGuess(8)
askGuess(1)
askGuess(2)
askGuess(5)
