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

function save() {
    console.log(count)
}