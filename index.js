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

