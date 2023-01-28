/**
 * Black Jack 
 */

let firstCard = 10
let secondCard = 11
let Cards = [firstCard, secondCard]
let sum = Cards[0] + Cards[1]
let isAlive = false
let message = ""

let messageEl = document.getElementById("message")
let mySum = document.getElementById("sum")
let myCards = document.getElementById("cards")

function startGame() {
    renderGame()
}

function renderGame() {
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
    myCards.textContent = "Cards: " + Cards[0] + Cards[1]
}

function newGame() {
    let thirdCard = 4;
    Cards.push(thirdCard)
    sum += Cards[2]
    renderGame()
}

// arrays practice

// let myArrays = [1, 3, 4]

// let the = myArrays.pop()


// console.log(the)

/**
 * loops practice
 */

// let i = 10

// do {
//     console.log(i)
//     i+=10
// }while(i <= 100)

// the while loop

// let i = 5

// while (i <= 25) {
//     console.log(i)
//     i+=5
// }

// the forloop with elements of an array

let myarray = ["one", "two", "three", "four", 4, 5, 6, 7, 9]

for (let i = 0; i <= myarray.length; i++){
    console.log(i)
    console.log(myarray[i])
}


