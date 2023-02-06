
/**
 * Add the event listiner
 */
let leads = []
const myOpen = document.getElementById("open")
const mybutton = document.getElementById("save")
const ulEl = document.getElementById("ul")
const deleteBtn = document.getElementById("delete")
const myUrl = document.getElementById("url")


let thLeads = localStorage.getItem("myLeads")
let Storage = JSON.parse(thLeads)

/**
 * more on the truthy values
 */

if (Storage) {
    leads = Storage
    render(leads)
}

const tabs = [
    {url: "https://www.jkuat.ac.ke"}
]

myUrl.addEventListener("click", function () {
    leads.push(tabs[0].url)
    // console.log(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(leads))
    render(leads)
})

function render(args) {
    // log out the leads
    let listItems = ""

    let i = 0
    do {
        listItems += "<li><a target='_blank' href='" + args[i] + "'>" + args[i] + "</a></li>"
        // Working with template strings
        myListItems = `<li>
                            <a target = '_blank' href ='${args[i]}'>
                                ${args[i]}
                            </a>
                       </li>`
        i++
    } while (i < args.length)

    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("click", function () {
    localStorage.clear()
    leads = []
    render(leads)
    alert("Leads deleted sucessfully! please refresh the page and continue")
})

mybutton.addEventListener("click", function () {
    leads.push(myOpen.value)
    myOpen.value = ""
    
    localStorage.setItem("myLeads", JSON.stringify(leads))
    render(leads)

    console.log(localStorage.getItem("myLeads"))
})


/**
 * Use the forloop and the other implementation
 */

// for (let i = 0; i < leads.length; i++){
//     const li = document.createElement("li")
//     li.textContent += leads[i]
//     ulEl.append(li)
// }

// inner html challange

// const buy = document.querySelector("#buy")
// const thank = document.getElementById("buy")

// buy.innerHTML = "<button>" + "Buy!" + "</button>"

// buy.addEventListener("click", function () {
//     thank.innerHTML += "<p>" + "thank you so much" + "</p>"
// })

/**
 * string laterals and templates
 */

// const recipient = "James"
// const sender = "Okello"

// const email = `
//             Hey ${recipient} how is it going? Cheers ${sender}
//             `
// console.log(email)

/**
 * Function parameters
 */ 