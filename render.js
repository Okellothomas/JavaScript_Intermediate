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


/**
 * More implementation on renderin 
 */

let content = document.getElementById("title").textContent = "The Render Pages!"

let sentence = [ "This ", "is ", "my ", "render ", "page ", "Welcome ", "Home ", "nigaa ", "!" ]

let mySentence = document.getElementById("content")

for (let i = 0; i < sentence.length; i++){

    mySentence.textContent += sentence[i]

}




