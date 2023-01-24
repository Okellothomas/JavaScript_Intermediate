/**
 * Implementation of the render.js
 */

let myName = "Okello Thomas"
var greetings = "Hi there, my Name is"

let myGreatings = myName + " " + greetings + "!"

let theGreatings = document.getElementById("welcomeMessage").innerHTML = myGreatings

/**
 * practice implementation
 */


let myError = document.getElementById("error")

function error() {
    myError.innerHTML  = "Something went wrong please try again!"
}

