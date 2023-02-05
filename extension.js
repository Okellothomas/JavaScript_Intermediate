
/**
 * Add the event listiner
 */
let leads = ["One", "www.google.com"]
let myOpen = document.getElementById("open")
let mybutton = document.getElementById("save")
const ulEl = document.getElementById("ul")

mybutton.addEventListener("click", function () {
    leads.push(myOpen.value)
    console.log(leads)
})

// log out the leads
let listItems = ""

let i = 0
do {
    listItems += "<li> " + leads[i] + "</li>"
    i++
} while (i < leads.length)

ulEl.innerHTML = listItems

/**
 * Use the forloop and the other implementation
 */

for (let i = 0; i < leads.length; i++){
    const li = document.createElement("li")
    li.textContent += leads[i]
    ulEl.append(li)
}

// inner html challange

// const buy = document.querySelector("#buy")
// const thank = document.getElementById("buy")

// buy.innerHTML = "<button>" + "Buy!" + "</button>"

// buy.addEventListener("click", function () {
//     thank.innerHTML += "<p>" + "thank you so much" + "</p>"
// })


