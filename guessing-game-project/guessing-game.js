const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

let secretNumber = randomInRange(0, 100)

function randomInRange(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  }
//   console.log(secretNumber)
//   console.log(secretNumber)
//   console.log(secretNumber)
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



// askGuess()

const askRange = () => {
    rl.question('Enter Minimum Number: ', (answer1) => {
        rl.question('Enter Maximum Number: ', (answer2) => {
            console.log("I'm thinking of a number between " + answer1 + ' and ' + answer2 + '...')
            answer1 = Number(answer1)
            answer2 = Number(answer2)
            secretNumber = randomInRange(answer1, answer2)
        })
    })
}

askRange()
