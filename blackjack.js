/**
 * Black Jack 
 */

let firstCard = getRandomCard()
let secondCard = getRandomCard()
let Cards = [firstCard, secondCard]
let sum = Cards[0] + Cards[1]
let isAlive = false
let message = ""

let messageEl = document.getElementById("message")
let mySum = document.getElementById("sum")
let myCards = document.getElementById("cards")

function startGame() {
    if (sum <= 21) {
        renderGame()
    } else {
        firstCard = getRandomCard()
        secondCard = getRandomCard()
        Cards = [firstCard, secondCard]
        sum = Cards[0] + Cards[1]
    }
    
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
    myCards.textContent = "Cards: "

    for (let i = 0; i < Cards.length; i++){
        myCards.textContent += Cards[i] + " "
    }
}

function newGame() {
    let thirdCard = getRandomCard()
    Cards.push(thirdCard)
    for (let i = 2; i < Cards.length; i++){
        sum += Cards[i]
    }
    // sum += Cards[2]
    renderGame()
}

function getRandomCard() {
    // return Math.floor(Math.random() * 12) + 1
    return Math.ceil(Math.random() * 12) + 1
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

// let myarray = ["one", "two", "three", "four", 4, 5, 6, 7, 9]

// for (let i = 0; i <= myarray.length; i++){
//     console.log(i)
//     console.log(myarray[i])
// }

/**
 * more on control loops implemenation 
 */

// theCards = [1, 2, 3]

// let i = 0

// do {
//     sum += theCards[i]
//     console.log(sum)
//     i++
// }while(i < theCards.length)

// let thsum = 0
// for (let i = 0; i < theCards.length; i++){
//     thsum += theCards[i]
// }

// console.log(thsum)
// console.log(typeof(thsum))

