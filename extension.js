
/**
 * Add the event listiner
 */
let leads = []
let myOpen = document.getElementById("open")
let mybutton = document.getElementById("save")
const ulEl = document.getElementById("ul")

mybutton.addEventListener("click", function () {
    leads.push(myOpen.value)
    myOpen.value = ""
    render()
})


function render() {
    // log out the leads
    let listItems = ""

    let i = 0
    do {
        listItems += "<li><a target='_blank' href='" + leads[i] + "'>" + leads[i] + "</a></li>"
        // Working with template strings
        myListItems = `<li>
                            <a target = '_blank' href ='${leads[i]}'>
                                ${leads[i]}
                            </a>
                       </li>`
        i++
    } while (i < leads.length)

    ulEl.innerHTML = myListItems
}


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

const recipient = "James"

const email = `
            Hey ${recipient} how is it going? Cheers peer
            `
console.log(email)