/**
 * challange implementation
 */

let num1 = Math.floor(Math.random() * 11) + 1

let num2 = Math.floor(Math.random() * 2)

let sum = num1 + num2

console.log(sum)

/**
 * club assignment
 */

let age = 21

if (age < 21) {
    console.log("You cannot enter for now")
} else {
    console.log("Welcome")
}

switch (age) {
    case 21: console.log("come home")
        break
    default: console.log("you are welcome")
        break
}

/**
 * The age challange 
 */

let myage = 99

if (myage <= 99) {
    console.log("You are not eligible too young for this")
} else if (myage == 100) {
    console.log("You are eligble")
} else {
    console.log("You have already gotten one")
}

switch (myage) {
    case 0 < 100:
        console.log("Toma toma toma")
        break
    case 100:
        console.log("toma is eligible")
        break
    default:
        console.log("toma not eleigble")
        break
}

myage < 100 ? console.log("Man you are Not eligible")
    : myage == 100 ? console.log("Man is eligble")
        : console.log("Man you got one already")
    
/**
 * next hack implement
 */

let firstCard = 10
let secondCard = 7
let mySum = firstCard + secondCard + 0
let hasBlackJack = false
let isAlive = true
let message = ""

if (mySum <= 20) {
    message = "Do you want to draw another card"
    isAlive = false
} else if (sum === 21) {
    message = "You have a black jack"
    isAlive = true
} else {
    message = "You are out of the game"
    isAlive = false
}

// when statemen
switch (mySum) {
    case 0: message = "Do you want to draw another card"
        isAlive = false
        break
    case 21: message = "You have a black jack"
        isAlive = true
        break
    default: message = "You are out of the game"
        isAlive = false
        break
}

// tenary operator implemenation

mySum <= 20 ? console.log("Do you want to draw another card") : mySum === 21 ? console.log("You have a black jack") : console.log("you are out of the game")

console.log(message)
console.log(isAlive)