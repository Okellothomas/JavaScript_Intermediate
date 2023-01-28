/**
 * Start the implementations 
 */
let count = 0

var myCount = document.getElementById("counter")

function add() {
    myCount.innerHTML = count ++
}

function sub() {
    myCount.innerHTML = count --
}

/**
 * the save button function
 */



let mySave = document.getElementById("savedata")

function save() {
    let mydata = count + " - "
    mySave.innerHTML += mydata
    mydata = 0
    myCount.textContent = mydata
}

/**
 * control flows implementation
 */



for (let i = 0; i <= 6; i++){
    console.log(i)
}

let i = 0

do {
    console.log("We")
    i++
} while (i < 6)

while (i <= 6) {
    console.log("You")
    i++
}