
/**
 * Add the event listiner
 */
let leads = []
let myOpen = document.getElementById("open")
let mybutton = document.getElementById("save")

mybutton.addEventListener("click", function () {
    leads.push(myOpen.value)
    console.log(leads)
})

// log out the leads





