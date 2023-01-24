/**
 * Code implementation
 */

let num1 = 10
let num2 = 12

let myNum1 = document.getElementById("num1").textContent = num1
let myNum2 = document.getElementById("num2").textContent = num2

let result = document.getElementById("result")


function add() {
    myResult = myNum1 + myNum2
    result.textContent = "Sum: " + myResult
}

function sub() {
    myResult = myNum1 - myNum2
    result.textContent = "Difference: " + myResult
}

function mult() {
    myResult = myNum1 * myNum2
    result.textContent = "Product: " + myResult
}

function div() {
    myResult = myNum1 / myNum2
    result.textContent = "Quotient: " + myResult
}