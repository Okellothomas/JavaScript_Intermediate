
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

let i = 0
do {
    ulEl.innerHTML += "<li> " + leads[i] + "</li>"
    i++
}while(i < leads.length)


