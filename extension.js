/**
 * code implementation
 */

function Myave() {
    console.log("button Clicked")
}

/**
 * Add the event listiner
 */

let mybutton = document.getElementById("save")

mybutton.addEventListener("click", function () {
    console.log("Just got clicked")
})

/**
 * Event listner example
 */

let myOpen = document.getElementById("open")

myOpen.addEventListener("click", function () {
    console.log("I want to open box when clicked!")
})