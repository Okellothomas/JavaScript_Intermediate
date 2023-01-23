/**
 * My first pract
 */

var myAge = 20

var dogAge = 7

var humanDogAge = myAge * dogAge

console.log(humanDogAge)

/**
 * Console two
 */

function maxmum(num1 = 90, num2 = 20) {
    let sum = num1 + num2
    let sub = num1 - num2
    console.log(sum)
    if (num1 > num2) {
        return `I love you so much ${sum}`
    } else {
        return `I can talk to you ${sub}`
    }
}
maxmum(200, 203)
console.log(maxmum())

/**
 * my next cast 
 */

let lastCompleted = 0

function incremtals() {
    lastCompleted += 1
    return lastCompleted
}

incremtals()
incremtals()
incremtals()

console.log(incremtals())
