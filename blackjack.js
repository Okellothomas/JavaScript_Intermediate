/**
 * Black Jack 
 */

let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let isAlive = false
let message = ""

function startGame() {
   if (sum <= 20) {
    message = "Do you want to draw another card!"
    isAlive = false
} else if (sum === 21) {
    message = "Wow! you have got your black card!"
    isAlive = true
} else {
    message = "You have lost! and you are out of the game"
    isAlive = false
}
    console.log(message)
    console.log(isAlive) 
    
}

startGame()



