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

checkGuess(29)
checkGuess(36)
checkGuess(8)
checkGuess(1)
checkGuess(2)
checkGuess(5)
