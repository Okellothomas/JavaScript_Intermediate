/**
 * Black Jack 
 */

let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let isAlive = false
let message = ""

let messageEl = document.getElementById("message")
let mySum = document.getElementById("sum")
let myCards = document.getElementById("cards")

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
    messageEl.textContent = message
    mySum.textContent = "Sum: " + sum
    myCards.textContent = "Cards: " + firstCard + secondCard
}

function newGame() {
    console.log("Render a new Game Please!")
}


